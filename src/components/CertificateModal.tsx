import React from 'react';
import { 
  X, 
  Award, 
  ShieldCheck, 
  Printer, 
  Download, 
  ExternalLink,
  CheckCircle2,
  Building2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-amber-500/40 shadow-2xl flex flex-col">
        
        {/* Modal Top Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-950/95 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <span className="font-heading font-bold text-sm text-white">
              UK Companies House Certificate of Incorporation
            </span>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            id="close-certificate-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Paper Body */}
        <div className="p-6 sm:p-10 space-y-6">
          
          {/* Certificate Ornamental Border Container */}
          <div className="relative rounded-2xl p-6 sm:p-8 bg-[#fdfbf7] text-slate-900 border-4 border-double border-amber-900/40 shadow-xl font-serif">
            
            {/* Top Header & Crown Emblem */}
            <div className="text-center space-y-2 border-b-2 border-amber-900/30 pb-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 border-2 border-amber-800/40 flex items-center justify-center text-amber-900 shadow-sm">
                <Award className="w-8 h-8" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-widest text-slate-900 uppercase font-display">
                CERTIFICATE OF INCORPORATION
              </h2>
              <p className="text-xs tracking-widest uppercase text-slate-600 font-sans font-semibold">
                OF A PRIVATE LIMITED COMPANY
              </p>
              <p className="text-sm font-bold text-amber-900 font-mono">
                Company Number: {COMPANY_INFO.companyNumber}
              </p>
            </div>

            {/* Official Certification Declaration */}
            <div className="py-6 space-y-4 text-center text-sm leading-relaxed">
              <p className="italic text-slate-700">
                The Registrar of Companies for England and Wales, hereby certifies that
              </p>
              
              <div className="py-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-wider uppercase font-sans">
                  {COMPANY_INFO.name}
                </h3>
              </div>

              <p className="text-slate-800 text-xs sm:text-sm">
                is this day incorporated under the <strong className="font-semibold">Companies Act 2006</strong> as a private company, that the company is limited by shares, and the situation of its registered office is in <strong className="font-semibold">{COMPANY_INFO.jurisdiction}</strong>.
              </p>

              <div className="pt-4 flex flex-col items-center justify-center space-y-1">
                <p className="text-xs text-slate-600 uppercase tracking-wider font-sans">
                  Given at Companies House, Cardiff, on
                </p>
                <p className="font-bold text-slate-900 text-sm font-sans">
                  {COMPANY_INFO.incorporationDate}
                </p>
              </div>
            </div>

            {/* Official Seal / Registrar Bottom */}
            <div className="pt-6 border-t-2 border-amber-900/30 flex items-center justify-between text-[11px] text-slate-600 font-sans">
              <div>
                <span className="font-bold text-slate-900 block">COMPANIES HOUSE</span>
                <span>The official registrar of companies</span>
              </div>
              <div className="w-14 h-14 rounded-full border-2 border-dashed border-amber-900/50 flex items-center justify-center text-amber-950 text-[9px] font-bold uppercase text-center p-1 font-mono">
                Official UK Seal
              </div>
            </div>

          </div>

          {/* Verification Transparency Notes */}
          <div className="rounded-xl p-4 bg-slate-950 border border-slate-800 space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Public Registrar Record Authenticated</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              This digital verification copy certifies the legal registration of MEGA PRECIOUS HEALTH LTD under UK Law. You can independently confirm this entity on the UK Government Companies House register using reference number <strong>14394693</strong>.
            </p>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="sticky bottom-0 px-6 py-4 bg-slate-950/95 border-t border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
          >
            Close Viewer
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Document</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold shadow-md transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
