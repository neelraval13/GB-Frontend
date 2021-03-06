import React from 'react'
import { connect } from 'react-redux'
import './trending.scss'


const TrendingCard = (props) => {
    const data = [
        {
            item:'Gamersback',
            hits:'dev'
        },
        {
            item:'Pubg',
            hits:'devv2'
        },
        {
            item:'Gamersback',
            hits:'dev'
        },
        {
            item:'Pubg',
            hits:'devv2'
        },
        {
            item:'Pubg',
            hits:'devv2'
        },
    ]
    return (
       <div className={`trending-card ${props.theme}-section-bg`}>
            <div className={`${props.theme}-title-wrapper tc-title-wrapper`}>
            <h3 className={`${props.theme}-text-bg tc-title card-head-title`}>Top 5 Trending</h3>
            </div>
            <ul className={`${props.theme}-trending-list trending-list`}>
                    {
                        data.map((trend,index) =>{
                        return <li className={`${props.theme}-trending-list-item trending-list-item`}>
                            <div>
                            <h4>{trend.item}</h4>
                            <p>{trend.hits}</p>
                            </div>

                            <div className='date'>
                            <p>May <br/> <strong>26</strong></p>
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
