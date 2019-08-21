import React from "react";
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom'
import FirstPage from "./screens/firstpage";
import SecondPage from "./screens/secondpage";


class App extends React.Component {
   

render () {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path={'/'} component = {FirstPage}/>
          <Route exact path={'/second'} component={SecondPage}/>
        </Switch>
      </Router>
      </React.StrictMode>

  )
}


}
export default App;