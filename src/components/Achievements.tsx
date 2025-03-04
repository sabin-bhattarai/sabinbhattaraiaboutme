
import React from "react";
import { Award, Star, Medal, Trophy } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Best Use of Redis Award - KU HackFest 2023",
      description: "Participated in KU HackFest 2023 and won the 'Best Use of Redis' award.",
      icon: <Trophy className="w-5 h-5 text-primary" />
    },
    {
      title: "Certificate of Appreciation - KU HackFest 2022",
      description: "Contributed to the Design Committee, creating visuals and interfaces that ensured a seamless, engaging event.",
      icon: <Award className="w-5 h-5 text-primary" />
    },
    {
      title: "Infinity Code-wave 24 Hours Hackathon",
      description: "Our team developed a Knowledge Gap Analysis and Module Creation system during a 24-hour hackathon. Using NLP, we generated dynamic quizzes, analyzed users' knowledge gaps, and provided personalized study materials, creating a tailored learning experience.",
      icon: <Star className="w-5 h-5 text-primary" />
    },
    {
      title: "Machine Learning Bootcamp - Kathmandu University",
      description: "Completed an intensive Machine Learning Bootcamp at Kathmandu University in 2022.",
      icon: <Medal className="w-5 h-5 text-primary" />
    }
  ];

  return (
    <section
      id="achievements"
      className="py-24 md:py-32 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal">
          <p className="text-primary text-sm uppercase tracking-wider font-medium mb-2">RECOGNITION</p>
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 glow"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-lg p-6 reveal flex hover-card"
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <div className="mr-4 mt-1">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center glow">
                  {achievement.icon}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
