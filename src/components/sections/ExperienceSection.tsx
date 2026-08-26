import React from 'react';
import { SectionContainer } from '../layout/SectionContainer';
import { SectionHeading } from '../ui/SectionHeading';
import { ExperienceCard } from '../cards/ExperienceCard';
import { Button } from '../ui/Button';
import { EXPERIENCE_DATA, getDetailDataFor } from '../../data/portfolioData';
import { UniversalDetailData } from '../../types';
import { ViewName } from '../../App';

interface ExperienceSectionProps {
  onOpenModal: (data: UniversalDetailData) => void;
  onNavigate: (view: ViewName) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenModal, onNavigate }) => {
  return (
    <SectionContainer id="experience">
      <SectionHeading
        category="Industry & Roles"
        title="EXPERIENCE"
        subtitle="Building software, working with technology teams, and operating at the intersection of development and esports."
      />

      <div className="flex flex-col gap-6 sm:gap-8">
        {EXPERIENCE_DATA.map((exp) => (
          <ExperienceCard
            key={exp.id}
            experience={exp}
            onSelect={(e) => {
              const detail = getDetailDataFor('experience', e.id);
              if (detail) onOpenModal(detail);
            }}
          />
        ))}
      </div>

      <div className="flex justify-center pt-10">
        <Button
          variant="secondary"
          size="md"
          onClick={() => onNavigate('experience-detail')}
          withArrow
        >
          VIEW EXPERIENCE
        </Button>
      </div>
    </SectionContainer>
  );
};
