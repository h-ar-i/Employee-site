import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
    <Link to={'/'}  style={{textDecoration:'none'}}>
    <Navbar className="bg-primary">
      <Container>
      <i className="fa-solid fa-users-viewfinder me-2"></i> 
        <Navbar.Brand href="#home">EMPLOYEE PORTAL</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <input className='me-2 '  type="text" placeholder='search here' /> 
           <b> Signed in as: </b><a href="#login">User86***</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Link>
    </>
  )
}

export default Header