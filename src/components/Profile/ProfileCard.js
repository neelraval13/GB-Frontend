import React from "react"
import { connect } from "react-redux";
import clsx from 'clsx';
import { Card, CardMedia, Avatar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SocialIcon } from 'react-social-icons'
import { Instagram, Facebook, Twitter, LinkedIn, YouTube } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 275,
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
        padding: "7px",
        borderRadius: "50%",
        backgroundColor: "white"
    },
    profileImage: {
        width: theme.spacing(18),
        height: theme.spacing(18),
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
        fontSize: "15px"
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
    }
}));

const ProfileCard = props => {
    const classes = useStyles();
    let dark = props.Theme === "dark";

    return(
        <div>
            <Card 
                className={classes.root}
                style={dark ? {border: "1px solid #656565", backgroundColor: "#292b2f"} : {border: "1px solid #c5c5c5", backgroundColor: "white"}}
            >
                <CardMedia 
                    className={classes.media}
                    image="https://www.wallpaperflare.com/static/811/176/33/lake-sunset-horizon-night-wallpaper.jpg"
                >
                    <div
                        className={classes.profileImageWrapper}
                        style={dark ? {backgroundColor: "#292b2f"} : {backgroundColor: "white"}}
                    >
                        <Avatar 
                            className={classes.profileImage}
                            style={dark ? {border: "1px solid #a0a0a0"} : {border: "1px solid #3e3e3e"}}
                            src="https://bestprofilepix.com/wp-content/uploads/2014/02/stylish-little-boy-profile-pic.jpg"
                            alt="boy"
                        />
                    </div>
                    
                </CardMedia>
                <div
                    className={classes.nameWrapper}
                >
                    <div 
                        className={classes.iconWrapper}
                        style={dark ? {color: "white"} : {}}
                    >
                        {/* <Instagram 
                            className={classes.icons}
                        />
                        <Facebook 
                            className={classes.icons}
                        />
                        <Twitter 
                            className={classes.icons}
                        />
                        <YouTube 
                            className={classes.icons}
                        />
                        <LinkedIn 
                            className={classes.icons}
                        /> */}
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
                            className={clsx(classes.name, {
                                [classes.textLight]: dark,
                                [classes.textDark]: !dark,
                            })}
                        >
                            Aravind Kumar
                        </div>
                        <div
                            className={clsx(classes.subName, {
                                [classes.textLight]: dark,
                                [classes.textDark]: !dark,
                            })}
                        >
                            AKG Kurup
                        </div>
                    </div>
                    <div
                        className={classes.statsWrapper}
                    >
                        <div
                            className={clsx(classes.statsColumn, {
                                [classes.btnLight]: dark,
                                [classes.btnDark]: !dark,
                            })}
                        >
                            <div>
                                Posts
                            </div>
                            <div>
                                1000
                            </div>
                        </div>
                        <div
                            className={clsx(classes.statsColumn, {
                                [classes.btnLight]: dark,
                                [classes.btnDark]: !dark,
                            })}
                        >
                            <div>
                                Friends
                            </div>
                            <div>
                                200
                            </div>
                        </div>
                        <div
                            className={clsx(classes.statsColumn, {
                                [classes.btnLight]: dark,
                                [classes.btnDark]: !dark,
                            })}
                        >
                            <div>
                                Followers
                            </div>
                            <div>
                                10k
                            </div>
                        </div>
                        <div
                            className={clsx(classes.statsColumn, {
                                [classes.btnLight]: dark,
                                [classes.btnDark]: !dark,
                            })}
                        >
                            <div>
                                Following
                            </div>
                            <div>
                                10
                            </div>
                        </div>
                    </div>
                </div>
                <hr 
                    style={dark ? {borderTop: '0.1px solid #636363', borderBottom: 'none',height: '0.1px'} : {borderTop: '0.1px solid #c5c5c5', borderBottom: 'none',height: '0.1px'}}
                />
                <div
                    className={classes.cardBottomWrapper}
                >
                    <div
                        className={classes.bioWrapper}
                    >
                        <div
                            className={clsx(classes.bio, {
                                [classes.textLight]: dark,
                                [classes.textDark]: !dark,
                            })}
                        >
                            Bio
                        </div>
                        <Button 
                            style={{textTransform: "none"}}
                            className={clsx(classes.btn, {
                                [classes.btnLight]: dark,
                                [classes.btnDark]: !dark,
                            })}
                        >
                            Edit Profile
                        </Button>
                    </div>
                    <div
                        className={clsx(classes.descriptionWrapper, {
                            [classes.textLight]: dark,
                            [classes.textDark]: !dark,
                        })}
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