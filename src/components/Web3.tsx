
import React from "react";
import { ExternalLink } from "lucide-react";

const Web3 = () => {
  return (
    <section id="web3" className="py-24 animate-on-scroll bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12">
          <span className="text-sm uppercase tracking-widest text-white/60 mb-2 inline-block">Web3</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">EXPANDING THE BOUNDARIES</h2>
          <p className="mt-4 text-lg max-w-3xl text-white/80">
            TRIX is pioneering the next frontier of entertainment through groundbreaking Web3 integrations, 
            metaverse experiences, and blockchain innovations that bridge the gap between digital and physical realms.
          </p>
        </div>

        {/* First Event - Decentraland Theatre */}
        <div className="mb-16">
          {/* Hero Image */}
          <div className="mb-12 overflow-hidden rounded-lg">
            <img 
              src="/lovable-uploads/098810f4-ddc8-4838-8fd5-f2f5c0ce35f8.png" 
              alt="Metaverse Theater showing We Set the Trends premiere" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Decentraland Theatre Unveil
              </h3>
              <p className="text-white/80 text-lg">
                A Groundbreaking Digital Premiere for <span className="font-semibold">We Set the Trends</span> by Jim Jones & Migos
              </p>
              
              <div className="border border-white/10 bg-white/5 p-6 rounded-md">
                <h4 className="text-xl font-semibold text-white mb-4">Event Highlights</h4>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="text-xl mr-2">✨</span>
                    <span>Virtual red carpet & paparazzi flashbulbs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">👕</span>
                    <span>Exclusive custom merch giveaways</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🎟</span>
                    <span>Limited NFT drops for attendees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🔥</span>
                    <span>Live fan interactions in the metaverse</span>
                  </li>
                </ul>
              </div>

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
            
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {/* Original 4 images */}
              <div className="aspect-video overflow-hidden rounded-md">
                <img 
                  src="/lovable-uploads/aa11ee61-a6d2-4ded-896a-bb9cb59c068d.png" 
                  alt="Inside the Decentraland Music Theatre with avatars" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-md">
                <img 
                  src="/lovable-uploads/5e9e4d0a-04c4-49e4-b2bd-1c771a64d4a0.png" 
                  alt="Avatars gathering at the Decentraland event" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* New images added in the middle row */}
              <div className="aspect-video overflow-hidden rounded-md">
                <img 
                  src="/lovable-uploads/7839676c-d4cc-4489-be03-beb0416c681f.png" 
                  alt="Avatars in formal attire on red carpet" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-md">
                <img 
                  src="/lovable-uploads/524cb77b-17d1-4c4c-bce1-a670ee873b27.png" 
                  alt="Avatar in glowing outfit at the event" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Original last row images */}
              <div className="aspect-video overflow-hidden rounded-md">
                <img 
                  src="/lovable-uploads/cea08ff6-ed39-45ad-b2f7-f19d11af86cc.png" 
                  alt="LimeWire presentation screen in Decentraland" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-md">
                <img 
                  src="/lovable-uploads/3106e4b9-cb34-4cdf-bf25-8c8b8d9b6855.png" 
                  alt="Avatars in formal attire at the metaverse premiere" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 text-white/80 bg-white/5 p-6 rounded-md border border-white/10">
            <p className="text-lg">
              By blending music, blockchain technology, and virtual reality, this event trailblazed the future of music video premieres, proving that the metaverse is more than just a digital space—it's the next frontier for music culture.
            </p>
            <p className="text-lg font-semibold mt-4">
              🚀 A new era of digital experiences has arrived. And TRIX Studio is leading the charge.
            </p>
          </div>
        </div>

        {/* Second Event - TRIX Studio x LimeWire Metaverse Music Festival */}
        <div className="mt-24">
          {/* Hero Image */}
          <div className="mb-12 overflow-hidden rounded-lg">
            <img 
              src="/lovable-uploads/f572abfe-364e-48cc-8348-72b6b68b40c0.png" 
              alt="LimeWire stage at Metaverse Music Festival 2022" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                TRIX Studio x LimeWire Present
              </h3>
              <p className="text-white/80 text-lg">
                The Future of Live Music at <span className="font-semibold">Metaverse Music Festival 2022</span>
              </p>
              
              <div className="border border-white/10 bg-white/5 p-6 rounded-md">
                <h4 className="text-xl font-semibold text-white mb-4">Experience Highlights</h4>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🎤</span>
                    <span>Exclusive performances & artist showcases, headlined by Soulja Boy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🎥</span>
                    <span>World premiere of "LimeWire", Soulja Boy's latest music video</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">👟</span>
                    <span>Cutting-edge wearable collection with A$AP MOB, Soulja Boy, and GAIAN</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🚀</span>
                    <span>Digital sneakers with utility—VIP access to a levitating section at center stage</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <a 
                  href="https://www.youtube.com/watch?v=F_TE87eskaI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#8eff8e] text-black rounded-md hover:bg-[#7aef7a] transition-colors"
                >
                  <span className="mr-2">Festival Highlights</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {/* First row */}
              <div className="aspect-video overflow-hidden rounded-md">
                <img 
                  src="/lovable-uploads/6be299f3-130a-4c26-bc6a-f06d80193952.png" 
                  alt="Avatar with neon outfit at LimeWire stage" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-md">
                <img 
                  src="/lovable-uploads/ca38a666-6653-4655-a148-6e6e195d3eb3.png" 
                  alt="Avatars at Soulja Boy performance in Decentraland" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Second row */}
              <div className="aspect-video overflow-hidden rounded-md">
                <img 
                  src="/lovable-uploads/b49ec615-cfe9-43df-a078-0fdeb25f93a2.png" 
                  alt="VIP area with avatars at LimeWire stage" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-md">
                <img 
                  src="/lovable-uploads/f572abfe-364e-48cc-8348-72b6b68b40c0.png" 
                  alt="Soulja Boy performance on the digital stage" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 text-white/80 bg-white/5 p-6 rounded-md border border-white/10">
            <p className="text-lg">
              By fusing music, fashion, and virtual world-building, this event proved that the metaverse isn't just for viewing—it's for living, interacting, and experiencing music in ways never before imagined.
            </p>
            <p className="text-lg font-semibold mt-4">
              🚀 Welcome to the Future of Live Music. And We're Just Getting Started.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web3;
