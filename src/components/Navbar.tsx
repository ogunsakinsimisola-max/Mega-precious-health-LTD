import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Menu, 
  X, 
  Phone, 
  BookOpen, 
  ExternalLink, 
  FileText, 
  Sparkles,
  HeartPulse,
  Award,
  Crown
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  activeTab?: string;
  onSelectTab?: (tabId: string) => void;
  onOpenCertificate: () => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeTab, 
  onSelectTab, 
  onOpenCertificate, 
  onOpenConsultation 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navSections = [
    { id: 'overview', name: 'Overview' },
    { id: 'mission-values', name: 'Mission & Values' },
    { id: 'founder', name: 'Dr. Precious (Founder)' },
    { id: 'books', name: 'Books & Store' },
    { id: 'services', name: 'Services & Real Estate' },
    { id: 'media', name: 'Media Hub (TV)' },
    { id: 'corporate', name: 'Corporate & Contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (onSelectTab) {
      onSelectTab(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#060c1c]/95 backdrop-blur-xl border-b border-emerald-500/20 shadow-2xl py-2.5 sm:py-3' 
          : 'bg-gradient-to-b from-[#060c1c] via-[#060c1c]/90 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Main Prominent Corporate Logo & Brand */}
          <button 
            onClick={() => handleNavClick('overview')}
            className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
            id="brand-logo-nav"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-400 via-emerald-500 to-teal-600 p-[2px] shadow-xl group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#070d1e] rounded-[10px] flex items-center justify-center">
                <HeartPulse className="w-6 h-6 text-emerald-400 group-hover:text-amber-300 transition-colors" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 text-[#070d1e] flex items-center justify-center text-[9px] font-bold shadow-md">
                ★
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-base sm:text-xl lg:text-2xl tracking-tight text-white group-hover:text-amber-300 transition-colors drop-shadow-sm">
                  MEGA PRECIOUS HEALTH <span className="text-emerald-400 font-bold">LTD</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] tracking-wider text-slate-300 font-medium">
                <span className="text-amber-400 font-semibold uppercase">Healthcare & Wellness</span>
                <span className="text-slate-500">•</span>
                <span className="text-emerald-300 font-medium">Clinical Excellence & Impact</span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navSections.map((item) => {
              const isCurrent = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-xs font-semibold px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                    isCurrent 
                      ? 'bg-emerald-600 text-white shadow-md' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={onOpenCertificate}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 bg-amber-950/60 hover:bg-amber-900/70 border border-amber-500/40 px-3 py-2 rounded-lg transition-all shadow-sm cursor-pointer"
              title="View Official UK Incorporation Certificate"
              id="view-certificate-nav-btn"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>UK Certificate</span>
            </button>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 px-4 py-2 rounded-lg shadow-lg shadow-emerald-900/40 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              id="nav-consult-cta-btn"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Contact & Inquiries</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenCertificate}
              className="text-[11px] font-semibold text-amber-300 bg-amber-950/80 border border-amber-500/40 px-2.5 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer"
              id="mobile-cert-quick-btn"
            >
              <FileText className="w-3 h-3 text-amber-400" />
              <span>UK Verified</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/90 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#060c1c]/98 border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1 pb-4 border-b border-slate-800">
            {navSections.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left block px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  activeTab === item.id
                    ? 'bg-emerald-600 text-white'
                    : 'text-slate-200 hover:text-emerald-400 hover:bg-slate-800/60'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="pt-4 space-y-2.5">
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${COMPANY_INFO.phones.nigeria.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-800/80 text-slate-200 text-xs font-semibold border border-slate-700"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call NG: {COMPANY_INFO.phones.nigeria}</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phones.uk.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-800/80 text-slate-200 text-xs font-semibold border border-slate-700"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call UK: {COMPANY_INFO.phones.uk}</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="https://selar.com/13798w9686"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-bold"
              >
                <BookOpen className="w-4 h-4" />
                <span>Attention Trap</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md cursor-pointer"
              >
                <span>Contact Desk</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </header>
  );
};
