import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';
import Articles from './components/Articles/Articles';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="">
      
     
     <Router>
     <Header></Header>
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
     <Switch>
       <Route exact path="/home">
          <Home></Home>
       </Route>
       <Route exact path ="/service">
          <Services></Services>
       </Route>
       <Route exact path="/about">
         <AboutUs></AboutUs>
       </Route>
       <Route exact path="/articles">
         <Articles></Articles>
       </Route>
       <Route exact path ='*'>
          <ErrorPage></ErrorPage>
       </Route>
       <Route exact  path ='/'>
          <Home></Home>
       </Route>
     </Switch>
     <Footer></Footer>
     </Router>
     
    </div>
  );
}

export default App;
