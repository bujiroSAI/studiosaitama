'use client';

import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/3 w-36 h-36 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full blur-3xl parallax-slow" />
      <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl parallax-medium" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="tech-glass p-8 md:p-12 tech-glass-hover tech-mouse-track">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div className="tech-interactive">
              <h3 className="text-2xl tech-gradient-text mb-4">STUDIO SAITAMA</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                AI/テクノロジー/マーケティング/クリエイティブの力を横断して、
                冷めかけた熱を、もう一度育て直す会社
              </p>
              <div className="text-3xl animate-tech-pulse">🦏💨</div>
            </div>

            {/* Contact Info */}
            <div className="tech-interactive">
              <h4 className="text-lg text-white mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>contact@studiosaitama.com</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+81-XX-XXXX-XXXX</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80 hover:text-cyan-400 transition-colors">
                  <MapPin className="w-4 h-4" />
                  <span>Saitama, Japan</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="tech-interactive">
              <h4 className="text-lg text-white mb-4">Services</h4>
              <ul className="space-y-2 text-white/80">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Creative Direction</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">AI Integration</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Marketing Strategy</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">Innovation Consulting</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-cyan-400/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 Studio Saitama. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-cyan-400 transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
        
        {/* Back to top button */}
        <div className="text-center mt-8">
          <button 
            onClick={scrollToTop}
            className="tech-glass tech-glass-hover p-4 rounded-full tech-interactive tech-mouse-track group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}