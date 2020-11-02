import React from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

const Stream = props => {
    return (
        <div>
            Stream
        </div>
    );
}

const mapStateToProps = state => {
	return {
		Theme: state.settings.theme
	};
};

export default connect(mapStateToProps, null)(Stream);