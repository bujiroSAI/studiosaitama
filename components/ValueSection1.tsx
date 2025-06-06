'use client';

import { useEffect, useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Zap } from 'lucide-react';

export function ValueSection1() {
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
      <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full blur-3xl parallax-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl parallax-medium" />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              <div className="aspect-square relative overflow-hidden rounded-3xl tech-glass">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=800&h=800&fit=crop"
                  alt="Alternative thinking visualization"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20" />
                
                {/* Floating icon */}
                <div className="absolute top-8 left-8 w-16 h-16 tech-glass rounded-2xl flex items-center justify-center animate-tech-pulse">
                  <Zap className="w-8 h-8 text-cyan-400" />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-lg" />
            </div>
          </div>

          {/* Right - Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'animate-slide-in-right animation-delay-200' : 'opacity-0 translate-x-10'
          }`}>
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm text-cyan-400 tech-interactive px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/10">
                  [01]
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
                <span className="block text-white/40 uppercase tracking-wider text-lg mb-2">IDEAL FUSION</span>
                <span className="block text-white uppercase tracking-wide">BET</span>
                <span className="block tech-gradient-text uppercase tracking-wide">ALTERNATIVE</span>
              </h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
              
              <div className="space-y-4 text-white/80 leading-relaxed max-w-xl">
                <p className="text-lg">
                  主流ではない選択肢に賭ける勇気が、革新的なソリューションを生み出します。
                </p>
                <p>
                  従来の枠組みにとらわれることなく、新しい可能性を探求し、誰も歩んだことのない道を切り拓いていく。
                  それが私たちの創造力の源泉です。
                </p>
                <p>
                  時代の変化を先読みし、リスクを恐れずに挑戦することで、
                  真に価値のあるイノベーションを実現します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}