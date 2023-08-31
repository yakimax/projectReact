import './App.css' ;
import SignupComp from './components/SignupComp' ;
import {BrowserRouter, Routes,Route} from 'react-router-dom' ;
import {AuthProvider} from './ContextAPI/AuthContext' ;
import Signin from './components/Signin';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/signup'element={<SignupComp/>}/>
          <Route path='/login' element={<Signin/>}/>
          <Route path='/main' element={<Main/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App ;
