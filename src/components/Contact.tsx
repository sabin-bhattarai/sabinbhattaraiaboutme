import React, { useState } from "react";
import { Mail, Send, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "Thank you for your message. I'll respond as soon as possible.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-4 bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal">
          <p className="text-primary text-sm uppercase tracking-wider font-medium mb-2">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 glow"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="bg-card border border-border rounded-lg p-8 hover-card h-full">
              <h3 className="text-xl font-medium mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Email</p>
                    <a href="mailto:sabinbhattarai520@gmail.com" className="font-medium text-primary hover:underline">
                      sabinbhattarai520@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Phone</p>
                    <a href="tel:+9779867929834" className="font-medium hover:text-primary transition-colors">
                      +977-9867929834
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Location</p>
                    <p className="font-medium">
                      Dhulikhel Kavre, Nepal
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <p className="text-muted-foreground mb-4">Connect with me on social media</p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/codenothappening" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/sabin--bhattarai/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        
          <div className="reveal" style={{ transitionDelay: "0.4s" }}>
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-lg p-8 hover-card"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="enhanced-input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="enhanced-input"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="enhanced-input"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="enhanced-input resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-primary/20"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
