import React, { useState } from 'react'
import { connect } from 'react-redux'
import StoriesCard from './components/StoriesCard'
import './stories.scss'
import profiles from './samdata.json'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Navigation} from 'swiper'

SwiperCore.use([Navigation])

const Stories = (props:any) => {
 
    const testUrl = "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" 
    return (
        <div className={`stories-section ${props.theme}-section-bg main-container-card`}>
     
                <h4 className={`${props.theme}-text-bg`} >Stories</h4>
                
                <div className='stories-container'>
                <Swiper
                spaceBetween={0}
                slidesPerView={5}
                pagination={{ clickable: false }}
                navigation
                style={{paddingLeft:15,marginTop:15}}
                >
                    
                    <SwiperSlide>
                    <StoriesCard imgUrl={testUrl} isCurrentUser={true} name="Current User"/>
                    </SwiperSlide>
                    {
                        profiles.map(data =>{
                            return( 
                            <SwiperSlide>
                                <StoriesCard imgUrl={data.url} isUsers={true} name={data.name}/>
                            </SwiperSlide>)
                        })
                    }

                
                </Swiper>
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
