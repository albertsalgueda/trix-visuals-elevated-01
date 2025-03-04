
import React from "react";
import { Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-6 md:px-12 animate-on-scroll"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="text-sm uppercase tracking-widest text-black/60 mb-2 inline-block">Contact</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">LET'S CREATE TOGETHER</h2>
            <p className="text-lg mb-8">
              Have a project that demands next-level visual storytelling? Let's talk.
            </p>
            
            <div className="flex items-center space-x-4 mb-12">
              <Mail size={24} />
              <a href="mailto:contact@trixstudio.com" className="text-lg link-hover">
                contact@trixstudio.com
              </a>
            </div>
            
            <div className="border-t border-black/10 pt-8 mt-12">
              <h3 className="font-display text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-6">
                {["Instagram", "Vimeo", "YouTube"].map((platform) => (
                  <a 
                    key={platform} 
                    href="#" 
                    className="text-sm uppercase tracking-wide link-hover"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-3 bg-transparent border border-black/20 focus:border-black focus:outline-none transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 bg-transparent border border-black/20 focus:border-black focus:outline-none transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="project" className="block text-sm font-medium mb-2">
                Project Details
              </label>
              <textarea
                id="project"
                rows={5}
                className="w-full px-4 py-3 bg-transparent border border-black/20 focus:border-black focus:outline-none transition-colors"
                required
              />
            </div>
            
            <button
              type="submit"
              className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 transition-transform duration-300 ease-out hover:translate-x-1"
            >
              <span className="text-sm font-medium uppercase tracking-wider">Send Message</span>
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
