import './App.css';
import Signup from './components/signup.js' ;
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './components/Login.js';
import { AuthProvider } from './contextAPIs/AuthContext';
import Feed from './components/Feed';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/signin' element={<Signup />}/>
          <Route path='/' element={<PrivateRoute />}>
            <Route path='/' element={<Feed/>}/>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}


export default App ;
