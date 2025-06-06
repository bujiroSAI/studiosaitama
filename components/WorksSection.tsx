'use client';

import { useEffect, useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, X, Calendar, Building2 } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const works = [
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
  },
  {
    title: 'Project Gamma',
    description: 'データドリブンマーケティング戦略立案',
    shortDescription: '膨大な顧客データを活用した包括的マーケティング戦略。機械学習による予測分析でROI180%改善を達成。',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    category: 'Marketing',
    client: 'リテール企業C社',
    period: '2024年2月 - 2024年7月',
    duration: '6ヶ月',
    tags: ['データ分析', '機械学習', 'マーケティング', 'パーソナライゼーション'],
    fullDescription: '膨大な顧客データを活用した包括的マーケティング戦略の立案・実行プロジェクト。機械学習アルゴリズムによる顧客セグメンテーション、予測分析、パーソナライゼーション機能を組み合わせ、ROI最大化を実現しました。',
    challenges: '複数チャネルからの膨大なデータの統合と、リアルタイムでの意思決定支援システムの構築が課題でした。',
    solution: 'クラウドベースのデータレイクを構築し、AI/ML パイプラインによる自動分析・レポーティングシステムを導入。ダッシュボードによる直感的な可視化も実現しました。',
    results: 'マーケティングROI 180%改善、顧客獲得コスト35%削減、顧客生涯価値22%向上を達成しました。'
  },
  {
    title: 'Project Delta',
    description: 'クリエイティブキャンペーン企画・制作',
    shortDescription: '伝統ファッションブランドの若年層向けリブランディング。AR・インフルエンサー・限定コラボで売上180%増。',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&h=400&fit=crop',
    category: 'Creative',
    client: 'ファッションブランドD社',
    period: '2024年4月 - 2024年8月',
    duration: '5ヶ月',
    tags: ['ブランディング', 'AR', 'SNSマーケティング', 'インフルエンサー'],
    fullDescription: '伝統的なファッションブランドの若年層向けリブランディングキャンペーン。AR技術、インフルエンサーマーケティング、インタラクティブコンテンツを統合した統合型キャンペーンを展開しました。',
    challenges: '伝統的なブランドイメージを保持しながら、Z世代・ミレニアル世代にアピールする新しい表現方法の創造が求められました。',
    solution: 'ブランドのヘリテージを現代的に再解釈し、AR試着体験、TikTokチャレンジ、限定コラボレーションを組み合わせた360度キャンペーンを実施しました。',
    results: '若年層認知度150%向上、SNSフォロワー数300%増加、キャンペーン期間中の売上前年同期比180%を記録しました。'
  },
  {
    title: 'Project Epsilon',
    description: 'AI音声アシスタント開発',
    shortDescription: '医療従事者向けAI音声アシスタント。診断支援・カルテ作成補助により診断時間30%短縮を実現。',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
    category: 'Technology',
    client: 'ヘルスケア企業E社',
    period: '2024年5月 - 2024年9月',
    duration: '5ヶ月',
    tags: ['AI', '音声認識', 'ヘルスケア', 'NLP', 'セキュリティ'],
    fullDescription: '医療従事者向けAI音声アシスタントの開発プロジェクト。自然言語処理技術と医療知識ベースを組み合わせ、診断支援、カルテ作成補助、薬剤情報検索機能を提供する革新的なソリューションです。',
    challenges: '医療分野特有の専門用語への対応、高い精度要求、セキュリティ・プライバシー保護の実現が重要な課題でした。',
    solution: '医療専門のNLPモデルを独自開発し、エンドツーエンド暗号化によるセキュア通信を実装。HIPAA準拠のクラウドインフラを構築しました。',
    results: '診断時間30%短縮、カルテ作成効率50%向上、医療従事者の満足度95%を達成し、複数の医療機関で導入が決定しました。'
  },
  {
    title: 'Project Zeta',
    description: 'サステナビリティ可視化プラットフォーム',
    shortDescription: '企業のサステナビリティ活動を包括管理。ブロックチェーン・AI分析によりESGスコア15%改善。',
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=400&fit=crop',
    category: 'Innovation',
    client: '製造業F社',
    period: '2024年6月 - 2024年10月',
    duration: '5ヶ月',
    tags: ['ESG', 'ブロックチェーン', '環境', 'データ可視化', 'レポーティング'],
    fullDescription: '企業のサステナビリティ活動を包括的に可視化・管理するプラットフォーム開発。カーボンフットプリント計算、サプライチェーン追跡、ESG レポーティング機能を統合したソリューションです。',
    challenges: '複雑なサプライチェーンデータの統合、国際的な環境基準への準拠、ステークホルダー向けの分かりやすい可視化が課題でした。',
    solution: 'ブロックチェーン技術によるトレーサビリティ確保、AI による予測分析、インタラクティブなデータ可視化ダッシュボードを開発しました。',
    results: 'ESGスコア15%改善、サプライチェーン透明性向上、投資家向けレポート作成時間70%短縮を実現しました。'
  }
];

export function WorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedWork, setSelectedWork] = useState<typeof works[0] | null>(null);
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

  const handleWorkClick = (work: typeof works[0]) => {
    setSelectedWork(work);
    setOpenDialog(true);
  };

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center px-6 py-12 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute top-1/4 left-1/3 w-36 h-36 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full blur-3xl parallax-slow" />
      <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl parallax-medium" />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl tech-gradient-text mb-4 tech-mouse-track tech-interactive">Works</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            私たちの実績・ポートフォリオ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[60vh] overflow-y-auto">
          {works.map((work, index) => (
            <Button
              key={work.title}
              variant="ghost"
              className={`h-auto p-0 tech-glass tech-glass-hover overflow-hidden transition-all duration-1000 cursor-pointer group tech-interactive tech-mouse-track ${
                isVisible 
                  ? 'animate-glass-appear opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleWorkClick(work)}
            >
              <div className="w-full">
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 p-2">
                    <ImageWithFallback
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg border-2 border-cyan-400/20 group-hover:border-cyan-400/40"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-6 right-6">
                    <Badge variant="secondary" className="bg-white/20 text-white border-cyan-400/30">
                      {work.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
                
                <div className="p-6 text-left">
                  <div className="flex items-center gap-2 mb-2 text-xs text-white/60">
                    <Building2 className="w-3 h-3" />
                    <span>{work.client}</span>
                    <span>•</span>
                    <Calendar className="w-3 h-3" />
                    <span>{work.duration}</span>
                  </div>
                  
                  <h3 className="text-lg mb-2 text-white group-hover:text-cyan-300 transition-colors">
                    {work.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {work.tags.slice(0, 2).map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="text-xs py-0 px-2 border-cyan-400/20 text-white/80 bg-white/5"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {work.tags.length > 2 && (
                      <Badge 
                        variant="outline" 
                        className="text-xs py-0 px-2 border-cyan-400/20 text-white/60 bg-white/5"
                      >
                        +{work.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-white/80 leading-relaxed text-sm line-clamp-3">
                    {work.shortDescription}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>

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