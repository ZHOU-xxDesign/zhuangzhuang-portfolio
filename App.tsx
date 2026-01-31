
import React, { useEffect, useState } from 'react';
import BrowserMock from './components/BrowserMock';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import AboutPage from './components/AboutPage';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      // If navigating to home with an anchor, allow browser to scroll
      if (window.location.hash === '' || window.location.hash === '#/') {
          window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isAboutPage = currentHash === '#/about';

  return (
    <div className={`bg-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <BrowserMock />
      
      <main>
        {isAboutPage ? (
          <AboutPage />
        ) : (
          <div className="animate-fade-in">
            {/* Section 1: Hero */}
            <Hero />

            {/* Section 2: Projects */}
            <section id="works" className="bg-white px-4 md:px-12 lg:px-16 py-40 border-t border-gray-50 scroll-mt-12">
              <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end">
                <div className="mb-8 md:mb-0">
                  <div className="flex items-baseline gap-1">
                    <p className="text-4xl md:text-6xl font-mono-tech font-bold tracking-tighter leading-none">
                      Selected Projects.
                    </p>
                    <span className="w-3 h-8 md:w-4 md:h-12 bg-black animate-pulse"></span>
                  </div>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-gray-300 font-mono-tech">
                  (001 — 00{PROJECTS.length})
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-x-4 lg:gap-x-6 gap-y-16">
                {PROJECTS.map((project, index) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index} 
                  />
                ))}
              </div>
            </section>

            {/* Section 3: Refined Aesthetic Footer */}
            <footer id="about" className="bg-white pt-32 border-t border-gray-50 flex flex-col min-h-screen scroll-mt-12">
              {/* Top Level: Brand and Narrative */}
              <div className="px-6 md:px-16 flex flex-col md:flex-row justify-between items-start w-full">
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-16">
                  <h2 className="text-2xl font-bold tracking-tighter font-mono-tech">
                    zhuangzhuang·
                  </h2>
                  <div className="text-[12px] md:text-[14px] leading-relaxed text-black/60 font-medium max-w-[280px]">
                    Whether you’re looking to collaborate<br />
                    or simply want to chat about the magic<br />
                    of visual storytelling, drop us<br />
                    a line.
                  </div>
                </div>

                {/* Portrait Image */}
                <div className="mt-12 md:mt-0 md:pr-24 lg:pr-40">
                  <div className="w-48 h-64 md:w-64 md:h-80 bg-gray-100 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                      alt="Designer Portrait" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Level: Brand-Aligned Contact Information */}
              <div className="mt-auto pt-40 w-full">
                <div id="contact" className="w-full px-4 md:px-8 flex flex-col scroll-mt-24">
                  {/* Email with brand font (Mono), larger size, and staggered alignment */}
                  <a 
                    href="mailto:zhouxiaoxuzxx@126.com" 
                    className="group block font-mono-tech font-bold tracking-tighter lowercase hover:text-gray-400 transition-colors duration-500"
                  >
                    <span className="block text-[14vw] md:text-[13vw] text-left leading-[0.85]">
                      zhouxiaoxuzxx
                    </span>
                    <span className="block text-[14vw] md:text-[13vw] text-right mt-[-1vw] leading-[0.85]">
                      @126.com
                    </span>
                  </a>
                </div>
                
                <div className="mt-24 mb-10 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-[0.4em] text-gray-300 font-mono-tech">
                  <span>Barcelona — Global</span>
                  <span>© 2025 Creative Studio</span>
                  <span>Designed with Intent</span>
                </div>
              </div>
            </footer>
          </div>
        )}
      </main>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        html {
          scroll-behavior: smooth;
        }
        ::selection {
          background-color: #000;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default App;
