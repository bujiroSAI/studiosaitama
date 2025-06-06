'use client';

import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Calendar, Building2, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Featured works data
const featuredWorks = [
  {
    title: 'Project Alpha',
    description: 'AI技術を活用したブランディングプロジェクト',
    shortDescription: 'AI企業の革新的ブランドアイデンティティを構築。学習プロセスを視覚化したアニメーション要素が高評価。',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
    category: 'Branding',
    client: 'テクノロジー企業A社',
    period: '2024年3月 - 2024年6月',
    duration: '4ヶ月',
    tags: ['ブランディング', 'UI/UX', 'アニメーション', 'コーポレートサイト'],
    fullDescription: 'AI技術の革新的な可能性を表現するブランディングプロジェクト。従来の固定概念を打ち破り、未来志向の企業イメージを構築しました。ロゴデザインからコーポレートサイト、営業資料まで、一貫したブランド体験を提供。特にAIの学習プロセスを視覚化したアニメーション要素が高く評価されました。',
    challenges: '従来のテクノロジー企業とは一線を画すブランドアイデンティティの構築が求められました。AIという抽象的な概念を、どのように視覚的に表現するかが最大の課題でした。',
    solution: 'AIの学習過程を「成長」「進化」「創造」のキーワードで表現。有機的なフォルムと幾何学的な要素を組み合わせ、技術の温かみと革新性を両立させたデザインシステムを構築しました。',
    results: 'ブランド認知度30%向上、企業サイトのコンバージョン率250%改善、業界メディアでの露出機会が大幅に増加しました。'
  },
  {
    title: 'Project Beta', 
    description: 'インタラクティブWebアプリケーション開発',
    shortDescription: '次世代UXを追求したWebアプリ。リアルタイム通信・3D・AI機能を統合し、エンゲージメント400%向上を実現。',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    category: 'Development',
    client: 'スタートアップB社',
    period: '2024年1月 - 2024年4月',
    duration: '4ヶ月',
    tags: ['フロントエンド', 'React', 'Three.js', 'WebGL', 'リアルタイム'],
    fullDescription: '次世代のユーザー体験を追求したWebアプリケーション開発プロジェクト。リアルタイム通信、3Dビジュアライゼーション、AI機能を統合し、従来のWebアプリの概念を覆す革新的なプラットフォームを構築しました。',
    challenges: '高度なインタラクティブ機能と優れたパフォーマンスの両立、さらに直感的なユーザーインターフェースの実現が求められました。',
    solution: 'React、Three.js、WebGL、WebSocketを組み合わせた最新技術スタックを採用。マイクロフロントエンド アーキテクチャにより、機能の独立性とメンテナビリティを確保しました。',
    results: 'ユーザーエンゲージメント400%向上、セッション時間が平均3倍に延長、業界のベストプラクティスとして複数のカンファレンスで紹介されました。'
  }
];

