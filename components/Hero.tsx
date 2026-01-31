
import React from 'react';
import { NAV_ITEMS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Navigation - Positioned with contact left, works center, about right */}
      <nav className="absolute top-10 w-full px-8 md:px-16 flex justify-between items-center z-10">
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

      {/* Main Content */}
      <div className="flex flex-col items-center">
        <h1 className="text-[160px] md:text-[280px] lg:text-[380px] font-handwritten italic -skew-x-6 select-none animate-fade-in-up leading-[0.8]">
          -hello.
        </h1>
      </div>

      {/* Footer Decoration - Brand Mark */}
      <div className="absolute bottom-12 left-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="relative group">
          <p className="text-4xl md:text-5xl font-mono-tech font-bold tracking-tighter lowercase transition-all duration-300 group-hover:tracking-normal">
            zhuangzhuang<span className="inline-block w-3 h-8 md:w-4 md:h-10 bg-black ml-1 align-middle animate-pulse"></span>
          </p>
          <div className="absolute -top-4 left-0 text-[10px] font-mono-tech text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
            [studio_dev_v2.0]
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
        <svg 
          width="14" 
          height="14" 
          viewBox="0 0 14 14" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-black"
        >
          <path d="M7 10L1 4H13L7 10Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
