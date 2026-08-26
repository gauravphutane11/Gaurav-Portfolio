import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ViewName } from '../../App';

interface NavbarProps {
  resumeUrl?: string;
  currentView: ViewName;
  onNavigateHome: (sectionId?: string) => void;
}

const NAV_LINKS = [
  { label: 'HOME', href: '#hero', sectionId: 'hero' },
  { label: 'WORK', href: '#work', sectionId: 'work' },
  { label: 'EXPERIENCE', href: '#experience', sectionId: 'experience' },
  { label: 'ESPORTS', href: '#esports', sectionId: 'esports' },
  { label: 'ACHIEVEMENTS', href: '#achievements', sectionId: 'achievements' },
  { label: 'CERTIFICATIONS', href: '#certifications', sectionId: 'certifications' },
  { label: 'ABOUT', href: '#about', sectionId: 'about' },
  { label: 'CONTACT', href: '#contact', sectionId: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  resumeUrl = '#',
  currentView,
  onNavigateHome,
}) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (currentView !== 'home') return;

    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) => link.sectionId);
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (currentView !== 'home') {
      // Navigate home first, then the section scroll happens in navigateHome()
      onNavigateHome(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navOffset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementPosition - navOffset, behavior: 'smooth' });
      }
    }
  };

  // Derive active indicator: when in a detail view, highlight the corresponding section
  const getActiveSectionId = () => {
    if (currentView === 'home') return activeSection;
    const viewToSection: Record<string, string> = {
      'work-detail': 'work',
      'experience-detail': 'experience',
      'esports-detail': 'esports',
      'achievements-detail': 'achievements',
      'certifications-detail': 'certifications',
      'about-detail': 'about',
    };
    return viewToSection[currentView] || activeSection;
  };

  const activeSectionId = getActiveSectionId();

  return (
    <>
      <nav className="fixed top-6 md:top-8 left-1/2 -translate-x-1/2 w-full max-w-fit z-50 px-4">
        <div className="flex items-center gap-4 md:gap-6">
          {/* Left Logo Pill */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-background hover:scale-105 transition-transform duration-200 shadow-pill"
            aria-label="Home"
          >
            <span className="font-display-lg text-[14px] font-bold tracking-tighter">GP</span>
          </a>

          {/* Center Glass Nav Pill — desktop */}
          <div className="bg-surface-container/80 backdrop-blur-md border border-outline-variant/30 rounded-full px-6 py-3 shadow-pill hidden md:flex items-center gap-6 md:gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = activeSectionId === link.sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                  className={`font-technical-label text-[11px] uppercase tracking-widest transition-all duration-300 relative pb-1 flex flex-col items-center group ${
                    isActive
                      ? 'text-primary font-bold border-b border-primary'
                      : 'text-secondary hover:text-primary hover:scale-105 active:scale-95'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <div className="flex gap-[2px] absolute -bottom-2">
                      <div className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      <div className="w-1 h-1 rounded-full bg-primary" />
                    </div>
                  )}
                </a>
              );
            })}
          </div>

          {/* Right CTA Pill */}
          <a
            href={resumeUrl}
            target={resumeUrl !== '#' ? '_blank' : undefined}
            rel="noreferrer"
            className="hidden sm:inline-flex flex-shrink-0 bg-surface-container-high border border-outline-variant/50 hover:border-accent hover:text-accent rounded-full px-6 py-3 font-technical-label text-[11px] uppercase tracking-widest text-secondary hover:text-primary transition-all duration-300 shadow-pill active:scale-95"
          >
            VIEW RESUME
          </a>

          {/* Mobile Nav Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 bg-surface-container-high border border-outline-variant/40 rounded-full text-secondary hover:text-white shadow-pill"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-6">
          <div className="flex flex-col items-center gap-5 w-full max-w-xs">
            {NAV_LINKS.map((link) => {
              const isActive = activeSectionId === link.sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                  className={`font-technical-label text-sm uppercase tracking-widest py-2.5 text-center w-full rounded-full transition-colors ${
                    isActive
                      ? 'text-accent bg-white/10 border border-accent/40 font-bold'
                      : 'text-secondary hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href={resumeUrl}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center w-full py-3.5 bg-accent text-white font-technical-label text-xs uppercase tracking-widest rounded-full shadow-glow font-semibold"
            >
              VIEW RESUME
            </a>
          </div>
        </div>
      )}
    </>
  );
};
