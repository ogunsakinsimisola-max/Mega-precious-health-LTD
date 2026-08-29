import React from 'react';
import { 
  BookOpen, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  Smartphone, 
  Brain, 
  Moon, 
  Clock, 
  FileText, 
  ShieldCheck, 
  Bookmark,
  Gift,
  Heart,
  Scale
} from 'lucide-react';
import secretsOfLifeCoverImg from '../assets/images/secrets_of_life_cover_1787586838181.jpg';
import attentionTrapCoverImg from '../assets/images/attention_trap_cover_1787095680029.jpg';
import loseWeightCoverImg from '../assets/images/lose_weight_cover_1787095692145.jpg';

export const ResourcesSection: React.FC = () => {
  const futureResources = [
    {
      id: "res-1",
      title: "Preventative Metabolic Health & Workday Vitality Blueprint",
      type: "Clinical Whitepaper",
      author: "Dr. Precious Uwagbai",
      status: "Upcoming Publication",
      placeholder: "[Clinical Guide & Research Paper: Evidence-based metabolic protocols for desk-bound executives and corporate teams]",
      icon: Brain,
      tag: "Metabolic Health"
    },
    {
      id: "res-2",
      title: "Screen Time Architecture & Cognitive Wellness for Youth",
      type: "Parent & Educator Guide",
      author: "Mega Precious Health Editorial",
      status: "In Peer Review",
      placeholder: "[Educational Toolkit: Navigating adolescent dopamine loops, social media anxiety, and attention restoration in classrooms]",
      icon: Smartphone,
      tag: "Youth Development"
    },
    {
      id: "res-3",
      title: "Circadian Rhythm Restoration & Restorative Sleep Protocols",
      type: "Health Advisory Paper",
      author: "Dr. Precious Uwagbai",
      status: "Upcoming Masterclass Toolkit",
      placeholder: "[Executive Sleep Manual: Optimizing melatonin release, evening digital hygiene, and non-pharmacological sleep enhancement]",
      icon: Moon,
      tag: "Sleep & Recovery"
    }
  ];

  return (
    <section id="resources" className="relative py-16 sm:py-24 bg-[#060b18] overflow-hidden">
      
      {/* Background radial glows */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-amber-950/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-emerald-950/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Featured Publications & Resources</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Resources &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400">
              Publications
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Evidence-informed health literature, behavioral reset guides, and clinical insights authored by Dr. Precious Uwagbai to empower your physical stamina and digital focus.
          </p>
        </div>

        {/* Featured Publications Grid with Authentic Covers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Featured Card: THE SECRETS OF LIFE */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-red-500/30 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-bold font-mono">
                  THE SECRETS OF LIFE
                </span>
                <span className="text-xs font-semibold text-amber-300">
                  Available Now
                </span>
              </div>

              {/* Cover & Overview */}
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-28 sm:w-32 rounded-xl overflow-hidden border border-red-500/40 shadow-lg shrink-0 bg-slate-950">
                  <img 
                    src={secretsOfLifeCoverImg} 
                    alt="The Secrets of Life Cover" 
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                    Discover the Principles. Make the Right Choices.
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    A powerful journey through life&apos;s most vital questions: love, home, intimacy, pregnancy, parenting, family, and purpose.
                  </p>
                </div>
              </div>

              <div className="space-y-1.5 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <span>🌱</span>
                  <span>How to choose wisely & discover life principles.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🏡</span>
                  <span>How to build a strong home & love better.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>❤️</span>
                  <span>Intimacy, pregnancy, parenting & family.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>👑</span>
                  <span>Shaping the choices and life you live.</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-red-950/30 border border-red-500/20 text-xs text-red-300 italic">
                &ldquo;You only have one life. Learn how to live it intentionally.&rdquo;
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col items-stretch gap-3">
              <span className="text-[11px] text-slate-400">
                Dr. Precious Uwagbai • MD | Public Health Expert | Author
              </span>
              <a
                href="https://selar.com/90m17f3v31"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 via-amber-600 to-yellow-500 hover:from-red-500 hover:to-yellow-400 text-slate-950 font-bold text-xs shadow-lg transition-all"
                id="resources-secrets-of-life-btn"
              >
                <span>👉 Get on Selar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Featured Card 1: THE ATTENTION TRAP */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-amber-500/30 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold font-mono">
                  THE ATTENTION TRAP
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  A 30-Day Reset Inside
                </span>
              </div>

              {/* Cover & Overview */}
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-28 sm:w-32 rounded-xl overflow-hidden border border-amber-500/40 shadow-lg shrink-0 bg-slate-950">
                  <img 
                    src={attentionTrapCoverImg} 
                    alt="The Attention Trap Cover" 
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    📱 Your Phone May Be Costing You More Than Screen Time
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Problematic smartphone use has been associated with sleep problems, reduced wellbeing and difficulty controlling digital behaviour.
                  </p>
                </div>
              </div>

              <div className="space-y-1.5 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <span>🧠</span>
                  <span>Understand the psychology behind compulsive checking.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🎯</span>
                  <span>Reclaim your focus.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>😴</span>
                  <span>Protect your sleep.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📵</span>
                  <span>Build healthier phone boundaries.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📖</span>
                  <span>Follow a practical 30-Day Attention Reset + Workbook.</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/20 text-xs text-amber-300 italic">
                &ldquo;Your phone can wait. Your life cannot.&rdquo;
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-[11px] text-slate-400">
                Dr. Precious Uwagbai • MD | Author | Advocate | Minister | Ambassador
              </span>
              <a
                href="https://selar.com/13798w9686"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg transition-all"
                id="resources-attention-trap-btn"
              >
                <span>👉 Get on Selar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Featured Card 2: 5 SIMPLE STEPS TO LOSE WEIGHT */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/30 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold font-mono">
                  5 SIMPLE STEPS TO LOSE WEIGHT
                </span>
                <span className="px-2.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-bold flex items-center gap-1">
                  <Gift className="w-3 h-3 text-amber-400" />
                  <span>Free Gift for First 100</span>
                </span>
              </div>

              {/* Cover & Overview */}
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-28 sm:w-32 rounded-xl overflow-hidden border border-emerald-500/40 shadow-lg shrink-0 bg-slate-950">
                  <img 
                    src={loseWeightCoverImg} 
                    alt="5 Simple Steps to Lose Weight Cover" 
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    Transform Your Body. Transform Your Life.
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Practical, proven, and sustainable weight loss secrets written from clinical practice to protect cardiovascular health.
                  </p>
                </div>
              </div>

              <div className="space-y-1.5 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <Heart className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Better Health: Evidence-informed metabolic wellness.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Sustainable Weight Loss: Secrets from a Doctor.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>More Energy & Confidence: Practical & Proven.</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Lower Risk of Chronic Diseases & Stroke.</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-300 font-semibold">
                Transform your health Now with my Secrets.
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-[11px] text-slate-400">
                Dr. Precious Uwagbai • Secrets from a Doctor
              </span>
              <a
                href="https://selar.co/qu7w13"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition-all"
                id="resources-lose-weight-btn"
              >
                <span>👉 Get on Selar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Future Health Resources & Whitepapers (Placeholders Section) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                Editorial Pipeline
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight">
                Upcoming Health Resources & Research Articles
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              Future Publications Pipeline
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {futureResources.map((res) => {
              const Icon = res.icon;
              return (
                <div
                  key={res.id}
                  className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-4 flex flex-col justify-between shadow-xl"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-300 bg-amber-950/80 px-2.5 py-1 rounded border border-amber-500/30">
                        {res.status}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        {res.type}
                      </span>
                      <h4 className="font-heading text-base font-bold text-white tracking-tight mt-1">
                        {res.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">
                        By {res.author}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800 text-[11px] font-mono text-emerald-300/80">
                      {res.placeholder}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span>{res.tag}</span>
                    <span className="text-emerald-400 font-semibold">Reserved Topic</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
