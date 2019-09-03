require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const axios = require('axios');
const session = require('express-session')
const dbConnection = require('./server/database')
const MongoStore = require('connect-mongo')(session)
const passport = require('./server/passport');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
let socketId;

io.on('connection', (socket) => {
    socketId = socket.id;
    console.log('client connected', socket.id);
});

const PORT = process.env.PORT || 3001
// Route requires
const routes = require("./server/routes");
const user = require('./server/routes/user')

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: 'fraggle-rock',
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false,
		saveUninitialized: false
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session())


app.post('/api/send-data', (req, res) => {
    // send user data to chinese API endpoint
    res.send({msg: 'request sent'});
});

app.post('/api/receive-data', (req, res) => {
    if (socketId) {
        io.to(socketId).emit('newData', req.body);
    }
    res.send({data: 'hey works!!!!!'});
});

app.post('/get-places', (req, res) => {
	const { lat, lng, radius } = req.body;
	axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=shop&keyword=dunkin donuts&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
		.then(resp => res.send(resp.data.results)).catch(err => res.status(500).send(err));
})

if (process.env.NODE_ENV === 'production') {
	const path = require('path')
	console.log('YOU ARE IN THE PRODUCTION ENV')
	app.use(express.static(path.resolve(__dirname + '/build')))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname + '/build/index.html'))
	})
}

// Routes
app.use('/user', user);
app.use(routes);

// Starting Server 
server.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
});