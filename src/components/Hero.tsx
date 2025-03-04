
import React from "react";
import { Mail, ArrowDown, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50"></div>
        {/* Remove the animated dots since we now have bubbles */}
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <p 
          className="reveal text-primary mb-4 tracking-wide"
          style={{ transitionDelay: "0.2s" }}
        >
          Hello, I'm
        </p>
        <h1 className="reveal text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" style={{ transitionDelay: "0.4s" }}>
          <span className="text-foreground">Sabin</span>{" "}
          <span className="text-gradient gradient-shift">Bhattarai</span>
        </h1>
        <div className="w-32 h-1 bg-primary mx-auto mb-6 reveal glow" style={{ transitionDelay: "0.5s" }}></div>
        <p 
          className="reveal text-xl md:text-2xl text-muted-foreground mb-3 max-w-2xl mx-auto"
          style={{ transitionDelay: "0.6s" }}
        >
          Aspiring Computer Engineer with a passion for
        </p>
        <p 
          className="reveal text-xl md:text-2xl mb-10 max-w-2xl mx-auto"
          style={{ transitionDelay: "0.7s" }}
        >
          <span className="text-gradient gradient-shift font-medium">Machine Learning</span> and{" "}
          <span className="text-gradient gradient-shift font-medium">App Developement</span>
        </p>
        
        <div 
          className="reveal flex flex-col sm:flex-row justify-center gap-4 mt-10"
          style={{ transitionDelay: "0.8s" }}
        >
          <button 
            onClick={() => scrollToSection("contact")}
            className="flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md transition-all duration-300 gap-2 hover:shadow-lg hover:shadow-primary/20 hover:translate-y-[-5px] group backdrop-blur-sm"
          >
            <Mail className="w-5 h-5 group-hover:animate-pulse" />
            Contact Me
          </button>
          <button 
            onClick={() => scrollToSection("about")}
            className="flex items-center justify-center bg-transparent border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md transition-all duration-300 gap-2 hover:shadow-lg hover:shadow-primary/10 hover:translate-y-[-5px] group backdrop-blur-sm"
          >
            About Me
          </button>
        </div>
        
        <div 
          className="reveal mt-12 flex justify-center gap-6"
          style={{ transitionDelay: "1s" }}
        >
          <a 
            href="https://github.com/sabin-bhattarai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="mailto:sabinbhattarai520@gmail.com" 
            className="social-icon"
            aria-label="Email Me"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/sabin--bhattarai/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bounce">
        <button onClick={() => scrollToSection("about")} aria-label="Scroll down" className="hover:text-primary transition-colors">
          <ArrowDown className="h-6 w-6 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
