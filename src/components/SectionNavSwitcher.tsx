import React from 'react';
import { 
  Sparkles, 
  Target,
  User, 
  BookOpen, 
  Stethoscope, 
  Tv, 
  Building2, 
  Layers,
  CheckCircle2,
  Compass
} from 'lucide-react';

export interface SectionTab {
  id: string;
  name: string;
  shortLabel: string;
  description: string;
  icon: React.ElementType;
  badge?: string;
  accent: string;
}

interface SectionNavSwitcherProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
}

export const SECTION_TABS: SectionTab[] = [
  {
    id: 'overview',
    name: 'Overview & About',
    shortLabel: 'Overview',
    description: 'Corporate identity, UK incorporation & story',
    icon: Sparkles,
    accent: 'from-emerald-600 to-teal-600'
  },
  {
    id: 'mission-values',
    name: 'Mission, Vision & Core Values',
    shortLabel: 'Mission & Vision',
    description: 'Vision for impact, mission statement & values',
    icon: Target,
    badge: 'Manifesto',
    accent: 'from-teal-600 to-emerald-500'
  },
  {
    id: 'founder',
    name: 'Dr. Precious (Founder)',
    shortLabel: 'Dr. Precious',
    description: 'Medical Doctor, 8 Dimensions & Portfolio',
    icon: User,
    badge: '8 Dimensions',
    accent: 'from-amber-500 to-yellow-600'
  },
  {
    id: 'books',
    name: 'Books & Store',
    shortLabel: 'Books & Store',
    description: 'The Secrets of Life, Attention Trap & Store',
    icon: BookOpen,
    badge: 'Direct Selar',
    accent: 'from-amber-600 to-orange-600'
  },
  {
    id: 'services',
    name: 'Services & Real Estate',
    shortLabel: 'Services & Housing',
    description: 'Clinical health, King\'s Embassy & campaigns',
    icon: Stethoscope,
    accent: 'from-teal-600 to-cyan-600'
  },
  {
    id: 'media',
    name: 'Media Hub (Mega TV)',
    shortLabel: 'Media TV',
    description: 'Discovering Seasons & YouTube Broadcasts',
    icon: Tv,
    badge: 'Watch Video',
    accent: 'from-red-600 to-rose-600'
  },
  {
    id: 'corporate',
    name: 'Corporate & Contact',
    shortLabel: 'Contact & Desk',
    description: 'Official Registration, Governance & Direct Booking',
    icon: Building2,
    badge: 'Verified Desk',
    accent: 'from-emerald-700 to-slate-800'
  }
];

export const SectionNavSwitcher: React.FC<SectionNavSwitcherProps> = ({ 
  activeTab, 
  onSelectTab 
}) => {
  return (
    <div className="sticky top-[68px] sm:top-[74px] z-40 bg-[#060c1c]/95 backdrop-blur-xl border-y border-emerald-500/20 py-2 sm:py-2.5 px-4 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        
        {/* Left Section Label */}
        <div className="hidden xl:flex items-center gap-2 text-xs text-slate-300 shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold text-white uppercase tracking-wider text-[11px]">
            Explore By Section:
          </span>
        </div>

        {/* Scrollable Tab Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto scrollbar-none py-1">
          {SECTION_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? `bg-gradient-to-r ${tab.accent} text-white shadow-lg scale-[1.02]`
                    : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.shortLabel}</span>
                {tab.badge && (
                  <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded font-bold uppercase ${
                    isActive ? 'bg-black/30 text-amber-200' : 'bg-slate-800 text-amber-400'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}

          {/* View All (Continuous Scroll) Mode Toggle */}
          <button
            onClick={() => onSelectTab('all')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
              activeTab === 'all'
                ? 'bg-slate-100 text-slate-900 shadow-lg'
                : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>View All</span>
          </button>
        </div>

        {/* Right Active Indicator */}
        <div className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-400 shrink-0">
          <span className="text-[11px] text-amber-300/90 font-mono">
            {activeTab === 'all' 
              ? 'Continuous Full View' 
              : `Viewing: ${SECTION_TABS.find(t => t.id === activeTab)?.name}`}
          </span>
        </div>

      </div>
    </div>
  );
};
