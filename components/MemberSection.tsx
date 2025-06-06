'use client';

import { useEffect, useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const members = [
  {
    name: '田中 大輔',
    role: 'CEO / Creative Director',
    bio: 'クリエイティブディレクションとビジネス戦略を担当。10年以上のブランディング経験を持つ。',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: '佐藤 美咲',
    role: 'CTO / AI Engineer',
    bio: 'AI技術開発とシステムアーキテクチャを担当。機械学習とデータサイエンスの専門家。',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: '鈴木 拓也',
    role: 'Marketing Director',
    bio: 'マーケティング戦略とブランディングを担当。デジタルマーケティングのエキスパート。',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: '山田 彩香',
    role: 'UI/UX Designer',
    bio: 'ユーザーインターフェースとユーザー体験のデザインを担当。人間中心設計のスペシャリスト。',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: '高橋 健太',
    role: 'Full Stack Developer',
    bio: 'フロントエンドからバックエンドまで幅広く開発を担当。モダンWeb技術の専門家。',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face'
  }
];

export function MemberSection() {
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
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center px-6 py-12 relative">
      {/* Parallax background elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full blur-3xl parallax-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl parallax-medium" />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl tech-gradient-text mb-4 tech-mouse-track tech-interactive">Member</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            私たちのチームメンバー<br />
            多様な専門性を持つプロフェッショナルが集結
          </p>
        </div>

        {/* Responsive grid layout for 5 members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {members.map((member, index) => (
            <div
              key={member.name}
              className={`tech-glass tech-glass-hover p-6 text-center transition-all duration-1000 tech-mouse-track tech-interactive ${
                isVisible 
                  ? 'animate-glass-appear opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-cyan-400 to-purple-400 p-1 animate-tech-glow">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              
              <h3 className="text-lg lg:text-xl mb-2 text-white">
                {member.name}
              </h3>
              
              <p className="text-cyan-300 mb-3 text-xs lg:text-sm">
                {member.role}
              </p>
              
              <p className="text-white/80 text-xs lg:text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Alternative layout for medium screens - 2 rows */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-3 gap-6 mb-6">
            {members.slice(0, 3).map((member, index) => (
              <div
                key={`row1-${member.name}`}
                className={`tech-glass tech-glass-hover p-6 text-center transition-all duration-1000 tech-mouse-track tech-interactive ${
                  isVisible 
                    ? 'animate-glass-appear opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-cyan-400 to-purple-400 p-1 animate-tech-glow">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl mb-2 text-white">
                  {member.name}
                </h3>
                
                <p className="text-cyan-300 mb-3 text-sm">
                  {member.role}
                </p>
                
                <p className="text-white/80 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
            {members.slice(3, 5).map((member, index) => (
              <div
                key={`row2-${member.name}`}
                className={`tech-glass tech-glass-hover p-6 text-center transition-all duration-1000 tech-mouse-track tech-interactive ${
                  isVisible 
                    ? 'animate-glass-appear opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-cyan-400 to-purple-400 p-1 animate-tech-glow">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                
                <h3 className="text-xl mb-2 text-white">
                  {member.name}
                </h3>
                
                <p className="text-cyan-300 mb-3 text-sm">
                  {member.role}
                </p>
                
                <p className="text-white/80 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}