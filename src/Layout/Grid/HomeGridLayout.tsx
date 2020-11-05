import React from "react";
import { connect } from "react-redux";
import LiveStreamsCard from "../../components/LiveStreams";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import ChatDrawer from "../../components/ChatDrawer/ChatDrawer";
import TrendingCard from "../../components/Trending";
import "./homegrid.css";
import RecentlyUploaded from "../../components/RecentlyUploaded";

const HomeGridLayout = (props: any) => {
	const url = window.location.pathname.split("/")[1];
	return (
		<div className="home-grid">
			<div
				className="left-drawer"
				style={{ backgroundColor: props.backgroundColor }}>
				<SideDrawer />
			</div>
			{url === "home" || url === '' ? (
				<div
					className="center-container"
					style={{ backgroundColor: props.backgroundColor }}>
					<div className="container-left">
						<TrendingCard />
			
					</div>	
					<div className="container-content">{props.children}</div>

					<div className="container-right">
						<TrendingCard />
						<RecentlyUploaded />
					</div>
				</div>
			) : url === "profile" ? (
				<div
					className="profile-container"
					style={{ backgroundColor: props.backgroundColor }}>
					<div>{props.children}</div>
				</div>
			) : (
				<div></div>
			)}


			{/* <div className="right-drawer"
				style={{ backgroundColor: props.backgroundColor }}
			>
				<ChatDrawer />
			</div> */}

		</div>
	);
};

const mapStateToProps = (state: any) => {
	return {
		backgroundColor: state.settings.bgColor,
	};
};

export default connect(mapStateToProps, null)(HomeGridLayout);
