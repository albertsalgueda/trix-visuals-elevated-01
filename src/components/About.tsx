
import React from "react";

const About = () => {
  return (
    <section 
      id="about" 
      className="py-4 px-6 md:px-12 -mt-20 animate-on-scroll bg-black text-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <span className="text-sm uppercase tracking-widest text-white/60 mb-2 inline-block">About</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">WHO WE ARE</h2>
          </div>
          
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-display font-semibold mb-3">Our Approach</h3>
                <p className="text-white/80">
                  We merge technical innovation with artistic vision to create work that resonates 
                  with audiences and stands the test of time.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-display font-semibold mb-3">Our Mission</h3>
                <p className="text-white/80">
                  To push the boundaries of visual storytelling and create iconic moments 
                  in music video history.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Founder Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-16">
          <div className="md:col-span-5">
            <span className="text-sm uppercase tracking-widest text-white/60 mb-2 inline-block">Founder</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">YASHA GRUBEN</h2>
          </div>
          
          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed mb-6">
              Yasha Gruben is a New York native and visionary director with roots in Brooklyn's vibrant music scene. 
              He launched his career collaborating with local talent before his relentless drive propelled him into 
              higher-budget productions with major record labels and influential artists.
            </p>
            
            <p className="text-lg leading-relaxed">
              Now based between NYC and LA, Yasha continues to craft visually striking, culturally resonant music videos. 
              His work fuses authentic storytelling, cutting-edge visuals, and an unwavering passion for music, 
              solidifying his place as a director shaping the future of music video cinema.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
