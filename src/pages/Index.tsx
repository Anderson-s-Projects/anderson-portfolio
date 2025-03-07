
import React, { useEffect } from 'react';
import ParticleBackground from '@/components/layout/ParticleBackground';
import PaperWallEffect from '@/components/effects/PaperWallEffect';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Experience from '@/components/home/Experience';
import Skills from '@/components/home/Skills';
import Projects from '@/components/home/Projects';
import Contact from '@/components/home/Contact';
import Footer from '@/components/layout/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        document.querySelector(href)?.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    
    // Enhanced page load animation
    document.body.classList.add('animate-fade-in');
    
    // Add ripple effect on click
    const handleClick = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      const ripple = document.createElement('div');
      ripple.className = 'ripple-animation';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      document.body.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    };
    
    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-deep-bg">
      {/* Interactive Background Effects */}
      <ParticleBackground />
      <PaperWallEffect />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
