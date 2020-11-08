import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';
import { connect } from 'react-redux';
import { resetMessage } from '../../appRedux/actions/Alert';

function ShowAlertSnack(props) {
  const [state, setState] = React.useState({
    open: true,
    Transition: Fade,
  });

  const handleClick = () => () => {
    setState({
      ...state,
      open: true,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };


  useEffect(() =>{
      if(props.success.length > 0 || props.failure.length > 0 ){
         handleClick() 
         setTimeout(() =>{
            props.resetMessage()
         },6000)   
      }

  },[props.success,props.failure])
  return (

        <React.Fragment>
          {
            props.success && <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={state.open}
            onClose={handleClose}
            TransitionComponent={state.Transition}
            key={state.Transition.name}
            
          >
            <div className='success-alert'>{props.success}</div>
          </Snackbar>

           
          }
          {
             props.failure && <Snackbar
             anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
             open={state.open}
             onClose={handleClose}
             TransitionComponent={state.Transition}
             key={state.Transition.name}
           >
             <div className='failure-alert'>{props.failure}</div>
           </Snackbar>
          }
          
        </React.Fragment>
    
          

          
  
  );
}



const mapStateToProps = (state) =>{
  return{
    success:state.alertState.successAlert,
    failure:state.alertState.failureAlert,
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    resetMessage:() => dispatch(resetMessage())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowAlertSnack)