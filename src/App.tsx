import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectionNavSwitcher, SECTION_TABS } from './components/SectionNavSwitcher';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { MissionVisionValuesSection } from './components/MissionVisionValuesSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { FounderSection } from './components/FounderSection';
import { ResourcesSection } from './components/ResourcesSection';
import { BooksSection } from './components/BooksSection';
import { CampaignsSection } from './components/CampaignsSection';
import { MediaHubSection } from './components/MediaHubSection';
import { SocialSection } from './components/SocialSection';
import { CorporateSection } from './components/CorporateSection';
import { ContactSection } from './components/ContactSection';
import { HealthDisclaimer } from './components/HealthDisclaimer';
import { Footer } from './components/Footer';

// Modals & Lightbox
import { CertificateModal } from './components/CertificateModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { PrivacyModal, TermsModal, DisclaimerModal, StoryModal } from './components/LegalModals';
import { ImageLightboxModal, LightboxImage } from './components/ImageLightboxModal';

import { ServiceItem, MediaVideo } from './types';
import { MEDIA_VIDEOS } from './data/content';
import { ArrowRight, ChevronRight, Sparkles, Layers, ArrowUp } from 'lucide-react';

export default function App() {
  // Active Section Tab State (Defaults to 'overview' to avoid long scrolling fatigue, or 'all' for continuous view)
  const [activeTab, setActiveTab] = useState<string>('overview');

  // Modal States
  const [certificateOpen, setCertificateOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<MediaVideo | null>(null);
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);

  // Tab switching with instant responsive scroll
  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    
    // Give state a tick to update DOM then scroll directly
    setTimeout(() => {
      if (tabId === 'overview') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const sectionArea = document.getElementById('section-content-area');
        if (sectionArea) {
          const navbarAndSwitcherHeight = 120;
          const elementPosition = sectionArea.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarAndSwitcherHeight;
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          });
        }
      }
    }, 40);
  };

  // Switch to contact section
  const handleOpenConsultation = () => {
    setActiveTab('corporate');
    setTimeout(() => {
      const contactElement = document.getElementById('contact') || document.getElementById('section-content-area');
      if (contactElement) {
        const navbarAndSwitcherHeight = 120;
        const elementPosition = contactElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarAndSwitcherHeight;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  const handleOpenVideoTeaser = () => {
    if (MEDIA_VIDEOS.length > 0) {
      // Open the featured YouTube broadcast (Discovering Your Seasons)
      const featuredVid = MEDIA_VIDEOS.find(v => v.id === 'v1') || MEDIA_VIDEOS[0];
      setSelectedVideo(featuredVid);
    }
  };

  // Helper to step to next section
  const getNextTab = (currentId: string) => {
    const currentIndex = SECTION_TABS.findIndex(t => t.id === currentId);
    if (currentIndex >= 0 && currentIndex < SECTION_TABS.length - 1) {
      return SECTION_TABS[currentIndex + 1];
    }
    return SECTION_TABS[0];
  };

  const currentTabObj = SECTION_TABS.find(t => t.id === activeTab);
  const nextTab = getNextTab(activeTab);

  return (
    <div className="min-h-screen bg-[#060c1c] text-slate-100 font-sans selection:bg-emerald-500 selection:text-white flex flex-col relative">
      
      {/* 1. Global Navigation Bar with High Brand Prominence */}
      <Navbar 
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenCertificate={() => setCertificateOpen(true)}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* 2. Hero Section (Always visible for brand authority and instant impact) */}
      <Hero 
        onOpenConsultation={handleOpenConsultation}
        onOpenCertificate={() => setCertificateOpen(true)}
        onOpenVideoTeaser={handleOpenVideoTeaser}
        onOpenLightbox={(img) => setLightboxImage(img)}
        onSelectSection={handleSelectTab}
      />

      {/* 3. Section Navigation Switcher (Sticky tabs to navigate without endless scrolling) */}
      <SectionNavSwitcher 
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
      />

      {/* Anchor for smooth scrolling when switching sections */}
      <div id="section-content-area" className="scroll-mt-36" />

      {/* Active Section Banner (When single-section mode is active) */}
      {activeTab !== 'overview' && activeTab !== 'all' && currentTabObj && (
        <div className="bg-[#091226] border-b border-emerald-500/20 py-3 px-4 shadow-inner">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider">
                Current Active Section:
              </span>
              <span className="text-sm font-extrabold text-white">
                {currentTabObj.name}
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">
                ({currentTabObj.description})
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleSelectTab('overview')}
                className="text-xs font-semibold text-slate-300 hover:text-white px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
              >
                ← Back to Overview
              </button>
              <button
                onClick={() => handleSelectTab('all')}
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
              >
                View All Sections
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area: Rendered by Selected Section or All */}
      <main className="flex-grow">
        
        {/* SECTION 1: OVERVIEW & ABOUT */}
        {(activeTab === 'overview' || activeTab === 'all') && (
          <div className="space-y-0 animate-in fade-in duration-300">
            <TrustBar />
            <AboutSection 
              onOpenCertificate={() => setCertificateOpen(true)}
            />
            <WhyUsSection />
          </div>
        )}

        {/* SECTION 2: DEDICATED MISSION, VISION, CORE VALUES & VISION FOR IMPACT */}
        {(activeTab === 'mission-values' || activeTab === 'all') && (
          <div className="space-y-0 animate-in fade-in duration-300">
            <MissionVisionValuesSection />
          </div>
        )}

        {/* SECTION 3: FOUNDER & LEADERSHIP */}
        {(activeTab === 'founder' || activeTab === 'all') && (
          <div className="space-y-0 animate-in fade-in duration-300">
            <FounderSection 
              onOpenConsultation={handleOpenConsultation}
              onOpenStoryModal={() => setStoryOpen(true)}
              onOpenLightbox={(img) => setLightboxImage(img)}
            />
            <SocialSection />
          </div>
        )}

        {/* SECTION 4: BOOKS & STORE */}
        {(activeTab === 'books' || activeTab === 'all') && (
          <div className="space-y-0 animate-in fade-in duration-300">
            <BooksSection 
              onOpenLightbox={(img) => setLightboxImage(img)}
            />
            <ResourcesSection />
          </div>
        )}

        {/* SECTION 5: SERVICES & REAL ESTATE */}
        {(activeTab === 'services' || activeTab === 'all') && (
          <div className="space-y-0 animate-in fade-in duration-300">
            <ServicesSection 
              onSelectService={(service) => setSelectedService(service)}
              onOpenConsultation={handleOpenConsultation}
            />
            <CampaignsSection 
              onOpenConsultation={handleOpenConsultation}
              onOpenLightbox={(img) => setLightboxImage(img)}
            />
          </div>
        )}

        {/* SECTION 6: MEDIA HUB & MEGA PRECIOUS TV */}
        {(activeTab === 'media' || activeTab === 'all') && (
          <div className="space-y-0 animate-in fade-in duration-300">
            <MediaHubSection 
              onSelectVideo={(video) => setSelectedVideo(video)}
              onOpenLightbox={(img) => setLightboxImage(img)}
            />
          </div>
        )}

        {/* SECTION 7: CORPORATE & CONTACT */}
        {(activeTab === 'corporate' || activeTab === 'all') && (
          <div className="space-y-0 animate-in fade-in duration-300">
            <CorporateSection 
              onOpenCertificate={() => setCertificateOpen(true)}
            />
            <ContactSection />
          </div>
        )}

        {/* Bottom Section Navigator Pill (Guides user easily to the next section) */}
        {activeTab !== 'all' && (
          <section className="py-10 bg-[#070d1e] border-t border-slate-800">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                <div className="text-left space-y-1">
                  <span className="text-[11px] uppercase font-bold text-amber-400">
                    Continue Exploring Mega Precious Health LTD
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Next Section: {nextTab.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {nextTab.description}
                  </p>
                </div>

                <button
                  onClick={() => handleSelectTab(nextTab.id)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg transition-all cursor-pointer shrink-0"
                >
                  <span>Go to {nextTab.shortLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>
        )}

      </main>

      {/* Health Disclaimer Strip */}
      <HealthDisclaimer />

      {/* Footer */}
      <Footer 
        onOpenCertificate={() => setCertificateOpen(true)}
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
        onOpenDisclaimer={() => setDisclaimerOpen(true)}
      />

      {/* Modals & HD Lightbox Viewer */}
      <ImageLightboxModal 
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

      <CertificateModal 
        isOpen={certificateOpen}
        onClose={() => setCertificateOpen(false)}
      />

      <ServiceDetailModal 
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenConsultation={handleOpenConsultation}
      />

      <VideoPlayerModal 
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      <PrivacyModal 
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />

      <TermsModal 
        isOpen={termsOpen}
        onClose={() => setTermsOpen(false)}
      />

      <DisclaimerModal 
        isOpen={disclaimerOpen}
        onClose={() => setDisclaimerOpen(false)}
      />

      <StoryModal 
        isOpen={storyOpen}
        onClose={() => setStoryOpen(false)}
      />

    </div>
  );
}
