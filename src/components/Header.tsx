import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Search className="h-8 w-8 text-gold-600" />
            <div className="text-navy-900">
              <span className="text-xl font-bold font-serif">Elite Finder</span>
              <div className="text-xs font-medium text-gray-600">Luxury Acquisition Specialists</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-gold-600 border-b-2 border-gold-600'
                    : 'text-gray-700 hover:text-gold-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-navy-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-navy-800 transition-colors duration-200"
            >
              Start Your Search
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gold-600 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-gold-600 bg-gold-50'
                      : 'text-gray-700 hover:text-gold-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block w-full text-center bg-navy-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-navy-800 transition-colors duration-200 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Your Search
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;