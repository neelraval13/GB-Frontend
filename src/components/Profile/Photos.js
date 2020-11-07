import React, { useState } from "react";
import clsx from 'clsx';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import EditIcon from '@material-ui/icons/Edit';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Card from '@material-ui/core/Card';
import MenuItem from "@material-ui/core/MenuItem";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';
import TextField from '@material-ui/core/TextField';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatIcon from '@material-ui/icons/Chat';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      width: "100%"
    },
    modal: {
        display: 'flex',
        top: "20px !important",
        justifyContent: 'center',
    },
    iconButtonWrapper: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    photoWrapper: {
        width: '60%',
        maxWidth: '1200px',
        height: '500px',
        border: 'none',
        outline: 'none'
    },
    gridList: {
      marginRight: "-12px !important",
      marginLeft: "0px !important",
      marginBottom: "0px !important",
      marginTop: "0px !important"
    },
    tile: {
        borderRadius: "5px",
        "& > div" : {
            height: "100%",
            opacity: 0,
            display: "flex",
            transition: "opacity 0.4s ease-out"
        },
        "&:hover" : {
            "& > div" : {  
                opacity: 1
            }
        },
    },
    icon: {
      marginRight: "10px",
      marginLeft: "5px",
      marginTop: "3px",
      fontSize: "20px"
    },
    imageWrapper: {
        paddingRight: "12px !important",
        paddingBottom: "12px !important",
        paddingTop: "0px !important",
        paddingLeft: "0px !important",
        cursor: "pointer"
    },
    menuItemPopup: {
        "&:hover" : {
            backgroundColor: "#525252"
        }
    },
    listTileBar: {
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    profileImage: {
        width: "40px",
        height: "40px",
    },
    commentProfileImage: {
        width: "30px",
        height: "30px",
    },
    editIconWrapper: {
        position: "absolute",
        top: "0",
        right: "0",
    },
    cardRoot: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        width: '40%',
        flexDirection: 'column',
    },
    cover: {
        width: '60%'
    },
    content: {
        paddingLeft: '0px',
        paddingRight: '0px',
        paddingTop: '25px',
        paddingBottom: '0px !important'
    },
    listItemGutter: {
        padding: '0px'
    },
    photoDescription: {
        paddingTop: '25px',
        fontSize: '14px',
        lineHeight: '1.5',
        paddingBottom: '25px'
    },
    contentTop: {
        paddingLeft: '25px',
        paddingRight: '25px'
    },
    backdropRoot: {
        backgroundColor: 'rgba(0,0,0,0.75)'
    },
    likeCommentWrapper: {
        display: "flex",
        alignItems: "center"
    },
    commentDescriptionWrapper: {
        maxHeight: "180px",
        overflowY: "scroll"
    },
    commentWrapper: {
        padding: "20px",
        paddingBottom: "8px"
    },
    commentUserWrapper: {
        width: "100%"
    },
    commentIconWrapper: {
        display: "flex",
        alignItems: "center"
    },
    postWrapper: {
        display: "flex",
        padding: "20px",
        paddingBottom: "30px"
    },
    listTitleWrap: {
        height: "100%"
    },
    tileBarBottom: {
        display: "flex",
        paddingBottom: "20px",
        paddingLeft: "10px",
        alignItems: "center"
    },
    tileBarTop: {
        display: "flex",
        paddingTop: "20px",
        paddingRight: "8px",
        justifyContent: "flex-end"
    }
}));

