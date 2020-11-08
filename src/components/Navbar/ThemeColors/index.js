import React, { useState } from 'react';
import { setDarkBlueTheme, setDarkTheme, setLightTheme } from '../../../appRedux/actions/Settings';
import { connect } from 'react-redux'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { MoreHoriz } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';

const getThemeNames = (theme) =>{
  if(theme === 'dark'){
    return 'Dark Theme'
  }else if(theme === 'light'){
    return 'Light Theme'
  }else{
    return 'DarkBlue Theme'
  }
}



const ThemeColors = (props) => {

  const [showMore,setShowMore] = useState(false)

  const changeTheme = (themeName) => {
    if(themeName === 'light'){
        localStorage.setItem('theme','light')
        props.lightTheme()
    }else if(themeName === 'darkblue'){
      localStorage.setItem('theme','darkblue')
      props.blueTheme()
    }else{
      localStorage.setItem('theme','dark')
      props.darkTheme()
    }
  
  };


  return (
    <div className='theme-selector'>
        <h5>{getThemeNames(props.theme)}</h5>

        <div style={{backgroundColor:props.bgColor}}  className={`theme-colors ${showMore ? 'active-theme-colors':''}`} onMouseEnter={() => setShowMore(true)} onMouseLeave={() => setShowMore(false)}>
          
            <Tooltip title="Dark Theme" placement="top">
            <div className={`darkTheme ${props.theme === 'dark' ? 'darkactiveTheme' : ''}`} onClick={() => changeTheme('dark')}>

            </div>
          </Tooltip>
          <Tooltip title="Light Theme" placement="top">
          <div className={`lightTheme ${props.theme === 'light' ? 'lightactiveTheme' : ''} `} onClick={() => changeTheme('light')}>

</div>
          </Tooltip>

          <Tooltip title="Dark Blue Theme" placement="top">
          <div className={`blueTheme ${props.theme === 'darkblue' ? 'blueactiveTheme' : ''}`} onClick={() => changeTheme('darkblue')}>

        </div>
          </Tooltip>

            

            
        </div>
        <div className={`more-wrapper ${showMore ? 'hide-more':''}`} onMouseEnter={() => setShowMore(true)} onMouseLeave={() => setShowMore(false)}>
              <MoreHorizIcon style={{fontSize:25}}/>
        </div>


        
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>{
    return{
        darkTheme:() => dispatch(setDarkTheme()),
        lightTheme:() => dispatch(setLightTheme()),
        blueTheme:() => dispatch(setDarkBlueTheme())
    }
}

const mapStateToProps = (state) =>{
    return{
        theme:state.settings.theme,
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ThemeColors)
