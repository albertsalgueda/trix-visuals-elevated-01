
import React from "react";
import VideoPreview from "./VideoPreview";

const portfolioItems = [
  {
    title: "P's and Q's",
    artist: "Lil Uzi Vert",
    description: "An anime-inspired music video that transforms hip-hop into high-energy storytelling.",
    thumbnailUrl: "https://placehold.co/1920x1080/000000/FFFFFF?text=Lil+Uzi+Vert",
    watchUrl: "#",
    pressUrl: "#",
  },
  {
    title: "Wassup",
    artist: "Lil Uzi Vert",
    description: "A deepfake-fueled, reality-bending experience in collaboration with Future.",
    thumbnailUrl: "https://placehold.co/1920x1080/000000/FFFFFF?text=Wassup",
    watchUrl: "#",
    btsUrl: "#",
    pressUrl: "#",
  },
  {
    title: "WAP",
    artist: "Cardi B & Megan Thee Stallion",
    description: "A hyper-stylized, controversial lyric video that turns everyday objects into symbols of power and desire.",
    thumbnailUrl: "https://placehold.co/1920x1080/000000/FFFFFF?text=WAP",
    watchUrl: "#",
  },
  {
    title: "Distraction",
    artist: "Kehlani",
    description: "A sleek, Grammy-nominated visual masterpiece blending intimacy with minimalist elegance.",
    thumbnailUrl: "https://placehold.co/1920x1080/000000/FFFFFF?text=Kehlani",
    watchUrl: "#",
  },
  {
    title: "Black Bonnie",
    artist: "Wale",
    description: "A time-traveling cinematic love story celebrating Black excellence across generations.",
    thumbnailUrl: "https://placehold.co/1920x1080/000000/FFFFFF?text=Black+Bonnie",
    watchUrl: "#",
    pressUrl: "#",
  },
  {
    title: "We Set the Trends",
    artist: "Jim Jones & Migos",
    description: "A trailblazing NFT-driven music video at the intersection of hip-hop and the metaverse.",
    thumbnailUrl: "https://placehold.co/1920x1080/000000/FFFFFF?text=We+Set+the+Trends",
    watchUrl: "#",
    pressUrl: "#",
  },
  {
    title: "All My Children",
    artist: "Gucci Mane",
    description: "A bold, animated journey that cements Gucci Mane's legacy as a mentor to a generation of artists.",
    thumbnailUrl: "https://placehold.co/1920x1080/000000/FFFFFF?text=All+My+Children",
    watchUrl: "#",
    pressUrl: "#",
  },
  {
    title: "LIMEWIRE",
    artist: "Soulja Boy",
    description: "A nostalgic, lo-fi glitch aesthetic pays homage to the internet that launched a rap revolution.",
    thumbnailUrl: "https://placehold.co/1920x1080/000000/FFFFFF?text=LIMEWIRE",
    watchUrl: "#",
    pressUrl: "#",
  }
];

const Portfolio = () => {
  return (
    <section 
      id="works" 
      className="py-24 px-6 md:px-12 animate-on-scroll"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <span className="text-sm uppercase tracking-widest text-black/60 mb-2 inline-block">Portfolio</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">SELECTED WORKS</h2>
          <p className="mt-4 text-lg max-w-3xl">
            Our portfolio spans culturally defining projects, from anime-inspired epics to futuristic 
            deepfake-driven worlds. Each video is an immersive visual statement, designed to elevate 
            the artistry of the music it represents.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {portfolioItems.map((item, index) => (
            <VideoPreview 
              key={index}
              index={index}
              title={item.title}
              artist={item.artist}
              description={item.description}
              thumbnailUrl={item.thumbnailUrl}
              watchUrl={item.watchUrl}
              pressUrl={item.pressUrl}
              btsUrl={item.btsUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
