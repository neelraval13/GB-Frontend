import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

interface StreamCardProps{
    theme:string;
    streamer:string;
    avatar:string;
    context:string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar:{
        marginRight:theme.spacing(1),
        height:theme.spacing(3),
        width:theme.spacing(3),
    }
  }),
);
const StreamCard = (props:any) => {
    const classes = useStyles();
    return (
        <div className={`stream-card ${props.theme}-stream-card `}>
            <img src="https://img.gurugamer.com/resize/740x-/2019/10/21/free-fire-live-stream-8e70.jpg" className='streaming-img' />
            <div className='streamer-view'>
                 <Avatar alt="streamer" src={props.avatar} className={classes.avatar} />  
                  <div>
                      <h4 className={`${props.theme}-text-bg streamer-name`}>SUP</h4>
                      <p className={`${props.theme}-text-bg streamer-context`}>Context</p>
                  </div>  
            </div>
        </div>
    )
}

export default StreamCard
