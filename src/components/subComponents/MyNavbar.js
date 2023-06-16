import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../../sass/homepage.scss'
import { useNavigate } from 'react-router-dom';
import CommonButton from './CommonButton';
const MyNavbar = () => {
  return (
    <Navbar  expand="lg">
    <div className='myBigContainer d-flex align-items-center'>
      <Navbar.Brand href="#home">
          <img src="./assets/images/homepage/logo.png" alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto align-items-center">
          
          <NavDropdown className="active" title="Product" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/aboutus" >About Us</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
        </Nav>
          <div className="buttons ms-auto d-flex">
              <CommonButton icon="" onclick="/aboutus" name="Get Started" type="active" linktype="button"/>
              <CommonButton icon="" extrastyle={{marginLeft:'24px'}} onclick="/aboutus" name="Login" type="" linktype="button"/>
          </div>
      </Navbar.Collapse>
    </div>
  </Navbar>
  )
}

export default MyNavbar