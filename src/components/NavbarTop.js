import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarTop.css';
import companyLogo from "./logo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Image from "react-bootstrap/Image";

export default function NavbarTop() {


// ................................................................................



  return (
    <div >

<Navbar bg="white" expand="lg" >
      <Container >
        <Navbar.Brand href="/">
          <img src={companyLogo}  className="d-inline-block align-top" alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto ">
            <Nav.Link href="/" className='nav-link scrollto'>Home</Nav.Link>

            <NavDropdown title="Services" id="basic-nav-dropdown">
              <Nav.Link><Link className='drop-link' to='/services'>Services</Link></Nav.Link>
              <Nav.Link><Link className='drop-link' to='/courses'>Courses</Link></Nav.Link>
              
            </NavDropdown>

            <NavDropdown title="About" id="basic-nav-dropdown">
            <Nav.Link><Link className='drop-link' to='/about'>About</Link></Nav.Link>
            <Nav.Link><Link className='drop-link' to='/news'>News</Link></Nav.Link>
            <Nav.Link><Link className='drop-link' to='/accreditation'>Accreditation</Link></Nav.Link>
            </NavDropdown>


            <Nav.Link href="/contact" className="nav-link scrollto">Contact Us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    

    </div>
  );
}

