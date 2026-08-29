import React from 'react';
import { X, ZoomIn, Download, ExternalLink, Sparkles } from 'lucide-react';

export interface LightboxImage {
  src: string;
  title: string;
  subtitle?: string;
  category?: string;
  alt: string;
}

interface ImageLightboxModalProps {
  image: LightboxImage | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-950/95 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between p-4 bg-slate-900/90 rounded-t-2xl border-t border-x border-slate-700/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 border border-amber-500/30 px-2.5 py-1 rounded-md">
              {image.category || "Mega Precious Health Visual"}
            </span>
            <h3 className="font-heading text-sm sm:text-base font-bold text-white tracking-tight truncate max-w-md">
              {image.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            title="Close Preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* High Resolution Image Container */}
        <div className="relative w-full max-h-[72vh] flex items-center justify-center bg-slate-950 border-x border-slate-700/80 overflow-hidden">
          <img 
            src={image.src} 
            alt={image.alt || image.title} 
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-sm shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Bottom Metadata Bar */}
        <div className="w-full p-4 bg-slate-900/90 rounded-b-2xl border-b border-x border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-0.5">
            <p className="text-slate-200 font-medium">
              {image.subtitle || "Official Photographic Documentation • Mega Precious Health LTD"}
            </p>
            <p className="text-[11px] text-slate-400">
              Dr. Precious Uwagbai (MD) • Executive Leadership & Impact Portfolio
            </p>
          </div>

          <button
            onClick={onClose}
            className="self-start sm:self-auto px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors"
          >
            Done Viewing
          </button>
        </div>

      </div>
    </div>
  );
};
