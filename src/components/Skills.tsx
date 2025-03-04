
import React from "react";

const Skills = () => {
  const skills = [
    "Python",
    "Flutter",
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "Data Science",
    "MongoDB",
    "Node.js",
    "Express.js",
    "MATLAB",
    "Arduino",
    "Java",
    "VHDL",
    "C++",
    "Dart",
    "Mobile Development",
    "UI/UX Design",
    "NLP",
    "Computer Vision"
  ];

  return (
    <section
      id="skills"
      className="py-24 md:py-32 px-4 bg-secondary/50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal">
          <p className="text-primary text-sm uppercase tracking-wider font-medium mb-2">WHAT I KNOW</p>
          <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 glow"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 reveal">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-tag glow"
              style={{ 
                transitionDelay: `${0.05 * index}s`,
                animationDelay: `${0.2 * index}s` 
              }}
            >
              <div className="w-2 h-2 rounded-full bg-primary mr-2 pulse"></div>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
