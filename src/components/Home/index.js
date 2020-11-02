import React  from 'react'
import HomeGridLayout from '../../Layout/Grid/HomeGridLayout'
import AddPost from '../AddPost/AddPost.js'
import NavBar from '../Navbar/NavBar'
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
