import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Globe2, 
  BookOpen, 
  Play, 
  HeartHandshake,
  CheckCircle2,
  Award,
  Building2,
  Phone
} from 'lucide-react';
import { COMPANY_INFO, FOUNDER_INFO } from '../data/content';
import drWhiteSuit from '../assets/images/dr_white_suit_globe_1787094249074.jpg';
import { LightboxImage } from './ImageLightboxModal';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenCertificate: () => void;
  onOpenVideoTeaser: () => void;
  onOpenLightbox?: (img: LightboxImage) => void;
  onSelectSection?: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenConsultation, 
  onOpenCertificate, 
  onOpenVideoTeaser,
  onOpenLightbox,
  onSelectSection
}) => {
  return (
    <section className="relative pt-24 sm:pt-28 pb-14 lg:pt-32 lg:pb-20 flex items-center justify-center overflow-hidden bg-[#070d1e]">
      
      {/* Background Gradients & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[550px] bg-gradient-to-tr from-emerald-600/20 via-teal-500/15 to-amber-500/15 rounded-full blur-[130px] opacity-70" />
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-900/25 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-blue-900/25 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Clear Mega Precious Health LTD Branding & Headline */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Corporate Trust Pill */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 p-1.5 pr-4 rounded-full bg-slate-900/90 border border-emerald-500/40 backdrop-blur-md shadow-xl">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                <span>OFFICIAL CORPORATE PORTAL</span>
              </span>
              <span className="text-xs font-bold text-amber-300">
                MEGA PRECIOUS HEALTH LTD
              </span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <button 
                onClick={onOpenCertificate}
                className="text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 underline transition-colors cursor-pointer"
              >
                Registered in England & Wales
              </button>
            </div>

            {/* Main Primary Heading */}
            <div className="space-y-2">
              <span className="block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-emerald-400">
                Welcome to Mega Precious Health LTD
              </span>
              <h1 className="font-heading text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Advancing Health.{' '}
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400">
                  Inspiring Wellbeing.
                </span>
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400 font-display italic font-normal text-2.5xl sm:text-4xl xl:text-5xl">
                  Creating Global Impact.
                </span>
              </h1>
            </div>

            {/* Clear Mission Narrative */}
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              <strong>Mega Precious Health LTD</strong> is an international healthcare, wellness education, and human-centred leadership organization founded by <strong>Dr. Precious Uwagbai</strong>. We combine evidence-informed clinical wisdom, published literature, executive coaching, and multi-sector community development.
            </p>

            {/* 3 Core Value Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-left">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Clinical Medicine</h4>
                  <p className="text-[11px] text-slate-400">Preventative & Lifestyle Care</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Published Author</h4>
                  <p className="text-[11px] text-slate-400">The Secrets of Life & Books</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white">Global Leadership</h4>
                  <p className="text-[11px] text-slate-400">Keynotes & Real Estate</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                onClick={() => onSelectSection ? onSelectSection('founder') : null}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-950/60 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                id="hero-meet-founder-btn"
              >
                <span>Meet Dr. Precious Uwagbai</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-bold text-xs sm:text-sm border border-slate-700/80 hover:border-amber-500/50 backdrop-blur-md shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                id="hero-connect-btn"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Enquire & Connect</span>
              </button>

              <button
                onClick={onOpenVideoTeaser}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-emerald-300 px-3 py-2 transition-colors cursor-pointer"
                id="hero-watch-intro-btn"
              >
                <span className="w-7 h-7 rounded-full bg-red-600/90 flex items-center justify-center text-white shadow-md">
                  <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                </span>
                <span>Watch Media Broadcast</span>
              </button>
            </div>

            {/* Quick Direct Desk */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-300">
              <span className="text-slate-400 font-medium">Direct Line:</span>
              <a href={`tel:${COMPANY_INFO.phones.nigeria.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>NG: {COMPANY_INFO.phones.nigeria}</span>
              </a>
              <span className="text-slate-600">•</span>
              <a href={`tel:${COMPANY_INFO.phones.uk.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>UK: {COMPANY_INFO.phones.uk}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean, Crisp, Large Executive Portrait (No Distracting Overlay Badges) */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            {/* Primary Visual Frame */}
            <div className="relative w-full max-w-md rounded-3xl p-1.5 bg-gradient-to-b from-amber-400/40 via-slate-800 to-emerald-500/40 shadow-2xl group">
              <div 
                className="relative rounded-[22px] overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer"
                onClick={() => onOpenLightbox && onOpenLightbox({
                  src: drWhiteSuit,
                  title: "Dr. Precious Uwagbai - Executive Leadership",
                  subtitle: "Founder & CEO, Mega Precious Health LTD • Global Speaker & Medical Doctor",
                  category: "Executive Portrait",
                  alt: "Dr. Precious Uwagbai in executive white suit with gold globe"
                })}
              >
                {/* Crystal Clear Large Photo */}
                <img 
                  src={drWhiteSuit} 
                  alt="Dr. Precious Uwagbai - Founder of Mega Precious Health LTD" 
                  className="w-full h-[470px] sm:h-[520px] object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                
                {/* Light gradient only at the very bottom for clear text legibility */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#060c1c] via-[#060c1c]/80 to-transparent" />
                
                {/* Bottom Card Identity Banner */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 space-y-1.5 z-10">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-950/90 border border-amber-500/40 text-amber-300 text-[11px] font-bold">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Founder & Executive Leadership</span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {FOUNDER_INFO.name}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">
                    MD, MPH, PM • Author • Health Advocate • Global Speaker
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
