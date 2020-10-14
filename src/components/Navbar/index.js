import React, { useState,useRef } from 'react'
import {Form,FormControl,Button,Overlay,Popover,Nav,Navbar} from 'react-bootstrap'
import './nav.css'
import { FaAngleDown } from "react-icons/fa";

const AppHeader = () => {
    const [show, setShow] = useState(false)
    const [target, setTarget] = useState(null);
    const ref = useRef(null)

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
      };
    
 
    return (
        <>
        <Navbar collapseOnSelect expand="lg" className='nav-bar'>
            <Navbar.Brand href="#home">
                <img src={require('../../assets/company/gb.png')} 
                style={{width:180,height:40,objectFit:'contain'}} />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{width:500,alignItems:'center'}}>
             <Form.Control type="email" placeholder="Search Friends" />
             <Nav.Link href="#deets" > FindFriends</Nav.Link> 
          </Nav>

          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#deets">Message</Nav.Link>
            <Nav.Link href="#deets">Stream</Nav.Link>
            <Nav.Link href="#deets">Notification</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" onClick={handleClick}>
             <img src="https://cdn4.vectorstock.com/i/1000x1000/06/18/male-avatar-profile-picture-vector-10210618.jpg" className="rounded avatar" />
              Profile
              <FaAngleDown  />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
                 <Overlay
                        show={show}
                        target={target}
                        placement="bottom"
                        container={ref.current}
                        containerPadding={20}
                    >
                    <Popover id="popover-contained">
                    <Popover.Title as="h3">Popover bottom</Popover.Title>
                    <Popover.Content>
                        <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Content>
                    </Popover>
                </Overlay>
        </>
    )
}

export default AppHeader
