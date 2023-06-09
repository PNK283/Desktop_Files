import React from 'react'
import UseFetch from './UseFetch'

const Menu = () => {
    const[data] = UseFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      {data &&
        data.map((item)=> {
          return <p key={item.id}>{item.title}</p>
        })
      }
    </>
  )
}

export default Menu
