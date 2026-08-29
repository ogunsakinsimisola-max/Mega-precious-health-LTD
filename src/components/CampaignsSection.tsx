import React from 'react';
import { 
  ShieldAlert, 
  Sparkles, 
  HeartHandshake, 
  Building2, 
  ArrowUpRight,
  CheckCircle,
  Users,
  Activity,
  Maximize2,
  Phone,
  QrCode
} from 'lucide-react';
import { CAMPAIGNS } from '../data/content';
import { LightboxImage } from './ImageLightboxModal';

// Authentic Campaign & Real Estate Assets
import skinHealthFlyer from '../assets/images/skin_health_day_1787097021474.jpg';
import drugAbuseFlyer from '../assets/images/drug_abuse_zero_1787097034417.jpg';
import kingsEmbassyFlyer from '../assets/images/kings_embassy_real_estate_1787097047659.jpg';
import hopeConsultImage from '../assets/images/dr_green_scrubs_clinic_1787094263174.jpg';

interface CampaignsSectionProps {
  onOpenConsultation: () => void;
  onOpenLightbox?: (img: LightboxImage) => void;
}

export const CampaignsSection: React.FC<CampaignsSectionProps> = ({ 
  onOpenConsultation,
  onOpenLightbox 
}) => {

  const getCampaignVisual = (campId: string) => {
    switch (campId) {
      case 'c1':
        return {
          src: drugAbuseFlyer,
          alt: "Zero Tolerance to Drug Abuse - MTN Foundation & Dr. Precious Uwagbai",
          title: "Zero Tolerance to Drug Abuse Campaign",
          subtitle: "MTN Anti-Substance Abuse Program • Say NO to Drugs • Dr. Precious Uwagbai",
          aspect: "h-72 sm:h-80",
          fit: "object-cover object-top"
        };
      case 'c2':
        return {
          src: skinHealthFlyer,
          alt: "World Skin Health Day - Healthy Skin, Confident You - Dr. Precious Uwagbai",
          title: "World Skin Health Day Initiative",
          subtitle: "Global Health Advocacy • Good Skin Habits • Dr. Precious Uwagbai",
          aspect: "h-72 sm:h-80",
          fit: "object-cover object-top"
        };
      case 'c4':
        return {
          src: kingsEmbassyFlyer,
          alt: "King's Embassy Real Estate - Building Better Lives - Dr. Precious Uwagbai CEO",
          title: "King's Embassy Real Estate",
          subtitle: "Building Better Lives • Royal & Affordable Homes across Nigeria • Dr. Precious Uwagbai CEO",
          aspect: "h-64 sm:h-72",
          fit: "object-cover object-center"
        };
      case 'c3':
      default:
        return {
          src: hopeConsultImage,
          alt: "Hope Consult - Your Personal Doctor Just a Message Away",
          title: "Hope Consult Telehealth Advisory",
          subtitle: "Direct Clinical Guidance & Compassionate Lifestyle Care",
          aspect: "h-72 sm:h-80",
          fit: "object-cover object-top"
        };
    }
  };

  return (
    <section id="campaigns" className="relative py-20 lg:py-28 bg-[#070d1e] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-emerald-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5" />
              <span>Public Health & Real Estate Initiatives</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Community Campaigns &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300">
                King&apos;s Embassy Real Estate
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Official outreach flyers and flagship community programs led by Dr. Precious Uwagbai—from public dermatological health and anti-substance advocacy to luxury affordable homebuilding.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-semibold shadow-lg shadow-emerald-950/50 transition-all hover:scale-[1.02] active:scale-[0.98] self-start md:self-auto cursor-pointer"
          >
            <span>Partner on an Outreach</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Campaigns & Real Estate Grid with Authentic Visual Posters */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CAMPAIGNS.map((camp) => {
            const visual = getCampaignVisual(camp.id);
            const isWideEstate = camp.id === 'c4';

            return (
              <div
                key={camp.id}
                className={`relative rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 shadow-2xl overflow-hidden group flex flex-col justify-between ${
                  isWideEstate ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Poster / Flyer Image Banner */}
                <div 
                  className={`relative ${isWideEstate ? 'h-72 sm:h-96 md:h-[420px]' : 'h-80 sm:h-96 md:h-[420px]'} bg-slate-950 overflow-hidden cursor-pointer flex items-center justify-center`}
                  onClick={() => onOpenLightbox && onOpenLightbox({
                    src: visual.src,
                    title: visual.title,
                    subtitle: visual.subtitle,
                    category: camp.tag,
                    alt: visual.alt
                  })}
                >
                  {/* Ambient blurred backdrop */}
                  <img 
                    src={visual.src} 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover blur-md opacity-25 scale-110"
                    referrerPolicy="no-referrer"
                  />

                  {/* Full uncropped main poster image */}
                  <img 
                    src={visual.src} 
                    alt={visual.alt}
                    className="relative z-10 max-h-full w-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-black/20 pointer-events-none z-10" />
                  
                  {/* Category Tag pill */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-300 bg-slate-950/90 border border-amber-500/40 px-3 py-1 rounded-full shadow-lg backdrop-blur-md">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      {camp.tag}
                    </span>
                  </div>

                  {/* Click to Enlarge Badge */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-2 rounded-xl bg-black/80 border border-slate-700 text-white flex items-center gap-1 text-[11px] font-semibold backdrop-blur-md">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>View Full Flyer</span>
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-amber-400">
                        {camp.organization}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {camp.focusArea}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                      {camp.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {camp.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{camp.impactMetrics}</span>
                    </div>

                    <button
                      onClick={() => onOpenLightbox && onOpenLightbox({
                        src: visual.src,
                        title: visual.title,
                        subtitle: visual.subtitle,
                        category: camp.tag,
                        alt: visual.alt
                      })}
                      className="text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <Maximize2 className="w-3 h-3 text-amber-400" />
                      <span>Inspect Flyer</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
