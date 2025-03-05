
import React from "react";

interface PressLogo {
  name: string;
  imageUrl: string;
  linkUrl: string;
}

const pressLogos: PressLogo[] = [
  {
    name: "Hypebeast",
    imageUrl: "/lovable-uploads/0114878b-3509-4e56-8557-195954154491.png",
    linkUrl: "https://hypebeast.com",
  },
  {
    name: "Highsnobiety",
    imageUrl: "/lovable-uploads/997b9914-f829-4813-a997-158459553e5a.png",
    linkUrl: "https://www.highsnobiety.com/",
  },
  {
    name: "Billboard",
    imageUrl: "/lovable-uploads/55751809-424a-437f-850f-96b461ca996f.png",
    linkUrl: "https://www.billboard.com/",
  },
  {
    name: "Vibe",
    imageUrl: "/lovable-uploads/69215438-6a9f-4596-8299-653a24455119.png",
    linkUrl: "https://www.vibe.com/",
  },
  {
    name: "Pitchfork",
    imageUrl: "/lovable-uploads/45971591-9971-400d-8175-e3958471943a.png",
    linkUrl: "https://pitchfork.com/",
  },
  {
    name: "VH1",
    imageUrl: "/lovable-uploads/1c99814f-b945-4349-8535-4a7595589458.png",
    linkUrl: "https://www.vh1.com/",
  },
  {
    name: "Revolt",
    imageUrl: "/lovable-uploads/5c57646d-4549-415a-891f-95a9a9a9593b.png",
    linkUrl: "https://www.revolt.tv/",
  },
  {
    name: "Vice",
    imageUrl: "/lovable-uploads/5817919f-0541-499a-a999-691479a26367.png",
    linkUrl: "https://www.vice.com/",
  },
];

// For smoother scrolling, we duplicate the logos
const allLogos = [...pressLogos, ...pressLogos];

const PressLogos = () => {
  return (
    <div className="bg-black py-8 w-full overflow-hidden">
      <div className="relative w-full">
        {/* Static marquee title */}
        <div className="mb-4 text-center">
          <p className="text-white/50 text-xs uppercase tracking-widest">Featured In</p>
        </div>
        
        {/* Scrolling container */}
        <div className="relative overflow-hidden w-full">
          <div className="animate-scroll flex space-x-12 py-2">
            {allLogos.map((logo, index) => (
              <a
                key={`${logo.name}-${index}`}
                href={logo.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 h-10 hover:opacity-80 transition-opacity"
              >
                <img 
                  src={logo.imageUrl} 
                  alt={logo.name} 
                  className="h-full w-auto object-contain filter invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                  style={{ minWidth: "100px" }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressLogos;
