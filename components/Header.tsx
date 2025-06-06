'use client';

import { useState, useEffect } from 'react';
import { Home, Instagram, FileText, Users, Briefcase, Phone, Zap } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationItems = [
    { icon: Home, id: 'home', label: 'Home' },
    { icon: Instagram, id: 'social', label: 'Social' },
    { icon: FileText, id: 'philosophy-title', label: 'Philosophy' },
    { icon: FileText, id: 'values-1', label: 'Values' },
    { icon: Briefcase, id: 'what-we-do', label: 'Services' },
    { icon: Zap, id: 'innovation-lab', label: 'Innovation' },
    { icon: Briefcase, id: 'works-title', label: 'Works' },
    { icon: Users, id: 'member', label: 'Member' },
    { icon: Phone, id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Centered Navigation Bar with Logo */}
      <div className="flex justify-center pt-6">
        <nav className="clean-glass-nav px-8 py-4">
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="text-lg tracking-wider text-blue-600 hover:text-blue-700 transition-colors cursor-pointer px-3 py-2 rounded-full hover:bg-blue-50/50 clean-interactive"
            >
              STUDIO SAITAMA
            </button>
            
            {/* Separator */}
            <div className="w-px h-8 bg-blue-200/50"></div>
            
            {/* Navigation Icons */}
            <div className="flex items-center space-x-2">
              {navigationItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="p-3 rounded-full text-blue-500 hover:text-blue-700 hover:bg-blue-50/50 transition-all duration-200 group relative clean-interactive"
                    aria-label={item.label}
                  >
                    <Icon className="w-5 h-5" />
                    
                    {/* Tooltip */}
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      <div className="bg-blue-800/90 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                        {item.label}
                      </div>
                      <div className="w-2 h-2 bg-blue-800/90 transform rotate-45 absolute -top-1 left-1/2 -translate-x-1/2"></div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Button - Bottom Right */}
      <button className="md:hidden fixed bottom-6 right-6 clean-glass p-4 rounded-full text-blue-500 hover:text-blue-700 transition-colors z-50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
}