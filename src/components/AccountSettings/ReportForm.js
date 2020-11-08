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
			backgroundColor: "#ff5e3a",
			transition: "0.3s",
		},
	},
}));

const ReportForm = props => {
	const classes = useStyles();
	const renderInput = formProps => {
		return (
			<div className="field">
				<CustomTextInput
					{...formProps.input}
					id="outlined-uncontrolled"
					label={formProps.label}
					variant="filled"
					className={classes.field}
					fullWidth
				/>
			</div>
		);
	};

	const renderTA = formProps => {
		return (
			<div className="field">
				<CustomTextInput
					{...formProps.input}
					id="outlined-uncontrolled"
					label={formProps.label}
					variant="filled"
					className={classes.field}
					fullWidth
					multiline
					rows="5"
				/>
			</div>
		);
	};

	return (
		<form onSubmit={props.handleSubmit}>
			<Field name="title" component={renderInput} label="Title" />
			<Field name="description" component={renderTA} label="Description" />
			<Button
				className={clsx(classes.field, classes.button)}
				color="primary"
				variant="contained"
				type="submit"
				size="large"
				fullWidth>
				Submit Problem
			</Button>
		</form>
	);
};

export default reduxForm({
	form: "ReportForm",
})(ReportForm);
