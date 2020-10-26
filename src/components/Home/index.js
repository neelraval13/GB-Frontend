import React, { useEffect } from 'react'
import { setDarkTheme, setLightTheme } from '../../appRedux/actions/Settings'
import HomeGridLayout from '../../Layout/Grid/HomeGridLayout'
import AddPost from '../AddPost/AddPost.js'
import NavBar from '../Navbar/NavBar'
import { connect } from 'react-redux'
import Stories from '../Stories/Stories'
import TimelineCard from '../TimelineCard/TimelineCard'


const HomePage = () => {
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



export default HomePage;
