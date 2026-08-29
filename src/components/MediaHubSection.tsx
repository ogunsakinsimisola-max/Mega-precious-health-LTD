import React, { useState } from 'react';
import { 
  Play, 
  Youtube, 
  Tv, 
  ExternalLink, 
  Filter, 
  Clock, 
  User, 
  Sparkles, 
  Search,
  Maximize2,
  CheckCircle,
  Radio
} from 'lucide-react';
import { MEDIA_VIDEOS, COMPANY_INFO } from '../data/content';
import { MediaVideo } from '../types';
import { LightboxImage } from './ImageLightboxModal';

// Authentic Uploaded & Generated Media Thumbnails
import discoveringSeasonsImg from '../assets/images/discovering_seasons_1787097850797.jpg';
import drNavyGoldTuxedo from '../assets/images/dr_navy_gold_tuxedo_1787094291590.jpg';
import drGreenScrubs from '../assets/images/dr_green_scrubs_clinic_1787094263174.jpg';
import drRedSuit from '../assets/images/dr_red_suit_desk_1787094276429.jpg';
import attentionTrapCover from '../assets/images/attention_trap_cover_1787095680029.jpg';
import drugAbuseFlyer from '../assets/images/drug_abuse_zero_1787097034417.jpg';
import skinHealthFlyer from '../assets/images/skin_health_day_1787097021474.jpg';

interface MediaHubSectionProps {
  onSelectVideo: (video: MediaVideo) => void;
  onOpenLightbox?: (img: LightboxImage) => void;
}

