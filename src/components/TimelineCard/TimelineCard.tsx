import React from 'react'
import { connect } from 'react-redux'
import './timelinecard.scss'


const TimelineCard = (props:any) => {
    return (
        <div className={`timeline-card ${props.theme}-section-bg`}>
            <div className='card-header-content'>
                    hello
            </div>
            <div className='card-container'>

            </div>
            <div className='card-footer-content'>

            </div>
        </div>
    )
}
const mapStateToProps = (state:any) =>{

    return{
        theme:state.settings.theme
    }
}

export default connect(mapStateToProps,null)(TimelineCard)
