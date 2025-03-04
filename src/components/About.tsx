
import React from "react";
import { Download, Mail, MapPin, Phone } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-4 relative"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal">
          <p className="text-primary text-sm uppercase tracking-wider font-medium mb-2">WHO I AM</p>
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 glow"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-lg leading-relaxed reveal">
            <p>
              Aspiring Computer Engineer currently pursuing a degree at Kathmandu University, 
              with a strong interest in Machine Learning and App Development. Eager to apply 
              theoretical knowledge to practical applications, and continuously expanding my skills 
              in advanced AI technologies.
            </p>
            <p>
              Passionate about innovation and dedicated to contributing to cutting-edge 
              projects in the tech industry. I thrive on solving complex problems and 
              creating solutions that make a positive impact.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="badge bg-primary/20 text-primary">Computer Engineering</span>
              <span className="badge bg-primary/20 text-primary">Machine Learning</span>
              <span className="badge bg-primary/20 text-primary">App Development</span>
              <span className="badge bg-primary/20 text-primary">Generative AI</span>
            </div>
            <div className="pt-6">
              <a 
                href="/Sabin-Bhattarai-cv (2).pdf" 
                className="inline-flex items-center px-5 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-all duration-300 gap-2 group hover:shadow-lg hover:shadow-primary/20"
                download
              >
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                Download Resume
              </a>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 reveal hover-card">
            <h3 className="text-xl font-medium mb-6">Personal Details</h3>
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-muted-foreground text-sm">Name</p>
                <p className="font-medium flex items-center">
                  Sabin Bhattarai
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground text-sm">Location</p>
                <p className="font-medium flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  Dhulikhel, Kavre, Nepal
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground text-sm">Email</p>
                <a href="mailto:sabinbhattarai520@gmail.com" className="font-medium text-primary hover:underline flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-primary" />
                  sabinbhattarai520@gmail.com
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground text-sm">Phone</p>
                <a href="tel:+9779867929834" className="font-medium flex items-center hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 mr-2 text-primary" />
                  +977-9867929834
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-muted-foreground text-sm">Languages</p>
                <p className="font-medium">English, Nepali, Hindi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
