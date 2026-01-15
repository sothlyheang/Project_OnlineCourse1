import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
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

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl pr-7">ETEC ONLINE COURSE</Link>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Search & Links (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          {/* Search */}
          <div className="relative w-[500px]">
            <img className='absolute left-3 top-3 w-5' src={searchIcon} alt="Search" />
            <input
              className='w-full h-[45px] rounded-3xl bg-white text-black pl-10 font-normal'
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
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  >
                    {course.title}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Links */}
          <Link className='py-2 px-2 text-white hover:border-b-2 hover:bg-slate-700 rounded-2xl' to="/">Home</Link>
          <Link className='py-2 px-2 text-white hover:border-b-2 hover:bg-slate-700 rounded-2xl' to="/courses">Courses</Link>
          <Link className='py-2 px-2 text-white hover:border-b-2 hover:bg-slate-700 rounded-2xl' to="/category">Category</Link>
          <Link className='py-2 px-2 text-white hover:border-b-2 hover:bg-slate-700 rounded-2xl' to="/about">About Us</Link>
          <Link to="/cart" className="relative inline-block py-2 px-3">
            <img className="w-10 bg-white rounded-lg p-2 cursor-pointer" src={cartIcon} alt="Cart" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 px-6 pb-4 space-y-3 border-t border-slate-700">
          {/* Search */}
          <div className="relative">
            <img className='absolute left-3 top-3 w-5' src={searchIcon} alt="Search" />
            <input
              className='w-full h-10 rounded-3xl bg-white text-black pl-10 font-normal'
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
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  >
                    {course.title}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Links */}
          <Link className='block py-2 px-2 text-white hover:bg-slate-700 rounded-2xl' to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link className='block py-2 px-2 text-white hover:bg-slate-700 rounded-2xl' to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link className='block py-2 px-2 text-white hover:bg-slate-700 rounded-2xl' to="/category" onClick={() => setMenuOpen(false)}>Category</Link>
          <Link className='block py-2 px-2 text-white hover:bg-slate-700 rounded-2xl' to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/cart" className="relative block py-2 px-2" onClick={() => setMenuOpen(false)}>
            <img className="w-10 bg-white rounded-lg p-2 cursor-pointer" src={cartIcon} alt="Cart" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
