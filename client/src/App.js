import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Collections from './pages/Collections';
import AllCollections from './pages/AllCollections';
import { CartProvider } from './context/CartContext';
import './styles/App.css';
import AboutUs from './pages/AboutUs';
import Sale from './components/Sale';
import Navbar from './components/Navbar';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
        <Sale />
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/all" element={<AllCollections />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
