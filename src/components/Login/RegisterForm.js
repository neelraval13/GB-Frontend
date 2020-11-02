import React from "react";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { Field, reduxForm } from "redux-form";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
	textField: {
		marginTop: theme.spacing(1.5),
		marginBottom: theme.spacing(2.3),
		width: "100%",
	},
	button: {
		height: "40px",
		fontSize: "11px",
		backgroundColor: "#ff713a",
	},
	inputStyles: {
		color: "white",
		fontFamily: ["Monsterrat", "Sans-Serif"].join(","),
		fontSize:14
	},
	labelStyles:{
		color: "white",
		fontSize:'11px'
	}
}));

const RegisterForm = props => {
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
					size="small"
					InputProps={{
						className: classes.inputStyles,
					}}
					InputLabelProps={{
						className:classes.labelStyles
					}}
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
				style={{color:'white'}}
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							edge="end">
							{showPass ? <Visibility style={{color:'white'}}/> : <VisibilityOff style={{color:'white'}}/>}
						</IconButton>
					</InputAdornment>
				}
			/>
		);
	};

	const renderPassword = formProps => {
		return (
			<FormControl
				className={classes.textField}
				variant="outlined"
				size="small">
				<InputLabel htmlFor="outlined-adornment-password" className={classes.labelStyles}>
					Your Password
				</InputLabel>
				<Field name="Password" component={renderPass} />
			</FormControl>
		);
	};

	const renderDate = formProps => {
		return (
			<TextField
				{...formProps.input}
				id="date"
				label={formProps.label}
				type="date"
				className={classes.textField}
				variant="outlined"
				InputLabelProps={{
					shrink: true,
					className:classes.labelStyles
				}}
				inputProps={{
					className:classes.inputStyles
				}}
				size="small"
				
			/>
		);
	};

	const renderSelectField = ({ input, label, _, children }) => (
		<FormControl variant="outlined" className={classes.textField} size="small" style={{color:'white'}}>
			<InputLabel htmlFor="gender" className={classes.labelStyles}>Gender</InputLabel>
			<Select
				labelWidth={70}
				native
				{...input}
				inputProps={{
					name: "gender",
					id: "gender",
					style:{color:'white'}
				}}
				
				>
				{children}
			</Select>
		</FormControl>
	);

	const renderCheckbox = ({ input, label }) => (
		<div>
			<FormControlLabel
				size="small"
				className={classes.textField}
				control={
					<Checkbox
						checked={input.value ? true : false}
						onChange={input.onChange}
						icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
						checkedIcon={<CheckBoxIcon fontSize="small" />}
						
						style={{color:'white'}}
					/>
				}
				label={<Box component="div" fontSize={11} style={{textTransform:'capitalize'}}>
				{label}
		  		</Box>}
			/>
		</div>
	);

	return (
		<form className="login-form-main-input" onSubmit={props.handleSubmit}>
			<div className="reg-name">
				<div className="reg-form-name-flex-item">
					<Field component={renderInput} label="First Name" name="first_name" />
				</div>
				<div className="reg-form-name-flex-item">
					<Field component={renderInput} label="Last Name" name="last_name" />
				</div>
			</div>
			<Field name="email" component={renderInput} label="Your Email" />
			{renderPassword()}
			<Field name="birthday" component={renderDate} label="Birthday" />
			<Field name="gender" component={renderSelectField} label="Gender">
				<option value="" />
				<option value={"Male"} style={{color:'black'}}>Male</option>
				<option value={"Female"} style={{color:'black'}}>Female</option>
				<option value={"Others"} style={{color:'black'}}>Others</option>
			</Field>
			<Field
				name="acceptedTerms"
				component={renderCheckbox}
				label=" I accept the Terms and Conditions of the website "
			/>
			<Button
				className={clsx(classes.textField, classes.button)}
				color="primary"
				variant="contained"
				type="submit">
				Register
			</Button>
		</form>
	);
};

export default reduxForm({
	form: "RegisterationForm",
})(RegisterForm);
