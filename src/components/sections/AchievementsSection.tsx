import React from 'react';
import { SectionContainer } from '../layout/SectionContainer';
import { SectionHeading } from '../ui/SectionHeading';
import { AchievementCard } from '../cards/AchievementCard';
import { Button } from '../ui/Button';
import { ACHIEVEMENTS_DATA, getDetailDataFor } from '../../data/portfolioData';
import { UniversalDetailData } from '../../types';
import { ViewName } from '../../App';

interface AchievementsSectionProps {
  onOpenModal: (data: UniversalDetailData) => void;
  onNavigate: (view: ViewName) => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ onOpenModal, onNavigate }) => {
  const featured = ACHIEVEMENTS_DATA.find((a) => a.isFeatured) || ACHIEVEMENTS_DATA[0];
  const list = ACHIEVEMENTS_DATA.filter((a) => !a.isFeatured).slice(0, 4);

  const handleOpenAchievementDetail = (id?: string) => {
    const detail = getDetailDataFor('achievement', id || featured.id);
    if (detail) onOpenModal(detail);
  };

  return (
    <SectionContainer id="achievements">
      <SectionHeading
        category="Recognitions & Honours"
        title="SELECTED ACHIEVEMENTS"
        subtitle="Milestones from engineering exhibitions, technical innovation, and competitive tournament records."
      />

      <div className="flex flex-col gap-6 sm:gap-8 mb-10">
        {/* Featured Card */}
        <AchievementCard
          achievement={featured}
          onSelect={(ach) => handleOpenAchievementDetail(ach.id)}
        />

        {/* Compact List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {list.map((item) => (
            <AchievementCard
              key={item.id}
              achievement={item}
              onSelect={(ach) => handleOpenAchievementDetail(ach.id)}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center pt-2">
        <Button
          variant="pill"
          size="md"
          onClick={() => onNavigate('achievements-detail')}
          withArrow
        >
          VIEW ALL ACHIEVEMENTS
        </Button>
      </div>
    </SectionContainer>
  );
};
