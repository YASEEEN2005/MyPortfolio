import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { personalDetails } from '../data';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed left-0 right-0 mx-auto z-50 transition-all duration-300 transform-gpu ${
        isMobileMenuOpen 
        ? 'top-4 w-[95%] bg-gunmetal/95 backdrop-blur-xl rounded-[2rem] shadow-2xl overflow-hidden' 
        : `top-4 w-[95%] md:w-[85%] max-w-6xl rounded-full ${isScrolled ? 'bg-gunmetal/80 backdrop-blur-md shadow-2xl border border-white/10 py-2 px-2' : 'bg-gunmetal shadow-xl py-3 px-6'}`
      }`}
    >
      <div className={`w-full flex items-center justify-between ${isMobileMenuOpen ? 'p-4 pb-0' : ''}`}>
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group pl-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:rotate-12 transition-transform duration-300">
             P
          </div>
          <span className="font-bold text-lg tracking-wide text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
            Portfolio
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5 backdrop-blur-sm">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-5 py-2 text-sm font-medium transition-colors"
            >
              {hoveredIndex === index && (
                <motion.div
                  layoutId="navbar-hover"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                />
              )}
              <span className={`relative z-10 transition-colors duration-200 ${hoveredIndex === index ? "text-white" : "text-pale-slate"}`}>
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors active:scale-95"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Content - Optimized Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }} // Fast response
            className="md:hidden w-full flex flex-col items-center justify-center gap-2 py-8 overflow-hidden"
          >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.2 }} // Faster stagger
                  className="w-full text-center py-3 text-lg font-medium text-pale-slate hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
