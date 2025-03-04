
import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import PressLogos from "./PressLogos";

const Hero = () => {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  
  useEffect(() => {
    // Preload the image to make sure it exists
    const img = new Image();
    img.onload = () => setBackgroundLoaded(true);
    img.onerror = (e) => {
      console.error("Background image failed to load:", e);
      // Try with a direct path as fallback
      const fallbackImg = new Image();
      fallbackImg.onload = () => setBackgroundLoaded(true);
      fallbackImg.src = '/cactus-background.jpg';
    };
    img.src = '/lovable-uploads/898da996-a340-4f0e-a037-f0b51abc22d5.png';
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
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-0 bg-gray-800"
    >
      {backgroundLoaded && (
        <div 
          className="absolute inset-0 z-0 opacity-100 transition-opacity duration-500"
          style={{
            backgroundImage: `url('/lovable-uploads/898da996-a340-4f0e-a037-f0b51abc22d5.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      )}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>
      <div className="container mx-auto max-w-6xl animate-fade-in px-6 md:px-12 relative z-10">
        <h1 className="font-display text-3xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-4 text-white">
          CINEMATIC INNOVATION. <br />
          ELEVATED VISUAL STORYTELLING.
        </h1>
        
        <div className="mt-8 mb-16">
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-white/90">
            Welcome to TRIX STUDIO, where music meets art, technology meets storytelling, 
            and visuals redefine culture. We craft bold, high-concept music videos that push 
            creative boundaries—merging animation, deepfake technology, surreal aesthetics, 
            and cinematic narratives into unforgettable visual experiences.
          </p>
        </div>
      </div>
      
      <div className="w-full relative z-10">
        <PressLogos />
        <div className="flex justify-center mt-8 mb-12">
          <ArrowDown 
            size={32} 
            onClick={scrollToWorks} 
            className="cursor-pointer animate-bounce text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
