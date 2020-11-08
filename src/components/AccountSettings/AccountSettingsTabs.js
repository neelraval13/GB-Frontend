import React, { Component } from "react";
import clsx from "clsx";
import { Route, Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import GeneralAccountSettings from "./GeneralAccountSettings";
import ChangePassword from "./ChangePassword";
import Privacy from "./Privacy";
import Activity from "./Activity";
import MAccount from "./MAccount";
import Report from "./Report";

const styles = {
	tabDark: {
		color: "#fff",
		backgroundColor: "#202225",
	},

	tabLight: {
		color: "#888DA8",
		backgroundColor: "#fff",
	},

	tabBlue: {
		color: "#fff",
		backgroundColor: "#1D2333",
	},
};

class AccountSettingsTabs extends Component {
	render() {
		const { classes } = this.props;
		const theme = this.props.setTheme;
		return (
			<div
				className={clsx(
					"side-settings-tab-wrapper",
					theme === "dark"
						? classes.tabDark
						: theme === "light"
						? classes.tabLight
						: classes.tabBlue
				)}>
				<Switch>
					<Route
						exact
						path="/profile/settings"
						component={GeneralAccountSettings}
					/>
					<Route path="/profile/settings/password" component={ChangePassword} />
					<Route path="/profile/settings/privacy" component={Privacy} />
					<Route path="/profile/settings/activity" component={Activity} />
					<Route path="/profile/settings/account" component={MAccount} />
					<Route path="/profile/settings/report" component={Report} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	setTheme: state.settings.theme,
});

export default connect(mapStateToProps)(
	withStyles(styles)(AccountSettingsTabs)
);
