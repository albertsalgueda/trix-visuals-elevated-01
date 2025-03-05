
import React from "react";
import VideoPreview from "./VideoPreview";

const portfolioItems = [
  {
    title: "P's and Q's",
    artist: "Lil Uzi Vert",
    description: "An anime-inspired music video that transforms hip-hop into high-energy storytelling.",
    thumbnailUrl: "https://i.ytimg.com/vi/x0fFzqX_Xgo/maxresdefault.jpg",
    videoId: "x0fFzqX_Xgo",
    watchUrl: "https://www.youtube.com/watch?v=x0fFzqX_Xgo",
    pressUrl: "https://hypebeast.com/2018/1/lil-uzi-vert-ps-and-qs-video",
  },
  {
    title: "Wassup",
    artist: "Lil Uzi Vert",
    description: "A deepfake-fueled, reality-bending experience in collaboration with Future.",
    thumbnailUrl: "https://i.ytimg.com/vi/Ac6kDNMQK3c/maxresdefault.jpg",
    videoId: "Ac6kDNMQK3c",
    watchUrl: "https://www.youtube.com/watch?v=Ac6kDNMQK3c",
    btsUrl: "https://www.youtube.com/watch?v=zG-wc4q5KeA",
    pressUrl: "https://www.highsnobiety.com/p/lil-uzi-vert-future-wassup-video/",
  },
  {
    title: "WAP (Animated)",
    artist: "Cardi B & Megan Thee Stallion",
    description: "A hyper-stylized, controversial lyric video that turns everyday objects into symbols of power and desire.",
    thumbnailUrl: "/lovable-uploads/ef0cf4c2-3808-4caf-a75b-367cd0ab51ab.png",
    videoId: "ohD6cyB8RI4",
    watchUrl: "https://www.youtube.com/watch?v=ohD6cyB8RI4",
  },
  {
    title: "Super Freaky Girl (Animated)",
    artist: "Nicki Minaj",
    description: "An animated lyric video that complements Nicki Minaj's chart-topping single, \"Super Freaky Girl.\" The visual features vibrant animations synchronized with the song's lyrics, enhancing the track's playful and bold themes.",
    thumbnailUrl: "/lovable-uploads/39d131d0-6cd9-4417-a195-33c0759226f8.png",
    videoId: "HInFfnzyqR4",
    watchUrl: "https://www.youtube.com/watch?v=HInFfnzyqR4",
  },
  {
    title: "Distraction",
    artist: "Kehlani",
    description: "A sleek, Grammy-nominated visual masterpiece blending intimacy with minimalist elegance.",
    thumbnailUrl: "https://i.ytimg.com/vi/HPHbeSGVKJo/maxresdefault.jpg",
    videoId: "HPHbeSGVKJo",
    watchUrl: "https://www.youtube.com/watch?v=HPHbeSGVKJo",
    pressUrl: "https://hypebeast.com",
  },
  {
    title: "Black Bonnie",
    artist: "Wale",
    description: "A time-traveling cinematic love story celebrating Black excellence across generations.",
    thumbnailUrl: "https://i.ytimg.com/vi/KmR47_vyD2w/maxresdefault.jpg",
    videoId: "KmR47_vyD2w",
    watchUrl: "https://www.youtube.com/watch?v=KmR47_vyD2w",
    pressUrl: "https://www.billboard.com/music/rb-hip-hop/wale-black-bonnie-music-video-8467980/",
  },
  {
    title: "We Set the Trends",
    artist: "Jim Jones & Migos",
    description: "A trailblazing NFT-driven music video at the intersection of hip-hop and the metaverse.",
    thumbnailUrl: "/lovable-uploads/7ab2c68d-9b07-4195-ae88-bad4b158da67.png",
    videoId: "nfYscgHX29E",
    watchUrl: "https://www.youtube.com/watch?v=nfYscgHX29E",
    pressUrl: "https://www.revolt.tv/article/2022-06-02/172102/jim-jones-migos-announce-we-set-the-trends-metaverse-nft-video",
  },
  {
    title: "All My Children",
    artist: "Gucci Mane",
    description: "A bold, animated journey that cements Gucci Mane's legacy as a mentor to a generation of artists.",
    thumbnailUrl: "/lovable-uploads/ec82725b-126e-4f53-931f-c8d990febc23.png",
    videoId: "pOmsxhn6F90",
    watchUrl: "https://www.youtube.com/watch?v=pOmsxhn6F90",
    pressUrl: "https://www.vice.com/en/article/watch-gucci-manes-animated-video-for-all-my-children/",
  },
  {
    title: "LIMEWIRE",
    artist: "Soulja Boy",
    description: "A nostalgic, lo-fi glitch aesthetic pays homage to the internet that launched a rap revolution.",
    thumbnailUrl: "https://i.ytimg.com/vi/STml8BkoGvk/maxresdefault.jpg",
    videoId: "STml8BkoGvk",
    watchUrl: "https://www.youtube.com/watch?v=STml8BkoGvk",
    pressUrl: "https://www.vibe.com/music/videos/soulja-boy-discovers-america-paints-mona-lisa-limewire-video-1234764965/",
  },
  {
    title: "Getting Loose",
    artist: "Wiz Khalifa",
    description: "A vibrant celebration of lifestyle and culture with dynamic visuals.",
    thumbnailUrl: "/lovable-uploads/89ec84d1-8dc1-4c61-acb9-20c9105c29ac.png",
    videoId: "fT2fxC48fX0",
    watchUrl: "https://www.youtube.com/watch?v=fT2fxC48fX0",
  },
  {
    title: "Tremaine",
    artist: "Trey Songz",
    description: "A cinematic and deeply personal visual album exploring themes of love, relationships, and emotional vulnerability. The video album blends storytelling with R&B sensuality, creating a cohesive, immersive experience that reflects Trey Songz's evolution as an artist.",
    thumbnailUrl: "https://i.ytimg.com/vi/6G2fyO5ibEE/maxresdefault.jpg",
    videoId: "6G2fyO5ibEE",
    watchUrl: "https://www.youtube.com/watch?v=6G2fyO5ibEE",
    pressUrl: "https://www.vh1.com/news/wrb5zv/trey-songz-tremaine-the-playboy",
  },
  {
    title: "Made in USA",
    artist: "Lupe Fiasco",
    description: "An intense and politically charged visual pairing razor-sharp lyricism with stark imagery reflecting American identity, globalization, and cultural influence. The video's raw and fast-paced edits mirror the urgency of the track's message.",
    thumbnailUrl: "https://i.ytimg.com/vi/9fFT2PvztMk/maxresdefault.jpg",
    videoId: "9fFT2PvztMk",
    watchUrl: "https://www.youtube.com/watch?v=9fFT2PvztMk",
    pressUrl: "https://pitchfork.com/news/69880-lupe-fiasco-shares-new-song-made-in-the-usa-listen/",
  },
  {
    title: "Real Man",
    artist: "Ne-Yo & Behani",
    description: "A sultry, visually polished collaboration that fuses Behani's pop sensibilities with Ne-Yo's signature R&B charm. Features sleek cinematography, intimate lighting, and choreographed elegance, delivering a smooth and stylish visual experience.",
    thumbnailUrl: "https://i.ytimg.com/vi/B24X3M2j-Oo/maxresdefault.jpg",
    videoId: "B24X3M2j-Oo",
    watchUrl: "https://www.youtube.com/watch?v=B24X3M2j-Oo",
  }
];

