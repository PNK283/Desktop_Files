import React, { useState, useEffect } from 'react'

function Count() {
    const [Count, setCount] = useState(0);
   // const [calculation, setcalculation] = useState(0);

    //this will count 1000 renders
   /* useEffect(() => {
        setTimeout(() => {
            setCount((Count) => Count+1);
        },1000);
    });
    */

   /* useEffect(() => {
      setcalculation( () => Count*2 );
      },[Count]);  //<- add the count variable here

  return (
    <div>
      <p>Count : {Count}</p>
      <button
      onClick={() => setCount((c) => c+1)}>
       +
      </button>
      <p>calculation: {calculation}</p>
    </div>
  ) */

        /*    useEffect( () => {
              let timer = setTimeout( () => {
                setCount((Count) => Count+1);
              }, 1000);

              return () => clearTimeout(timer);
            }, []); */

            useEffect( () =>console.log(Count),[Count])
            return (
            <div>
            <h1>I have rendered {Count} times!</h1>
              <button onClick={() => {
                setCount(Count+1);
              }}>
              Click me!</button>
            </div>
            )
}

export default Count;
