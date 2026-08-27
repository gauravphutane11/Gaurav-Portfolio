import React from 'react';
import { ArrowUpRight } from 'lucide-react';
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
      className="group w-full"
      aria-label={`View ${project.title} case study`}
    >
      <div
        className={`
          grid
          grid-cols-1
          lg:grid-cols-12
          items-center
          gap-8
          lg:gap-12
        `}
      >
        {/* =====================================================
            PROJECT INFORMATION
        ====================================================== */}

        <div
          className={`
            w-full
            lg:col-span-5
            flex
            flex-col
            items-start
            ${isReversed ? 'lg:order-2' : 'lg:order-1'}
          `}
        >
          {/* Number + Category */}

          <div className="flex items-center gap-3 mb-4">
            <span
              className="
                font-technical-label
                text-[11px]
                font-semibold
                tracking-[0.14em]
                text-on-surface-variant
              "
            >
              {project.number}
            </span>

            <span className="h-px w-8 bg-outline-variant/60" />

            <span
              className="
                font-technical-label
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-accent
              "
            >
              {project.category}
            </span>
          </div>

          {/* Title */}

          <h3
            className="
              font-headline-md
              text-2xl
              font-bold
              leading-tight
              tracking-tight
              text-primary
              transition-all
              duration-300
              sm:text-3xl
              lg:text-[2.15rem]
              group-hover:text-accent
            "
          >
            {project.title}
          </h3>

          {/* Short Project Abstract */}

          <p
            className="
              mt-4
              max-w-xl
              font-body-md
              text-sm
              leading-7
              text-on-surface-variant
              sm:text-base
            "
          >
            {project.shortDescription}
          </p>

          {/* Technologies — intentionally limited */}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge
                key={tech}
                label={tech}
                variant="default"
              />
            ))}
          </div>

          {/* Case Study Button */}

          <button
            type="button"
            onClick={() => onSelect(project)}
            className="
              mt-6
              inline-flex
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
              hover:border-accent
              hover:text-accent
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-accent
              focus-visible:ring-offset-2
              focus-visible:ring-offset-black
            "
          >
            <span>VIEW CASE STUDY</span>

            <ArrowUpRight
              className="
                h-3.5
                w-3.5
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </button>
        </div>

        {/* =====================================================
            PROJECT IMAGE
        ====================================================== */}

        <button
          type="button"
          onClick={() => onSelect(project)}
          aria-label={`Open ${project.title} case study`}
          className={`
            relative
            w-full
            text-left
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-accent
            focus-visible:ring-offset-4
            focus-visible:ring-offset-black
            ${isReversed
              ? 'lg:col-span-7 lg:order-1'
              : 'lg:col-span-7 lg:order-2'
            }
          `}
        >
          <div
            className="
              relative
              aspect-[16/9]
              w-full
              overflow-hidden
              rounded-xl
              border
              border-outline-variant/40
              bg-surface-container-low/70
              p-1
              shadow-pill
              backdrop-blur-sm
              transition-all
              duration-500
              group-hover:border-accent/60
              group-hover:shadow-[0_0_25px_rgba(241,80,37,0.12)]
            "
          >
            {/* Image */}

            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="
                h-full
                w-full
                rounded-lg
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

            {/* Bottom Gradient */}

            <div
              className="
                pointer-events-none
                absolute
                inset-1
                rounded-lg
                bg-gradient-to-t
                from-black/65
                via-transparent
                to-transparent
                opacity-70
              "
            />

            {/* Image Index */}

            <div
              className="
                absolute
                left-5
                top-5
                rounded-full
                border
                border-white/15
                bg-black/45
                px-3
                py-1.5
                font-technical-label
                text-[9px]
                uppercase
                tracking-[0.15em]
                text-white/70
                backdrop-blur-md
              "
            >
              PROJECT {project.number}
            </div>

            {/* Hover Indicator */}

            <div
              className="
                absolute
                bottom-5
                right-5
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/50
                text-white
                opacity-0
                backdrop-blur-md
                transition-all
                duration-300
                group-hover:opacity-100
              "
            >
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;