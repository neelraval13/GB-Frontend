import React, { useEffect } from "react";
import HomePage from "./components/Home";
import { setDarkBlueTheme, setDarkTheme, setLightTheme } from "../src/appRedux/actions/Settings";
import Landing from "./components/Login";
import AccountSettings from "./components/AccountSettings";
import Profile from "./components/Profile/Profile";

import { connect } from "react-redux";
import "./styles/global/global.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import ShowAlertSnack from './Layout/Alert/index'


const App = props => {
	useEffect(() => {
		let theme = localStorage.getItem("theme");
		if (theme) {
			if (theme === "light") props.lightTheme();
			else if(theme === 'dark') props.darkTheme();
			else props.blueTheme()
		}
	}, []);

	return (
		<React.Fragment>
			<Router forceRefresh={true}>
			<Switch>
				<ProtectedRoute  exact path="/" component={HomePage} authUser={props.user} />
				<Route  path="/home" component={HomePage} />
				<Route  path="/register" component={Landing} />
				<Route  path="/profile/uid" component={Profile} />
				<Route  path="/profile/settings" component={AccountSettings} />
			</Switch>
			</Router>

			<ShowAlertSnack />
		</React.Fragment>
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
		blueTheme: () => dispatch(setDarkBlueTheme()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
