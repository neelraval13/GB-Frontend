import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const styles = {
	navDark: {
		color: "#fff",
		backgroundColor: "#202225",
	},

	navLight: {
		color: "#888DA8",
		backgroundColor: "#fff",
	},

	navBlue: {
		color: "#fff",
		backgroundColor: "#1D2333",
	},

	aDark: {
		"& a": {
			color: "rgba(255, 255, 255, 0.8)",
		},

		"&:hover": {
			backgroundColor: "#2d3136",
			transition: "0.1s",
		},
	},

	borderDark: {
		borderBottomColor: "#2d3136",
	},

	borderLight: {
		borderBottomColor: "#e6ecf5",
	},

	aLight: {
		"& a": { color: "#888DA8" },
		"&:hover": {
			backgroundColor: "#fafbfd",
			transition: "0.1s",
		},
	},

	aBlue: {
		"& a": { color: "rgba(255, 255, 255, 0.8)" },
		"&:hover": {
			backgroundColor: "#21283B",
			transition: "0.1s",
		},
	},
};

class AccountSettingsNav extends Component {
	render() {
		const { classes } = this.props;
		const theme = this.props.setTheme;

		const navLinks = [
			{
				id: 1,
				name: "General Account Settings",
				path: "/profile/settings",
			},
			{
				id: 2,
				name: "Change Password",
				path: "/profile/settings/password",
			},
			{
				id: 3,
				name: "Privacy",
				path: "/profile/settings/privacy",
			},
			{
				id: 4,
				name: "Login Activity",
				path: "/profile/settings/activity",
			},
			{
				id: 5,
				name: "Manage Account",
				path: "/profile/settings/account",
			},
		];

		return (
			<div
				className={clsx(
					"side-navbar-wrapper",
					theme === "dark"
						? classes.navDark
						: theme === "light"
						? classes.navLight
						: classes.navBlue
				)}>
				<div className="side-navbar-inner">
					<div
						className={clsx(
							"tit brdrbtm",
							theme === "dark" || theme === "darkblue"
								? classes.borderDark
								: classes.borderLight
						)}>
						My Settings
					</div>
					{navLinks.map(item => {
						return (
							<div
								className={clsx(
									"brdrbtm nvlst",
									theme === "dark"
										? clsx(classes.aDark, classes.borderDark)
										: theme === "light"
										? clsx(classes.aLight, classes.borderLight)
										: clsx(classes.aBlue, classes.borderDark)
								)}>
								<NavLink to={item.path}>
									<div className="inner-link">{item.name}</div>
								</NavLink>
							</div>
						);
					})}
					<div
						className={clsx(
							"nvlst",
							theme === "dark"
								? clsx(classes.aDark, classes.borderDark)
								: theme === "light"
								? clsx(classes.aLight, classes.borderLight)
								: clsx(classes.aBlue, classes.borderDark)
						)}>
						<NavLink to="/profile/settings/report">
							<div className="inner-link">Report a Problem</div>
						</NavLink>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	setTheme: state.settings.theme,
});

export default connect(mapStateToProps)(withStyles(styles)(AccountSettingsNav));
