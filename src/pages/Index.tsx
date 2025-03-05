
import React, { useEffect, lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import PressLogos from "../components/PressLogos";

// Lazy load less critical components
const Portfolio = lazy(() => import("../components/Portfolio"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));

// Optimized loading component with reduced animation
const SectionLoader = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  // Add preload detection to prevent animations during page load
  useEffect(() => {
    document.body.classList.add('preload');
    
    // Remove preload class after components have loaded
    const timer = setTimeout(() => {
      document.body.classList.remove('preload');
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Implement a staggered animation effect for page load
  useEffect(() => {
    // Use a more efficient selector
    const sections = document.querySelectorAll(".animate-on-scroll");

    // Use IntersectionObserver for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "100px 0px" // Start animation earlier before element comes into view
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Clean up observer
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        {/* Hero is always loaded immediately */}
        <Hero />
        
        {/* About is important and loaded eagerly */}
        <About />
        
        <PressLogos />
        
        {/* Lazy load other sections with suspense fallbacks */}
        <Suspense fallback={<SectionLoader />}>
          <Portfolio />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
