import React from "react";
import HomePage from "./components/Home";
import Landing from "./components/Login";
import "./styles/global/global.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Landing />
				</Route>
				<Route path="/home">
					<HomePage />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
