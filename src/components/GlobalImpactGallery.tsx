import React, { useState } from 'react';
import { 
  Globe2, 
  Sparkles, 
  Award, 
  Mic, 
  Stethoscope, 
  Building2, 
  HeartHandshake, 
  ArrowRight, 
  ExternalLink, 
  Users, 
  MapPin, 
  CheckCircle2, 
  Heart,
  Maximize2
} from 'lucide-react';
import { LightboxImage } from './ImageLightboxModal';

// Authentic Uploaded Portraits & Visual Assets
import drWhiteSuit from '../assets/images/dr_white_suit_globe_1787094249074.jpg';
import drGreenScrubs from '../assets/images/dr_green_scrubs_clinic_1787094263174.jpg';
import drRedSuit from '../assets/images/dr_red_suit_desk_1787094276429.jpg';
import drNavyGoldTuxedo from '../assets/images/dr_navy_gold_tuxedo_1787094291590.jpg';
import drBlackTuxedo from '../assets/images/dr_black_tuxedo_desk_1787094307985.jpg';
import drMiraclePoster from '../assets/images/dr_miracle_poster_1787094333624.jpg';
import ministerialBlessing from '../assets/images/ministerial_blessing_1787094347260.jpg';
import kingsEmbassyVilla from '../assets/images/kings_embassy_villa_1787094360808.jpg';

interface GlobalImpactGalleryProps {
  onOpenLightbox?: (img: LightboxImage) => void;
}

export const GlobalImpactGallery: React.FC<GlobalImpactGalleryProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const galleryItems = [
    {
      id: "g1",
      title: "Global Keynotes & Purpose Alignment",
      category: "Speaking",
      location: "International Summits & Stages",
      image: drRedSuit,
      badge: "Global Speaker 🎙️",
      description: "Delivering high-impact keynote addresses on behavioral focus, executive vitality, and purposeful leadership across national and international summits.",
      placeholderTag: "[Keynote Highlights: London, Lagos & Global Conferences]"
    },
    {
      id: "g2",
      title: "Clinical Excellence & Preventative Care",
      category: "Medical",
      location: "Clinical Consultations & Triage",
      image: drGreenScrubs,
      badge: "Medical Doctor 🩺",
      description: "Providing evidence-informed medical guidance, metabolic health habit architecture, and preventative care through Hope Consult and clinical outreach.",
      placeholderTag: "[Clinical Case Studies & Hospital Engagements]"
    },
    {
      id: "g3",
      title: "King's Embassy Real Estate & Housing",
      category: "Leadership",
      location: "Lagos & Regional Developments",
      image: kingsEmbassyVilla,
      badge: "Real Estate Guru 🏛️",
      description: "Developing affordable, royal, and well-designed homes across Nigeria, making home ownership and rental possible for every family.",
      placeholderTag: "[Housing Deliveries & Property Advisory]"
    },
    {
      id: "g4",
      title: "Youth Development & Miracle Stage",
      category: "Advocacy",
      location: "National Campuses & Youth Summits",
      image: drMiraclePoster,
      badge: "YD Intl. Coordinator 🌟",
      description: "Inspiring youth to break free from self-limiting habits, drug abuse, and digital distraction through the 'I am a Miracle' transformational campaign.",
      placeholderTag: "[National Youth Campaign Impact: 500k+ Reached]"
    },
    {
      id: "g5",
      title: "Ministerial Ordination & Spiritual Care",
      category: "Ministry",
      location: "Ministerial Outreaches & Assemblies",
      image: ministerialBlessing,
      badge: "Associate Minister 🕊️",
      description: "Receiving ministerial blessing and providing pastoral guidance, prayer, and faith-centered emotional restoration for families and leaders.",
      placeholderTag: "[Pastoral Guidance & Faith Outreaches]"
    },
    {
      id: "g6",
      title: "Executive Leadership & Brand Excellence",
      category: "Leadership",
      location: "Corporate Boardrooms & Media",
      image: drNavyGoldTuxedo,
      badge: "Leadership Coach 👔",
      description: "Coaching high-performing executives and entrepreneurs to optimize their cognitive stamina, health routines, and organizational influence.",
      placeholderTag: "[Executive Mentorship & Brand Endorsements]"
    }
  ];

  const categories = ['All', 'Speaking', 'Medical', 'Advocacy', 'Leadership', 'Ministry'];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="relative py-16 sm:py-24 bg-[#09132b] overflow-hidden">
      
      {/* Background Lighting & World Map Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="180" r="3" fill="#10b981" />
          <circle cx="210" cy="190" r="2" fill="#10b981" />
          <circle cx="480" cy="140" r="4" fill="#f59e0b" />
          <circle cx="510" cy="240" r="4" fill="#10b981" />
          <circle cx="530" cy="270" r="3" fill="#10b981" />
          <circle cx="780" cy="160" r="3" fill="#10b981" />
          <path d="M480 140 Q 495 190 510 240" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M480 140 Q 630 150 780 160" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Globe2 className="w-3.5 h-3.5 text-amber-400" />
              <span>International Photographic Proof</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Global Leadership &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-400">
                Impact Gallery
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Photographic documentation of Dr. Precious Uwagbai&apos;s keynote summits, clinical care, youth movements, and King&apos;s Embassy real estate developments. Click any photo to view in high definition.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid with High Clarity Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl bg-slate-900/95 border border-slate-800 hover:border-amber-500/60 transition-all duration-300 overflow-hidden shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Large Crisp Image Container */}
                <div 
                  className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-950 cursor-pointer flex items-center justify-center"
                  onClick={() => onOpenLightbox && onOpenLightbox({
                    src: item.image,
                    title: item.title,
                    subtitle: `${item.badge} • ${item.location}`,
                    category: item.category,
                    alt: item.title
                  })}
                >
                  {/* Ambient backdrop */}
                  <img
                    src={item.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover blur-sm opacity-25 scale-110"
                    referrerPolicy="no-referrer"
                  />

                  {/* Uncropped full image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="relative z-10 max-h-full w-full object-contain group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent pointer-events-none z-10" />
                  
                  {/* Zoom Hint on Hover */}
                  <div className="absolute top-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700 text-[11px] font-semibold text-white shadow-md">
                      <Maximize2 className="w-3 h-3 text-amber-400" />
                      <span>Zoom</span>
                    </span>
                  </div>

                  {/* Badge Top Left */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-slate-900/95 border border-slate-700 text-amber-300 text-xs font-bold shadow-md">
                      {item.badge}
                    </span>
                  </div>

                  {/* Location Bottom Left */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-slate-200 bg-slate-950/90 px-2.5 py-1 rounded-lg border border-slate-800 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-2.5">
                  <h3 className="font-heading text-lg font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Footer Tag */}
              <div className="p-6 pt-0">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/90 text-[11px] font-mono text-emerald-400">
                  {item.placeholderTag}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
