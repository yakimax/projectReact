import './App.css' ;
import SignupComp from './components/SignupComp' ;
import {BrowserRouter} from 'react-router-dom' ;
import AuthProvider from './ContextAPI/AuthContext' ;


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SignupComp/>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
