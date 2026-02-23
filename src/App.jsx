import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

// Pages
import HomePage from './routes/HomePage';
import About from './routes/About';
import Category from './routes/Category';
import Courses from './routes/Courses';
import ProductDetails from "./pages/ProductDetails";
import CartPage from './routes/CartPage';

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <div className="min-h-screen flex flex-col bg-gray-50 pt-[100px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Category />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
