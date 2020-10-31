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
};

class AccountSettingsNav extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div
				className={clsx(
					"side-navbar-wrapper",
					this.props.setTheme === "dark" ? classes.navDark : classes.navLight
				)}>
				<div className="side-navbar-inner">
					<div
						className={clsx(
							"tit brdrbtm",
							this.props.setTheme === "dark"
								? classes.borderDark
								: classes.borderLight
						)}>
						My Settings
					</div>
					<div
						className={clsx(
							"brdrbtm nvlst",
							this.props.setTheme === "dark"
								? clsx(classes.aDark, classes.borderDark)
								: clsx(classes.aLight, classes.borderLight)
						)}>
						<NavLink to="/profile/settings">
							<div className="inner-link">General Account Settings</div>
						</NavLink>
					</div>
					<div
						className={clsx(
							"brdrbtm nvlst",
							this.props.setTheme === "dark"
								? clsx(classes.aDark, classes.borderDark)
								: clsx(classes.aLight, classes.borderLight)
						)}>
						<NavLink to="/profile/settings/password">
							<div className="inner-link">Change Password</div>
						</NavLink>
					</div>
					<div
						className={clsx(
							"brdrbtm nvlst",
							this.props.setTheme === "dark"
								? clsx(classes.aDark, classes.borderDark)
								: clsx(classes.aLight, classes.borderLight)
						)}>
						<NavLink to="/profile/settings/privacy">
							<div className="inner-link">Privacy</div>
						</NavLink>
					</div>
					<div
						className={clsx(
							"brdrbtm nvlst",
							this.props.setTheme === "dark"
								? clsx(classes.aDark, classes.borderDark)
								: clsx(classes.aLight, classes.borderLight)
						)}>
						<NavLink to="/profile/settings/activity">
							<div className="inner-link">Login Activity</div>
						</NavLink>
					</div>
					<div
						className={clsx(
							"brdrbtm nvlst",
							this.props.setTheme === "dark"
								? clsx(classes.aDark, classes.borderDark)
								: clsx(classes.aLight, classes.borderLight)
						)}>
						<NavLink to="/profile/settings/account">
							<div className="inner-link">Manage Account</div>
						</NavLink>
					</div>
					<div
						className={clsx(
							"nvlst",
							this.props.setTheme === "dark"
								? clsx(classes.aDark, classes.borderDark)
								: clsx(classes.aLight, classes.borderLight)
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