export function ImageHeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedWork, setSelectedWork] = useState<typeof featuredWorks[0] | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
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

  const handleWorkClick = (work: typeof featuredWorks[0]) => {
    setSelectedWork(work);
    setOpenDialog(true);
  };

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen relative flex flex-col justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1920&h=1080&fit=crop"
          alt="Our Works Background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        {/* Tech Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-transparent to-purple-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Title and description */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}>
            {/* Main Title */}
            <div className={`mb-8 ${
              isVisible ? 'animate-slide-in-left animation-delay-200' : ''
            }`}>
              <h2 className="text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight mb-6">
                <span className="block text-white/40 text-lg tracking-wider mb-2">SELECTED</span>
                <span className="block text-white">OUR</span>
                <span className="block tech-gradient-text">WORKS</span>
              </h2>
            </div>

            {/* Description */}
            <div className={`mb-8 max-w-xl ${
              isVisible ? 'animate-slide-in-left animation-delay-400' : ''
            }`}>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-4">
                革新的なソリューションの実績
              </p>
              <p className="text-white/80 leading-relaxed">
                AI技術とクリエイティブが融合した、私たちの代表的なプロジェクトをご紹介します。
                各プロジェクトは独自の課題に対する革新的なアプローチを示しています。
              </p>
            </div>

            {/* Action Button */}
            <div className={`${
              isVisible ? 'animate-slide-in-left animation-delay-600' : ''
            }`}>
              <Button 
                size="lg"
                className="tech-glass tech-glass-hover px-8 py-6 text-lg group tech-interactive"
              >
                <span>VIEW ALL PROJECTS</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right side - Featured project cards */}
          <div className={`space-y-6 transition-all duration-1000 ${
            isVisible ? 'animate-slide-in-right animation-delay-400' : 'opacity-0 translate-x-10'
          }`}>
            {featuredWorks.map((work, index) => (
              <Button
                key={work.title}
                variant="ghost"
                className={`h-auto p-0 tech-glass tech-glass-hover overflow-hidden transition-all duration-1000 cursor-pointer group tech-interactive tech-mouse-track w-full`}
                style={{ animationDelay: `${600 + index * 200}ms` }}
                onClick={() => handleWorkClick(work)}
              >
                <div className="w-full">
                  <div className="flex items-center gap-4 p-4">
                    {/* Project image */}
                    <div className="flex-shrink-0 w-24 h-24 relative overflow-hidden rounded-lg">
                      <ImageWithFallback
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-3 h-3 text-cyan-400" />
                      </div>
                    </div>
                    
                    {/* Project info */}
                    <div className="flex-1 text-left min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-white/20 text-white border-cyan-400/30 text-xs">
                          {work.category}
                        </Badge>
                        <span className="text-xs text-white/60">{work.duration}</span>
                      </div>
                      
                      <h3 className="text-lg mb-2 text-white group-hover:text-cyan-300 transition-colors font-medium">
                        {work.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-2 text-xs text-white/60">
                        <Building2 className="w-3 h-3" />
                        <span>{work.client}</span>
                      </div>
                      
                      <p className="text-white/80 leading-relaxed text-sm line-clamp-2">
                        {work.shortDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-cyan-400/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full blur-3xl animate-tech-pulse" />

      {/* Dialog - Horizontal Layout */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-none w-[96vw] h-[80vh] tech-glass border-cyan-400/20 p-0 overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedWork?.title} - プロジェクト詳細
          </DialogTitle>
          <DialogDescription className="sr-only">
            {selectedWork?.description} - {selectedWork?.client}での{selectedWork?.period}期間のプロジェクト詳細情報
          </DialogDescription>
          
          {selectedWork && (
            <div className="flex h-full">
              {/* Left side - Image (40%) */}
              <div className="w-2/5 relative">
                <ImageWithFallback
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30" />
                <div className="absolute top-6 left-6">
                  <Badge className="bg-white/20 text-white border-cyan-400/30">
                    {selectedWork.category}
                  </Badge>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="tech-glass p-4 rounded-lg">
                    <h2 className="text-2xl tech-gradient-text mb-2">{selectedWork.title}</h2>
                    <div className="flex items-center gap-2 text-sm text-white/70 mb-2">
                      <Building2 className="w-4 h-4" />
                      <span>{selectedWork.client}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedWork.period}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Content (60%) */}
              <div className="w-3/5 flex flex-col">
                <div className="p-6 pb-4 border-b border-cyan-400/10">
                  <div className="flex flex-wrap gap-2">
                    {selectedWork.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="border-cyan-400/20 text-white/80 bg-white/5"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <ScrollArea className="flex-1 p-6">
                  <div className="space-y-6 pr-4">
                    <div>
                      <h3 className="text-xl text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        プロジェクト概要
                      </h3>
                      <p className="text-white/90 leading-relaxed">
                        {selectedWork.fullDescription}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                        課題
                      </h3>
                      <p className="text-white/90 leading-relaxed">
                        {selectedWork.challenges}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        ソリューション
                      </h3>
                      <p className="text-white/90 leading-relaxed">
                        {selectedWork.solution}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        成果
                      </h3>
                      <p className="text-white/90 leading-relaxed">
                        {selectedWork.results}
                      </p>
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}