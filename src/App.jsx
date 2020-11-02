import React, { useEffect } from "react";
import HomePage from "./components/Home";
import { setDarkTheme, setLightTheme } from "../src/appRedux/actions/Settings";
import Landing from "./components/Login";
import AccountSettings from "./components/AccountSettings";
import Profile from "./components/Profile/Profile";

import { connect } from "react-redux";
import "./styles/global/global.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = props => {
	useEffect(() => {
		let theme = localStorage.getItem("theme");
		if (theme) {
			if (theme === "light") props.lightTheme();
			else props.darkTheme();
		}
	}, []);

	return (
		<Router forceRefresh={true}>
			<Switch>
				<ProtectedRoute  exact path="/" component={HomePage} authUser={props.user} />
				<Route  path="/home" component={HomePage} />
				<Route  path="/register" component={Landing} />
				<Route  path="/profile/uid" component={Profile} />
				<Route  path="/profile/settings" component={AccountSettings} />
			</Switch>
		</Router>
	);
};

const mapStateToProps = (state) =>{
    return{
        user:state.authState.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
	return {
		darkTheme: () => dispatch(setDarkTheme()),
		lightTheme: () => dispatch(setLightTheme()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
