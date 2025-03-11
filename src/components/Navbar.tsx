
import React, { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    
    // Hard-coded offsets based on section
    const headerOffset = 100;
    
    if (id === "web3Section") {
      // Set a flag in sessionStorage to indicate we're navigating to Web3
      sessionStorage.setItem('navigatingToWeb3', 'true');
      
      // First scroll to the section to ensure it's in view and loaded
      const section = document.getElementById(id);
      if (section) {
        const sectionRect = section.getBoundingClientRect();
        const sectionTop = window.pageYOffset + sectionRect.top;
        
        window.scrollTo({
          top: sectionTop - headerOffset,
          behavior: "smooth"
        });
      }
      
      // Now try to find the heading with increasing delays until found
      let attempts = 0;
      const maxAttempts = 10;
      const attemptInterval = 200;
      
      const findAndScrollToHeading = () => {
        const heading = document.getElementById('web3-heading');
        
        if (heading) {
          const headingRect = heading.getBoundingClientRect();
          const headingTop = window.pageYOffset + headingRect.top;
          
          // Only scroll if the heading is found and we're not already there
          const currentPosition = window.pageYOffset;
          if (Math.abs(currentPosition - (headingTop - 130)) > 50) {
            window.scrollTo({
              top: headingTop - 130,
              behavior: "smooth"
            });
          }
          
          return true; // Success
        }
        
        if (++attempts < maxAttempts) {
          // Try again after a delay
          setTimeout(findAndScrollToHeading, attemptInterval);
          return false; // Not found yet
        }
        
        // Give up after max attempts
        console.log("Could not find Web3 heading after multiple attempts");
        return false;
      };
      
      // Start the attempt process with a small initial delay
      setTimeout(findAndScrollToHeading, 100);
    } else {
      // Clear any Web3 navigation flag if we're going elsewhere
      sessionStorage.removeItem('navigatingToWeb3');
      
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const absoluteElementTop = rect.top + window.scrollY;
          
          window.scrollTo({
            top: absoluteElementTop - headerOffset,
            behavior: "smooth"
          });
        }
      }, 300);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md border-b border-black/5 py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a 
          href="#hero" 
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
        >
          <img 
            src="/lovable-uploads/87bbcdd9-e884-489b-a257-8495edf6bfbe.png" 
            alt="TRIX STUDIOS Logo" 
            className="h-14 md:h-16 w-auto object-contain brightness-0 invert" 
            style={{ aspectRatio: "160/64", objectFit: "contain" }}
            width="160"
            height="64"
          />
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {[
            { id: "portfolio", label: "videos" },
            { id: "web3Section", label: "web3" }, 
            { id: "about", label: "about" }, 
            { id: "contact", label: "contact" }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm uppercase tracking-wide link-hover ${
                isScrolled ? "text-black" : "text-white"
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button - fixed position relative to header */}
        <button
          className="md:hidden z-[60] flex items-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} color="black" /> 
          ) : (
            <Menu size={24} color={isScrolled ? "black" : "white"} />
          )}
        </button>

        {/* Mobile Menu Overlay - fixed to viewport */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-white z-[55] flex flex-col items-center justify-center"
            style={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100vw',
              height: '100vh'
            }}
          >
            <nav className="flex flex-col items-center space-y-8">
              {[
                { id: "portfolio", label: "videos" },
                { id: "web3Section", label: "web3" },
                { id: "about", label: "about" },
                { id: "contact", label: "contact" }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-xl uppercase font-medium tracking-wide link-hover"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
