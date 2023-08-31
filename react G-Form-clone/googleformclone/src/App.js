import './App.css' ;
import SignupComp from './components/SignupComp' ;
import {BrowserRouter, Routes,Route} from 'react-router-dom' ;
import {AuthProvider} from './ContextAPI/AuthContext' ;
import Signin from './components/Signin';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<SignupComp/>}/>
          <Route path='/signup' element={<Signin/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App ;
