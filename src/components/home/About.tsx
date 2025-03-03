
import React from 'react';
import { BookOpen, Code, Database, Network } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-darker-bg relative">
      <div className="section-container">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-text-secondary text-lg leading-relaxed mb-6">
            I'm a self-taught front-end developer and data solutions specialist with a passion for creating intuitive, data-driven applications that solve real-world problems. My diverse background in security, technical leadership, and continuous learning has shaped my unique approach to technology.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed">
            I thrive at the intersection of beautiful design and powerful functionality, building solutions that transform complex data into actionable insights through intuitive interfaces.
          </p>
        </div>
        
        {/* Core values/skills cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="neuro-panel p-6 flex flex-col items-center text-center group hover:shadow-card-hover transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-card-gradient flex items-center justify-center mb-4 group-hover:bg-accent-gradient transition-all duration-300">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-display font-bold mb-2">Front-End Development</h3>
            <p className="text-text-secondary">Crafting responsive, intuitive interfaces with modern frameworks and design principles.</p>
          </div>
          
          <div className="neuro-panel p-6 flex flex-col items-center text-center group hover:shadow-card-hover transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-card-gradient flex items-center justify-center mb-4 group-hover:bg-accent-gradient transition-all duration-300">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-display font-bold mb-2">Data Solutions</h3>
            <p className="text-text-secondary">Transforming complex data into meaningful insights through visualization and analysis.</p>
          </div>
          
          <div className="neuro-panel p-6 flex flex-col items-center text-center group hover:shadow-card-hover transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-card-gradient flex items-center justify-center mb-4 group-hover:bg-accent-gradient transition-all duration-300">
              <Network className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-display font-bold mb-2">Network Security</h3>
            <p className="text-text-secondary">Applying security expertise to create robust, protected applications and systems.</p>
          </div>
          
          <div className="neuro-panel p-6 flex flex-col items-center text-center group hover:shadow-card-hover transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-card-gradient flex items-center justify-center mb-4 group-hover:bg-accent-gradient transition-all duration-300">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-display font-bold mb-2">Continuous Learning</h3>
            <p className="text-text-secondary">Constantly expanding knowledge through self-directed education and exploration.</p>
          </div>
        </div>
        
        {/* "Featured in" or some recognition */}
        <div className="mt-20 text-center">
          <h3 className="text-lg font-display text-text-secondary mb-6">Recognition</h3>
          <div className="neuro-inset py-4 px-6 inline-block">
            <p className="text-white font-display">
              2021 Employee of the Year <span className="text-accent-purple">•</span> Allied Universal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
