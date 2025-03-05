import React, { useEffect, lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

// Only lazy load components that are not needed for initial rendering
// Keep About loaded eagerly since it's important content
import About from "../components/About";

// Lazy load less critical components
const Portfolio = lazy(() => import("../components/Portfolio"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));

// Simple loading component
const SectionLoader = () => (
  <div className="w-full h-64 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
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
        rootMargin: "50px 0px" // Start animation slightly before element comes into view
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
