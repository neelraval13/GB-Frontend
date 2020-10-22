import React from 'react'
import { connect } from 'react-redux'
import './trending.scss'


const TrendingCard = (props) => {
    const data = [
        {
            item:'#Gamersback',
            hits:'29k hits'
        },
        {
            item:'#Pubg',
            hits:'39k hits'
        }
    ]
    return (
       <div className={`trending-card ${props.theme}-section-bg`}>
            <h3 className={`${props.theme}-text-bg`}>Trending !</h3>
            <ul className={`${props.theme}-trending-list trending-list`}>
                    {
                        data.map((trend,index) =>{
                        return <li className={`${props.theme}-trending-list-item trending-list-item`}>
                            <h4>{index+1} {")"}</h4>
                            <div>
                            <h4>{trend.item}</h4>
                            <p>{trend.hits}</p>
                            </div>
                        </li>
                        })
                    }
            </ul>
       </div>
    )
}

const mapStateToProps= (state) =>{
    return{
        theme:state.settings.theme
    }
}


export default connect(mapStateToProps,null)(TrendingCard)