export const MediaHubSection: React.FC<MediaHubSectionProps> = ({ onSelectVideo, onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Primary Featured Spotlight is the "Discovering Your Seasons" YouTube Broadcast
  const featuredVideo = MEDIA_VIDEOS.find(v => v.id === 'v1') || MEDIA_VIDEOS[0];

  const getThumbnailImage = (vidId: string) => {
    switch (vidId) {
      case 'v1':
        return discoveringSeasonsImg;
      case 'v2': // Becoming a Responsible Disciple (YDI @ 30)
        return drNavyGoldTuxedo;
      case 'v3': // Wisdom for Healthy Living
        return drGreenScrubs;
      case 'v4': // The Attention Trap
        return attentionTrapCover;
      case 'v5': // Zero Tolerance to Drug Abuse
        return drugAbuseFlyer;
      case 'v6': // World Skin Health Day
        return skinHealthFlyer;
      default:
        return drRedSuit;
    }
  };

  const categories = [
    'All',
    'Inspiration',
    'Leadership',
    'Health',
    'Education',
    'Community'
  ];

  // Exclude featured video from bottom grid so it never duplicates
  const filteredVideos = MEDIA_VIDEOS
    .filter(vid => vid.id !== 'v1')
    .filter((vid) => {
      const matchesCat = selectedCategory === 'All' || vid.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        vid.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vid.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });

  return (
    <section id="media" className="relative py-16 sm:py-24 bg-[#081126] overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-amber-950/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider">
              <Tv className="w-3.5 h-3.5 text-red-400" />
              <span>Mega Precious Media Hub</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Broadcasts, Keynotes &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-yellow-400">
                YouTube Media
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Official YouTube broadcasts, medical wisdom sessions, spiritual leadership keynotes, and youth advocacy series presented by Dr. Precious Uwagbai.
            </p>
          </div>

          {/* YouTube Subscribe CTA Card */}
          <div className="flex items-center gap-3">
            <a
              href={COMPANY_INFO.socials.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs shadow-xl shadow-red-950/60 transition-all hover:scale-[1.02] active:scale-[0.98]"
              id="youtube-channel-subscribe-btn"
            >
              <Youtube className="w-4 h-4" />
              <span>Subscribe on YouTube</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        </div>

        {/* Featured Video Spotlight: Discovering Your Seasons (GreatHouse Mandate YouTube Live) */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/95 to-red-950/40 border-2 border-red-500/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div 
              className="lg:col-span-6 relative h-64 sm:h-80 md:h-[400px] rounded-2xl overflow-hidden bg-slate-950 border border-red-500/40 cursor-pointer group shadow-2xl flex items-center justify-center"
              onClick={() => onSelectVideo(featuredVideo)}
            >
              {/* Blurred Ambient Background */}
              <img 
                src={discoveringSeasonsImg} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover blur-md opacity-30 scale-110"
                referrerPolicy="no-referrer"
              />
              {/* Full Uncropped Foreground Image */}
              <img 
                src={discoveringSeasonsImg} 
                alt="Discovering Your Seasons - Dr. Precious Uwagbai" 
                className="relative z-10 max-h-full w-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/5 transition-colors" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/95 group-hover:bg-red-500 group-hover:scale-110 text-white flex items-center justify-center shadow-2xl transition-all">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-white" />
                </div>
              </div>

              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg animate-pulse">
                  <Radio className="w-3.5 h-3.5" />
                  <span>Now Live on YouTube</span>
                </span>
              </div>

              <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg text-white font-mono text-xs font-bold border border-white/10">
                {featuredVideo.duration}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <Sparkles className="w-4 h-4" />
                <span>Featured Broadcast Highlight</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                {featuredVideo.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {featuredVideo.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  <span>Speaker: <strong>{featuredVideo.speaker}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Tv className="w-3.5 h-3.5 text-red-400" />
                  <span>Platform: <strong>{featuredVideo.date}</strong></span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap gap-3">
                <button
                  onClick={() => onSelectVideo(featuredVideo)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg shadow-red-950/60 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Watch Video Broadcast</span>
                </button>

                <a
                  href={COMPANY_INFO.socials.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-all"
                >
                  <Youtube className="w-4 h-4 text-red-500" />
                  <span>Watch on YouTube</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search talks & broadcasts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-red-500"
            />
          </div>

        </div>

        {/* Media Grid: Authentic Keynotes & YouTube Broadcasts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => {
            const thumbImg = getThumbnailImage(video.id);

            return (
              <div
                key={video.id}
                className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-red-500/40 hover:bg-slate-900 transition-all duration-300 shadow-xl overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  
                  {/* Thumbnail Banner */}
                  <div 
                    className="relative h-56 bg-slate-950 overflow-hidden cursor-pointer flex items-center justify-center"
                    onClick={() => onSelectVideo(video)}
                  >
                    {/* Ambient blurred backdrop */}
                    <img 
                      src={thumbImg} 
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-sm opacity-25 scale-110"
                      referrerPolicy="no-referrer"
                    />
                    {/* Uncropped main image */}
                    <img 
                      src={thumbImg} 
                      alt={video.title}
                      className="relative z-10 max-h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/5 transition-colors" />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-red-500 transition-all">
                        <Play className="w-5 h-5 ml-0.5 fill-white" />
                      </div>
                    </div>

                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-red-950/90 border border-red-500/40 px-2.5 py-0.5 rounded-full">
                        {video.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-0.5 rounded text-[11px] font-mono text-white font-semibold">
                      {video.duration}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-2.5">
                    <span className="text-[11px] font-mono text-amber-400 font-semibold block">
                      {video.date}
                    </span>

                    <h4 className="font-heading text-base font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors line-clamp-2">
                      {video.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {video.description}
                    </p>
                  </div>

                </div>

                {/* Footer Strip */}
                <div className="p-5 pt-0 border-t border-slate-800/80 mt-3 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <User className="w-3 h-3 text-slate-400" />
                    <span className="truncate max-w-[150px]">{video.speaker}</span>
                  </span>

                  <button
                    onClick={() => onSelectVideo(video)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-red-400 hover:text-red-300 group-hover:translate-x-1 transition-all cursor-pointer"
                  >
                    <span>Watch Talk</span>
                    <Play className="w-3 h-3 fill-red-400 ml-0.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
