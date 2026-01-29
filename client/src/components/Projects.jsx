import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import Button from './Button';
import { projects } from '../data';
import { Github, ExternalLink, Layers, Code } from 'lucide-react';

const Projects = () => {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <SectionWrapper id="projects" className="bg-background">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-text-primary mb-4"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>
      </div>

      {/* Main Featured Project */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="glass-card p-8 md:p-12 mb-20 border border-primary/10 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/5 to-transparent pointer-events-none" />
        
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm mb-6 font-medium">
               <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
               Featured Work
            </div>
            <h3 className="text-3xl font-bold text-text-primary mb-4">{featuredProject.title}</h3>
            <p className="text-text-secondary leading-relaxed mb-6 text-lg">
                {featuredProject.description}
            </p>
            
            <div className="space-y-4 mb-8">
                <div>
                   <h4 className="flex items-center gap-2 text-text-primary font-semibold mb-3">
                        <Layers className="w-5 h-5 text-primary" /> Key Features
                   </h4>
                   <ul className="grid grid-cols-2 gap-2">
                     {featuredProject.features.map((feature, i) => (
                         <li key={i} className="flex items-center gap-2 text-text-muted text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {feature}
                         </li>
                     ))}
                   </ul>
                </div>
                
                <div>
                    <h4 className="flex items-center gap-2 text-text-primary font-semibold mb-3">
                        <Code className="w-5 h-5 text-accent" /> Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {featuredProject.techStack.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-gray-100/80 rounded-lg text-xs text-text-secondary border border-gray-200">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex gap-4">
               <Button href={featuredProject.liveLink} variant="primary">
                  Live Demo <ExternalLink className="w-4 h-4 ml-2" />
               </Button>
               <Button href={featuredProject.githubLink} variant="outline">
                  GitHub <Github className="w-4 h-4 ml-2" />
               </Button>
            </div>
          </div>

          <div className="order-1 md:order-2">
             <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-100 group cursor-pointer hover:shadow-2xl transition-shadow duration-300">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title} 
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" 
                />
             </div>
          </div>
        </div>
      </motion.div>

      {/* Other Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-6 flex flex-col h-full"
          >
            <div className="relative h-48 mb-6 overflow-hidden rounded-lg border border-gray-100">
               <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            
            <h3 className="text-xl font-bold text-text-primary mb-2">{project.title}</h3>
            <p className="text-text-muted text-sm mb-4 flex-grow">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs text-primary bg-primary/5 px-2 py-1 rounded">
                        {tech}
                    </span>
                ))}
            </div>
            
            <div className="flex justify-between items-center mt-auto border-t border-gray-100 pt-4">
                 <a href={project.githubLink} className="text-text-secondary hover:text-primary flex items-center gap-1 text-sm transition-colors">
                    <Github className="w-4 h-4" /> Code
                 </a>
                  <a href={project.liveLink} className="text-accent hover:text-accent-hover flex items-center gap-1 text-sm transition-colors">
                     Live Demo <ExternalLink className="w-3 h-3" />
                 </a>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
