import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Examination';
import Service from './Service';
import Industries from './Components/Industries';
import About from './Components/About';
import Careers from './Components/Careers';
import Contact from './Components/Contact';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
     <div className='App'>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/industries' element={<Industries/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
     </div>
  );
}

export default App;
