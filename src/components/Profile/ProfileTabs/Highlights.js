import React from "react"
import { connect } from "react-redux";

const Highlights = pops => {
    return (
        <div>
            
        </div>
    );
}

const mapStateToProps = state => {
	return {
		Theme: state.settings.theme
	};
};

export default connect(mapStateToProps, null)(Highlights)