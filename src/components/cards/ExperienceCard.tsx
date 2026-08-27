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
    <article className="group w-full">
      <button
        type="button"
        onClick={() => onSelect(experience)}
        aria-label={`View details for ${experience.company}`}
        className="
          w-full
          text-left
          rounded-2xl
          border
          border-outline-variant/30
          bg-surface-container-low/55
          p-5
          sm:p-6
          backdrop-blur-md
          shadow-pill
          transition-all
          duration-500
          hover:border-accent/60
          hover:shadow-[0_0_25px_rgba(241,80,37,0.10)]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-accent
          focus-visible:ring-offset-4
          focus-visible:ring-offset-black
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">

          {/* =================================================
              IMAGE
          ================================================= */}

          <div className="relative w-full md:col-span-4">
            <div
              className="
                relative
                aspect-[16/9]
                w-full
                overflow-hidden
                rounded-xl
                border
                border-outline-variant/35
                bg-surface-container-high/40
              "
            >
              <img
                src={experience.image}
                alt={experience.company}
                loading="lazy"
                className="
                  h-full
                  w-full
                  object-cover
                  opacity-80
                  grayscale
                  contrast-105
                  transition-all
                  duration-700
                  group-hover:scale-[1.025]
                  group-hover:opacity-100
                  group-hover:grayscale-0
                "
              />

              {/* Gradient */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/55
                  via-transparent
                  to-transparent
                "
              />

              {/* Open Indicator */}
              <div
                className="
                  absolute
                  right-3
                  top-3
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/55
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  group-hover:border-accent/70
                  group-hover:text-accent
                "
              >
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* =================================================
              EXPERIENCE INFORMATION
          ================================================= */}

          <div className="w-full md:col-span-8 flex flex-col">

            {/* Number + Company */}

            <div className="flex items-center gap-3">
              <span
                className="
                  font-technical-label
                  text-[10px]
                  font-semibold
                  tracking-[0.15em]
                  text-accent
                "
              >
                {experience.number}
              </span>

              <span className="h-px w-7 bg-outline-variant/50" />

              <h3
                className="
                  font-headline-md
                  text-xl
                  font-bold
                  tracking-tight
                  text-primary
                  transition-colors
                  duration-300
                  sm:text-2xl
                  group-hover:text-accent
                "
              >
                {experience.company}
              </h3>
            </div>

            {/* Role + Duration */}

            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span
                className="
                  font-ui-label
                  text-sm
                  font-medium
                  text-primary
                  sm:text-base
                "
              >
                {experience.role}
              </span>

              <span className="text-outline-variant">
                •
              </span>

              <span
                className="
                  font-technical-label
                  text-[10px]
                  uppercase
                  tracking-[0.13em]
                  text-secondary
                "
              >
                {experience.duration}
              </span>
            </div>

            {/* Short Description */}

            <p
              className="
                mt-3
                max-w-2xl
                font-body-md
                text-sm
                leading-6
                text-on-surface-variant
                sm:text-[15px]
                sm:leading-7
              "
            >
              {experience.shortDescription}
            </p>

            {/* Tags */}

            <div className="mt-4 flex flex-wrap gap-2">
              {experience.tags.slice(0, 4).map((tag) => (
                <Badge
                  key={tag}
                  label={tag}
                  variant="outline"
                />
              ))}
            </div>

            {/* View Details */}

            <div
              className="
                mt-5
                inline-flex
                w-fit
                items-center
                gap-2
                border-b
                border-transparent
                pb-1.5
                font-technical-label
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-primary
                transition-all
                duration-300
                group-hover:border-accent
                group-hover:text-accent
              "
            >
              <span>
                VIEW DETAILS
              </span>

              <ArrowUpRight
                className="
                  h-3.5
                  w-3.5
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </div>
          </div>
        </div>
      </button>
    </article>
  );
};

export default ExperienceCard;