
import React from "react";
import { ArrowDown } from "lucide-react";

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
      className="relative min-h-screen flex flex-col justify-center pt-24 px-6 md:px-12"
    >
      <div className="container mx-auto max-w-6xl animate-fade-in">
        <h1 className="font-display text-3xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-4">
          CINEMATIC INNOVATION. <br />
          ELEVATED VISUAL STORYTELLING.
        </h1>
        
        <div className="mt-8 mb-16">
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl">
            Welcome to TRIX STUDIO, where music meets art, technology meets storytelling, 
            and visuals redefine culture. We craft bold, high-concept music videos that push 
            creative boundaries—merging animation, deepfake technology, surreal aesthetics, 
            and cinematic narratives into unforgettable visual experiences.
          </p>
        </div>
        
        <button 
          onClick={scrollToWorks}
          className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 transition-transform duration-300 ease-out hover:translate-y-1"
        >
          <span className="text-sm font-medium uppercase tracking-wider">Explore Our Work</span>
          <ArrowDown size={16} />
        </button>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} onClick={scrollToWorks} className="cursor-pointer" />
      </div>
    </section>
  );
};

export default Hero;
