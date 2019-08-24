import React from "react";
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom'
import FirstPage from "./screens/firstpage";
import SecondPage from "./screens/secondpage";
import ThirdPage from "./screens/thirdpage";


class App extends React.Component {
   

render () {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path={'/'} component = {FirstPage}/>
          <Route exact path={'/checkout'} component={SecondPage}/>
          <Route exact path={'/rental'} component={ThirdPage}/>
        </Switch>
      </Router>
      </React.StrictMode>

  )
}


}
export default App;