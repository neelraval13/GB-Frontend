import React, { useState, useRef } from "react";
import {
	fade,
	makeStyles,
	Theme,
	createStyles,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import PeopleTwoToneIcon from "@material-ui/icons/PeopleTwoTone";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./nav.css";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { connect } from "react-redux";
import ToggleSwitch from "../../Layout/Toggle";
import {
	handleDrawerOpen,
	handleDrawerClose,
} from "../../appRedux/actions/Settings";
import { Dispatch } from "redux";
import Popover from '@material-ui/core/Popover';


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		grow: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			display: "none",
			[theme.breakpoints.up("sm")]: {
				display: "block",
			},
		},
		search: {
			position: "relative",
			borderRadius: theme.shape.borderRadius,
			backgroundColor: fade(theme.palette.common.white, 0.15),
			"&:hover": {
				backgroundColor: fade(theme.palette.common.white, 0.25),
			},
			marginRight: theme.spacing(2),
			marginLeft: 0,
			width: "100%",
			[theme.breakpoints.up("sm")]: {
				marginLeft: theme.spacing(3),
				width: "auto",
			},
		},
		lightSearch: {
			color: "black",
			position: "relative",
			borderRadius: theme.shape.borderRadius,
			backgroundColor: "#f5f5f5",
			"&:hover": {
				backgroundColor: "#F0F2F0",
			},
			marginRight: theme.spacing(2),
			marginLeft: 0,
			width: "100%",
			[theme.breakpoints.up("sm")]: {
				marginLeft: theme.spacing(3),
				width: "auto",
			},
		},

		searchIcon: {
			padding: theme.spacing(0, 1),
			height: "100%",
			position: "absolute",
			pointerEvents: "none",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		inputRoot: {
			color: "inherit",
		},
		inputLightRoot: {
			backgroundColor: "grey",
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
			transition: theme.transitions.create("width"),
			width: "100%",
			[theme.breakpoints.up("md")]: {
				width: "20ch",
			},
			[theme.breakpoints.up("lg")]: {
				marginLeft: theme.spacing(3),
				width: 350,
			},
		},
		sectionDesktop: {
			display: "none",
			[theme.breakpoints.up("md")]: {
				display: "flex",
			},
		},
		sectionMobile: {
			display: "flex",
			[theme.breakpoints.up("md")]: {
				display: "none",
			},
		},
		menuItem:{
			marginRight:5
		},
		navBtn:{
			textTransform:"capitalize",
			
		},
		avatar:{
			marginRight:10,
			

		},
		btnDiv:{
			display:'flex',
			flexDirection:'column',
			marginRight:10
		},
		btnInlineText:{
			fontSize:10,
			color:'grey'
		}
	})
);

interface Props {
	navColor: string;
	navLogo: string;
	textColor: string;
	theme: string;
	isDrawerOpen: Boolean;
	openDrawer: Dispatch;
	closeDrawer: Dispatch;
}

const NavBar: React.FC<Props> = props => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [
		mobileMoreAnchorEl,
		setMobileMoreAnchorEl,
	] = React.useState<null | HTMLElement>(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = "primary-search-account-menu";
	const renderMenu = (

		 <Popover
		
		 open={isMenuOpen}
		 id={menuId}
		 anchorEl={anchorEl}
		 onClose={handleMenuClose}
		 anchorOrigin={{
		   vertical: 'bottom',
		   horizontal: 'center',
		 }}
		 transformOrigin={{
		   vertical: 'top',
		   horizontal: 'center',
		 }}
	   >
		   	<MenuItem >
				Profile
			</MenuItem>
			<MenuItem >
				Logout
			</MenuItem>
			<MenuItem >
				<ToggleSwitch />
			</MenuItem>
	   </Popover>
	);

	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
			
			>
			
			<MenuItem >
				<IconButton aria-label="show 4 new mails" color="inherit" >
					<Badge badgeContent={4} color="secondary">
						<MailIcon />
					</Badge>
				</IconButton>
				<p>Messages</p>
			</MenuItem>
			<MenuItem >
				<IconButton aria-label="show 11 new notifications" color="inherit" >
					<Badge badgeContent={11} color="secondary">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen} >
				<IconButton
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
					
					>

					<AccountCircle />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);

	return (
		<div className={classes.grow}>
			<AppBar
				className={`${props.theme}-nav-bar nav-bar`}
				position="fixed"
				style={{ backgroundColor: props.navColor, color: props.textColor,height:70 }}>
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="open drawer"
						onClick={props.isDrawerOpen ? props.closeDrawer : props.openDrawer}>
						{props.isDrawerOpen ? <CgMenuRight /> : <CgMenuLeft />}
					</IconButton>
					<img src={props.navLogo} alt="nav-logo" className="nav-logo" />
					<div
						className={
							props.theme === "dark" ? classes.search : classes.lightSearch
						}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ "aria-label": "search" }}
						/>
					</div>
					<Button color="inherit" className={classes.navBtn}>Find Friends</Button>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<Button color="inherit" className={classes.navBtn}>Touch Base</Button>
						<Button color="inherit" className={classes.navBtn}>Stream</Button>

						<IconButton aria-label="show 4 new mails" color="inherit" className={classes.menuItem}>
							<HomeIcon />
						</IconButton>
						<IconButton aria-label="show 4 new mails" color="inherit" className={classes.menuItem}>
							<PeopleTwoToneIcon />
						</IconButton>
						<IconButton aria-label="show 4 new mails" color="inherit" className={classes.menuItem}>
							<Badge badgeContent={4} color="secondary">
								<MailIcon />
							</Badge>
						</IconButton>
						<IconButton aria-label="show 17 new notifications" color="inherit" className={classes.menuItem}>
							<Badge badgeContent={17} color="secondary">
								<NotificationsIcon />
							</Badge>
						</IconButton>

						<Button
		
						aria-controls={menuId}
						onMouseEnter={handleProfileMenuOpen}
						color="inherit"
						className={classes.navBtn}
						>
							 <Avatar alt="User Profile" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className={classes.avatar}/>
							<div className={classes.btnDiv}>
								James Spigel	
							 	<span className={classes.btnInlineText}>Space COWBOY</span>
							</div>
							<ExpandMoreIcon />
						</Button>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit">
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</div>
	);
};

const mapStateToProps = (state: any) => {
	return {
		navColor: state.settings.navBg,
		navLogo: state.settings.navLogo,
		textColor: state.settings.textColor,
		theme: state.settings.theme,
		isDrawerOpen: state.settings.showDrawer,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		openDrawer: () => dispatch(handleDrawerOpen()),
		closeDrawer: () => dispatch(handleDrawerClose()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
