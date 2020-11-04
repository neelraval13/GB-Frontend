import React, { useState } from "react";
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
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';

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
        "&:hover" : {
            "& > div" : {
                display: "flex",
                height: "48px"
            },
            "& > div > div" : {
                display: "block"
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
    listTileBarWrapper: {
        height: "0px",
        transitionDuration: "0.25s",
        "& > div" : {
            display: "none"
        }
    },
    listTileBar: {
        display: "flex",
        alignItems: "center"
    },
    profileImage: {
        width: "40px",
        height: "40px",
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
                style={{backgroundColor: dark ? '#18191c' : '#fafafa'}}
            >
                {tileData.map((tile,index) => (
                    <GridListTile 
                        key={index} 
                        cols={1}
                        className={classes.imageWrapper}
                        classes={{
                            tile: classes.tile
                        }}
                        onClick={() => handleOpenModal({image: tile.img,likesCount: tile.likes,commentsCount: tile.comments, loc: tile.location, date: tile.dateTime, desc: tile.description})}
                    >
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            className={classes.listTileBarWrapper}
                            title={
                                <div
                                    className={classes.listTileBar}
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
                            }
                        />
                        <div
                            className={classes.editIconWrapper}
                        >
                            <div>
                                <IconButton>
                                    <EditIcon 
                                        style={{padding: "5px", backgroundColor: "white", color: "#4fb6fa", borderRadius: "5px", fontSize: "30px"}}
                                    />
                                </IconButton>
                            </div>
                        </div>     
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
                        <Card className={classes.cardRoot}>
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
                                                    classNmae={classes.profileImage}
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
                                                <IconButton edge="end">
                                                    <MoreHorizIcon 
                                                        style={ dark ? {color: '#c1c1c1'} : {color: '#888DAB'}}
                                                    />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                        <div 
                                            className={classes.photoDescription}
                                            style={{
                                                color: dark ? '#c1c1c1' : '#888DAB'
                                            }}
                                        >
                                            {description}
                                        </div>
                                        <hr 
                                            style={{borderTop: dark ? '0.1px solid #636363' : '0.1px solid #c5c5c5', borderBottom: 'none',height: '0.1px'}}
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