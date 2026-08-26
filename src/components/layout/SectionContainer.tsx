import React from 'react';

interface SectionContainerProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ id, className = '', children }) => {
  return (
    <section
      id={id}
      className={`relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-10 md:px-12 py-20 md:py-24 ${className}`}
    >
      {children}
    </section>
  );
};
