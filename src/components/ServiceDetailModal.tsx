import React from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, Building2, Users } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ 
  service, 
  onClose, 
  onOpenConsultation 
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-emerald-500/40 shadow-2xl flex flex-col">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-950/95 border-b border-slate-800">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
              {service.subtitle}
            </span>
            <h3 className="font-heading font-bold text-lg text-white">
              {service.title}
            </h3>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Overview & Strategic Scope
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Deliverables / Scope list */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Key Deliverables & Methodologies
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audience */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1.5 text-xs">
            <div className="flex items-center gap-2 text-amber-400 font-semibold">
              <Users className="w-4 h-4" />
              <span>Target Beneficiaries & Audience</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              {service.audience}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 px-6 py-4 bg-slate-950/95 border-t border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-lg transition-all"
          >
            <span>Enquire About This Focus</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
};
