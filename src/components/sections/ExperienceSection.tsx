import React from 'react';
import { SectionContainer } from '../layout/SectionContainer';
import { SectionHeading } from '../ui/SectionHeading';
import { ExperienceCard } from '../cards/ExperienceCard';
import { Button } from '../ui/Button';
import {
  EXPERIENCE_DATA,
  getDetailDataFor,
} from '../../data/portfolioData';
import { UniversalDetailData } from '../../types';
import { ViewName } from '../../App';

interface ExperienceSectionProps {
  onOpenModal: (data: UniversalDetailData) => void;
  onNavigate: (view: ViewName) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  onOpenModal,
  onNavigate,
}) => {
  return (
    <SectionContainer id="experience">
      {/* Section Header */}
      <SectionHeading
        category="Industry & Roles"
        title="EXPERIENCE"
        subtitle="A focused overview of my professional roles, technical work, and esports operations experience."
      />

      {/* Experience List */}
      <div className="mt-4 flex flex-col gap-5 sm:gap-6">
        {EXPERIENCE_DATA.map((experience) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            onSelect={(selectedExperience) => {
              const detail = getDetailDataFor(
                'experience',
                selectedExperience.id
              );

              if (detail) {
                onOpenModal(detail);
              }
            }}
          />
        ))}
      </div>

      {/* More About Experience */}
      <div className="flex justify-center pt-10 sm:pt-12">
        <Button
          variant="secondary"
          size="md"
          onClick={() => onNavigate('experience-detail')}
          withArrow
        >
          MORE ABOUT EXPERIENCE
        </Button>
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;