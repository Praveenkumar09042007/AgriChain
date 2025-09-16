import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const LeafIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66C7.23 18.05 9 13 17 12V8z" />
    <path d="M17 8a5 5 0 0 0-5-5h-.5a5 5 0 0 0-5 5H17z" />
  </svg>
);

const navLinks = [
  { to: '/', text: 'Home' },
  { to: '/farmers', text: 'For Farmers' },
  { to: '/consumers', text: 'For Consumers' },
  { to: '/about', text: 'About Us' },
  { to: '/contact', text: 'Contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkClass = 'text-agri-green font-semibold';
  const inactiveLinkClass = 'hover:text-agri-green transition-colors duration-300';

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <LeafIcon className="w-8 h-8 text-agri-green" />
            <span className="text-2xl font-bold text-slate-800">AgriChain</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `${isActive ? activeLinkClass : inactiveLinkClass}`}
              >
                {link.text}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:block">
            <Link to="/contact" className="bg-agri-green text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-agri-green-dark transition-colors duration-300 shadow">
              Sign Up
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700 hover:text-agri-green focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `text-lg ${isActive ? activeLinkClass : inactiveLinkClass}`}
              >
                {link.text}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-agri-green text-white font-semibold w-3/4 text-center px-5 py-2.5 rounded-lg hover:bg-agri-green-dark transition-colors duration-300 shadow">
              Sign Up
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
