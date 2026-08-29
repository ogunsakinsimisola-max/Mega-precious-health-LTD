import { ServiceItem, ValueCard, BookItem, MediaVideo, CampaignItem } from '../types';

export const COMPANY_INFO = {
  name: "MEGA PRECIOUS HEALTH LTD",
  shortName: "Mega Precious Health",
  companyNumber: "14394693",
  incorporationDate: "3 October 2022",
  jurisdiction: "England and Wales",
  governingAct: "Companies Act 2006",
  registeredOffice: "Companies House, Cardiff (England & Wales)",
  tagline: "Advancing Health. Inspiring Wellbeing. Creating Impact.",
  email: "princepreciousmedia@gmail.com",
  phones: {
    nigeria: "+234 806 500 0440",
    nigeriaAlt: "+234 8065 0004 40",
    uk: "+44 7518 694103",
  },
  address: "Precious Villa, Lagos, Nigeria / England & Wales, UK",
  socials: {
    instagram: { handle: "@DrPreciousUwas", url: "https://instagram.com/DrPreciousUwas" },
    tiktok: { handle: "@DrPreciousUwas", url: "https://tiktok.com/@DrPreciousUwas" },
    twitter: { handle: "@DrPreciousUwas", url: "https://twitter.com/DrPreciousUwas" },
    facebook: { handle: "Dr Precious Uwagbai", url: "https://facebook.com" },
    youtube: { handle: "Mega Precious TV", url: "https://youtube.com/@megaprecioustv" },
  }
};

export const FOUNDER_INFO = {
  name: "Dr. Precious Uwagbai",
  honorific: "Dr. Precious Uwagbai (MD, MPH, PM)",
  title: "Founder & Chairman, Mega Precious Health LTD",
  roles: [
    "Medical Doctor 🩺",
    "Global Speaker",
    "Author & Health Advocate",
    "Leadership Coach",
    "Real Estate CEO (King's Embassy)",
    "Brand Ambassador",
    "YD Intl. Coordinator",
    "Associate Minister"
  ],
  quote: "Health is more than a service. It is a responsibility, a vision and an opportunity to create lasting human impact.",
  bio: `Dr. Precious Uwagbai is a multifaceted medical practitioner, global speaker, author, and health advocate dedicated to transforming human wellbeing and inspiring purposeful living across continents. As the founder of Mega Precious Health LTD, he bridges clinical excellence with innovative, community-centred health education, behavioral wellness paradigms, and leadership coaching. 

With deep experience across public health advocacy, preventative medicine, youth development, and organizational leadership, Dr. Precious champions initiatives that empower individuals, families, and organizations to achieve holistic wellness, focus mastery, and generational impact.`,
  leadershipPhilosophy: "We believe sustainable health begins with informed minds, disciplined daily habits, compassionate care, and visionary leadership that puts human dignity first.",
  expertise: [
    "Preventative & Lifestyle Medicine",
    "Digital Wellness & Attention Psychology",
    "Weight Management & Metabolic Health",
    "Public Health & Youth Substance Prevention",
    "Executive Leadership & Organizational Wellness",
    "Health Communication & Media Advocacy"
  ]
};

