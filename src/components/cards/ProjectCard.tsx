import React from 'react';
import { Project } from '../../types';
import { Badge } from '../ui/Badge';

interface ProjectCardProps {
  project: Project;
  isReversed?: boolean;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isReversed = false,
  onSelect,
}) => {
  return (
    <article
      onClick={() => onSelect(project)}
      className="group cursor-pointer"
    >
      <div
        className={`flex flex-col lg:flex-row gap-8 lg:gap-20 items-center ${
          isReversed ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Content Side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <span className="font-technical-label text-xs text-on-surface-variant font-semibold">
              {project.number}
            </span>
            <span className="w-12 h-px bg-outline-variant/60" />
            <span className="font-technical-label text-xs text-accent uppercase tracking-widest font-semibold">
              {project.category}
            </span>
          </div>

          <h3 className="font-headline-md text-3xl sm:text-4xl text-primary font-bold tracking-tight group-hover:text-accent group-hover:translate-x-1 transition-all duration-300">
            {project.title}
          </h3>

          <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge key={tech} label={tech} variant="default" />
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2 font-technical-label text-xs uppercase tracking-widest text-primary group-hover:text-accent transition-colors duration-300">
            <span>VIEW CASE STUDY</span>
            <span className="transition-transform group-hover:translate-x-1.5 duration-300">→</span>
          </div>
        </div>

        {/* Media Preview Side */}
        <div className="w-full lg:w-1/2">
          <div className="surface-container rounded-xl overflow-hidden relative aspect-video p-1 shadow-pill border border-outline-variant/40 group-hover:border-accent/50 transition-all duration-500 bg-surface-container-low/70 backdrop-blur-sm">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover rounded-lg filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700 opacity-80 group-hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </article>
  );
};
