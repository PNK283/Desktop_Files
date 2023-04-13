import { async } from '@firebase/util'
import React from 'react'
import { useState} from 'react'
import {createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth'
import {auth} from './FirbaseConfig'

function Form() {

    const[signupEmail, setsignupEmail] = useState("")
    const[signupPassword, setsignupPassword] = useState("")
    const[loginEmail, setloginEmail] = useState("")
    const[loginPassword, setloginPassword] = useState("")
    
    const[user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) =>{
      setUser(currentUser);
    })

     const signup = async() => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                signupEmail,
                signupPassword  
            )
            console.log(user);
            
        } catch (error) {
            console.log(error)
            
        }
     };

     const signin = async() => {
        try {

            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            )
            console.log(user);
            
        } catch (error) {
            console.log(error.message)
        }
     };

     const signout = async() => {
        await signOut(auth);
     };

  return (
    <>
      <div>
      <h1>Sign Up</h1>
        <form >
            <label>Enter Name:</label>
            <input
                type="text"
            />
            <label>Enter Email:</label>
            <input
                type="text"
                onChange={(event) => {
                    setsignupEmail(event.target.value);
                }}
            />
            <label>Enter Password:</label>
            <input
             type="password"
             onChange={(event) => {
                    setsignupPassword(event.target.value);
                }}
            />
            <input
                type="submit"
                value="Sign up"
                onClick={signup}
            />
        </form>
        </div>
        <div>
      <h1>Sign in</h1>
        <form >
            <label>Enter Email:</label>
            <input
                type="text"
                onChange={(event) => {
                    setloginEmail(event.target.value);
                }}
            />
            <label>Enter Password:</label>
            <input
                type="password"
                onChange={(event) => {
                    setloginPassword(event.target.value);
                }}
            />
            <input
                type="submit"
                value="Sign in"
                onClick={signin}
            />
        </form>
        </div>
        <h3>User Logged in</h3>
          <button onClick={signout}>Sign out</button>
    </>
  )
}

export default Form
