
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
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [thumbnailError, setThumbnailError] = useState(false);
  const [loadingThumbnail, setLoadingThumbnail] = useState(true);

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

  const handleThumbnailError = () => {
    console.log(`Error loading thumbnail for ${title}`);
    setThumbnailError(true);
    setLoadingThumbnail(false);
    
    if (videoId) {
      const img = new Image();
      img.onload = () => {
        setThumbnailError(false);
        setLoadingThumbnail(false);
      };
      img.onerror = () => {
        setThumbnailError(true);
        setLoadingThumbnail(false);
      };
      img.src = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
    }
  };

  const handleThumbnailLoaded = () => {
    setLoadingThumbnail(false);
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
        className="relative aspect-video overflow-hidden bg-black w-full"
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
          <div className="relative w-full h-full cursor-pointer" onClick={handleVideoClick}>
            {loadingThumbnail && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <div className="animate-pulse w-12 h-12 rounded-full bg-gray-700"></div>
              </div>
            )}
            
            <img 
              src={thumbnailError && videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : thumbnailUrl} 
              alt={`${artist} - ${title}`}
              className={`w-full h-full object-cover transition-opacity duration-300 ${loadingThumbnail ? 'opacity-0' : 'opacity-100'}`}
              onError={handleThumbnailError}
              onLoad={handleThumbnailLoaded}
            />
            
            {thumbnailError && !videoId && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <span className="text-white text-lg">{artist} - {title}</span>
              </div>
            )}
            
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <Play size={80} className="text-white hover:text-white/90 transition-colors" />
            </div>
          </div>
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
