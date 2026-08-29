import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  CheckCircle, 
  Calendar, 
  Sparkles,
  ArrowRight,
  Clock,
  Globe2,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/content';
import { EnquirySubmission } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<EnquirySubmission>({
    fullName: '',
    email: '',
    phone: '',
    organisation: '',
    subject: 'General Partnership & Consultation',
    message: '',
    serviceInterest: 'Health & Wellness Initiatives'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTicketId(`MPH-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 800);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Dr. Precious & Mega Precious Health team,\n\nI am contacting you regarding health advisory and consultation.\n\nName: ${formData.fullName || 'Prospective Partner'}`
  );

  const whatsappUrl = `https://wa.me/2348065000440?text=${whatsappMessage}`;

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-[#070d1e] overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-emerald-950/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-teal-950/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Let&apos;s Start a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300">
              Conversation
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Whether you are inquiring about health masterclasses, executive wellness coaching, speaking engagements, or organizational partnerships, our leadership team is ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & WhatsApp Channel */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Card 1: Fast WhatsApp Consultation */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950/80 via-slate-900 to-slate-950 border border-emerald-500/40 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                    Instant Channel
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white">
                    Direct WhatsApp Advisory
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with our clinical communications desk for immediate responses and consultation scheduling.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-950/60 transition-all hover:scale-[1.02] active:scale-[0.98]"
                id="contact-whatsapp-direct-btn"
              >
                <span>Message on WhatsApp (+234 806 500 0440)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Lines Box */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Official Channels & Addresses
              </h4>

              <div className="space-y-4 text-xs">
                
                {/* Nigeria Phones */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-emerald-400 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-400 block">Nigeria Direct Desk:</span>
                    <a href={`tel:${COMPANY_INFO.phones.nigeria.replace(/\s+/g, '')}`} className="font-bold text-white hover:text-emerald-300 transition-colors block text-sm">
                      {COMPANY_INFO.phones.nigeria}
                    </a>
                    <a href={`tel:${COMPANY_INFO.phones.nigeriaAlt.replace(/\s+/g, '')}`} className="text-slate-400 hover:text-emerald-300 transition-colors">
                      Alt: {COMPANY_INFO.phones.nigeriaAlt}
                    </a>
                  </div>
                </div>

                {/* UK Direct Line */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-amber-400 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-400 block">United Kingdom Line:</span>
                    <a href={`tel:${COMPANY_INFO.phones.uk.replace(/\s+/g, '')}`} className="font-bold text-white hover:text-amber-300 transition-colors text-sm">
                      {COMPANY_INFO.phones.uk}
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-blue-400 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-400 block">Email Inquiries:</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-white hover:text-blue-300 transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Physical Locations */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-purple-400 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-slate-400 block">Locations & Headquarters:</span>
                    <p className="text-slate-200">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Operating Hours & Triage Notice */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center gap-3 text-xs text-slate-400">
              <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span>Inquiries are acknowledged within 24 business hours by our administrative team.</span>
            </div>

          </div>

          {/* Right Column: Executive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5" id="executive-enquiry-form">
                  <div className="border-b border-slate-800 pb-4">
                    <h3 className="font-heading text-xl font-bold text-white">
                      Executive Enquiry & Consultation Request
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Complete this form for speaker bookings, corporate wellness programs, or general inquiries.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-300" htmlFor="contact-fullName">
                        Full Name *
                      </label>
                      <input
                        id="contact-fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Dr. Adeola Johnson"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-300" htmlFor="contact-email">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@organisation.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-300" htmlFor="contact-phone">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +234 800 000 0000"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                    {/* Organization (Optional) */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-300" htmlFor="contact-org">
                        Organization / Institution (Optional)
                      </label>
                      <input
                        id="contact-org"
                        type="text"
                        value={formData.organisation}
                        onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                        placeholder="e.g. Healthcare Corp / University"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>

                  </div>

                  {/* Service Category Selection */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300" htmlFor="contact-service">
                      Area of Primary Interest *
                    </label>
                    <select
                      id="contact-service"
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="Health & Wellness Initiatives">Health & Wellness Initiatives</option>
                      <option value="Health Education & Books Masterclass">Health Education & Books Masterclass</option>
                      <option value="Executive Coaching & Digital Detox">Executive Coaching & Digital Detox (The Attention Trap)</option>
                      <option value="Speaker & Keynote Booking for Dr. Precious">Keynote / Speaker Booking for Dr. Precious</option>
                      <option value="Community & Youth Substance Abuse Partnership">Community & Youth Substance Abuse Partnership</option>
                      <option value="King's Embassy Housing & Real Estate Inquiries">King&apos;s Embassy Housing & Real Estate</option>
                      <option value="General Corporate Partnership">General Corporate Partnership</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300" htmlFor="contact-message">
                      Detailed Message / Brief *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline your objectives, timeline, or specific health advisory requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 text-white font-bold text-xs shadow-xl shadow-emerald-950/60 transition-all hover:scale-[1.01] active:scale-[0.99]"
                    id="submit-enquiry-form-btn"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Executive Enquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    Your details are treated with strict confidentiality under our data privacy policy.
                  </p>
                </form>
              ) : (
                <div className="py-10 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-xl">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading text-2xl font-bold text-white">
                      Enquiry Successfully Received
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{formData.fullName}</strong>. Your consultation request has been forwarded to Dr. Precious Uwagbai and the Mega Precious Health executive desk.
                    </p>
                  </div>

                  <div className="inline-block p-3 rounded-xl bg-slate-950 border border-emerald-500/30 text-xs font-mono text-emerald-300">
                    Reference ID: {ticketId}
                  </div>

                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          organisation: '',
                          subject: 'General Partnership & Consultation',
                          message: '',
                          serviceInterest: 'Health & Wellness Initiatives'
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                    >
                      Send Another Message
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
                    >
                      Follow Up on WhatsApp
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
