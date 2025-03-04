
import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-semibold text-gradient gradient-shift">Sabin Bhattarai</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Computer Engineer • Machine Learning & App Development Enthusiast
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:justify-end gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="mailto:sabinbhattarai520@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <Mail className="w-4 h-4 group-hover:text-primary transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">sabinbhattarai520@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+9779867929834" 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <Phone className="w-4 h-4 group-hover:text-primary transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">+977-9867929834</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Links</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://github.com/codenothappening" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <Github className="w-4 h-4 group-hover:text-primary transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">GitHub</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/sabin--bhattarai/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <Linkedin className="w-4 h-4 group-hover:text-primary transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Sabin Bhattarai. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            {["home", "about", "skills", "projects", "education", "achievements", "contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item}`} 
                className="text-sm text-muted-foreground capitalize hover:text-primary transition-colors hover-underline"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
