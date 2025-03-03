import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
const Hero: React.FC = () => {
  const morphingBgRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const morphingBg = morphingBgRef.current;
    if (!morphingBg) return;

    // Create random movement for the morphing background
    const moveRandomly = () => {
      const x = Math.random() * 10 - 5;
      const y = Math.random() * 10 - 5;
      const scale = 1 + Math.random() * 0.1 - 0.05;
      morphingBg.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;

      // Update colors slightly
      const hue1 = 250 + Math.random() * 20 - 10; // Purple base
      const hue2 = 190 + Math.random() * 20 - 10; // Blue base
      morphingBg.style.background = `radial-gradient(circle at 30% 30%, 
        hsl(${hue1}, 81%, 75%) 0%, 
        hsl(${hue2}, 81%, 65%) 50%, 
        rgba(26, 31, 44, 0) 80%)`;
    };
    const intervalId = setInterval(moveRandomly, 3000);
    moveRandomly(); // Initial position

    return () => clearInterval(intervalId);
  }, []);
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* Morphing background blob */}
      <div ref={morphingBgRef} className="absolute w-[800px] h-[800px] opacity-40 transition-all duration-[3000ms] ease-in-out blur-[80px]" style={{
      background: 'radial-gradient(circle at 30% 30%, rgba(155, 135, 245, 1) 0%, rgba(111, 219, 255, 0.8) 50%, rgba(26, 31, 44, 0) 80%)',
      transform: 'translate(0, 0) scale(1)'
    }} />
      
      <div className="container px-4 relative z-10 text-center">
        {/* Avatar */}
        <div className="mb-6 relative inline-block">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full neuro-panel p-1 mx-auto">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-accent-purple to-accent-blue overflow-hidden">
              {/* Digital Nomad Avatar - we'll use an SVG placeholder for now */}
              <div className="w-full h-full bg-card-bg flex items-center justify-center text-3xl font-display text-white">
                A
              </div>
            </div>
          </div>
          <div className="absolute inset-0 rounded-full animate-pulse-slow opacity-60 blur-md bg-accent-gradient" />
        </div>
        
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 animate-fade-in">
          <span className="block">Anderson Paulino's</span>
          <span className="gradient-text text-glow">Profile</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-8 animate-slide-up">
          <span className="font-semibold text-white">Autodidactic Innovator:</span> Front-End Developer | Data-Driven Solutions Specialist
        </p>
        
        {/* CTA Button */}
        <button onClick={scrollToNext} className="neuro-button px-6 py-3 text-white flex items-center gap-2 mx-auto mt-8 animate-slide-up" style={{
        animationDelay: '0.2s'
      }}>
          Explore My Work
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>;
};
export default Hero;