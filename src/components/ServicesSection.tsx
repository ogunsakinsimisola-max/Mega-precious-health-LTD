import React from 'react';
import { 
  Activity, 
  BookOpen, 
  UserCheck, 
  Sparkles, 
  Globe, 
  ArrowRight,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';

const iconMap: Record<string, React.ElementType> = {
  Activity,
  BookOpen,
  UserCheck,
  Sparkles,
  Globe
};

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectService,
  onOpenConsultation 
}) => {
  return (
    <section id="services" className="relative py-20 lg:py-28 bg-[#070d1e] overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-emerald-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <span>Solutions & Initiatives</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Our Core Focus{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400">
                Categories
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Structured initiatives, educational publications, community frameworks, and people-first wellness advisory designed to inspire healthier living and sustainable vitality.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 hover:border-emerald-500/40 transition-all"
            >
              <span>Custom Organization Enquiry</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Activity;
            return (
              <div
                key={service.id}
                className="relative rounded-2xl p-7 bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900 transition-all duration-300 shadow-xl group flex flex-col justify-between hover:translate-y-[-4px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:bg-emerald-900/60 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-500 bg-slate-800/60 px-2 py-0.5 rounded">
                      CAT 0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400/90 block mb-1">
                    {service.subtitle}
                  </span>

                  <h3 className="font-heading text-xl font-bold text-white tracking-tight mb-3 group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.deliverables.slice(0, 3).map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">
                    Structured Initiative
                  </span>
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 hover:text-emerald-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Special Card: Bespoke Health Advisory / Organizational Wellness */}
          <div className="relative rounded-2xl p-7 bg-gradient-to-br from-emerald-950/60 via-slate-900 to-slate-950 border border-emerald-500/40 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                Executive & Strategic
              </span>
              <h3 className="font-heading text-xl font-bold text-white tracking-tight mb-3">
                Corporate & Community Partnerships
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Looking to collaborate on health education drives, youth substance prevention, executive health coaching, or community wellness initiatives?
              </p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-lg shadow-emerald-950/60 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Collaboration</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
