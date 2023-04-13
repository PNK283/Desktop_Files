import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './Firebase';
import { useState, useEffect } from 'react';
import './App.css';
//import Form from './Form';
//import UserAuth from './UserAuth';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import AuthDetails from './AuthDetails';


function App() {
  const [authUser, setAuthUser] = useState(null);

      useEffect(() =>{
        const listen = onAuthStateChanged(auth, (user) =>{
            if(user){
                setAuthUser(user);
            }else{
                setAuthUser(null);
            }
        });
          return() =>{
            listen();
          }
      }, [])

      const userSignOut= () =>{
           signOut(auth).then(() =>{
             console.log('Signout successful')
           }).catch(error => console.log(error))
      }

  return (
    <div>
      <center>
           <SignUp/>
           <SignIn/>
           {authUser ? <><p>{'Signed In as'+authUser.email}</p><button onClick={userSignOut}>Sign Out</button> </>  : <p>Signed Out</p>}
          </center>
    </div>
  );
}

export default App;
