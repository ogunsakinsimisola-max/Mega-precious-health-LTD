import React, { useState } from 'react';
import { 
  Award, 
  Stethoscope, 
  BookOpen, 
  Mic, 
  Users, 
  Building, 
  Heart, 
  Globe2, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  Phone,
  Mail,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  ShieldCheck,
  Compass,
  X,
  Target,
  Maximize2
} from 'lucide-react';
import { FOUNDER_INFO, COMPANY_INFO } from '../data/content';
import { LightboxImage } from './ImageLightboxModal';

// Authentic Uploaded Portraits & Visuals
import drWhiteSuit from '../assets/images/dr_white_suit_globe_1787094249074.jpg';
import drGreenScrubs from '../assets/images/dr_green_scrubs_clinic_1787094263174.jpg';
import drRedSuit from '../assets/images/dr_red_suit_desk_1787094276429.jpg';
import drNavyGoldTuxedo from '../assets/images/dr_navy_gold_tuxedo_1787094291590.jpg';
import drBlackTuxedo from '../assets/images/dr_black_tuxedo_desk_1787094307985.jpg';
import ydiCoordinatorPodium from '../assets/images/ydi_coordinator_podium_1787586028645.jpg';
import associateMinisterRobe from '../assets/images/associate_minister_robe_1787585767400.jpg';
import kingsEmbassyVilla from '../assets/images/kings_embassy_villa_1787094360808.jpg';

interface FounderSectionProps {
  onOpenConsultation: () => void;
  onOpenStoryModal: () => void;
  onOpenLightbox?: (img: LightboxImage) => void;
}

