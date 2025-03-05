
import React, { useEffect, useRef } from "react";
import VideoPreview from "./VideoPreview";

const portfolioItems = [
  {
    title: "P's and Q's",
    artist: "Lil Uzi Vert",
    description: "An anime-inspired music video that transforms hip-hop into high-energy storytelling.",
    thumbnailUrl: "/lovable-uploads/5c9c4fdc-487a-42cb-8414-ca915dc01ae8.png",
    videoId: "x0fFzqX_Xgo",
    watchUrl: "https://www.youtube.com/watch?v=x0fFzqX_Xgo&t=4s",
    pressUrl: "https://hypebeast.com/2018/1/lil-uzi-vert-ps-and-qs-video",
    startTime: 4,
  },
  {
    title: "Wassup",
    artist: "Lil Uzi Vert",
    description: "A deepfake-fueled, reality-bending experience in collaboration with Future.",
    thumbnailUrl: "/lovable-uploads/ab796fc0-c363-4ac3-bf3c-a631cc59785b.png",
    videoId: "Ac6kDNMQK3c",
    watchUrl: "https://www.youtube.com/watch?v=Ac6kDNMQK3c",
    btsUrl: "https://www.youtube.com/watch?v=zG-wc4q5KeA",
    pressUrl: "https://www.highsnobiety.com/p/lil-uzi-vert-future-wassup-video/",
  },
  {
    title: "WAP (Animated)",
    artist: "Cardi B",
    description: "A hyper-stylized, controversial lyric video that turns everyday objects into symbols of power and desire.",
    thumbnailUrl: "/lovable-uploads/ef0cf4c2-3808-4caf-a75b-367cd0ab51ab.png",
    videoId: "ohD6cyB8RI4",
    watchUrl: "https://www.youtube.com/watch?v=ohD6cyB8RI4",
  },
  {
    title: "Distraction",
    artist: "Kehlani",
    description: "A sleek, Grammy-nominated visual masterpiece blending intimacy with minimalist elegance.",
    thumbnailUrl: "/lovable-uploads/6ee7776f-9730-4eee-ba00-244c7f8c5d91.png",
    videoId: "HPHbeSGVKJo",
    watchUrl: "https://www.youtube.com/watch?v=HPHbeSGVKJo&t=4s",
    pressUrl: "https://www.thefader.com/2016/11/22/kehlani-distraction-music-video",
    startTime: 4,
  },
  {
    title: "Black Bonnie",
    artist: "Wale",
    description: "A time-traveling cinematic love story celebrating Black excellence across generations.",
    thumbnailUrl: "/lovable-uploads/6f1dad7b-393f-42bc-ae32-abe34d8e93b0.png",
    videoId: "KmR47_vyD2w",
    watchUrl: "https://www.youtube.com/watch?v=KmR47_vyD2w",
    pressUrl: "https://www.billboard.com/music/rb-hip-hop/wale-black-bonnie-music-video-8467980/",
  },
  {
    title: "Don't Save Me",
    artist: "Marshmello",
    description: "Collaborative music video blending Marshmello's electronic style with SOB x RBE's gritty rap vocals.",
    thumbnailUrl: "/lovable-uploads/5b6ec8cf-8868-45b2-8d24-6c58bfebfd37.png",
    videoId: "t8eiTPi3OqI",
    watchUrl: "https://www.youtube.com/watch?v=t8eiTPi3OqI",
  },
  {
    title: "Getting Loose",
    artist: "Wiz Khalifa",
    description: "A vibrant celebration of late 2000's lifestyle and culture with dynamic visuals.",
    thumbnailUrl: "/lovable-uploads/89ec84d1-8dc1-4c61-acb9-20c9105c29ac.png",
    videoId: "fT2fxC48fX0",
    watchUrl: "https://www.youtube.com/watch?v=fT2fxC48fX0",
  },
  {
    title: "Limewire",
    artist: "Soulja Boy",
    description: "A nostalgic, lo-fi glitch aesthetic pays homage to the internet icon that launched a digital revolution. Draco did it first.",
    thumbnailUrl: "/lovable-uploads/369abeb6-d460-4500-903f-011e6eb63dd3.png",
    videoId: "STml8BkoGvk",
    watchUrl: "https://www.youtube.com/watch?v=STml8BkoGvk",
    pressUrl: "https://www.vibe.com/music/videos/soulja-boy-discovers-america-paints-mona-lisa-limewire-video-1234764965/",
  },
  {
    title: "Tremaine (Video Album)",
    artist: "Trey Songz",
    description: "A cinematic and deeply personal visual album exploring themes of love, lust, relationships, and emotional vulnerability.",
    thumbnailUrl: "/lovable-uploads/504d7f7b-8e77-41fb-94e8-88053c27dd9a.png",
    videoId: "6G2fyO5ibEE",
    watchUrl: "https://www.youtube.com/watch?v=3v5HZTwFBCs",
    pressUrl: "https://www.vh1.com/news/wrb5zv/trey-songz-tremaine-the-playboy",
    additionalWatchLinks: [
      {
        title: "Watch",
        url: "https://www.youtube.com/watch?v=6G2fyO5ibEE"
      },
      {
        title: "Watch",
        url: "https://www.youtube.com/watch?v=JvlYjy9AYek"
      },
      {
        title: "Watch",
        url: "https://www.youtube.com/watch?v=itaXFz2S4NI"
      }
    ]
  },
  {
    title: "Made in USA",
    artist: "Lupe Fiasco",
    description: "An intense and politically charged visual pairing razor-sharp lyricism with stark imagery reflecting American identity.",
    thumbnailUrl: "/lovable-uploads/7149ca39-55a6-4381-8408-c85d448402ce.png",
    videoId: "9fFT2PvztMk",
    watchUrl: "https://www.youtube.com/watch?v=9fFT2PvztMk&t=4s",
    startTime: 4,
  },
  {
    title: "All My Children",
    artist: "Gucci Mane",
    description: "A bold, animated journey that cements Gucci Mane's legacy as a mentor to a generation of artists. Premiered on Adult Swim.",
    thumbnailUrl: "/lovable-uploads/ec82725b-126e-4f53-931f-c8d990febc23.png",
    videoId: "pOmsxhn6F90",
    watchUrl: "https://www.youtube.com/watch?v=pOmsxhn6F90&t=5s",
    pressUrl: "https://www.vice.com/en/article/watch-gucci-manes-animated-video-for-all-my-children/",
    startTime: 5,
  },
  {
    title: "We Set the Trends",
    artist: "Jim Jones & Migos",
    description: "A trailblazing NFT-driven music video at the intersection of hip-hop and the metaverse. Premiered in Decentraland.",
    thumbnailUrl: "/lovable-uploads/7ab2c68d-9b07-4195-ae88-bad4b158da67.png",
    videoId: "nfYscgHX29E",
    watchUrl: "https://www.youtube.com/watch?v=nfYscgHX29E",
    pressUrl: "https://www.revolt.tv/article/2022-06-02/172102/jim-jones-migos-announce-we-set-the-trends-metaverse-nft-video",
  },
  {
    title: "Real Man",
    artist: "Ne-Yo & Behani",
    description: "A sultry, visually polished collaboration that fuses Behani's pop sensibilities with Ne-Yo's signature R&B charm.",
    thumbnailUrl: "/lovable-uploads/dd7199a6-8b7d-4b00-a002-0302dfb60ba5.png",
    videoId: "B24X3M2j-Oo",
    watchUrl: "https://www.youtube.com/watch?v=B24X3M2j-Oo",
  },
  {
    title: "Super Freaky Girl (Animated)",
    artist: "Nicki Minaj",
    description: "An animated lyric video that complements Nicki Minaj's chart-topping single, \"Super Freaky Girl.\"",
    thumbnailUrl: "/lovable-uploads/c9ac84de-ef4d-4bc1-89b5-24372e9b08a5.png",
    videoId: "HInFfnzyqR4",
    watchUrl: "https://www.youtube.com/watch?v=HInFfnzyqR4",
  }
];

