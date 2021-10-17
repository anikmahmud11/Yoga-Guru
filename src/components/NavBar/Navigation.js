import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
  const {user, logOut}= useAuth();
    return (
        
            <Navbar sticky="top" bg="success bg-opacity-50" expand="lg">
  <Container fluid>
   <img style={{width:"7%",borderRadius:"20px"}} src="https://c.ndtvimg.com//yoga_625x300_1529482160763.jpg" alt="" />
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0 "
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/home" className="btn-outline-success  rounded m-3" style={{color:"white"}}>Home</Nav.Link>
        <Nav.Link as={Link} to="/service" className=" btn-outline-success m-3 rounded "style={{color:"white"}}>Services</Nav.Link>
        <Nav.Link as={Link} to="/about" className=" btn-outline-success m-3 rounded " style={{color:"white"}}>About Us</Nav.Link>
        <NavDropdown className=" btn-outline-success m-3 rounded " title="More" id="navbarScrollingDropdown">
          <NavDropdown.Item as={Link} to="/articles">Articles</NavDropdown.Item>
         
        </NavDropdown>
        {user?.email ?
            <Nav.Link onClick={logOut} as={Link} to="/login" className=" btn-outline-success m-3 rounded " style={{color:"white"}}>LogOut</Nav.Link>:
            <Nav.Link as={Link} to="/login" className=" btn-outline-success m-3 rounded " style={{color:"white"}}>Login</Nav.Link>
            }
      </Nav>
      <Navbar.Text className="mx-5">
          Signed in as : {user?.displayName}
        </Navbar.Text>
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
        
    );
};

export default Navigation;