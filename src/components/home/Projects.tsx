
import React from 'react';
import ProjectCard from '../ui/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with real-time filtering, custom charts, and exportable reports.",
      image: "https://placehold.co/600x400/23283A/FFFFFF?text=Data+Dashboard",
      technologies: ["React", "D3.js", "TailwindCSS", "Firebase"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Network Security Monitor",
      description: "Real-time network monitoring tool with threat detection algorithms and customizable alert systems for enterprise security teams.",
      image: "https://placehold.co/600x400/23283A/FFFFFF?text=Security+Monitor",
      technologies: ["TypeScript", "Node.js", "WebSockets", "Chart.js"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Marketing Analytics Platform",
      description: "End-to-end marketing analytics solution for campaign tracking, audience segmentation, and ROI optimization.",
      image: "https://placehold.co/600x400/23283A/FFFFFF?text=Marketing+Analytics",
      technologies: ["Vue.js", "Python", "PostgreSQL", "TensorFlow"],
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
