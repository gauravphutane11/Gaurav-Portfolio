import React from 'react';

interface SectionHeadingProps {
  number?: string;
  category?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  category,
  title,
  subtitle,
  className = '',
}) => {
  return (
    <header className={`mb-12 md:mb-16 ${className}`}>
      {(number || category) && (
        <div className="flex items-center gap-3 mb-3">
          {number && (
            <span className="font-technical-label text-xs text-accent font-semibold">
              {number}
            </span>
          )}
          {number && category && (
            <span className="w-8 h-px bg-outline-variant/60" />
          )}
          {category && (
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-technical-label text-xs uppercase tracking-[0.18em] text-secondary">
                {category}
              </span>
            </div>
          )}
        </div>
      )}

      <h2 className="font-display-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary uppercase font-bold tracking-tight mb-4 leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="font-body-lg text-base md:text-lg text-on-surface-variant max-w-2xl border-l-2 border-accent pl-4 py-1 leading-relaxed">
          {subtitle}
        </p>
      )}
    </header>
  );
};
