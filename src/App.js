import React from "react";
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom'
import FirstPage from "./screens/firstpage";
import SecondPage from "./screens/secondpage";
import ThirdPage from "./screens/thirdpage";
import Map from "./components/GoogleMaps/googlemaps";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


class App extends React.Component {
   

render () {
  return (
    <React.StrictMode>
      <ToastContainer/>
      <Router>
        <Switch>
          <Route exact path={'/'} component = {FirstPage}/>
          <Route exact path={'/checkout'} component={SecondPage}/>
          <Route exact path={'/rental'} component={ThirdPage}/>
          <Route exact path={'/map'} component={Map}/>
        </Switch>
      </Router>
      </React.StrictMode>

  )
}


}
export default App;