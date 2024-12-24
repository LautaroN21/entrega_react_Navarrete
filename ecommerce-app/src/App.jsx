import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Category from './components/Category';
import ProductDetail from './components/ProductDetail';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:categoryName" element={<Category />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
    </Routes>
  </Router>
);

export default App;
