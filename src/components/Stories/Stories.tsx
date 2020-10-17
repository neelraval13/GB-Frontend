import React from 'react'
import { connect } from 'react-redux'
import StoriesCard from './components/StoriesCard'
import './stories.scss'
import profiles from './samdata.json'
const Stories = (props:any) => {
    const testUrl = "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" 
    return (
        <div className={`stories-section ${props.theme}-section-bg`}>
                <h5 className={`${props.theme}-text-bg`} >Stories</h5>
                
                <div className='stories-container'>
                <StoriesCard imgUrl={testUrl} isCurrentUser={true}/>

                    {
                        profiles.map(data =>{
                            return <StoriesCard imgUrl={data.url} />
                        })
                    }
                </div>
        </div>
    )
}
const mapStateToProps = (state:any) =>{
    return{
        theme:state.settings.theme
    }
}
export default connect(mapStateToProps,null)(Stories)
