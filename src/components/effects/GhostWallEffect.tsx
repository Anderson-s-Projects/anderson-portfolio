
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const GhostWallEffect = () => {
  const ghostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ghostRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate normalized position (0-1)
      const normalizedX = clientX / innerWidth;
      const normalizedY = clientY / innerHeight;
      
      // Calculate push effect strength
      const pushX = (normalizedX - 0.5) * 2 * 30; // Max 30px movement
      const pushY = (normalizedY - 0.5) * 2 * 30;
      
      // Update ghost position with slight delay for smoother effect
      ghostRef.current.style.transform = `translate(${pushX}px, ${pushY}px)`;
      
      // Calculate depth based on mouse position (for the latex/stretch effect)
      const centerDistanceX = Math.abs(normalizedX - 0.5) * 2; // 0 at center, 1 at edges
      const centerDistanceY = Math.abs(normalizedY - 0.5) * 2;
      const distanceFromCenter = Math.min(1, Math.sqrt(centerDistanceX * centerDistanceX + centerDistanceY * centerDistanceY));
      
      // Apply stretching/depth effect
      ghostRef.current.style.filter = `blur(${distanceFromCenter * 3}px)`;
      ghostRef.current.style.opacity = `${1 - distanceFromCenter * 0.3}`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <div className="absolute inset-0 bg-deep-bg opacity-70" />
      
      {/* Latex membrane effect */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div 
          ref={ghostRef}
          className="w-[calc(100vw-40px)] h-[calc(100vh-40px)] transition-transform duration-300 ease-out relative"
        >
          <motion.div 
            className="absolute inset-0 rounded-3xl backdrop-blur-[1px]"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%)',
              boxShadow: 'inset 0 0 20px rgba(155, 135, 245, 0.2)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
            initial={{ scale: 1 }}
            animate={{ 
              scale: [1, 1.01, 1],
              opacity: [0.8, 0.9, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
      
      {/* Ghost elements pushing through */}
      <div className="ghost-elements">
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute bg-gradient-to-r from-accent-purple/40 to-accent-blue/30 rounded-full blur-xl"
            style={{
              width: `${Math.random() * 120 + 80}px`,
              height: `${Math.random() * 120 + 80}px`,
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 40 - 20, 0],
              y: [0, Math.random() * 40 - 20, 0],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 8 + 7,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Latex stretch lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(155, 135, 245, 0.3)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

export default GhostWallEffect;
