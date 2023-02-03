
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Restaurantlist from './components/Restuarantlist';
import Viewrest from './components/Viewrest';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Restuarant Listing App</h1> */}
        <Header/>
       </header>
       <Routes>
        <Route path='/' element={<Restaurantlist/>}/>
        <Route path='/Viewrest/:id' element={<Viewrest/>}/>
       </Routes>
       
      <Footer/>
    </div>
  );
}

export default App;
