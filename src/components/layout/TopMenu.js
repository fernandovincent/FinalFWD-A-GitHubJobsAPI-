import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link, BrowserRouter} from 'react-router-dom';

const TopMenu = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar bg="secondary" variant="light">
          <Link to="/">
            <Navbar.Brand>GitHub Jobs</Navbar.Brand>
          </Link>
          
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </BrowserRouter>
  );
}

export default TopMenu;