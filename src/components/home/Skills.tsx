import React from 'react';
import SkillBubble from '../ui/SkillBubble';
interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number;
  }[];
}
const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [{
    title: "Advanced",
    skills: [{
      name: "Network Security",
      level: 500
    }, {
      name: "Advertising",
      level: 462
    }, {
      name: "Operating Systems",
      level: 443
    }, {
      name: "Big Data",
      level: 375
    }, {
      name: "Web Development",
      level: 353
    }]
  }, {
    title: "Intermediate",
    skills: [{
      name: "Data Analysis Software",
      level: 331
    }, {
      name: "Data Analysis",
      level: 313
    }, {
      name: "Human Resources",
      level: 297
    }, {
      name: "Machine Learning",
      level: 280
    }, {
      name: "Data Management",
      level: 261
    }, {
      name: "Communication",
      level: 256
    }, {
      name: "Marketing",
      level: 244
    }, {
      name: "Algorithms",
      level: 205
    }, {
      name: "Recruitment",
      level: 184
    }, {
      name: "Critical Thinking",
      level: 181
    }, {
      name: "Data Visualization Software",
      level: 168
    }, {
      name: "Data Science",
      level: 164
    }]
  }, {
    title: "Beginner",
    skills: [{
      name: "Artificial Intelligence (AI/ML)",
      level: 142
    }, {
      name: "Interviewing Skills",
      level: 140
    }, {
      name: "Full Cycle Recruitment",
      level: 133
    }]
  }];
  return <section id="skills" className="py-16 bg-darker-bg relative md:py-0">
      <div className="section-container">
        <h2 className="section-title text-center">Skills Assessment</h2>
        <p className="section-subtitle text-center">
          A detailed breakdown of my technical expertise and proficiency levels
        </p>
        
        <div className="space-y-16 mt-12">
          {skillCategories.map((category, categoryIndex) => <div key={categoryIndex}>
              <h3 className="text-2xl font-display font-bold mb-8 text-white">
                <span className="text-accent-purple">#</span> {category.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => <SkillBubble key={skillIndex} name={skill.name} level={skill.level} className="h-full" />)}
              </div>
            </div>)}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block neuro-inset p-4 text-center max-w-md">
            <p className="text-text-secondary">
              <span className="text-white font-semibold">Note:</span> Skills assessment based on standardized testing and industry benchmarks, with scores out of 500.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Skills;