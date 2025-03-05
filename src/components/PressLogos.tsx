
import React from "react";

const PressLogos = () => {
  // Logos array - streamlined to avoid unnecessary processing
  const logos = [
    { src: "/lovable-uploads/0e424ba3-cfe2-4c14-8300-3999747b8e58.png", alt: "Complex Logo" },
    { src: "/lovable-uploads/2e304b1d-64f5-4e3c-a1ae-f28ecb728fa7.png", alt: "Billboard Logo" },
    { src: "/lovable-uploads/e79524fe-fd62-4216-b082-81e5a76c7ef9.png", alt: "Rolling Stone Logo" },
    { src: "/lovable-uploads/f2a18848-9d61-4088-bc38-6b10fcfe2d6c.png", alt: "Vibe Logo" },
    { src: "/lovable-uploads/e4b32749-1600-4687-a87b-3cce96699f93.png", alt: "XXL Logo" },
  ];

  return (
    <div className="w-full bg-black overflow-hidden py-6">
      <div className="infinite-scroll-container relative w-full">
        <div className="scroller flex space-x-12 items-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-8 md:h-10 object-contain brightness-0 invert"
              loading="lazy"
              fetchPriority="low"
              width="120"
              height="40"
            />
          ))}
          {/* Duplicate set for infinite scroll effect */}
          {logos.map((logo, index) => (
            <img
              key={`dup-${index}`}
              src={logo.src}
              alt={`${logo.alt} Copy`}
              className="h-8 md:h-10 object-contain brightness-0 invert"
              loading="lazy"
              fetchPriority="low"
              width="120"
              height="40"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PressLogos;
