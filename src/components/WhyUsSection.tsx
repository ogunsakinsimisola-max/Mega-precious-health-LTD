import React from 'react';
import { 
  HeartHandshake, 
  Users, 
  Lightbulb, 
  Award, 
  Compass,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const pillars = [
    {
      icon: HeartHandshake,
      title: "Purpose Driven",
      subtitle: "Meaningful Health & Wellbeing Impact",
      description: "Every initiative, publication, and campaign is deliberately structured to address real-world health vulnerabilities, prevent chronic illness, and cultivate lasting vitality.",
      badge: "Visionary Foundation"
    },
    {
      icon: Users,
      title: "People Centred",
      subtitle: "Focus on Real-World Needs",
      description: "We design all solutions around human dignity, empathetic communication, accessible health education, and practical behavioral habits that fit everyday lives.",
      badge: "Empathetic Approach"
    },
    {
      icon: Lightbulb,
      title: "Innovation Led",
      subtitle: "Modern Thinking & Technology",
      description: "Open to digital health delivery, media-driven public health broadcasting, and contemporary behavioral psychology that breaks old barriers.",
      badge: "Modern Health Thinking"
    },
    {
      icon: Award,
      title: "Professionally Led",
      subtitle: "Clinical Medical Leadership",
      description: "Spearheaded by Dr. Precious Uwagbai (MD), upholding rigorous clinical standards, ethical governance, and a relentless commitment to professional excellence.",
      badge: "Clinical Rigor"
    },
    {
      icon: Compass,
      title: "Future Focused",
      subtitle: "Sustainability & Generational Growth",
      description: "Built with a multi-decade horizon to nurture healthier families, focused youth, empowered leaders, and resilient communities worldwide.",
      badge: "Long-Term Value"
    }
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-[#09132b] overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-emerald-950/25 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-950/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Mega Precious Health</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            More Than a Brand.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300">
              A Vision for Impact.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Discover what sets Mega Precious Health LTD apart as a forward-thinking health, wellness, and leadership organization.
          </p>
        </div>

        {/* 5 Structural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            const isFullWidth = idx === 4;
            return (
              <div
                key={idx}
                className={`relative rounded-2xl p-7 bg-slate-900/85 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 shadow-xl group hover:translate-y-[-3px] flex flex-col justify-between ${
                  isFullWidth ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700/80 group-hover:border-emerald-500/40 group-hover:bg-emerald-950/50 flex items-center justify-center text-emerald-400 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-950/50 border border-amber-500/30 px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors mb-1">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-emerald-400/90 mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Integrated into organizational operations</span>
                </div>
              </div>
            );
          })}

          {/* Quick Callout Block */}
          <div className="rounded-2xl p-7 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/50 border border-emerald-500/30 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block mb-2">
                Executive Standard
              </span>
              <h4 className="font-heading text-lg font-bold text-white mb-2">
                International Corporate Credibility
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Registered under the Companies Act 2006 (England & Wales). Committed to absolute transparency, high governance standards, and measurable societal wellbeing.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80 text-[11px] font-mono text-amber-300/90">
              UK Company No: 14394693
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
