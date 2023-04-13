import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    BrowserRouter,
    Routes,
    Route,
    Link} from 'react-router-dom'
import './styles.css';
import Home from './Components/Home';
import Courses from './Components/Courses';
import Trainers from './Components/Trainers';
import Gallery from './Components/Gallery';
import Pricing from './Components/Pricing';
import About from './Components/About';
import Contact from './Components/Contact';

function Dashboard() {
  return (
    <div>
    <BrowserRouter>
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" className='navbar'>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
              <img src='Image.jpg' className='logo'></img>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/home' >Home</Nav.Link>
            <Nav.Link as={Link} to='/courses' >Courses</Nav.Link>
            <Nav.Link as={Link} to='/trainers' >Trainers</Nav.Link>
            <Nav.Link as={Link} to='/pricing' >Pricing</Nav.Link>
            <Nav.Link as={Link} to='/gallery' >Gallery</Nav.Link>
            <Nav.Link as={Link} to='/about' >About</Nav.Link>
            <Nav.Link as={Link} to='/contact' >Contact</Nav.Link>
          </Nav>
          <Nav className="right-side-icons">
            <Nav.Link href="#deets">Sign up</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
        <Routes>
             <Route path='/home' element={<Home/>}/>
             <Route path='/courses' element={<Courses/>}/>
             <Route path='/trainers' element={<Trainers/>}/>
             <Route path='/gallery' element={<Gallery/>}/>
             <Route path='/pricing' element={<Pricing/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </div>
    </BrowserRouter>
    </div>
  )
}

export default Dashboard
