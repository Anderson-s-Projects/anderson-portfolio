
import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  demoLink,
  githubLink,
  className,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={cn(
        "flip-card w-full h-[400px] rounded-xl cursor-pointer relative group",
        className,
        { "flipped": isFlipped }
      )}
      onClick={handleFlip}
    >
      <div className="flip-card-inner w-full h-full">
        {/* Front of card */}
        <div className="flip-card-front rounded-xl neuro-panel flex flex-col overflow-hidden">
          <div 
            className="h-1/2 bg-cover bg-center relative" 
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card-bg" />
          </div>
          
          <div className="p-6 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-2">{title}</h3>
              <p className="text-text-secondary text-sm line-clamp-3">{description}</p>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                {technologies.slice(0, 3).map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-xs px-2 py-1 rounded-full bg-muted text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
                {technologies.length > 3 && (
                  <span className="text-xs px-2 py-1 rounded-full bg-muted text-text-secondary">
                    +{technologies.length - 3}
                  </span>
                )}
              </div>
              
              <span className="text-accent-purple flex items-center gap-1 text-sm">
                Details <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="flip-card-back rounded-xl neuro-panel p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-4">{title}</h3>
            <p className="text-text-secondary mb-4">{description}</p>
            
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-white mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-xs px-2 py-1 rounded-full bg-muted text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 mt-6">
            {demoLink && (
              <a 
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 neuro-button px-4 py-2 text-white text-sm hover:text-accent-purple"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
            
            {githubLink && (
              <a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 neuro-button px-4 py-2 text-white text-sm hover:text-accent-purple"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" /> View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
