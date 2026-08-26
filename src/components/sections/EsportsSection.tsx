import React from 'react';
import { SectionContainer } from '../layout/SectionContainer';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { ESPORTS_DATA, getDetailDataFor } from '../../data/portfolioData';
import { UniversalDetailData } from '../../types';
import { Swords, Shield, Trophy } from 'lucide-react';
import { ViewName } from '../../App';

interface EsportsSectionProps {
  onOpenModal: (data: UniversalDetailData) => void;
  onNavigate: (view: ViewName) => void;
}

export const EsportsSection: React.FC<EsportsSectionProps> = ({ onOpenModal, onNavigate }) => {
  const handleOpenEsportsDetail = () => {
    const detail = getDetailDataFor('esports', 'esports-profile');
    if (detail) onOpenModal(detail);
  };

  return (
    <SectionContainer id="esports">
      <SectionHeading
        category="Competitive & Tactical"
        title="ESPORTS_"
        subtitle="Competitive player and esports operations contributor, blending strategic execution with technical tournament management."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
        {/* Category 01: Player */}
        <div
          onClick={handleOpenEsportsDetail}
          className="md:col-span-4 p-6 sm:p-8 rounded-2xl bg-surface-container-lowest/50 border border-outline-variant/30 hover:border-accent/60 transition-all duration-300 backdrop-blur-md shadow-pill flex flex-col justify-between cursor-pointer group"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-technical-label text-xs text-accent font-semibold">01</span>
              <h3 className="font-headline-md text-xl sm:text-2xl text-primary font-bold tracking-tight uppercase flex items-center gap-2 group-hover:text-accent transition-colors">
                <Swords className="w-5 h-5 text-accent" />
                <span>PLAYER</span>
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <span className="font-technical-label text-[10px] text-on-surface-variant uppercase tracking-widest block mb-1">
                  Discipline
                </span>
                <span className="font-ui-label text-sm text-primary font-semibold">
                  {ESPORTS_DATA.discipline}
                </span>
              </div>

              <div>
                <span className="font-technical-label text-[10px] text-on-surface-variant uppercase tracking-widest block mb-2">
                  Roster Qualifications
                </span>
                <ul className="space-y-2">
                  {ESPORTS_DATA.rosterHistory.map((roster, idx) => (
                    <li key={idx} className="flex items-center gap-2 font-body-md text-xs sm:text-sm text-on-surface">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{roster}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-4 border-t border-outline-variant/20 font-technical-label text-[11px] uppercase tracking-widest text-accent flex items-center gap-1">
            <span>VIEW PLAYER LOGS →</span>
          </div>
        </div>

        {/* Category 02: Operations */}
        <div
          onClick={handleOpenEsportsDetail}
          className="md:col-span-8 p-6 sm:p-8 rounded-2xl bg-surface-container-lowest/50 border border-outline-variant/30 hover:border-accent/60 transition-all duration-300 backdrop-blur-md shadow-pill flex flex-col justify-between cursor-pointer group"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-technical-label text-xs text-accent font-semibold">02</span>
              <h3 className="font-headline-md text-xl sm:text-2xl text-primary font-bold tracking-tight uppercase flex items-center gap-2 group-hover:text-accent transition-colors">
                <Shield className="w-5 h-5 text-accent" />
                <span>OPERATIONS</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {ESPORTS_DATA.operations.map((op, idx) => (
                <div key={idx} className="border-l-2 border-outline-variant/40 pl-3.5 hover:border-accent transition-colors">
                  <h4 className="font-ui-label text-sm text-primary font-bold mb-0.5">
                    {op.organization}
                  </h4>
                  <p className="font-technical-label text-[10px] text-accent uppercase tracking-widest mb-1">
                    {op.role}
                  </p>
                  <p className="font-body-md text-xs text-on-surface-variant">
                    {op.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-4 border-t border-outline-variant/20 font-technical-label text-[11px] uppercase tracking-widest text-accent flex items-center gap-1">
            <span>VIEW EVENT LOGS →</span>
          </div>
        </div>

        {/* Category 03: Selected Highlights */}
        <div className="md:col-span-12 p-6 sm:p-8 rounded-2xl bg-surface-container-lowest/50 border border-outline-variant/30 backdrop-blur-md shadow-pill">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-technical-label text-xs text-accent font-semibold">03</span>
            <h3 className="font-headline-md text-xl sm:text-2xl text-primary font-bold tracking-tight uppercase flex items-center gap-2">
              <Trophy className="w-5 h-5 text-accent" />
              <span>COMPETITIVE RECORD</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ESPORTS_DATA.topTournaments.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                onClick={handleOpenEsportsDetail}
                className="p-4 rounded-xl bg-surface-container-high/40 border border-outline-variant/30 hover:border-accent/50 cursor-pointer transition-all duration-300 group/item"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-ui-label text-sm text-primary font-bold group-hover/item:text-accent transition-colors">
                    {item.event}
                  </h4>
                  <span className="font-technical-label text-[10px] px-2 py-0.5 rounded bg-white/10 text-white">
                    {item.year}
                  </span>
                </div>
                <div className="font-technical-label text-xs text-primary font-semibold">
                  {item.placement}
                </div>
                {item.prize && (
                  <div className="font-technical-label text-[11px] text-accent mt-1">
                    {item.prize}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <Button
          variant="secondary"
          size="md"
          onClick={() => onNavigate('esports-detail')}
          withArrow
        >
          EXPLORE ESPORTS ARCHIVE
        </Button>
      </div>
    </SectionContainer>
  );
};
