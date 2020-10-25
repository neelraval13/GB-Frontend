import React from "react";
import NavBar from '../Navbar/NavBar';
import HomeGridLayout from '../../Layout/Grid/HomeGridLayout'
import { connect } from "react-redux";

const Profile = props => {
    return(
        <div>
            <NavBar />
            <HomeGridLayout>
                
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