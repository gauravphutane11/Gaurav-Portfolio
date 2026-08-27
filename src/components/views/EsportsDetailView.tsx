import React from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Swords,
  Shield,
  Trophy,
  CalendarDays,
  Medal,
} from 'lucide-react';

import {
  ESPORTS_DATA,
  getDetailDataFor,
} from '../../data/portfolioData';

import { UniversalDetailData } from '../../types';

interface EsportsDetailViewProps {
  onOpenModal: (data: UniversalDetailData) => void;
  onBack: () => void;
}

export const EsportsDetailView: React.FC<EsportsDetailViewProps> = ({
  onOpenModal,
  onBack,
}) => {
  const handleOpenEsportsModal = () => {
    const detail = getDetailDataFor(
      'esports',
      'esports-profile'
    );

    if (detail) {
      onOpenModal(detail);
    }
  };

  return (
    <main className="relative z-10 w-full">
      <div
        className="
          mx-auto
          w-full
          max-w-[1200px]
          px-5
          pb-24
          pt-32
          sm:px-8
          md:px-10
          lg:px-12
        "
      >

        {/* =====================================================
            BACK
        ====================================================== */}

        <button
          type="button"
          onClick={onBack}
          className="
            group
            mb-12
            inline-flex
            items-center
            gap-2
            font-technical-label
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.15em]
            text-secondary
            transition-colors
            duration-300
            hover:text-accent
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-accent
            focus-visible:ring-offset-4
            focus-visible:ring-offset-black
          "
        >
          <ArrowLeft
            className="
              h-4
              w-4
              transition-transform
              duration-300
              group-hover:-translate-x-1
            "
          />

          <span>
            BACK TO PORTFOLIO
          </span>
        </button>

        {/* =====================================================
            HEADER
        ====================================================== */}

        <header className="mb-20 max-w-4xl">
          <div className="mb-5 flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />

            <span
              className="
                font-technical-label
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-accent
              "
            >
              Competitive & Tactical
            </span>
          </div>

          <h1
            className="
              font-display-lg
              text-4xl
              font-bold
              uppercase
              leading-[0.95]
              tracking-tight
              text-primary
              sm:text-6xl
              md:text-7xl
            "
          >
            ESPORTS
            <br />
            ARCHIVE
          </h1>

          <p
            className="
              mt-7
              max-w-3xl
              font-body-lg
              text-sm
              leading-7
              text-on-surface-variant
              sm:text-base
              sm:leading-8
            "
          >
            A complete record of competitive gaming and esports
            operations experience — covering player history,
            tournament operations, competitive events, placements,
            and documented event outcomes.
          </p>
        </header>

        {/* =====================================================
            01 — PLAYER PROFILE
        ====================================================== */}

        <section className="mb-20">
          <SectionLabel
            number="01"
            icon={<Swords className="h-5 w-5 text-accent" />}
            title="PLAYER PROFILE"
          />

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">

            {/* Main Profile */}

            <div
              className="
                rounded-2xl
                border
                border-outline-variant/30
                bg-surface-container-lowest/50
                p-6
                backdrop-blur-md
                lg:col-span-7
              "
            >
              <span
                className="
                  font-technical-label
                  text-[9px]
                  uppercase
                  tracking-[0.15em]
                  text-secondary
                "
              >
                DISCIPLINE
              </span>

              <h3
                className="
                  mt-2
                  font-headline-md
                  text-2xl
                  font-bold
                  text-primary
                "
              >
                {ESPORTS_DATA.discipline}
              </h3>

              <div className="mt-8">
                <span
                  className="
                    font-technical-label
                    text-[9px]
                    uppercase
                    tracking-[0.15em]
                    text-secondary
                  "
                >
                  ROSTER QUALIFICATIONS
                </span>

                <div className="mt-4 space-y-3">
                  {ESPORTS_DATA.rosterHistory.map(
                    (roster, index) => (
                      <div
                        key={`${roster}-${index}`}
                        className="
                          flex
                          items-start
                          gap-3
                          border-b
                          border-outline-variant/15
                          pb-3
                          last:border-0
                        "
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                        <p
                          className="
                            font-body-md
                            text-sm
                            leading-6
                            text-on-surface-variant
                          "
                        >
                          {roster}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Player Stats */}

            <div
              className="
                rounded-2xl
                border
                border-outline-variant/30
                bg-surface-container-lowest/50
                p-6
                backdrop-blur-md
                lg:col-span-5
              "
            >
              <div className="grid grid-cols-2 gap-5">

                <Stat
                  label="TOP PLACEMENT"
                  value="1ST PLACE"
                  detail="College Rivals @ AISSMS"
                  accent
                />

                <Stat
                  label="PRIZE POOLS"
                  value="₹20,000+"
                  detail="Career winnings"
                />

                <Stat
                  label="PLAYOFF SEED"
                  value="#2 SEED"
                  detail="Playoffs qualified"
                />

                <Stat
                  label="TOURNAMENTS"
                  value="7+"
                  detail="LAN & circuit events"
                />

              </div>

              <button
                type="button"
                onClick={handleOpenEsportsModal}
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  border-b
                  border-transparent
                  pb-1.5
                  font-technical-label
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-primary
                  transition-all
                  duration-300
                  hover:border-accent
                  hover:text-accent
                "
              >
                <span>
                  VIEW FULL PROFILE
                </span>

                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* =====================================================
            02 — OPERATIONS
        ====================================================== */}

        <section className="mb-20">
          <SectionLabel
            number="02"
            icon={<Shield className="h-5 w-5 text-accent" />}
            title="ESPORTS OPERATIONS"
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {ESPORTS_DATA.operations.map(
              (operation, index) => (
                <article
                  key={`${operation.organization}-${index}`}
                  className="
                    rounded-2xl
                    border
                    border-outline-variant/30
                    bg-surface-container-lowest/50
                    p-6
                    backdrop-blur-md
                    transition-all
                    duration-500
                    hover:border-accent/50
                    hover:shadow-[0_0_25px_rgba(241,80,37,0.08)]
                  "
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span
                        className="
                          font-technical-label
                          text-[9px]
                          uppercase
                          tracking-[0.15em]
                          text-secondary
                        "
                      >
                        EVENT / ORGANIZATION
                      </span>

                      <h3
                        className="
                          mt-2
                          font-headline-md
                          text-xl
                          font-bold
                          leading-tight
                          text-primary
                        "
                      >
                        {operation.organization}
                      </h3>
                    </div>

                    <span
                      className="
                        shrink-0
                        rounded-full
                        border
                        border-accent/20
                        bg-accent/10
                        px-3
                        py-1
                        font-technical-label
                        text-[8px]
                        uppercase
                        tracking-[0.12em]
                        text-accent
                      "
                    >
                      {operation.role}
                    </span>
                  </div>

                  <div className="mt-6 border-t border-outline-variant/20 pt-5">
                    <span
                      className="
                        font-technical-label
                        text-[9px]
                        uppercase
                        tracking-[0.15em]
                        text-secondary
                      "
                    >
                      RESPONSIBILITIES / DESCRIPTION
                    </span>

                    <p
                      className="
                        mt-3
                        font-body-md
                        text-sm
                        leading-7
                        text-on-surface-variant
                      "
                    >
                      {operation.description}
                    </p>
                  </div>
                </article>
              )
            )}
          </div>
        </section>

        {/* =====================================================
            03 — COMPLETE COMPETITIVE ARCHIVE
        ====================================================== */}

        <section>
          <SectionLabel
            number="03"
            icon={<Trophy className="h-5 w-5 text-accent" />}
            title="COMPETITIVE ARCHIVE"
          />

          <div className="space-y-5">
            {ESPORTS_DATA.topTournaments.map(
              (event, index) => (
                <article
                  key={`${event.event}-${index}`}
                  className="
                    group
                    rounded-2xl
                    border
                    border-outline-variant/30
                    bg-surface-container-lowest/50
                    p-6
                    backdrop-blur-md
                    transition-all
                    duration-500
                    hover:border-accent/50
                    hover:shadow-[0_0_30px_rgba(241,80,37,0.08)]
                    sm:p-7
                  "
                >
                  {/* Event Header */}

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                    <div className="flex gap-4">
                      <span
                        className="
                          pt-1
                          font-technical-label
                          text-[10px]
                          font-semibold
                          tracking-[0.15em]
                          text-accent
                        "
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <div>
                        <h3
                          className="
                            font-headline-md
                            text-xl
                            font-bold
                            leading-tight
                            text-primary
                            transition-colors
                            duration-300
                            group-hover:text-accent
                            sm:text-2xl
                          "
                        >
                          {event.event}
                        </h3>

                        <div className="mt-2 flex flex-wrap items-center gap-3">
                          <span
                            className="
                              inline-flex
                              items-center
                              gap-1.5
                              font-technical-label
                              text-[9px]
                              uppercase
                              tracking-[0.13em]
                              text-secondary
                            "
                          >
                            <CalendarDays className="h-3 w-3" />
                            {event.year}
                          </span>

                          <span className="h-1 w-1 rounded-full bg-outline-variant" />

                          <span
                            className="
                              inline-flex
                              items-center
                              gap-1.5
                              font-technical-label
                              text-[9px]
                              uppercase
                              tracking-[0.13em]
                              text-accent
                            "
                          >
                            <Medal className="h-3 w-3" />
                            {event.placement}
                          </span>
                        </div>
                      </div>
                    </div>

                    {event.prize && (
                      <div
                        className="
                          shrink-0
                          rounded-full
                          border
                          border-accent/20
                          bg-accent/10
                          px-4
                          py-2
                          font-technical-label
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.12em]
                          text-accent
                        "
                      >
                        {event.prize}
                      </div>
                    )}
                  </div>

                  {/* Divider */}

                  <div className="my-6 h-px bg-outline-variant/20" />

                  {/* Detailed Event Description */}

                  <div className="max-w-4xl">
                    <span
                      className="
                        font-technical-label
                        text-[9px]
                        uppercase
                        tracking-[0.15em]
                        text-secondary
                      "
                    >
                      EVENT DETAILS
                    </span>

                    {event.details ? (
                      <p
                        className="
                          mt-3
                          whitespace-pre-line
                          font-body-lg
                          text-sm
                          leading-7
                          text-on-surface-variant
                          sm:text-base
                          sm:leading-8
                        "
                      >
                        {event.details}
                      </p>
                    ) : (
                      <p
                        className="
                          mt-3
                          font-body-md
                          text-sm
                          leading-7
                          text-on-surface-variant/60
                        "
                      >
                        Event record available in the
                        competitive archive.
                      </p>
                    )}
                  </div>

                  {/* Event Footer */}

                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      justify-between
                      border-t
                      border-outline-variant/15
                      pt-5
                    "
                  >
                    <span
                      className="
                        font-technical-label
                        text-[9px]
                        uppercase
                        tracking-[0.14em]
                        text-secondary
                      "
                    >
                      COMPETITIVE RECORD
                    </span>

                    <button
                      type="button"
                      onClick={handleOpenEsportsModal}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        font-technical-label
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                        text-primary
                        transition-colors
                        duration-300
                        hover:text-accent
                      "
                    >
                      <span>
                        VIEW MEDIA
                      </span>

                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </article>
              )
            )}
          </div>
        </section>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div className="mt-16 flex justify-center">
          <button
            type="button"
            onClick={handleOpenEsportsModal}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-outline-variant/40
              bg-surface-container-low
              px-6
              py-3
              font-technical-label
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-primary
              shadow-pill
              transition-all
              duration-300
              hover:border-accent
              hover:text-accent
            "
          >
            <span>
              OPEN ESPORTS MEDIA ARCHIVE
            </span>

            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </main>
  );
};

