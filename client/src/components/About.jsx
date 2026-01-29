import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { personalDetails } from '../data';
import { Code2, Globe, Rocket, Terminal } from 'lucide-react';

const About = () => {
    const cards = [
        { 
            icon: <Code2 className="w-6 h-6 text-primary" />, 
            title: "Clean Code", 
            description: "Modularity and scalability are my top priorities.",
            bg: "bg-primary/5 border-primary/10"
        },
        { 
            icon: <Globe className="w-6 h-6 text-accent" />, 
            title: "Modern UI", 
            description: "I build accessible, pixel-perfect interfaces.",
            bg: "bg-accent/5 border-accent/10"
        },
        { 
            icon: <Rocket className="w-6 h-6 text-purple-500" />, 
            title: "Performance", 
            description: "Optimized for lightning-fast load times.",
            bg: "bg-purple-500/5 border-purple-500/10"
        },
    ];

  return (
    <SectionWrapper id="about" className="bg-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bright-snow rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Stats/Cards with Staggered Animation */}
        <div className="order-2 md:order-1 grid gap-6">
             {cards.map((card, index) => (
                 <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ scale: 1.02, translateX: 10 }}
                    className={`p-6 rounded-2xl border ${card.bg} backdrop-blur-sm transition-all shadow-sm hover:shadow-md cursor-default group`}
                 >
                    <div className="flex items-start gap-5">
                        <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                            {card.icon}
                        </div>
                        <div>
                            <h3 className="text-carbon-black font-bold text-lg mb-1 group-hover:text-primary transition-colors">{card.title}</h3>
                            <p className="text-slate-grey text-sm leading-relaxed">{card.description}</p>
                        </div>
                    </div>
                 </motion.div>
             ))}
        </div>

        {/* Right Side: Text */}
        <div className="order-1 md:order-2">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center gap-2 mb-6">
                    <span className="h-px w-12 bg-primary"></span>
                    <span className="text-primary uppercase tracking-widest text-xs font-bold">About Me</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-carbon-black mb-8 leading-tight">
                    Crafting <span className="relative inline-block">
                        digital experiences
                        <span className="absolute bottom-1 left-0 w-full h-3 bg-accent-soft/30 -z-10 skew-x-12"></span>
                    </span> with passion.
                </h2>
                
                <p className="text-iron-grey leading-relaxed mb-6 font-normal text-lg">
                    {personalDetails.about}
                </p>
                
                 {/* Experience Tag / Badge */}
                 <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-3 px-5 py-3 bg-gunmetal text-white rounded-full shadow-lg shadow-gunmetal/20 cursor-pointer"
                 >
                    <Terminal className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">Open to new opportunities</span>
                </motion.div>
            </motion.div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default About;
