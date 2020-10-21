import React, { Component } from "react";

import LoginForm from "./LoginForm";

export default class Register extends Component {
	onSubmit = formvalues => {
		console.log(formvalues);
	};
	render() {
		return (
			<div className="login-tab-wrapper">
				<div className="login-form-wrapper">
					<div className="form-header">
						<p>Register to Gamersback</p>
					</div>
					<div className="register-form-inner">
						<LoginForm onSubmit={this.onSubmit} />
					</div>
				</div>
			</div>
		);
	}
}
