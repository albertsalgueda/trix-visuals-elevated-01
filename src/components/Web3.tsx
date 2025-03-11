
import React from "react";
import { ExternalLink } from "lucide-react";

const Web3 = () => {
  return (
    <section id="web3" className="py-24 animate-on-scroll bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="text-sm uppercase tracking-widest text-white/60 mb-2 inline-block">Web3</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">EXPANDING THE BOUNDARIES</h2>
          <p className="mt-4 text-lg max-w-3xl text-white/80">
            TRIX is pioneering the next frontier of entertainment through groundbreaking Web3 integrations, 
            metaverse experiences, and blockchain innovations that bridge the gap between digital and physical realms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              TRIX STUDIO x Decentraland x LimeWire
            </h3>
            <p className="text-white/80 text-lg">
              A Groundbreaking Digital Premiere for <span className="font-semibold">We Set the Trends</span> by Jim Jones & Migos
            </p>
            
            <div className="space-y-6">
              <p className="text-white/80">
                TRIX Studio, in collaboration with Decentraland and LimeWire, produced a first-of-its-kind virtual event to celebrate the release of We Set the Trends—the NFT music video from Jim Jones & Migos. The event marked the official unveiling of the Decentraland Music Theatre, transforming the metaverse into an immersive red carpet experience that redefined the way digital music releases are experienced.
              </p>

              <div className="border border-white/10 bg-white/5 p-6 rounded-md">
                <h4 className="text-xl font-semibold text-white mb-4">Event Highlights</h4>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="text-xl mr-2">✨</span>
                    <span>A virtual red carpet & paparazzi flashbulbs capturing the star-studded digital debut</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">👕</span>
                    <span>Exclusive custom merch giveaways for attendees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🎟</span>
                    <span>NFT drops tied to the historic release of We Set the Trends</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🔥</span>
                    <span>Live fan interactions & artist engagement in the metaverse</span>
                  </li>
                </ul>
              </div>

              <p className="text-white/80">
                By blending music, blockchain technology, and virtual reality, this event trailblazed the future of music video premieres, proving that the metaverse is more than just a digital space—it's the next frontier for music culture.
              </p>

              <p className="text-white/80 font-semibold">
                🚀 A new era of digital experiences has arrived. And TRIX Studio is leading the charge.
              </p>

              <div className="pt-4">
                <a 
                  href="https://www.youtube.com/watch?v=nfYscgHX29E" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-black rounded-md hover:bg-white/90 transition-colors"
                >
                  <span className="mr-2">Watch the Video</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square overflow-hidden rounded-md">
              <img 
                src="/lovable-uploads/3620e99b-1497-4a43-82f8-9a3bbbef067b.png" 
                alt="Decentraland theater showing We Set the Trends premiere" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-md">
              <img 
                src="/lovable-uploads/878ffd43-b931-496c-91af-a63b3802e712.png" 
                alt="Avatar with custom merch in Decentraland" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-md">
              <img 
                src="/lovable-uploads/cd0accd0-4a9c-4e5c-9d00-d9333ce8a184.png" 
                alt="Metaverse event with NFT collectibles" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-md">
              <img 
                src="/lovable-uploads/f196240b-c2c2-4f52-bc85-b0beca8076e2.png" 
                alt="Virtual red carpet experience" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web3;
