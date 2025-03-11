import React from "react";
import { ExternalLink, Youtube, Link } from "lucide-react";
import VideoPreview from "./VideoPreview";

const Web3 = () => {
  return (
    <section id="web3Section" className="py-24 animate-on-scroll bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12">
          <span className="text-sm uppercase tracking-widest text-white/60 mb-2 inline-block">Web3</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">EXPANDING THE BOUNDARIES</h2>
          <p className="mt-4 text-lg max-w-3xl text-white/80">
            TRIX is pioneering the next frontier of entertainment through groundbreaking Web3 integrations, 
            metaverse experiences, and blockchain innovations that bridge the gap between digital and physical realms.
          </p>
        </div>

        <div className="mb-16">
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

        <div className="mt-24">
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
                LimeWire Festival
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
            </div>
            
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4">
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
                <div className="aspect-video overflow-hidden rounded-md">
                  <img 
                    src="/lovable-uploads/b49ec615-cfe9-43df-a078-0fdeb25f93a2.png" 
                    alt="VIP area with avatars at LimeWire stage" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-video overflow-hidden rounded-md">
                  <img 
                    src="/lovable-uploads/62872d6a-24f2-4c96-a8b6-6aa9975c8306.png" 
                    alt="Avatar with LimeWire logo jacket at the event" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <a 
                  href="https://youtu.be/0TD53-FSCH0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#8eff8e] text-black rounded-md hover:bg-[#7aef7a] transition-colors w-full justify-center"
                >
                  <Youtube size={16} className="mr-2" />
                  <span>Behind the Scenes</span>
                </a>

                <a 
                  href="https://youtu.be/3fn3rYsafxg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#8eff8e] text-black rounded-md hover:bg-[#7aef7a] transition-colors w-full justify-center"
                >
                  <Youtube size={16} className="mr-2" />
                  <span>Full Performance</span>
                </a>

                <a 
                  href="https://www.billboard.com/pro/decentraland-metaverse-festival-lineup-2022/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#8eff8e] text-black rounded-md hover:bg-[#7aef7a] transition-colors w-full justify-center"
                >
                  <Link size={16} className="mr-2" />
                  <span>Press Coverage</span>
                </a>
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

        {/* New TRIX Studio x Gaian section */}
        <div className="mt-24">
          <div className="mb-12 overflow-hidden rounded-lg">
            <img 
              src="/lovable-uploads/1e16b05b-ff37-4f47-a796-e00389e7c86c.png" 
              alt="Gaian storefront at Metaverse Fashion Week 2023" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Gaian Store
              </h3>
              <p className="text-white/80 text-lg">
                The Future of Fashion at <span className="font-semibold">Metaverse Fashion Week 2023</span>
              </p>
              
              <div className="border border-white/10 bg-white/5 p-6 rounded-md">
                <h4 className="text-xl font-semibold text-white mb-4">Key Highlights</h4>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="text-xl mr-2">⚡</span>
                    <span>Interactive energy-reactive flooring, mirroring Gaian's real-world innovation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🛍️</span>
                    <span>Exclusive digital merch drops & giveaways, bringing wearable tech into the metaverse</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🎶</span>
                    <span>A stacked afterparty lineup, celebrating the fusion of music, fashion, and technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-xl mr-2">🕺</span>
                    <span>A virtual dancefloor that kept the metaverse moving all night long</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-video overflow-hidden rounded-md">
                  <img 
                    src="/lovable-uploads/26e92659-fa80-4a12-b107-4d33d1548d3b.png" 
                    alt="Avatar with glowing electric sneakers at Gaian store" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-video overflow-hidden rounded-md">
                  <img 
                    src="/lovable-uploads/a609af72-6e54-44e7-8c17-e98f250e20fc.png" 
                    alt="Glowing avatar with energy wings at Gaian event" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-video overflow-hidden rounded-md">
                  <img 
                    src="/lovable-uploads/f5253ddd-a224-4781-aaf1-6efa3d5561d2.png" 
                    alt="Crowd of avatars at Gaian fashion afterparty" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-video overflow-hidden rounded-md">
                  <img 
                    src="/lovable-uploads/3868f546-e01e-4f2a-9e3a-5a4f04f4dd15.png" 
                    alt="Avatars dancing on energy-reactive floor" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="aspect-video overflow-hidden rounded-md">
                  <img 
                    src="/lovable-uploads/7a79e4c8-6ea9-4911-9568-de984c7dd567.png" 
                    alt="View of the Gaian store from outside" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-video overflow-hidden rounded-md">
                  <img 
                    src="/lovable-uploads/0df37cc1-b957-4604-bcd8-333659135eef.png" 
                    alt="Avatars with glowing wearables at the afterparty" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-white/80 bg-white/5 p-6 rounded-md border border-white/10">
            <p className="text-lg">
              For Metaverse Fashion Week 2023, TRIX Studio partnered with Gaian, the groundbreaking wearable tech company behind the world's first energy-generating sneaker, to design and build an innovative virtual store in Decentraland.
            </p>
            <p className="text-lg mt-4">
              Inspired by Gaian's cutting-edge technology, we created a fully immersive retail experience, where the floors of the store generated energy sparks as visitors walked, bringing the brand's mission to life in the metaverse.
            </p>
            <p className="text-lg mt-4">
              But we didn't stop there. To close out Fashion Week, TRIX Studio produced the official afterparty, curating a high-energy lineup of artists and throwing a digital event that had avatars dancing all night long.
            </p>
            <p className="text-lg mt-4">
              This event proved that fashion isn't just something you wear—it's something you experience. And in the metaverse, the possibilities are limitless.
            </p>
            <p className="text-lg font-semibold mt-4">
              🚀 The Future of Wearable Tech is Here. And It's Electrifying.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web3;
