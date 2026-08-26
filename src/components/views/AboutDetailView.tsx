import React from 'react';
import {
  ArrowLeft,
  Mail,
  FileText,
  GraduationCap,
  Cpu,
  Shield,
  Gamepad2,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

import {
  ABOUT_DATA,
  CONTACT_DATA,
  HERO_DATA,
  getDetailDataFor,
} from '../../data/portfolioData';

import { UniversalDetailData } from '../../types';

/* =========================================================
   TYPES
========================================================= */

interface AboutDetailViewProps {
  onOpenModal: (data: UniversalDetailData) => void;
  onBack: () => void;
}

/* =========================================================
   CORE DISCIPLINES
========================================================= */

const DISCIPLINE_DETAIL = [
  {
    icon: Cpu,
    number: '01',
    title: 'Full-Stack Engineering',
    description:
      'Building end-to-end web applications with modern frontend architectures, backend APIs, databases, authentication, and deployment workflows. Focused on clean architecture, maintainability, performance, and practical product development.',
  },
  {
    icon: Sparkles,
    number: '02',
    title: 'AI & Intelligent Systems',
    description:
      'Developing practical AI-powered applications using Python and machine-learning workflows. Interested in applying intelligent systems to real-world problems such as cybersecurity analysis, automation, and data-driven applications.',
  },
  {
    icon: Shield,
    number: '03',
    title: 'Cybersecurity',
    description:
      'Building cybersecurity-focused platforms around threat awareness, security simulations, analytics, and intelligent threat analysis. The goal is to make complex security concepts more understandable and actionable.',
  },
  {
    icon: Gamepad2,
    number: '04',
    title: 'Esports',
    description:
      'Competitive BGMI player and esports operations contributor with experience across collegiate tournaments, LAN events, tournament administration, competitive environments, and on-ground event execution.',
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export const AboutDetailView: React.FC<AboutDetailViewProps> = ({
  onOpenModal,
  onBack,
}) => {
  /* -------------------------------------------------------
     OPEN FULL ABOUT MODAL
  ------------------------------------------------------- */

  const handleOpenModal = () => {
    const detail = getDetailDataFor(
      'about',
      'about-detail'
    );

    if (detail) {
      onOpenModal(detail);
    }
  };

  return (
    <main className="relative z-10 w-full min-w-0">
      <div
        className="
          mx-auto
          w-full
          max-w-[1200px]
          px-6
          sm:px-10
          md:px-12
          pt-32
          pb-24
        "
      >
        {/* =================================================
            BACK NAVIGATION
        ================================================= */}

        <button
          type="button"
          onClick={onBack}
          className="
            group
            mb-14
            inline-flex
            items-center
            gap-2
            font-technical-label
            text-xs
            uppercase
            tracking-widest
            text-secondary
            transition-colors
            duration-200
            hover:text-accent
          "
          aria-label="Back to portfolio"
        >
          <ArrowLeft
            className="
              h-4
              w-4
              transition-transform
              duration-200
              group-hover:-translate-x-1
            "
          />

          <span>BACK TO PORTFOLIO</span>
        </button>

        {/* =================================================
            PROFILE HERO
        ================================================= */}

        <section
          className="
            mb-24
            grid
            grid-cols-1
            items-center
            gap-12
            lg:grid-cols-12
            lg:gap-16
          "
        >
          {/* -------------------------------------------------
              PORTRAIT
          ------------------------------------------------- */}

          <div className="lg:col-span-5">
            <button
              type="button"
              onClick={handleOpenModal}
              className="
                group
                relative
                block
                aspect-[3/4]
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-outline-variant/40
                bg-surface-container-low
                text-left
                shadow-pill
              "
              aria-label="Open detailed profile"
            >
              <img
                src={ABOUT_DATA.portraitImage}
                alt="Portrait of Gaurav Phutane"
                loading="eager"
                className="
                  h-full
                  w-full
                  object-cover
                  grayscale
                  contrast-105
                  opacity-85
                  transition-all
                  duration-700
                  group-hover:scale-105
                  group-hover:grayscale-0
                  group-hover:opacity-100
                "
              />

              {/* Image gradient */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/85
                  via-black/10
                  to-transparent
                "
              />

              {/* Image metadata */}
              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  flex
                  items-end
                  justify-between
                  gap-4
                "
              >
                <span
                  className="
                    rounded-full
                    border
                    border-white/20
                    bg-black/60
                    px-3
                    py-1.5
                    font-technical-label
                    text-[10px]
                    uppercase
                    tracking-widest
                    text-white
                    backdrop-blur-sm
                  "
                >
                  FULL-STACK + AI + ESPORTS
                </span>

                <span
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-black/60
                    text-white
                    backdrop-blur-sm
                  "
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </div>
            </button>

            <p
              className="
                mt-3
                font-technical-label
                text-[9px]
                uppercase
                tracking-widest
                text-on-surface-variant/50
              "
            >
              CLICK IMAGE TO EXPLORE PROFILE
            </p>
          </div>

          {/* -------------------------------------------------
              PROFILE INTRO
          ------------------------------------------------- */}

          <div className="flex flex-col gap-6 lg:col-span-7">
            {/* Label */}

            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />

              <span
                className="
                  font-technical-label
                  text-xs
                  font-semibold
                  uppercase
                  tracking-widest
                  text-accent
                "
              >
                ENGINEER PROFILE
              </span>
            </div>

            {/* Main heading */}

            <h1
              className="
                font-display-lg
                text-4xl
                font-bold
                uppercase
                leading-[0.95]
                tracking-tight
                text-primary
                sm:text-5xl
                md:text-6xl
              "
            >
              I BUILD.
              <br />
              I EXPERIMENT.
              <br />
              I COMPETE.
            </h1>

            {/* Short abstract */}

            <p
              className="
                max-w-2xl
                font-body-lg
                text-base
                leading-relaxed
                text-on-surface-variant
                sm:text-lg
              "
            >
              {ABOUT_DATA.summary}
            </p>

            {/* Additional profile information */}

            <div
              className="
                space-y-4
                border-l
                border-accent/40
                pl-5
              "
            >
              <p
                className="
                  font-body-md
                  text-sm
                  leading-relaxed
                  text-on-surface-variant/85
                "
              >
                Currently pursuing B.Tech in Computer Engineering
                at AISSMS IOIT, Pune, with a focus on software
                engineering, intelligent applications,
                cybersecurity, and practical product development.
              </p>

              <p
                className="
                  font-body-md
                  text-sm
                  leading-relaxed
                  text-on-surface-variant/85
                "
              >
                A Diploma in Engineering graduate from Government
                Polytechnic Pune with a 92.93% distinction,
                combining academic foundations with hands-on
                project development and competitive esports
                experience.
              </p>
            </div>

            {/* -------------------------------------------------
                CTA
            ------------------------------------------------- */}

            <div
              className="
                flex
                flex-col
                items-start
                gap-3
                pt-3
                sm:flex-row
              "
            >
              {/* Contact */}

              <a
                href={`mailto:${CONTACT_DATA.email}`}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-primary
                  px-6
                  py-3
                  font-technical-label
                  text-xs
                  font-bold
                  uppercase
                  tracking-widest
                  text-background
                  shadow-pill
                  transition-all
                  duration-300
                  hover:bg-accent
                  hover:text-white
                "
              >
                <Mail className="h-4 w-4" />
                <span>GET IN TOUCH</span>
              </a>

              {/* Resume */}

              <a
                href={HERO_DATA.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-outline-variant/50
                  bg-surface-container-high
                  px-6
                  py-3
                  font-technical-label
                  text-xs
                  uppercase
                  tracking-widest
                  text-secondary
                  shadow-pill
                  transition-all
                  duration-300
                  hover:border-accent
                  hover:text-accent
                "
              >
                <FileText className="h-4 w-4" />
                <span>VIEW RESUME</span>
              </a>
            </div>
          </div>
        </section>

        {/* =================================================
            CORE DISCIPLINES
        ================================================= */}

        <section className="mb-24">
          <div
            className="
              mb-10
              flex
              items-end
              justify-between
              gap-6
              border-b
              border-outline-variant/20
              pb-6
            "
          >
            <div>
              <span
                className="
                  mb-3
                  block
                  font-technical-label
                  text-[10px]
                  uppercase
                  tracking-widest
                  text-accent
                "
              >
                01 / CAPABILITIES
              </span>

              <h2
                className="
                  font-headline-md
                  text-2xl
                  font-bold
                  uppercase
                  tracking-tight
                  text-primary
                  sm:text-3xl
                "
              >
                CORE DISCIPLINES
              </h2>
            </div>

            <span
              className="
                hidden
                font-technical-label
                text-[10px]
                uppercase
                tracking-widest
                text-on-surface-variant/50
                sm:block
              "
            >
              BUILD · LEARN · COMPETE
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {DISCIPLINE_DETAIL.map((discipline) => {
              const Icon = discipline.icon;

              return (
                <article
                  key={discipline.number}
                  className="
                    group
                    rounded-2xl
                    border
                    border-outline-variant/30
                    bg-surface-container-lowest/50
                    p-6
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-accent/50
                  "
                >
                  <div className="mb-5 flex items-start justify-between">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-accent/20
                        bg-accent/10
                      "
                    >
                      <Icon className="h-5 w-5 text-accent" />
                    </div>

                    <span
                      className="
                        font-technical-label
                        text-[10px]
                        tracking-widest
                        text-on-surface-variant/40
                      "
                    >
                      {discipline.number}
                    </span>
                  </div>

                  <h3
                    className="
                      mb-3
                      font-ui-label
                      text-base
                      font-bold
                      text-primary
                    "
                  >
                    {discipline.title}
                  </h3>

                  <p
                    className="
                      font-body-md
                      text-sm
                      leading-relaxed
                      text-on-surface-variant
                    "
                  >
                    {discipline.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* =================================================
            EDUCATION
        ================================================= */}

        <section className="mb-24">
          <div
            className="
              mb-10
              border-b
              border-outline-variant/20
              pb-6
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-accent/20
                  bg-accent/10
                "
              >
                <GraduationCap className="h-5 w-5 text-accent" />
              </div>

              <div>
                <span
                  className="
                    mb-1
                    block
                    font-technical-label
                    text-[10px]
                    uppercase
                    tracking-widest
                    text-accent
                  "
                >
                  02 / EDUCATION
                </span>

                <h2
                  className="
                    font-headline-md
                    text-2xl
                    font-bold
                    uppercase
                    tracking-tight
                    text-primary
                    sm:text-3xl
                  "
                >
                  ACADEMIC FOUNDATION
                </h2>
              </div>
            </div>
          </div>

          <div className="relative ml-2 border-l border-outline-variant/30">
            {ABOUT_DATA.education.map((education, index) => (
              <article
                key={`${education.degree}-${index}`}
                className="
                  relative
                  pb-10
                  pl-8
                  last:pb-0
                "
              >
                {/* Timeline node */}

                <span
                  className="
                    absolute
                    -left-[5px]
                    top-1
                    h-2.5
                    w-2.5
                    rounded-full
                    border
                    border-background
                    bg-accent
                    shadow-[0_0_12px_rgba(241,80,37,0.45)]
                  "
                />

                {/* Score / status */}

                <span
                  className="
                    mb-2
                    block
                    font-technical-label
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-widest
                    text-accent
                  "
                >
                  {education.statusOrScore}
                </span>

                {/* Degree */}

                <h3
                  className="
                    mb-1
                    font-headline-md
                    text-lg
                    font-bold
                    text-primary
                  "
                >
                  {education.degree}
                </h3>

                {/* Institution */}

                <p
                  className="
                    font-body-md
                    text-sm
                    leading-relaxed
                    text-on-surface-variant
                  "
                >
                  {education.institution}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* =================================================
            DEVELOPMENT PHILOSOPHY
        ================================================= */}

        <section className="mb-8">
          <div
            className="
              mb-8
              border-b
              border-outline-variant/20
              pb-6
            "
          >
            <span
              className="
                mb-3
                block
                font-technical-label
                text-[10px]
                uppercase
                tracking-widest
                text-accent
              "
            >
              03 / MINDSET
            </span>

            <h2
              className="
                font-headline-md
                text-2xl
                font-bold
                uppercase
                tracking-tight
                text-primary
                sm:text-3xl
              "
            >
              DEVELOPMENT PHILOSOPHY
            </h2>
          </div>

          <div
            className="
              grid
              max-w-5xl
              grid-cols-1
              gap-8
              md:grid-cols-2
            "
          >
            <div
              className="
                border-l
                border-outline-variant/30
                pl-5
              "
            >
              <span
                className="
                  mb-4
                  block
                  font-technical-label
                  text-[10px]
                  uppercase
                  tracking-widest
                  text-on-surface-variant/50
                "
              >
                ENGINEERING
              </span>

              <p
                className="
                  font-body-lg
                  text-base
                  leading-relaxed
                  text-on-surface-variant
                "
              >
                I approach every project as a system — thinking
                about architecture before UI, data flow before
                features, and reliability before scale. The goal
                is to build software that is useful, maintainable,
                and deliberate rather than simply visually impressive.
              </p>
            </div>

            <div
              className="
                border-l
                border-outline-variant/30
                pl-5
              "
            >
              <span
                className="
                  mb-4
                  block
                  font-technical-label
                  text-[10px]
                  uppercase
                  tracking-widest
                  text-on-surface-variant/50
                "
              >
                COMPETITION
              </span>

              <p
                className="
                  font-body-lg
                  text-base
                  leading-relaxed
                  text-on-surface-variant
                "
              >
                The same mindset applies to competitive gaming:
                reading systems, adapting to pressure, communicating
                with a team, and executing precisely under constraints.
                Engineering and esports share more than people think.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================
            FINAL PROFILE STRIP
        ================================================= */}

        <section
          className="
            mt-20
            flex
            flex-col
            gap-4
            border-t
            border-outline-variant/20
            pt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div>
            <span
              className="
                block
                font-technical-label
                text-[10px]
                uppercase
                tracking-widest
                text-on-surface-variant/50
              "
            >
              PROFILE
            </span>

            <span
              className="
                font-ui-label
                text-sm
                font-semibold
                text-primary
              "
            >
              FULL-STACK · AI · CYBERSECURITY · ESPORTS
            </span>
          </div>

          <button
            type="button"
            onClick={onBack}
            className="
              inline-flex
              items-center
              gap-2
              font-technical-label
              text-xs
              uppercase
              tracking-widest
              text-secondary
              transition-colors
              duration-300
              hover:text-accent
            "
          >
            <ArrowLeft className="h-4 w-4" />
            BACK TO PORTFOLIO
          </button>
        </section>
      </div>
    </main>
  );
};

export default AboutDetailView;