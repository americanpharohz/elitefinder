import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Search className="h-8 w-8 text-gold-500" />
              <div>
                <span className="text-xl font-bold font-serif">Elite Finder</span>
                <div className="text-xs font-medium text-gray-300">Luxury Acquisition Specialists</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Connecting discerning clients with the world's most exclusive and rare luxury items. 
              Our global network and expertise ensure successful acquisitions across all premium categories.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-gray-300">
                <Clock className="h-4 w-4 mr-2 text-gold-500" />
                Available 24/7
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/services" className="hover:text-gold-400 transition-colors">Rare Collectibles</Link></li>
              <li><Link to="/services" className="hover:text-gold-400 transition-colors">Luxury Vehicles</Link></li>
              <li><Link to="/services" className="hover:text-gold-400 transition-colors">Exclusive Yachts</Link></li>
              <li><Link to="/services" className="hover:text-gold-400 transition-colors">Fine Jewelry</Link></li>
              <li><Link to="/services" className="hover:text-gold-400 transition-colors">Premium Watches</Link></li>
              <li><Link to="/services" className="hover:text-gold-400 transition-colors">Elite Real Estate</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-gold-500" />
                <span className="text-sm">+1 (929) 344-2202</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-gold-500" />
                <span className="text-sm">info@elitefinder.vip</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-gold-500" />
                <span className="text-sm">Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Elite Finder Services. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="/contact" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;