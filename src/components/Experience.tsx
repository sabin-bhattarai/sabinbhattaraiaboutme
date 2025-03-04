
import React, { useEffect, useRef } from "react";

const Experience = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const experienceRefs = useRef<(HTMLLIElement | null)[]>([]);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    
    experienceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
      
      experienceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const achievements = [
    {
      title: "KU HackFest 2023",
      organization: "Kathmandu University",
      period: "2023",
      description:
        "Participated in KU HackFest 2023 and won the \"Best Use of Redis\" award.",
    },
    {
      title: "Infinity Code-wave 24 Hours Hackathon",
      organization: "Infinity",
      period: "2023",
      description:
        "Our team developed a Knowledge Gap Analysis and Module Creation system during a 24-hour hackathon. Using NLP, we generated dynamic quizzes, analyzed users' knowledge gaps, and provided personalized study materials, creating a tailored learning experience.",
    },
    {
      title: "Certificate of Appreciation",
      organization: "KU HackFest",
      period: "2022",
      description:
        "At KU HackFest 2022, I contributed to the Design Committee, creating visuals and interfaces that ensured a seamless, engaging event.",
    },
  ];

  const skills = [
    "Mobile Development",
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "Data Science",
    "MongoDB/Node.js",
    "Python",
    "Flutter",
    "Java",
    "MATLAB",
    "Arduino IDE",
    "VHDL",
  ];

  return (
    <section
      id="experience"
      className="py-24 md:py-32 px-4 bg-secondary"
    >
      <div className="container mx-auto max-w-5xl">
        <div ref={titleRef} className="reveal mb-16">
          <p className="section-tag">Experience</p>
          <h2 className="section-title">Achievements & Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-medium mb-8">Achievements</h3>
            <ol className="relative border-l border-muted-foreground/30">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  ref={(el) => (experienceRefs.current[index] = el)}
                  className="reveal mb-10 ml-6"
                  style={{ transitionDelay: `${0.2 * index}s` }}
                >
                  <span className="absolute flex items-center justify-center w-4 h-4 bg-primary rounded-full -left-2 ring-4 ring-background"></span>
                  <div className="p-6 bg-card rounded-lg border border-border shadow-sm">
                    <h4 className="flex items-center text-xl font-medium">
                      {achievement.title}
                    </h4>
                    <p className="mb-2 text-muted-foreground">
                      {achievement.organization} | {achievement.period}
                    </p>
                    <p className="text-base text-foreground/80 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div ref={skillsRef} className="reveal">
            <h3 className="text-2xl font-medium mb-8">Skills & Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 bg-card rounded-lg border border-border flex items-center transition-all duration-300 hover:border-primary/50 hover:shadow-sm"
                  style={{ transitionDelay: `${0.1 * index}s` }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-4">Certifications & Training</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span className="font-medium">Machine Learning Bootcamp</span>
                  <span className="text-muted-foreground">2022</span>
                </li>
                <li className="text-muted-foreground">Kathmandu University</li>
              </ul>
              
              <h3 className="text-xl font-medium mt-8 mb-4">Languages</h3>
              <ul className="space-y-3 list-disc pl-5">
                <li>English</li>
                <li>Nepali</li>
                <li>Hindi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
