import React from 'react';

interface DataPillProps {
  icon?: React.ReactNode;
  label: string;
  value?: string;
  className?: string;
}

export const DataPill: React.FC<DataPillProps> = ({
  icon,
  label,
  value,
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high/80 border border-outline-variant/30 text-xs shadow-sm backdrop-blur-md ${className}`}
    >
      {icon && <span className="text-secondary">{icon}</span>}
      <span className="font-technical-label text-[10px] uppercase tracking-widest text-on-surface-variant">
        {label}
      </span>
      {value && (
        <span className="font-ui-label text-primary font-medium border-l border-outline-variant/40 pl-2">
          {value}
        </span>
      )}
    </div>
  );
};
