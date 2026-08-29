import React from 'react';
import { Sparkles, HeartPulse } from 'lucide-react';

export const TransitionStatement: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#070d1e] via-[#09132b] to-[#070d1e]">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
        
        {/* Subtle emblem */}
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-slate-900/80 border border-emerald-500/30 text-emerald-400 shadow-xl mb-2">
          <HeartPulse className="w-6 h-6 animate-pulse" />
        </div>

        {/* The Core Philosophical Statement */}
        <blockquote className="font-heading text-2xl sm:text-3.5xl lg:text-4.5xl font-medium tracking-tight text-slate-100 leading-[1.3] max-w-4xl mx-auto">
          &ldquo;Health is more than a service. It is a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400 font-semibold">
            responsibility
          </span>
          , a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400 font-semibold">
            vision
          </span>{' '}
          and an opportunity to create{' '}
          <span className="underline decoration-emerald-500/50 underline-offset-8 font-semibold">
            lasting impact
          </span>
          .&rdquo;
        </blockquote>

        {/* Transition Divider & Welcome Line */}
        <div className="pt-8 flex flex-col items-center justify-center gap-3">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <p className="font-display uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold text-amber-300">
              Welcome to Mega Precious Health
            </p>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        </div>

      </div>
    </section>
  );
};
