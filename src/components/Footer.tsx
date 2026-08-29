import React from 'react';
import { 
  HeartPulse, 
  ShieldCheck, 
  Instagram, 
  Youtube, 
  Twitter, 
  Facebook, 
  Mail, 
  Phone, 
  ArrowUp,
  FileText,
  Building2,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface FooterProps {
  onOpenCertificate: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenDisclaimer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenCertificate, 
  onOpenPrivacy, 
  onOpenTerms, 
  onOpenDisclaimer 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040813] text-slate-400 border-t border-slate-900 relative z-10">
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Registration Summary */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 p-0.5 shadow-lg">
                <div className="w-full h-full bg-[#070d1e] rounded-[10px] flex items-center justify-center">
                  <HeartPulse className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-white tracking-tight block">
                  MEGA PRECIOUS HEALTH LTD
                </span>
                <span className="text-[11px] tracking-wider text-emerald-400 uppercase font-semibold">
                  Official UK Registered Entity
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Advancing human health, inspiring behavioral wellbeing, and creating sustainable generational impact through clinical leadership and educational empowerment.
            </p>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] space-y-1">
              <div className="flex items-center justify-between text-slate-300">
                <span>Incorporated in England & Wales</span>
                <button
                  onClick={onOpenCertificate}
                  className="text-amber-400 hover:text-amber-300 font-semibold"
                >
                  Verify Certificate →
                </button>
              </div>
              <p className="text-slate-500 font-mono text-[10px]">
                Registration: 3 October 2022 • Companies Act 2006
              </p>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  About the Brand
                </a>
              </li>
              <li>
                <a href="#values" className="hover:text-emerald-400 transition-colors">
                  Mission & Values
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Solutions & Focus
                </a>
              </li>
              <li>
                <a href="#founder" className="hover:text-emerald-400 transition-colors">
                  Dr. Precious Uwagbai
                </a>
              </li>
              <li>
                <a href="#books" className="hover:text-emerald-400 transition-colors">
                  Authored Books
                </a>
              </li>
              <li>
                <a href="#media" className="hover:text-emerald-400 transition-colors">
                  Mega Precious TV
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  Contact & Enquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Books & Media Resources */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Publications & Media
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="https://selar.com/90m17f3v31" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-red-400 transition-colors flex items-center gap-1 text-amber-300 font-semibold"
                >
                  <span>The Secrets of Life</span>
                  <ExternalLink className="w-3 h-3 text-red-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://selar.co/qu7w13" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-slate-300"
                >
                  <span>5 Simple Steps to Lose Weight</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://selar.com/13798w9686" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-amber-400 transition-colors flex items-center gap-1 text-slate-300"
                >
                  <span>The Attention Trap (30-Day Reset)</span>
                  <ExternalLink className="w-3 h-3 text-amber-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://selar.com/13798w9686" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-slate-200 transition-colors flex items-center gap-1 text-slate-400"
                >
                  <span>Overcoming Addiction to Masturbation</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href={COMPANY_INFO.socials.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition-colors flex items-center gap-1 text-slate-300 pt-1"
                >
                  <span>Mega Precious TV (YouTube)</span>
                  <ExternalLink className="w-3 h-3 text-red-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Contacts & Social */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Inquiries
            </h4>
            
            <div className="space-y-2 text-xs">
              <p className="text-slate-300">
                <strong className="text-slate-400 block font-normal">Nigeria Desk:</strong>
                {COMPANY_INFO.phones.nigeria}
              </p>
              <p className="text-slate-300">
                <strong className="text-slate-400 block font-normal">United Kingdom:</strong>
                {COMPANY_INFO.phones.uk}
              </p>
              <p className="text-slate-300">
                <strong className="text-slate-400 block font-normal">Email:</strong>
                {COMPANY_INFO.email}
              </p>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <a
                href={COMPANY_INFO.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-pink-400 hover:bg-slate-800 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-red-500 hover:bg-slate-800 transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-sky-400 hover:bg-slate-800 transition-colors"
                title="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="border-t border-slate-900/80 bg-[#03060f] py-6 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="text-center sm:text-left space-y-1">
            <p className="text-slate-400">
              © 2026 {COMPANY_INFO.name}. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-600">
              Incorporated under the Companies Act 2006 in England and Wales • Company Number: {COMPANY_INFO.companyNumber}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={onOpenDisclaimer}
              className="hover:text-slate-300 transition-colors"
            >
              Medical Disclaimer
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
};
