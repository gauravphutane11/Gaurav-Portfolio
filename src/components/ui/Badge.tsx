import React from 'react';

interface BadgeProps {
  label: string;
  variant?: 'default' | 'accent' | 'outline' | 'pulse';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'default',
  className = '',
}) => {
  const base = 'inline-flex items-center gap-1.5 font-technical-label text-[11px] uppercase tracking-wider rounded-full transition-colors';

  const variants = {
    default: 'px-3 py-1 bg-white/10 text-primary border border-white/15',
    accent: 'px-3 py-1 bg-accent/15 text-accent border border-accent/30 font-semibold',
    outline: 'px-3 py-1 bg-surface-container-high/60 text-secondary border border-outline-variant/40',
    pulse: 'px-3 py-1 bg-surface-container-high/80 text-primary border border-outline-variant/40',
  };

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {variant === 'pulse' && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />}
      {label}
    </span>
  );
};
