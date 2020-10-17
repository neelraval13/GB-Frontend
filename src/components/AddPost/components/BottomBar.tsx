import React from 'react'
import {TiCameraOutline} from 'react-icons/ti'
import {FiMonitor} from 'react-icons/fi'
import {HiLocationMarker} from 'react-icons/hi'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  contained:{
      backgroundColor:'rgb(255,113,58)'
  },
  flex:{

      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between'
  },
  icons:{
      fontSize:24,
      color:'white',
      margin: theme.spacing(1),
  },
  preview:{
      borderColor:'white',
      color:'white'
  }

}));


interface Props{
    bgColor?:string;
    textColor:string;
}


const BottomBar : React.FC<Props> = ({bgColor,textColor}) => {
    const classes = useStyles();
    return (
        <div className={classes.flex}>
            <div>
            <TiCameraOutline  className={classes.icons} style={{color:textColor}}/>
            <FiMonitor className={classes.icons} style={{color:textColor}}/>
            <HiLocationMarker className={classes.icons}  style={{color:textColor}}/>
            </div>
            <div className={classes.root}>
                <Button variant="outlined" className={classes.preview} style={{borderColor:textColor,color:textColor}}>Preview</Button>
                <Button variant="contained"  className={classes.contained}>
                Post Status
                </Button>
            </div>
        </div>
    )
}

export default BottomBar
