import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Fake check for login (replace with your real logic, e.g. token in localStorage)
  const isLoggedIn = !!localStorage.getItem("accessToken");

  const scrollToCategories = (e) => {
    e.preventDefault();
    const section = document.getElementById('categories');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle protected navigation
  const handleProtectedClick = (path) => {
    if (isLoggedIn) {
      navigate(path);
    } else {
      navigate("/login"); // redirect to login
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-8 h-8 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">Campus Cart</h1>
            </Link>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:bg-white sm:text-sm"
                placeholder="Search for textbooks, electronics, furniture..."
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/browse" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Browse
            </Link>
            <button
              onClick={() => handleProtectedClick("/sell-item")}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Sell Item
            </button>
            <a href="#categories" onClick={scrollToCategories} className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Categories
            </a>
          </nav>

          {/* Desktop Right Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => handleProtectedClick("/wishlist")}
              className="relative p-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </button>

            <button
              onClick={() => handleProtectedClick("/checkout")}
              className="relative p-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>

            <button
              onClick={() => handleProtectedClick("/profile")}
              className="flex items-center space-x-2 border-l border-gray-200 pl-4"
            >
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-orange-600" />
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-900">John Doe</div>
                <div className="text-gray-500 text-xs">Student</div>
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-orange-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            >
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:bg-white text-sm"
              placeholder="Search for items..."
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/browse" className="text-gray-700 hover:bg-orange-50 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium">
              Browse Items
            </Link>
            <button onClick={() => handleProtectedClick("/sell-item")} className="text-gray-700 hover:bg-orange-50 hover:text-orange-600 block w-full text-left px-3 py-2 rounded-md text-base font-medium">
              Sell Item
            </button>
            <a href="#categories" onClick={scrollToCategories} className="text-gray-700 hover:bg-orange-50 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium">
              Categories
            </a>
            <button onClick={() => handleProtectedClick("/wishlist")} className="text-gray-700 hover:bg-orange-50 hover:text-orange-600 block w-full text-left px-3 py-2 rounded-md text-base font-medium">
              Wishlist
            </button>
            <button onClick={() => handleProtectedClick("/checkout")} className="text-gray-700 hover:bg-orange-50 hover:text-orange-600 block w-full text-left px-3 py-2 rounded-md text-base font-medium">
              Cart
            </button>
            <button onClick={() => handleProtectedClick("/profile")} className="text-gray-700 hover:bg-orange-50 hover:text-orange-600 block w-full text-left px-3 py-2 rounded-md text-base font-medium">
              Profile
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
