import React from 'react'
import {Card} from 'react-bootstrap'
import { connect } from 'react-redux'


const CardLayout = (props) => {
    return (
        <Card style={{ height:'15rem',marginTop:20,backgroundColor:props.cardColor,color:props.textColor}}>
           {props.children}
            
        </Card>
    )
}



const mapStateToProps = (state) =>{
    return{
        cardColor:state.settings.cardBg,
        textColor:state.settings.textColor
        
    }
}


export default connect(mapStateToProps,null)(CardLayout)
