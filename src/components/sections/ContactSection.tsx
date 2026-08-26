import React from 'react';
import { SectionContainer } from '../layout/SectionContainer';
import { CONTACT_DATA } from '../../data/portfolioData';
import { Button } from '../ui/Button';
import { Mail, FileText, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <SectionContainer id="contact" className="py-24 md:py-36 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Status Indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high/70 border border-outline-variant/30 backdrop-blur-md mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-technical-label text-[11px] uppercase tracking-widest text-secondary font-medium">
            AVAILABLE FOR HIGH-IMPACT OPPORTUNITIES
          </span>
        </div>

        {/* Cinematic Headline */}
        <h2 className="font-display-lg text-4xl sm:text-6xl md:text-7xl text-primary font-bold uppercase tracking-tight leading-tight mb-6 text-glow-white">
          LET'S BUILD SOMETHING REAL.
        </h2>

        {/* Supporting Copy */}
        <p className="font-body-lg text-base sm:text-xl text-on-surface-variant max-w-xl mx-auto mb-10 leading-relaxed">
          {CONTACT_DATA.subhead}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10 w-full max-w-md">
          <Button
            variant="primary"
            size="lg"
            href={`mailto:${CONTACT_DATA.email}`}
            className="w-full sm:w-auto"
          >
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>GET IN TOUCH</span>
            </div>
          </Button>

          <Button
            variant="pill"
            size="lg"
            href={CONTACT_DATA.resumeUrl}
            className="w-full sm:w-auto"
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>VIEW RESUME</span>
            </div>
          </Button>
        </div>

        {/* Email Direct Link */}
        <a
          href={`mailto:${CONTACT_DATA.email}`}
          className="inline-flex items-center gap-2 font-technical-label text-xs sm:text-sm text-secondary hover:text-accent transition-colors duration-200 group"
        >
          <span className="opacity-60 group-hover:opacity-100">@</span>
          <span className="lowercase tracking-wider">{CONTACT_DATA.email}</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </SectionContainer>
  );
};
