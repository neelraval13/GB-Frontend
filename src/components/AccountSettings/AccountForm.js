import React from "react";
import clsx from "clsx";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Field, reduxForm } from "redux-form";
import { CustomSwitch } from "../FormComponents/CustomSwitch";
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
}));

const AccountForm = props => {
	const classes = useStyles();

	const renderSwitch = formProps => {
		return (
			<FormGroup>
				<FormControlLabel
					control={
						<CustomSwitch
							checked={formProps.input.value ? true : false}
							onChange={formProps.input.onChange}
							name={formProps.name}
						/>
					}
					className={classes.field}
				/>
			</FormGroup>
		);
	};

	return (
		<form onSubmit={props.handleSubmit}>
			<div className="flexbaf">
				<div className="im">
					<div className="h">Temporarily deactivate account</div>
					<div className="p">
						Your profile will be disabled and your name and photos will be
						removed from most things you've shared. You can retrieve it by
						logging in with your username and password
					</div>
				</div>
				<div className="imf">
					<Field name="Deactivate" component={renderSwitch} />
				</div>
			</div>
			<div className="flexbaf">
				<div className="im">
					<div className="h">Permanently Delete Account</div>
					<div className="p">
						When you delete your Gamersback account, you won't be able to
						retrieve the content or information you've shared on Gamersback.
					</div>
				</div>
				<div className="imf">
					<Field name="Delete" component={renderSwitch} />
				</div>
			</div>

			<Button
				className={clsx(classes.field, classes.button)}
				color="primary"
				variant="contained"
				type="submit"
				size="large"
				fullWidth>
				continue
			</Button>
		</form>
	);
};

export default reduxForm({
	form: "AccountForm",
})(AccountForm);
