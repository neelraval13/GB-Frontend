import React from 'react';
import clsx from 'clsx';
import { connect } from "react-redux";
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Chat, Close } from "@material-ui/icons";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemAvatar } from '@material-ui/core';
import ChatListItem from './ChatListItem';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgroundColor: "black",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    zIndex: 0,
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    paddingBottom: '70px'
  },
  drawerDark: {
    backgroundColor: "#292b2f",
  },
  drawerLight: {
    backgroundColor: "#fff",
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    zIndex: 0,
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    paddingBottom: '70px'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  bottomPush: {
    position: "fixed",
    bottom: 0,
    textAlign: "end",
    paddingBottom: 10,
    width: 240,
    zIndex: 1
  },
  bottomPushOuter: {
    position: "fixed",
    bottom: 0,
    textAlign: "center",
    paddingBottom: 10,
    width: '75px',
    zIndex: 1
  },
  textLight: {
    color: "white",
  },
  textDark: {
    color: "#888DA8",
  },
  icons: {
    fontSize: 30,
  },
}));

const chatItems = [
  {
    category: "Pubg",
    people: [
      {
        id: "userUid11",
        name: "Person 1",
        online: true,
        imageUrl : "tempNothing"
      },
      {
        id: "userUid12",
        name: "Person 2",
        online: true,
        imageUrl : "tempNothing"
      },
      {
        id: "userUid13",
        name: "Person 3",
        online: true,
        imageUrl : "tempNothing"
      },
    ]
  },
  {
    category: "COD",
    people: [
      {
        id: "userUid21",
        name: "Person 1",
        online: true,
        imageUrl : "tempNothing"
      },
      {
        id: "userUid22",
        name: "Person 2",
        online: true,
        imageUrl : "tempNothing"
      },
      {
        id: "userUid23",
        name: "Person 3",
        online: true,
        imageUrl : "tempNothing"
      },
    ]
  },
  {
    category: "COC",
    people: [
      {
        id: "userUid31",
        name: "Person 1",
        online: true,
        imageUrl : "tempNothing"
      },
      {
        id: "userUid32",
        name: "Person 2",
        online: true,
        imageUrl : "tempNothing"
      },
      {
        id: "userUid33",
        name: "Person 3",
        online: true,
        imageUrl : "tempNothing"
      },
    ]
  },
  {
    category: "Clash",
    people: [
      {
        id: "userUid41",
        name: "Person 1",
        online: true,
        imageUrl : "tempNothing"
      },
      {
        id: "userUid42",
        name: "Person 2",
        online: true,
        imageUrl : "tempNothing"
      },
      {
        id: "userUid43",
        name: "Person 3",
        online: true,
        imageUrl : "tempNothing"
      },
    ]
  },
  {
    category: "Royale",
    people: [
      {
        id: "userUid41",
        name: "Person 1",
        online: true,
        imageUrl : "tempNothing"
      },
      {
        id: "userUid42",
        name: "Person 2",
        online: true,
        imageUrl : "tempNothing"
      },
      {
        id: "userUid43",
        name: "Person 3",
        online: true,
        imageUrl : "tempNothing"
      },
    ]
  },
];

const ChatDrawer = props => {
  const classes = useStyles();

  let dark = props.Theme === "dark";

  const [open, setOpen] = React.useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  

    return(
      <div className={classes.root}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          anchor="right"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            },{
							[classes.drawerDark]: dark,
							[classes.drawerLight]: !dark,
						},),
          }}
        > 
          <List style={!open ? {paddingTop: '70px', paddingLeft: '3px'} : {paddingTop: '65px'}}>
            {
              chatItems.map((category,index) => {
                return (
                  <div key={index}>
                    { open ? 
                      <div style={{fontSize: '9px', fontWeight: 'normal', textTransform: 'uppercase', height: '30px', display:'flex', flexDirection:' column', justifyContent:'space-evenly'}}>
                        <hr 
                          style={dark ? {borderTop: '0.1px solid #636363', borderBottom: 'none',height: '0.1px'} : {borderTop: '0.1px solid #e8e8e8', borderBottom: 'none',height: '0.1px'}}
                        />
                        <div 
                          style={{paddingLeft: '16px'}}
                          className={clsx({
                            [classes.textLight]: dark,
                            [classes.textDark]: !dark,
                          })}
                        >
                          {category.category}
                        </div> 
                        <hr  
                          style={dark ? {borderTop: '0.1px solid #636363', borderBottom: 'none',height: '0.1px'} : {borderTop: '0.1px solid #e8e8e8', borderBottom: 'none',height: '0.1px'}}
                        />
                      </div> : <div></div> }
                    { category.people.map(item => {
                      return (
                        <ChatListItem
                          {...item}
                          open={open}
                        />
                      );
                    }) }
                  </div>
                );
              })
            }
          </List>
          { !open ? <div 
              className={classes.bottomPushOuter}
              style={dark ? {borderTop: '1px solid #636363',backgroundColor: '#292b2f'} : {borderTop: '1px solid #e8e8e8',backgroundColor: '#fff'}}
            >
            <IconButton 
              onClick={handleDrawerOpen}
            >
              <Chat 
                className={clsx(classes.icons, {
									[classes.textLight]: dark,
									[classes.textDark]: !dark,
								})}
              />
            </IconButton>
          </div> :
          <div 
            className={classes.bottomPush}
            style={dark ? {borderTop: '1px solid #636363',backgroundColor: '#292b2f'} : {borderTop: '1px solid #e8e8e8',backgroundColor: '#fff'}}
          >
            <IconButton onClick={handleDrawerClose}>
              <Close 
                className={clsx(classes.icons, {
									[classes.textLight]: dark,
									[classes.textDark]: !dark,
								})}
              />
            </IconButton>
          </div> }
        </Drawer>
      </div>
    );
};

const mapStateToProps = state => {
	return {
		textColor: state.settings.textColor,
		Theme: state.settings.theme
	};
};

export default connect(mapStateToProps, null)(ChatDrawer);