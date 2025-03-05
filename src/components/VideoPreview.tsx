
import React, { useState, useRef, useEffect, memo } from "react";
import { Play } from "lucide-react";

interface WatchLink {
  title: string;
  url: string;
}

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
  additionalWatchLinks?: WatchLink[];
  startTime?: number;
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
  additionalWatchLinks,
  startTime,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [thumbnailError, setThumbnailError] = useState(false);
  const [loadingThumbnail, setLoadingThumbnail] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  // Create the YouTube embed URL with proper start time parameter
  const getYoutubeEmbedUrl = () => {
    let embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&rel=0`;
    
    // Explicitly convert startTime to number and ensure it exists
    const timeValue = Number(startTime);
    if (timeValue && !isNaN(timeValue) && timeValue > 0) {
      // Make sure to use the correct parameter format that YouTube expects
      embedUrl += `&start=${Math.floor(timeValue)}`;
    }
    
    console.log(`Creating embed URL with startTime: ${startTime}, resulting URL: ${embedUrl}`);
    return embedUrl;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1, rootMargin: "300px" } // Increased rootMargin for earlier loading
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

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Early exit for non-visible components - reserve less space to reduce layout shifts
  if (!isVisible) {
    return (
      <div 
        ref={containerRef}
        className="w-full mb-12 opacity-0"
        style={{ height: "200px" }} // Reduced height reservation
      />
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`w-full mb-16 transition-opacity duration-700 px-0 video-preview-item ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDelay: `${Math.min(index * 75, 500)}ms` }} // Reduced delay cap to 500ms
      data-artist={artist}
    >
      <div 
        className="relative aspect-video overflow-hidden bg-black w-full"
      >
        {isPlaying && videoId ? (
          <iframe
            className="w-full h-full absolute inset-0"
            src={getYoutubeEmbedUrl()}
            title={`${artist} - ${title}`}
            loading="lazy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div 
            className="relative w-full h-full cursor-pointer" 
            onClick={handleVideoClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {loadingThumbnail && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <div className="w-8 h-8 rounded-full bg-gray-700 animate-pulse"></div>
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
                // Fixed case issue - using lowercase for HTML attributes
                fetchpriority="low"
              />
            )}
            
            {thumbnailError && !videoId && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <span className="text-white text-lg">{artist} - {title}</span>
              </div>
            )}
            
            <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0 md:opacity-0'}`}>
              <Play size={80} className="text-white hover:text-white/90 transition-colors" />
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-4 md:mt-6 px-6 md:px-12 bg-black text-white">
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
          
          {additionalWatchLinks && additionalWatchLinks.length > 0 && (
            additionalWatchLinks.map((link, i) => (
              <a 
                key={i}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-sm font-medium text-white hover:text-white/80 after:bg-white link-hover"
              >
                <span>{link.title}</span>
              </a>
            ))
          )}
          
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
