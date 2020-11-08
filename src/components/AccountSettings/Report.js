import React from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import ReportForm from "./ReportForm";

const styles = makeStyles(theme => ({
	darkB: {
		borderBottomColor: "#2d3136",
	},

	lightB: {
		borderBottomColor: "#e6ecf5",
	},
}));

const Report = props => {
	const classes = styles();

	const theme = props.setTheme;

	const onSubmit = formvalues => {
		console.log(formvalues);
	};

	return (
		<div className="accntset-sec-wrapper">
			<div
				className={clsx(
					"sectit brdrbtm",
					theme === "dark" || theme === "darkblue"
						? classes.darkB
						: classes.lightB
				)}>
				Report a Problem
			</div>
			<div className="seccntnt">
				<div className="seccntnt-innner">
					<ReportForm onSubmit={onSubmit} />
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({ setTheme: state.settings.theme });

export default connect(mapStateToProps, null)(Report);
