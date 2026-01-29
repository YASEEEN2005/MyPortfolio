import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { education } from '../data';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <SectionWrapper id="education" className="bg-white relative">
       {/* Modern Timeline Container */}
       <div className="max-w-3xl mx-auto">
           <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-carbon-black mb-4">Education Path</h2>
                <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
           </div>

           <div className="relative border-l-2 border-alabaster ml-4 md:ml-10 space-y-12">
               {education.map((item, index) => (
                   <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="relative pl-8 md:pl-12"
                   >
                       {/* Timeline Dot */}
                       <span className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-white border-4 border-primary shadow-lg shadow-primary/20 z-10 transition-transform duration-300 hover:scale-150"></span>
                       
                       <div className="bg-bright-snow p-8 rounded-2xl border border-alabaster shadow-sm hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group">
                           <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                               <h3 className="text-xl font-bold text-carbon-black group-hover:text-primary transition-colors">{item.course}</h3>
                               <div className="flex items-center gap-2 text-sm text-primary font-medium bg-primary/5 px-3 py-1 rounded-full w-fit">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {item.date}
                               </div>
                           </div>
                           
                           <div className="flex items-center gap-2 mb-4">
                                <GraduationCap className="w-5 h-5 text-slate-grey" />
                                <span className="text-base font-semibold text-iron-grey">{item.institution}</span>
                           </div>
                           
                           <p className="text-slate-grey leading-relaxed">{item.desc}</p>
                       </div>
                   </motion.div>
               ))}
           </div>
       </div>
    </SectionWrapper>
  );
};

export default Education;
