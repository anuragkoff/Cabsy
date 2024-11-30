import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BookingSteps from './components/BookingSteps'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';

function App() {

  return (
    <div>
      <Router>  
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<About/>} />  
        <Route path="/login" element={<Login/>} />  
        <Route path="/contact" element={<Contact />} />  
      </Routes>  
      </Router>  
      
    </div>
    
  )
}

export default App
