import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { education } from '../data';

const Education = () => {
  return (
    <SectionWrapper id="education" className="bg-primary/5">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">Education & <span className="text-gradient">Training</span></h2>
        </div>

      <div className="max-w-3xl mx-auto">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex gap-6 mb-8 group"
          >
             {/* Icon/Timeline Dot */}
            <div className="relative">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary border border-primary/20 shadow-md group-hover:scale-110 transition-transform z-10 relative">
                    {item.icon}
                </div>
                {index !== education.length - 1 && (
                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-200 -z-0"></div>
                )}
            </div>

            <div className="glass-card p-6 rounded-xl flex-1 hover:border-primary/30 transition-colors">
               <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-text-primary">{item.degree}</h3>
                  <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">{item.year}</span>
               </div>
               <p className="text-text-secondary">{item.institution}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