const tileData = [
   {
     img: "https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
     title: 'Image',
     likes: 60,
     comments: 30,
     location: 'Delhi1',
     description: 'Here’s a photo from last month’s photoshoot. We really had a great time and got a batch of incredible shots for the new catalog.',
     dateTime: '20-02-2013'
   },
   {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: 'Image',
    location: 'Delhi2',
    dateTime: '20-02-2013',
    description: 'Here’s a photo from last month’s photoshoot. We really had a great time and got a batch of incredible shots for the new catalog.',
    likes: 60,
    comments: 30,
  },
  {
    img: "https://images.unsplash.com/photo-1502224562085-639556652f33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: 'Image',
    location: 'Delhi3',
    dateTime: '20-02-2013',
    description: 'Here’s a photo from last month’s photoshoot. We really had a great time and got a batch of incredible shots for the new catalog.',
    likes: 60,
    comments: 30,
  },
  {
    img: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=440&h=220&q=60",
    title: 'Image',
    location: 'Delhi4',
    dateTime: '20-02-2013',
    description: 'Here’s a photo from last month’s photoshoot. We really had a great time and got a batch of incredible shots for the new catalog.',
    likes: 60,
    comments: 30,
  },
  {
    img: "https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: 'Image',
    location: 'Delhi5',
    dateTime: '20-02-2013',
    description: 'Here’s a photo from last month’s photoshoot. We really had a great time and got a batch of incredible shots for the new catalog.',
    likes: 60,
    comments: 30,
  },
  {
    img: "https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: 'Image',
    location: 'Delhi6',
    dateTime: '20-02-2013',
    description: 'Here’s a photo from last month’s photoshoot. We really had a great time and got a batch of incredible shots for the new catalog.',
    likes: 60,
    comments: 30,
  },
  {
    img: "https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: 'Image',
    location: 'Delhi7',
    dateTime: '20-02-2013',
    description: 'Here’s a photo from last month’s photoshoot. We really had a great time and got a batch of incredible shots for the new catalog.',
    likes: 60,
    comments: 30,
  },
];

const commentData = [
    {
        userImg: "https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        userName: "Marina Valentine",
        timeAgo: "46 mins ago",
        comment: "I had a great time too!! We should do it again!",
        commentLike: "86"
    },
    {
        userImg: "https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        userName: "Chris Greyson",
        timeAgo: "1 hour ago",
        comment: "Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
        commentLike: "7"
    }
];

