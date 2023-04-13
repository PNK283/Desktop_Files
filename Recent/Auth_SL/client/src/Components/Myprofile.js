import axios from 'axios'
import React,{useContext, useState, useEffect} from 'react'
import { Navigate } from 'react-router'
import { store } from './Dashboard'

const Myprofile = () => {
    const [token, setToken] = useContext(store);
    const [data, setData] =useState(null);
    useEffect(() =>{
       axios.get('http://localhost:3000/myprofile',{
        headers: {
            'x-token' : token
        }
       }).then( res => setData(res.data)).catch((err)=> console.log(err))
    }, [])
    if(!token){
       return <Navigate to='/login'/>
    }
  return (
    <div>
       {
              data &&
          <center>
            welcome user : {data.username}
          </center>
       }
    </div>
  )
}

export default Myprofile
