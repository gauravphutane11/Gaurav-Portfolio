import React, { useState } from 'react';
import { MediaItem } from '../../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MediaSlideshowProps {
  media: MediaItem[];
}

export const MediaSlideshow: React.FC<MediaSlideshowProps> = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  if (!media || media.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-surface-container-lowest text-on-surface-variant font-technical-label text-xs">
        NO MEDIA AVAILABLE
      </div>
    );
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const currentMedia = media[currentIndex] || media[0];

  return (
    <div className="relative w-full h-full min-h-[260px] md:min-h-[380px] bg-black group overflow-hidden flex flex-col justify-between">
      {/* Active Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={currentMedia.url}
          alt={currentMedia.alt}
          className="w-full h-full object-cover object-center filter contrast-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Caption Bar (Top or Bottom) */}
      {currentMedia.caption && (
        <div className="relative z-10 p-4 font-technical-label text-[11px] uppercase tracking-widest text-primary/80 bg-gradient-to-b from-black/70 to-transparent">
          {currentMedia.caption}
        </div>
      )}

      <div />

      {/* Controls Container */}
      <div className="relative z-10 p-4 flex items-center justify-between">
        {/* Navigation Arrows */}
        {media.length > 1 && (
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="w-9 h-9 rounded-full bg-black/60 hover:bg-accent border border-white/20 hover:border-accent text-white flex items-center justify-center backdrop-blur-md transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="w-9 h-9 rounded-full bg-black/60 hover:bg-accent border border-white/20 hover:border-accent text-white flex items-center justify-center backdrop-blur-md transition-all duration-200"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Pagination Dots */}
        {media.length > 1 && (
          <div className="flex items-center gap-2 ml-auto">
            {media.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                aria-label={`Slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? 'w-6 h-1.5 bg-accent shadow-glow'
                    : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
