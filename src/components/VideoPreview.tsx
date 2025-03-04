
import React, { useState, useRef, useEffect } from "react";
import { Play, Link } from "lucide-react";

interface VideoPreviewProps {
  title: string;
  artist: string;
  description: string;
  thumbnailUrl: string;
  videoId?: string;
  watchUrl: string;
  pressUrl?: string;
  btsUrl?: string;
  index: number;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({
  title,
  artist,
  description,
  thumbnailUrl,
  videoId,
  watchUrl,
  pressUrl,
  btsUrl,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  return (
    <div 
      ref={containerRef}
      className={`w-full mb-24 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div 
        className="relative aspect-video overflow-hidden bg-black"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isPlaying && videoId ? (
          <iframe
            className="w-full h-full absolute inset-0"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`}
            title={`${artist} - ${title}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <div 
              className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 z-10 cursor-pointer ${
                isHovered ? 'opacity-0' : 'opacity-100'
              }`}
              onClick={handleVideoClick}
            >
              <Play size={64} className="text-white/80" />
            </div>
            
            <img 
              src={thumbnailUrl} 
              alt={`${artist} - ${title}`}
              className="w-full h-full object-cover"
              onClick={handleVideoClick}
            />
            
            {videoId && !isPlaying && (
              <div 
                className={`absolute inset-0 cursor-pointer transition-opacity duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={handleVideoClick}
              >
                <img 
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt={`${artist} - ${title} (YouTube thumbnail)`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Play size={80} className="text-white hover:text-white/90 transition-colors" />
                </div>
              </div>
            )}
          </>
        )}
      </div>
      
      <div className="mt-4 md:mt-6">
        <div className="flex items-center mb-2">
          <span className="text-xs uppercase tracking-widest text-black/60">🎥 Music Video</span>
        </div>
        <h3 className="text-xl md:text-2xl font-display font-semibold mb-2">{artist} – {title}</h3>
        <p className="text-base text-black/80 mb-4">{description}</p>
        
        <div className="flex flex-wrap items-center gap-4">
          <a 
            href={watchUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-sm font-medium link-hover"
          >
            <span>Watch</span>
          </a>
          
          {btsUrl && (
            <a 
              href={btsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-sm font-medium link-hover"
            >
              <span>BTS</span>
            </a>
          )}
          
          {pressUrl && (
            <a 
              href={pressUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-sm font-medium link-hover"
            >
              <span>Press</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;
