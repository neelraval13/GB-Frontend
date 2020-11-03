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
    backBtnWrapper:{
        position:'absolute',
        left:20
    },

})

interface Props{
    title:string;
    handleBack:() => void;
}
const CustomDialogTitle :React.FC<Props>= (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
              <div className={classes.backBtnWrapper}>
                    <IconButton color="default" onClick={props.handleBack} >
                        <ArrowBackRoundedIcon />
                    </IconButton>
              </div> 

            <h2>{props.title}</h2>
        </div>
    )
}

export default CustomDialogTitle
