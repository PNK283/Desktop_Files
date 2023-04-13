import React from 'react'
import { useState, ReactDOM} from 'react'

function Demo() {
    const [color, setColor] = useState("red");
  return (
    <div>
            <h1>My Favourate color is {color}!</h1>
            <button
             type='button'
             onClick={() => {
                setColor("blue")
             }}
             >
                Blue
            </button>

    </div>
  )
}

export default Demo
