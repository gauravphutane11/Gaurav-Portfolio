import React from 'react';
import { CONTACT_DATA } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-outline-variant/20 bg-surface-container-lowest/60 backdrop-blur-md relative z-10 py-12 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-display-lg text-lg font-bold tracking-tight text-primary">
            GAURAV PHUTANE
          </span>
          <span className="font-technical-label text-[11px] text-on-surface-variant tracking-wider mt-1 opacity-75">
            ENGINEERED FOR HIGH-FIDELITY PERFORMANCE
          </span>
        </div>

        <div className="font-technical-label text-[11px] text-on-surface-variant text-center opacity-60">
          © {new Date().getFullYear()} GAURAV PHUTANE · ALL RIGHTS RESERVED
        </div>

        <div className="flex items-center gap-6 font-technical-label text-[11px] tracking-widest uppercase">
          {CONTACT_DATA.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors duration-200"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
