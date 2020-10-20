import React from 'react'
import { connect } from 'react-redux'
import StoriesCard from './components/StoriesCard'
import './stories.scss'
import profiles from './samdata.json'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

const Stories = (props:any) => {
    const testUrl = "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" 
    return (
        <div className={`stories-section ${props.theme}-section-bg`}>
     
                <h5 className={`${props.theme}-text-bg`} >Stories</h5>
                
                <div className='stories-container'>
                <Swiper
                spaceBetween={0}
                slidesPerView={5}
                pagination={{ clickable: false }}
               
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={(swiper) => console.log(swiper)}
                
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
