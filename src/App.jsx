import React, { useEffect } from "react";
import HomePage from "./components/Home";
import { setDarkTheme, setLightTheme } from '../src/appRedux/actions/Settings'
import Landing from "./components/Login";
import Profile from "./components/Profile/Profile";
import { connect } from 'react-redux'
import "./styles/global/global.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = (props) => {
	useEffect(() =>{
        let theme = localStorage.getItem('theme')
        if(theme){
            if(theme === 'light') props.lightTheme()
            else props.darkTheme()
        }
	},[])
	
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

const mapDispatchToProps = (dispatch) =>{
    return{
        darkTheme:() => dispatch(setDarkTheme()),
        lightTheme:() => dispatch(setLightTheme())
    }
}

export default connect(null,mapDispatchToProps)(App)
