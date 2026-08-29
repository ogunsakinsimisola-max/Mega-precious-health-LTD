import React from 'react';
import { 
  ShieldCheck, 
  FileText, 
  Building2, 
  Calendar, 
  Scale, 
  Globe2, 
  CheckCircle2, 
  ExternalLink,
  Award
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface CorporateSectionProps {
  onOpenCertificate: () => void;
}

export const CorporateSection: React.FC<CorporateSectionProps> = ({ onOpenCertificate }) => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#09132b] overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[300px] bg-amber-950/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-amber-500/30 shadow-2xl backdrop-blur-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Official Corporate Details */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Verified Corporate Credentials</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3.5xl lg:text-4xl font-bold text-white tracking-tight">
                Corporate Governance & International Registration
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Mega Precious Health LTD operates under the strict governance and legal frameworks of England and Wales. We pride ourselves on corporate transparency, international compliance, and professional integrity.
              </p>

              {/* Data Table / Key Value List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-amber-400" />
                    Official Entity Name
                  </span>
                  <p className="font-bold text-white text-sm font-heading">
                    {COMPANY_INFO.name}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-emerald-400" />
                    Company Number
                  </span>
                  <p className="font-mono font-bold text-amber-300 text-sm">
                    {COMPANY_INFO.companyNumber}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    Date of Incorporation
                  </span>
                  <p className="font-semibold text-white">
                    {COMPANY_INFO.incorporationDate}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Globe2 className="w-3.5 h-3.5 text-purple-400" />
                    Jurisdiction
                  </span>
                  <p className="font-semibold text-white">
                    {COMPANY_INFO.jurisdiction}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1 sm:col-span-2">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-teal-400" />
                    Governing Legislation
                  </span>
                  <p className="font-semibold text-white">
                    {COMPANY_INFO.governingAct}
                  </p>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenCertificate}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-500 hover:to-yellow-500 text-white font-bold text-xs shadow-lg shadow-amber-950/60 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  id="view-full-certificate-btn"
                >
                  <FileText className="w-4 h-4" />
                  <span>Inspect Incorporation Certificate</span>
                </button>
              </div>

            </div>

            {/* Right Column: Visual Trust Certificate Seal */}
            <div className="lg:col-span-5 flex justify-center">
              
              <div 
                onClick={onOpenCertificate}
                className="w-full max-w-sm rounded-2xl p-6 bg-slate-950/90 border border-amber-500/40 shadow-2xl relative group cursor-pointer hover:border-amber-400 transition-all"
              >
                {/* Visual Seal Header */}
                <div className="text-center pb-4 border-b border-slate-800 space-y-2">
                  <div className="w-14 h-14 mx-auto rounded-full bg-amber-500/10 border-2 border-amber-500/40 flex items-center justify-center text-amber-400 shadow-md group-hover:scale-110 transition-transform">
                    <Award className="w-7 h-7" />
                  </div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-amber-300">
                    Companies House
                  </h4>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                    Registrar of Companies for England and Wales
                  </p>
                </div>

                {/* Certificate Preview Body */}
                <div className="py-5 space-y-3 text-center">
                  <p className="text-xs text-slate-300 italic">
                    The Registrar of Companies hereby certifies that
                  </p>
                  <p className="font-heading text-sm font-bold text-white tracking-wider">
                    MEGA PRECIOUS HEALTH LTD
                  </p>
                  <p className="text-[11px] text-slate-400">
                    is this day incorporated under the Companies Act 2006 as a private company.
                  </p>
                  <div className="inline-block py-1.5 px-3 rounded bg-amber-950/50 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold">
                    No. 14394693
                  </div>
                </div>

                {/* Click to expand prompt */}
                <div className="pt-3 border-t border-slate-800 text-center">
                  <span className="text-[11px] font-semibold text-emerald-400 flex items-center justify-center gap-1 group-hover:underline">
                    <span>Click to open full high-resolution certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
