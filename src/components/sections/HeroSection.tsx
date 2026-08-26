import React from 'react';
import { HERO_DATA } from '../../data/portfolioData';
import { Code2, Cpu, Gamepad2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const workElem = document.getElementById('work');
    if (workElem) {
      const navOffset = 70;
      const elementPosition = workElem.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative z-10 min-h-[85vh] flex flex-col items-center justify-center text-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-32 pb-20"
    >
      {/* Identity Pill Row */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex -space-x-3">
          <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center shadow-pill">
            <Code2 className="w-5 h-5 text-primary" />
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center shadow-pill">
            <Cpu className="w-5 h-5 text-accent" />
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center shadow-pill">
            <Gamepad2 className="w-5 h-5 text-primary" />
          </div>
        </div>

        <div className="bg-surface-container-low/90 border border-outline-variant/30 rounded-full px-4 py-2 flex items-center shadow-pill backdrop-blur-md">
          <span className="font-technical-label text-[11px] sm:text-xs text-secondary tracking-widest uppercase">
            {HERO_DATA.tagline}
          </span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="text-center mb-8 max-w-5xl">
        <h1 className="font-dot-matrix text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white uppercase tracking-tight leading-none">
          <span className="block text-white text-glow-white">{HERO_DATA.headlineLine1}</span>
          <span className="block text-white text-glow-white mt-2">{HERO_DATA.headlineLine2}</span>
        </h1>
      </div>

      {/* Subhead */}
      <p className="font-body-lg text-base sm:text-lg md:text-xl text-secondary text-center max-w-2xl mx-auto mb-12 leading-relaxed">
        {HERO_DATA.subhead}
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
        <a
          href="#work"
          onClick={handleScrollToWork}
          className="bg-primary text-background border border-primary rounded-full px-8 py-4 font-technical-label text-xs sm:text-sm uppercase tracking-widest hover:bg-surface hover:text-primary transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] cursor-pointer font-bold"
        >
          EXPLORE MY WORK
        </a>
        <a
          href={HERO_DATA.resumeUrl}
          className="font-technical-label text-xs sm:text-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1"
        >
          VIEW RESUME
        </a>
      </div>

      {/* Capability Strip Footer */}
      <div className="flex flex-wrap justify-center items-center gap-3 pt-6 border-t border-outline-variant/20 max-w-2xl mx-auto w-full">
        {HERO_DATA.skills.map((skill) => (
          <span
            key={skill}
            className="bg-surface-container-high/60 border border-outline-variant/40 rounded-full px-4 py-2 font-technical-label text-[11px] text-secondary tracking-widest uppercase backdrop-blur-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};
