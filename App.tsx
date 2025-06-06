'use client';

import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SectionTitle } from './components/SectionTitle';
import { MessageSection } from './components/MessageSection';
import { ValueSection1 } from './components/ValueSection1';
import { ValueSection2 } from './components/ValueSection2';
import { ValueSection3 } from './components/ValueSection3';
import { WhatWeDoSection } from './components/WhatWeDoSection';
import { ImageHeroSection } from './components/ImageHeroSection';
import { WorksSection } from './components/WorksSection';
import { MemberSection } from './components/MemberSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

const sections = [
  { id: 'hero', component: HeroSection },
  { id: 'philosophy-title', component: () => <SectionTitle title="PHILOSOPHY" /> },
  { id: 'message', component: MessageSection },
  { id: 'values-1', component: ValueSection1 },
  { id: 'values-2', component: ValueSection2 },
  { id: 'values-3', component: ValueSection3 },
  { id: 'what-we-do', component: WhatWeDoSection },
  { id: 'works-title', component: () => <SectionTitle title="WORKS" /> },
  { id: 'innovation-lab', component: ImageHeroSection },
  { id: 'works', component: WorksSection },
  { id: 'member', component: MemberSection },
  { id: 'contact', component: ContactSection },
];

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    // Load Google Fonts
    const link1 = document.createElement('link');
    link1.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap';
    link1.rel = 'stylesheet';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.href = 'https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap';
    link2.rel = 'stylesheet';
    document.head.appendChild(link2);

    // Mouse tracking effect
    const handleMouseMove = (e: MouseEvent) => {
      const elements = document.querySelectorAll('.mouse-track, .tech-mouse-track');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        (element as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
        (element as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
      });
    };

    // Parallax scroll effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-medium, .parallax-fast');
      
      parallaxElements.forEach((element) => {
        const speed = element.classList.contains('parallax-slow') ? 0.2 :
                     element.classList.contains('parallax-medium') ? 0.5 : 0.8;
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });

      // Update current section indicator
      const sectionHeight = window.innerHeight;
      const newCurrentSection = Math.round(scrolled / sectionHeight);
      setCurrentSection(Math.min(Math.max(newCurrentSection, 0), sections.length - 1));
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(link1);
      document.head.removeChild(link2);
    };
  }, []);

  const scrollToSection = (sectionIndex: number) => {
    const sectionHeight = window.innerHeight;
    window.scrollTo({
      top: sectionIndex * sectionHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen relative">
      {/* Premium White & Blue Background */}
      <div className="premium-bg" />
      
      {/* Fixed Header */}
      <Header />
      
      {/* Scroll Progress Indicator */}
      <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50">
        <div className="flex flex-col gap-3">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                currentSection === index
                  ? 'bg-blue-500 border-blue-500'
                  : 'bg-transparent border-gray-400/30 hover:border-gray-600/60'
              }`}
              aria-label={`Go to ${section.id} section`}
            />
          ))}
          <button
            onClick={() => scrollToSection(sections.length)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              currentSection === sections.length
                ? 'bg-blue-500 border-blue-500'
                : 'bg-transparent border-gray-400/30 hover:border-gray-600/60'
            }`}
            aria-label="Go to footer"
          />
        </div>
      </div>
      
      {/* Main Content with Scroll Snap */}
      <main className="snap-container">
        {sections.map((section, index) => {
          const SectionComponent = section.component;
          return (
            <div
              key={section.id}
              id={section.id}
              className="snap-section"
            >
              <SectionComponent />
            </div>
          );
        })}
        
        {/* Footer as last snap section */}
        <div id="footer" className="snap-section">
          <Footer />
        </div>
      </main>
      
      {/* Toast Notifications */}
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            color: '#1f2937',
          },
        }}
      />
    </div>
  );
}