import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Movielist from './components/Movielist';
import Favourites from './components/Favourites';

function App() {
  return (
    <>
    <NavBar/>
    {/* <Banner/>
    <Movielist/> */}
    <Favourites/>
    </>
  )
}

export default App;
