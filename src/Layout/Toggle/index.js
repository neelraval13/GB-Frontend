import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { setDarkTheme, setLightTheme } from '../../appRedux/actions/Settings';
import { connect } from 'react-redux'



const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

const ToggleSwitch = (props) => {
  const [state, setState] = React.useState({
    checkedC: true,
  });

  const handleChange = (event) => {
    if(state.checkedC){
        props.lightTheme()
    }else{
        props.darkTheme()
    }
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup>
  
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>Light</Grid>
          <Grid item>
            <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
          </Grid>
          <Grid item>Dark</Grid>
        </Grid>
      </Typography>
    </FormGroup>
  );
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
