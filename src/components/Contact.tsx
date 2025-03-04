import React, { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Instead of using mailto, we'll create a new tab with Gmail compose
      // or a general email compose URL that works in the browser
      
      // Gmail compose URL format
      const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=yasha@trix.studio&su=${encodeURIComponent(`TRIX Studio Contact: ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
      
      // Open in a new tab
      window.open(gmailComposeUrl, "_blank");
      
      // Show success toast
      toast({
        title: "Message ready",
        description: "Your message has been prepared. Please complete sending it in the browser tab that opened.",
        duration: 5000,
      });
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error preparing message:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly at yasha@trix.studio",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
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
              <a href="mailto:yasha@trix.studio" className="text-lg link-hover">
                yasha@trix.studio
              </a>
            </div>
            
            <div className="border-t border-black/10 pt-8 mt-12">
              <h3 className="font-display text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-6">
                <a 
                  href="https://www.instagram.com/trixanimation" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm uppercase tracking-wide link-hover"
                >
                  Instagram
                </a>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 bg-transparent border border-black/20 focus:border-black focus:outline-none transition-colors"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 transition-transform duration-300 ease-out hover:translate-x-1 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="text-sm font-medium uppercase tracking-wider">
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
