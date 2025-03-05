
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a 
          href="#hero" 
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
        >
          {/* Logo with white elements (always inverted to avoid purple) */}
          <img 
            src="/lovable-uploads/87bbcdd9-e884-489b-a257-8495edf6bfbe.png" 
            alt="TRIX STUDIOS Logo" 
            className="h-12 md:h-16 brightness-0 invert" 
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {["works", "about", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`text-sm uppercase tracking-wide link-hover ${
                isScrolled ? "text-black" : "text-white"
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item);
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="flex flex-col items-center space-y-8">
            {["works", "about", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-xl uppercase font-medium tracking-wide link-hover"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
