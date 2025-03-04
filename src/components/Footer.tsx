
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/10 bg-black text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            {/* New logo with white elements instead of purple, with filter for visibility on dark background */}
            <img 
              src="/lovable-uploads/87bbcdd9-e884-489b-a257-8495edf6bfbe.png" 
              alt="TRIX STUDIOS Logo" 
              className="h-12 md:h-16 brightness-0 invert" 
            />
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <span className="text-sm text-white/60">
              © {currentYear} TRIX STUDIOS. All Rights Reserved.
            </span>
            
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-white/80 hover:text-white">
                Privacy
              </a>
              <a href="#" className="text-sm text-white/80 hover:text-white">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
