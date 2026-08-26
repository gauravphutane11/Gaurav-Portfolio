import React from 'react';
import { ArrowLeft, Trophy, Award, Star } from 'lucide-react';
import { ACHIEVEMENTS_DATA, getDetailDataFor } from '../../data/portfolioData';
import { UniversalDetailData } from '../../types';

interface AchievementsDetailViewProps {
  onOpenModal: (data: UniversalDetailData) => void;
  onBack: () => void;
}

export const AchievementsDetailView: React.FC<AchievementsDetailViewProps> = ({ onOpenModal, onBack }) => {
  const featured = ACHIEVEMENTS_DATA.find((a) => a.isFeatured);
  const selected = ACHIEVEMENTS_DATA.filter((a) => !a.isFeatured).slice(0, 3);
  const archive = ACHIEVEMENTS_DATA.filter((a) => !a.isFeatured).slice(3);

  const openModal = (id: string) => {
    const detail = getDetailDataFor('achievement', id);
    if (detail) onOpenModal(detail);
  };

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
            Recognitions & Honours
          </span>
        </div>
        <h1 className="font-display-lg text-4xl sm:text-6xl md:text-7xl text-primary font-bold uppercase tracking-tight leading-none mb-6">
          ACHIEVEMENTS
        </h1>
        <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Engineering recognition, competitive tournament records, and technical innovation milestones.
        </p>
      </div>

      {/* FEATURED — SmartSketch / DIPEX 2025 */}
      {featured && (
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-4 h-4 text-accent" />
            <span className="font-technical-label text-xs uppercase tracking-widest text-accent font-semibold">
              FEATURED
            </span>
          </div>

          <div
            onClick={() => openModal(featured.id)}
            className="group cursor-pointer flex flex-col lg:flex-row gap-8 lg:gap-12 items-center p-8 rounded-2xl bg-surface-container-lowest/60 border border-outline-variant/40 hover:border-accent transition-all duration-500 backdrop-blur-md shadow-pill hover:shadow-glow"
          >
            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/30 rounded-full w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="font-technical-label text-[10px] uppercase tracking-widest text-accent">
                  {featured.category}
                </span>
              </div>

              <h2 className="font-headline-md text-3xl sm:text-4xl text-primary font-bold tracking-tight group-hover:text-accent transition-colors">
                {featured.title}
              </h2>

              <div className="flex items-center gap-2 font-display-lg text-xl text-accent font-bold">
                <Trophy className="w-5 h-5" />
                <span>{featured.placement}</span>
              </div>

              <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                {featured.description}
              </p>

              <div className="flex items-center gap-4 pt-2">
                <span className="font-technical-label text-[10px] uppercase tracking-widest text-on-surface-variant/60">
                  YEAR
                </span>
                <span className="font-ui-label text-sm text-primary font-medium">{featured.date}</span>
              </div>

              <div className="inline-flex items-center gap-2 font-technical-label text-xs uppercase tracking-widest text-primary group-hover:text-accent transition-colors pt-2 border-t border-outline-variant/20">
                <span>VIEW DETAILS</span>
                <span className="transition-transform group-hover:translate-x-1 duration-300">→</span>
              </div>
            </div>

            {/* Image */}
            {featured.image && (
              <div className="w-full lg:w-1/2 aspect-[16/10] rounded-xl overflow-hidden border border-outline-variant/30 bg-surface-container-low">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-80 group-hover:opacity-100"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* SELECTED — top competitive achievements */}
      {selected.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-4 h-4 text-accent" />
            <span className="font-technical-label text-xs uppercase tracking-widest text-accent font-semibold">
              SELECTED
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {selected.map((ach) => (
              <div
                key={ach.id}
                onClick={() => openModal(ach.id)}
                className="group cursor-pointer p-6 rounded-xl bg-surface-container-lowest/50 border border-outline-variant/30 hover:border-accent/60 transition-all duration-300 backdrop-blur-sm flex flex-col gap-3"
              >
                <span className="font-technical-label text-[10px] text-accent uppercase tracking-widest flex items-center gap-1.5">
                  <Award className="w-3 h-3" />
                  {ach.category}
                </span>
                <h3 className="font-ui-label text-base text-primary font-bold group-hover:text-accent transition-colors leading-tight">
                  {ach.title}
                </h3>
                <div className="font-technical-label text-sm text-primary font-semibold">{ach.placement}</div>
                {ach.prize && (
                  <div className="font-technical-label text-xs text-accent">{ach.prize}</div>
                )}
                <p className="font-body-md text-xs text-on-surface-variant leading-relaxed flex-1">{ach.description}</p>
                <div className="flex justify-between items-center pt-2 border-t border-outline-variant/20">
                  <span className="font-technical-label text-[10px] text-on-surface-variant/60">{ach.date}</span>
                  <span className="font-technical-label text-[10px] text-accent group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ARCHIVE — remaining records */}
      {archive.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="font-technical-label text-xs uppercase tracking-widest text-on-surface-variant/60 font-semibold">
              ARCHIVE
            </span>
          </div>

          <div className="flex flex-col divide-y divide-outline-variant/20">
            {archive.map((ach) => (
              <div
                key={ach.id}
                onClick={() => openModal(ach.id)}
                className="group cursor-pointer flex items-center justify-between gap-4 py-4 hover:px-2 transition-all duration-200"
              >
                <div className="flex flex-col">
                  <span className="font-technical-label text-[10px] text-accent uppercase tracking-widest mb-1">
                    {ach.category}
                  </span>
                  <h4 className="font-ui-label text-sm text-primary font-medium group-hover:text-accent transition-colors">
                    {ach.title}
                  </h4>
                </div>
                <div className="text-right flex-shrink-0 flex items-center gap-6">
                  <div>
                    <span className="font-technical-label text-xs text-primary font-bold block">{ach.placement}</span>
                    {ach.prize && (
                      <span className="font-technical-label text-[10px] text-accent block">{ach.prize}</span>
                    )}
                  </div>
                  <span className="font-technical-label text-[10px] text-on-surface-variant/50">{ach.date}</span>
                  <span className="font-technical-label text-xs text-on-surface-variant/40 group-hover:text-accent transition-colors">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
