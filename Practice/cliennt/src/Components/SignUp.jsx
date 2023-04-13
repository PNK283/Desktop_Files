import { createUserWithEmailAndPassword } from 'firebase/auth';
import React,{useState} from 'react'
import {auth} from '../Firebase'

const SignUp = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  const signUp = (e) =>{
     e.preventDefault();
     createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential)=>{
        console.log(userCredential);
     })
     .catch((error)=> {
        console.log(error);
     })
  }
  return (
    <div className='signup-container'>
      <form onSubmit={signUp}>
       <h1>Sign up</h1>
        <input
        type="email"
        placeholder='Enter your Email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input
        type="passsword"
        placeholder='Enter your password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button type='submit'>Sign up</button>
      </form>
      
    </div>
  )
}

export default SignUp;

