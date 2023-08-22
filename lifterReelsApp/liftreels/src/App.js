import './App.css';
import Signup from './components/Signup' ;
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Signup/>
      </div>
    </BrowserRouter>
  );
}

export default App ;
