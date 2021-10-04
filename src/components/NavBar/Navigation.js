import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Navbar bg="success bg-opacity-50" expand="lg">
  <Container fluid>
   <img style={{width:"10%",borderRadius:"20px"}} src="https://c.ndtvimg.com//yoga_625x300_1529482160763.jpg" alt="" />
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/service">Services</Nav.Link>
        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
        <NavDropdown title="More" id="navbarScrollingDropdown">
          <NavDropdown.Item as={Link} to="/articles">Articles</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;