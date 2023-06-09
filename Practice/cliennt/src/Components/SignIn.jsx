import { signInWithEmailAndPassword } from 'firebase/auth';
import React,{useState} from 'react'
import {auth} from '../Firebase'

const SignIn = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  const signIn = (e) =>{
     e.preventDefault();
     signInWithEmailAndPassword(auth, email, password)
     .then((userCredential)=>{
        console.log(userCredential);
     })
     .catch((error)=> {
        console.log(error);
     })
  }
  
  return (
    <div className='signin-container'>
      <form onSubmit={signIn}>
       <h1>Login</h1>
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
        <button type='submit'>Log In</button>
      </form>
      
      <div>
        
      </div>
    </div>
    
  )
}

export default SignIn;
