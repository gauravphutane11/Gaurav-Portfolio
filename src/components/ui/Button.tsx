import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'pill' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  withArrow?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'pill',
  size = 'md',
  href,
  isExternal = false,
  withArrow = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-technical-label uppercase tracking-widest transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none group';

  const sizeStyles = {
    sm: 'px-4 py-2 text-[11px] gap-1.5 rounded-full',
    md: 'px-6 py-3 text-xs gap-2 rounded-full',
    lg: 'px-8 py-4 text-xs gap-2.5 rounded-full',
  };

  const variantStyles = {
    primary: 'bg-primary text-background hover:bg-surface hover:text-primary border border-primary shadow-glow-white hover:shadow-glow',
    secondary: 'bg-accent text-white hover:bg-white hover:text-black border border-accent shadow-glow',
    pill: 'bg-surface-container-high/80 text-secondary hover:text-primary hover:border-accent border border-outline-variant/40 shadow-pill backdrop-blur-md',
    ghost: 'bg-transparent text-secondary hover:text-primary border border-outline-variant/30 hover:border-white/40',
    link: 'bg-transparent text-secondary hover:text-accent p-0 border-b border-transparent hover:border-accent pb-0.5 rounded-none',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const iconElement = withArrow ? (
    isExternal ? (
      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    ) : (
      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
    )
  ) : null;

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={combinedClasses}
      >
        <span>{children}</span>
        {iconElement}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span>{children}</span>
      {iconElement}
    </button>
  );
};
