import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { EXPERIENCE_DATA, getDetailDataFor } from '../../data/portfolioData';
import { UniversalDetailData } from '../../types';
import { Badge } from '../ui/Badge';

interface ExperienceDetailViewProps {
  onOpenModal: (data: UniversalDetailData) => void;
  onBack: () => void;
}

export const ExperienceDetailView: React.FC<ExperienceDetailViewProps> = ({ onOpenModal, onBack }) => {
  return (
    <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-10 md:px-12 pt-32 pb-24">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 font-technical-label text-xs uppercase tracking-widest text-secondary hover:text-accent transition-colors duration-200 group mb-14"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span>BACK TO PORTFOLIO</span>
      </button>

      {/* Section Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-technical-label text-xs uppercase tracking-widest text-accent font-semibold">
            Industry & Roles
          </span>
        </div>
        <h1 className="font-display-lg text-4xl sm:text-6xl md:text-7xl text-primary font-bold uppercase tracking-tight leading-none mb-6">
          EXPERIENCE
        </h1>
        <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Professional internships, engineering roles, and esports operations work spanning full-stack
          development, cross-platform mobile, and live tournament administration.
        </p>
      </div>

      {/* Experience Entries */}
      <div className="flex flex-col">
        {EXPERIENCE_DATA.map((exp, idx) => {
          const isReversed = idx % 2 !== 0;
          return (
            <article
              key={exp.id}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-start py-16 ${
                idx < EXPERIENCE_DATA.length - 1 ? 'border-b border-outline-variant/20' : ''
              } ${isReversed ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-5/12 shrink-0">
                <div
                  className="relative rounded-xl overflow-hidden aspect-[4/3] border border-outline-variant/40 bg-surface-container-low/70 shadow-pill group cursor-pointer"
                  onClick={() => {
                    const detail = getDetailDataFor('experience', exp.id);
                    if (detail) onOpenModal(detail);
                  }}
                >
                  <img
                    src={exp.image}
                    alt={exp.company}
                    loading="lazy"
                    className="w-full h-full object-cover filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="font-technical-label text-[10px] uppercase tracking-widest text-white/70 bg-black/50 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                      {exp.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-7/12 flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <span className="font-technical-label text-xs text-on-surface-variant font-semibold">
                    {exp.number}
                  </span>
                  <span className="w-8 h-px bg-outline-variant/60" />
                  <span className="font-technical-label text-xs text-accent uppercase tracking-widest font-semibold">
                    {exp.role}
                  </span>
                </div>

                <h2 className="font-headline-md text-3xl sm:text-4xl text-primary font-bold tracking-tight">
                  {exp.company}
                </h2>

                <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                  {exp.shortDescription}
                </p>

                {exp.fullDescription.map((para, i) => (
                  <p key={i} className="font-body-md text-sm text-on-surface-variant/80 leading-relaxed">
                    {para}
                  </p>
                ))}

                {/* Focus Areas */}
                {exp.focus && exp.focus.length > 0 && (
                  <div className="py-4 border-t border-outline-variant/20">
                    <span className="font-technical-label text-[10px] uppercase tracking-widest text-on-surface-variant/60 block mb-3">
                      FOCUS AREAS
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {exp.focus.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 font-body-md text-xs text-on-surface-variant">
                          <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Badge key={tag} label={tag} variant="default" />
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    const detail = getDetailDataFor('experience', exp.id);
                    if (detail) onOpenModal(detail);
                  }}
                  className="mt-2 inline-flex items-center gap-2 font-technical-label text-xs uppercase tracking-widest text-primary hover:text-accent transition-colors duration-300 group/cta border-b border-transparent hover:border-accent pb-1 w-fit"
                >
                  <span>VIEW DETAILS</span>
                  <span className="transition-transform group-hover/cta:translate-x-1.5 duration-300">→</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
