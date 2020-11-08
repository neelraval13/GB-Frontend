import React from 'react'
import './wwmain.scss'
import WbCloudyIcon from '@material-ui/icons/WbCloudy';
const WeatherWidget = () => {
    return (
        <div className='weather-widget'>
                <div className='weather-container'>
                        <WbCloudyIcon className='cloud-icon'/>
                </div>
                <div className='weather-details'>
                    
                        <h1>25</h1>
                        <h5>Cloud skyes</h5>
                        <p>dashjdhaoso</p>

                        <div className='date'>
                           <p>May <br/> <strong>26</strong></p>
                        </div>
                </div>
                <div className='weather-container'>

                </div>
        </div>
    )
}

export default WeatherWidget
