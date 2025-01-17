import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Collections from './pages/Collections';
import AllCollections from './pages/AllCollections';
import { CartProvider } from './context/CartContext';
import AboutUs from './pages/AboutUs';
import Sale from './components/Sale';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import CategoryPage from './pages/CategoryPage';
import Checkout from './pages/Checkout';
import SearchResults from './pages/SearchResults';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Sale />
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/all" element={<AllCollections />} />
            <Route path="/collections/:category" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
