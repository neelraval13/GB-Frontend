import React from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import CustomTextInput from "../FormComponents/CustomTextInput";
import {
	SelectInputLight,
	SelectInputDark,
	SelectInputBlue,
} from "../FormComponents/CustomSelectInput";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
	labelBlueDark: {
		color: "rgba(255,255,255,0.8)",
	},
	labelLight: {
		color: "#888DA8",
	},
}));

const GSettingsForm = props => {
	const classes = useStyles();
	const renderInput = formProps => {
		return (
			<div className="field">
				<CustomTextInput
					{...formProps.input}
					id="outlined-uncontrolled"
					label={formProps.label}
					defaultValue="react-reddit"
					variant="filled"
					className={classes.field}
					fullWidth
				/>
			</div>
		);
	};

	const renderEmailInput = formProps => {
		return (
			<div className="field">
				<CustomTextInput
					{...formProps.input}
					id="outlined-uncontrolled"
					label={formProps.label}
					type="email"
					variant="filled"
					className={classes.field}
					fullWidth
				/>
			</div>
		);
	};

	const renderNumInput = formProps => {
		return (
			<div className="field">
				<CustomTextInput
					{...formProps.input}
					id="outlined-uncontrolled"
					label={formProps.label}
					type="tel"
					variant="filled"
					className={classes.field}
					fullWidth
				/>
			</div>
		);
	};

	const renderSelectInput = formProps => {
		return (
			<FormControl fullWidth>
				<InputLabel
					className={
						props.setTheme === "dark" || props.setTheme === "darkblue"
							? classes.labelBlueDark
							: classes.labelLight
					}>
					Gender
				</InputLabel>
				<Select
					{...formProps.input}
					input={
						props.setTheme === "dark" ? (
							<SelectInputDark />
						) : props.setTheme === "light" ? (
							<SelectInputLight />
						) : (
							<SelectInputBlue />
						)
					}
					inputProps={{
						name: formProps.input.name,
						id: "color-native-simple",
					}}>
					<MenuItem value={"male"}>Male</MenuItem>
					<MenuItem value={"female"}>Female</MenuItem>
					<MenuItem value={"others"}>others</MenuItem>
				</Select>
			</FormControl>
		);
	};

	return (
		<form onSubmit={props.handleSubmit}>
			<div className="flexbpf">
				<div className="im">
					<Field
						name="Name"
						component={renderInput}
						dvalue="hello"
						label="Name"
					/>
				</div>
				<div className="im">
					<Field
						name="GamingName"
						component={renderInput}
						label="Gaming Name"
					/>
				</div>
			</div>
			<div className="flexbpf">
				<div className="im">
					<Field name="Username" component={renderInput} label="Username" />
				</div>
				<div className="im">
					<Field
						name="Email"
						component={renderEmailInput}
						label="Email Address"
					/>
				</div>
			</div>
			<div className="flexbpf">
				<div className="im">
					<Field
						name="phno"
						component={renderNumInput}
						label="Contact Number"
					/>
				</div>
				<div className="im">
					<Field
						name="gender"
						component={renderSelectInput}
						label="Gender"></Field>
				</div>
			</div>
			<Field
				name="Facebook"
				component={renderInput}
				label="Your Facebook Account"
			/>
			<Field
				name="Instagram"
				component={renderInput}
				label="Your Instagram Account"
			/>
			<Field
				name="Youtube"
				component={renderInput}
				label="Your Youtube Account"
			/>
			<Field
				name="Discord"
				component={renderInput}
				label="Your Discord Channel"
			/>
			<div className="flexbpf">
				<div className="im">
					<Button
						className={clsx(classes.field)}
						color="primary"
						variant="contained"
						size="large"
						fullWidth>
						Restore Defaults
					</Button>
				</div>
				<div className="im">
					<Button
						className={clsx(classes.field, classes.button)}
						color="secondary"
						variant="contained"
						type="submit"
						size="large"
						fullWidth>
						save changes
					</Button>
				</div>
			</div>
		</form>
	);
};

const mapStateToProps = state => ({ setTheme: state.settings.theme });

export default reduxForm({
	form: "GeneralSettingsForm",
})(connect(mapStateToProps, null)(GSettingsForm));
