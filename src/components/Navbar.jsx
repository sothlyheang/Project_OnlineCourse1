import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { NavLink, useNavigate } from 'react-router-dom';
import products from '../data/product';
import searchIcon from '../assets/search.svg';
import cartIcon from '../assets/cart.svg';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchTerm.trim()) return setSuggestions([]);
    const filtered = products.filter(p =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSuggestions(filtered.slice(0, 5));
  }, [searchTerm]);

  const handleSuggestionClick = (id) => {
    navigate(`/courses/${id}`);
    setSearchTerm('');
    setSuggestions([]);
    setMenuOpen(false);
  };

  const handleSearchEnter = (e) => {
    if (e.key === 'Enter') {
      navigate(`/courses?search=${searchTerm}`);
      setSearchTerm('');
      setSuggestions([]);
      setMenuOpen(false);
    }
  };

  const linkClass = ({ isActive }) =>
    `py-2 px-3 rounded-2xl transition-all duration-300 ${
      isActive ? 'border-b-2 border-white text-white' : 'text-white hover:border-b-2 hover:border-blue-400 hover:text-blue-400'
    }`;

  return ( 
    <nav className="fixed top-0 left-0 w-full h-26 bg-slate-900 text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-7 px-6 flex-wrap md:flex-nowrap gap-3">

        {/* Logo */}
        <NavLink to="/" className="font-bold text-2xl hover:scale-105 transition-transform duration-300">
          ETEC ONLINE COURSE
        </NavLink>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden text-white text-2xl hover:scale-110 transition-transform duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Search & Links (Desktop) */}
        <div className="hidden md:flex items-center gap-4 flex-wrap">

          {/* Search */}
          <div className="relative w-[500px]">
            <img className='absolute left-3 top-3 w-5' src={searchIcon} alt="Search" />
            <input
              className='w-full h-[45px] rounded-3xl bg-white text-black pl-10 font-normal focus:ring-2 focus:ring-blue-400 transition-all duration-300'
              placeholder='Search courses...'
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              onKeyDown={handleSearchEnter}
            />
            {suggestions.length > 0 && (
              <ul className="absolute top-full left-0 right-0 bg-gray-700 border border-gray-300 rounded-b-xl shadow-lg z-50">
                {suggestions.map(course => (
                  <li
                    key={course.id}
                    onClick={() => handleSuggestionClick(course.id)}
                    className="px-4 py-2 hover:bg-gray-600 cursor-pointer transition-colors duration-200"
                  >
                    {course.title}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Nav Links */}
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/courses" className={linkClass}>Courses</NavLink>
          <NavLink to="/category" className={linkClass}>Category</NavLink>
          <NavLink to="/about" className={linkClass}>About Us</NavLink>

          {/* Cart */}
          <NavLink to="/cart" className="relative hover:scale-110 transition-transform duration-300">
            <img className="w-10 bg-white rounded-lg p-2 cursor-pointer" src={cartIcon} alt="Cart" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                {cart.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 px-6 pb-4 space-y-3 border-t border-slate-700 animate-fadeDown">

          {/* Search */}
          <div className="relative">
            <img className='absolute left-3 top-3 w-5' src={searchIcon} alt="Search" />
            <input
              className='w-full h-10 rounded-3xl bg-white text-black pl-10 font-normal focus:ring-2 focus:ring-blue-400 transition-all duration-300'
              placeholder='Search courses...'
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              onKeyDown={handleSearchEnter}
            />
            {suggestions.length > 0 && (
              <ul className="absolute top-full left-0 right-0 bg-gray-700 border border-gray-300 rounded-b-xl shadow-lg z-50">
                {suggestions.map(course => (
                  <li
                    key={course.id}
                    onClick={() => handleSuggestionClick(course.id)}
                    className="px-4 py-2 hover:bg-gray-600 cursor-pointer transition-colors duration-200"
                  >
                    {course.title}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Mobile Links */}
          <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/courses" className={linkClass} onClick={() => setMenuOpen(false)}>Courses</NavLink>
          <NavLink to="/category" className={linkClass} onClick={() => setMenuOpen(false)}>Category</NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>About Us</NavLink>
          <NavLink to="/cart" className="relative hover:scale-110 transition-transform duration-300" onClick={() => setMenuOpen(false)}>
            <img className="w-10 bg-white rounded-lg p-2 cursor-pointer" src={cartIcon} alt="Cart" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                {cart.length}
              </span>
            )}
          </NavLink>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
