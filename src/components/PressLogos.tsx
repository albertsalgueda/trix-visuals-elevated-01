
import React from "react";

interface PressLogo {
  name: string;
  imagePath: string;
  altText: string;
  sizeClass?: string;
}

const PressLogos = () => {
  const logos: PressLogo[] = [
    {
      name: "Adult Swim",
      imagePath: "/lovable-uploads/1ea2e416-3969-49f2-86e5-774d6a07fdae.png",
      altText: "Adult Swim logo"
    },
    {
      name: "Billboard",
      imagePath: "/lovable-uploads/d45f9b5d-16a2-480a-8628-9c8e2960240b.png",
      altText: "Billboard logo",
      sizeClass: "max-h-10 md:max-h-14" // Larger size for Billboard
    },
    {
      name: "Complex",
      imagePath: "/lovable-uploads/870d169d-bc78-43e8-b782-05c3e2469ccf.png",
      altText: "Complex logo"
    },
    {
      name: "Forbes",
      imagePath: "/lovable-uploads/3745bf00-e7b1-48f9-8f91-6fbf9ffe911d.png",
      altText: "Forbes logo",
      sizeClass: "max-h-6 md:max-h-8" // Further reduced size for Forbes
    },
    {
      name: "Grammy Awards",
      imagePath: "/lovable-uploads/0a98f6e5-359d-4735-bead-0a5e843f85a6.png",
      altText: "Grammy Awards logo",
      sizeClass: "max-h-12 md:max-h-16" // Increased size for Grammy Awards
    },
    {
      name: "Highsnobiety",
      imagePath: "/lovable-uploads/61135087-189d-459a-87e3-07f42ee25cc4.png",
      altText: "Highsnobiety logo",
      sizeClass: "max-h-10 md:max-h-14" // Increased size for Highsnobiety
    },
    {
      name: "Hypebeast",
      imagePath: "/lovable-uploads/3e4daa5a-9573-492c-a79e-4e1e47cb0786.png",
      altText: "Hypebeast logo",
      sizeClass: "max-h-6 md:max-h-8" // Further reduced size for Hypebeast
    },
    {
      name: "MTV",
      imagePath: "/lovable-uploads/abe8f313-db03-4bd6-a61e-b6bad352a6ac.png",
      altText: "MTV logo"
    },
    {
      name: "Rolling Stone",
      imagePath: "/lovable-uploads/a5d3ff6f-740a-49fe-b571-590020b0bd22.png",
      altText: "Rolling Stone logo"
    },
    {
      name: "VH1",
      imagePath: "/lovable-uploads/0f384f0f-db7f-4670-9979-28b8f7a21d86.png",
      altText: "VH1 logo",
      sizeClass: "max-h-12 md:max-h-16" // Added size class for the new VH1 logo
    },
    {
      name: "Vice",
      imagePath: "/lovable-uploads/a0e4b7d2-35df-407e-8627-0c2b564c7a61.png",
      altText: "Vice logo"
    },
    {
      name: "W Magazine",
      imagePath: "/lovable-uploads/68080690-7c65-455d-8842-28a7a753b305.png",
      altText: "W Magazine logo"
    }
  ];

  return (
    <div className="w-full bg-black py-10 overflow-hidden">
      <div className="relative">
        <div className="text-center mb-6">
          <span className="text-white text-sm uppercase tracking-widest font-medium">Featured In</span>
        </div>
        <div className="flex space-x-12 animate-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="flex-shrink-0 h-12 md:h-16 flex items-center">
              <img 
                src={logo.imagePath} 
                alt={logo.altText} 
                className={`h-auto w-auto ${logo.sizeClass || 'max-h-8 md:max-h-10'} object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PressLogos;
