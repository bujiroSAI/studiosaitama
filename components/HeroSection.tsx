'use client';

import { useEffect, useRef, useState } from 'react';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen flex flex-col relative overflow-hidden px-6 py-12"
    >
      {/* Top Left Content */}
      <div className={`absolute top-16 left-8 z-10 max-w-md transition-all duration-1000 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
          <span className="blue-gradient-text block">
            Discover the WAVE you need,
          </span>
          <span className="blue-gradient-text block">
            and feel the New WAVE.
          </span>
          <span className="text-gray-700 block mt-4">
            We consider your
          </span>
          <span className="blue-gradient-text block">
            Daily Life
          </span>
        </h1>
        
        <p className="text-gray-600 text-lg leading-relaxed mt-6">
          당신의 일상을 깊이 생각하며, 자연의 힘으로 건강과 그들의 자와
        </p>
      </div>

      {/* Central 3D Model Circle */}
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-1500 ${
        isVisible ? 'animate-fade-in-up animation-delay-400' : 'opacity-0 translate-y-10'
      }`}>
        <div className="relative">
          {/* Main Circle */}
          <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-2xl flex items-center justify-center relative overflow-hidden">
            {/* Subtle inner glow */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-50/50 to-white/30"></div>
            
            {/* 3D Model Placeholder */}
            <div className="w-full h-full flex items-center justify-center relative z-10">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/40 rounded-full"></div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">3D Model will be here</p>
              </div>
            </div>
            
            {/* Subtle rotating ring */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-100/30 animate-spin" style={{ animationDuration: '20s' }}></div>
          </div>
          
          {/* Floating accent elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full animate-gentle-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-400/15 rounded-full animate-gentle-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Bottom Large Logo */}
      <div className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-2000 ${
        isVisible ? 'animate-fade-in-up animation-delay-800' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] blue-gradient-text leading-none tracking-wider">
          HILOWAVE
        </h2>
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent mt-4"></div>
      </div>

      {/* Subtle decorative elements */}
      <div className={`absolute inset-0 pointer-events-none transition-all duration-2000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* Corner accents */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-blue-200/30"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-blue-200/30"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-blue-200/30"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-blue-200/30"></div>
        
        {/* Floating accent dots */}
        <div className="absolute top-1/4 left-16 w-2 h-2 bg-blue-400/40 rounded-full animate-gentle-pulse"></div>
        <div className="absolute top-3/4 right-16 w-3 h-3 bg-blue-300/30 rounded-full animate-gentle-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-blue-500/20 rounded-full animate-gentle-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
    </section>
  );
}