interface RoleDetail {
  id: string;
  role: string;
  shortTag: string;
  tagline: string;
  desc: string;
  placeholder: string;
  icon: React.ElementType;
  accent: string;
  borderColor: string;
  image: string;
  imageAlt: string;
  photoCaption: string;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ 
  onOpenConsultation, 
  onOpenStoryModal,
  onOpenLightbox
}) => {
  const [selectedRole, setSelectedRole] = useState<RoleDetail | null>(null);

  const eightRoles: RoleDetail[] = [
    {
      id: "doctor",
      role: "Medical Doctor",
      shortTag: "Clinical Medicine",
      tagline: "Preventative & Metabolic Healthcare",
      desc: "Championing preventative lifestyle medicine, metabolic health, nutrition awareness, and chronic disease reduction strategies through approachable, evidence-informed guidance.",
      placeholder: "[Clinical Practice, Medical Specialties, Hospital Affiliations & Preventative Medicine Frameworks]",
      icon: Stethoscope,
      accent: "text-emerald-400",
      borderColor: "border-emerald-500/40",
      image: drGreenScrubs,
      imageAlt: "Dr. Precious Uwagbai in Clinical Scrubs with Stethoscope",
      photoCaption: "Clinical Practice • Preventative & Metabolic Care"
    },
    {
      id: "speaker",
      role: "Global Speaker",
      shortTag: "Keynotes & Summits",
      tagline: "Transformational Keynotes & Masterclasses",
      desc: "Delivering dynamic keynote addresses on purposeful living, behavioral health transformation, executive stamina, and youth leadership across international stages and media channels.",
      placeholder: "[Details on Speaking Engagements, Keynote Topics, International Summits & Booking Calendar]",
      icon: Mic,
      accent: "text-amber-400",
      borderColor: "border-amber-500/40",
      image: drRedSuit,
      imageAlt: "Dr. Precious Uwagbai Global Keynote Speaker in Brocade Blazer",
      photoCaption: "Global Keynote Address & International Conferences"
    },
    {
      id: "coach",
      role: "Leadership Coach",
      shortTag: "Executive Mentorship",
      tagline: "Executive Focus & Behavioral Coaching",
      desc: "Mentoring executives, entrepreneurs, and high-impact leaders to maintain cognitive stamina, digital discipline, moral clarity, and organizational vitality.",
      placeholder: "[Leadership Coaching Philosophy, Executive Mentorship Programs & Strategic Alignment Frameworks]",
      icon: Compass,
      accent: "text-blue-400",
      borderColor: "border-blue-500/40",
      image: drNavyGoldTuxedo,
      imageAlt: "Dr. Precious Uwagbai Executive Leadership Coach",
      photoCaption: "Executive Mentorship & High-Performance Coaching"
    },
    {
      id: "ambassador",
      role: "Brand Ambassador",
      shortTag: "Corporate Brand",
      tagline: "Strategic Brand Partnerships",
      desc: "Representing visionary health, lifestyle, and educational institutions with uncompromising credibility, executive charisma, and media excellence.",
      placeholder: "[Brand Partnerships, Corporate Endorsements, Ambassadorial Portfolio & Media Campaign Highlights]",
      icon: Award,
      accent: "text-purple-400",
      borderColor: "border-purple-500/40",
      image: drBlackTuxedo,
      imageAlt: "Dr. Precious Uwagbai Brand Ambassador in Jacquard Tuxedo",
      photoCaption: "Corporate Brand Ambassador & Media Representative"
    },
    {
      id: "realestate",
      role: "Real Estate Guru",
      shortTag: "King's Embassy",
      tagline: "CEO, King's Embassy Real Estate",
      desc: "Mentoring, building, and delivering affordable, royal, and well-designed homes to foster family security, community growth, and generational wealth creation across Nigeria.",
      placeholder: "[Real Estate Portfolio, Ongoing Housing Projects, Wealth Creation Philosophy & Property Advisory]",
      icon: Building,
      accent: "text-yellow-400",
      borderColor: "border-yellow-500/40",
      image: kingsEmbassyVilla,
      imageAlt: "King's Embassy Real Estate Luxury Developments",
      photoCaption: "King's Embassy Luxury & Affordable Housing Deliveries"
    },
    {
      id: "yd",
      role: "YD Intl. Coordinator",
      shortTag: "Youth Development",
      tagline: "Empowering Next-Generation Leaders",
      desc: "Leading international youth development structures, campus outreaches, substance abuse intervention programs, and mentorship networks worldwide.",
      placeholder: "[Youth Development International Coordination Initiatives, Campus Chapters & Youth Summits]",
      icon: Users,
      accent: "text-teal-400",
      borderColor: "border-teal-500/40",
      image: ydiCoordinatorPodium,
      imageAlt: "Dr. Precious Uwagbai YD International Coordinator speaking at transparent podium",
      photoCaption: "YD Intl. Coordinator • Youth Mentorship & Leadership"
    },
    {
      id: "minister",
      role: "Associate Minister",
      shortTag: "Pastoral & Faith",
      tagline: "Faith, Morality & Community Care",
      desc: "Serving in faith leadership, pastoral care, and philanthropic outreaches that uplift human dignity, emotional healing, and moral purpose.",
      placeholder: "[Ministerial & Community Service Engagements, Pastoral Guidance, Devotional Insights & Faith Outreaches]",
      icon: Heart,
      accent: "text-rose-400",
      borderColor: "border-rose-500/40",
      image: associateMinisterRobe,
      imageAlt: "Dr. Precious Uwagbai Associate Minister in Ceremonial Clerical Robe",
      photoCaption: "Associate Minister • Pastoral & Faith Leadership"
    },
    {
      id: "advocate",
      role: "Global Health Advocate",
      shortTag: "Public Health",
      tagline: "Health Literacy & Policy Awareness",
      desc: "Advocating on international platforms for preventative care literacy, youth substance abuse prevention (MTN Foundation partner), and digital attention wellness.",
      placeholder: "[Global Health Advocacy Campaigns, Public Health Policy Papers, Skin Health Days & Community Screenings]",
      icon: Globe2,
      accent: "text-sky-400",
      borderColor: "border-sky-500/40",
      image: drWhiteSuit,
      imageAlt: "Dr. Precious Uwagbai Global Health Advocate",
      photoCaption: "International Public Health & Preventative Advocacy"
    }
  ];

  return (
    <section id="founder" className="relative py-16 sm:py-24 bg-[#070d1e] overflow-hidden">
      
      {/* Subtle World Map Background Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g fill="#10b981" opacity="0.5">
            <circle cx="280" cy="220" r="3" />
            <circle cx="320" cy="240" r="3" />
            <circle cx="360" cy="260" r="3" />
            <circle cx="580" cy="180" r="4" />
            <circle cx="610" cy="300" r="5" />
            <circle cx="620" cy="340" r="4" />
            <circle cx="900" cy="220" r="3" />
            <circle cx="940" cy="260" r="3" />
          </g>
          <path d="M 580 180 Q 595 240 610 300" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4 4" />
          <circle cx="580" cy="180" r="7" fill="#f59e0b" className="animate-pulse" />
          <circle cx="610" cy="300" r="7" fill="#10b981" className="animate-pulse" />
          <text x="590" y="175" fill="#f59e0b" fontSize="12" fontFamily="sans-serif" fontWeight="bold">LONDON (UK)</text>
          <text x="625" y="305" fill="#10b981" fontSize="12" fontFamily="sans-serif" fontWeight="bold">LAGOS (NG)</text>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mega Precious Health LTD Leadership</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Meet Our Founder:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400">
              Dr. Precious Uwagbai
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Medical doctor, author, international speaker, real estate leader, and health advocate driving global wellness innovation and purposeful living.
          </p>
        </div>

        {/* Main Founder Profile Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Portrait & Direct Contact */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl p-1.5 bg-gradient-to-b from-amber-400/40 via-slate-800 to-emerald-500/40 shadow-2xl overflow-hidden group">
              <div 
                className="relative rounded-[22px] overflow-hidden bg-slate-900 cursor-pointer"
                onClick={() => onOpenLightbox && onOpenLightbox({
                  src: drWhiteSuit,
                  title: "Dr. Precious Uwagbai",
                  subtitle: "Founder & Executive Leader • Mega Precious Health LTD",
                  category: "Executive Portrait",
                  alt: "Dr. Precious Uwagbai in executive white suit with gold globe"
                })}
              >
                {/* Clear Bright Image with No Shadow Mask */}
                <img 
                  src={drWhiteSuit} 
                  alt="Dr. Precious Uwagbai" 
                  className="w-full h-[470px] sm:h-[510px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Light bottom gradient only for text */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#060c1c] via-[#060c1c]/80 to-transparent" />
                
                {/* Click to Zoom Hint */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700 text-xs font-semibold text-white shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Click to Zoom</span>
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1.5 z-10">
                  <span className="text-xs font-bold px-3 py-1 rounded bg-amber-950/95 text-amber-300 border border-amber-500/40 inline-block">
                    Founder / Executive Leadership
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
                    {FOUNDER_INFO.name}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">
                    MD, MPH, PM • Author • Health Advocate • Global Speaker
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact & Social Handles */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Direct Verified Desk
                </span>
                <span className="text-[11px] text-emerald-400 font-bold">
                  ● Available for Inquiries
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={`tel:${COMPANY_INFO.phones.nigeria.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="truncate">NG: {COMPANY_INFO.phones.nigeria}</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phones.uk.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span className="truncate">UK: {COMPANY_INFO.phones.uk}</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2 border-t border-slate-800">
                <a
                  href={COMPANY_INFO.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-pink-400 hover:bg-slate-700 transition-colors"
                  title="Instagram: @DrPreciousUwas"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-red-500 hover:bg-slate-700 transition-colors"
                  title="YouTube: Mega Precious TV"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={COMPANY_INFO.socials.twitter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-sky-400 hover:bg-slate-700 transition-colors"
                  title="Twitter/X: @DrPreciousUwas"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-emerald-400 hover:bg-slate-700 transition-colors"
                  title="Email Dr. Precious"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Philosophy & Areas of Expertise */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Biography Narrative Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
                    Dr. Precious Uwagbai
                  </h3>
                  <p className="text-xs text-amber-400 font-semibold mt-0.5">
                    Medical Doctor • Author • Global Health Advocate • Leadership Coach
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Executive Profile</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {FOUNDER_INFO.bio}
              </p>

              {/* Leadership Philosophy Quote */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950/30 border border-amber-500/30">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
                  Leadership Philosophy
                </span>
                <blockquote className="text-xs sm:text-sm italic text-slate-200 leading-relaxed font-serif">
                  &ldquo;{FOUNDER_INFO.leadershipPhilosophy}&rdquo;
                </blockquote>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenStoryModal}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                  id="founder-read-story-btn"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Full Journey & Story</span>
                </button>

                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-xs border border-slate-700 transition-all cursor-pointer"
                  id="founder-connect-btn"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Book Consultation / Speaking</span>
                </button>
              </div>
            </div>

            {/* Areas of Core Expertise */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Core Domains of Impact & Advisory
              </h4>
              <div className="flex flex-wrap gap-2">
                {FOUNDER_INFO.expertise.map((exp, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 text-xs font-medium text-slate-200"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{exp}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* 8 Specific Leadership Roles with Clear, Large, Visible Photos */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400">
                Multi-Sector Dimensions
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                8 Specific Leadership Dimensions
              </h3>
            </div>
            <p className="text-xs text-slate-400">
              Each persona below shows verified photography. Click any card to inspect full details and dossier.
            </p>
          </div>

          {/* 8 Cards with Large, Crystal-Clear Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {eightRoles.map((roleItem) => {
              const Icon = roleItem.icon;
              return (
                <div
                  key={roleItem.id}
                  onClick={() => setSelectedRole(roleItem)}
                  className={`rounded-2xl bg-slate-900/95 border ${roleItem.borderColor} hover:border-emerald-400/80 transition-all duration-300 shadow-xl cursor-pointer group flex flex-col justify-between overflow-hidden hover:translate-y-[-3px]`}
                >
                  <div>
                    {/* Large Bright Photo */}
                    <div className="relative h-52 w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                      {/* Ambient backdrop */}
                      <img 
                        src={roleItem.image} 
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover blur-sm opacity-25 scale-110"
                        referrerPolicy="no-referrer"
                      />
                      {/* Uncropped full image */}
                      <img 
                        src={roleItem.image} 
                        alt={roleItem.imageAlt}
                        className="relative z-10 max-h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      {/* Subtle bottom gradient only */}
                      <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent pointer-events-none z-10" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                        <div className="w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-700 flex items-center justify-center shadow-md">
                          <Icon className={`w-4 h-4 ${roleItem.accent}`} />
                        </div>
                      </div>

                      <div className="absolute top-2.5 right-2.5">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-100 bg-slate-900/90 px-2 py-1 rounded-md border border-slate-700 shadow-md">
                          {roleItem.shortTag}
                        </span>
                      </div>

                      {/* Photo Caption Strip */}
                      <div className="absolute bottom-1.5 left-2.5 right-2.5">
                        <span className="text-[10px] font-medium text-amber-300 drop-shadow truncate block">
                          {roleItem.photoCaption}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 space-y-2">
                      <h4 className="font-heading text-base font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                        {roleItem.role}
                      </h4>

                      <p className="text-xs font-semibold text-slate-300">
                        {roleItem.tagline}
                      </p>

                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                        {roleItem.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-emerald-400 group-hover:text-emerald-300">
                      <span>View Role Details</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Role Detail Modal with High-Res Photo and Full Dossier */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-emerald-500/50 shadow-2xl p-6 sm:p-8 space-y-6 text-slate-200">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">
                  {React.createElement(selectedRole.icon, { className: `w-6 h-6 ${selectedRole.accent}` })}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                    Dr. Precious Uwagbai • Executive Portfolio
                  </span>
                  <h3 className="font-heading font-bold text-xl text-white">
                    {selectedRole.role}
                  </h3>
                </div>
              </div>
              <button 
                onClick={() => setSelectedRole(null)} 
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-Res Role Image with Lightbox Button */}
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 group">
              <img 
                src={selectedRole.image} 
                alt={selectedRole.imageAlt}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              
              <button
                onClick={() => onOpenLightbox && onOpenLightbox({
                  src: selectedRole.image,
                  title: selectedRole.role,
                  subtitle: selectedRole.tagline,
                  category: selectedRole.shortTag,
                  alt: selectedRole.imageAlt
                })}
                className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700 text-xs font-semibold text-white flex items-center gap-1.5 shadow-lg hover:bg-slate-800 transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Enlarge Photo</span>
              </button>

              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-sm font-bold text-amber-300 block">
                  {selectedRole.tagline}
                </span>
                <span className="text-xs text-slate-300">
                  {selectedRole.photoCaption}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Scope & Responsibility Overview
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed">
                {selectedRole.desc}
              </p>
            </div>

            {/* Structured Dossier Placeholder */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-emerald-400" />
                <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
                  Future Content Section / Dossier Pipeline
                </h5>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 font-mono text-xs text-amber-300/90 leading-relaxed">
                {selectedRole.placeholder}
              </div>
              <p className="text-[11px] text-slate-400">
                This structured section is pre-architected to host high-resolution media galleries, published papers, speaking itineraries, and portfolio assets upon final release.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => {
                  setSelectedRole(null);
                  onOpenConsultation();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                <span>Book Inquiry For This Role</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setSelectedRole(null)}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
