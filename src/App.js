import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import Home from './pages/Home';
import Celana from './pages/About';
import Keranjang from './pages/Keranjang';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/celana' element={<Celana />}/>
          <Route path='/keranjang' element={<Keranjang />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
