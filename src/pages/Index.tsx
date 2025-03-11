import React, { useEffect, lazy, Suspense, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

// Eagerly import the Web3 component to ensure it's loaded when needed
import Web3 from "../components/Web3";

// Lazy load other non-critical components
const Portfolio = lazy(() => import("../components/Portfolio"));
const About = lazy(() => import("../components/About"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));

// Simple loading component
const SectionLoader = () => (
  <div className="w-full h-64 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  const [sectionsLoaded, setSectionsLoaded] = useState(false);

  // Implement a staggered animation effect for page load
  useEffect(() => {
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

  // Log section IDs when component mounts for debugging
  useEffect(() => {
    // Wait for all sections to be loaded
    setTimeout(() => {
      const allSections = document.querySelectorAll('section[id]');
      console.log('Available sections in the DOM:');
      allSections.forEach(section => {
        console.log(`Section ID: ${section.id}`);
      });
      setSectionsLoaded(true);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        {/* Hero is always loaded immediately */}
        <Hero />
        
        {/* Portfolio section - now using consistent ID naming */}
        <Suspense fallback={<SectionLoader />}>
          <Portfolio />
        </Suspense>
        
        {/* Web3 section with explicit wrapper div */}
        <div id="web3NavTarget">
          <Web3 />
        </div>
        
        <Suspense fallback={<SectionLoader />}>
          <About />
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
