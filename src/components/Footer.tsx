import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-yellow-400 mb-4">Drive365</div>
            <p className="text-gray-300 mb-4">
              Professional driving instruction with experienced, certified instructors. 
              Your journey to independence starts here.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-yellow-400 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-yellow-400 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-yellow-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-yellow-400">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-yellow-400">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-yellow-400">About</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-yellow-400">Reviews</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Beginner Lessons</span></li>
              <li><span className="text-gray-300">Intensive Courses</span></li>
              <li><span className="text-gray-300">Test Preparation</span></li>
              <li><span className="text-gray-300">Refresher Courses</span></li>
              <li><span className="text-gray-300">Pass Plus</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-yellow-400 mr-3" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-yellow-400 mr-3" />
                <span className="text-gray-300">info@drive365.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-yellow-400 mr-3" />
                <span className="text-gray-300">Greater Metropolitan Area</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Drive365. All rights reserved. | Licensed Driving School
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;