const getUniqueArtists = () => {
  const artistSet = new Set<string>();
  
  portfolioItems.forEach(item => {
    if (item.artist.includes("&")) {
      const artists = item.artist.split("&").map(a => a.trim());
      artists.forEach(artist => {
        if (artist !== "Curren$y" && artist !== "Jim Jones" && artist !== "Behani") {
          artistSet.add(artist);
        }
      });
    } else {
      if (item.artist !== "Jim Jones") {
        artistSet.add(item.artist);
      }
    }
  });
  
  return Array.from(artistSet).sort();
};

const Portfolio = () => {
  const uniqueArtists = getUniqueArtists();
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, portfolioItems.length);
  }, []);
  
  const scrollToArtist = (artistName: string) => {
    const indexes = portfolioItems.reduce((acc: number[], item, index) => {
      if (item.artist.includes(artistName)) {
        acc.push(index);
      }
      return acc;
    }, []);
    
    if (indexes.length > 0) {
      const firstIndex = indexes[0];
      const element = videoRefs.current[firstIndex];
      
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
    }
  };

  return (
    <section 
      id="works" 
      className="py-24 animate-on-scroll bg-black text-white"
    >
      <div className="w-full mx-auto">
        <div className="mb-16 px-6 md:px-12">
          <span className="text-sm uppercase tracking-widest text-white/60 mb-2 inline-block">Portfolio</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">SELECTED WORKS</h2>
          <p className="mt-4 text-lg max-w-3xl text-white/80">
            Our portfolio spans culturally defining projects, from anime-inspired epics to futuristic 
            deepfake-driven worlds. Each video is an immersive visual statement, designed to elevate 
            the artistry of the music it represents.
          </p>
          
          <div className="mt-6 flex flex-wrap gap-2 md:gap-3">
            {uniqueArtists.map((artist, index) => (
              <button
                key={index}
                onClick={() => scrollToArtist(artist)}
                className="text-sm md:text-base hover:text-white/70 transition-colors focus:outline-none link-hover"
              >
                {artist}
                {index < uniqueArtists.length - 1 && <span className="mx-1 text-white/30">•</span>}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-black">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              ref={el => videoRefs.current[index] = el}
              className="video-preview-item"
            >
              <VideoPreview 
                index={index}
                title={item.title}
                artist={item.artist}
                description={item.description}
                thumbnailUrl={item.thumbnailUrl}
                videoId={item.videoId}
                watchUrl={item.watchUrl}
                pressUrl={item.pressUrl}
                btsUrl={item.btsUrl}
                additionalWatchLinks={item.additionalWatchLinks}
                startTime={item.startTime}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
