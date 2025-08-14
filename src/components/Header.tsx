import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">Drive365</div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="w-4 h-4 mr-1" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Mail className="w-4 h-4 mr-1" />
              <span>info@drive365.com</span>
            </div>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Testimonials</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
              <div className="px-3 py-2 text-sm text-gray-600">
                <div className="flex items-center mb-1">
                  <Phone className="w-4 h-4 mr-1" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  <span>info@drive365.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;