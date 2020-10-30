import React from 'react'
import Badge from '@material-ui/core/Badge';
import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import { connect } from "react-redux";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemAvatar } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const ChatListItem = ({...props}) => {
    const StyledBadge = withStyles((theme) => ({
        badge: {
          backgroundColor: props.online ? '#44b700' : "#ff0000",
          color: '#44b700',
          boxShadow: `0 0 0 1.8px ${props.Theme === "dark" ? '#292b2f' : '#fff'}`,
        },
    }))(Badge);

    let dark = props.Theme === "dark";

    return (
        <ListItem>
            <ListItemAvatar>
                <StyledBadge
                    overlap="circle"
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    variant="dot"
                >
                    <Avatar
                        style={{height: '33px', width: '33px'}}
                    />
                </StyledBadge>
            </ListItemAvatar>
            <ListItemText 
                primary={props.name} 
                secondary={props.online ? 'Online' : 'Offline'} 
                primaryTypographyProps={{
                    style:{
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: dark ? 'white' : '#888DA8'
                    },
                }}
                secondaryTypographyProps={{
                    style:{
                        fontSize: '10px',
                        fontWeight: 'light',
                        color: dark ? '#c1c1c1' : '#888DA8'
                    }
                }}
            />
            { props.open ? <ListItemSecondaryAction>
                <IconButton edge="end">
                    <MoreHorizIcon 
                        style={ dark ? {color: '#c1c1c1'} : {color: '#888DA8'}}
                    />
                </IconButton>
            </ListItemSecondaryAction> : <div></div> }
            
        </ListItem>
    );
}

const mapStateToProps = state => {
	return {
		textColor: state.settings.textColor,
		Theme: state.settings.theme
	};
};


export default connect(mapStateToProps,null)(ChatListItem);