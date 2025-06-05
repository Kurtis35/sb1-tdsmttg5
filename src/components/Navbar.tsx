import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <span className={`text-2xl font-bold ${scrolled ? 'text-blue-600' : 'text-white'}`}>J2W</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="ml-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 transition-colors"
            >
              Get a Free Call
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-3">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-900 block px-3 py-2 text-base font-medium hover:bg-gray-100 hover:text-blue-600 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact" 
                className="block w-full text-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get a Free Call
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;