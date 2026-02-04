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
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
    setSidebarOpen(false);
  };

  const handleSearchEnter = (e) => {
    if (e.key === 'Enter') {
      navigate(`/courses?search=${searchTerm}`);
      setSearchTerm('');
      setSuggestions([]);
      setSidebarOpen(false);
    }
  };

  const linkClass = ({ isActive }) =>
    `py-2 px-3 rounded-2xl transition-all duration-300 ${
      isActive
        ? 'border-b-2 border-blue-400 text-white'
        : 'text-white hover:border-b-2 hover:border-white'
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white z-50 shadow-md h-20 sm:h-24">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-3 sm:px-6">
        {/* Logo */}
        <NavLink to="/" className="font-bold text-lg sm:text-2xl hover:scale-105 transition-transform duration-300 line-clamp-1">
          BIU Online Course
        </NavLink>

        {/* Desktop Links + Search */}
        <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
          {/* Search */}
          <div className="relative flex-1 max-w-[500px]">
            <img src={searchIcon} alt="Search" className="absolute left-3 top-3 w-5"/>
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              onKeyDown={handleSearchEnter}
              placeholder="Search courses..."
              className="w-full h-10 rounded-3xl bg-white text-black pl-10"
            />
            {/* suggestions dropdown */}
            {suggestions.length > 0 && (
              <ul className="absolute top-full left-0 right-0 bg-gray-700 rounded-b-xl shadow-lg z-50">
                {suggestions.map(course => (
                  <li
                    key={course.id}
                    onClick={() => handleSuggestionClick(course.id)}
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                    {course.title}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/courses" className={linkClass}>Courses</NavLink>
          <NavLink to="/category" className={linkClass}>Category</NavLink>
          <NavLink to="/about" className={linkClass}>About Us</NavLink>

          {/* Cart */}
          <NavLink to="/cart" className="relative inline-block">
            <div className="relative inline-block">
              <img className="w-10 bg-white rounded-lg p-2 cursor-pointer" src={cartIcon} alt="Cart" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center -translate-y-2 translate-x-1">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white text-2xl hover:scale-110 transition-transform duration-200"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Sidebar (Mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-3/5 max-w-xs bg-slate-900 text-white shadow-lg transform transition-transform duration-300 z-50
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <span className="font-bold text-xl">Menu</span>
          <button onClick={() => setSidebarOpen(false)} className="text-2xl">x</button>
        </div>

        <div className="flex flex-col mt-4 gap-3 px-4">
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            onKeyDown={handleSearchEnter}
            placeholder="Search courses..."
            className="w-full h-10 rounded-3xl bg-white text-black pl-3"
          />
          {suggestions.length > 0 && (
            <ul className="bg-gray-700 rounded-b-xl shadow-lg mt-1">
              {suggestions.map(course => (
                <li
                  key={course.id}
                  onClick={() => handleSuggestionClick(course.id)}
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                >
                  {course.title}
                </li>
              ))}
            </ul>
          )}

          <NavLink to="/" className={linkClass} onClick={() => setSidebarOpen(false)}>Home</NavLink>
          <NavLink to="/courses" className={linkClass} onClick={() => setSidebarOpen(false)}>Courses</NavLink>
          <NavLink to="/category" className={linkClass} onClick={() => setSidebarOpen(false)}>Category</NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setSidebarOpen(false)}>About Us</NavLink>
          <NavLink to="/cart" className="relative inline-block" onClick={() => setSidebarOpen(false)}>
            <div className="relative inline-block">
              <img className="w-10 bg-white rounded-lg p-2 cursor-pointer" src={cartIcon} alt="Cart" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center -translate-y-2 translate-x-1">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
