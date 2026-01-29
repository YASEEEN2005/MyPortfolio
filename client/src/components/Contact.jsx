import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import Button from './Button';
import { personalDetails } from '../data';
import { Mail, Send, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [focusedInput, setFocusedInput] = useState(null);

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: personalDetails.email, href: `mailto:${personalDetails.email}` },
    { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: personalDetails.phone, href: `tel:${personalDetails.phone}` },
    { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: personalDetails.location, href: '#' },
  ];

  return (
    <SectionWrapper id="contact" className="bg-bright-snow relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
        </div>

      <div className="grid lg:grid-cols-2 gap-16 relative z-10 w-full max-w-6xl mx-auto">
        
        {/* Left: Info */}
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-4xl md:text-5xl font-bold text-carbon-black mb-6">Let's <span className="text-primary">Connect.</span></h2>
            <p className="text-lg text-slate-grey mb-12">I'm currently available for freelance work or full-time opportunities. Drop me a line!</p>
            
            <div className="space-y-8">
                {contactInfo.map((info, index) => (
                    <motion.a 
                        key={index}
                        href={info.href}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm border border-alabaster hover:border-primary/30 hover:shadow-lg transition-all group"
                    >
                        <div className="w-12 h-12 bg-bright-snow rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            {info.icon}
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-grey uppercase tracking-wider mb-1">{info.label}</p>
                            <p className="text-lg font-bold text-carbon-black group-hover:text-primary transition-colors">{info.value}</p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-alabaster relative"
        >
            <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                        <label className={`absolute left-4 transition-all duration-300 pointer-events-none text-slate-grey ${focusedInput === 'name' || true ? 'top-2 text-xs font-bold text-primary' : 'top-4 text-base'}`}>
                            Name
                        </label>
                        <input 
                            type="text" 
                            className="w-full bg-bright-snow border border-alabaster rounded-xl px-4 pt-6 pb-2 text-carbon-black focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                            onFocus={() => setFocusedInput('name')}
                            onBlur={() => setFocusedInput(null)}
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="relative">
                        <label className="absolute left-4 top-2 text-xs font-bold text-primary pointer-events-none">
                            Email
                        </label>
                        <input 
                            type="email" 
                            className="w-full bg-bright-snow border border-alabaster rounded-xl px-4 pt-6 pb-2 text-carbon-black focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                <div className="relative">
                    <label className="absolute left-4 top-2 text-xs font-bold text-primary pointer-events-none">
                        Subject
                    </label>
                    <input 
                        type="text" 
                        className="w-full bg-bright-snow border border-alabaster rounded-xl px-4 pt-6 pb-2 text-carbon-black focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                        placeholder="Project Inquiry"
                    />
                </div>

                <div className="relative">
                     <label className="absolute left-4 top-2 text-xs font-bold text-primary pointer-events-none">
                        Message
                    </label>
                    <textarea 
                        rows="4" 
                        className="w-full bg-bright-snow border border-alabaster rounded-xl px-4 pt-6 pb-2 text-carbon-black focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all resize-none"
                        placeholder="Tell me about your project..."
                    ></textarea>
                </div>

                <Button className="w-full py-4 text-base shadow-lg shadow-primary/25 bg-primary hover:bg-primary-hover text-white rounded-xl">
                    Send Message <Send className="w-5 h-5 ml-2" />
                </Button>
            </form>
        </motion.div>

      </div>
    </SectionWrapper>
  );
};

export default Contact;
