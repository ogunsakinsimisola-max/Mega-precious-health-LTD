export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDetails?: string[];
  iconName: string;
  deliverables: string[];
  audience: string;
}

export interface ValueCard {
  id: string;
  title: string;
  description: string;
  tagline: string;
  iconName: string;
}

export interface BookItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  selarUrl: string;
  features: string[];
  badge?: string;
  freeGiftNote?: string;
  category: string;
  coverImage?: string;
  authorTitle?: string;
  quote?: string;
}

export interface MediaVideo {
  id: string;
  title: string;
  category: 'Health' | 'Education' | 'Inspiration' | 'Interviews' | 'Events' | 'Community' | 'Leadership';
  duration: string;
  youtubeId?: string;
  thumbnail: string;
  description: string;
  speaker: string;
  date?: string;
}

export interface CampaignItem {
  id: string;
  title: string;
  organization: string;
  description: string;
  impactMetrics: string;
  tag: string;
  focusArea: string;
  image?: string;
}

export interface EnquirySubmission {
  fullName: string;
  email: string;
  phone: string;
  organisation?: string;
  subject: string;
  message: string;
  serviceInterest?: string;
}
