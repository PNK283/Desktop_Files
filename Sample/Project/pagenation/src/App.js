import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import style from './Style.css';

const App = () => {

   const[data, setdata] = useState([]);
   const[perpage, setperpage] = useState([]);

   useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(
      res => {setdata(res.data);setperpage(res.data.slice(0,1));}
    )
   }, [])
    const pageHandler = (pageNumber) => {
      setperpage(data.slice((pageNumber*1)-1,pageNumber*1))
    }
  return (
    <div>
        {data.length>=1?
         <div>
            {perpage.map(post => 
            <div>{ <div class='text_container'><li>{post.title}</li><ol type='A'><li>{post.body}</li></ol>
            <button id='text_container_btn' type="button" class="btn btn-success">Submit</button>
            </div>}
           
            </div>)} <br />
            <Pagination data={data} pageHandler={pageHandler}/>
         </div>
         :
         <p>Data not Loaded</p>
        }
        <div class='footer'>
        <button type="button" class="btn btn-outline-primary" id='footer_pre_btn'>Previous</button>
        <button type="button" class="btn btn-outline-success" id='footer_next_btn'>Next</button>
        </div>
    </div>
  )
}

export default App
