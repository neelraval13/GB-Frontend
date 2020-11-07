import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems:'flex-start',
      '& > *': {
        margin: theme.spacing(1),
      },
      color:'red'
    },
    avatar:{
        width:theme.spacing(6),
        height:theme.spacing(6),
    },
    darkText:{
        color:'white'
    },
    lightText:{
        color:'black'
    }
  }),
);

const InputForm = (props:any) => {
  
    const classes = useStyles();
    return (
        <div className={classes.root}>
               <Avatar alt="User Profile" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className={classes.avatar}/>
               <TextField 
               fullWidth
               label="Share what you are thinking..." 
               color='secondary' 
               multiline
               rowsMax={5}
               InputProps={{ 
                 disableUnderline: true,
                 className:props.theme === 'dark' || props.theme === 'darkblue' ?classes.darkText:classes.lightText
              }}
              InputLabelProps={{
                className:props.theme === 'dark' || props.theme === 'darkblue' ?classes.darkText:classes.lightText
              }}
              onClick={() => props.openModal()}
               />
        </div>

    )
}

export default InputForm