/* ============================================================
   SECTION LABEL
============================================================ */

interface SectionLabelProps {
  number: string;
  icon: React.ReactNode;
  title: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({
  number,
  icon,
  title,
}) => {
  return (
    <div className="mb-8 flex items-center gap-3 border-b border-outline-variant/20 pb-5">
      <span
        className="
          font-technical-label
          text-[10px]
          font-semibold
          tracking-[0.15em]
          text-accent
        "
      >
        {number}
      </span>

      <span className="h-px w-7 bg-outline-variant/50" />

      {icon}

      <h2
        className="
          font-headline-md
          text-xl
          font-bold
          uppercase
          tracking-tight
          text-primary
          sm:text-2xl
        "
      >
        {title}
      </h2>
    </div>
  );
};

/* ============================================================
   STAT
============================================================ */

interface StatProps {
  label: string;
  value: string;
  detail: string;
  accent?: boolean;
}

const Stat: React.FC<StatProps> = ({
  label,
  value,
  detail,
  accent = false,
}) => {
  return (
    <div>
      <span
        className="
          font-technical-label
          text-[8px]
          uppercase
          tracking-[0.14em]
          text-secondary
        "
      >
        {label}
      </span>

      <p
        className={`
          mt-1
          font-headline-md
          text-lg
          font-bold
          ${accent ? 'text-accent' : 'text-primary'}
        `}
      >
        {value}
      </p>

      <p
        className="
          mt-0.5
          font-body-md
          text-[10px]
          leading-4
          text-on-surface-variant
        "
      >
        {detail}
      </p>
    </div>
  );
};

export default EsportsDetailView;