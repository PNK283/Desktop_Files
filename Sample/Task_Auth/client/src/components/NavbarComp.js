import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Examination from './Examination';
import Results from './Results';
import Payments from './Payments';
import AddUser from './AddUser';
import DeleteUser from './DeleteUser';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';

function NavbarComp() {
  return (
    <Router>
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
      <Container fluid>
        <Navbar.Brand as={Link} to={"/home"}>Tuition World</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/examination"}>Examination</Nav.Link>
            <Nav.Link as={Link} to={"/results"}>Results</Nav.Link>
            <Nav.Link as={Link} to={"/payments"}>Payments</Nav.Link>
            <NavDropdown title="User" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to={"/adduser"}>Add User</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/deleteuser"}>
                 Delete User
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={"/signup"}>Signup</Nav.Link>
            <Nav.Link eventKey={2} as={Link} to={"/login"}>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div>
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/examination' element={<Examination/>}></Route>
            <Route path='/results' element={<Results/>}></Route>
            <Route path='/payments' element={<Payments/>}></Route>
            <Route path='/adduser' element={<AddUser/>}></Route>
            <Route path='/deleteuser' element={<DeleteUser/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>

    </div>
    </Router>
  )
}

export default NavbarComp
