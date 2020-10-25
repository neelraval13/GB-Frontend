import React from 'react'
import Button from '@material-ui/core/Button';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkOutlined';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

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

interface Props {
    theme:string;
    handleMenuOpen:any;

}

const CardButtons :React.FC<Props>= (props) => {
    return (
        <div className={`${props.theme}-card-footer-content card-footer-content`}>
    <Button
        variant="contained"
        color="inherit"
        className={`${props.theme}-timeline-btn timeline-btn`}
        startIcon={<ThumbUpAltOutlinedIcon />}
        onMouseEnter={props.handleMenuOpen}
    >
       Like
    </Button>
    <Button
        variant="contained"
        color="inherit"
        className={`${props.theme}-timeline-btn timeline-btn`}
        startIcon={<FavoriteBorderOutlinedIcon />}
    >
        comments
    </Button>
    <Button
        variant="contained"
    color="inherit"
        className={`${props.theme}-timeline-btn timeline-btn`}
        startIcon={<ShareOutlinedIcon />}
    >
        Send
    </Button>
    <Button
        variant="contained"
        color="inherit"
        className={`${props.theme}-timeline-btn timeline-btn`}
        startIcon={<BookmarkBorderOutlinedIcon />}
    >
        Saved
    </Button>
    </div>
    )
}

export default CardButtons
