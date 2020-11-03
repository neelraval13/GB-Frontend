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
    photoWrapper: {
        width: '60%',
        maxWidth: '1200px',
        height: '500px',
        border: 'none'
    },
    gridList: {
      marginRight: "-12px !important",
      marginLeft: "0px !important",
      marginBottom: "0px !important",
      marginTop: "0px !important"
    },
    tile: {
        borderRadius: "5px"
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
    },
    listTileBar: {
        display: "flex",
        alignItems: "center"
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
        flexDirection: 'column',
    },
    cover: {
        width: '60%'
    },
}));

const tileData = [
   {
     img: "https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
     title: 'Image',
     likes: 60,
     comments: 30,
     location: 'Delhi1',
     description: 'description ',
     dateTime: '20-02-2013'
   },
   {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: 'Image',
    location: 'Delhi2',
    dateTime: '20-02-2013',
    description: 'description ',
    likes: 60,
    comments: 30,
  },
  {
    img: "https://images.unsplash.com/photo-1502224562085-639556652f33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: 'Image',
    location: 'Delhi3',
    dateTime: '20-02-2013',
    description: 'description ',
    likes: 60,
    comments: 30,
  },
  {
    img: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=440&h=220&q=60",
    title: 'Image',
    location: 'Delhi4',
    dateTime: '20-02-2013',
    description: 'description ',
    likes: 60,
    comments: 30,
  },
  {
    img: "https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: 'Image',
    location: 'Delhi5',
    dateTime: '20-02-2013',
    description: 'description ',
    likes: 60,
    comments: 30,
  },
  {
    img: "https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: 'Image',
    location: 'Delhi6',
    dateTime: '20-02-2013',
    description: 'description ',
    likes: 60,
    comments: 30,
  },
  {
    img: "https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    title: 'Image',
    location: 'Delhi7',
    dateTime: '20-02-2013',
    description: 'description ',
    likes: 60,
    comments: 30,
  },
];

const Photos = props => {
    const classes = useStyles();
    let dark = props.Theme === "dark";
    let authorName = 'Aravindh';
    let authorImg = 'imageUrl';

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
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <div className={classes.photoWrapper}>
                        <IconButton>
                            <CloseIcon 

                            />
                        </IconButton>
                        <Card className={classes.cardRoot}>
                            <CardMedia
                                className={classes.cover}
                                image={img}
                                title="Live from space album cover"
                            />
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <div>1</div>
                                    <div>1</div>
                                    <div>1</div>
                                    <div>1</div>
                                    <div>1</div>
                                    <div>1</div>
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