import { useEffect, useRef, useState } from 'react';

interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
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
      className="min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden"
    >
      {/* Content */}
      <div className={`text-center z-10 transition-all duration-1000 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] text-main tracking-wider leading-none select-none">
          {title}
        </h1>
      </div>

      {/* Decorative elements */}
      <div className={`absolute inset-0 pointer-events-none transition-all duration-1500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* Subtle corner accents */}
        <div className="absolute top-12 left-12 w-20 h-20 border-l-2 border-t-2 border-blue-200/20"></div>
        <div className="absolute top-12 right-12 w-20 h-20 border-r-2 border-t-2 border-blue-200/20"></div>
        <div className="absolute bottom-12 left-12 w-20 h-20 border-l-2 border-b-2 border-blue-200/20"></div>
        <div className="absolute bottom-12 right-12 w-20 h-20 border-r-2 border-b-2 border-blue-200/20"></div>
        
        {/* Floating accent dots */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400/20 rounded-full animate-gentle-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-blue-300/15 rounded-full animate-gentle-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-3/4 w-2 h-2 bg-blue-500/10 rounded-full animate-gentle-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
}