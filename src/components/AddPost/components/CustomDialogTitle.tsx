import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded'
import IconButton from '@material-ui/core/IconButton'
const useStyles = makeStyles({
    root:{
        height:"60px",
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    darkBtnWrapper:{
        position:'absolute',
        left:8,
        backgroundColor:"#3A3B3C",
        borderRadius:"50px"
    },
    lightBtnWrapper:{
        position:'absolute',
        left:8,
        backgroundColor:"#E4E6EB",
        borderRadius:"50px"
    },
    darkBtn:{
        color:'white'
    },
    lightBtn:{
        color:'black'
    }

})

interface Props{
    title:string;
    handleBack:() => void;
    theme:string
}
const CustomDialogTitle :React.FC<Props>= (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
              <div className={props.theme === 'dark' ? classes.darkBtnWrapper : classes.lightBtnWrapper}>
                    <IconButton color="default" onClick={props.handleBack} className={props.theme === 'dark' ? classes.darkBtn : classes.lightBtn}>
                        <ArrowBackRoundedIcon />
                    </IconButton>
              </div> 

            <h2>{props.title}</h2>
        </div>
    )
}

export default CustomDialogTitle
