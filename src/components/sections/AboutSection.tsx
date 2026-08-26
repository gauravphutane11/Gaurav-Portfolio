import React from 'react';
import { SectionContainer } from '../layout/SectionContainer';
import { Button } from '../ui/Button';
import { ABOUT_DATA, getDetailDataFor } from '../../data/portfolioData';
import { UniversalDetailData } from '../../types';
import { GraduationCap, Sparkles } from 'lucide-react';
import { ViewName } from '../../App';

interface AboutSectionProps {
  onOpenModal: (data: UniversalDetailData) => void;
  onNavigate: (view: ViewName) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenModal, onNavigate }) => {
  const handleOpenAboutDetail = () => {
    const detail = getDetailDataFor('about', 'about-detail');
    if (detail) onOpenModal(detail);
  };

  return (
    <SectionContainer id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Portrait & Headline */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-technical-label text-xs uppercase tracking-widest text-secondary font-semibold">
              ENGINEERING PHILOSOPHY
            </span>
          </div>

          <h2 className="font-display-lg text-3xl sm:text-4xl md:text-5xl text-primary uppercase font-bold tracking-tight leading-tight">
            I BUILD.<br />
            I EXPERIMENT.<br />
            I COMPETE.
          </h2>

          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant leading-relaxed">
            {ABOUT_DATA.summary}
          </p>

          <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-outline-variant/35 bg-surface-container-low shadow-pill group cursor-pointer" onClick={handleOpenAboutDetail}>
            <img
              src={ABOUT_DATA.portraitImage}
              alt="Gaurav Phutane"
              loading="lazy"
              className="w-full h-full object-cover filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-85 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <span className="font-technical-label text-[11px] text-white uppercase tracking-widest bg-black/60 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                FULL-STACK + AI + ESPORTS
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Pillars & Education */}
        <div className="lg:col-span-6 flex flex-col gap-8">
          {/* Engineering Pillars */}
          <div className="space-y-4">
            <h3 className="font-technical-label text-xs uppercase tracking-widest text-accent font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>CORE DISCIPLINES</span>
            </h3>

            {ABOUT_DATA.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-surface-container-lowest/50 border border-outline-variant/30 backdrop-blur-sm hover:border-accent/50 transition-colors"
              >
                <h4 className="font-headline-md text-base sm:text-lg text-primary font-bold mb-1">
                  {pillar.title}
                </h4>
                <p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Education Summary */}
          <div className="space-y-4">
            <h3 className="font-technical-label text-xs uppercase tracking-widest text-accent font-semibold flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-accent" />
              <span>ACADEMIC FOUNDATION</span>
            </h3>

            <div className="space-y-4 pl-4 border-l-2 border-outline-variant/30">
              {ABOUT_DATA.education.map((edu, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[23px] top-1.5 w-2 h-2 rounded-full bg-accent" />
                  <h4 className="font-ui-label text-sm sm:text-base text-primary font-semibold">
                    {edu.degree}
                  </h4>
                  <p className="font-technical-label text-[11px] text-on-surface-variant mt-0.5">
                    {edu.institution} · <span className="text-secondary font-medium">{edu.statusOrScore}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <Button
              variant="pill"
              size="md"
              onClick={() => onNavigate('about-detail')}
              withArrow
            >
              MORE ABOUT ME
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
