import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { skills } from '../data';

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="bg-white">
       <div className="text-center mb-16">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-text-primary mb-4"
            >
                My <span className="text-gradient">Tech Stack</span>
            </motion.h2>
            <motion.p 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="text-text-secondary max-w-2xl mx-auto"
            >
                Technologies I use to build scalable and robust applications.
            </motion.p>
       </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8 relative overflow-hidden group"
          >
             {/* Background Gradient Blob */}
             <div className={`absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>

            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                {skillGroup.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary">{skillGroup.category}</h3>
            </div>

            <div className="flex flex-wrap gap-2 relative z-10">
              {skillGroup.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-sm text-text-secondary hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
