
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
  pulse: number;
  pulseSpeed: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, radius: 150 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full window size
    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
      }
    };

    // Initialize particles with improved properties
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(Math.floor(window.innerWidth * 0.05), 100); // Adjust number based on screen size
      
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 4 + 1;
        const x = Math.random() * (canvas.width - size * 2);
        const y = Math.random() * (canvas.height - size * 2);
        const speedX = Math.random() * 0.6 - 0.3;
        const speedY = Math.random() * 0.6 - 0.3;
        
        // Colors from our theme
        const colors = ['rgba(155, 135, 245, 0.7)', 'rgba(111, 219, 255, 0.7)', 'rgba(177, 156, 255, 0.7)'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particlesRef.current.push({
          x,
          y,
          size,
          speedX,
          speedY,
          color,
          alpha: Math.random() * 0.5 + 0.3,
          pulse: 0,
          pulseSpeed: Math.random() * 0.02 + 0.01
        });
      }
    };

    // Animation loop with enhanced effects
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle) => {
        // Update pulse for size oscillation
        particle.pulse += particle.pulseSpeed;
        const sizeModifier = Math.sin(particle.pulse) * 0.5 + 1;
        
        // Draw particle with pulsing effect
        ctx.beginPath();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.arc(particle.x, particle.y, particle.size * sizeModifier, 0, Math.PI * 2);
        ctx.fill();
        
        // Add soft glow effect
        ctx.beginPath();
        ctx.globalAlpha = particle.alpha * 0.4;
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Update position with more dynamic motion
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Boundary check with smoother bounce
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX = -particle.speedX * 0.9;
        }
        
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY = -particle.speedY * 0.9;
        }
        
        // Enhanced mouse interaction with stronger push effect
        const dx = particle.x - mouseRef.current.x;
        const dy = particle.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseRef.current.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
          
          particle.x += Math.cos(angle) * force * 3;
          particle.y += Math.sin(angle) * force * 3;
        }
        
        // Connect nearby particles with lines
        particlesRef.current.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = particle.color;
            ctx.globalAlpha = (120 - distance) / 120 * 0.3;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Mouse move event with improved tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    // Touch move event
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
      }
    };

    // Set up everything
    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);
    
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particles-container"
      style={{ opacity: 0.8 }}
    />
  );
};

export default ParticleBackground;
