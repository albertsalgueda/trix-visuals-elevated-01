
import React, { useState, useEffect, useCallback } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface NavbarProps {
  forceWhiteText?: boolean;
}

const Navbar = ({ forceWhiteText = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleNavigation = (id: string) => {
    setIsOpen(false);
    
    // If we're not on the home page, navigate to the home page first
    if (location.pathname !== '/') {
      navigate('/');
      // Store the section to scroll to after navigation
      sessionStorage.setItem('scrollToSection', id);
    } else {
      // Already on home page, scroll directly
      scrollToSection(id);
    }
  };

  const scrollToSection = (id: string) => {
    // Only handle scrolling if we're on the home page
    if (location.pathname === '/') {
      // Hard-coded offsets based on section
      const headerOffset = 100;
      
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

  // Check for stored section to scroll to on page load
  useEffect(() => {
    if (location.pathname === '/') {
      const sectionToScrollTo = sessionStorage.getItem('scrollToSection');
      if (sectionToScrollTo) {
        // Clear storage to prevent scrolling on subsequent navigations
        sessionStorage.removeItem('scrollToSection');
        // Delay to ensure page is fully loaded
        setTimeout(() => {
          scrollToSection(sectionToScrollTo);
        }, 500);
      }
    }
  }, [location.pathname]);

  // Navigation items with their links/actions
  const navItems = [
    { id: "portfolio", label: "videos", isExternal: false, path: "/" },
    { id: "web3Section", label: "web3", isExternal: true, path: "/web3" },
    { id: "about", label: "about", isExternal: false, path: "/" },
    { id: "contact", label: "contact", isExternal: false, path: "/" }
  ];

  const getTextColorClass = () => {
    if (forceWhiteText) return "text-white";
    return isScrolled ? "text-black" : "text-white";
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md border-b border-black/5 py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/"
          className="flex items-center"
          onClick={() => {
            if (location.pathname === '/') {
              scrollToSection("hero");
            }
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
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            item.isExternal ? (
              <Link
                key={item.id}
                to={item.path}
                className={`text-sm uppercase tracking-wide link-hover flex items-center ${
                  forceWhiteText ? "text-white" : (isScrolled ? "text-black" : "text-white")
                }`}
              >
                {item.label}
                <ExternalLink className="ml-1" size={14} />
              </Link>
            ) : (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm uppercase tracking-wide link-hover ${
                  forceWhiteText ? "text-white" : (isScrolled ? "text-black" : "text-white")
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.id);
                }}
              >
                {item.label}
              </a>
            )
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
            <Menu size={24} color={forceWhiteText ? "white" : (isScrolled ? "black" : "white")} />
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
              {navItems.map((item) => (
                item.isExternal ? (
                  <Link
                    key={item.id}
                    to={item.path}
                    className="text-xl uppercase font-medium tracking-wide link-hover flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                    <ExternalLink className="ml-1" size={18} />
                  </Link>
                ) : (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-xl uppercase font-medium tracking-wide link-hover"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
