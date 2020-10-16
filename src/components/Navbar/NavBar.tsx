import React, { useState,useRef } from 'react'
import {Form,Overlay,Popover,Nav,Navbar} from 'react-bootstrap'
import './nav.css'
import { FaAngleDown } from "react-icons/fa";
import { connect } from 'react-redux'
import ToggleSwitch from '../../Layout/Toggle';




interface Props{
  navColor:string;
  navLogo:string;
  textColor:string;
}

const NavBar : React.FC<Props> = (props) => {
    const [show, setShow] = useState(false)
    const [target, setTarget] = useState(null);
    const ref = useRef(null)

    const handleClick = (event:any) => {
        setShow(!show);
        setTarget(event.target);
      };
    
 
    return (
        <>
        <Navbar collapseOnSelect expand="lg" className='nav-bar' fixed="top" style={{backgroundColor:props.navColor}}>
            <Navbar.Brand href="#home">
                <img src={props.navLogo} 
                style={{width:180,height:40,objectFit:'contain'}} alt="gb-logo" />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{width:500,alignItems:'center'}}>
             <Form.Control type="email" placeholder="Search Friends" />
             <Nav.Link href="#deets" style={{color:props.textColor}} id="findFriends"> FindFriends</Nav.Link> 
          </Nav>

          <Nav>
            <Nav.Link href="#deets" style={{color:props.textColor}}>Home</Nav.Link>
            <Nav.Link href="#deets" style={{color:props.textColor}}>Message</Nav.Link>
            <Nav.Link href="#deets" style={{color:props.textColor}}>Stream</Nav.Link>
            <Nav.Link href="#deets" style={{color:props.textColor}}>Notification</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" onClick={handleClick} style={{color:props.textColor}}>
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
                        <ToggleSwitch />
                    </Popover.Content>
                    </Popover>
                </Overlay>
        </>
    )
}

const mapStateToProps = (state:any) =>{
  return{
    navColor:state.settings.navBg,
    navLogo:state.settings.navLogo,
    textColor:state.settings.textColor
  }
}

const mapDispatchToProps = (dispatch:any) =>{
  return{

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
