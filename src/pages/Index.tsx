
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";

const Index = () => {
  useEffect(() => {
    // Implement reveal animation on scroll
    const revealElements = document.querySelectorAll(".reveal");
    
    const reveal = () => {
      const windowHeight = window.innerHeight;
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };
    
    window.addEventListener("scroll", reveal);
    // Call once after a small delay to ensure initial rendering is complete
    const timeout = setTimeout(() => {
      reveal();
    }, 300);
    
    return () => {
      window.removeEventListener("scroll", reveal);
      clearTimeout(timeout);
    };
  }, []);

  // Add bubble animation effect
  useEffect(() => {
    const createBubble = () => {
      const section = document.querySelector('.bubbles-container');
      if (!section) return;
      
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      
      // Random size between 15px and 60px
      const size = Math.random() * 45 + 15;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      
      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      bubble.style.left = `${posX}%`;
      bubble.style.bottom = `${-10}%`;
      
      // Random opacity
      bubble.style.opacity = (Math.random() * 0.3 + 0.1).toString();
      
      // Random animation duration
      const duration = Math.random() * 15 + 10;
      bubble.style.animationDuration = `${duration}s`;
      
      // Random animation delay
      const delay = Math.random() * 5;
      bubble.style.animationDelay = `${delay}s`;
      
      section.appendChild(bubble);
      
      // Remove bubble after animation completes
      setTimeout(() => {
        if (bubble.parentNode === section) {
          section.removeChild(bubble);
        }
      }, (duration + delay) * 1000);
    };
    
    // Create initial set of bubbles
    const bubbleCount = 15; // Initial count of bubbles
    for (let i = 0; i < bubbleCount; i++) {
      createBubble();
    }
    
    // Create new bubbles at intervals
    const intervalId = setInterval(createBubble, 2000);
    
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="scroll-smooth bg-background text-foreground">
      <div className="bubbles-container">
        {/* Bubbles will be dynamically added here */}
      </div>
      <style>{`
        .bubbles-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
          pointer-events: none;
        }
        
        .bubble {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle at 25% 25%, rgba(124, 58, 237, 0.2), rgba(96, 165, 250, 0.1));
          animation: float-up linear forwards;
          pointer-events: none;
          backdrop-filter: blur(1px);
        }
        
        @keyframes float-up {
          0% {
            transform: translateY(0) scale(0) rotate(0deg);
          }
          25% {
            transform: translateY(-25vh) scale(1) rotate(90deg);
          }
          50% {
            transform: translateY(-50vh) scale(1.2) rotate(180deg);
          }
          75% {
            transform: translateY(-75vh) scale(1) rotate(270deg);
          }
          100% {
            transform: translateY(-100vh) scale(0.5) rotate(360deg);
          }
        }
      `}</style>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
