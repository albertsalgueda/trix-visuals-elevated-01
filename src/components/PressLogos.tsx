
import React from "react";

const PressLogos = () => {
  // Each logo section needs to be duplicated at least twice to ensure continuous scrolling
  const logos = [
    { src: "/lovable-uploads/77997c48-25f3-4a2e-b81b-b6df41b272f2.png", alt: "Complex" },
    { src: "/lovable-uploads/0a98f6e5-359d-4735-bead-0a5e843f85a6.png", alt: "MTV" },
    { src: "/lovable-uploads/5c54220a-21b7-4cfa-a8fe-df2261eb44f9.png", alt: "Billboard" },
    { src: "/lovable-uploads/79155a17-ee53-4bdd-9607-1b512f83941f.png", alt: "XXL" },
    { src: "/lovable-uploads/f9ea430f-77b5-4164-b999-3a9c9b6b40bb.png", alt: "Vevo" },
    { src: "/lovable-uploads/41e494da-b880-4bba-b8e2-e5a2e195492c.png", alt: "Pitchfork" },
  ];

  return (
    <div className="relative w-full bg-black/70 backdrop-blur-sm py-4 overflow-hidden">
      <div className="text-center mb-2">
        <span className="text-xs uppercase tracking-widest text-white/70">
          FEATURED IN
        </span>
      </div>
      
      {/* Improved scrolling container with fade edges */}
      <div className="relative mx-auto max-w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-black/70 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-black/70 after:to-transparent">
        {/* Main scrolling logos container */}
        <div className="logos-scroll py-2 pl-4">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={`logo-1-${index}`} className="mx-4 flex h-8 w-auto items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-5 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
          
          {/* Duplicate set of logos for continuous scrolling */}
          {logos.map((logo, index) => (
            <div key={`logo-2-${index}`} className="mx-4 flex h-8 w-auto items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-5 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
          
          {/* Third set to ensure there's always content visible during the animation */}
          {logos.map((logo, index) => (
            <div key={`logo-3-${index}`} className="mx-4 flex h-8 w-auto items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-5 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PressLogos;
