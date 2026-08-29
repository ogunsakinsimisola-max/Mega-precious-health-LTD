import React, { useState } from 'react';
import { 
  Heart, 
  Target, 
  Eye, 
  ShieldCheck, 
  Sparkles, 
  ArrowUpRight, 
  Check,
  Building2,
  Users,
  Lightbulb
} from 'lucide-react';
import drGreenScrubs from '../assets/images/dr_green_scrubs_clinic_1787094263174.jpg';
import drWhiteSuit from '../assets/images/dr_white_suit_globe_1787094249074.jpg';

interface AboutSectionProps {
  onOpenCertificate: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCertificate }) => {
  const [activeTab, setActiveTab] = useState<'story' | 'mission' | 'vision' | 'values'>('story');

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#070d1e] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <span>About Us</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            A Vision for Better Health and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400">
              Greater Impact
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Mega Precious Health LTD was established to redefine how individuals and communities experience health and wellbeing — combining clinical medical insight with educational empowerment, modern digital media, and compassionate human advocacy.
          </p>
        </div>

        {/* 2-Column Grid: Editorial Image vs Content with Interactive Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Editorial Multi-Image Composition */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
              <img 
                src={drGreenScrubs} 
                alt="Dr. Precious Uwagbai Clinical Excellence" 
                className="w-full h-80 sm:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070d1e] via-[#070d1e]/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      Human-Centred Thinking
                    </h4>
                    <p className="text-[11px] text-slate-300">
                      Transforming health literacy across continents.
                    </p>
                  </div>
                  <button 
                    onClick={onOpenCertificate}
                    className="p-2 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-900 transition-colors"
                    title="View UK Incorporation"
                  >
                    <Building2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick stats / credibility strip */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Incorporation</p>
                <p className="text-sm font-bold text-white mt-1">England & Wales</p>
                <p className="text-[11px] text-emerald-300/90 font-medium">Official UK Registered Entity</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Leadership</p>
                <p className="text-sm font-bold text-white mt-1">Dr. Precious Uwagbai</p>
                <p className="text-[11px] text-slate-400">MD, Author, Advocate</p>
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed Narrative & Core Statements */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Tab Navigation */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800">
              {[
                { id: 'story', label: 'Our Story', icon: Heart },
                { id: 'mission', label: 'Our Mission', icon: Target },
                { id: 'vision', label: 'Our Vision', icon: Eye },
                { id: 'values', label: 'Our Core Values', icon: ShieldCheck },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                      isActive 
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab 1: Our Story */}
            {activeTab === 'story' && (
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4 animate-in fade-in duration-300">
                <h3 className="font-heading text-xl font-bold text-white">
                  Founded with Purpose. Driven by Impact.
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Mega Precious Health LTD was incorporated on 3 October 2022 under the laws of England and Wales (Company No: 14394693). Established under the visionary leadership of Dr. Precious Uwagbai, the company was conceived to address critical contemporary health vulnerabilities: preventable metabolic illness, behavioral health challenges, digital attention fragmentation, and systemic gaps in health education.
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Instead of treating health merely as a reactive clinical intervention, Mega Precious Health embraces a holistic, proactive paradigm where lifestyle habits, informed minds, compassionate guidance, and innovative digital education work hand in hand.
                </p>
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Proactive Preventative Health</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Evidence-Informed Educational Books</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Community Youth Health Advocacy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>International Wellbeing Outlook</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Mission */}
            {activeTab === 'mission' && (
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-emerald-500/20 space-y-4 animate-in fade-in duration-300">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  <Target className="w-4 h-4" />
                  <span>The Official Mission</span>
                </div>
                <blockquote className="font-heading text-lg sm:text-xl font-medium text-white leading-relaxed border-l-4 border-emerald-500 pl-4 py-1 italic">
                  &ldquo;To develop and promote innovative, reliable and people-centred health and wellbeing solutions that create meaningful value for individuals, families and communities.&rdquo;
                </blockquote>
                <p className="text-sm text-slate-300 leading-relaxed pt-2">
                  Our mission guides every book published, seminar delivered, community outreach undertaken, and digital consultation provided. We believe true healthcare empowers people to take proactive charge of their daily choices.
                </p>
              </div>
            )}

            {/* Tab 3: Vision */}
            {activeTab === 'vision' && (
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-amber-500/20 space-y-4 animate-in fade-in duration-300">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <Eye className="w-4 h-4" />
                  <span>The Official Vision</span>
                </div>
                <blockquote className="font-heading text-lg sm:text-xl font-medium text-white leading-relaxed border-l-4 border-amber-500 pl-4 py-1 italic">
                  &ldquo;To build a trusted and innovative health and wellbeing brand recognised for excellence, positive impact and sustainable solutions.&rdquo;
                </blockquote>
                <p className="text-sm text-slate-300 leading-relaxed pt-2">
                  We envision a world where health knowledge is accessible, behavioral wellness is elevated, and leaders inspire generations toward vibrant living, clear focus, and meaningful longevity.
                </p>
              </div>
            )}

            {/* Tab 4: Values */}
            {activeTab === 'values' && (
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4 animate-in fade-in duration-300">
                <h3 className="font-heading text-xl font-bold text-white">
                  Our Five Guiding Pillars
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50">
                    <span className="font-bold text-emerald-400">1. INTEGRITY</span>
                    <p className="text-slate-300 mt-1">Honesty, transparency & responsible leadership.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50">
                    <span className="font-bold text-emerald-400">2. EXCELLENCE</span>
                    <p className="text-slate-300 mt-1">Pursuing quality and professionalism in all endeavors.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50">
                    <span className="font-bold text-emerald-400">3. INNOVATION</span>
                    <p className="text-slate-300 mt-1">Embracing modern thinking and digital health solutions.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50">
                    <span className="font-bold text-emerald-400">4. COMPASSION</span>
                    <p className="text-slate-300 mt-1">Keeping people and human dignity at the center.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700/50 sm:col-span-2">
                    <span className="font-bold text-emerald-400">5. IMPACT</span>
                    <p className="text-slate-300 mt-1">Creating meaningful, enduring value in real lives and communities.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#founder"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 px-4 py-2 rounded-lg transition-colors"
              >
                <span>Meet Founder Dr. Precious</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onOpenCertificate}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/70 hover:bg-slate-700 border border-slate-700 px-4 py-2 rounded-lg transition-colors"
              >
                <span>View UK Certificate No. 14394693</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
