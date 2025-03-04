
import React from "react";
import VideoPreview from "./VideoPreview";

const portfolioItems = [
  {
    title: "P's and Q's",
    artist: "Lil Uzi Vert",
    description: "An anime-inspired music video that transforms hip-hop into high-energy storytelling.",
    thumbnailUrl: "https://placehold.co/1920x1080/000000/FFFFFF?text=Lil+Uzi+Vert",
    videoId: "x0fFzqX_Xgo",
    watchUrl: "https://www.youtube.com/watch?v=x0fFzqX_Xgo",
    pressUrl: "https://hypebeast.com/2018/1/lil-uzi-vert-ps-and-qs-video",
  },
  {
    title: "Wassup",
    artist: "Lil Uzi Vert",
    description: "A deepfake-fueled, reality-bending experience in collaboration with Future.",
    thumbnailUrl: "https://placehold.co/1920x1080/000000/FFFFFF?text=Wassup",
    videoId: "Ac6kDNMQK3c",
    watchUrl: "https://www.youtube.com/watch?v=Ac6kDNMQK3c",
    btsUrl: "https://www.youtube.com/watch?v=zG-wc4q5KeA",
    pressUrl: "https://www.highsnobiety.com/p/lil-uzi-vert-future-wassup-video/",
  },
  {
    title: "WAP",
    artist: "Cardi B & Megan Thee Stallion",
    description: "A hyper-stylized, controversial lyric video that turns everyday objects into symbols of power and desire.",
    thumbnailUrl: "/lovable-uploads/60b0f076-e796-451c-979e-b4f77b473dc9.png",
    videoId: "ohD6cyB8RI4",
    watchUrl: "https://www.youtube.com/watch?v=ohD6cyB8RI4",
  },
  {
    title: "Distraction",
    artist: "Kehlani",
    description: "A sleek, Grammy-nominated visual masterpiece blending intimacy with minimalist elegance.",
    thumbnailUrl: "https://placehold.co/1920x1080/000000/FFFFFF?text=Kehlani",
    videoId: "HPHbeSGVKJo",
    watchUrl: "https://www.youtube.com/watch?v=HPHbeSGVKJo",
    pressUrl: "https://hypebeast.com",
  },
  {
    title: "Black Bonnie",
    artist: "Wale",
    description: "A time-traveling cinematic love story celebrating Black excellence across generations.",
    thumbnailUrl: "https://placehold.co/1920x1080/000000/FFFFFF?text=Black+Bonnie",
    videoId: "KmR47_vyD2w",
    watchUrl: "https://www.youtube.com/watch?v=KmR47_vyD2w",
    pressUrl: "https://www.billboard.com/music/rb-hip-hop/wale-black-bonnie-music-video-8467980/",
  },
  {
    title: "We Set the Trends",
    artist: "Jim Jones & Migos",
    description: "A trailblazing NFT-driven music video at the intersection of hip-hop and the metaverse.",
    thumbnailUrl: "https://placehold.co/1920x1080/000000/FFFFFF?text=We+Set+the+Trends",
    videoId: "nfYscgHX29E",
    watchUrl: "https://www.youtube.com/watch?v=nfYscgHX29E",
    pressUrl: "https://www.revolt.tv/article/2022-06-02/172102/jim-jones-migos-announce-we-set-the-trends-metaverse-nft-video",
  },
  {
    title: "All My Children",
    artist: "Gucci Mane",
    description: "A bold, animated journey that cements Gucci Mane's legacy as a mentor to a generation of artists.",
    thumbnailUrl: "https://placehold.co/1920x1080/000000/FFFFFF?text=All+My+Children",
    videoId: "pOmsxhn6F90",
    watchUrl: "https://www.youtube.com/watch?v=pOmsxhn6F90",
    pressUrl: "https://www.vice.com/en/article/watch-gucci-manes-animated-video-for-all-my-children/",
  },
  {
    title: "LIMEWIRE",
    artist: "Soulja Boy",
    description: "A nostalgic, lo-fi glitch aesthetic pays homage to the internet that launched a rap revolution.",
    thumbnailUrl: "https://placehold.co/1920x1080/000000/FFFFFF?text=LIMEWIRE",
    videoId: "STml8BkoGvk",
    watchUrl: "https://www.youtube.com/watch?v=STml8BkoGvk",
    pressUrl: "https://www.vibe.com/music/videos/soulja-boy-discovers-america-paints-mona-lisa-limewire-video-1234764965/",
  },
  {
    title: "Getting Loose",
    artist: "Wiz Khalifa & Curren$y",
    description: "A vibrant celebration of lifestyle and culture with dynamic visuals.",
    thumbnailUrl: "https://placehold.co/1920x1080/000000/FFFFFF?text=Getting+Loose",
    videoId: "fT2fxC48fX0",
    watchUrl: "https://www.youtube.com/watch?v=fT2fxC48fX0",
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
              videoId={item.videoId}
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
