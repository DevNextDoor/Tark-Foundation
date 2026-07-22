import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, Menu, X } from 'lucide-react';
import { useRouter } from '../lib/router';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/origin' },
  { name: 'Principles', to: '/#principles' },
  { name: 'Programs', to: '/programs' },
  { name: 'Team', to: '/origin#team' },
  { name: 'Journey', to: '/#journey' }
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { path } = useRouter();

  // Home page has a light background at the very top. Other pages have dark navy backgrounds.
  const isLightTop = path === '/' || path === '';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled || isOpen ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm' : 'bg-transparent'
      )}
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Utility Top Bar */}
      <div
        className={cn(
          'hidden lg:block bg-tark-navy text-white text-xs transition-all duration-300 overflow-hidden',
          scrolled ? 'h-0 opacity-0 border-none' : 'h-10 opacity-100 border-b border-white/10'
        )}
      >
        <div className="container mx-auto px-6 md:px-12 h-full flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+917042737734" className="flex items-center gap-2 hover:text-tark-gold transition-colors">
              <Phone className="w-3.5 h-3.5 text-tark-gold" />
              <span>+91 70427 37734</span>
            </a>
            <a href="mailto:info@tarkfoundationindia.com" className="flex items-center gap-2 hover:text-tark-gold transition-colors">
              <Mail className="w-3.5 h-3.5 text-tark-gold" />
              <span>info@tarkfoundationindia.com</span>
            </a>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-tark-gold" />
              <span>New Delhi, India</span>
            </div>
          </div>
          <div className="flex items-center h-full">
            <div
              className="bg-tark-gold text-tark-navy h-full pl-8 pr-6 flex items-center gap-4 font-semibold"
              style={{ clipPath: 'polygon(15px 0%, 100% 0%, 100% 100%, 0% 100%)' }}
            >
              <a href="#" className="hover:opacity-80 transition-opacity"><Facebook className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:opacity-80 transition-opacity"><Twitter className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:opacity-80 transition-opacity"><Linkedin className="w-3.5 h-3.5" /></a>
              <a href="https://www.instagram.com/tarkfoundation.in/" className="hover:opacity-80 transition-opacity"><Instagram className="w-3.5 h-3.5" /></a>
              <a href="#" className="hover:opacity-80 transition-opacity"><Youtube className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={cn(
          'container mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-300',
          scrolled ? 'py-4' : 'py-6'
        )}
      >
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="TARK"
            className="h-8 w-auto transition-all duration-300"
            style={{ 
              filter: scrolled || isOpen 
                ? 'none' // Navy Logo when scrolled/open
                : isLightTop 
                  ? 'brightness(0) saturate(100%) invert(13%) sepia(35%) saturate(3048%) hue-rotate(204deg) brightness(91%) contrast(98%)' // Navy Logo on Light Hero
                  : 'brightness(0) invert(1)' // White Logo on Dark Hero
            }}
          />
        </Link>

        {/* Desktop Menu links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) => cn(
                'text-sm font-medium transition-colors hover:text-tark-gold',
                scrolled 
                  ? 'text-tark-navy' 
                  : isLightTop 
                    ? 'text-tark-navy/80 hover:text-tark-navy' // Dark links on light background
                    : 'text-white/90 hover:text-white', // White links on dark background
                isActive ? 'font-semibold' : ''
              )}
            >
              {link.name}
            </NavLink>
          ))}
          <a 
            href="https://docs.google.com/forms/d/1_U9yrtF3Ys-hQTepeKk-ZLETnCDGIiXM3vlZJrQOsb0/edit?ts=6a17a5ca" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              'inline-block px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm',
              scrolled ?
                'bg-tark-navy text-white hover:bg-tark-blue' :
                'bg-tark-gold text-tark-navy hover:bg-white hover:text-tark-navy'
            )}
          >
            Become a Member
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-tark-navy hover:text-tark-gold transition-colors focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 overflow-hidden"
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-6 flex flex-col gap-4 shadow-inner">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-tark-navy hover:text-tark-gold transition-colors py-1"
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-tark-navy text-white py-3 rounded-full text-sm font-semibold hover:bg-tark-blue transition-colors mt-2 block shadow-sm"
          >
            Become a Member
          </NavLink>
        </div>
      </motion.div>
    </motion.header>
  );
};