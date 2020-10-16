import React from 'react'
import HomeGridLayout from '../../Layout/Grid/HomeGridLayout'
import AddPost from '../AddPost/AddPost'
import NavBar from '../Navbar/NavBar'


const HomePage = () => {
    return (
        <div>
       <NavBar/>
            <HomeGridLayout>
                    <AddPost/>
                
            </HomeGridLayout>
        </div>
    )
}

export default HomePage
