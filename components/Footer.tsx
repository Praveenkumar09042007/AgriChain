import React from 'react';
import { Link } from 'react-router-dom';

const LeafIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66C7.23 18.05 9 13 17 12V8z" />
      <path d="M17 8a5 5 0 0 0-5-5h-.5a5 5 0 0 0-5 5H17z" />
    </svg>
  );

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <LeafIcon className="w-8 h-8 text-agri-green" />
              <span className="text-2xl font-bold">AgriChain</span>
            </Link>
            <p className="text-slate-300 text-sm">Bringing transparency from farm to table with the power of blockchain.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-300 hover:text-white">About Us</Link></li>
              <li><Link to="/farmers" className="text-slate-300 hover:text-white">For Farmers</Link></li>
              <li><Link to="/consumers" className="text-slate-300 hover:text-white">For Consumers</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="mailto:support@agrichain.com" className="hover:text-white">support@agrichain.com</a></li>
              <li><a href="tel:+911234567890" className="hover:text-white">+91 123 456 7890</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} AgriChain. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
