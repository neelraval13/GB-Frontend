import React from "react";
import HomePage from "./components/Home";
import Login from "./components/Login/Login";
import "./styles/global/global.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

const App = () => {
  return (
   <Router>
     <Switch>
       <Route exact path='/'>
            <Login />
       </Route>
       <Route exact path='/home'>
            <HomePage />
       </Route>
     </Switch>
   </Router>
  );
};

export default App;
