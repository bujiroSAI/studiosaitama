'use client';

import { useEffect, useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Cpu } from 'lucide-react';

export function ValueSection3() {
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
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center px-6 py-12 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-green-400/10 to-cyan-400/10 rounded-full blur-3xl parallax-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full blur-2xl parallax-medium" />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              <div className="aspect-square relative overflow-hidden rounded-3xl tech-glass">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=800&fit=crop"
                  alt="AI technology visualization"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-cyan-400/20" />
                
                {/* Floating icon */}
                <div className="absolute top-8 left-8 w-16 h-16 tech-glass rounded-2xl flex items-center justify-center animate-tech-pulse">
                  <Cpu className="w-8 h-8 text-green-400" />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-400/20 to-cyan-400/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full blur-lg" />
            </div>
          </div>

          {/* Right - Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'animate-slide-in-right animation-delay-200' : 'opacity-0 translate-x-10'
          }`}>
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm text-green-400 tech-interactive px-3 py-1 rounded-full border border-green-400/30 bg-green-400/10">
                  [03]
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
                <span className="block text-white/40 uppercase tracking-wider text-lg mb-2">NEXT EVOLUTION</span>
                <span className="block text-white uppercase tracking-wide">POWERED</span>
                <span className="block tech-gradient-text uppercase tracking-wide">BY AI</span>
              </h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full" />
              
              <div className="space-y-4 text-white/80 leading-relaxed max-w-xl">
                <p className="text-lg">
                  AIの力で新しい価値を創造し、人間の創造性を拡張する革新的なソリューションを提供します。
                </p>
                <p>
                  最新のAI技術を活用して、従来では不可能だった複雑な課題を解決し、
                  クリエイティブなプロセスを効率化しながら品質を向上させます。
                </p>
                <p>
                  人工知能と人間の知性を融合させることで、
                  これまでにない価値創造とイノベーションの実現を目指します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}