const Photos = props => {
    const classes = useStyles();
    let dark = props.Theme === "dark";
    let authorName = 'Aravindh Kumar';
    let authorImg = 'https://bestprofilepix.com/wp-content/uploads/2014/02/stylish-little-boy-profile-pic.jpg';

    const [img, setImg] = useState("");
    const [likes, setLikes] = useState(null);
    const [comments, setComments] = useState(null);
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [time, setTime] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const handleOpenModal = ({image, likesCount, commentsCount, desc, loc, date}) => {
        setImg(image);
        setLikes(likesCount);
        setComments(commentsCount);
        setDescription(desc);
        setLocation(loc);
        // calculate remaining time and set as string
        setTime(date);
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    return (
        <div className={classes.root}>
            <GridList 
                cellHeight={200} 
                className={classes.gridList} 
                cols={4}
                style={{backgroundColor: dark ? '#121212' : '#fafafa'}}
            >
                {tileData.map((tile,index) => (
                    <GridListTile 
                        key={index} 
                        cols={1}
                        rows={1.5}
                        className={classes.imageWrapper}
                        classes={{
                            tile: classes.tile
                        }}
                        onClick={() => handleOpenModal({image: tile.img,likesCount: tile.likes,commentsCount: tile.comments, loc: tile.location, date: tile.dateTime, desc: tile.description})}
                    >
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            className={classes.listTileBarWrapper}
                            classes={{
                                titleWrap: classes.listTitleWrap,
                                title: classes.listTitleWrap
                            }}
                            title={
                                <div
                                    className={classes.listTileBar}
                                >
                                    <div
                                        className={classes.tileBarTop}
                                    >
                                    </div>
                                    <div
                                        className={classes.tileBarBottom}
                                    >
                                        <span>
                                            {tile.likes}
                                        </span>
                                        <span>
                                            <ThumbUpAltOutlinedIcon 
                                                className={classes.icon}
                                            />
                                        </span>
                                        <span>
                                            {tile.comments}
                                        </span>
                                        <span>
                                            <ChatBubbleOutlineRoundedIcon 
                                                className={classes.icon}
                                            />
                                        </span>
                                    </div> 
                                </div>
                            }
                        />
                    </GridListTile>
                ))}
                
            </GridList>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
                disableAutoFocus={true}
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                    classes: {
                        root : classes.backdropRoot
                    }
                }}
            >
                <Fade in={openModal}>
                    <div className={classes.photoWrapper}>
                        <div className={classes.iconButtonWrapper}>
                            <IconButton
                                onClick={handleCloseModal}
                            >
                                <CloseIcon 
                                    style={{fontSize: '30px', fill: "white"}}
                                />
                            </IconButton>
                        </div>  
                        <Card 
                            className={classes.cardRoot}
                            style={{backgroundColor: dark ? "#151515" : "#fff"}}
                        >
                            <CardMedia
                                className={classes.cover}
                                image={img}
                            />
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <div
                                        className={classes.contentTop}
                                    >
                                        <ListItem 
                                            ContainerComponent="div"
                                            classes={{
                                                gutters : classes.listItemGutter
                                            }}
                                        >
                                            <ListItemAvatar>
                                                <Avatar
                                                    src={authorImg}
                                                    className={classes.profileImage}
                                                >
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText 
                                                primary={authorName} 
                                                secondary={location + ", " + time}
                                                primaryTypographyProps={{
                                                    style:{
                                                        fontSize: '16px',
                                                        fontWeight: 'bold',
                                                        color: dark ? 'white' : '#515365'
                                                    },
                                                }}
                                                secondaryTypographyProps={{
                                                    style:{
                                                        fontSize: '12px',
                                                        fontWeight: 'light',
                                                        color: dark ? '#c1c1c1' : '#888DAB'
                                                    }
                                                }} 
                                            />
                                            <ListItemSecondaryAction>
                                                <IconButton edge="end" onMouseOver={handlePopoverOpen}>
                                                    <MoreHorizIcon 
                                                        style={ dark ? {color: '#c1c1c1'} : {color: '#888DAB'}}
                                                    />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                        <Popover
                                            id="mouse-over-popover"
                                            open={open}
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: 'center',
                                                horizontal: 'center',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            onClose={handlePopoverClose}
                                            disableRestoreFocus
                                            PaperProps={{style:{backgroundColor: dark ? "#212121" : "#fff", color: dark ? "#fff" : "#888DAB"}}}
                                        >
                                            <MenuItem
                                                style={{fontSize: "12px", fontWeight: "600", paddingLeft: "12px" }}
                                                alignItems="flex-start"
                                                className={ dark ? classes.menuItemPopup : classes.none}
                                            >
                                                Edit Post
                                            </MenuItem>
                                            <MenuItem 
                                                style={{fontSize: "12px", fontWeight: "600", paddingLeft: "12px"}}
                                                alignItems="flex-start"
                                                className={ dark ? classes.menuItemPopup : classes.none}
                                            >
                                                Delete Post
                                            </MenuItem>
                                        </Popover>
                                        <div 
                                            className={classes.photoDescription}
                                            style={{
                                                color: dark ? '#c1c1c1' : '#888DAB'
                                            }}
                                        >
                                            {description}
                                        </div>
                                        <hr 
                                            style={{borderTop: dark ? '0.1px solid #636363' : '0.1px solid #e6ecf5', borderBottom: 'none',height: '0.1px'}}
                                        />
                                        <div
                                            className={classes.likeCommentWrapper}
                                        >
                                            <div
                                                className={classes.iconGroupWrapper}
                                                style={{color: dark ? "#c2c5c9" : "#888DAB"}}
                                            >
                                                <IconButton
                                                    style={{paddingLeft: '0px'}}
                                                >
                                                    <FavoriteBorderIcon 
                                                        style={{color: dark ? "#c2c5c9" : "#888DAB"}}
                                                    />
                                                </IconButton>
                                                {likes}
                                            </div>
                                            <div
                                                className={classes.iconGroupWrapper}
                                                style={{color: dark ? "#c2c5c9" : "#888DAB"}}
                                            >
                                                <IconButton>
                                                    <ChatIcon 
                                                        style={{color: dark ? "#c2c5c9" : "#888DAB"}}
                                                    />
                                                </IconButton>
                                                {comments}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={classes.commentDescriptionWrapper}
                                        style={{backgroundColor: dark ? "#29292994" : "#fafbfd",borderTop: dark ? '0.1px solid #636363' : '0.1px solid #e6ecf5',borderBottom: dark ? '0.1px solid #636363' : '0.1px solid #e6ecf5'}}
                                    >
                                        {commentData.map((comment, index) => (
                                            <div key = {index}>
                                                <div
                                                    className={classes.commentWrapper}
                                                    
                                                >
                                                    <div
                                                        className={classes.commentUserWrapper}
                                                    >
                                                        <ListItem 
                                                            ContainerComponent="div"
                                                            classes={{
                                                                gutters : classes.listItemGutter
                                                            }}
                                                        >
                                                            <ListItemAvatar
                                                                style={{minWidth: "42px"}}
                                                            >
                                                                <Avatar
                                                                    src={comment.userImg}
                                                                    className={classes.commentProfileImage}
                                                                >
                                                                </Avatar>
                                                            </ListItemAvatar>
                                                            <ListItemText 
                                                                primary={comment.userName} 
                                                                secondary={comment.timeAgo}
                                                                primaryTypographyProps={{
                                                                    style:{
                                                                        fontSize: '14px',
                                                                        fontWeight: '600',
                                                                        color: dark ? 'white' : '#515365'
                                                                    },
                                                                }}
                                                                secondaryTypographyProps={{
                                                                    style:{
                                                                        fontSize: '10px',
                                                                        fontWeight: 'light',
                                                                        color: dark ? '#c1c1c1' : '#888DAB'
                                                                    }
                                                                }} 
                                                            />
                                                            <ListItemSecondaryAction>
                                                                <IconButton edge="end">
                                                                    <MoreHorizIcon 
                                                                        style={ dark ? {color: '#c1c1c1'} : {color: '#888DAB'}}
                                                                    />
                                                                </IconButton>
                                                            </ListItemSecondaryAction>
                                                        </ListItem>
                                                    </div>
                                                    <div
                                                        style={{
                                                            paddingTop: "10px",
                                                            color: dark ? '#c1c1c1' : '#888DAB'
                                                        }}
                                                    >
                                                        {comment.comment}
                                                    </div>
                                                    <div
                                                        className={classes.commentIconWrapper}
                                                        style={{fontSize: "14px",color: dark ? "#c2c5c9" : "#888DAB"}}
                                                    >
                                                        <IconButton
                                                            style={{paddingLeft: '0px'}}
                                                        >
                                                            <FavoriteBorderIcon 
                                                                style={{fontSize: "20px",color: dark ? "#c2c5c9" : "#888DAB"}}
                                                            />
                                                        </IconButton>
                                                        {comment.commentLike}
                                                        
                                                    </div>
                                                </div>
                                                <hr 
                                                    style={{borderTop: dark ? '0.1px solid #636363' : '0.1px solid #e6ecf5', borderBottom: 'none',height: '0.1px'}}
                                                />
                                            </div>
                                        ))}
                                    </div> 
                                    <div
                                        className={classes.postWrapper}
                                    >
                                        <Avatar 
                                            src={authorImg}
                                            style={{
                                                height: "30px",
                                                width: "30px"
                                            }}
                                        />
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            multiline
                                            rowsMax={3}
                                            style={{marginLeft: "20px", color: dark ? "#c2c5c9" : "#888DAB", outline: dark ? "none" : "auto", outlineColor: dark ? "" : "#b7bfcc"}}
                                            placeholder="Press Enter to post"
                                            fullWidth="true"
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        edge="end"
                                                    >
                                                        <AddAPhotoIcon 
                                                            style={{color: dark ? "#a7a7a7" : "#888DAB"}}
                                                        />
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </div> 
                                </CardContent>
                            </div>
                        </Card>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

const mapStateToProps = state => {
	return {
		Theme: state.settings.theme
	};
};

export default connect(mapStateToProps, null)(Photos);