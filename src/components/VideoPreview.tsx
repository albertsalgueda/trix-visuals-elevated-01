
import React, { useState, useRef, useEffect } from "react";
import { Play, Link } from "lucide-react";

interface VideoPreviewProps {
  title: string;
  artist: string;
  description: string;
  thumbnailUrl: string;
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
  watchUrl,
  pressUrl,
  btsUrl,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Play/pause video on hover
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (isHovered) {
        videoElement.play().catch((err) => {
          console.error("Error playing video:", err);
        });
      } else {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    }
  }, [isHovered]);

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
        <div className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          <Play size={64} className="text-white/80" />
        </div>
        
        <img 
          src={thumbnailUrl} 
          alt={`${artist} - ${title}`}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />
        
        <video 
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
          muted
          playsInline
          loop
        />
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
