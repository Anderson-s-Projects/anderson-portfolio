
import React, { useRef, useEffect, useState } from 'react';
import { Briefcase, Award, GraduationCap, Circle } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

const Experience: React.FC = () => {
  const [timelineItems, setTimelineItems] = useState<TimelineItem[]>([
    {
      id: 1,
      title: "Shift Supervisor",
      organization: "Allied Universal",
      period: "2020 - May 2024",
      description: "Managed security operations, developed technical and leadership skills. Applied finance systems expertise for operational improvements.",
      icon: <Briefcase className="w-6 h-6" />,
      isActive: false
    },
    {
      id: 2,
      title: "Freelance Front-End Developer",
      organization: "Self-employed",
      period: "2020 - Present",
      description: "Developed responsive web applications and digital marketing solutions. Integrated finance systems optimization with user-centric design principles.",
      icon: <Briefcase className="w-6 h-6" />,
      isActive: false
    },
    {
      id: 3,
      title: "Employee of the Year",
      organization: "Allied Universal",
      period: "2021",
      description: "Recognized for exceptional leadership and problem-solving skills in implementing technical solutions for security operations.",
      icon: <Award className="w-6 h-6" />,
      isActive: false
    },
    {
      id: 4,
      title: "Continuing Education",
      organization: "CUNY Bronx Community College",
      period: "2013 - Present",
      description: "Ongoing education in finance systems, data analysis, and technical skills development through self-directed learning and formal coursework.",
      icon: <GraduationCap className="w-6 h-6" />,
      isActive: false
    }
  ]);

  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const items = timelineRef.current.querySelectorAll('.timeline-item');
      
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        
        setTimelineItems(prev => 
          prev.map((timelineItem, i) => 
            i === index ? { ...timelineItem, isActive: isVisible } : timelineItem
          )
        );
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="section-container">
        <h2 className="section-title text-center">Experience Timeline</h2>
        <p className="section-subtitle text-center">A journey through my professional development and achievements</p>
        
        <div ref={timelineRef} className="relative mt-16 max-w-3xl mx-auto">
          {/* Vertical line through timeline */}
          <div className="absolute left-1/2 -ml-px h-full w-0.5 bg-gradient-to-b from-accent-purple via-accent-purple-light to-accent-blue"></div>
          
          {/* Timeline items */}
          {timelineItems.map((item, index) => (
            <div 
              key={item.id}
              className={`timeline-item relative mb-16 ${
                index % 2 === 0 ? 'md:ml-auto md:text-right md:pr-12' : 'md:mr-auto md:pl-12'
              } ${
                item.isActive ? 'animate-fade-in opacity-100' : 'opacity-0'
              } transition-opacity duration-700`}
              style={{ 
                width: '85%',
                maxWidth: '500px',
                transitionDelay: `${index * 200}ms`
              }}
            >
              {/* Timeline connector */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-4 h-4">
                <Circle className="w-4 h-4 fill-deep-bg stroke-accent-purple stroke-2" />
              </div>
              
              {/* Content */}
              <div className="neuro-panel p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-card-gradient flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-accent-purple">{item.organization}</p>
                  </div>
                </div>
                
                <p className="text-sm text-text-secondary mb-4">{item.period}</p>
                <p className="text-text-secondary">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
