import React from "react";
import { signUpUser } from "../../appRedux/actions/Auth";
import { connect } from 'react-redux'
import { Link, useHistory } from "react-router-dom";
import RegisterForm from "./RegisterForm";

const Register = (props) => {
	const history = useHistory()
	const onSubmit = formvalues => {
		
		const userData ={
			"user":{
				"first_name":formvalues.first_name,
				"last_name":formvalues.last_name,
				"email":formvalues.email,
				"password":formvalues.password
			},
			"profile":{
				"gender":formvalues.gender
				
			}
		}
		props.registerUser(userData,history)
	};

		return (
			<div className="login-form-wrapper">
				<div className="form-header">
					<p>Register to Gamersback</p>
				</div>
				<div className="login-form-inner">
					<RegisterForm onSubmit={onSubmit} />
				</div>
			</div>
		);
	
}
const mapDispatchToProps = (dispatch) =>{
	return{
		registerUser:(data,history) => signUpUser(data,dispatch,history)
	}
}

export default connect(null, mapDispatchToProps)(Register)
