import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import { comments } from './samuser';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({

      button: {
        margin: theme.spacing(1),
      },
      commentavatar:{
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginRight:theme.spacing(2),
      },
      currentUser:{
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginRight:theme.spacing(2),
      }
  }),
);

interface Props {
    theme:string;


}


const CommentSection : React.FC<Props>= (props) => {
    const classes = useStyles()
    return (
        <div className={`${props.theme}-comment-section post-comment-section`}>
            <div className='extra-comments-wrapper'>
                <a className='extra-comments'>View 8 more comments</a>
            </div>
        {
            comments.map(data =>{
                return(
                    <div  className={`${props.theme}-user-comments user-comments`}>
                        <Avatar alt="user" className={classes.commentavatar} src={data.url} />           
                        <div className={`${props.theme}-user-comments-inline user-comments-inline`}>
                            <h4>{data.user}</h4> 
                            <div className={`${props.theme}-comments comments`}>
                                    {data.comment}
                            </div>     
                        </div>
                        <IconButton className={`${props.theme}-more-options more-options`}>
                                <MoreHorizIcon />
                        </IconButton>
                    </div>
                )
            })
        }
        
        <div className='current-user-comment'>
                <Avatar alt="user" className={classes.currentUser} src={comments[0].url} />
                <input className={`${props.theme}-comment-input comment-input`} placeholder="Write your comment"/> 
        </div>
        </div>
    )
}

export default CommentSection
