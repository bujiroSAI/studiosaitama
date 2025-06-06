'use client';

import { useEffect, useRef, useState } from 'react';
import { Zap, Users, Cpu } from 'lucide-react';

const values = [
  {
    title: 'bet alternative',
    description: '主流ではない選択肢に賭ける',
    icon: Zap,
    gradient: 'from-purple-400 to-pink-400'
  },
  {
    title: 'rep small team',
    description: '小さなチームの可能性を代表する',
    icon: Users,
    gradient: 'from-blue-400 to-cyan-400'
  },
  {
    title: 'powered by ai',
    description: 'AIの力で新しい価値を創造',
    icon: Cpu,
    gradient: 'from-green-400 to-blue-400'
  }
];

export function ValuesSection() {
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
    <section id="values" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl gradient-text mb-4">Values</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            私たちが大切にする3つの価値観
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className={`glass-morphism glass-morphism-hover p-8 text-center transition-all duration-1000 ${
                  isVisible 
                    ? 'animate-glass-appear opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl mb-4 text-white tracking-wide">
                  {value.title}
                </h3>
                
                <p className="text-white/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}