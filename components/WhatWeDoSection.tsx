'use client';

import { useEffect, useRef, useState } from 'react';
import { Palette, Lightbulb, TrendingUp, Code } from 'lucide-react';

const services = [
  {
    title: 'Creative Direction',
    description: 'ブランドの本質を見つめ、独創的なクリエイティブを提供',
    icon: Palette
  },
  {
    title: 'AI Integration',
    description: '最新のAI技術を活用したソリューション開発',
    icon: Code
  },
  {
    title: 'Marketing Strategy',
    description: 'データドリブンなマーケティング戦略の立案・実行',
    icon: TrendingUp
  },
  {
    title: 'Innovation Consulting',
    description: '新しい価値創造のためのイノベーション支援',
    icon: Lightbulb
  }
];

export function WhatWeDoSection() {
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
    <section id="what-we-do" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl gradient-text mb-4">What We Do</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            私たちが提供するサービス・事業領域
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`glass-morphism glass-morphism-hover p-8 transition-all duration-1000 ${
                  isVisible 
                    ? 'animate-glass-appear opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-10'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-3 text-white">
                      {service.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}