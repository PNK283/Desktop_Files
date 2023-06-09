import './App.css';
import {
BrowserRouter as Router,
Routes,
Route,
Navigate
} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
         <Router>
          <Routes>
             <Route path='/' element={<PublicRoutes><Login/></PublicRoutes> }/>
             <Route path='/register' element={<PublicRoutes><Register/></PublicRoutes> }/>
             <Route path='/dashboard' element={<ProtectedRoutes><Dashboard/></ProtectedRoutes> }/>
          </Routes>
         </Router>
    </div>
  );
}

export default App;

export function ProtectedRoutes({children}){
  const auth = localStorage.getItem('data')
  if(auth){
    return children
  }else{
    return <Navigate to='/'/>
  }
}

export function PublicRoutes({children}){
  const auth = localStorage.getItem('data')
  if(auth){
    return <Navigate to='/dashboard'/>
  }else{
    return children
  }
}
