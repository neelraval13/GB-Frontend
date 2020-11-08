import React from "react";
import clsx from "clsx";
import { Field, reduxForm } from "redux-form";
import CustomTextInput from "../FormComponents/CustomTextInput";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	field: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(2.5),
	},
	button: {
		"&:hover": {
			backgroundColor: "#f31a49",
			transition: "0.3s",
		},
	},
	buttonPassShowHide: {
		marginTop: theme.spacing(0),
		marginBottom: theme.spacing(0),
		fontSize: "10px",
	},
}));

const PasswordForm = props => {
	const classes = useStyles();
	const [showPass, setShowPass] = React.useState(false);

	const renderPasswordInput = formProps => {
		return (
			<div className="field">
				<CustomTextInput
					{...formProps.input}
					id="outlined-uncontrolled"
					label={formProps.label}
					variant="filled"
					className={classes.field}
					fullWidth
					type={showPass ? "text" : "password"}
				/>
			</div>
		);
	};

	const renderShowHide = () => {
		if (showPass) return "Hide Passwords";
		return "Show Passwords";
	};

	const handleShowHideClick = () => {
		setShowPass(!showPass);
	};

	return (
		<form onSubmit={props.handleSubmit}>
			<div className="fieldPassForm">
				<Button
					onClick={handleShowHideClick}
					className={classes.buttonPassShowHide}
					color="secondary">
					{renderShowHide()}
				</Button>
				<Field
					name="Current Password"
					component={renderPasswordInput}
					label="Current Password"
				/>
			</div>

			<div className="flexbpf">
				<div className="im">
					<Field
						name="New Password"
						component={renderPasswordInput}
						label="New Password"
					/>
				</div>
				<div className="im">
					<Field
						name="Confirm New Password"
						component={renderPasswordInput}
						label="Confirm New Password"
					/>
				</div>
			</div>
			<Button className={classes.buttonPassShowHide} color="secondary">
				Forgot Password?
			</Button>
			<Button
				className={clsx(classes.field, classes.button)}
				color="primary"
				variant="contained"
				type="submit"
				size="large"
				fullWidth>
				change password
			</Button>
		</form>
	);
};

export default reduxForm({
	form: "PasswordForm",
})(PasswordForm);
