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
import ProductDetails from './components/ProductDetails';
import Cleansers from './pages/Cleansers';
import Dryness from './pages/Dryness';
import Dullness from './pages/Dullness';
import Moisturizers from './pages/Moisturizers';
import OilySkin from './pages/OilySkin';
import Sunscreens from './pages/Sunscreens';
import Aging from './pages/Aging';
import Breakouts from './pages/Breakouts';
import Discoloration from './pages/Discoloration';
import Bundles from './pages/Bundles';
import Serums from './pages/Serums';

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
            <Route path="/collections/serums" element={<Serums />} />
            <Route path="/collections/cleansers" element={<Cleansers />} />
            <Route path="/collections/cleansing" element={<Cleansers />} />
            <Route path="/collections/discoloration" element={<Discoloration />} />
            <Route path="/collections/dryness" element={<Dryness />} />
            <Route path="/collections/dullness" element={<Dullness />} />
            <Route path="/collections/moisturizers" element={<Moisturizers />} />
            <Route path="/collections/oilyskin" element={<OilySkin />} />
            <Route path="/collections/sun-protection" element={<Sunscreens />} />
            <Route path="/collections/sunscreens" element={<Sunscreens />} />
            <Route path="/collections/aging" element={<Aging />} />
            <Route path="/collections/breakouts" element={<Breakouts />} />
            <Route path="/bundles" element={<Bundles />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
