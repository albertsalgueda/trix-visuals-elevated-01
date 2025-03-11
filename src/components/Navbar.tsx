
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
    
    // Handle Web3 section differently to ensure proper scrolling
    if (id === "web3Section") {
      console.log("Attempting to scroll to Web3 section");
      
      setTimeout(() => {
        // Target the specific div that contains the "EXPANDING THE BOUNDARIES" title
        const element = document.querySelector("#web3Section .container h2");
        
        if (element) {
          console.log("Found Web3 heading element, scrolling to it");
          
          // Get element position
          const rect = element.getBoundingClientRect();
          const absoluteElementTop = rect.top + window.scrollY;
          
          // Account for header height and add additional offset for better positioning
          const headerOffset = 130;
          const scrollPosition = absoluteElementTop - headerOffset;
          
          // Scroll with smooth behavior
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
          });
        } else {
          console.error("Could not find Web3 heading element");
          
          // Fallback to section ID if heading not found
          const sectionElement = document.getElementById("web3Section");
          if (sectionElement) {
            const rect = sectionElement.getBoundingClientRect();
            const absoluteElementTop = rect.top + window.scrollY;
            const headerOffset = 100;
            const scrollPosition = absoluteElementTop - headerOffset;
            
            window.scrollTo({
              top: scrollPosition,
              behavior: "smooth"
            });
          }
        }
      }, 300);
    } else {
      // Handle all other sections with the existing logic
      setTimeout(() => {
        console.log(`Attempting to scroll to section with ID: ${id}`);
        
        const element = document.getElementById(id);
        
        if (element) {
          console.log(`Found element with ID ${id}, scrolling to it`);
          
          const rect = element.getBoundingClientRect();
          const absoluteElementTop = rect.top + window.scrollY;
          
          const headerOffset = 100;
          const scrollPosition = absoluteElementTop - headerOffset;
          
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth"
          });
        } else {
          console.error(`Could not find element with ID: ${id}`);
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
                { id: "portfolio", label: "videos" }, // Changed from "works" to match section ID
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
