import React, { useCallback, useEffect, useState } from 'react';

import { CinematicBackground } from './components/layout/CinematicBackground';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { HeroSection } from './components/sections/HeroSection';
import { WorkSection } from './components/sections/WorkSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { EsportsSection } from './components/sections/EsportsSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';

import { UniversalDetailModal } from './components/modal/UniversalDetailModal';

import { WorkDetailView } from './components/views/WorkDetailView';
import { ExperienceDetailView } from './components/views/ExperienceDetailView';
import { EsportsDetailView } from './components/views/EsportsDetailView';
import { AchievementsDetailView } from './components/views/AchievementsDetailView';
import { CertificationsDetailView } from './components/views/CertificationsDetailView';
import { AboutDetailView } from './components/views/AboutDetailView';

import { UniversalDetailData } from './types';
import { HERO_DATA } from './data/portfolioData';

/* =========================================================
   VIEW TYPES
========================================================= */

export type ViewName =
  | 'home'
  | 'work-detail'
  | 'experience-detail'
  | 'esports-detail'
  | 'achievements-detail'
  | 'certifications-detail'
  | 'about-detail';

/* =========================================================
   APP
========================================================= */

const App: React.FC = () => {
  /* -------------------------------------------------------
     CURRENT PAGE
  ------------------------------------------------------- */

  const [currentView, setCurrentView] =
    useState<ViewName>('home');

  /* -------------------------------------------------------
     UNIVERSAL MODAL
  ------------------------------------------------------- */

  const [modalData, setModalData] =
    useState<UniversalDetailData | null>(null);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const navigateTo = useCallback(
    (view: ViewName) => {
      setCurrentView(view);

      /*
       * Always start a detail page from the top.
       * requestAnimationFrame makes sure React has
       * rendered the new view before scrolling.
       */
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto',
        });
      });
    },
    []
  );

  /* =======================================================
     NAVIGATE BACK TO HOME
  ======================================================= */

  const navigateHome = useCallback(
    (sectionId?: string) => {
      setCurrentView('home');

      /*
       * Wait for the home sections to render before
       * attempting to locate the requested section.
       */
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!sectionId) {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });

            return;
          }

          const element =
            document.getElementById(sectionId);

          if (!element) {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });

            return;
          }

          const navbarOffset = 96;

          const targetPosition =
            element.getBoundingClientRect().top +
            window.scrollY -
            navbarOffset;

          window.scrollTo({
            top: Math.max(0, targetPosition),
            left: 0,
            behavior: 'smooth',
          });
        });
      });
    },
    []
  );

  /* =======================================================
     OPEN DETAIL MODAL
  ======================================================= */

  const handleOpenModal = useCallback(
    (data: UniversalDetailData) => {
      setModalData(data);
      setIsModalOpen(true);
    },
    []
  );

  /* =======================================================
     CLOSE DETAIL MODAL
  ======================================================= */

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);

    /*
     * Allow closing animation to finish before
     * removing the content.
     */
    window.setTimeout(() => {
      setModalData(null);
    }, 300);
  }, []);

  /* =======================================================
     ESCAPE KEY
  ======================================================= */

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener(
      'keydown',
      handleEscape
    );

    return () => {
      window.removeEventListener(
        'keydown',
        handleEscape
      );
    };
  }, [isModalOpen, handleCloseModal]);

  /* =======================================================
     BODY SCROLL LOCK
  ======================================================= */

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [isModalOpen]);

  /* =======================================================
     DETAIL VIEW RENDERER
  ======================================================= */

  const renderDetailView = () => {
    switch (currentView) {
      case 'work-detail':
        return (
          <WorkDetailView
            onOpenModal={handleOpenModal}
            onBack={() => navigateHome('work')}
          />
        );

      case 'experience-detail':
        return (
          <ExperienceDetailView
            onOpenModal={handleOpenModal}
            onBack={() => navigateHome('experience')}
          />
        );

      case 'esports-detail':
        return (
          <EsportsDetailView
            onOpenModal={handleOpenModal}
            onBack={() => navigateHome('esports')}
          />
        );

      case 'achievements-detail':
        return (
          <AchievementsDetailView
            onOpenModal={handleOpenModal}
            onBack={() =>
              navigateHome('achievements')
            }
          />
        );

      case 'certifications-detail':
        return (
          <CertificationsDetailView
            onOpenModal={handleOpenModal}
            onBack={() =>
              navigateHome('certifications')
            }
          />
        );

      case 'about-detail':
        return (
          <AboutDetailView
            onOpenModal={handleOpenModal}
            onBack={() => navigateHome('about')}
          />
        );

      default:
        return null;
    }
  };

  /* =======================================================
     HOME PAGE
  ======================================================= */

  const renderHome = () => {
    return (
      <main
        id="home"
        className="relative z-10 flex min-w-0 flex-col"
      >
        {/* HERO */}
        <HeroSection />

        {/* SELECTED WORK */}
        <WorkSection
          onOpenModal={handleOpenModal}
          onNavigate={navigateTo}
        />

        {/* EXPERIENCE */}
        <ExperienceSection
          onOpenModal={handleOpenModal}
          onNavigate={navigateTo}
        />

        {/* ESPORTS */}
        <EsportsSection
          onOpenModal={handleOpenModal}
          onNavigate={navigateTo}
        />

        {/* ACHIEVEMENTS */}
        <AchievementsSection
          onOpenModal={handleOpenModal}
          onNavigate={navigateTo}
        />

        {/* CERTIFICATIONS */}
        <CertificationsSection
          onOpenModal={handleOpenModal}
          onNavigate={navigateTo}
        />

        {/* ABOUT */}
        <AboutSection
          onOpenModal={handleOpenModal}
          onNavigate={navigateTo}
        />

        {/* CONTACT */}
        <ContactSection />
      </main>
    );
  };

  /* =======================================================
     APP
  ======================================================= */

  return (
    <div
      className="
        relative
        min-h-screen
        min-w-0
        overflow-x-hidden
        bg-void
        font-body-md
        text-primary
        selection:bg-accent
        selection:text-white
      "
    >
      {/* =================================================
          GLOBAL CINEMATIC BACKGROUND
      ================================================= */}

      <CinematicBackground opacity={0.55} />

      {/* =================================================
          GLOBAL NAVBAR
      ================================================= */}

      <Navbar
        resumeUrl={HERO_DATA.resumeUrl}
        currentView={currentView}
        onNavigateHome={navigateHome}
      />

      {/* =================================================
          PAGE CONTENT
      ================================================= */}

      {currentView === 'home'
        ? renderHome()
        : renderDetailView()}

      {/* =================================================
          FOOTER
          Only shown on the main portfolio page.
      ================================================= */}

      {currentView === 'home' && <Footer />}

      {/* =================================================
          UNIVERSAL DETAIL MODAL
      ================================================= */}

      <UniversalDetailModal
        data={modalData}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;