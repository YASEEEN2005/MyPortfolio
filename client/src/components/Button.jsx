import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, href, onClick, variant = 'primary', className = '' }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform perspective-1000 shadow-md";
  
  const variants = {
    // Primary: Royal Blue Background, White Text
    primary: "bg-primary text-white hover:bg-primary-hover hover:scale-105 hover:shadow-primary/30",
    // Secondary: Teal Background, White Text (Requested specific style)
    secondary: "bg-accent text-white hover:bg-accent-hover hover:scale-105 hover:shadow-accent/30",
    // Outline: Transparent with Border
    outline: "bg-transparent border border-primary text-primary hover:bg-primary/5"
  };

  // If the variant passed isn't in our keys, default to primary or handle specifically
  const selectedVariant = variants[variant] || variants.primary;

  const Component = href ? motion.a : motion.button;
  
  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseStyle} ${selectedVariant} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </Component>
  );
};

export default Button;
