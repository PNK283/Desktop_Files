import React,{useState, useContext} from 'react'
import axios from 'axios';
import { store } from './Dashboard';
import { Navigate} from 'react-router';

const Login = () => {
    const [token, setToken] = useContext(store)
    const [data, setData] = useState({
        email:'',
        password:'',
    })
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/login', data).then(
            res => setToken(res.data.token)
        )
    }
    if(token){
     return  <Navigate to='/myprofile'/>
    }
  return (
    <div>
      <center>
        <h1>Login Page</h1>
        <form onSubmit={submitHandler} autoComplete="off">
            <input type="email" onChange={changeHandler} name='email' placeholder='Email'/><br/>
            <input type="password" onChange={changeHandler} name='password' placeholder='Password'/><br/><br/>
            <input type="submit" value="Login"/>
         </form>
      </center>
    </div>
  )
}

export default Login;
