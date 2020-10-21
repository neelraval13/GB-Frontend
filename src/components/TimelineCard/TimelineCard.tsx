import React from 'react'
import { connect } from 'react-redux'
import './timelinecard.scss'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import CommentSection from './CommentSection';
import CardButtons from './CardButtons';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },

    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginRight:theme.spacing(2),
      },
      button: {
        margin: theme.spacing(1),
      },
      commentavatar:{
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginRight:theme.spacing(2),
      }
  }),
);


const TimelineCard = (props:any) => {
    const classes = useStyles();
    
    



// const renderCommentSection


    return (
        <div className={`timeline-card ${props.theme}-section-bg`}>
            <div className='card-header-content'>
                <div className='card-header-content-left'>
                    <Avatar alt="Remy Sharp" className={classes.large} src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                    <div>
                        <h4 className={`${props.theme}-text-bg`}>
                            Bark ackue <span className='timeline-inner-text'>Added NewImage in Post</span>
                        </h4>
                        <div className='time-stamp'>1 hour ago</div>
                    </div>
                </div>
                <IconButton className={`${props.theme}-more-options more-options`}>
                     <MoreHorizIcon />
               </IconButton>  
            </div>

            <div className='card-container'>
                    <img alt='post-img' src='https://images.pexels.com/photos/3405456/pexels-photo-3405456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
            </div>
            
            <div className='likes-comments-sections'>
                  <div className='likes-inline'>
                     <ThumbUpAlt /> <span className='likes-count'>126</span>
                  </div>
                  <div className='comments-count'>
                   16 comments
                  </div>
            </div>
            <CardButtons theme={props.theme} />


            <div className={`${props.theme}-description post-description`}>
                    <div className={`${props.theme}-caption`}>
                            <h3>Caption : <span>2021 is definitely gonna be the year where walking dead comes to life. 2020 is just
                            our training phase.
                            </span></h3>
                    </div>
                    <div className={`${props.theme}-hastags`}>
                            <h3>#Gamersback</h3>
                    </div>
            </div>


            <CommentSection theme={props.theme}/>
        </div>
    )
}
const mapStateToProps = (state:any) =>{

    return{
        theme:state.settings.theme
    }
}

export default connect(mapStateToProps,null)(TimelineCard)
