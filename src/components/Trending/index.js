import React from 'react'
import CardLayout from '../../Layout/Card'
import {Card} from 'react-bootstrap'


const TrendingCard = (props) => {
    return (
        <CardLayout>
             <Card.Body>
                <Card.Title>Trending!</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
              
               
               
            </Card.Body>
        </CardLayout>
    )
}



export default TrendingCard
