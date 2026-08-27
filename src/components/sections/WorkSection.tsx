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

export const WorkSection: React.FC<WorkSectionProps> = ({
  onOpenModal,
  onNavigate,
}) => {
  return (
    <SectionContainer id="work">
      {/* Section Header */}
      <SectionHeading
        category="Featured Engineering"
        title="SELECTED WORK"
        subtitle="A focused selection of systems, applications, and experiments built across software, AI, and cybersecurity."
      />

      {/* Project List */}
      <div className="mt-4 flex flex-col">
        {PROJECTS_DATA.map((project, idx) => (
          <div
            key={project.id}
            className={`
              py-12
              sm:py-14
              lg:py-16
              ${idx !== PROJECTS_DATA.length - 1
                ? 'border-b border-outline-variant/20'
                : ''
              }
            `}
          >
            <ProjectCard
              project={project}
              isReversed={idx % 2 !== 0}
              onSelect={(selectedProject) => {
                const detail = getDetailDataFor(
                  'project',
                  selectedProject.id
                );

                if (detail) {
                  onOpenModal(detail);
                }
              }}
            />
          </div>
        ))}
      </div>

      {/* More About Work */}
      <div className="flex justify-center pt-12">
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

export default WorkSection;