import React from "react";
import { connect } from "react-redux";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import TrendingCard from "../../components/Trending";
import "./homegrid.css";

const HomeGridLayout = (props: any) => {
	return (
		<div className="home-grid">
			<SideDrawer />
			<div
				className="center-container"
				style={{ backgroundColor: props.backgroundColor }}>
				<div className="container-content">{props.children}</div>
				<div className="container-right">
					<TrendingCard />
				</div>
			</div>
			<div className="right-drawer"></div>
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return {
		backgroundColor: state.settings.bgColor,
	};
};

export default connect(mapStateToProps, null)(HomeGridLayout);
