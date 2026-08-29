import React, { useState } from 'react';
import { ShieldAlert, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

export const HealthDisclaimer: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-t border-slate-800/80 bg-slate-950/90 py-6 px-4 sm:px-6 lg:px-8 text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        <div className="flex items-start gap-3">
          <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 mt-0.5 flex-shrink-0">
            <ShieldAlert className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold text-slate-300">
              Important Health & Informational Disclaimer
            </p>
            <p className="text-[11px] text-slate-400 leading-relaxed max-w-4xl">
              The content, publications, self-assessment tools, and resources provided by <strong>Mega Precious Health LTD</strong> and <strong>Dr. Precious Uwagbai</strong> are for educational, informational, and general wellbeing purposes only. They do not constitute individualized clinical diagnosis, treatment plans, or emergency medical care. Always consult a qualified physician or healthcare provider regarding any acute or chronic medical condition.
            </p>
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[11px] text-amber-400 hover:text-amber-300 font-semibold whitespace-nowrap flex items-center gap-1 self-end md:self-center"
        >
          <span>{expanded ? 'Hide Details' : 'Full Disclaimer Details'}</span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

      </div>

      {expanded && (
        <div className="max-w-7xl mx-auto mt-4 pt-4 border-t border-slate-900 text-[11px] text-slate-400 space-y-2 animate-in fade-in duration-200">
          <p>
            <strong>Emergency Medical Care:</strong> If you are experiencing a medical emergency, acute chest pain, difficulty breathing, or severe psychological distress, please contact your local emergency emergency services immediately or visit the nearest hospital emergency room.
          </p>
          <p>
            <strong>Prescription & Treatment Decisions:</strong> Never disregard professional medical advice or delay in seeking it because of something you have read on this website, watched on Mega Precious TV, or evaluated in our published books.
          </p>
        </div>
      )}
    </div>
  );
};
