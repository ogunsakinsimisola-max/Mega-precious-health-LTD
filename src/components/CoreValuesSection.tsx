import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Lightbulb, 
  HeartHandshake, 
  TrendingUp, 
  Target,
  Eye,
  CheckCircle
} from 'lucide-react';
import { CORE_VALUES } from '../data/content';

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Award,
  Lightbulb,
  HeartHandshake,
  TrendingUp
};

export const CoreValuesSection: React.FC = () => {
  return (
    <section id="values" className="relative py-20 lg:py-28 bg-[#09132b] overflow-hidden">
      
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mission & Vision Dual Typography Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* Mission Card */}
          <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-emerald-500/30 shadow-2xl backdrop-blur-xl group hover:border-emerald-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-md">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400">
                  OUR PURPOSE
                </span>
                <h3 className="font-heading text-2xl font-bold text-white">
                  Our Mission
                </h3>
              </div>
            </div>
            
            <p className="font-heading text-lg sm:text-xl font-normal text-slate-100 leading-relaxed italic border-l-2 border-emerald-400 pl-4 py-1">
              &ldquo;To develop and promote innovative, reliable and people-centred health and wellbeing solutions that create meaningful value for individuals, families and communities.&rdquo;
            </p>
            
            <div className="mt-6 pt-6 border-t border-slate-800/80 flex items-center gap-4 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1 text-emerald-300">
                <CheckCircle className="w-3.5 h-3.5" /> Reliability
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 text-emerald-300">
                <CheckCircle className="w-3.5 h-3.5" /> People-Centred
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 text-emerald-300">
                <CheckCircle className="w-3.5 h-3.5" /> Tangible Value
              </span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-amber-500/30 shadow-2xl backdrop-blur-xl group hover:border-amber-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-950/80 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-md">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                  OUR HORIZON
                </span>
                <h3 className="font-heading text-2xl font-bold text-white">
                  Our Vision
                </h3>
              </div>
            </div>

            <p className="font-heading text-lg sm:text-xl font-normal text-slate-100 leading-relaxed italic border-l-2 border-amber-400 pl-4 py-1">
              &ldquo;To build a trusted and innovative health and wellbeing brand recognised for excellence, positive impact and sustainable solutions.&rdquo;
            </p>

            <div className="mt-6 pt-6 border-t border-slate-800/80 flex items-center gap-4 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1 text-amber-300">
                <CheckCircle className="w-3.5 h-3.5" /> Global Recognition
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 text-amber-300">
                <CheckCircle className="w-3.5 h-3.5" /> Sustainable Care
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 text-amber-300">
                <CheckCircle className="w-3.5 h-3.5" /> Excellence
              </span>
            </div>
          </div>

        </div>

        {/* Section Header for Core Values */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider">
            <span>Guiding Principles</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our Five Core{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300">
              Values
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            The foundational ethos that underpins our clinical perspectives, publications, organizational ethics, and community relationships.
          </p>
        </div>

        {/* 5 Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_VALUES.map((val, idx) => {
            const Icon = iconMap[val.iconName] || Award;
            const isLast = idx === CORE_VALUES.length - 1;
            return (
              <div
                key={val.id}
                className={`relative rounded-2xl p-7 bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900 transition-all duration-300 shadow-xl group flex flex-col justify-between hover:translate-y-[-4px] ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 group-hover:border-emerald-500/40 group-hover:bg-emerald-950/40 flex items-center justify-center text-emerald-400 group-hover:text-emerald-300 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-display font-bold text-slate-700 group-hover:text-slate-500 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400/90 block mb-1">
                    {val.tagline}
                  </span>

                  <h4 className="font-heading text-xl font-bold text-white tracking-tight mb-3 group-hover:text-emerald-300 transition-colors">
                    {val.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-800/60 flex items-center text-[11px] font-medium text-slate-400 group-hover:text-emerald-300 transition-colors">
                  <span>Commitment to Standards</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
