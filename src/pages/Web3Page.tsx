
import React from "react";
import Navbar from "../components/Navbar";
import Web3 from "../components/Web3";
import Footer from "../components/Footer";

const Web3Page = () => {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <Navbar />
      <main className="w-full pt-24">
        <Web3 />
      </main>
      <Footer />
    </div>
  );
};

export default Web3Page;
