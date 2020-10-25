import React from 'react'
import './livestreams.scss'
import { connect } from 'react-redux'

const LiveStreamsCard = (props) => {
    const data = [0,1,2]
    return (
        <div className={`livestreams-card ${props.theme}-section-bg`}>
               <div className='livestream-heading'>
                    <h3>Live Streams</h3>
                    <a>View All</a>
               </div>
               <div>    
                   
               </div>

        </div>
    )
}

const mapStateToProps= (state) =>{
    return{
        theme:state.settings.theme
    }
}


export default connect(mapStateToProps,null)(LiveStreamsCard)
