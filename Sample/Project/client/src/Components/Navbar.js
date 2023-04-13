import React from 'react'
import {NavLink} from 'react-router-dom'
// import Signup from './Components/Signup';
// import Login from './Login';

function Navbar() {
  return (
    <div>
         <nav>
              <NavLink to='/examination'>Examination</NavLink>
              <NavLink to='/result'>Result</NavLink>
              <NavLink to='/payments'>Payments</NavLink>
              <NavLink to='/user'>User</NavLink>
              <button type="button" class="btn btn-outline-warning">Signup</button>
              <a href="./Login.js" class="badge badge-light">Login</a>
         </nav>
    </div>
    
  )
}

export default Navbar






