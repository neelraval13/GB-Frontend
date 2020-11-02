import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import {FaUserTag,FaLock,FaGlobeAsia} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) =>
  createStyles({
    description: {
      display: 'flex',
      alignItems:'flex-start',
      '& > *': {
        margin: theme.spacing(3),
      },
      paddingTop:10
      
    },
    avatar:{
        width:theme.spacing(6),
        height:theme.spacing(6),
    },
    darkText:{
        color:'white',
        margin:0,
    },
    lightText:{
        color:'black',
        margin:0,
    },
    settings:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
        border:"1.5px solid #D3D3D3",
        borderRadius:5,
        marginLeft:25,
        marginRight:25,
    },
    settingsInline:{
        display:'flex',
        flexDirection:'row',
    },
    addBtn:{
        marginLeft:25,
        marginRight:25,
        marginTop:20,
    }
  }),
);
const PostAction  = (props) => {
    const classes = useStyles();
    
    return (
        <div>
            <div className={classes.description}>
                <Avatar alt="User Profile" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className={classes.avatar}/>
                <TextField 
                fullWidth
                label="Share what you are thinking..." 
                color='secondary' 
                multiline
                rowsMax={3}
                InputProps={{ 
                    disableUnderline: true,
                    className:props.theme === 'dark' ?classes.darkText:classes.lightText
                }}
                InputLabelProps={{
                    className:props.theme === 'dark' ?classes.darkText:classes.lightText
                }}
                
                />
            </div>
            <div className={classes.settings}>
                    <h5>Settings</h5>
                    <div className={classes.settingsInline}>
                    <IconButton 
                    color="primary"  
                    component="span" 
                    className={classes.iconButtons}
                    onClick={props.handleTagFriendsOpen}
                    >
                        <FaUserTag className={classes.settingsIcons} />
                    </IconButton>

                    <IconButton 
                    color="secondary"  
                    component="span" 
                    className={classes.iconButtons}
                    onClick={props.handleOpenLocation}
                    >
                            <MdLocationOn className={classes.settingsIcons}/>
                    </IconButton>

                    <IconButton   
                    component="span" 
                    className={classes.iconButtons}
                    onClick={props.handleOpenPostSettings}
                    >
                            <FaGlobeAsia className={classes.settingsIcons} style={{color:'grey'}}/>
                    </IconButton>
                       
                        
                    </div>
            </div>
            <div className={classes.addBtn}>
                    <Button 
                    fullWidth
                    variant="contained" 
                    style={{backgroundColor:'#ed204b',color:'#fff'}}
                    >
                    Add Post
                </Button>
            </div>

        </div>
    )
}

export default PostAction 
