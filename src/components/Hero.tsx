
import React from "react";
import { ArrowDown } from "lucide-react";
import PressLogos from "./PressLogos";

const Hero = () => {
  const scrollToWorks = () => {
    const worksSection = document.getElementById("works");
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-0 bg-cover bg-center"
      style={{ 
        backgroundImage: "url('/lovable-uploads/80fd1a19-adab-4e41-bf63-58ada41fdc0d.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
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
