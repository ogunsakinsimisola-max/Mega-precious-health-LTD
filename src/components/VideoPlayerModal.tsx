import React from 'react';
import { X, Play, Youtube, ExternalLink, Clock, User } from 'lucide-react';
import { MediaVideo } from '../types';
import { COMPANY_INFO } from '../data/content';

interface VideoPlayerModalProps {
  video: MediaVideo | null;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-red-500/30 shadow-2xl overflow-hidden flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-red-600/20 text-red-400">
              <Youtube className="w-4 h-4" />
            </span>
            <span className="font-heading font-bold text-xs sm:text-sm text-white">
              Mega Precious TV • {video.category} Broadcast
            </span>
          </div>
          
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player / Screen Simulation */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          
          {/* Visual Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-red-950/40 flex flex-col items-center justify-center p-6 text-center">
            
            <div className="w-20 h-20 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-2xl shadow-red-950 mb-4 animate-pulse">
              <Play className="w-8 h-8 ml-1 fill-white" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-red-400 bg-red-950/80 px-3 py-1 rounded-full border border-red-500/30 mb-2">
              Broadcast Preview
            </span>

            <h4 className="font-heading text-lg sm:text-xl font-bold text-white max-w-lg mb-2">
              {video.title}
            </h4>

            <p className="text-xs text-slate-400">
              Presented by {video.speaker} • Duration: {video.duration}
            </p>

            <div className="mt-5">
              <a
                href={COMPANY_INFO.socials.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-lg transition-all hover:scale-105"
              >
                <span>Watch Full Broadcast on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

        {/* Modal Info Footer */}
        <div className="p-6 bg-slate-950 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-amber-400 font-semibold">
              <User className="w-3.5 h-3.5" />
              <span>{video.speaker}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400 font-mono">
              <Clock className="w-3.5 h-3.5" />
              <span>{video.duration}</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {video.description}
          </p>
        </div>

      </div>

    </div>
  );
};
