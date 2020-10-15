import React from 'react'
import { Form } from "react-bootstrap";
import { connect } from 'react-redux'
import { setDarkTheme, setLightTheme } from '../../appRedux/actions/Settings';

const ToggleSwitch = (props) => {
    const [swt2, setSwt2] = React.useState(props.theme === 'dark');
    const handleSwitch = () =>{
        
        if(swt2 === true) props.lightTheme();
        else props.darkTheme()
        setSwt2(!swt2)
        
    }

    return (
       
        <Form.Check custom type="switch" >
            <Form.Check.Input isInvalid checked={swt2} style={{color:'red'}}/>
            <Form.Check.Label onClick={handleSwitch} >
                 {`${swt2 ? 'Dark Mode' : 'Light Mode'}`}
            </Form.Check.Label>
         </Form.Check>
        
    )
}
const mapDispatchToProps = (dispatch) =>{
    return{
        darkTheme:() => dispatch(setDarkTheme()),
        lightTheme:() => dispatch(setLightTheme())
    }
}

const mapStateToProps = (state) =>{
    return{
        theme:state.settings.theme,
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ToggleSwitch)
