import React from "react";
import HomePage from "./components/Home";
import Landing from "./components/Login";
import Profile from "./components/Profile/Profile";
import "./styles/global/global.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/register" component={Landing} />
				<Route path="/home" component={HomePage} />
				<Route path="/profile/uid" component={Profile} />
			</Switch>
		</Router>
	);
};

export default App;
