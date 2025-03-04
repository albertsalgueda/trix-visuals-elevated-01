
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
      name: "BET",
      imagePath: "/lovable-uploads/2b3dd0f9-296e-4cbb-8bf6-54329cc6f952.png",
      altText: "BET logo",
      sizeClass: "max-h-10 md:max-h-14"
    },
    {
      name: "Billboard",
      imagePath: "/lovable-uploads/f7cf118a-578e-43c8-bc78-5371148688a3.png",
      altText: "Billboard logo",
      sizeClass: "max-h-10 md:max-h-14"
    },
    {
      name: "Complex",
      imagePath: "/lovable-uploads/870d169d-bc78-43e8-b782-05c3e2469ccf.png",
      altText: "Complex logo"
    },
    {
      name: "Fader",
      imagePath: "/lovable-uploads/a2f16ef9-a4b8-45ab-9f5d-49baf7fdaabf.png",
      altText: "Fader logo",
      sizeClass: "max-h-6 md:max-h-8"
    },
    {
      name: "Forbes",
      imagePath: "/lovable-uploads/3745bf00-e7b1-48f9-8f91-6fbf9ffe911d.png",
      altText: "Forbes logo",
      sizeClass: "max-h-6 md:max-h-8"
    },
    {
      name: "Grammy Awards",
      imagePath: "/lovable-uploads/4e545bf1-0c7e-4ff3-a523-667be1e84fb4.png",
      altText: "Grammy Awards logo",
      sizeClass: "max-h-12 md:max-h-16"
    },
    {
      name: "Highsnobiety",
      imagePath: "/lovable-uploads/f9ea430f-77b5-4164-b999-3a9c9b6b40bb.png",
      altText: "Highsnobiety logo",
      sizeClass: "max-h-5 md:max-h-7"
    },
    {
      name: "Hypebeast",
      imagePath: "/lovable-uploads/3e4daa5a-9573-492c-a79e-4e1e47cb0786.png",
      altText: "Hypebeast logo",
      sizeClass: "max-h-3 md:max-h-4"
    },
    {
      name: "MTV",
      imagePath: "/lovable-uploads/abe8f313-db03-4bd6-a61e-b6bad352a6ac.png",
      altText: "MTV logo"
    },
    {
      name: "Revolt",
      imagePath: "/lovable-uploads/baad3a1c-2540-46e2-ad5c-a8d8cf999c44.png",
      altText: "Revolt logo",
      sizeClass: "max-h-9 md:max-h-12"
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
      sizeClass: "max-h-10 md:max-h-13"
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
    <div className="w-screen bg-black py-10 overflow-hidden relative left-[50%] right-[50%] mx-[-50vw]">
      <div className="relative">
        <div className="text-center mb-6">
          <span className="text-white text-sm uppercase tracking-widest font-medium">Featured In</span>
        </div>
        <div className="flex animate-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={`${logo.name}-${index}`} 
              className="flex-shrink-0 w-28 md:w-36 mx-3 md:mx-4 flex items-center justify-center h-14 md:h-16"
            >
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
