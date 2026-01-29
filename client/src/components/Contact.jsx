import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import Button from './Button';
import { personalDetails } from '../data';
import { Mail, Send, Github, Linkedin, Heart } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // null, 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 3000);
    }, 1500);
  };

  return (
    <SectionWrapper id="contact" className="bg-background">
      <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto items-center">
        
        {/* Contact Info */}
        <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
        >
            <h2 className="text-4xl font-bold text-text-primary mb-6">Let's <span className="text-gradient">Connect</span></h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
                <a href={personalDetails.socials.email} className="flex items-center gap-4 glass-card p-4 hover:bg-white hover:shadow-lg transition-all group">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm text-text-muted">Email Me</p>
                        <p className="text-text-primary font-medium">{personalDetails.email}</p>
                    </div>
                </a>
                 <a href={personalDetails.socials.linkedin} className="flex items-center gap-4 glass-card p-4 hover:bg-white hover:shadow-lg transition-all group">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                        <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm text-text-muted">LinkedIn</p>
                        <p className="text-text-primary font-medium">Connect on LinkedIn</p>
                    </div>
                </a>
            </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 border border-gray-100 shadow-xl"
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-text-secondary">Your Name</label>
                    <input 
                        required
                        type="text" 
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-text-primary transition-all placeholder:text-gray-400"
                        placeholder="John Doe"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-text-secondary">Email Address</label>
                    <input 
                        required
                        type="email" 
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-text-primary transition-all placeholder:text-gray-400"
                        placeholder="john@example.com"
                    />
                </div>
                 <div className="space-y-2">
                    <label className="text-sm font-medium text-text-secondary">Message</label>
                    <textarea 
                        required
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 h-32 resize-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-text-primary transition-all placeholder:text-gray-400"
                        placeholder="I'd like to talk about..."
                    />
                </div>
                
                <button 
                    disabled={isSubmitting || status === 'success'}
                    className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                        status === 'success' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-primary text-white hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02]'
                    }`}
                >
                    {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : status === 'success' ? (
                        "Message Sent!"
                    ) : (
                        <>Send Message <Send className="w-5 h-5" /></>
                    )}
                </button>
            </form>
        </motion.div>

      </div>
    </SectionWrapper>
  );
};

export default Contact;
