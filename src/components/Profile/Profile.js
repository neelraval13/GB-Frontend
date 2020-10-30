import React from "react";
import NavBar from '../Navbar/NavBar';
import HomeGridLayout from '../../Layout/Grid/HomeGridLayout'
import { connect } from "react-redux";
import ProfileCard from "./ProfileCard";
import ProfileTabs from "./ProfileTabs";

const Profile = props => {
    return(
        <div>
            <NavBar />
            <HomeGridLayout>
                <ProfileCard />
                <ProfileTabs />
            </HomeGridLayout>
        </div>
    );
}

const mapStateToProps = state => {
	return {
		Theme: state.settings.theme
	};
};

export default connect(mapStateToProps, null)(Profile);