'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form@7.55.0';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, Mail, User, Building, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';

const contactSchema = z.object({
  name: z.string().min(2, 'お名前は2文字以上で入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  company: z.string().min(1, '会社名を入力してください'),
  subject: z.string().min(1, '件名を入力してください'),
  message: z.string().min(10, 'メッセージは10文字以上で入力してください'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

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

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Contact form data:', data);
      toast.success('お問い合わせを送信しました！');
      setIsSubmitted(true);
      reset();
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      toast.error('送信に失敗しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center px-6 py-12 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full blur-3xl parallax-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl parallax-medium" />
      
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl tech-gradient-text mb-4 tech-mouse-track tech-interactive">Contact</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            お気軽にお問い合わせください。<br />
            あなたのプロジェクトについてお聞かせください。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-h-[70vh] overflow-y-auto">
          {/* Contact Information */}
          <div className={`space-y-6 transition-all duration-1000 ${
            isVisible ? 'animate-slide-in-left animation-delay-200' : 'opacity-0 translate-x-10'
          }`}>
            <div className="tech-glass p-6 tech-mouse-track tech-interactive">
              <h3 className="text-xl tech-gradient-text mb-4">お問い合わせ情報</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 tech-glass rounded-full flex items-center justify-center">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white/90 text-sm">メールアドレス</p>
                    <p className="text-white/70 text-sm">contact@studiosaitama.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 tech-glass rounded-full flex items-center justify-center">
                    <Building className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white/90 text-sm">所在地</p>
                    <p className="text-white/70 text-sm">東京都渋谷区</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 tech-glass rounded-full flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white/90 text-sm">対応時間</p>
                    <p className="text-white/70 text-sm">平日 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="tech-glass p-6 tech-mouse-track tech-interactive">
              <h4 className="text-lg text-white mb-4">サービス内容</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-xs text-white/80 bg-white/5 px-2 py-1 rounded-lg border border-cyan-400/20">ブランディング</div>
                <div className="text-xs text-white/80 bg-white/5 px-2 py-1 rounded-lg border border-cyan-400/20">Web開発</div>
                <div className="text-xs text-white/80 bg-white/5 px-2 py-1 rounded-lg border border-cyan-400/20">AI/ML</div>
                <div className="text-xs text-white/80 bg-white/5 px-2 py-1 rounded-lg border border-cyan-400/20">マーケティング</div>
                <div className="text-xs text-white/80 bg-white/5 px-2 py-1 rounded-lg border border-cyan-400/20">コンサルティング</div>
                <div className="text-xs text-white/80 bg-white/5 px-2 py-1 rounded-lg border border-cyan-400/20">その他</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'animate-slide-in-right animation-delay-400' : 'opacity-0 translate-x-10'
          }`}>
            <div className="tech-glass p-6 tech-mouse-track">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white/90 flex items-center gap-2 text-sm">
                      <User className="w-3 h-3" />
                      お名前 <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="name"
                      {...register('name')}
                      className="tech-glass border-cyan-400/20 text-white placeholder:text-white/50 focus:border-cyan-400 text-sm"
                      placeholder="山田 太郎"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/90 flex items-center gap-2 text-sm">
                      <Mail className="w-3 h-3" />
                      メールアドレス <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      className="tech-glass border-cyan-400/20 text-white placeholder:text-white/50 focus:border-cyan-400 text-sm"
                      placeholder="example@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white/90 flex items-center gap-2 text-sm">
                    <Building className="w-3 h-3" />
                    会社名 <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="company"
                    {...register('company')}
                    className="tech-glass border-cyan-400/20 text-white placeholder:text-white/50 focus:border-cyan-400 text-sm"
                    placeholder="株式会社サンプル"
                  />
                  {errors.company && (
                    <p className="text-red-400 text-xs">{errors.company.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white/90 flex items-center gap-2 text-sm">
                    <MessageSquare className="w-3 h-3" />
                    件名 <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="subject"
                    {...register('subject')}
                    className="tech-glass border-cyan-400/20 text-white placeholder:text-white/50 focus:border-cyan-400 text-sm"
                    placeholder="お問い合わせの件名"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-xs">{errors.subject.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white/90 text-sm">
                    メッセージ <span className="text-red-400">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    className="tech-glass border-cyan-400/20 text-white placeholder:text-white/50 focus:border-cyan-400 resize-none text-sm"
                    placeholder="お問い合わせ内容をご記入ください..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full tech-glass tech-glass-hover py-4 transition-all duration-300 ${
                    isSubmitted 
                      ? 'bg-green-500/20 border-green-400 text-green-300' 
                      : 'bg-cyan-500/20 border-cyan-400 text-white hover:bg-cyan-500/30'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      送信中...
                    </div>
                  ) : isSubmitted ? (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      送信完了
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      お問い合わせを送信
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}