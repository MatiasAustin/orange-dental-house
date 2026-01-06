import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Layanan', path: '/treatments' },
    { name: 'Lokasi', path: '/locations' },
    { name: 'Harga', path: '/pricing' },
    { name: 'Tentang Kami', path: '/about' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
        scrolled ? 'bg-pastel-bg/80 backdrop-blur-xl border-pastel-gray/10 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
             <div className="w-8 h-8 rounded-full bg-pastel-clay flex items-center justify-center text-white font-heading font-bold text-lg">
               O
             </div>
             <div className="flex flex-col">
               <span className="font-heading font-bold text-lg text-pastel-dark leading-none tracking-wide">
                 ORANGE
               </span>
               <span className="text-[10px] text-pastel-gray uppercase tracking-[0.2em] leading-none">
                 Dental House
               </span>
             </div>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-pastel-clay after:transition-all hover:after:w-full hover:text-pastel-clay ${
                    isActive 
                      ? 'text-pastel-dark font-bold after:w-full' 
                      : 'text-pastel-gray'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <NavLink to="/appointment" className="hidden md:block">
              <Button variant="outline" size="sm">Book Appointment</Button>
            </NavLink>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-pastel-dark hover:bg-white rounded-full transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-pastel-bg/95 backdrop-blur-xl border-b border-pastel-gray/10 shadow-xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-6 gap-4 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-heading ${
                  isActive ? 'text-pastel-clay' : 'text-pastel-dark'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink to="/appointment" className="mt-4 w-full">
            <Button className="w-full">Make an Appointment</Button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};