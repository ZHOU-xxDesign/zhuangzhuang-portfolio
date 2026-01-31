
import React from 'react';
import { NAV_ITEMS } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white animate-fade-in">
      {/* Navigation - Same as Hero for consistency */}
      <nav className="pt-10 w-full px-8 md:px-16 flex justify-between items-center z-10">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[14px] md:text-[16px] uppercase tracking-[0.4em] font-mono-tech font-bold text-black hover:opacity-50 transition-all duration-300"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <main className="px-8 md:px-16 py-24">
        {/* Title */}
        <div className="mb-24">
          <h1 className="text-[120px] md:text-[200px] font-handwritten italic -skew-x-6 leading-none">
            -about.
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Column: Mission/Bio */}
          <div className="md:col-span-7">
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-mono-tech mb-8 text-gray-400">Philosophy / 01</h2>
            <p className="text-2xl md:text-4xl font-light leading-snug tracking-tight mb-12">
              We believe in the power of <span className="font-bold">subtraction</span>. By removing the unnecessary, we reveal the soul of the design.
            </p>
            <div className="text-sm md:text-base leading-relaxed text-gray-600 max-w-xl space-y-6">
              <p>
                Based in Barcelona, zhuangzhuang is a multidisciplinary creative studio focused on architectural visualization, digital experiences, and minimalist aesthetics. 
              </p>
              <p>
                Our approach is rooted in the belief that design should be felt, not just seen. Every line, every void, and every shadow serves a purpose in the narrative of space.
              </p>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="md:col-start-9 md:col-span-4 space-y-16">
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.4em] font-mono-tech mb-6 text-gray-400">Capabilities</h2>
              <ul className="text-xs md:text-sm uppercase tracking-widest space-y-3 font-mono-tech">
                <li>Art Direction</li>
                <li>Visual Identity</li>
                <li>Digital Architecture</li>
                <li>UI / UX Design</li>
                <li>3D Visualization</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[10px] uppercase tracking-[0.4em] font-mono-tech mb-6 text-gray-400">Selected Clients</h2>
              <ul className="text-xs md:text-sm uppercase tracking-widest space-y-3 font-mono-tech">
                <li>Obsidian Collective</li>
                <li>Horizon Studio</li>
                <li>The White Box Co.</li>
                <li>Minimalist Lab</li>
              </ul>
            </div>

            <div className="pt-8">
              <a href="/#" className="group inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-mono-tech font-bold">
                <span className="w-10 h-[1px] bg-black group-hover:w-16 transition-all"></span>
                Back to Home
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Image */}
        <div className="mt-32 w-full aspect-[21/9] overflow-hidden grayscale">
            <img 
                src="https://images.unsplash.com/photo-1506443431352-2f7f8d3d8d6c?auto=format&fit=crop&q=80&w=2000&sat=-100" 
                alt="Studio Atmosphere" 
                className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity duration-1000"
            />
        </div>
      </main>

      <footer className="px-8 md:px-16 py-12 flex justify-between items-center text-[9px] uppercase tracking-[0.4em] text-gray-300 font-mono-tech">
          <span>Barcelona — Global</span>
          <span>© 2025 Creative Studio</span>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
