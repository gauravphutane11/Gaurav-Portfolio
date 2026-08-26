import React, { useEffect } from 'react';
import { UniversalDetailData } from '../../types';
import { MediaSlideshow } from './MediaSlideshow';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { X } from 'lucide-react';

interface UniversalDetailModalProps {
  data: UniversalDetailData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const UniversalDetailModal: React.FC<UniversalDetailModalProps> = ({
  data,
  isOpen,
  onClose,
}) => {
  // Handle ESC key to dismiss modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-fade-up overflow-y-auto"
      onClick={onClose}
    >
      {/* Modal Dialog Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[90vh] bg-surface-container-lowest/95 border border-outline-variant/30 rounded-2xl shadow-modal flex flex-col overflow-hidden animate-scale-in"
      >
        {/* Top Header Bar */}
        <header className="flex justify-between items-center px-6 py-4 border-b border-outline-variant/20 bg-surface-container-lowest/80 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-technical-label text-[11px] uppercase tracking-[0.2em] text-on-surface-variant font-semibold">
              {data.category}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-on-surface-variant hover:text-white hover:bg-surface-container-high rounded-full transition-all duration-200 group"
          >
            <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
          </button>
        </header>

        {/* Modal Body: Split Layout */}
        <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto lg:overflow-hidden">
          {/* Left Column: Media Slideshow (~55%) */}
          <section className="w-full lg:w-[55%] h-64 sm:h-80 lg:h-auto border-b lg:border-b-0 lg:border-r border-outline-variant/20 flex flex-col shrink-0">
            <MediaSlideshow media={data.media} />
          </section>

          {/* Right Column: Information Panel (~45%) */}
          <section className="w-full lg:w-[45%] p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-y-auto custom-scrollbar bg-surface/40">
            <div className="space-y-6">
              {/* Category & Title */}
              <div>
                <span className="font-technical-label text-[10px] uppercase tracking-widest text-accent mb-2 block font-semibold">
                  {data.category}
                </span>
                <h1
                  id="modal-title"
                  className="font-display-lg text-2xl sm:text-3xl lg:text-4xl text-primary font-bold tracking-tight leading-tight"
                >
                  {data.title}
                </h1>
                {data.subtitle && (
                  <p className="font-ui-label text-sm text-secondary font-medium mt-1">
                    {data.subtitle}
                  </p>
                )}
              </div>

              {/* Descriptions */}
              <div className="space-y-3 font-body-md text-sm text-on-surface-variant leading-relaxed">
                {Array.isArray(data.description) ? (
                  data.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                ) : (
                  <p>{data.description}</p>
                )}
              </div>

              {/* Metadata Grid */}
              {data.metadata && data.metadata.length > 0 && (
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-outline-variant/20">
                  {data.metadata.map((item, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="font-technical-label text-[10px] uppercase tracking-widest text-on-surface-variant/70 mb-1">
                        {item.label}
                      </span>
                      <span className="font-ui-label text-xs sm:text-sm text-primary font-medium">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Technologies / Tags */}
              {data.technologies && data.technologies.length > 0 && (
                <div className="pt-4 border-t border-outline-variant/20">
                  <span className="font-technical-label text-[10px] uppercase tracking-widest text-on-surface-variant/70 mb-2.5 block">
                    Core Technologies & Skills
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {data.technologies.map((tech) => (
                      <Badge key={tech} label={tech} variant="default" />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions Cluster */}
            <div className="pt-8 mt-6 border-t border-outline-variant/20 flex flex-col sm:flex-row gap-3">
              {data.primaryAction && (
                <Button
                  variant="secondary"
                  size="md"
                  href={data.primaryAction.url}
                  isExternal={data.primaryAction.isExternal}
                  withArrow
                  className="flex-1"
                >
                  {data.primaryAction.label}
                </Button>
              )}

              {data.secondaryAction && (
                <Button
                  variant="ghost"
                  size="md"
                  href={data.secondaryAction.url}
                  isExternal={data.secondaryAction.isExternal}
                  className="flex-1"
                >
                  {data.secondaryAction.label}
                </Button>
              )}

              <Button
                variant="pill"
                size="md"
                onClick={onClose}
                className={!data.primaryAction && !data.secondaryAction ? 'w-full' : ''}
              >
                CLOSE
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
