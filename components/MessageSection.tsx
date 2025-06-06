'use client';

import { useEffect, useRef, useState } from 'react';

export function MessageSection() {
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
    <section ref={sectionRef} className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      {/* Parallax background elements */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full blur-3xl parallax-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-pink-400/10 rounded-full blur-2xl parallax-medium" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12 tech-mouse-track tech-interactive">
            <h2 className="text-3xl md:text-4xl tech-gradient-text mb-4">Message</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
          </div>
          
          <div className="space-y-8 text-white/90 leading-relaxed">
            <p className={`text-xl md:text-2xl tech-mouse-track tech-interactive ${
              isVisible ? 'animate-slide-in-left animation-delay-200' : ''
            }`}>
              「それ、意味あるの？」って言われることに、どこか惹かれてしまう。
            </p>
            
            <div className={`tech-glass p-8 tech-glass-hover tech-mouse-track ${
              isVisible ? 'animate-slide-in-right animation-delay-400' : ''
            }`}>
              <p className="text-lg md:text-xl">
                効率とか、正解とか、そういうものを追い求める中で、<br />
                静かに失われていったコトがあると思っている。<br />
                スタジオサイタマは、そうした曖昧で扱いづらいものごとに、<br />
                もう一度ちゃんと向き合ってみたい。<br />
                "手間がかかるけれど面白い"とか、"理由はうまく言えないけど好き"とか。
              </p>
            </div>
            
            <p className={`text-lg md:text-xl tech-mouse-track tech-interactive ${
              isVisible ? 'animate-slide-in-left animation-delay-600' : ''
            }`}>
              その中にこそ、人々の熱狂や、文化の芽のような、大切な価値がある気がしてならない。<br />
              そして、それはこれからの日本にとって、いちばん必要なものだとも信じている。
            </p>
            
            <div className={`tech-glass p-8 tech-glass-hover tech-mouse-track ${
              isVisible ? 'animate-slide-in-right animation-delay-800' : ''
            }`}>
              <p className="text-xl md:text-2xl tech-gradient-text">
                私たちはAI/テクノロジー/マーケティング/クリエイティブの力を横断して、<br />
                冷めかけた熱を、もう一度育て直す会社を目指します。
              </p>
            </div>
            
            <div className={`text-4xl text-center pt-4 tech-interactive ${
              isVisible ? 'animate-fade-in-up animation-delay-1000' : ''
            }`}>
              🦏💨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}