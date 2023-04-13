import React, {useState}from 'react'
import {auth} from './Firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'

const UserAuth = () => {
    const [data, setData] = useState({
        email:"",
        password:""
    })
    const {email, password} = data;
    const changeHandler = e =>{
        e.preventDefault();
        setData({...data,[e.target.name]:e.target.value})
    }
    const signUp = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then(user=>console.log(user))
        .catch(err => console.log(err))
    }
    const signIn = e =>{
        e.preventDefault();
    }
  return (
    <div>
        <center>
              <form>
                <h1>Authentication Email and Password</h1>
                <input type="email" name="email" value={email} placeholder='Email' onChange={changeHandler}/><br />
                <input type="password" name="password" value={password} placeholder='Password' onChange={changeHandler}/><br />
                <button onClick={signIn}>Sign In</button> &nbsp;&nbsp;
                <button onClick={signUp}>Sign Up</button>
              </form>
        </center>
    </div>
  )
}

export default UserAuth
