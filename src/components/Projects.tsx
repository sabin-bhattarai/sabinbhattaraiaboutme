
import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A full-featured e-commerce website with secure transactions, user authentication, product search, and responsive design, showcasing front-end/back-end development and database management skills.",
      tags: ["MERN Stack", "MongoDB", "Express.js", "React", "Node.js"],
      link: "https://github.com/codenothappening/E-Commerce-Website",
    },
    {
      title: "Office Management System",
      description:
        "Developed an Office Management System with Qt, enhancing scheduling, resource allocation, and employee management, gaining experience in C++ and GUI design.",
      tags: ["C++", "Qt", "GUI Design", "Resource Management"],
      link: "https://github.com/codenothappening/Office-Management-System",
    },
    {
      title: "NEPSE Stock Market Prediction Using LSTM",
      description:
        "A semester project predicting Nepal Stock Exchange prices using LSTM neural networks, with real-time data scraping and time-series analysis.",
      tags: ["Python", "LSTM", "Data Scraping", "Machine Learning", "Time-Series Analysis"],
      link: "https://github.com/codenothappening/NEPSE-Stock-Prediction-LSTM",
    },
    {
      title: "Flutter Food Delivery Application",
      description:
        "A comprehensive food delivery app with user authentication, restaurant browsing, menu selection, real-time tracking, and payment integration.",
      tags: ["Flutter", "Dart", "Firebase", "UI/UX Design"],
      link: "https://github.com/codenothappening/Flutter-Food-Delivery-Application.git",
    },
    {
      title: "PDF Answer Retrieval using LangChain",
      description:
        "A PDF Answer Retrieval system using LangChain for NLP, implemented in Flutter for cross-platform compatibility.",
      tags: ["LangChain", "NLP", "Flutter", "Dart"],
      link: "https://github.com/codenothappening/PDF-answer-Retrival-Using-Langchain---Generative-AI.git",
    },
    {
      title: "Virtual Try On Using Stable Diffusion Model",
      description:
        "Revolutionizing retail experiences through Virtual Try On technology powered by a Stable Diffusion Model for seamless and accurate virtual fitting.",
      tags: ["AI", "Stable Diffusion", "Computer Vision", "Deep Learning"],
      link: "https://github.com/codenothappening/VTON-StableDiusion",
    },
    {
      title: "Knowledge Gap Analysis and Module Creation using NLP",
      description:
        "This project generates dynamic quizzes to assess users' understanding, identifies areas for improvement, and creates personalized study modules based on the results.",
      tags: ["NLP", "Machine Learning", "Education Tech", "Python"],
      link: "https://github.com/codenothappening/codewave_Course-Craft",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal">
          <p className="text-primary text-sm uppercase tracking-wider font-medium mb-2">MY WORK</p>
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 glow"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card reveal hover-card"
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors social-icon"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline group transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <ExternalLink className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
