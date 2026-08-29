import React from 'react';
import { 
  Instagram, 
  Youtube, 
  Twitter, 
  Facebook, 
  ExternalLink, 
  QrCode, 
  Sparkles,
  Share2,
  Users,
  Video
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const SocialSection: React.FC = () => {
  const channels = [
    {
      name: "Instagram",
      handle: "@DrPreciousUwas",
      url: COMPANY_INFO.socials.instagram.url,
      desc: "Daily health pearls, leadership reels, and behind-the-scenes moments.",
      icon: Instagram,
      accent: "from-pink-500/20 to-purple-600/20",
      borderColor: "border-pink-500/30",
      iconColor: "text-pink-400"
    },
    {
      name: "YouTube",
      handle: "Mega Precious TV",
      url: COMPANY_INFO.socials.youtube.url,
      desc: "In-depth medical series, surgical risk breakdowns, and live keynote sessions.",
      icon: Youtube,
      accent: "from-red-500/20 to-orange-600/20",
      borderColor: "border-red-500/30",
      iconColor: "text-red-400"
    },
    {
      name: "Twitter / X",
      handle: "@DrPreciousUwas",
      url: COMPANY_INFO.socials.twitter.url,
      desc: "Thought leadership threads on healthcare innovation, habits, and community impact.",
      icon: Twitter,
      accent: "from-sky-500/20 to-blue-600/20",
      borderColor: "border-sky-500/30",
      iconColor: "text-sky-400"
    },
    {
      name: "Facebook",
      handle: "Dr Precious Uwagbai",
      url: COMPANY_INFO.socials.facebook.url,
      desc: "Community discussions, ministry outreaches, and long-form editorial updates.",
      icon: Facebook,
      accent: "from-blue-500/20 to-indigo-600/20",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400"
    }
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-[#070d1e] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[300px] bg-purple-950/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-semibold uppercase tracking-wider">
            <Share2 className="w-3.5 h-3.5 text-pink-400" />
            <span>Digital Community</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Follow the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-amber-300 to-emerald-400">
              Journey
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Stay connected with Dr. Precious Uwagbai and Mega Precious Health across social media for continuous inspiration, evidence-informed health wisdom, and live events.
          </p>
        </div>

        {/* 4 Official Social Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {channels.map((channel, idx) => {
            const Icon = channel.icon;
            return (
              <a
                key={idx}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative rounded-2xl p-6 bg-slate-900/80 border ${channel.borderColor} hover:bg-slate-900 transition-all duration-300 shadow-xl group hover:translate-y-[-3px] flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${channel.accent} flex items-center justify-center border border-slate-700/60 group-hover:scale-105 transition-transform`}>
                      <Icon className={`w-6 h-6 ${channel.iconColor}`} />
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                  </div>

                  <span className="text-xs font-mono font-bold text-slate-400 block mb-1">
                    {channel.handle}
                  </span>

                  <h3 className="font-heading text-xl font-bold text-white tracking-tight mb-2 group-hover:text-emerald-300 transition-colors">
                    {channel.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {channel.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-emerald-400 group-hover:text-emerald-300">
                  <span>Connect & Follow</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
            );
          })}

          {/* Social Hub Connect Card */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-slate-900 via-slate-900 to-pink-950/30 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 mb-4">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-pink-400 block mb-1">
                Global Network
              </span>
              <h4 className="font-heading text-lg font-bold text-white mb-2">
                Join Over 100,000+ Followers
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Be part of a thriving international community committed to healthy habits, purposeful living, and positive impact.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400">
              Hashtags: #MegaPreciousHealth #DrPreciousUwas
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
