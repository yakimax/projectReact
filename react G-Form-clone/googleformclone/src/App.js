import './App.css' ;
import SignupComp from './components/SignupComp' ;
import {BrowserRouter, Routes} from 'react-router-dom' ;
import {AuthProvider} from './ContextAPI/AuthContext' ;
import Signin from './components/Signin';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
        <SignupComp/>
        <Signin/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
