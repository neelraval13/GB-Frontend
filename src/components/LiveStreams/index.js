import React from 'react'
import './livestreams.scss'
import { connect } from 'react-redux'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Navigation} from 'swiper'
import StreamCard from './components/StreamCard';

SwiperCore.use([Navigation])



const LiveStreamsCard = (props) => {
    const data = [0,1,2]
    const streamProifle ='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    return (
        <div className={`livestreams-card ${props.theme}-section-bg`}>
               <div className='livestream-heading'>

                    <h3 className={` ${props.theme}-text-bg`}>Live Streams</h3>
                    <a className={` ${props.theme}-text-bg`}>View All</a>

               </div>
                 
               <Swiper
                spaceBetween={0}
                slidesPerView={2}
                pagination={{ clickable: false }}
                navigation
                style={{paddingLeft:0,marginTop:15}}
                >
                    {
                        data.map(strm =>{
                            return(
                                <SwiperSlide>
                                    <StreamCard avatar={streamProifle} theme={props.theme}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper> 

        </div>
    )
}

const mapStateToProps= (state) =>{
    return{
        theme:state.settings.theme
    }
}


export default connect(mapStateToProps,null)(LiveStreamsCard)
