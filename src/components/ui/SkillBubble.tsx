
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface SkillBubbleProps {
  name: string;
  level: number;
  maxLevel?: number;
  className?: string;
}

const SkillBubble: React.FC<SkillBubbleProps> = ({
  name,
  level,
  maxLevel = 500,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate percentage for the progress
  const percentage = Math.min(100, Math.round((level / maxLevel) * 100));
  
  // Determine skill level category
  let skillCategory = 'Beginner';
  let categoryColor = 'from-blue-400 to-blue-600';
  
  if (level >= 350) {
    skillCategory = 'Advanced';
    categoryColor = 'from-purple-500 to-accent-purple';
  } else if (level >= 180) {
    skillCategory = 'Intermediate';
    categoryColor = 'from-indigo-400 to-indigo-600';
  }

  return (
    <div
      className={cn(
        "neuro-panel p-4 relative group transition-all duration-300",
        isHovered ? "shadow-card-hover translate-y-[-2px]" : "",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-2 relative z-10">
        <div className="flex justify-between items-center">
          <h3 className="font-display font-medium text-white">{name}</h3>
          <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${categoryColor} text-white`}>
            {skillCategory}
          </span>
        </div>
        
        {/* Progress bar - animated on hover */}
        <div className="h-2 bg-darker-bg rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full bg-gradient-to-r ${categoryColor} transition-all duration-1000 ease-out`}
            style={{ 
              width: isHovered ? `${percentage}%` : '5%',
            }}
          />
        </div>
        
        {/* Level indicator */}
        <div className="flex justify-between items-center text-xs text-text-secondary">
          <span>Score: {level}</span>
          <span>{percentage}%</span>
        </div>
      </div>
      
      {/* Hover effect - subtle glow */}
      {isHovered && (
        <div className="absolute inset-0 -z-10 rounded-xl opacity-20 bg-accent-gradient blur-md" />
      )}
    </div>
  );
};

export default SkillBubble;