// Get unique artists
const getUniqueArtists = () => {
  const artistSet = new Set<string>();
  
  portfolioItems.forEach(item => {
    // Handle cases where artists are listed together (e.g., "Artist A & Artist B")
    if (item.artist.includes("&")) {
      const artists = item.artist.split("&").map(a => a.trim());
      artists.forEach(artist => {
        // Exclude Curren$y, Jim Jones, and Behani from the artist list
        if (artist !== "Curren$y" && artist !== "Jim Jones" && artist !== "Behani") {
          artistSet.add(artist);
        }
      });
    } else {
      // Exclude Jim Jones as a solo artist
      if (item.artist !== "Jim Jones") {
        artistSet.add(item.artist);
      }
    }
  });
  
  return Array.from(artistSet).sort();
};

const Portfolio = () => {
  const uniqueArtists = getUniqueArtists();
  
  const scrollToArtist = (artistName: string) => {
    // Find the first video by this artist
    const index = portfolioItems.findIndex(item => 
      item.artist.includes(artistName)
    );
    
    if (index !== -1) {
      const videoElements = document.querySelectorAll('.video-preview-item');
      if (videoElements[index]) {
        videoElements[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <section 
      id="works" 
      className="py-24 animate-on-scroll"
    >
      <div className="w-full mx-auto">
        <div className="mb-16 px-6 md:px-12">
          <span className="text-sm uppercase tracking-widest text-black/60 mb-2 inline-block">Portfolio</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">SELECTED WORKS</h2>
          <p className="mt-4 text-lg max-w-3xl">
            Our portfolio spans culturally defining projects, from anime-inspired epics to futuristic 
            deepfake-driven worlds. Each video is an immersive visual statement, designed to elevate 
            the artistry of the music it represents.
          </p>
          
          <div className="mt-6 flex flex-wrap gap-2 md:gap-3">
            {uniqueArtists.map((artist, index) => (
              <button
                key={index}
                onClick={() => scrollToArtist(artist)}
                className="text-sm md:text-base hover:text-black/70 transition-colors focus:outline-none link-hover"
              >
                {artist}
                {index < uniqueArtists.length - 1 && <span className="mx-1 text-black/30">•</span>}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
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
