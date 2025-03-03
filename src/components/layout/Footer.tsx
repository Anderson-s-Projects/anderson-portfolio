
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-darker-bg border-t border-neuro-light/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">
          <p className="text-text-secondary text-sm mb-2">
            &copy; {currentYear} Anderson's Portfolio. All rights reserved.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <a href="#home" className="text-text-secondary hover:text-white text-sm">
              Home
            </a>
            <span className="text-text-secondary">•</span>
            <a href="#about" className="text-text-secondary hover:text-white text-sm">
              About
            </a>
            <span className="text-text-secondary">•</span>
            <a href="#projects" className="text-text-secondary hover:text-white text-sm">
              Projects
            </a>
            <span className="text-text-secondary">•</span>
            <a href="#contact" className="text-text-secondary hover:text-white text-sm">
              Contact
            </a>
          </div>
          
          <div className="mt-6 neuro-inset px-4 py-2 inline-block">
            <p className="text-xs text-text-secondary">
              <span className="text-accent-purple">Designed & Developed</span> with a passion for excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
