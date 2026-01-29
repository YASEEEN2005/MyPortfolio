import React from 'react';
import { Heart, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { personalDetails } from '../data';

const Footer = () => {
    return (
        <footer className="py-12 bg-white border-t border-alabaster relative z-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
                
                {/* Logo / Name */}
                <div className="mb-6">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-carbon-black to-slate-grey">
                        {personalDetails.name}
                    </span>
                </div>

                {/* Social Links */}
                <div className="flex gap-6 mb-8">
                    <a href={personalDetails.socials.github} className="p-2 text-slate-grey hover:text-primary hover:bg-bright-snow rounded-full transition-all">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href={personalDetails.socials.linkedin} className="p-2 text-slate-grey hover:text-primary hover:bg-bright-snow rounded-full transition-all">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 text-slate-grey hover:text-primary hover:bg-bright-snow rounded-full transition-all">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 text-slate-grey hover:text-primary hover:bg-bright-snow rounded-full transition-all">
                        <Instagram className="w-5 h-5" />
                    </a>
                </div>

                {/* Copyright */}
                <div className="flex items-center gap-2 text-sm text-iron-grey font-medium">
                    <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                </div>
                
                <div className="mt-2 flex items-center gap-1 text-xs text-pale-slate-2">
                    <span>Made with</span>
                    <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse" />
                    <span>in React & Tailwind</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
