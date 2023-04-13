import React from 'react'
import style from './Style.css';

const Pagination = ({data, pageHandler}) => {
    let pageNumbers = [];
    for(let i = 1; i <Math.ceil(data.length/1)+1 ; i++){
           pageNumbers.push(i);
    }
  return (
    <div class='main_body_pagenumbers'>
    
           <div class='container-numbers'>
              {pageNumbers.map(page => 
              <div className='page_btn'
              onClick={() => 
              pageHandler(page)}>
              {page}
              </div>)}
              </div>
    </div>
  )
}

export default Pagination