export const CORE_VALUES: ValueCard[] = [
  {
    id: "integrity",
    title: "INTEGRITY",
    tagline: "Honesty & Transparency",
    description: "We believe trust begins with honesty, transparency and responsible leadership across all initiatives.",
    iconName: "ShieldCheck"
  },
  {
    id: "excellence",
    title: "EXCELLENCE",
    tagline: "Highest Standard of Care",
    description: "We pursue quality, precision, and the highest standards of professionalism in everything we do.",
    iconName: "Award"
  },
  {
    id: "innovation",
    title: "INNOVATION",
    tagline: "Modern Health Thinking",
    description: "We embrace forward-looking ideas, modern digital approaches, and better ways of creating measurable impact.",
    iconName: "Lightbulb"
  },
  {
    id: "compassion",
    title: "COMPASSION",
    tagline: "People-First Approach",
    description: "People remain at the beating heart of everything we seek to achieve, with empathy guiding our purpose.",
    iconName: "HeartHandshake"
  },
  {
    id: "impact",
    title: "IMPACT",
    tagline: "Lasting Global Value",
    description: "Our goal is not simply to exist, but to create meaningful, enduring, and sustainable value in communities.",
    iconName: "TrendingUp"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "health-wellness",
    title: "Health & Wellness",
    subtitle: "Preventative initiatives focused on vibrant living",
    description: "Professional initiatives and frameworks focused on holistic wellbeing, proactive lifestyle adjustments, and healthier living across diverse populations.",
    iconName: "Activity",
    deliverables: [
      "Holistic wellness assessments and guidance",
      "Lifestyle and metabolic habit structuring",
      "Stress resilience and restorative health practices",
      "Corporate wellness programs and workshops"
    ],
    audience: "Individuals, corporate teams, and institutions seeking sustained vitality."
  },
  {
    id: "health-education",
    title: "Health Education",
    subtitle: "Empowering informed health decisions",
    description: "Educational resources, publications, and evidence-informed seminars designed to promote greater health literacy and proactive decision-making.",
    iconName: "BookOpen",
    deliverables: [
      "Masterclass workshops on chronic disease prevention",
      "Youth health seminars and behavioral education",
      "Public health awareness modules and toolkits",
      "Author-led book study circles and action workbooks"
    ],
    audience: "Schools, community groups, public bodies, and health seekers."
  },
  {
    id: "wellness-support",
    title: "Wellness Support",
    subtitle: "People-centred behavioural coaching",
    description: "Personalized, people-centred approaches and habit architecture designed to encourage healthier lifestyle transformations and emotional resilience.",
    iconName: "UserCheck",
    deliverables: [
      "Digital detox and phone addiction intervention guides",
      "Weight management counseling and habit tracking",
      "Behavioral accountability circles",
      "One-on-one leadership wellness consultations"
    ],
    audience: "Professionals, executives, and individuals overcoming chronic habits."
  },
  {
    id: "innovation",
    title: "Digital Health & Innovation",
    subtitle: "Modern ideas shaping health experiences",
    description: "Exploring progressive digital tools, telehealth architectures, and media-driven communication channels that modernise health delivery and engagement.",
    iconName: "Sparkles",
    deliverables: [
      "Multimedia health broadcasting (Mega Precious TV)",
      "Digital attention & habit tracking toolkits",
      "Global telehealth advisory models (Hope Consult)",
      "Virtual health summits and global livestreams"
    ],
    audience: "Global audiences, digital healthcare adopters, and remote communities."
  },
  {
    id: "community-impact",
    title: "Community & Global Impact",
    subtitle: "Sustainable initiatives for lasting change",
    description: "Strategic outreach programs, charitable campaigns, and anti-substance advocacy designed to create positive and sustainable impact within society.",
    iconName: "Globe",
    deliverables: [
      "Anti-substance abuse campaigns (MTN Foundation partner)",
      "World Skin Health Day awareness drives",
      "Grassroots health screenings and welfare outreaches",
      "Mentorship and leadership empowerment circles"
    ],
    audience: "Youth organizations, regional communities, and philanthropic partners."
  }
];

