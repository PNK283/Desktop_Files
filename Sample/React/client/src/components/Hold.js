import React from 'react'
import { ReactDOM,useState } from 'react'

function Hold() {
    //this is useState can hold String, numbers, boolean, arrays, objects and any combination of these!
    //here assign useState to every property with individually
   /* const[brand, setBrand] = useState("Jaguar");
    const[year, setYear] = useState("1945");
    const[model, setModel] = useState("mustang");
    const[color, setColor] = useState("Black");
    */
   //here we can also give one state and includes an object instead
   //but we have to call the properties by using initialize constant.
    
   const [car, setCar] = useState({
    brand: "Audi",
    model: "Audi-001",
    year: "1960",
    color: "White"
   });
   const updateColor= () => {
    setCar(previousState => {
        return {...previousState, color:"Black"}
    });
   }
  return (
    <div>
      <h1>My car is {car.brand}</h1>
      <p>It is a {car.color} {car.model} from {car.year}</p>
      <button
      type='button'
      onClick={updateColor}
      >
        Black
      </button>
    </div>
  )
}

export default Hold
