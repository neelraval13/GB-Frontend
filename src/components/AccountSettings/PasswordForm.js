import React from "react";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
	createStyles,
	makeStyles,
	createMuiTheme,
	ThemeProvider,
} from "@material-ui/core/styles";

const useStyles = makeStyles(theme =>
	createStyles({
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
				backgroundColor: "#f31a49",
				transition: "0.3s",
			},
		},
		notchedOutline: {
			borderColor: "#888DA8",
		},
		root: {
			"&:hover": {
				borderColor: "#888DA8",
			},
		},
	})
);

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

const PasswordForm = props => {
	const classes = useStyles();
	const [showPass, setShowPass] = React.useState(false);
	const handleClickShowPassword = () => {
		setShowPass(!showPass);
	};

	const dark = props.setTheme === "dark";

	const handleMouseDownPassword = event => {
		event.preventDefault();
	};

	const renderPass = formProps => {
		return (
			<ThemeProvider theme={dark ? darkTheme : lightTheme}>
				<OutlinedInput
					{...formProps.input}
					classes={{
						root: {
							[classes.inputStylesDark]: dark,
							[classes.inputStylesLight]: !dark,
						},
						notchedOutline: classes.notchedOutline,
					}}
					color="secondary"
					label={formProps.label}
					id="outlined-adornment-password"
					type={showPass ? "text" : "password"}
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								edge="end">
								{showPass ? (
									<Visibility
										className={
											dark ? classes.labelStylesDark : classes.labelStylesLight
										}
									/>
								) : (
									<VisibilityOff
										className={
											dark ? classes.labelStylesDark : classes.labelStylesLight
										}
									/>
								)}
							</IconButton>
						</InputAdornment>
					}
				/>
			</ThemeProvider>
		);
	};

	const renderPassword = (label, name) => {
		return (
			<ThemeProvider theme={dark ? darkTheme : lightTheme}>
				<FormControl
					color="secondary"
					className={classes.field}
					classes={{
						root: {
							[classes.inputStylesDark]: dark,
							[classes.inputStylesLight]: !dark,
						},
					}}
					variant="outlined"
					fullWidth>
					<InputLabel
						classes={{
							root: classes.root,
						}}
						htmlFor="outlined-adornment-password"
						className={
							dark ? classes.labelStylesDark : classes.labelStylesLight
						}>
						{label}
					</InputLabel>
					<Field name={name} component={renderPass} label={label} />
				</FormControl>
			</ThemeProvider>
		);
	};
	return (
		<form onSubmit={props.handleSubmit}>
			{renderPassword("Current Password", "Current Password")}
			{renderPassword("New Password", "New Password")}
			{renderPassword("Confirm New Password", "Confirm New Password")}
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

const mapStateToProps = state => ({ setTheme: state.settings.theme });

export default reduxForm({
	form: "PasswordForm",
})(connect(mapStateToProps, null)(PasswordForm));
