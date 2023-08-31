import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationMenu = () => {
  return (
    <>
      <Navbar className='header mb-4'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/achievements">Achievements</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    </>
  );
};

export default NavigationMenu;
