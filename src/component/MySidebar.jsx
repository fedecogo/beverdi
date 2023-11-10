import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import Logo from '../playerbuttons/logo.png'

const Sidebar = () => {
  const handleSearch = (event) => {
    event.preventDefault();
  };

  return (
    <div className="col col-2">
      <Navbar expand="md" fixed="left" className="justify-content-between" id="sidebar">
        <div className="container flex-column align-items-start">
          <Navbar.Brand href="index.html">
            <img
              src={Logo}
              alt='ff'
              width="131"
              height="40"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="navbar-nav">
              <ul>
                <li>
                  <Nav.Link href="#" className="nav-item nav-link d-flex align-items-center">
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="#" className="nav-item nav-link d-flex align-items-center">
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </Nav.Link>
                </li>
                <li>
                  <Form onSubmit={handleSearch} className="input-group mt-3">
                    <FormControl
                      type="text"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <Button variant="outline-secondary" type="submit" size="sm" className="h-100">
                        GO
                      </Button>
                    </div>
                  </Form>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div className="nav-btn">
          <Button variant="primary" type="button" className="signup-btn">
            Sign Up
          </Button>
          <Button variant="secondary" type="button" className="login-btn">
            Login
          </Button>
          <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
        </div>
      </Navbar>
    </div>
  );
};

export default Sidebar;
