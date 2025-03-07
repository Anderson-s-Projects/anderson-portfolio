
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const morphingBgRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const morphingBg = morphingBgRef.current;
    if (!morphingBg) return;

    // Create enhanced random movement for the morphing background
    const moveRandomly = () => {
      const x = Math.random() * 15 - 7.5;
      const y = Math.random() * 15 - 7.5;
      const scale = 1 + Math.random() * 0.15 - 0.075;
      morphingBg.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;

      // Update colors with more vibrant variations
      const hue1 = 250 + Math.random() * 25 - 12.5; // Purple base
      const hue2 = 190 + Math.random() * 25 - 12.5; // Blue base
      morphingBg.style.background = `radial-gradient(circle at 30% 30%, 
        hsl(${hue1}, 81%, 75%) 0%, 
        hsl(${hue2}, 81%, 65%) 50%, 
        rgba(26, 31, 44, 0) 80%)`;
      
      // Add subtle box-shadow variations
      const shadowSize = 80 + Math.random() * 20;
      morphingBg.style.filter = `blur(${shadowSize}px)`;
    };
    
    const intervalId = setInterval(moveRandomly, 3000);
    moveRandomly(); // Initial position

    // Add subtle floating animation to avatar
    const avatar = avatarRef.current;
    if (avatar) {
      let yPos = 0;
      let yDirection = 1;
      const floatAnimation = () => {
        if (yDirection === 1) {
          yPos += 0.05;
          if (yPos >= 5) yDirection = -1;
        } else {
          yPos -= 0.05;
          if (yPos <= -5) yDirection = 1;
        }
        avatar.style.transform = `translateY(${yPos}px)`;
        requestAnimationFrame(floatAnimation);
      };
      
      floatAnimation();
    }

    return () => clearInterval(intervalId);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section id="home" className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* Enhanced morphing background blob */}
      <div 
        ref={morphingBgRef} 
        className="absolute w-[800px] h-[800px] opacity-50 transition-all duration-[3000ms] ease-in-out" 
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(155, 135, 245, 1) 0%, rgba(111, 219, 255, 0.8) 50%, rgba(26, 31, 44, 0) 80%)',
          transform: 'translate(0, 0) scale(1)',
          filter: 'blur(80px)'
        }} 
      />
      
      <div className="container px-4 relative z-10 text-center">
        {/* Enhanced Avatar with neumorphism */}
        <div ref={avatarRef} className="mb-6 relative inline-block transition-transform duration-1000 ease-in-out">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto relative">
            {/* Outer ring with neumorphic effect */}
            <div className="absolute inset-0 rounded-full" style={{
              boxShadow: 
                `inset -4px -4px 8px rgba(255, 255, 255, 0.1),
                inset 4px 4px 12px rgba(0, 0, 0, 0.4),
                -8px -8px 15px rgba(255, 255, 255, 0.05),
                8px 8px 25px rgba(0, 0, 0, 0.3)`
            }}></div>
            
            <div className="w-full h-full rounded-full bg-gradient-to-br from-accent-purple to-accent-blue p-1.5 relative z-10">
              {/* Digital Nomad Avatar */}
              <div className="w-full h-full rounded-full bg-card-bg flex items-center justify-center text-3xl font-display text-white relative overflow-hidden">
                A
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,rgba(155,135,245,0.4)_0%,rgba(111,219,255,0.2)_50%,rgba(26,31,44,0)_80%)]"></div>
              </div>
            </div>
            
            {/* Animated glow */}
            <div className="absolute inset-0 rounded-full animate-pulse-slow opacity-60 blur-md bg-accent-gradient z-0"></div>
          </div>
        </div>
        
        {/* Enhanced Title */}
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 animate-fade-in">
          <span className="block">Anderson Paulino's</span>
          <span className="gradient-text text-glow">Profile</span>
        </h1>
        
        {/* Subtitle with enhanced styling */}
        <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-8 animate-slide-up backdrop-blur-sm py-2">
          <span className="font-semibold text-white">Autodidactic Innovator:</span> Front-End Developer | Data-Driven Solutions Specialist
        </p>
        
        {/* Enhanced CTA Button with neumorphism */}
        <button 
          onClick={scrollToNext} 
          className="px-6 py-3 text-white flex items-center gap-2 mx-auto mt-8 animate-slide-up rounded-xl bg-card-bg border border-neuro-light/10 transition-all duration-300 hover:translate-y-[-2px]" 
          style={{
            animationDelay: '0.2s',
            boxShadow: 
              `-5px -5px 10px rgba(255, 255, 255, 0.05),
              5px 5px 15px rgba(0, 0, 0, 0.25)`
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = 
              `-7px -7px 15px rgba(255, 255, 255, 0.07),
              7px 7px 20px rgba(0, 0, 0, 0.3)`;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.boxShadow = 
              `-5px -5px 10px rgba(255, 255, 255, 0.05),
              5px 5px 15px rgba(0, 0, 0, 0.25)`;
          }}
        >
          Explore My Work
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
