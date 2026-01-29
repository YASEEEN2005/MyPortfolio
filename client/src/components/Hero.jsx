import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import SectionWrapper from './SectionWrapper';
import { personalDetails } from '../data';
import { ArrowRight, Terminal, Download, Github, Linkedin, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <SectionWrapper id="hero" className="min-h-screen flex items-center justify-center pt-28 md:pt-20 bg-bright-snow relative overflow-hidden">
      
      {/* Background Decor - Extremely Subtle Grayscale/Accent mix */}
      <div className="absolute inset-0 z-0 pointer-events-none transform-gpu">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-platinum rounded-full blur-[100px] opacity-60 will-change-transform" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-soft/20 rounded-full blur-[80px] opacity-40 will-change-transform" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl relative z-10">
        
        {/* ==================== TEXT CONTENT ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          {/* Greeting - Highlight Accent */}
          <h3 className="text-lg md:text-xl font-bold text-primary mb-3 tracking-wide">
             Hello, I'm
          </h3>
          
          {/* Name - Carbon Black */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-carbon-black mb-4 leading-tight">
            {personalDetails.name}
          </h1>
          
          {/* Role - Slate Grey */}
          <h2 className="text-2xl md:text-3xl text-slate-grey font-medium mb-6">
            {personalDetails.role}
          </h2>
          
          <p className="text-iron-grey text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
            {personalDetails.tagline}
          </p>

          {/* Buttons - Modern Rounded */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
            {/* Hire Me - Primary Filled */}
            <Button 
                href="#contact" 
                className="bg-primary hover:bg-primary-hover text-white rounded-full px-8 py-3 shadow-lg shadow-primary/20 transition-all active:scale-95 border-none"
            >
              Hire Me <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            
            {/* Download CV - White with Border (Editorial look) */}
            <Button 
                href="/resume.pdf" 
                className="bg-white border border-alabaster text-carbon-black hover:border-slate-grey hover:bg-bright-snow rounded-full px-8 py-3 shadow-sm transition-all active:scale-95"
            >
              Download CV <Download className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Social Icons - Slate Grey to Primary Hover */}
          <div className="flex gap-6 justify-center lg:justify-start text-slate-grey">
              <a href={personalDetails.socials.github} className="hover:text-primary transition-colors transform hover:scale-110 duration-200"><Github className="w-6 h-6" /></a>
              <a href={personalDetails.socials.linkedin} className="hover:text-primary transition-colors transform hover:scale-110 duration-200"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="hover:text-primary transition-colors transform hover:scale-110 duration-200"><Instagram className="w-6 h-6" /></a>
          </div>

        </motion.div>

        {/* ==================== VISUAL / CODE CARD ==================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative hidden lg:block perspective-1000"
        >
           {/* Card - White Surface, Alabaster Border */}
           <div className="relative w-full max-w-lg mx-auto bg-white rounded-xl shadow-xl border border-alabaster overflow-hidden transform transition-all hover:scale-[1.02] duration-500 hover:shadow-2xl">
              {/* Header - Platinum */}
              <div className="px-5 py-3 border-b border-alabaster flex items-center justify-between bg-bright-snow">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-pale-slate-2"></div>
                    <div className="w-3 h-3 rounded-full bg-pale-slate-2"></div>
                  </div>
                  <div className="text-xs font-mono text-slate-grey opacity-70">
                      developer.config.ts
                  </div>
              </div>

              {/* Code Content - Syntax Highlighting adapted for Light Theme */}
              <div className="p-8 font-mono text-sm leading-7 text-iron-grey/90">
                  <span className="text-primary font-bold">const</span> <span className="text-carbon-black font-bold">profile</span> = <span className="text-slate-grey">{`{`}</span><br/>
                  &nbsp;&nbsp;<span className="text-slate-grey">name</span>: <span className="text-accent-highlight">"{personalDetails.name}"</span>,<br/>
                  &nbsp;&nbsp;<span className="text-slate-grey">role</span>: <span className="text-accent-highlight">"{personalDetails.role}"</span>,<br/>
                  &nbsp;&nbsp;<span className="text-slate-grey">skills</span>: <span className="text-iron-grey">[</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-accent-highlight">"MERN"</span>, <span className="text-accent-highlight">"React"</span>, <span className="text-accent-highlight">"Node"</span><br/>
                  &nbsp;&nbsp;<span className="text-iron-grey">]</span>,<br/>
                  &nbsp;&nbsp;<span className="text-slate-grey">hireable</span>: <span className="text-primary font-bold">true</span><br/>
                  <span className="text-slate-grey">{`}`}</span>;
              </div>
           </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
