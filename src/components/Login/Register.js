import React, { Component } from "react";

import RegisterForm from "./RegisterForm";

export default class Register extends Component {
	onSubmit = formvalues => {
		console.log(formvalues);
	};
	render() {
		return (
			<div className="login-form-wrapper">
				<div className="form-header">
					<p>Register to Gamersback</p>
				</div>
				<div className="login-form-inner">
					<RegisterForm onSubmit={this.onSubmit} />
				</div>
			</div>
		);
	}
}
