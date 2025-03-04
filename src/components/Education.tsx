
import React from "react";
import { BookOpen, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering - Computer Engineering",
      institution: "Kathmandu University, School of Engineering",
      period: "Sep, 2020 - Present",
      location: "Dhulikhel"
    },
    {
      degree: "High School",
      institution: "Liverpool International College",
      period: "Aug, 2017 - May, 2019",
      location: "Kathmandu"
    },
    {
      degree: "Secondary Level Education",
      institution: "Palpa Paragon English Boarding School",
      period: "May, 2004 - Apr, 2017",
      location: "Palpa"
    }
  ];

  return (
    <section
      id="education"
      className="py-24 md:py-32 px-4 bg-secondary/50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal">
          <p className="text-primary text-sm uppercase tracking-wider font-medium mb-2">MY JOURNEY</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 glow"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {education.map((item, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-lg p-6 mb-6 reveal hover-card"
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <div className="flex items-center mb-2">
                    <BookOpen className="w-5 h-5 text-primary mr-2" />
                    <h3 className="text-xl font-medium">{item.degree}</h3>
                  </div>
                  <p className="text-muted-foreground mb-2">{item.institution}</p>
                </div>
                <div className="md:text-right mt-2 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 bg-primary/20 text-primary rounded-full text-sm mb-1 glow">
                    <Calendar className="w-3 h-3 mr-1" />
                    {item.period}
                  </span>
                  <p className="text-muted-foreground text-sm">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
