import React, { useState } from 'react'
import { MdVideoLibrary } from "react-icons/md";
import { IoMdImages } from "react-icons/io";
import { IoLogoGameControllerB } from "react-icons/io";
import './addpost.scss'
import { connect } from 'react-redux'
import InputForm from './components/InputForm';
import Button from '@material-ui/core/Button';
import SelectMediaModal from './components/SelectMediaModal';


const AddPost = (props) => {
  const [defaultTab,setDefaultTab] = useState('tab-1')
  const [openModal,setOpenModal] = React.useState(false)

  const onChangeInput = (event) =>{
        setDefaultTab(event.target.name)
  }
  

  const handleModalClose = () =>{
      setOpenModal(false)
    }
  
  const handleModalOpen = () =>{
      setOpenModal(true)
    }
  
  return (   
    <div className={`addpost-card ${props.theme}-section-bg main-container-card`} style={{backgroundColor:props.cardColor}}>
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
              <InputForm theme={props.theme} openModal={handleModalOpen} />
          </div>
      
          <div class="tab-content">
          <InputForm theme={props.theme} openModal={handleModalOpen} />
          </div>
      
          <div class="tab-content">
          <InputForm theme={props.theme} openModal={handleModalOpen} />
          </div>  
        </div>
      
      <SelectMediaModal 
      open={openModal} 
      handleModalClose={handleModalClose}
      textColor={props.textColor}
      cardColor={props.cardColor}
      theme={props.theme}
      />
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
