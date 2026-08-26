import React from 'react';
import { Certification } from '../../types';
import { CheckCircle2 } from 'lucide-react';

interface CertificationCardProps {
  certification: Certification;
  onSelect: (certification: Certification) => void;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({
  certification,
  onSelect,
}) => {
  return (
    <div
      onClick={() => onSelect(certification)}
      className="group cursor-pointer p-5 rounded-xl bg-surface-container-lowest/50 border border-outline-variant/30 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm relative overflow-hidden shadow-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="font-technical-label text-[10px] text-on-surface-variant mb-2 tracking-widest uppercase">
        {certification.provider}
      </div>

      <h4 className="font-headline-md text-base sm:text-lg text-primary font-bold mb-3 group-hover:text-accent transition-colors">
        {certification.title}
      </h4>

      <div className="inline-flex items-center gap-1.5 text-secondary opacity-70 group-hover:opacity-100 group-hover:text-primary transition-all">
        <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
        <span className="font-technical-label text-[10px] uppercase tracking-wider">
          VERIFIED BADGE
        </span>
      </div>
    </div>
  );
};
