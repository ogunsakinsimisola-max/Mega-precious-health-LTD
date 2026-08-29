import React from 'react';
import { 
  BookOpen, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  Gift, 
  ShieldCheck, 
  Smartphone, 
  Brain, 
  Moon, 
  Heart, 
  Scale, 
  Zap, 
  Activity,
  Award,
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { BOOKS } from '../data/content';
import { LightboxImage } from './ImageLightboxModal';

// Authentic Generated Book Covers from User Uploads
import secretsOfLifeCoverImg from '../assets/images/secrets_of_life_cover_1787586838181.jpg';
import attentionTrapCoverImg from '../assets/images/attention_trap_cover_1787095680029.jpg';
import loseWeightCoverImg from '../assets/images/lose_weight_cover_1787095692145.jpg';

interface BooksSectionProps {
  onOpenLightbox?: (img: LightboxImage) => void;
}

export const BooksSection: React.FC<BooksSectionProps> = ({ onOpenLightbox }) => {
  return (
    <section id="books" className="relative py-16 sm:py-24 bg-[#050a17] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-950/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Official Publications & Bestsellers</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Authored Books by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400">
              Dr. Precious Uwagbai
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Direct clinical wisdom, behavioral blueprints, and sustainable wellness secrets. Get your official digital copies directly on Selar.
          </p>
        </div>

        {/* Flagship Book Modules */}
        <div className="space-y-16">
          
          {/* BOOK: THE SECRETS OF LIFE */}
          <div className="relative rounded-3xl p-1 bg-gradient-to-r from-red-600/40 via-amber-500/30 to-emerald-600/30 shadow-2xl overflow-hidden">
            <div className="relative rounded-[22px] bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 p-6 sm:p-10 lg:p-12">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left: Official Book Cover Image */}
                <div className="lg:col-span-5 flex justify-center">
                  <div 
                    className="relative w-full max-w-[340px] rounded-2xl overflow-hidden border-2 border-red-500/50 shadow-2xl shadow-red-950/70 group hover:scale-[1.02] transition-transform duration-300 cursor-pointer bg-slate-950"
                    onClick={() => onOpenLightbox && onOpenLightbox({
                      src: secretsOfLifeCoverImg,
                      title: "THE SECRETS OF LIFE",
                      subtitle: "Discover the Principles. Make the Right Choices. Live Life to the Fullest. by Dr. Precious Uwagbai",
                      category: "Official Book Cover",
                      alt: "The Secrets of Life Front Cover by Dr. Precious Uwagbai"
                    })}
                  >
                    <img 
                      src={secretsOfLifeCoverImg} 
                      alt="The Secrets of Life - Official Book Cover by Dr. Precious Uwagbai" 
                      className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    <div className="absolute top-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900/95 border border-slate-700 text-[11px] font-semibold text-white shadow-lg">
                        <Maximize2 className="w-3 h-3 text-amber-400" />
                        <span>Enlarge Cover</span>
                      </span>
                    </div>

                    <div className="absolute bottom-2 inset-x-2 bg-slate-900/90 backdrop-blur-md rounded-lg p-2 text-center border border-amber-500/30">
                      <span className="text-[11px] font-bold text-amber-300 block">
                        Now Available • Get Your Copy
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Copy, Questions That Matter Most & CTA */}
                <div className="lg:col-span-7 space-y-6">
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-bold font-mono">
                        THE SECRETS OF LIFE
                      </span>
                      <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                        Wisdom • Faith • Modern Medicine
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      📖 What if there are things about life you should have been taught but nobody ever taught you?
                    </h3>

                    <div className="space-y-2 text-sm text-slate-300 leading-relaxed">
                      <p className="italic text-amber-200/90 font-medium">
                        How to choose wisely. How to build a strong home. How to love better. How to understand intimacy, pregnancy, parenting and family. And ultimately, how to make the choices that shape the life you live.
                      </p>
                      <p>
                        <strong className="text-white">THE SECRETS OF LIFE</strong> by <strong className="text-amber-300">Dr. Precious Uwagbai</strong> is a powerful journey through the questions that matter most; bringing together wisdom, faith, human experience and modern medical understanding.
                      </p>
                    </div>
                  </div>

                  {/* 4 Pillars Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                      <Heart className="w-4 h-4 text-red-400 mx-auto mb-1" />
                      <span className="text-xs font-bold text-white block">Purpose</span>
                      <span className="text-[10px] text-slate-400">Wise Choices</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                      <BookOpen className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                      <span className="text-xs font-bold text-white block">Relationships</span>
                      <span className="text-[10px] text-slate-400">Love & Family</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                      <Sparkles className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                      <span className="text-xs font-bold text-white block">Growth</span>
                      <span className="text-[10px] text-slate-400">Mind & Spirit</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                      <Award className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
                      <span className="text-xs font-bold text-white block">Legacy</span>
                      <span className="text-[10px] text-slate-400">Lasting Impact</span>
                    </div>
                  </div>

                  {/* Quote & Author Signature */}
                  <div className="space-y-1 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                    <p className="text-sm font-bold text-amber-300 italic">
                      &ldquo;You only have one life. Learn how to live it intentionally.&rdquo;
                    </p>
                    <p className="text-xs text-slate-400">
                      — <strong>Dr. Precious Uwagbai</strong> (Medical Doctor • Public Health Expert • Author)
                    </p>
                  </div>

                  {/* Direct Buy Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <a
                      href="https://selar.com/90m17f3v31"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 via-amber-600 to-yellow-500 hover:from-red-500 hover:to-yellow-400 text-slate-950 font-bold text-sm shadow-xl shadow-red-950/60 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                      id="buy-secrets-of-life-main-btn"
                    >
                      <span>👉 Get THE SECRETS OF LIFE on Selar</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* BOOK 1: THE ATTENTION TRAP */}
          <div className="relative rounded-3xl p-1 bg-gradient-to-r from-amber-500/40 via-yellow-500/20 to-slate-800 shadow-2xl overflow-hidden">
            <div className="relative rounded-[22px] bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 p-6 sm:p-10 lg:p-12">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left: Official Book Cover Image */}
                <div className="lg:col-span-5 flex justify-center">
                  <div 
                    className="relative w-full max-w-[340px] rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-2xl shadow-amber-950/70 group hover:scale-[1.02] transition-transform duration-300 cursor-pointer bg-slate-950"
                    onClick={() => onOpenLightbox && onOpenLightbox({
                      src: attentionTrapCoverImg,
                      title: "THE ATTENTION TRAP",
                      subtitle: "How to Break Free from Phone Addiction, Reclaim Your Focus, and Get Your Life Back by Dr. Precious Uwagbai",
                      category: "Official Book Cover",
                      alt: "The Attention Trap Front Cover by Dr. Precious Uwagbai"
                    })}
                  >
                    <img 
                      src={attentionTrapCoverImg} 
                      alt="The Attention Trap - Official Book Cover by Dr. Precious Uwagbai" 
                      className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    <div className="absolute top-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900/95 border border-slate-700 text-[11px] font-semibold text-white shadow-lg">
                        <Maximize2 className="w-3 h-3 text-amber-400" />
                        <span>Enlarge Cover</span>
                      </span>
                    </div>

                    <div className="absolute bottom-2 inset-x-2 bg-slate-900/90 backdrop-blur-md rounded-lg p-2 text-center border border-amber-500/30">
                      <span className="text-[11px] font-bold text-amber-300 block">
                        Official 30-Day Attention Reset Inside
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Copy, Psychology Breakdown, Bullet Points & CTA */}
                <div className="lg:col-span-7 space-y-6">
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold font-mono">
                        BOOK #1 • THE ATTENTION TRAP
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">
                        30-Day Attention Reset + Workbook
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      📱 Your Phone May Be Costing You More Than Screen Time
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      Problematic smartphone use has been associated with sleep problems, reduced wellbeing and difficulty controlling digital behaviour. The issue isn&apos;t simply how many hours you spend on your phone, it&apos;s whether your phone is beginning to control your attention and interfere with your life.
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      As a doctor, I wrote <strong className="text-white">THE ATTENTION TRAP</strong> to help you understand why you keep reaching for your phone and more importantly, how to regain control.
                    </p>
                  </div>

                  {/* 5 Specific Benefits Checklist */}
                  <div className="space-y-2.5 p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                      What You Will Learn Inside:
                    </h4>

                    <div className="space-y-2 text-xs sm:text-sm text-slate-200">
                      <div className="flex items-start gap-2.5">
                        <span className="text-base">🧠</span>
                        <span><strong>Understand the psychology</strong> behind compulsive checking & dopamine loops.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="text-base">🎯</span>
                        <span><strong>Reclaim your focus</strong> and rebuild deep concentration stamina.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="text-base">😴</span>
                        <span><strong>Protect your sleep</strong> and eliminate late-night screen disruption.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="text-base">📵</span>
                        <span><strong>Build healthier phone boundaries</strong> without needing to delete all your apps.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="text-base">📖</span>
                        <span><strong>Follow a practical 30-Day Attention Reset</strong> with guided actionable workbook prompts.</span>
                      </div>
                    </div>
                  </div>

                  {/* Quote & Author Signature */}
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-amber-300 italic">
                      &ldquo;Your attention is your life. Don&apos;t let anything or anyone steal it.&rdquo;
                    </p>
                    <p className="text-xs text-slate-400">
                      — <strong>Dr. Precious Uwagbai</strong> (Medical Doctor | Author | Health Advocate | Minister | Ambassador)
                    </p>
                  </div>

                  {/* Direct Buy Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <a
                      href="https://selar.com/13798w9686"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-950/60 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                      id="buy-attention-trap-main-btn"
                    >
                      <span>👉 Get Your Copy of THE ATTENTION TRAP on Selar</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                </div>

              </div>

            </div>
          </div>


          {/* BOOK 2: 5 SIMPLE STEPS TO LOSE WEIGHT */}
          <div className="relative rounded-3xl p-1 bg-gradient-to-r from-emerald-500/40 via-teal-500/20 to-slate-800 shadow-2xl overflow-hidden">
            <div className="relative rounded-[22px] bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 p-6 sm:p-10 lg:p-12">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left: Official Book Cover Image */}
                <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
                  <div 
                    className="relative w-full max-w-[360px] rounded-2xl overflow-hidden border-2 border-emerald-500/50 shadow-2xl shadow-emerald-950/70 group hover:scale-[1.02] transition-transform duration-300 cursor-pointer bg-slate-950"
                    onClick={() => onOpenLightbox && onOpenLightbox({
                      src: loseWeightCoverImg,
                      title: "5 SIMPLE STEPS TO LOSE WEIGHT",
                      subtitle: "Transform Your Body. Transform Your Life. Secrets From a Doctor by Dr. Precious Uwagbai",
                      category: "Official Book Showcase",
                      alt: "5 Simple Steps to Lose Weight Secrets from a Doctor"
                    })}
                  >
                    <img 
                      src={loseWeightCoverImg} 
                      alt="5 Simple Steps to Lose Weight - Secrets From a Doctor by Dr. Precious Uwagbai" 
                      className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    <div className="absolute top-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900/95 border border-slate-700 text-[11px] font-semibold text-white shadow-lg">
                        <Maximize2 className="w-3 h-3 text-emerald-400" />
                        <span>Enlarge Cover</span>
                      </span>
                    </div>

                    <div className="absolute bottom-2 inset-x-2 bg-slate-900/90 backdrop-blur-md rounded-lg p-2 text-center border border-emerald-500/30">
                      <span className="text-[11px] font-bold text-emerald-300 block">
                        Transform Your Body. Transform Your Life.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Copy, Cardiovascular Risk Reductions, Free Gift & CTA */}
                <div className="lg:col-span-7 space-y-6 order-2 lg:order-2">
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold font-mono">
                        BOOK #2 • PROVEN CLINICAL GUIDE
                      </span>
                      <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">
                        Secrets From a Doctor
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      🥗 5 Simple Steps to Lose Weight: Secrets from a Doctor
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      Losing weight isn&apos;t just about appearance; it&apos;s about vitality, longevity, and protecting your body against preventable chronic disease. Excess weight increases your risk of high blood pressure, type 2 diabetes, stroke, cardiovascular issues, joint deterioration, and sleep apnea.
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      Written from rigorous clinical experience by <strong className="text-white">Dr. Precious Uwagbai</strong>, this practical guide cuts through dangerous fad diets to give you a sustainable, doctor-approved roadmap to sustainable fat loss.
                    </p>
                  </div>

                  {/* 4 Health Pillars Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5">
                      <Heart className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-white">Better Health</h4>
                        <p className="text-[11px] text-slate-400">Lower blood pressure & blood sugar</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5">
                      <Scale className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-white">Sustainable Weight Loss</h4>
                        <p className="text-[11px] text-slate-400">No starvation or rebounding</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5">
                      <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-white">Energy & Confidence</h4>
                        <p className="text-[11px] text-slate-400">Reclaim physical stamina</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-white">Lower Disease Risk</h4>
                        <p className="text-[11px] text-slate-400">Prevent chronic complications</p>
                      </div>
                    </div>
                  </div>

                  {/* Free Exclusive Gift Callout */}
                  <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 shrink-0">
                      <Gift className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-emerald-300 block">
                        🎁 Free Bonus Gift: 7-Day Healthy Eating Meal Guide Included!
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Every purchase on Selar includes an exclusive 7-day healthy eating meal plan designed to kickstart your metabolic health immediately.
                      </p>
                    </div>
                  </div>

                  {/* Direct Buy Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <a
                      href="https://selar.co/qu7w13"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-950/60 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                      id="buy-lose-weight-main-btn"
                    >
                      <span>👉 Get 5 Simple Steps to Lose Weight on Selar</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
