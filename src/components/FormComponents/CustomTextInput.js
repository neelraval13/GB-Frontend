import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";

const useStylesReddit = makeStyles(theme => ({
	root: {
		border: "1px solid #e2e2e1",
		overflow: "hidden",
		borderRadius: 4,
		backgroundColor: "#202225",
		color: "rgba(255,255,255, 0.8)",
		opacity: "0.6",
		transition: theme.transitions.create(["border-color", "box-shadow"]),
		"&:hover": {
			backgroundColor: "#202225",
		},
		"&$focused": {
			backgroundColor: "#202225",
			boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
			borderColor: theme.palette.primary.main,
			color: "rgba(255,255,255, 0.8)",
		},
	},
	focused: {},
	white: {
		color: "rgba(255,255,255, 0.8)",
	},
}));

const useStylesRedditLight = makeStyles(theme => ({
	root: {
		border: "1px solid #888DA8",
		overflow: "hidden",
		borderRadius: 4,
		backgroundColor: "#fff",
		color: "#888DA8",
		opacity: "0.9",
		transition: theme.transitions.create(["border-color", "box-shadow"]),
		"&:hover": {
			backgroundColor: "#fff",
		},
		"&$focused": {
			backgroundColor: "#fff",
			boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
			borderColor: theme.palette.primary.main,
			color: "##888DA8",
		},
	},
	focused: {},
	white: {
		color: "#888DA8",
	},
}));

const useStylesRedditBlue = makeStyles(theme => ({
	root: {
		border: "1px solid #e2e2e1",
		overflow: "hidden",
		borderRadius: 4,
		backgroundColor: "#1D2333",
		color: "rgba(255,255,255, 0.8)",
		opacity: "0.6",
		transition: theme.transitions.create(["border-color", "box-shadow"]),
		"&:hover": {
			backgroundColor: "#1D2333",
		},
		"&$focused": {
			backgroundColor: "#1D2333",
			boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
			borderColor: theme.palette.primary.main,
			color: "rgba(255,255,255, 0.8)",
		},
	},
	focused: {},
	white: {
		color: "rgba(255,255,255, 0.8)",
	},
}));

const CustomTextInput = props => {
	let theme = props.setTheme;

	const classes =
		theme === "dark" // eslint-disable-next-line
			? useStylesReddit()
			: theme === "light" // eslint-disable-next-line
			? useStylesRedditLight() // eslint-disable-next-line
			: useStylesRedditBlue();

	return (
		<TextField
			InputLabelProps={{ className: classes.white }}
			InputProps={{ classes, disableUnderline: true }}
			{...props}
		/>
	);
};

const mapStateToProps = state => ({ setTheme: state.settings.theme });

export default connect(mapStateToProps, null)(CustomTextInput);
