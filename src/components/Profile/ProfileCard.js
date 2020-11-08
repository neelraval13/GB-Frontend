import React from "react"
import { connect } from "react-redux";
import clsx from 'clsx';
import { Card, CardMedia, Avatar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SocialIcon } from 'react-social-icons'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MessageIcon from '@material-ui/icons/Message';
import SettingsIcon from '@material-ui/icons/Settings';
import EditIcon from '@material-ui/icons/Edit';
import "../../styles/global/global.scss";


const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 275,
      borderRadius: "6px",
      marginTop: theme.spacing(8)
    },
    media: {
        height: theme.spacing(60),
        minHeight: "422px",
        position: "relative",
        display: "flex",
        justifyContent: "center"
    },
    profileImageWrapper: {
        position: "absolute",
        bottom: "-30px",
        padding: "6px",
        borderRadius: "50%",
        backgroundColor: "white"
    },
    profileImage: {
        width: "124px",
        height: "124px",
    },
    nameWrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        paddingTop: "10px",
        paddingBottom: "20px"
    },
    totalName: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "50px",
        paddingTop: "40px"
    },
    subName: {
        fontWeight: "500",
        paddingBottom: theme.spacing(2)
    },
    textLight: {
        color: "white",
    },
    textDark: {
        color: "#353535",
    },
    btn: {
        fontWeight: "600"
    },
    btnLight: {
        color: "white"
    },
    btnDark: {
        color: "#585858"
    },
    name: {
        fontWeight: "700",
        fontSize: "22px"
    },
    edit: {
        fontWeight: "500",
        fontSize: "18px"
    },
    cardBottomWrapper: {
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        paddingTop: "10px",
        paddingBottom: "25px",
        alignItems: "center"
    },
    bioWrapper: {
        display: "flex",
        paddingBottom: "10px",
        justifyContent: "space-between",
        alignItems: "center"
    },
    bio: {
        fontSize: "18px",
        fontWeight: "600"
    },
    iconWrapper: {
        display: "flex",
        width: "30%",
        justifyContent: "space-between",
        paddingTop: "20px"
    },
    statsWrapper: {
        display: "flex",
        width: "30%",
        justifyContent: "space-between",
        height: "70px",
        marginTop: "20px"
    },
    statsColumn: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        fontWeight: "600",
        fontSize: "14px"
    },
    statusTitle: {
        fontWeight: "700",
        fontSize: "16px"
    },
    descriptionWrapper: {
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "1.5",
        paddingTop: "10px"
    },
    icons: {
        fontSize: "40px",
        height: `${theme.spacing(5)}px !important`,
        width: `${theme.spacing(5)}px !important`,
    },
    groupIconsWrapper: {
        position: "absolute",
        bottom: "-32px",
        width: "100%",
        display: "flex",
        paddingRight: "30px",
        justifyContent: "flex-end",
    },
    groupIconsWrapperInner: {
        display: "flex",
    },
    groupIcons: {
        borderRadius: "50%",
        fontSize: "50px",
        padding: "12.5px",
        color: "white"
    }
}));

