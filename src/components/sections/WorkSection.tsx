import React from 'react';
import { SectionContainer } from '../layout/SectionContainer';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../cards/ProjectCard';
import { Button } from '../ui/Button';
import { PROJECTS_DATA, getDetailDataFor } from '../../data/portfolioData';
import { UniversalDetailData } from '../../types';
import { ViewName } from '../../App';

interface WorkSectionProps {
  onOpenModal: (data: UniversalDetailData) => void;
  onNavigate: (view: ViewName) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onOpenModal, onNavigate }) => {
  return (
    <SectionContainer id="work">
      <SectionHeading
        category="Featured Engineering"
        title="SELECTED WORK"
        subtitle="A selection of systems, applications and experiments I've built across software, AI and cybersecurity."
      />

      <div className="flex flex-col divide-y divide-outline-variant/20">
        {PROJECTS_DATA.map((project, idx) => (
          <div key={project.id} className={idx === 0 ? 'pb-14' : 'py-14'}>
            <ProjectCard
              project={project}
              isReversed={idx % 2 !== 0}
              onSelect={(proj) => {
                const detail = getDetailDataFor('project', proj.id);
                if (detail) onOpenModal(detail);
              }}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <Button
          variant="secondary"
          size="md"
          onClick={() => onNavigate('work-detail')}
          withArrow
        >
          MORE ABOUT WORK
        </Button>
      </div>
    </SectionContainer>
  );
};
