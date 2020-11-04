import React from 'react'
import { makeStyles,fade } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({

    avatar:{
        width:theme.spacing(6),
        height:theme.spacing(6),
        marginRight:theme.spacing(2)
    },

  }));


const TagFriends = (props:any) => {
    const classes = useStyles()
    return (
     
            <div className="search-friends">
                <div className="search-friends__head">
                    <div className={`inputContainer ${props.theme}-inputContainer`}>
                        <SearchIcon className="searchIcon" />
                        <input className={`search-friends__input ${props.theme}-search-friends__input`} placeholder="Search For Friends" />
                    </div>
                    <a >Done</a>
                </div>
                <div className="search-friends__suggestions">
                      <h4 className='suggestions__title'>SUGGESTIONS</h4>  

                      <div className={`suggested__friend  ${props.theme}-suggested__friend`}>
                      <Avatar alt="User Profile" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className={classes.avatar}/>
                      <h3>User Name</h3>
                      </div>

                      <div className={`suggested__friend  ${props.theme}-suggested__friend`}>
                      <Avatar alt="User Profile" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className={classes.avatar}/>
                      <h3>Name</h3>
                      </div>

                      <div className={`suggested__friend  ${props.theme}-suggested__friend`}>
                      <Avatar alt="User Profile" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className={classes.avatar}/>
                      <h3>Name</h3>
                      </div>
                      <div className={`suggested__friend  ${props.theme}-suggested__friend`}>
                      <Avatar alt="User Profile" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className={classes.avatar}/>
                      <h3>Name</h3>
                      </div>
                      <div className={`suggested__friend  ${props.theme}-suggested__friend`}>
                      <Avatar alt="User Profile" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className={classes.avatar}/>
                      <h3>Name</h3>
                      </div>
                      <div className={`suggested__friend  ${props.theme}-suggested__friend`}>
                      <Avatar alt="User Profile" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className={classes.avatar}/>
                      <h3>Name</h3>
                      </div> <div className={`suggested__friend  ${props.theme}-suggested__friend`}>
                      <Avatar alt="User Profile" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className={classes.avatar}/>
                      <h3>Name</h3>
                      </div> <div className={`suggested__friend  ${props.theme}-suggested__friend`}>
                      <Avatar alt="User Profile" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className={classes.avatar}/>
                      <h3>Name</h3>
                      </div>
                </div>  
            </div>
      
    )
}

export default TagFriends
