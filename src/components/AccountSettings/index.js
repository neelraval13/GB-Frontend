import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import AccountSettingsNav from "./AccountSettingsNav";
import AccountSeetingsTabs from "./AccountSettingsTabs";
import HomeGridLayout from "../../Layout/Grid/HomeGridLayout";
import settingsBanner from "../../assets/backgrounds/settingsBanner.png";
import "./accountsettings.css";

const AccountSettings = props => {
	return (
		<div>
			<NavBar />
			<HomeGridLayout>
				<div className="settings-banner">
					<div className="welcome-message">
						<h1>your account dashboard</h1>
						<p>
							Welcome to your account dashboard! Here you’ll find everything you
							need to change your profile information, settings, read
							notifications and requests, view your latest messages, change your
							pasword and much more! Also you can create or manage your own
							favourite page, have fun!
						</p>
					</div>
					<img src={settingsBanner} alt="banner" />
				</div>
				<Router>
					<div className="settings-content">
						<AccountSettingsNav />
						<AccountSeetingsTabs />
					</div>
				</Router>
			</HomeGridLayout>
		</div>
	);
};

export default AccountSettings;
