import React from 'react';
import { ArrowLeft, Swords, Shield, Trophy } from 'lucide-react';
import { ESPORTS_DATA, getDetailDataFor } from '../../data/portfolioData';
import { UniversalDetailData } from '../../types';

interface EsportsDetailViewProps {
  onOpenModal: (data: UniversalDetailData) => void;
  onBack: () => void;
}

export const EsportsDetailView: React.FC<EsportsDetailViewProps> = ({ onOpenModal, onBack }) => {
  const handleOpenEsportsModal = () => {
    const detail = getDetailDataFor('esports', 'esports-profile');
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
            Competitive & Tactical
          </span>
        </div>
        <h1 className="font-display-lg text-4xl sm:text-6xl md:text-7xl text-primary font-bold uppercase tracking-tight leading-none mb-6">
          ESPORTS
        </h1>
        <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Active BGMI competitor and tournament operations contributor — blending high-pressure
          competitive execution with structured technical event administration.
        </p>
      </div>

      {/* Panel 01: Player */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-technical-label text-xs text-accent font-semibold">01</span>
          <h2 className="font-headline-md text-2xl sm:text-3xl text-primary font-bold uppercase flex items-center gap-2">
            <Swords className="w-6 h-6 text-accent" />
            <span>PLAYER</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Discipline */}
          <div className="p-6 rounded-2xl bg-surface-container-lowest/50 border border-outline-variant/30 backdrop-blur-md">
            <span className="font-technical-label text-[10px] uppercase tracking-widest text-on-surface-variant/60 block mb-3">
              DISCIPLINE
            </span>
            <p className="font-headline-md text-xl text-primary font-bold mb-6">{ESPORTS_DATA.discipline}</p>

            <span className="font-technical-label text-[10px] uppercase tracking-widest text-on-surface-variant/60 block mb-3">
              ROSTER QUALIFICATIONS
            </span>
            <ul className="space-y-3">
              {ESPORTS_DATA.rosterHistory.map((roster, idx) => (
                <li key={idx} className="flex items-center gap-3 font-body-md text-sm text-on-surface">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span>{roster}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats quick-view */}
          <div className="p-6 rounded-2xl bg-surface-container-lowest/50 border border-outline-variant/30 backdrop-blur-md flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <span className="font-technical-label text-[10px] uppercase tracking-widest text-on-surface-variant/60 block mb-1">TOP PLACEMENT</span>
                <p className="font-headline-md text-lg text-accent font-bold">1ST PLACE</p>
                <p className="font-body-md text-xs text-on-surface-variant mt-0.5">College Rivals @ AISSMS</p>
              </div>
              <div>
                <span className="font-technical-label text-[10px] uppercase tracking-widest text-on-surface-variant/60 block mb-1">PRIZE POOLS</span>
                <p className="font-headline-md text-lg text-primary font-bold">₹20,000+</p>
                <p className="font-body-md text-xs text-on-surface-variant mt-0.5">Career winnings</p>
              </div>
              <div>
                <span className="font-technical-label text-[10px] uppercase tracking-widest text-on-surface-variant/60 block mb-1">PLAYOFF SEED</span>
                <p className="font-headline-md text-lg text-primary font-bold">#2 SEED</p>
                <p className="font-body-md text-xs text-on-surface-variant mt-0.5">Playoffs qualified</p>
              </div>
              <div>
                <span className="font-technical-label text-[10px] uppercase tracking-widest text-on-surface-variant/60 block mb-1">TOURNAMENTS</span>
                <p className="font-headline-md text-lg text-primary font-bold">7+</p>
                <p className="font-body-md text-xs text-on-surface-variant mt-0.5">LAN & circuit events</p>
              </div>
            </div>
            <button
              onClick={handleOpenEsportsModal}
              className="mt-6 inline-flex items-center gap-2 font-technical-label text-xs uppercase tracking-widest text-accent hover:text-primary transition-colors group/btn"
            >
              <span>VIEW FULL PROFILE</span>
              <span className="transition-transform group-hover/btn:translate-x-1 duration-300">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Panel 02: Operations */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-technical-label text-xs text-accent font-semibold">02</span>
          <h2 className="font-headline-md text-2xl sm:text-3xl text-primary font-bold uppercase flex items-center gap-2">
            <Shield className="w-6 h-6 text-accent" />
            <span>OPERATIONS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ESPORTS_DATA.operations.map((op, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface-container-lowest/50 border border-outline-variant/30 backdrop-blur-md hover:border-accent/40 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-ui-label text-base text-primary font-bold">{op.organization}</h3>
                <span className="font-technical-label text-[10px] text-accent uppercase tracking-widest px-2 py-1 bg-accent/10 rounded-full border border-accent/20">
                  {op.role}
                </span>
              </div>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{op.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Panel 03: Competitive Archive — ALL 7 tournaments */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <span className="font-technical-label text-xs text-accent font-semibold">03</span>
          <h2 className="font-headline-md text-2xl sm:text-3xl text-primary font-bold uppercase flex items-center gap-2">
            <Trophy className="w-6 h-6 text-accent" />
            <span>COMPETITIVE ARCHIVE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ESPORTS_DATA.topTournaments.map((item, idx) => (
            <div
              key={idx}
              onClick={handleOpenEsportsModal}
              className="p-5 rounded-xl bg-surface-container-lowest/50 border border-outline-variant/30 hover:border-accent/50 cursor-pointer transition-all duration-300 group/item"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-ui-label text-sm text-primary font-bold group-hover/item:text-accent transition-colors leading-tight pr-2">
                  {item.event}
                </h3>
                <span className="font-technical-label text-[10px] px-2 py-0.5 rounded bg-white/10 text-white flex-shrink-0">
                  {item.year}
                </span>
              </div>
              <div className="font-technical-label text-xs text-primary font-semibold mb-1">
                {item.placement}
              </div>
              {item.prize && (
                <div className="font-technical-label text-[11px] text-accent mb-2">
                  {item.prize}
                </div>
              )}
              {item.details && (
                <p className="font-body-md text-[11px] text-on-surface-variant/70">{item.details}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
