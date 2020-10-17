import React, { useEffect } from 'react'
import { setDarkTheme, setLightTheme } from '../../appRedux/actions/Settings'
import HomeGridLayout from '../../Layout/Grid/HomeGridLayout'
import AddPost from '../AddPost/AddPost.js'
import NavBar from '../Navbar/NavBar'
import { connect } from 'react-redux'
import Stories from '../Stories/Stories'
import TimelineCard from '../TimelineCard/TimelineCard'


const HomePage = (props) => {

    useEffect(() =>{
        let theme = localStorage.getItem('theme')
        if(theme){
            if(theme === 'light') props.lightTheme()
            else props.darkTheme()
        }
    },[])


    return (
        <div>
       <NavBar/>
            <HomeGridLayout>
                <Stories />
                <AddPost/>
                <TimelineCard />
                <TimelineCard />
                
            </HomeGridLayout>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return{
        darkTheme:() => dispatch(setDarkTheme()),
        lightTheme:() => dispatch(setLightTheme())
    }
}

export default connect(null,mapDispatchToProps)(HomePage)
