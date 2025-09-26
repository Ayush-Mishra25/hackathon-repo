import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-orange-600 to-red-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Section - Logo & Description */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 space-y-6 md:space-y-0">
          <div>
            <h2 className="text-2xl font-bold mb-2">CampusCart</h2>
            <p className="max-w-sm text-orange-100">
              Connect with students nationwide. Buy, sell, and request items easily. Everything you need is just a click away!
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-300 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-orange-300 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-orange-300 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-orange-300 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-orange-100 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Textbooks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Electronics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Furniture</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gaming</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-orange-100 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-orange-100 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Privacy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-orange-100 text-sm">
              <li>Email: <a href="mailto:support@CampusCart.com" className="hover:text-white transition-colors">support@CampusCart.com</a></li>
              <li>Phone: <a href="tel:+911234567890" className="hover:text-white transition-colors">+91 123 456 7890</a></li>
              <li>Address: 123 Student Lane, Mumbai, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-orange-400 pt-6 text-center text-orange-200 text-sm">
          &copy; {new Date().getFullYear()} SecondHandHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
