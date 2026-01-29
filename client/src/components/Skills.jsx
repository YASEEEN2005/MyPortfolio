import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { skills } from '../data';

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="bg-bright-snow relative">
       {/* Background Decor */}
       <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 pointer-events-none"></div>

       <div className="text-center mb-20 relative z-10">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-carbon-black mb-6"
            >
                My <span className="text-primary">Tech Stack</span>
            </motion.h2>
            <motion.p 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="text-slate-grey max-w-2xl mx-auto text-lg"
            >
                A curated list of technologies I use to build scalable, robust, and beautiful applications.
            </motion.p>
       </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-alabaster hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-bright-snow rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-inner">
                {skillGroup.icon}
              </div>
              <h3 className="text-xl font-bold text-carbon-black group-hover:text-primary transition-colors">{skillGroup.category}</h3>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + (i * 0.05) }}
                  viewport={{ once: true }}
                  className="px-3 py-1.5 bg-bright-snow border border-alabaster rounded-lg text-sm font-medium text-iron-grey hover:bg-white hover:text-primary hover:border-primary/30 hover:shadow-sm transition-all cursor-default select-none"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
