import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Collections from './pages/Collections';
import AllCollections from './pages/AllCollections';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/all" element={<AllCollections />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
