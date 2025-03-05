
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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
            { id: "works", label: "work" }, 
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
                { id: "works", label: "work" },
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
