
import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import PressLogos from "./PressLogos";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    // Optimized image loading strategy
    const cactusBgUrl = "/lovable-uploads/52faeb82-3f1f-4c58-a356-6f7db1f15431.png";
    
    // Check if image is already in browser cache
    const img = new Image();
    
    // Set as high priority since this is the hero image
    img.fetchPriority = 'high';
    img.loading = 'eager';
    
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      console.error("Background image failed to load");
      setImageLoaded(true); // Still mark as loaded to show content
    };
    
    // Start loading
    img.src = cactusBgUrl;
    
    // Add preload class to body to prevent animations during initial load
    document.body.classList.add('preload');
    
    // Remove preload class after page has loaded
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.body.classList.remove('preload');
      }, 100);
    });
    
    return () => {
      window.removeEventListener('load', () => {
        document.body.classList.remove('preload');
      });
    };
  }, []);

  const scrollToWorks = () => {
    const worksSection = document.getElementById("works");
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-0 overflow-hidden"
    >
      {/* Background image with optimized loading strategy */}
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: imageLoaded ? `url('/lovable-uploads/52faeb82-3f1f-4c58-a356-6f7db1f15431.png')` : 'none',
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      
      {/* Hero content */}
      <div className="container mx-auto max-w-6xl animate-fade-in px-6 md:px-12 relative z-10 mt-16 md:mt-24 lg:mt-32">
        <h1 className="font-display text-3xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-4 text-white">
          CINEMATIC INNOVATION. <br />
          ELEVATED STORYTELLING.
        </h1>
        
        <div className="mt-8 mb-16">
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-white/90">
            Welcome to Trix, where music meets art, technology meets storytelling, 
            and visuals redefine culture. We craft bold, high-concept music videos that push 
            creative boundaries—merging animation, deepfake technology, surreal aesthetics, 
            and cinematic narratives into unforgettable visual experiences.
          </p>
        </div>
      </div>
      
      {/* Press logos and scroll indicator */}
      <div className="w-full relative z-10 mt-auto">
        <PressLogos />
        <div className="flex justify-center mt-8 mb-12">
          <ArrowDown 
            size={32} 
            onClick={scrollToWorks} 
            className="cursor-pointer animate-bounce text-white"
            aria-label="Scroll to works section"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
