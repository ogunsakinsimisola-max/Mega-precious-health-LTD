import React from 'react';
import { X, ShieldCheck, FileText, HeartHandshake, CheckCircle2, BookOpen } from 'lucide-react';
import { COMPANY_INFO, FOUNDER_INFO } from '../data/content';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-8 space-y-5 text-xs text-slate-300">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h3 className="font-heading font-bold text-base text-white">
              Data Privacy & Confidentiality Policy
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 leading-relaxed">
          <p>
            <strong>Effective Date:</strong> January 2026 | <strong>Entity:</strong> {COMPANY_INFO.name} (UK Company No: {COMPANY_INFO.companyNumber}).
          </p>
          <p>
            At Mega Precious Health LTD, we treat all client consultations, inquiries, self-assessments, and subscriber details with the highest ethical standards of confidentiality and compliance under UK GDPR and international data protection standards.
          </p>
          <h4 className="font-bold text-white text-sm pt-2">1. Information We Collect</h4>
          <p>
            We collect personal information that you voluntarily submit through our contact forms, newsletter sign-ups, or event registration portals (e.g., name, email address, telephone numbers, and inquiry descriptions).
          </p>
          <h4 className="font-bold text-white text-sm pt-2">2. Use of Information</h4>
          <p>
            Your information is exclusively utilized to respond to your specific inquiries, schedule health consultations or speaking events, and deliver requested educational publications and resources. We strictly do not sell, lease, or monetize your personal data.
          </p>
          <h4 className="font-bold text-white text-sm pt-2">3. Health Self-Assessments</h4>
          <p>
            Data entered into our on-site focus or metabolic checks is processed locally in your browser for immediate educational evaluation and is not retained or shared without explicit permission.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
          >
            Close Policy
          </button>
        </div>
      </div>
    </div>
  );
};

export const TermsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-8 space-y-5 text-xs text-slate-300">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            <h3 className="font-heading font-bold text-base text-white">
              Terms of Engagement & Service
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 leading-relaxed">
          <p>
            <strong>Governing Law:</strong> England and Wales (Companies Act 2006) | <strong>Company No:</strong> {COMPANY_INFO.companyNumber}.
          </p>
          <p>
            By accessing this corporate portal or purchasing published works authored by Dr. Precious Uwagbai through official distributor platforms (such as Selar), you agree to respect intellectual property rights, educational guidelines, and respectful community conduct.
          </p>
          <h4 className="font-bold text-white text-sm pt-2">1. Intellectual Property</h4>
          <p>
            All publications including &ldquo;5 Simple Steps to Lose Weight&rdquo;, &ldquo;The Attention Trap&rdquo;, and &ldquo;Overcoming Addiction to Masturbation&rdquo;, along with all proprietary video modules on Mega Precious TV, are protected by international copyright laws.
          </p>
          <h4 className="font-bold text-white text-sm pt-2">2. Educational Intent</h4>
          <p>
            All materials delivered through this platform are structured as supportive educational and wellness insights, not substitutes for personal clinical diagnosis.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};

export const DisclaimerModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-8 space-y-5 text-xs text-slate-300">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-emerald-400" />
            <h3 className="font-heading font-bold text-base text-white">
              Full Medical & Educational Disclaimer
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 leading-relaxed">
          <blockquote className="p-4 rounded-xl bg-slate-950 border border-slate-800 italic text-slate-200">
            &ldquo;The content, publications and resources provided by Mega Precious Health LTD and Dr Precious Uwagbai are for educational, informational and wellbeing purposes only. They do not constitute personalized medical advice, clinical diagnosis or treatment. Always consult a qualified healthcare professional regarding any medical condition.&rdquo;
          </blockquote>
          <p>
            No physician-patient relationship is formed purely by visiting this website or consuming digital media published by Mega Precious Health LTD. For emergency situations, immediately dial your local emergency service or seek prompt hospital attention.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
          >
            I Understand & Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export const StoryModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-3xl bg-slate-900 border border-amber-500/40 shadow-2xl p-6 sm:p-10 space-y-6 text-slate-300">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <h3 className="font-heading font-bold text-lg text-white">
              The Journey of Dr. Precious Uwagbai
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
          <h4 className="font-heading font-bold text-lg text-white">
            Bridging Clinical Medicine with Transformative Health Literacy
          </h4>
          <p>
            Dr. Precious Uwagbai is a physician whose life mission extends far beyond the four walls of a hospital ward. Observing that the majority of modern chronic illnesses — ranging from metabolic disorders and cardiovascular disease to severe sleep deprivation and mental burnout — stem from preventable lifestyle patterns and fragmented attention habits, Dr. Precious set out to pioneer a fresh approach to health communication.
          </p>
          <p>
            Through <strong>Mega Precious Health LTD</strong>, incorporated in England and Wales, he has synthesized medical rigour with dynamic public health advocacy, youth substance abuse prevention campaigns (in partnership with major national organizations such as the MTN Foundation), and bestselling publications.
          </p>
          
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <h5 className="font-bold text-amber-300 text-xs uppercase tracking-wider">
              Key Milestones & Roles
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Founder & Chairman, Mega Precious Health LTD (UK Co. No. 14394693)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Author of &ldquo;5 Simple Steps to Lose Weight&rdquo; and &ldquo;The Attention Trap&rdquo;</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Keynote Speaker at global youth conferences and medical summits</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>CEO of King&apos;s Embassy Real Estate — delivering royal, affordable living spaces</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Associate Minister & YD International Coordinator</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md"
          >
            Close Story
          </button>
        </div>
      </div>
    </div>
  );
};
