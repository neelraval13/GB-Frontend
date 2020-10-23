import React from "react";
import { connect } from "react-redux";
import LiveStreamsCard from "../../components/LiveStreams";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import ChatDrawer from "../../components/ChatDrawer/ChatDrawer";
import TrendingCard from "../../components/Trending";
import "./homegrid.css";

const HomeGridLayout = (props: any) => {
	return (
		<div className="home-grid">
			<div
				className="left-drawer"
				style={{ backgroundColor: props.backgroundColor }}>
				<SideDrawer />
			</div>
			<div
				className="center-container"
				style={{ backgroundColor: props.backgroundColor }}>
				<div className="container-content">{props.children}</div>
				
				<div className="container-right">
					<TrendingCard />
					<LiveStreamsCard />
				</div>
			</div>

			<div className="right-drawer"
				style={{ backgroundColor: props.backgroundColor }}
			>
				<ChatDrawer />

			</div>
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return {
		backgroundColor: state.settings.bgColor,
	};
};

export default connect(mapStateToProps, null)(HomeGridLayout);
