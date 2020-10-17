import React from 'react';
import {connect} from "react-redux";
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {NavLink} from 'react-router-dom';
import {MdHome, MdChatBubble, MdVideocam, MdGroup, MdWork, MdQuestionAnswer, MdPages} from "react-icons/md";
import {SiCoursera} from "react-icons/si";
import "./sidedrawer.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: 36
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
      backgroundColor: "black"
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      zIndex: 1200
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      zIndex: 0,
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1
      }
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  })
);

const SideDrawer = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
             <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
                <MdHome />
            </ListItemIcon>
              <ListItemText>
                <NavLink to="/home">Home</NavLink>
              </ListItemText>
            </ListItem>
            <ListItem button>
            <ListItemIcon>
                <MdChatBubble />
            </ListItemIcon>
              <ListItemText>
                <NavLink to="/chat">Chat</NavLink>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MdPages />
              </ListItemIcon>
              <ListItemText>
                <NavLink to="/Pages">Pages</NavLink>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MdVideocam />
              </ListItemIcon>
              <ListItemText>
                <NavLink to="/Videos">Videos</NavLink>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MdGroup />
              </ListItemIcon>
              <ListItemText>
                <NavLink to="/Groups">Groups</NavLink>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SiCoursera />
              </ListItemIcon>
              <ListItemText>
                <NavLink to="/Courses">Courses</NavLink>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MdQuestionAnswer />
              </ListItemIcon>
              <ListItemText>
                <NavLink to="/Questions">Questions</NavLink>
              </ListItemText>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                <MdWork />
                </ListItemIcon>
              <ListItemText>
                <NavLink to="/Jobs">Jobs</NavLink>
              </ListItemText>
            </ListItem>
        </List>
      </Drawer>
    </div>
  )
}

const mapStateToProps = (state) =>{
    return{
        backgroundColor:state.settings.bgColor
    }
}

export default connect(mapStateToProps,null)(SideDrawer);