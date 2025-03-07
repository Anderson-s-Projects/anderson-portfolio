
import React, { useRef, useEffect } from 'react';

const PaperWallEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;
    
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    
    // Update the paper wall effect with enhanced motion
    const updateEffect = () => {
      // Create smooth following motion
      posX += (mouseX - posX) * 0.05;
      posY += (mouseY - posY) * 0.05;
      
      if (container) {
        // Apply the effect to all paper grid cells with improved dynamics
        const paperCells = container.querySelectorAll('.paper-cell');
        paperCells.forEach((cell) => {
          const cellRect = (cell as HTMLElement).getBoundingClientRect();
          const cellCenterX = cellRect.left + cellRect.width / 2;
          const cellCenterY = cellRect.top + cellRect.height / 2;
          
          // Calculate distance from mouse to this cell
          const distX = posX - (cellCenterX - container.getBoundingClientRect().left);
          const distY = posY - (cellCenterY - container.getBoundingClientRect().top);
          const distance = Math.sqrt(distX * distX + distY * distY);
          
          // Calculate the effect strength based on distance with more pronounced effect
          const maxDistance = 350;
          const strength = Math.max(0, 1 - distance / maxDistance);
          
          // Apply improved stretching effect
          const stretchX = distX * strength * 0.25;
          const stretchY = distY * strength * 0.25;
          
          // Add subtle rotation based on position
          const rotation = strength * (distX > 0 ? 1 : -1) * 2;
          
          // Apply transformations with neumorphic shadows
          (cell as HTMLElement).style.transform = `translate(${stretchX}px, ${stretchY}px) scale(${1 + strength * 0.1}) rotate(${rotation}deg)`;
          (cell as HTMLElement).style.opacity = (0.6 + strength * 0.4).toString();
          
          // Dynamic shadow based on position
          const shadowIntensity = strength * 0.15;
          const shadowX = -distX * shadowIntensity;
          const shadowY = -distY * shadowIntensity;
          
          // Apply neumorphic shadows dynamically
          (cell as HTMLElement).style.boxShadow = `
            ${shadowX}px ${shadowY}px 5px rgba(255, 255, 255, 0.05),
            ${-shadowX}px ${-shadowY}px 10px rgba(0, 0, 0, 0.15)
          `;
        });
      }
      
      requestAnimationFrame(updateEffect);
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    updateEffect();
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Create a grid of paper cells with more divisions for smoother effect
  const renderPaperGrid = () => {
    const cells = [];
    const gridSize = 14; // Increased grid size for more detailed effect
    
    for (let i = 0; i < gridSize * gridSize; i++) {
      cells.push(
        <div 
          key={i} 
          className="paper-cell"
        />
      );
    }
    
    return cells;
  };
  
  return (
    <div className="paper-wall-container" ref={containerRef}>
      <div className="paper-grid">
        {renderPaperGrid()}
      </div>
      <div className="paper-texture-overlay"></div>
    </div>
  );
};

export default PaperWallEffect;
