import React from 'react'
import {Card} from 'react-bootstrap'
import { connect } from 'react-redux'


const TrendingCard = (props) => {
    return (
        <Card style={{ height:'15rem',marginTop:20,backgroundColor:props.cardColor}}>
           
            <Card.Body>
                <Card.Title>Trending!</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
              
               
               
            </Card.Body>
        </Card>
    )
}

const mapStateToProps = (state) =>{
    return{
        cardColor:state.settings.cardBg,
        
    }
}


export default connect(mapStateToProps,null)(TrendingCard)
