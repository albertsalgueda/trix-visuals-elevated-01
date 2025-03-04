
import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import PressLogos from "./PressLogos";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    // Load the cactus image
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = (e) => {
      console.error("Background image failed to load:", e);
      // If there's an error, we'll still show the section with its base background color
    };
    img.src = "/lovable-uploads/1d57b82a-bb4b-4eac-a824-5be92a63cc06.png";
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
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-0 bg-amber-100"
    >
      <div 
        className={`absolute inset-0 bottom-auto z-0 transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: `url('/lovable-uploads/1d57b82a-bb4b-4eac-a824-5be92a63cc06.png')`,
          backgroundSize: "100% auto",
          backgroundPosition: "center bottom", // Changed from "center 60%" to "center bottom" to show rocks at the bottom
          height: "calc(100% - 160px)"
        }}
      />
      <div className="absolute inset-0 bottom-auto bg-black/30 backdrop-blur-[1px] z-0" style={{ height: "calc(100% - 160px)" }}></div>
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
