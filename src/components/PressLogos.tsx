
import React from "react";

interface PressLogo {
  name: string;
  imageUrl: string;
  linkUrl: string;
  size?: "regular" | "large" | "small" | "extra-small";
}

const pressLogos: PressLogo[] = [
  {
    name: "Adult Swim",
    imageUrl: "/lovable-uploads/41e494da-b880-4bba-b8e2-e5a2e195492c.png",
    linkUrl: "https://www.adultswim.com/",
  },
  {
    name: "BET",
    imageUrl: "/lovable-uploads/1c7b96d9-aae6-4468-a972-2ce0fec90158.png",
    linkUrl: "https://www.bet.com/",
  },
  {
    name: "Billboard",
    imageUrl: "/lovable-uploads/139289dd-e4ab-4287-8f9b-0fe8c65fb4cd.png",
    linkUrl: "https://www.billboard.com/",
  },
  {
    name: "Complex",
    imageUrl: "/lovable-uploads/061be499-9160-496e-8be0-84f735f59322.png",
    linkUrl: "https://www.complex.com/",
  },
  {
    name: "Fader",
    imageUrl: "/lovable-uploads/5c54220a-21b7-4cfa-a8fe-df2261eb44f9.png",
    linkUrl: "https://www.thefader.com/",
  },
  {
    name: "Forbes",
    imageUrl: "/lovable-uploads/f57ca638-a9b1-482c-8444-91e35e8ce123.png",
    linkUrl: "https://www.forbes.com/",
  },
  {
    name: "Grammy",
    imageUrl: "/lovable-uploads/6a5b01f1-eeb0-4b6e-b32f-2f464eb9e185.png",
    linkUrl: "https://www.grammy.com/",
    size: "large",
  },
  {
    name: "Highsnobiety",
    imageUrl: "/lovable-uploads/03ce3b6f-8ae5-498e-ab5e-ccf3cee6e5b4.png",
    linkUrl: "https://www.highsnobiety.com/",
  },
  {
    name: "MTV",
    imageUrl: "/lovable-uploads/08170e87-c129-4149-b050-b4b13bba900f.png",
    linkUrl: "https://www.mtv.com/",
    size: "large",
  },
  {
    name: "Pitchfork",
    imageUrl: "/lovable-uploads/360e05c1-bf3d-4d46-ba53-8a0f73b99577.png",
    linkUrl: "https://pitchfork.com/",
  },
  {
    name: "Revolt",
    imageUrl: "/lovable-uploads/f2a18848-9d61-4088-bc38-6b10fcfe2d6c.png",
    linkUrl: "https://www.revolt.tv/",
  },
  {
    name: "Rolling Stone",
    imageUrl: "/lovable-uploads/c199e59c-fabd-4674-8e4e-545ada09aa92.png",
    linkUrl: "https://www.rollingstone.com/",
    size: "large",
  },
  {
    name: "VH1",
    imageUrl: "/lovable-uploads/f32c6ec5-907c-4aa1-b3ff-ec5984362c03.png",
    linkUrl: "https://www.vh1.com/",
  },
  {
    name: "Vice",
    imageUrl: "/lovable-uploads/124e2702-4f01-4a36-917b-51a02b70d598.png",
    linkUrl: "https://www.vice.com/",
  },
  {
    name: "Vibe",
    imageUrl: "/lovable-uploads/79155a17-ee53-4bdd-9607-1b512f83941f.png",
    linkUrl: "https://www.vibe.com/",
  },
];

// We need three sets of logos to ensure continuous scrolling
const allLogos = [...pressLogos, ...pressLogos, ...pressLogos];

const PressLogos = () => {
  return (
    <div className="py-8 w-full overflow-hidden">
      <div className="relative w-full">
        {/* Static marquee title */}
        <div className="mb-4 text-center">
          <p className="text-black text-xs uppercase tracking-widest">Featured In</p>
        </div>
        
        {/* Scrolling container with improved animation for mobile */}
        <div className="relative overflow-hidden w-full">
          {/* Removed the gradient fade on left edge */}
          
          <div className="flex py-4 items-center infinite-scroll-track">
            {allLogos.map((logo, index) => (
              <a
                key={`${logo.name}-${index}`}
                href={logo.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 h-8 md:h-10 mx-6 flex items-center justify-center"
              >
                <img 
                  src={logo.imageUrl} 
                  alt={logo.name} 
                  className={`h-full w-auto object-contain will-change-transform ${
                    logo.name === "Grammy" 
                      ? 'scale-[1.5]' 
                      : logo.name === "Rolling Stone"
                        ? 'scale-[1.3]' 
                        : logo.size === 'large' 
                          ? 'scale-125' 
                          : logo.size === 'small'
                            ? 'scale-70'
                            : logo.size === 'extra-small'
                              ? 'scale-50' 
                              : ''
                  }`}
                />
              </a>
            ))}
          </div>
          
          {/* Removed the gradient fade on right edge */}
        </div>
      </div>
    </div>
  );
};

export default PressLogos;
