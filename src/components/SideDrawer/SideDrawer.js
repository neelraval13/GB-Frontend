import React from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import { createStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import {
	MdHome,
	MdChatBubble,
	MdVideocam,
	MdGroup,
	MdWork,
	MdQuestionAnswer,
	MdPages,
} from "react-icons/md";
import { SiCoursera } from "react-icons/si";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import { handleDrawerClose, handleDrawerOpen } from "../../appRedux/actions/Settings";

const drawerWidth = 240;

const useStyles = makeStyles(theme =>
	createStyles({
		root: {
			display: "flex",
			position:'absolute',
			zIndex:100
		},
		appBar: {
			zIndex:100,
			transition: theme.transitions.create(["width", "margin"], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
		appBarShift: {
			marginLeft: drawerWidth,
			width: `calc(100% - ${drawerWidth}px)`,
			transition: theme.transitions.create(["width", "margin"], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		menuButton: {
			marginRight: 36,
		},
		hide: {
			display: "none",
		},
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
			whiteSpace: "nowrap",
			zIndex:20,
		},
		drawerOpen: {
			width: drawerWidth,
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
			zIndex: 0,
		},
		drawerClose: {
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			zIndex: 0,
			overflowX: "hidden",
			width: theme.spacing(7) + 1,
			[theme.breakpoints.up("sm")]: {
				width: theme.spacing(9) + 1,
			},
		},
		drawerDark: {
			backgroundColor: "#292b2f",
		},
		drawerLight: {
			backgroundColor: "#fff",
		},
		drawerBlue:{
			backgroundColor: "#21283B",
		},
		textLight: {
			color: "white",
		},
		textDark: {
			color: "#888DA8",
		},
		icons: {
			fontSize: 23,
		},
		toolbar: {
			display: "flex",
			alignItems: "center",
			justifyContent: "flex-end",
			padding: theme.spacing(0, 1),
			// necessary for content to be below app bar
			...theme.mixins.toolbar,
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
		},
		listItems: {
			marginTop: theme.spacing(4),
			marginBottom: theme.spacing(2),
			marginLeft: theme.spacing(1),
			marginRight: "auto",

			width: "75%",
			"& a": { textDecoration: "none" },
			"&:hover, &:active": {
				borderRadius: "4px",
				marginTop: theme.spacing(4),
				marginBottom: theme.spacing(2),
				marginLeft: theme.spacing(1),
			},
		},
		listItemsDark: {
			"&:hover, &:active": { backgroundColor: "#575757" },
		},
		listItemsLight: {
			"&:hover, &:active": { backgroundColor: "#e8f0fe" },
		},
		paper:{
			zIndex:100
		},
		menuButton: {
			marginRight: theme.spacing(2),
			
		},
	})
);

const SideDrawer = props => {
	const classes = useStyles();
	const theme = useTheme();

	const drawerItems = [
		{
			id: 1,
			item: "Home",
			icon: <MdHome />,
		},
		{
			id: 2,
			item: "Chat",
			icon: <MdChatBubble />,
		},
		{
			id: 3,
			item: "Pages",
			icon: <MdPages />,
		},
		{
			id: 4,
			item: "Videos",
			icon: <MdVideocam />,
		},
		{
			id: 5,
			item: "Groups",
			icon: <MdGroup />,
		},
		{
			id: 6,
			item: "Courses",
			icon: <SiCoursera />,
		},
		{
			id: 7,
			item: "Questions",
			icon: <MdQuestionAnswer />,
		},
		{
			id: 8,
			item: "Jobs",
			icon: <MdWork />,
		},
	];


	return (
		<div className={classes.root}>
			<CssBaseline />
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: props.showDrawer,
					[classes.drawerClose]: !props.showDrawer,
				})}
				classes={{
					paper: clsx(classes.paper,
						{
							[classes.drawerDark]: props.Theme === 'dark',
							[classes.drawerLight]: props.Theme === 'light',
							[classes.drawerBlue]: props.Theme === 'darkblue',
						},
						{
							[classes.drawerOpen]: props.showDrawer,
							[classes.drawerClose]: !props.showDrawer,
						}
					),
				}}>
				<div className={classes.toolbar}>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color='default'
						aria-label="open drawer"
						onClick={props.showDrawer ? props.closeDrawer : props.openDrawer}>
						{props.showDrawer ? <CgMenuRight style={{color:props.textColor}} /> : <CgMenuLeft style={{color:props.textColor}}/>}
					</IconButton>
					{/* <IconButton onClick={props.drawerClose}>
						{theme.direction === "rtl" ? (
							<ChevronRightIcon
								className={clsx(classes.icons, {
									[classes.textLight]:  props.Theme === 'dark',
									[classes.textDark]:  props.Theme === 'light',
								})}
							/>
						) : (
							<ChevronLeftIcon
								className={clsx(classes.icons, {
									[classes.textLight]: props.Theme === 'dark' || props.Theme ==='darkblue',
									[classes.textDark]: props.Theme === 'light',
								})}
							/>
						)}
					</IconButton> */}
				</div>
				<Divider />
				<List>
					{drawerItems.map(item => {
						return (
							<ListItem
								className={clsx(classes.listItems, {
									[classes.listItemsDark]: props.Theme === 'dark' || props.Theme ==='darkblue',
									[classes.listItemsLight]: props.Theme === 'light',
								})}
								button>
								<ListItemIcon
									className={clsx(classes.icons, {
										[classes.textLight]: props.Theme === 'dark' || props.Theme ==='darkblue',
										[classes.textDark]:  props.Theme === 'light',
									})}>
									{item.icon}
								</ListItemIcon>
								<ListItemText
									className={clsx({
										[classes.textLight]: props.Theme === 'dark' || props.Theme ==='darkblue',
										[classes.textDark]:  props.Theme === 'light',
									})}>
									<NavLink
										to={`/${item.item}`}
										style={{ color: props.textColor }}>
										{item.item}
									</NavLink>
								</ListItemText>
							</ListItem>
						);
					})}
				</List>
			</Drawer>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		textColor: state.settings.textColor,
		Theme: state.settings.theme,
		showDrawer: state.settings.showDrawer,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		openDrawer: () => dispatch(handleDrawerOpen()),
		closeDrawer: () => dispatch(handleDrawerClose()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
