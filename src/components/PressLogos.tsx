
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

const PressLogos = () => {
  return (
    <div className="bg-black py-6 md:py-8 overflow-hidden w-full">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap items-center justify-around gap-4 md:gap-6">
          {pressLogos.map((logo) => (
            <a
              key={logo.name}
              href={logo.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-12 md:h-14"
            >
              <img 
                src={logo.imageUrl} 
                alt={logo.name} 
                className="h-full w-auto max-h-10 object-contain mix-blend-luminosity hover:mix-blend-normal transition-all duration-300 filter grayscale hover:grayscale-0"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                width="150"
                height="40"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PressLogos;
