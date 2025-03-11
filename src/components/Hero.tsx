
import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import PressLogos from "./PressLogos";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    // Immediately start loading the background image
    const cactusBgUrl = "/lovable-uploads/52faeb82-3f1f-4c58-a356-6f7db1f15431.png";
    
    // Add a slight delay to prioritize initial paint
    setTimeout(() => {
      // Check if the image is already in the browser cache
      const img = new Image();
      
      // Use requestIdleCallback to load in the background when the browser is idle
      if ('requestIdleCallback' in window) {
        // @ts-ignore - TypeScript doesn't recognize requestIdleCallback
        window.requestIdleCallback(() => {
          img.onload = () => setImageLoaded(true);
          img.onerror = (e) => {
            console.error("Background image failed to load:", e);
            // If there's an error, we'll still show the section with its base background color
            setImageLoaded(true);
          };
          img.src = cactusBgUrl;
        }, { timeout: 2000 }); // Set a timeout to ensure it loads within 2 seconds
      } else {
        // Fallback for browsers that don't support requestIdleCallback
        setTimeout(() => {
          img.onload = () => setImageLoaded(true);
          img.onerror = () => setImageLoaded(true);
          img.src = cactusBgUrl;
        }, 200); // Small delay to prioritize other resources
      }
    }, 100);
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
        className={`absolute inset-0 z-0 transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: imageLoaded ? `url('/lovable-uploads/52faeb82-3f1f-4c58-a356-6f7db1f15431.png')` : 'none',
          backgroundSize: "cover",
          backgroundPosition: "center bottom", // Changed from center center to center bottom
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      
      {/* Hero content */}
      <div className="container mx-auto max-w-6xl animate-fade-in px-6 md:px-12 relative z-10 mt-16 md:mt-24 lg:mt-32">
        <h1 className="font-display text-3xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-4 text-white">
          VISUAL INNOVATION. <br />
          ELEVATED STORYTELLING.
        </h1>
        
        <div className="mt-8 mb-16">
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-white/90">
            Welcome to Trix, where music meets art, technology meets storytelling, and visuals redefine culture.
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
