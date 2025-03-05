
import React, { useState, useRef, useEffect, memo } from "react";
import { Play } from "lucide-react";

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

const VideoPreview: React.FC<VideoPreviewProps> = memo(({
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
          observer.unobserve(entries[0].target); // Disconnect after becoming visible
        }
      },
      { threshold: 0.1, rootMargin: "200px" } // Load images 200px before they enter viewport
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
      img.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    }
  };

  const handleThumbnailLoaded = () => {
    setLoadingThumbnail(false);
  };

  // Don't render any content until intersection observer has detected visibility
  if (!isVisible) {
    return (
      <div 
        ref={containerRef}
        className="w-full mb-16 opacity-0"
        style={{ height: "400px" }} // Reserve space to prevent layout shifts
      />
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`w-full mb-16 transition-opacity duration-700 px-0 video-preview-item ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDelay: `${Math.min(index * 100, 800)}ms` }} // Cap delay at 800ms
      data-artist={artist}
    >
      <div 
        className="relative aspect-video overflow-hidden bg-black w-full"
      >
        {isPlaying && videoId ? (
          <iframe
            className="w-full h-full absolute inset-0"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`}
            title={`${artist} - ${title}`}
            loading="lazy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="relative w-full h-full cursor-pointer" onClick={handleVideoClick}>
            {loadingThumbnail && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <div className="w-12 h-12 rounded-full bg-gray-700"></div>
              </div>
            )}
            
            {isVisible && (
              <img 
                src={thumbnailError && videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : thumbnailUrl} 
                alt={`${artist} - ${title}`}
                className={`w-full h-full object-cover transition-opacity duration-300 ${loadingThumbnail ? 'opacity-0' : 'opacity-100'}`}
                onError={handleThumbnailError}
                onLoad={handleThumbnailLoaded}
                loading="lazy"
                decoding="async"
              />
            )}
            
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
      
      <div className="mt-4 md:mt-6 px-6 md:px-12 bg-black text-white">
        <div className="flex items-center mb-2">
          <span className="text-xs uppercase tracking-widest text-white/60">🎥 Music Video</span>
        </div>
        <h3 className="text-xl md:text-2xl font-display font-semibold mb-2 text-white">{artist} – {title}</h3>
        <p className="text-base text-white/80 mb-4">{description}</p>
        
        <div className="flex flex-wrap items-center gap-4">
          <a 
            href={watchUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-sm font-medium text-white hover:text-white/80 after:bg-white link-hover"
          >
            <span>Watch</span>
          </a>
          
          {btsUrl && (
            <a 
              href={btsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-sm font-medium text-white hover:text-white/80 after:bg-white link-hover"
            >
              <span>BTS</span>
            </a>
          )}
          
          {pressUrl && (
            <a 
              href={pressUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-sm font-medium text-white hover:text-white/80 after:bg-white link-hover"
            >
              <span>Press</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
});

export default VideoPreview;
