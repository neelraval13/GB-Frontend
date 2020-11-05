import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {FaLock,FaGlobeAsia} from 'react-icons/fa'
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
const useStyles = makeStyles({

    
  });

const SelectPostSettings = (props:any) => {
  const [marked,setMarked] = useState('everyone')


  const handleRadioChange = (text:string) => {
    setMarked(text)
  };
  
    return (
        <div className='select-privacy'>
          <h4>Who can see your post ?</h4>
          <p>Your post will appear in News Feed, on your profile and in search results</p>
          <RadioGroup  name="privacy_option" value={marked} >
              <div className={`select-privacy__options ${marked ==='everyone' ? props.theme+"-"+'selected' : ''}`} onClick={() => handleRadioChange('everyone')}>
                  <div className={`options-logo options-logo-${props.theme}`}>
                                <FaGlobeAsia className='options-icon'/>
                    </div>
                    <div className='options-text'>
                        <h5>Everyone</h5>
                        <p>Anyone on or off Gamersback</p>
                    </div>

                    <div className={`checked-option`}>
                    <FormControlLabel value="everyone" control={<Radio color="secondary" style={{color:'#ed204b'}}/>} label="" />
                    </div>
              </div>
              <div className={`select-privacy__options ${marked ==='onlyme' ? props.theme+"-"+'selected' : ''}`} onClick={() => handleRadioChange('onlyme')}>
                    <div className={`options-logo options-logo-${props.theme}`}>
                            <FaLock className='options-icon'/>
                    </div>
                    <div className='options-text'>
                        <h5>Only me</h5>
                    </div>

                    <div className={`checked-option`}>
                    <FormControlLabel value="onlyme" control={<Radio color="secondary" style={{color:'#ed204b'}} />} label="" />
                    </div>
              </div>
              </RadioGroup>
        </div>
    )
}

export default SelectPostSettings
