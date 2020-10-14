import React from 'react'
import TrendingCard from '../../components/Trending'
import './homegrid.css'
import { connect } from 'react-redux'

const HomeGridLayout = (props:any) => {
    return (
        <div className='home-grid'>
            <div className='left-drawer'>

            </div>
            <div className='center-container' style={{backgroundColor:props.backgroundColor}}>
                <div className='container-content'>
                    {props.children}
                </div>
                <div className='container-right'>
                    <TrendingCard />
                    
                </div>
            </div>
            <div className='right-drawer'>

            </div>
        </div>
    )
}

const mapStateToProps = (state:any) =>{
    return{
        backgroundColor:state.settings.bgColor
    }
}

export default connect(mapStateToProps,null)(HomeGridLayout)
