import React from "react";
import HomePage from "./components/Home";
import Landing from "./components/Login";
import "./styles/global/global.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/register" component={Landing} />
				<Route path="/home" component={HomePage} />
			</Switch>
		</Router>
	);
};

export default App;
