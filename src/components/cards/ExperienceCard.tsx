import React from 'react';
import { Experience } from '../../types';
import { Badge } from '../ui/Badge';
import { ArrowUpRight } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
  onSelect: (experience: Experience) => void;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  onSelect,
}) => {
  return (
    <div
      onClick={() => onSelect(experience)}
      className="group cursor-pointer p-6 sm:p-8 rounded-2xl bg-surface-container-low/60 border border-outline-variant/30 hover:border-accent/60 transition-all duration-500 backdrop-blur-md shadow-pill flex flex-col md:flex-row gap-6 md:gap-10 items-center"
    >
      {/* Thumbnail */}
      <div className="w-full md:w-2/5 aspect-[16/10] rounded-xl overflow-hidden border border-outline-variant/40 relative flex-shrink-0 bg-surface-container-high/40">
        <img
          src={experience.image}
          alt={experience.company}
          loading="lazy"
          className="w-full h-full object-cover filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full bg-black/70 border border-white/20 group-hover:border-accent transition-colors">
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Info Content */}
      <div className="w-full md:w-3/5 flex flex-col justify-center gap-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-technical-label text-xs text-accent font-semibold">
              {experience.number}
            </span>
            <span className="w-6 h-px bg-outline-variant/40" />
            <h3 className="font-headline-md text-2xl sm:text-3xl text-primary font-bold tracking-tight group-hover:text-accent transition-colors">
              {experience.company}
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h4 className="font-ui-label text-sm sm:text-base text-primary font-medium">
            {experience.role}
          </h4>
          <span className="text-outline-variant">•</span>
          <span className="font-technical-label text-xs uppercase tracking-wider text-secondary">
            {experience.duration}
          </span>
        </div>

        <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
          {experience.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {experience.tags.map((tag) => (
            <Badge key={tag} label={tag} variant="outline" />
          ))}
        </div>
      </div>
    </div>
  );
};
