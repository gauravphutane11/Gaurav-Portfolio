import React from 'react';
import { Achievement } from '../../types';
import { Award, Trophy } from 'lucide-react';

interface AchievementCardProps {
  achievement: Achievement;
  onSelect: (achievement: Achievement) => void;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({
  achievement,
  onSelect,
}) => {
  if (achievement.isFeatured) {
    return (
      <div
        onClick={() => onSelect(achievement)}
        className="group cursor-pointer p-6 sm:p-8 rounded-2xl bg-surface-container-lowest/60 border border-outline-variant/40 hover:border-accent transition-all duration-500 backdrop-blur-md shadow-pill hover:shadow-glow flex flex-col lg:flex-row gap-6 lg:gap-8 items-center"
      >
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high/80 border border-outline-variant/30 rounded-full w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-technical-label text-[10px] uppercase tracking-widest text-primary">
              {achievement.category}
            </span>
          </div>

          <h3 className="font-headline-md text-2xl sm:text-3xl text-primary font-bold tracking-tight group-hover:text-accent transition-colors">
            {achievement.title}
          </h3>

          <div className="font-display-lg text-xl sm:text-2xl text-accent font-bold tracking-tight flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            <span>{achievement.placement}</span>
          </div>

          <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
            {achievement.description}
          </p>
        </div>

        {achievement.image && (
          <div className="w-full lg:w-1/2 aspect-[16/10] rounded-xl overflow-hidden border border-outline-variant/30 bg-surface-container-low relative">
            <img
              src={achievement.image}
              alt={achievement.title}
              loading="lazy"
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-80 group-hover:opacity-100"
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      onClick={() => onSelect(achievement)}
      className="group cursor-pointer p-5 rounded-xl bg-surface-container-lowest/40 border border-outline-variant/25 hover:border-accent/60 transition-all duration-300 backdrop-blur-sm shadow-sm flex items-center justify-between gap-4"
    >
      <div className="flex flex-col">
        <span className="font-technical-label text-[10px] text-accent uppercase tracking-widest mb-1 flex items-center gap-1.5">
          <Award className="w-3 h-3" />
          <span>{achievement.category}</span>
        </span>
        <h4 className="font-ui-label text-sm sm:text-base text-primary font-medium group-hover:text-white transition-colors">
          {achievement.title}
        </h4>
      </div>

      <div className="text-right flex-shrink-0">
        <span className="font-technical-label text-xs text-primary font-bold block">
          {achievement.placement}
        </span>
        {achievement.prize && (
          <span className="font-technical-label text-[10px] text-accent block">
            {achievement.prize}
          </span>
        )}
      </div>
    </div>
  );
};
