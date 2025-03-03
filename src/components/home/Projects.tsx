
import React from 'react';
import ProjectCard from '../ui/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Trade Game",
      description: "Interactive trading simulation game that teaches financial concepts through gameplay mechanics, featuring real-time market simulation and portfolio tracking.",
      image: "https://placehold.co/600x400/23283A/FFFFFF?text=Trade+Game",
      technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
      demoLink: "https://anderson-s-projects.github.io/Trade-Game/",
      githubLink: "https://github.com/Anderson-s-Projects/Trade-Game"
    },
    {
      title: "Social Media Platform",
      description: "Full-featured social networking platform with responsive design, real-time notifications, multimedia sharing, and comprehensive user engagement analytics.",
      image: "https://placehold.co/600x400/23283A/FFFFFF?text=Social+Media",
      technologies: ["React", "Firebase", "Node.js", "Express", "MongoDB"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "E-Commerce Website",
      description: "Feature-rich online store with secure payment processing, inventory management, personalized recommendations, and detailed analytics dashboard.",
      image: "https://placehold.co/600x400/23283A/FFFFFF?text=E-Commerce",
      technologies: ["Vue.js", "Stripe API", "Vuex", "Node.js", "PostgreSQL"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with real-time filtering, custom charts, and exportable reports.",
      image: "https://placehold.co/600x400/23283A/FFFFFF?text=Data+Dashboard",
      technologies: ["React", "D3.js", "TailwindCSS", "Firebase"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Case Study: Finance System Integration",
      description: "Comprehensive analysis and implementation of financial system integration for a mid-size enterprise, resulting in 35% efficiency increase and cost reduction.",
      image: "https://placehold.co/600x400/23283A/FFFFFF?text=Case+Study",
      technologies: ["Financial Analysis", "System Integration", "Process Optimization", "Data Migration"],
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="section-container">
        <h2 className="section-title text-center">Featured Projects</h2>
        <p className="section-subtitle text-center">
          Showcase of my work in front-end development and data-driven solutions
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              demoLink={project.demoLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block neuro-button px-8 py-4 text-white hover:text-accent-purple"
          >
            Interested in collaborating on a project?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
