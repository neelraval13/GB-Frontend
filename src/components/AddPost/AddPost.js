import React, { useState } from 'react'
import { MdVideoLibrary } from "react-icons/md";
import { IoMdImages } from "react-icons/io";
import { IoLogoGameControllerB } from "react-icons/io";
import './addpost.scss'
import BottomBar from './components/BottomBar';
import { connect } from 'react-redux'

const AddPost = (props) => {
  const [defaultTab,setDefaultTab] = useState('tab-1')

  const onChangeInput = (event) =>{
        setDefaultTab(event.target.name)
  }
  return (   
    <div className={`addpost-card ${props.theme}-card main-container-card`} style={{backgroundColor:props.cardColor}}>
        <div className={`tabbed ${props.theme}-tabbed`}>
          <input type="radio" id="tab1" name="tab-1" onChange={onChangeInput} checked={defaultTab === 'tab-1'}/>
          <input type="radio" id="tab2" name="tab-2" onChange={onChangeInput} checked={defaultTab === 'tab-2'}/>
          <input type="radio" id="tab3" name="tab-3" onChange={onChangeInput} checked={defaultTab === 'tab-3'}/>
      
          <ul className={`tabs ${props.theme}-tabs`}>
            <li className={`tab ${props.theme}-tab`}><label for="tab1"> <IoLogoGameControllerB className='icon'/>  Gameplay</label></li>
            <li className={`tab ${props.theme}-tab`}><label for="tab2"><MdVideoLibrary className='icon'/>  Video</label></li>
            <li className={`tab ${props.theme}-tab`}><label for="tab3"><IoMdImages className='icon'/>  Image</label></li>
          </ul> 
      
          <div class="tab-content">
          
          </div>
      
          <div class="tab-content">
          
          </div>
      
          <div class="tab-content">
        
          </div>
        </div>
        <BottomBar textColor={props.textColor} bgColor={props.cardColor}/>
    </div>
   
   
  
  )
}

const mapStateToProps = (state) =>{
  return{
    cardColor: state.settings.cardBg,
    textColor: state.settings.textColor,
    theme: state.settings.theme,
  }
}

export default connect(mapStateToProps, null)(AddPost)