export const BOOKS: BookItem[] = [
  {
    id: "the-secrets-of-life",
    title: "THE SECRETS OF LIFE",
    subtitle: "Discover the Principles. Make the Right Choices. Live Life to the Fullest.",
    description: "What if there are things about life you should have been taught but nobody ever taught you? How to choose wisely. How to build a strong home. How to love better. How to understand intimacy, pregnancy, parenting and family. And ultimately, how to make the choices that shape the life you live. THE SECRETS OF LIFE by Dr. Precious Uwagbai is a powerful journey through the questions that matter most; bringing together wisdom, faith, human experience and modern medical understanding. You only have one life. Learn how to live it intentionally.",
    selarUrl: "https://selar.com/90m17f3v31",
    category: "Wisdom, Family & Life Mastery",
    badge: "Available Now • Selar Official",
    authorTitle: "Dr. Precious Uwagbai (Medical Doctor • Public Health Expert • Author)",
    quote: "You only have one life. Learn how to live it intentionally.",
    features: [
      "🌱 How to choose wisely and discover enduring life principles",
      "🏡 How to build a strong home and cultivate deep, lasting love",
      "❤️ Understanding intimacy, pregnancy, parenting and family dynamics",
      "👑 Making the defining choices that shape your future and legacy",
      "✨ Bringing together wisdom, faith, human experience and modern medical insight"
    ]
  },
  {
    id: "the-attention-trap",
    title: "THE ATTENTION TRAP",
    subtitle: "How to Break Free from Phone Addiction, Reclaim Your Focus, and Get Your Life Back",
    description: "📱 Your phone may be costing you more than screen time. Problematic smartphone use has been associated with sleep problems, reduced wellbeing and difficulty controlling digital behaviour. The issue isn't simply how many hours you spend on your phone, it's whether your phone is beginning to control your attention and interfere with your life. As a doctor, I wrote THE ATTENTION TRAP to help you understand why you keep reaching for your phone and more importantly, how to regain control.",
    selarUrl: "https://selar.com/13798w9686",
    category: "Mental Wellness & Focus",
    badge: "Book #1 • 30-Day Reset Inside",
    authorTitle: "Dr. Precious Uwagbai (Medical Doctor | Author | Health Advocate | Minister | Ambassador)",
    quote: "Your phone can wait. Your life cannot.",
    features: [
      "🧠 Understand the psychology behind compulsive checking",
      "🎯 Reclaim your focus and productive stamina",
      "😴 Protect your restorative sleep architecture",
      "📵 Build healthier, sustainable phone boundaries",
      "📖 Follow a practical 30-Day Attention Reset + Workbook"
    ]
  },
  {
    id: "lose-weight-secrets",
    title: "5 Simple Steps to Lose Weight",
    subtitle: "Secrets From a Doctor: Practical. Proven. Sustainable.",
    description: "My Latest Book is now available. I have a free gift for the first 100 people to get it. Overweight is one of the leading causes of death around the world today, and a major risk factor for chronic conditions including cardiovascular diseases such as stroke, hypertension, cancer, and heart disease. Transform your body and your health now with my secrets.",
    selarUrl: "https://selar.com/qu7w13",
    category: "Metabolic & Physical Health",
    badge: "Book #2 • Free Gift for First 100",
    authorTitle: "Dr. Precious Uwagbai (Medical Doctor & Wellness Advocate)",
    quote: "Transform your body. Transform your life.",
    features: [
      "❤️ Better Health: Evidence-based metabolic protocols",
      "⚖️ Sustainable Weight Loss without extreme starvation",
      "⚡ More Energy & Renewed Self-Confidence",
      "🛡️ Lower Risk of Chronic Cardiovascular Diseases & Hypertension",
      "🎁 Free exclusive gift included for the first 100 readers"
    ]
  },
  {
    id: "overcoming-addiction",
    title: "Overcoming Addiction to Masturbation",
    subtitle: "Secrets From a Doctor: Mind, Body & Spiritual Freedom",
    description: "A compassionate, medically informed, and spiritually grounded guide to understanding dopamine reinforcement, breaking compulsive behavioral loops, and restoring emotional harmony and confidence.",
    selarUrl: "https://selar.com/13798w9686",
    category: "Behavioral & Mental Freedom",
    badge: "Clinical & Pastoral Insight",
    authorTitle: "Dr. Precious Uwagbai (Medical Doctor & Minister)",
    quote: "Break the cycle. Reclaim your freedom.",
    features: [
      "Medical breakdown of brain chemistry and neuro-pathways",
      "Practical behavioral substitution techniques that work",
      "Overcoming guilt, shame, and emotional isolation",
      "Holistic restoration of self-control and purpose"
    ]
  }
];

