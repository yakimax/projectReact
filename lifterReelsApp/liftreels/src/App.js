import './App.css';
import Signup from './components/signup.js' ;
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './components/Login.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/signin' element={<Signup />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App ;
