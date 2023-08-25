import './App.css';
import Signup from './components/signup.js' ;
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './components/Login.js';
import { AuthProvider } from './contextAPIs/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/signin' element={<Signup />}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App ;
