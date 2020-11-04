import React from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
	makeStyles,
	createMuiTheme,
	ThemeProvider,
} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	field: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(2.5),
	},
	inputStylesDark: {
		color: "white",
		borderColor: "#fff",
	},
	labelStylesDark: {
		color: "white",
	},
	inputStylesLight: {
		color: "#888DA8",
		borderColor: "#888DA8",
	},
	labelStylesLight: {
		color: "#888DA8",
	},
	button: {
		"&:hover": {
			backgroundColor: "#ff5e3a",
			transition: "0.3s",
		},
	},
}));

const darkTheme = createMuiTheme({
	palette: {
		secondary: {
			main: "#fff",
		},
	},
});

const lightTheme = createMuiTheme({
	palette: {
		secondary: {
			main: "#888DA8",
		},
	},
});

const ReportForm = props => {
	const classes = useStyles();
	const renderInput = formProps => {
		return (
			<div className="field">
				<ThemeProvider
					theme={props.setTheme === "dark" ? darkTheme : lightTheme}>
					<TextField
						{...formProps.input}
						id="outlined-uncontrolled"
						label={formProps.label}
						variant="outlined"
						className={classes.field}
						fullWidth
						InputProps={{
							className:
								props.setTheme === "dark"
									? classes.inputStylesDark
									: classes.inputStylesLight,
						}}
						InputLabelProps={{
							className:
								props.setTheme === "dark"
									? classes.labelStylesDark
									: classes.labelStylesLight,
						}}
						color="secondary"
					/>
				</ThemeProvider>
			</div>
		);
	};

	const renderTA = formProps => {
		return (
			<div className="field">
				<ThemeProvider
					theme={props.setTheme === "dark" ? darkTheme : lightTheme}>
					<TextField
						{...formProps.input}
						id="outlined-uncontrolled"
						label={formProps.label}
						variant="outlined"
						className={classes.field}
						fullWidth
						multiline
						rows="5"
						InputProps={{
							className:
								props.setTheme === "dark"
									? classes.inputStylesDark
									: classes.inputStylesLight,
						}}
						InputLabelProps={{
							className:
								props.setTheme === "dark"
									? classes.labelStylesDark
									: classes.labelStylesLight,
						}}
						color="secondary"
					/>
				</ThemeProvider>
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

const mapStateToProps = state => ({ setTheme: state.settings.theme });

export default reduxForm({
	form: "ReportForm",
})(connect(mapStateToProps, null)(ReportForm));
