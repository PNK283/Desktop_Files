import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const Register = () => {
    const [data, setData] = useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    })
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/register', data).then(
            res => alert(res.data)
        )
    }
  return (
    <div>
      <center>
        <h1>Register Page</h1>
        <form onSubmit={submitHandler}>
            <input type="text" onChange={changeHandler} name='username' placeholder='UserName'/><br/>
            <input type="email" onChange={changeHandler} name='email' placeholder='Email'/><br/>
            <input type="password" onChange={changeHandler} name='password' placeholder='Password'/><br/>
            <input type="password" onChange={changeHandler} name='confirmpassword' placeholder='Confirm Password'/><br/><br/>
            <input type="submit" value="Register"/>
         </form>
      </center>
    </div>
  )
}

export default Register
