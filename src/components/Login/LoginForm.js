import React from "react";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Field, reduxForm } from "redux-form";

const useStyles = makeStyles(theme => ({
	textField: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
		width: "100%",
	},
	button: {
		height: "56px",
		backgroundColor: "#0d1427",
	},
}));

const LoginForm = props => {
	const classes = useStyles();
	const [showPass, setShowPass] = React.useState(false);

	const handleClickShowPassword = () => {
		setShowPass(!showPass);
	};

	const handleMouseDownPassword = event => {
		event.preventDefault();
	};

	const renderInput = formProps => {
		return (
			<div className="field">
				<TextField
					{...formProps.input}
					id="outlined-uncontrolled"
					label={formProps.label}
					className={classes.textField}
					variant="outlined"
				/>
			</div>
		);
	};

	const renderPass = formProps => {
		return (
			<OutlinedInput
				{...formProps.input}
				labelWidth={120}
				id="outlined-adornment-password"
				type={showPass ? "text" : "password"}
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							edge="end">
							{showPass ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				}
			/>
		);
	};

	const renderCheckbox = ({ input, label }) => (
		<div>
			<FormControlLabel
				control={
					<Checkbox
						checked={input.value ? true : false}
						onChange={input.onChange}
						color="primary"
					/>
				}
				label={label}
			/>
		</div>
	);

	const renderPassword = formProps => {
		return (
			<FormControl className={classes.textField} variant="outlined">
				<InputLabel htmlFor="outlined-adornment-password">
					Your Password
				</InputLabel>
				<Field name="Password" component={renderPass} />
			</FormControl>
		);
	};

	return (
		<form className="login-form-main-input" onSubmit={props.handleSubmit}>
			<Field name="Email" component={renderInput} label="Your Email" />
			{renderPassword()}
			<div className="bottom-opt">
				<Field
					name="Remember"
					component={renderCheckbox}
					label="Remember Me?"
				/>
				<div className="f-p">
					<Button color="primary">Forgot Password?</Button>
				</div>
			</div>

			<Button
				className={clsx(classes.textField, classes.button)}
				color="primary"
				variant="contained"
				type="submit">
				Login
			</Button>
		</form>
	);
};

export default reduxForm({
	form: "LoginForm",
})(LoginForm);
