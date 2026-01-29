import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import SectionWrapper from './SectionWrapper';
import { personalDetails } from '../data';
import { ArrowRight, Terminal, Code2, Cpu, Download, Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <SectionWrapper id="hero" className="min-h-screen flex items-center justify-center pt-28 md:pt-20 bg-background relative overflow-hidden">
      
      {/* Simple Clean Background (Image style) */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-white">
         {/* Very subtle glow only */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 blur-[100px] rounded-full" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl relative z-10">
        
        {/* ==================== TEXT CONTENT ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // Center content on mobile to match image vibe, left on desktop for layout balance
          className="text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          {/* Hello Text - Green/Teal */}
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 tracking-wide">
             Hello, I'm
          </h3>
          
          {/* Name - Dark Bold */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-dark mb-4 leading-tight uppercase">
            {personalDetails.name}
          </h1>
          
          {/* Role - Serif-like or Muted */}
          <h2 className="text-2xl md:text-3xl text-text-secondary font-serif mb-6">
            {personalDetails.role}
          </h2>
          
          <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
            {personalDetails.tagline}
          </p>

          {/* Buttons - Matching Image Style */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
            {/* Hire Me - Teal Filled */}
            <Button 
                href="#contact" 
                className="bg-primary hover:bg-primary-hover text-white rounded-md px-8 py-3 shadow-md transition-all active:scale-95 border-none"
            >
              Hire Me <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            
            {/* Download CV - Dark Filled */}
            <Button 
                href="/resume.pdf" 
                className="bg-brand-dark hover:bg-brand-secondary text-white rounded-md px-8 py-3 shadow-md transition-all active:scale-95 border-none"
            >
              Download CV <Download className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Social Icons - Simple Dark Outlines */}
          <div className="flex gap-6 justify-center lg:justify-start text-brand-dark">
              <a href={personalDetails.socials.github} className="hover:text-primary transition-colors"><Github className="w-6 h-6" /></a>
              <a href={personalDetails.socials.linkedin} className="hover:text-primary transition-colors"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-6 h-6" /></a>
          </div>

        </motion.div>

        {/* ==================== VISUAL / CODE CARD ==================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative hidden lg:block perspective-1000"
        >
           <div className="relative w-full max-w-lg mx-auto bg-brand-dark rounded-xl shadow-2xl overflow-hidden transform transition-all hover:scale-[1.02] duration-500">
              {/* Simple Dark Header */}
              <div className="px-5 py-3 border-b border-gray-700 flex items-center gap-2 bg-gray-900/50">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              {/* Code Content - Dark Mode for Contrast */}
              <div className="p-8 font-mono text-sm leading-7 text-gray-300">
                  <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-yellow-400">{`{`}</span><br/>
                  &nbsp;&nbsp;<span className="text-red-400">name</span>: <span className="text-green-400">"{personalDetails.name}"</span>,<br/>
                  &nbsp;&nbsp;<span className="text-red-400">role</span>: <span className="text-green-400">"{personalDetails.role}"</span>,<br/>
                  &nbsp;&nbsp;<span className="text-red-400">skills</span>: [<span className="text-green-400">"MERN"</span>, <span className="text-green-400">"React"</span>],<br/>
                  &nbsp;&nbsp;<span className="text-blue-400">hireable</span>: <span className="text-purple-400">true</span><br/>
                  <span className="text-yellow-400">{`}`}</span>;
              </div>
           </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
