import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { personalDetails } from '../data';
import { Code2, Globe, Rocket } from 'lucide-react';

const About = () => {
    const cards = [
        { icon: <Code2 className="w-8 h-8 text-primary" />, title: "Clean Code", description: "I write clean, diverse, and scalable code." },
        { icon: <Globe className="w-8 h-8 text-accent" />, title: "Modern UI", description: "Minimalistic and effective user interfaces." },
        { icon: <Rocket className="w-8 h-8 text-purple-600" />, title: "Performance", description: "Optimized for speed and efficiency." },
    ];

  return (
    <SectionWrapper id="about" className="">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Stats/Cards */}
        <div className="order-2 md:order-1 grid gap-4">
             {cards.map((card, index) => (
                 <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="glass-card p-6 flex items-center gap-4 hover:shadow-lg transition-all"
                 >
                    <div className="p-3 bg-primary/10 rounded-lg">
                        {card.icon}
                    </div>
                    <div>
                        <h3 className="text-text-primary font-bold text-lg">{card.title}</h3>
                        <p className="text-text-secondary text-sm">{card.description}</p>
                    </div>
                 </motion.div>
             ))}
        </div>

        {/* Right Side: Text */}
        <div className="order-1 md:order-2">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center gap-2 mb-4">
                    <span className="h-px w-8 bg-primary"></span>
                    <span className="text-primary uppercase tracking-widest text-sm font-bold">About Me</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                    Crafting digital experiences with <span className="text-gradient">passion</span> and precision.
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6 font-normal text-lg">
                    {personalDetails.about}
                </p>
                
                 {/* Experience Tag / Badge */}
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    <span className="text-accent-hover text-sm font-semibold">Open to opportunities</span>
                </div>
            </motion.div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default About;
