import React from 'react';
import { 
  Target, 
  Eye, 
  Sparkles, 
  HeartPulse, 
  ShieldCheck, 
  Award, 
  Lightbulb, 
  HeartHandshake, 
  TrendingUp, 
  CheckCircle,
  Compass,
  Globe2,
  Users,
  Check,
  Zap,
  ArrowRight
} from 'lucide-react';
import { CORE_VALUES } from '../data/content';

export const MissionVisionValuesSection: React.FC = () => {
  return (
    <section id="vision-mission-values" className="relative py-16 sm:py-24 bg-[#050b17] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-r from-emerald-600/20 via-teal-500/15 to-amber-500/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-950/30 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-950/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER: BOLD & DIRECT */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/90 border-2 border-emerald-500/50 text-emerald-300 text-xs font-extrabold uppercase tracking-widest shadow-xl">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>Our Foundation & Purpose</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Our Mission, Vision &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300">
              Core Values
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
            Everything we do at <strong className="text-white">Mega Precious Health LTD</strong> is built on one simple truth: health should be practical, trustworthy, and life-changing.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* PART 1: MORE THAN A BRAND, A VISION FOR IMPACT */}
        {/* ========================================================================= */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-emerald-500 via-amber-400 to-teal-400 shadow-2xl overflow-hidden">
          <div className="relative rounded-[22px] bg-gradient-to-b from-[#081226] via-[#09152e] to-[#060c1c] p-8 sm:p-12 lg:p-14 text-center space-y-8">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>THE MEGA PRECIOUS PHILOSOPHY</span>
            </div>

            {/* Main Big Statement */}
            <div className="max-w-4xl mx-auto space-y-6">
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                More Than a Brand, A Vision for Impact
              </h3>

              <div className="p-6 sm:p-8 rounded-2xl bg-[#040814]/90 border-2 border-emerald-500/40 shadow-inner">
                <blockquote className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-relaxed">
                  &ldquo;Health is not just a service. It is a{' '}
                  <span className="text-emerald-400 underline decoration-emerald-400 underline-offset-4 font-black">
                    responsibility
                  </span>
                  , a{' '}
                  <span className="text-amber-300 underline decoration-amber-400 underline-offset-4 font-black">
                    vision
                  </span>
                  , and an opportunity to create{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200 font-black">
                    lasting human impact
                  </span>
                  .&rdquo;
                </blockquote>
              </div>
            </div>

            {/* 3 Simple, Punchy Breakdown Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-left">
              
              <div className="p-6 rounded-2xl bg-slate-900/90 border-2 border-emerald-500/30 space-y-2 hover:border-emerald-400 transition-all shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-black text-xl shadow">
                  1
                </div>
                <h4 className="text-base font-extrabold text-white">
                  Real Medical Truth
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  Clear, evidence-backed medical guidance that cuts through social media myths and fake health trends.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/90 border-2 border-amber-500/30 space-y-2 hover:border-amber-400 transition-all shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-500/40 flex items-center justify-center text-amber-400 font-black text-xl shadow">
                  2
                </div>
                <h4 className="text-base font-extrabold text-white">
                  People Come First
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  Practical health education and habit changes designed for real people, busy families, and working professionals.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/90 border-2 border-teal-500/30 space-y-2 hover:border-teal-400 transition-all shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-teal-950 border border-teal-500/40 flex items-center justify-center text-teal-400 font-black text-xl shadow">
                  3
                </div>
                <h4 className="text-base font-extrabold text-white">
                  Lifelong Transformation
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  Building sustained energy, healthy body weight, sharp focus, and preventative disease immunity.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 2 & 3: MISSION & VISION (SIDE BY SIDE, HIGH CONTRAST) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* OUR MISSION */}
          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border-2 border-emerald-500 shadow-2xl space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500 text-xs font-bold uppercase tracking-wider">
                  <Target className="w-4 h-4 text-emerald-400" />
                  <span>WHY WE EXIST</span>
                </div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono">
                  OUR PURPOSE
                </span>
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl font-black text-white tracking-tight">
                Our Mission
              </h3>

              {/* Bold Primary Mission Box */}
              <div className="p-6 rounded-2xl bg-emerald-950/40 border-2 border-emerald-500/40">
                <p className="font-heading text-xl sm:text-2xl font-bold text-emerald-100 leading-snug">
                  &ldquo;To develop and promote innovative, reliable and people-centred health and wellbeing solutions that create meaningful value for individuals, families and communities.&rdquo;
                </p>
              </div>

              {/* Easy to Understand Bullets */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  What this means in action:
                </h4>
                <div className="space-y-2 text-sm text-slate-200">
                  <div className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-emerald-500 text-black shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span><strong>Empowering Books:</strong> Step-by-step guides on phone reset, focus restoration, and weight loss.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-emerald-500 text-black shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span><strong>Free Public Education:</strong> Medical TV broadcasts, youth drug awareness, and health seminars.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-emerald-500 text-black shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span><strong>Preventative Health:</strong> Stopping illness before it starts through nutrition, sleep, and lifestyle.</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-emerald-400">
              <span>Mega Precious Health LTD</span>
              <span>England & Wales • Global Impact</span>
            </div>
          </div>

          {/* OUR VISION */}
          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border-2 border-amber-500 shadow-2xl space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950 text-amber-300 border border-amber-500 text-xs font-bold uppercase tracking-wider">
                  <Eye className="w-4 h-4 text-amber-400" />
                  <span>WHERE WE ARE HEADING</span>
                </div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
                  OUR HORIZON
                </span>
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl font-black text-white tracking-tight">
                Our Vision
              </h3>

              {/* Bold Primary Vision Box */}
              <div className="p-6 rounded-2xl bg-amber-950/40 border-2 border-amber-500/40">
                <p className="font-heading text-xl sm:text-2xl font-bold text-amber-100 leading-snug">
                  &ldquo;To build a trusted and innovative health and wellbeing brand recognised for excellence, positive impact and sustainable solutions.&rdquo;
                </p>
              </div>

              {/* Easy to Understand Bullets */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  What we are building for the future:
                </h4>
                <div className="space-y-2 text-sm text-slate-200">
                  <div className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-amber-400 text-black shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span><strong>International Benchmark:</strong> A globally trusted healthcare leadership and wellness brand.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-amber-400 text-black shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span><strong>Holistic Health Ecosystem:</strong> Combining medicine, housing, education, and digital care.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <div className="p-1 rounded bg-amber-400 text-black shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span><strong>Sustainable Impact:</strong> Health programs that create long-term generational wellbeing.</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-amber-400">
              <span>Dr. Precious Uwagbai</span>
              <span>Visionary & Medical Director</span>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* PART 4: OUR CORE VALUES (5 BOLD PILLARS) */}
        {/* ========================================================================= */}
        <div className="space-y-8 pt-4">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border-2 border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>THE 5 STANDARDS WE LIVE BY</span>
            </div>
            
            <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Our 5 Core Values
            </h3>
            
            <p className="text-sm sm:text-base text-slate-300 font-medium">
              These five principles guide every doctor consultation, health book, video broadcast, and community program we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* VALUE 1: INTEGRITY */}
            <div className="p-7 rounded-3xl bg-slate-900/95 border-2 border-slate-800 hover:border-emerald-400 transition-all duration-300 space-y-4 shadow-xl flex flex-col justify-between group hover:scale-[1.02]">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-950/90 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-black text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-md border border-emerald-500/30">
                    VALUE 01
                  </span>
                </div>
                <h4 className="font-heading text-xl font-extrabold text-white">
                  1. Uncompromising Integrity
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  We operate with total transparency, ethical honesty, and clinical authenticity. We never sell gimmicks or misleading health promises.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800 flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                <CheckCircle className="w-4 h-4" />
                <span>Honest & Reliable Care</span>
              </div>
            </div>

            {/* VALUE 2: CLINICAL EXCELLENCE */}
            <div className="p-7 rounded-3xl bg-slate-900/95 border-2 border-slate-800 hover:border-amber-400 transition-all duration-300 space-y-4 shadow-xl flex flex-col justify-between group hover:scale-[1.02]">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-950/90 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-black text-amber-400 bg-amber-950 px-2.5 py-1 rounded-md border border-amber-500/30">
                    VALUE 02
                  </span>
                </div>
                <h4 className="font-heading text-xl font-extrabold text-white">
                  2. Clinical Excellence
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  We maintain the highest medical, educational, and service benchmarks across all books, masterclasses, and corporate wellness advisory.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800 flex items-center gap-1.5 text-xs font-bold text-amber-400">
                <CheckCircle className="w-4 h-4" />
                <span>High Standard of Quality</span>
              </div>
            </div>

            {/* VALUE 3: PRACTICAL INNOVATION */}
            <div className="p-7 rounded-3xl bg-slate-900/95 border-2 border-slate-800 hover:border-teal-400 transition-all duration-300 space-y-4 shadow-xl flex flex-col justify-between group hover:scale-[1.02]">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-teal-950/90 border border-teal-500/40 flex items-center justify-center text-teal-400 shadow">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-black text-teal-400 bg-teal-950 px-2.5 py-1 rounded-md border border-teal-500/30">
                    VALUE 03
                  </span>
                </div>
                <h4 className="font-heading text-xl font-extrabold text-white">
                  3. Practical Innovation
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  We leverage digital media, actionable workbooks, and modern behavioral science to make healthy living enjoyable and sustainable.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800 flex items-center gap-1.5 text-xs font-bold text-teal-400">
                <CheckCircle className="w-4 h-4" />
                <span>Modern Solutions</span>
              </div>
            </div>

            {/* VALUE 4: PEOPLE-CENTRED COMPASSION */}
            <div className="p-7 rounded-3xl bg-slate-900/95 border-2 border-slate-800 hover:border-emerald-400 transition-all duration-300 space-y-4 shadow-xl flex flex-col justify-between group hover:scale-[1.02]">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-950/90 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-black text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-md border border-emerald-500/30">
                    VALUE 04
                  </span>
                </div>
                <h4 className="font-heading text-xl font-extrabold text-white">
                  4. People-Centred Compassion
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  We treat every individual with dignity and empathy. Health is personal, and our solutions are tailored to real human needs.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800 flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                <CheckCircle className="w-4 h-4" />
                <span>Empathy & Respect</span>
              </div>
            </div>

            {/* VALUE 5: ENDURING POSITIVE IMPACT */}
            <div className="p-7 rounded-3xl bg-slate-900/95 border-2 border-slate-800 hover:border-amber-400 transition-all duration-300 space-y-4 shadow-xl flex flex-col justify-between group hover:scale-[1.02] md:col-span-2 lg:col-span-2">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-950/90 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-black text-amber-400 bg-amber-950 px-2.5 py-1 rounded-md border border-amber-500/30">
                    VALUE 05
                  </span>
                </div>
                <h4 className="font-heading text-xl font-extrabold text-white">
                  5. Enduring Positive Impact
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  Our measure of success is the lives changed, disease prevented, youths guided away from drug abuse, and individuals restored to vital energy.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800 flex items-center gap-1.5 text-xs font-bold text-amber-400">
                <CheckCircle className="w-4 h-4" />
                <span>Lasting Community Transformation</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
