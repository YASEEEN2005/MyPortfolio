import React from 'react';
import { Heart } from 'lucide-react';
import { personalDetails } from '../data';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-gray-200 bg-white text-center relative z-10">
            <p className="text-text-muted text-sm flex items-center justify-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by {personalDetails.name} © 2025
            </p>
        </footer>
    );
};

export default Footer;
