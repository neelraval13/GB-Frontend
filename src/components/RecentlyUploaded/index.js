import React from 'react'
import { connect } from 'react-redux'
import './ruindex.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Navigation} from 'swiper'
import images from './samdata.json'
SwiperCore.use([Navigation])

const RecentlyUploaded = (props) => {
    return (
        <div className={`${props.theme}-section-bg recently-uploaded`}>
              <div className={`${props.theme}-ru-title-wrapper ru-title-wrapper `}>
                <h3 className={`${props.theme}-text-bg ru-title `}>Recently Uploaded</h3>
                <div  className={`${props.theme}-text-bg ru-view-all`}>View All</div> 
              </div>
              <div>
              <Swiper
                spaceBetween={18}
                slidesPerView={1}
                pagination={{ clickable: false }}
                navigation
                style={{padding:15,marginTop:0}}
                >
                    {
                        images.map(data =>{
                            return(
                                <SwiperSlide>
                                    <img src={data.url} className='slide-img'/>    
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
              </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
      theme: state.settings.theme,
    }
  }
export default connect(mapStateToProps,null)(RecentlyUploaded)
