
import React from "react";

interface PressLogo {
  name: string;
  imagePath: string;
  altText: string;
  sizeClass?: string;
  marginClass?: string;
}

const PressLogos = () => {
  const logos: PressLogo[] = [
    {
      name: "Adult Swim",
      imagePath: "/lovable-uploads/d02a4407-7ecb-4cc2-8fea-b2093c4e0349.png",
      altText: "Adult Swim logo",
      sizeClass: "max-h-8 md:max-h-12"
    },
    {
      name: "BET",
      imagePath: "/lovable-uploads/9ef10b57-7fed-4697-b875-082daadd8fd6.png",
      altText: "BET logo",
      sizeClass: "max-h-10 md:max-h-14"
    },
    {
      name: "Billboard",
      imagePath: "/lovable-uploads/d1cca36e-9346-476d-806a-7e6249517da1.png",
      altText: "Billboard logo",
      sizeClass: "max-h-10 md:max-h-14"
    },
    {
      name: "Complex",
      imagePath: "/lovable-uploads/0e424ba3-cfe2-4c14-8300-3999747b8e58.png",
      altText: "Complex logo",
      sizeClass: "max-h-10 md:max-h-14"
    },
    {
      name: "Fader",
      imagePath: "/lovable-uploads/e28cee68-f423-407a-93e9-b0fd0590fda2.png",
      altText: "Fader logo",
      sizeClass: "max-h-12 md:max-h-16"
    },
    {
      name: "Forbes",
      imagePath: "/lovable-uploads/6f6a5312-a362-4994-af8f-b8650bde6be6.png",
      altText: "Forbes logo",
      sizeClass: "max-h-8 md:max-h-12"
    },
    {
      name: "Grammy Awards",
      imagePath: "/lovable-uploads/de5c790c-d25a-4365-8746-9898a3e3d44a.png",
      altText: "Grammy Awards logo",
      sizeClass: "max-h-10 md:max-h-[17.6px]" // Increased desktop size by 10% from max-h-16 (64px) to max-h-[17.6px] (70.4px)
    },
    {
      name: "Highsnobiety",
      imagePath: "/lovable-uploads/be774fba-c196-4812-9a33-f0d6ea7f1e4a.png",
      altText: "Highsnobiety logo",
      sizeClass: "max-h-8 md:max-h-12"
    },
    {
      name: "Hypebeast",
      imagePath: "/lovable-uploads/208efd7f-c133-44d7-a520-19e840ac4436.png",
      altText: "Hypebeast logo",
      sizeClass: "max-h-6 md:max-h-8"
    },
    {
      name: "MTV",
      imagePath: "/lovable-uploads/af6632a3-cd70-446b-801c-7e012c3919b5.png",
      altText: "MTV logo",
      sizeClass: "max-h-12 md:max-h-16",
      marginClass: "mx-4 md:mx-6"
    },
    {
      name: "Revolt",
      imagePath: "/lovable-uploads/e79524fe-fd62-4216-b082-81e5a76c7ef9.png",
      altText: "Revolt logo",
      sizeClass: "max-h-8 md:max-h-12"
    },
    {
      name: "Rolling Stone",
      imagePath: "/lovable-uploads/e5ea56a3-9adf-423b-8a93-3277dbaee972.png",
      altText: "Rolling Stone logo",
      sizeClass: "max-h-10 md:max-h-14"
    },
    {
      name: "VH1",
      imagePath: "/lovable-uploads/5e35c602-fd16-4ff8-b06a-9c3f045fca89.png",
      altText: "VH1 logo",
      sizeClass: "max-h-10 md:max-h-14"
    },
    {
      name: "Vice",
      imagePath: "/lovable-uploads/dcf40b07-d7ce-4322-a519-22d6371ef847.png",
      altText: "Vice logo",
      sizeClass: "max-h-10 md:max-h-14"
    },
    {
      name: "W Magazine",
      imagePath: "/lovable-uploads/e8573d49-ee63-4792-9da8-61764d64086a.png",
      altText: "W Magazine logo",
      sizeClass: "max-h-8 md:max-h-12"
    }
  ];

  return (
    <div className="w-screen overflow-hidden relative left-[50%] right-[50%] mx-[-50vw]">
      <div className="relative">
        <div className="text-center mb-6">
          <span className="text-white text-sm uppercase tracking-widest font-medium">Featured In</span>
        </div>
        <div className="flex animate-scroll" style={{ width: "max-content" }}>
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={`${logo.name}-${index}`} 
              className={`flex-shrink-0 ${logo.marginClass || 'mx-6 md:mx-8'} flex items-center justify-center h-14 md:h-16`}
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
