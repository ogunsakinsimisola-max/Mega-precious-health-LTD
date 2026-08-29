import React from 'react';
import { 
  Award, 
  Lightbulb, 
  HeartHandshake, 
  Globe2, 
  Sparkles,
  ShieldCheck 
} from 'lucide-react';

export const TrustBar: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: "Professional Leadership",
      desc: "Guided by clinical medical expertise and visionary governance.",
      color: "from-amber-500/20 to-amber-600/5",
      iconColor: "text-amber-400"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "Embracing modern wellness paradigms and digital health methodologies.",
      color: "from-emerald-500/20 to-emerald-600/5",
      iconColor: "text-emerald-400"
    },
    {
      icon: HeartHandshake,
      title: "Health & Wellbeing",
      desc: "Holistic care addressing mind, body, metabolic health, and lifestyle habits.",
      color: "from-teal-500/20 to-teal-600/5",
      iconColor: "text-teal-400"
    },
    {
      icon: Sparkles,
      title: "People-Centred Impact",
      desc: "Compassionate, human-first initiatives that build sustainable vitality.",
      color: "from-blue-500/20 to-blue-600/5",
      iconColor: "text-blue-400"
    },
    {
      icon: Globe2,
      title: "Global Vision",
      desc: "International outlook with collaborative grassroots community reach.",
      color: "from-purple-500/20 to-purple-600/5",
      iconColor: "text-purple-400"
    }
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-900/90 border border-slate-800/90 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx} 
                className="pt-3 sm:pt-0 sm:px-3 first:pt-0 first:px-0 flex flex-col justify-between group hover:translate-y-[-2px] transition-transform duration-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${pillar.color} border border-slate-700/60 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-4 h-4 ${pillar.iconColor}`} />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
