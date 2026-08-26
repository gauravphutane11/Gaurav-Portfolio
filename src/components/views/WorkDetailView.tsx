import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { PROJECTS_DATA, getDetailDataFor } from '../../data/portfolioData';
import { UniversalDetailData } from '../../types';
import { Badge } from '../ui/Badge';

interface WorkDetailViewProps {
  onOpenModal: (data: UniversalDetailData) => void;
  onBack: () => void;
}

export const WorkDetailView: React.FC<WorkDetailViewProps> = ({ onOpenModal, onBack }) => {
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
            Featured Engineering
          </span>
        </div>
        <h1 className="font-display-lg text-4xl sm:text-6xl md:text-7xl text-primary font-bold uppercase tracking-tight leading-none mb-6">
          SELECTED WORK
        </h1>
        <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          A collection of systems, applications, and experiments built across full-stack engineering,
          AI development, and cybersecurity. Each project represents a real problem solved with
          deliberate architecture.
        </p>
      </div>

      {/* Projects */}
      <div className="flex flex-col">
        {PROJECTS_DATA.map((project, idx) => {
          const isReversed = idx % 2 !== 0;
          return (
            <article
              key={project.id}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-start py-16 ${
                idx < PROJECTS_DATA.length - 1 ? 'border-b border-outline-variant/20' : ''
              } ${isReversed ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 shrink-0">
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] border border-outline-variant/40 bg-surface-container-low/70 backdrop-blur-sm shadow-pill group cursor-pointer"
                  onClick={() => {
                    const detail = getDetailDataFor('project', project.id);
                    if (detail) onOpenModal(detail);
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 font-technical-label text-[10px] uppercase tracking-widest text-white/60">
                    CLICK TO EXPAND →
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <span className="font-technical-label text-xs text-on-surface-variant font-semibold">
                    {project.number}
                  </span>
                  <span className="w-8 h-px bg-outline-variant/60" />
                  <span className="font-technical-label text-xs text-accent uppercase tracking-widest font-semibold">
                    {project.category}
                  </span>
                </div>

                <h2 className="font-headline-md text-3xl sm:text-4xl text-primary font-bold tracking-tight">
                  {project.title}
                </h2>

                <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                  {project.shortDescription}
                </p>

                {project.fullDescription.slice(0, 2).map((para, i) => (
                  <p key={i} className="font-body-md text-sm text-on-surface-variant/80 leading-relaxed">
                    {para}
                  </p>
                ))}

                {/* Metadata Row */}
                <div className="flex flex-wrap gap-6 py-4 border-t border-outline-variant/20">
                  <div>
                    <span className="font-technical-label text-[10px] uppercase tracking-widest text-on-surface-variant/60 block mb-1">ROLE</span>
                    <span className="font-ui-label text-sm text-primary font-medium">{project.role}</span>
                  </div>
                  <div>
                    <span className="font-technical-label text-[10px] uppercase tracking-widest text-on-surface-variant/60 block mb-1">YEAR</span>
                    <span className="font-ui-label text-sm text-primary font-medium">{project.year}</span>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} label={tech} variant="default" />
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    const detail = getDetailDataFor('project', project.id);
                    if (detail) onOpenModal(detail);
                  }}
                  className="mt-2 inline-flex items-center gap-2 font-technical-label text-xs uppercase tracking-widest text-primary hover:text-accent transition-colors duration-300 group/cta border-b border-transparent hover:border-accent pb-1 w-fit"
                >
                  <span>VIEW CASE STUDY</span>
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
