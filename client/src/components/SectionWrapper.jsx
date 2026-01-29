import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
