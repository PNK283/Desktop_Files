import React, {useState, createContext} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import Myprofile from './Myprofile';

export const store = createContext();

const Dashboard = () => {
    const[token, setToken] = useState(null);
  return (
  <div>
  <store.Provider value={[token, setToken]}>
    <Router>
    <div>
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link  as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    <div>
            <Routes>
                <Route exact path='/register' element={<Register/>}/>
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/myprofile' element={<Myprofile/>}/>
                </Routes>

    </div>
    </div>
    </Router>
    </store.Provider>
    </div>
  )
}

export default Dashboard;