const ProfileCard = props => {
    const classes = useStyles();
    let dark = props.Theme === "dark";

    return(
        <div>
            <Card 
                className={`${props.Theme}-background ${props.Theme}-border ${classes.root}`}
            >
                <CardMedia 
                    className={classes.media}
                    image="https://www.wallpaperflare.com/static/811/176/33/lake-sunset-horizon-night-wallpaper.jpg"
                >
                    <div
                        className={`${props.Theme}-background  ${classes.profileImageWrapper}`}
                    >
                        <Avatar 
                            className={classes.profileImage}
                            src="https://bestprofilepix.com/wp-content/uploads/2014/02/stylish-little-boy-profile-pic.jpg"
                            alt="boy"
                        />
                    </div>
                    <div
                        className={classes.groupIconsWrapper}
                    >
                        <div
                            className={classes.groupIconsWrapperInner}
                        >
                            <IconButton
                                style={{padding: "10px"}}
                            >
                                <PersonAddIcon
                                    className={classes.groupIcons}
                                    style={{backgroundColor: "#38A9FF"}}
                                />
                            </IconButton>
                            <IconButton
                                style={{padding: "10px"}}
                            >
                                <AddIcon 
                                    className={classes.groupIcons}
                                    style={{backgroundColor: "#7C5AC2"}}
                                />
                            </IconButton>
                            <IconButton
                                style={{padding: "10px"}}
                            >
                                <MessageIcon 
                                    className={classes.groupIcons}
                                    style={{backgroundColor: "#FF5E3A"}}
                                />
                            </IconButton>
                            <IconButton
                                style={{padding: "10px"}}
                            >
                                <SettingsIcon 
                                    className={classes.groupIcons}
                                    style={{backgroundColor: "#ED204B"}}
                                />
                            </IconButton>
                        </div>
                    </div>
                </CardMedia>
                <div
                    className={classes.nameWrapper}
                >
                    <div 
                        className={classes.iconWrapper}
                        style={dark ? {color: "white"} : {}}
                    >
                        <SocialIcon network="instagram" className={classes.icons} />
                        <SocialIcon network="twitter" className={classes.icons} />
                        <SocialIcon network="facebook" className={classes.icons} />
                        <SocialIcon network="youtube" className={classes.icons} />
                        <SocialIcon network="linkedin" className={classes.icons} />
                        <SocialIcon network="google" className={classes.icons} />
                    </div>
                    <div
                        className={classes.totalName}
                    >
                        <div
                            className={`${props.Theme}-text-primary  ${classes.name}`}
                        >
                            Aravind Kumar
                        </div>
                        <div
                            className={`${props.Theme}-text-secondary  ${classes.subName}`}
                        >
                            AKG Kurup
                        </div>
                    </div>
                    <div
                        className={classes.statsWrapper}
                    >
                        <div
                            className={classes.statsColumn}
                        >
                            <div 
                                className={`${props.Theme}-text-primary  ${classes.statusTitle}`}
                            >
                                1000
                            </div>
                            <div
                                className={`${props.Theme}-text-secondary`}
                            >
                                Posts
                            </div>
                        </div>
                        <div
                            className={classes.statsColumn}
                        >
                            <div 
                                className={`${props.Theme}-text-primary  ${classes.statusTitle}`}
                            >
                                200
                            </div>
                            <div
                                className={`${props.Theme}-text-secondary`}
                            >
                                Friends
                            </div>
                        </div>
                        <div
                            className={classes.statsColumn}
                        >
                            <div 
                                className={`${props.Theme}-text-primary  ${classes.statusTitle}`}
                            >
                                10k
                            </div>
                            <div
                                className={`${props.Theme}-text-secondary`}
                            >
                                Followers
                            </div>
                        </div>
                        <div
                            className={classes.statsColumn}
                        >
                            <div 
                                className={`${props.Theme}-text-primary  ${classes.statusTitle}`}
                            >
                                10
                            </div>
                            <div
                                className={`${props.Theme}-text-secondary`}
                            >
                                Following
                            </div>
                        </div>
                    </div>
                </div>
                <hr 
                    className={`${props.Theme}-border-hr`}
                />
                <div
                    className={classes.cardBottomWrapper}
                >
                    <div
                        className={classes.bioWrapper}
                    >
                        <div
                            className={`${props.Theme}-text-primary  ${classes.bio}`}
                        >
                            Bio
                        </div>
                        <IconButton>
                            <EditIcon 
                                className={`${props.Theme}-text-primary`}
                            />
                        </IconButton>
                    </div>
                    <div
                        className={`${props.Theme}-text-secondary ${classes.descriptionWrapper}`}
                    >
                        fsdfsdf sdfsdfsdf sfsdfsd sdf sff. in the Universe|Only Actor to
                        win max dfs f dfs dfsd fsd fds fsd fs sdf sd f sdf sd fs df fsdtitles
                        in entire history ever|MissUniverseI|IITian|Theatric|Athlet
                    </div>
                </div>
            </Card>
        </div>
    );
}

const mapStateToProps = state => {
	return {
		Theme: state.settings.theme
	};
};

export default connect(mapStateToProps, null)(ProfileCard);