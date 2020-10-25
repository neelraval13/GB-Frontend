import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import { SiGoogle } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";

import LoginForm from "./LoginForm";

const useStyles = theme => ({
	button: {
		height: "40px",
		fontSize: "12px",
		marginTop: theme.spacing(1.5),
		marginBottom: theme.spacing(1.5),
	},
	gButton: {
		color: "white",
	},
	fbButton: {
		backgroundColor: "#4267B2",
		color: "white",
	},
});

class Login extends Component {
	onSubmit = formvalues => {
		console.log(formvalues);
	};
	render() {
		const { classes } = this.props;
		return (
			<div className="login-form-wrapper">
				<div className="form-header">
					<p>Login to your Account</p>
				</div>
				<div className="login-form-inner">
					<LoginForm onSubmit={this.onSubmit} />
					<div className="or">
						<div className="line" />
						<div>or</div>
						<div className="line" />
					</div>
					<Button
						fullWidth
						className={clsx(classes.button, classes.gButton)}
						variant="contained"
						color="secondary"
						size="small"
						startIcon={<SiGoogle fontSize="small" />}>
						Login with Google
					</Button>
					<Button
						fullWidth
						color="primary"
						className={clsx(classes.button, classes.fbButton)}
						variant="contained"
						startIcon={<FaFacebookF fontSize="small" />}>
						Login with FaceBook
					</Button>
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
}

export default withStyles(useStyles)(Login);
