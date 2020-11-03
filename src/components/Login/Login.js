import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import { SiGoogle } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import {signInWithFacebook, signInWithGoogle} from '../../services/firebase'
import LoginForm from "./LoginForm";
import { connect } from 'react-redux'
import { signInUser } from "../../appRedux/actions/Auth";

const useStyles = theme => ({
	button: {
		width:"20px",
		fontSize: "12px",
		marginTop: theme.spacing(1.5),
		marginBottom: theme.spacing(1.5),
		marginRight:theme.spacing(1.5),
		borderRadius:50,
	},
	gButton: {
		color: "white",
	},
	fbButton: {
		backgroundColor: "#4267B2",
		color: "white",
	},
});

const  Login = (props) => {
	const { classes } = props;
	const history = useHistory()


	
	const onSubmit = formvalues => {
		props.loginUser(formvalues,history)
	};

	
	return (
			<div className="login-form-wrapper">
				<div className="form-header">
					<p>Login to your Account</p>
				</div>
				<div className="login-form-inner">
					<LoginForm onSubmit={onSubmit} />
					<div className="or-container">
						
						<h5 className='or'>or Sign Up Using</h5>
						
						
					</div>

					<div className='social-btn-container'>
					<a className='social-btn google' href="#" onClick={signInWithGoogle}>
						<SiGoogle fontSize="large" />
					</a>
					
					<a  className='social-btn facebook' href="#" onClick={signInWithFacebook}>
						<FaFacebookF fontSize="large" />
					</a>
					</div>
					<div className="register-link">
						Don’t you have an account?
						<span>
							<Link to="/register"> Register Now! </Link>
						</span>
						it’s really simple and you can start enjoing all the benefits!
					</div>
				</div>
			</div>
		);
	}

const mapDispatchToProps = (dispatch) =>{
	return{
		loginUser:(userData,history) => signInUser(userData,dispatch,history)
	}
}

export default connect(null,mapDispatchToProps)(withStyles(useStyles)(Login))