export const MEDIA_VIDEOS: MediaVideo[] = [
  {
    id: "v1",
    title: "Discovering Your Seasons: Purpose, Timing & Health Alignment",
    category: "Inspiration",
    duration: "45 mins",
    speaker: "Dr. Precious Uwagbai",
    description: "Live broadcast with GreatHouse Mandate on YouTube: recognizing your personal and spiritual seasons, aligning physical vitality with life calling, and sustaining focus.",
    thumbnail: "discovering_seasons",
    date: "GreatHouse Mandate • Live on YouTube"
  },
  {
    id: "v2",
    title: "Becoming a Responsible Disciple: Live at YDI @ 30",
    category: "Leadership",
    duration: "52 mins",
    speaker: "Dr. Precious Uwagbai",
    description: "A profound keynote message by Dr. Precious Uwagbai on spiritual maturity, personal discipline, character development, and maximizing your youth for eternal impact.",
    thumbnail: "responsible_disciple",
    date: "YDI @ 30 Conference • Live on YouTube"
  },
  {
    id: "v3",
    title: "Wisdom for Healthy Living: Clinical & Holistic Longevity",
    category: "Health",
    duration: "35 mins",
    speaker: "Dr. Precious Uwagbai (MD, MPH)",
    description: "In-depth medical wisdom on everyday preventative health, metabolic balance, nutrition guidelines, circadian sleep hygiene, and managing stress.",
    thumbnail: "wisdom_healthy_living",
    date: "Mega Precious Health • YouTube Broadcast"
  },
  {
    id: "v4",
    title: "The Attention Trap: Breaking Phone Addiction & Reclaiming Focus",
    category: "Education",
    duration: "38 mins",
    speaker: "Dr. Precious Uwagbai",
    description: "Examining how digital algorithms hijack neural attention mechanisms and how to deploy practical 30-day resets for mental clarity and peaceful sleep.",
    thumbnail: "book_attention",
    date: "Mental Wellness Masterclass"
  },
  {
    id: "v5",
    title: "Zero Tolerance to Drug Abuse: Protecting Youth Futures",
    category: "Community",
    duration: "32 mins",
    speaker: "Dr. Precious Uwagbai & MTN Foundation",
    description: "Partnering with national youth foundations to educate young minds on the biochemical perils of substance abuse and providing paths to holistic recovery.",
    thumbnail: "drug_abuse",
    date: "MTN Anti-Substance Abuse Program (ASAP)"
  },
  {
    id: "v6",
    title: "World Skin Health Day: Healthy Skin, Confident You",
    category: "Health",
    duration: "25 mins",
    speaker: "Dr. Precious Uwagbai (MD, MPH)",
    description: "Essential dermatological hygiene, sun protection, hydration science, and recognizing early warning signs of systemic skin disorders.",
    thumbnail: "skin_health",
    date: "Global Health Advocacy Initiative"
  }
];

export const CAMPAIGNS: CampaignItem[] = [
  {
    id: "c1",
    title: "Zero Tolerance to Drug Abuse (ASAP)",
    organization: "MTN Foundation Anti-Substance Abuse Program & Dr. Precious Uwagbai",
    tag: "Substance Prevention",
    focusArea: "National Youth Health & Rehabilitation",
    description: "An aggressive youth advocacy campaign encouraging millions of students and youths to say NO to substance abuse, choose life, protect their body and dreams, and preserve their future.",
    impactMetrics: "Reaching over 500,000+ youth across multiple states & campuses",
    image: "drug_abuse"
  },
  {
    id: "c2",
    title: "World Skin Health Day Initiative",
    organization: "Global Health Advocacy & Dr. Precious Uwagbai",
    tag: "Preventative Dermatology",
    focusArea: "Healthy Skin, Confident You",
    description: "Promoting good skin habits—sun protection, hydration, gentle cleansing, balanced nutrition, rest, and routine dermatologist care—to make skin health a priority for a healthier tomorrow.",
    impactMetrics: "Direct public educational seminars and free skin consultations",
    image: "skin_health"
  },
  {
    id: "c3",
    title: "Hope Consult",
    organization: "Your Personal Doctor — Just a Message Away",
    tag: "Telehealth & Access",
    focusArea: "Democratizing Prompt Medical Guidance",
    description: "Connecting individuals directly with trusted clinical advisory, symptom triage, lifestyle medicine, and compassionate health advocacy from anywhere.",
    impactMetrics: "Trusted by thousands seeking reliable, compassionate medical answers",
    image: "hope_consult"
  },
  {
    id: "c4",
    title: "King's Embassy Real Estate",
    organization: "Building Better Lives — Dr. Precious Uwagbai, CEO",
    tag: "Affordable & Royal Living",
    focusArea: "Delivering Quality Homes Across Nigeria",
    description: "At King's Embassy, we mentor, build, and deliver affordable, royal & well-designed homes across Nigeria, making home ownership and rental possible for every Nigerian.",
    impactMetrics: "Building better lives with affordable, royal & modern architectural homes",
    image: "kings_embassy"
  }
];
