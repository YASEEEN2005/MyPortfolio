import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { projects } from '../data';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import Button from './Button';

const Projects = () => {
  return (
    <SectionWrapper id="projects" className="bg-bright-snow relative">
      <div className="text-center mb-16">
         <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-carbon-black mb-4"
         >
            Featured <span className="text-primary">Projects</span>
         </motion.h2>
         <p className="text-slate-grey text-lg max-w-2xl mx-auto">
             A showcase of my recent work, highlighting performance, design, and functionality.
         </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative bg-white rounded-2xl overflow-hidden border border-alabaster shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 ease-out"
          >
            {/* Image Container with Zoom Effect */}
            <div className="aspect-video overflow-hidden relative bg-platinum">
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gunmetal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                    <motion.a 
                        href={project.github}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        className="p-3 bg-white rounded-full text-carbon-black hover:text-primary transition-colors shadow-lg opacity-0 group-hover:opacity-100 delay-100 duration-300"
                    >
                        <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a 
                        href={project.link}
                         initial={{ scale: 0.8, opacity: 0 }}
                         whileHover={{ scale: 1.1 }}
                         className="p-3 bg-white rounded-full text-carbon-black hover:text-primary transition-colors shadow-lg opacity-0 group-hover:opacity-100 delay-150 duration-300"
                    >
                        <ExternalLink className="w-5 h-5" />
                    </motion.a>
                </div>
                
                <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out block"
                />
            </div>

            {/* Content */}
            <div className="p-8 relative">
                 <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white p-3 rounded-xl shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                    <ExternalLink className="w-5 h-5" />
                 </div>

                <h3 className="text-2xl font-extrabold text-carbon-black mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-grey mb-6 line-clamp-3 leading-relaxed">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-bright-snow text-iron-grey text-xs font-bold uppercase tracking-wider rounded-md border border-alabaster">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4">
                     <Button href={project.link} variant="primary" className="flex-1 py-2.5 text-sm">
                        Live Demo
                     </Button>
                     <Button href={project.github} variant="outline" className="flex-1 py-2.5 text-sm">
                        Source Code
                     </Button>
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
