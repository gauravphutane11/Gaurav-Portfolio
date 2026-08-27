import React from 'react';
import { SectionContainer } from '../layout/SectionContainer';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { ESPORTS_DATA, getDetailDataFor } from '../../data/portfolioData';
import { UniversalDetailData } from '../../types';
import { Swords, Shield, Trophy, ArrowUpRight } from 'lucide-react';
import { ViewName } from '../../App';

interface EsportsSectionProps {
  onOpenModal: (data: UniversalDetailData) => void;
  onNavigate: (view: ViewName) => void;
}

export const EsportsSection: React.FC<EsportsSectionProps> = ({
  onOpenModal,
  onNavigate,
}) => {
  const handleOpenEsportsDetail = () => {
    const detail = getDetailDataFor(
      'esports',
      'esports-profile'
    );

    if (detail) {
      onOpenModal(detail);
    }
  };

  const featuredRoster = ESPORTS_DATA.rosterHistory.slice(0, 2);
  const featuredOperations = ESPORTS_DATA.operations.slice(0, 4);
  const featuredTournaments = ESPORTS_DATA.topTournaments.slice(0, 3);

  return (
    <SectionContainer id="esports">
      {/* =====================================================
          SECTION HEADER
      ====================================================== */}

      <SectionHeading
        category="Competitive & Tactical"
        title="ESPORTS_"
        subtitle="Competitive gaming and esports operations — combining strategic play, tournament execution, and high-pressure decision making."
      />

      {/* =====================================================
          BENTO OVERVIEW
      ====================================================== */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-12">

        {/* =================================================
            01 — PLAYER
        ================================================= */}

        <button
          type="button"
          onClick={handleOpenEsportsDetail}
          className="
            group
            w-full
            text-left
            md:col-span-4
            rounded-2xl
            border
            border-outline-variant/30
            bg-surface-container-lowest/50
            p-6
            backdrop-blur-md
            shadow-pill
            transition-all
            duration-500
            hover:border-accent/60
            hover:shadow-[0_0_25px_rgba(241,80,37,0.10)]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-accent
            focus-visible:ring-offset-4
            focus-visible:ring-offset-black
          "
        >
          <div className="flex h-full flex-col">

            {/* Header */}

            <div className="flex items-center gap-3">
              <span
                className="
                  font-technical-label
                  text-[10px]
                  font-semibold
                  tracking-[0.15em]
                  text-accent
                "
              >
                01
              </span>

              <span className="h-px w-6 bg-outline-variant/50" />

              <Swords className="h-4 w-4 text-accent" />

              <h3
                className="
                  font-headline-md
                  text-xl
                  font-bold
                  uppercase
                  tracking-tight
                  text-primary
                  transition-colors
                  duration-300
                  group-hover:text-accent
                "
              >
                PLAYER
              </h3>
            </div>

            {/* Discipline */}

            <div className="mt-6">
              <span
                className="
                  font-technical-label
                  text-[9px]
                  uppercase
                  tracking-[0.14em]
                  text-on-surface-variant
                "
              >
                DISCIPLINE
              </span>

              <p
                className="
                  mt-1
                  font-ui-label
                  text-sm
                  font-semibold
                  text-primary
                "
              >
                {ESPORTS_DATA.discipline}
              </p>
            </div>

            {/* Selected Records */}

            <div className="mt-5 space-y-2.5">
              {featuredRoster.map((roster, idx) => (
                <div
                  key={`${roster}-${idx}`}
                  className="flex items-start gap-2"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                  <span
                    className="
                      font-body-md
                      text-xs
                      leading-5
                      text-on-surface-variant
                    "
                  >
                    {roster}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}

            <div
              className="
                mt-auto
                flex
                items-center
                justify-between
                border-t
                border-outline-variant/20
                pt-5
                mt-7
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
                COMPETITIVE PROFILE
              </span>

              <ArrowUpRight
                className="
                  h-4
                  w-4
                  text-secondary
                  transition-all
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:text-accent
                "
              />
            </div>
          </div>
        </button>

        {/* =================================================
            02 — OPERATIONS
        ================================================= */}

        <button
          type="button"
          onClick={handleOpenEsportsDetail}
          className="
            group
            w-full
            text-left
            md:col-span-8
            rounded-2xl
            border
            border-outline-variant/30
            bg-surface-container-lowest/50
            p-6
            backdrop-blur-md
            shadow-pill
            transition-all
            duration-500
            hover:border-accent/60
            hover:shadow-[0_0_25px_rgba(241,80,37,0.10)]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-accent
            focus-visible:ring-offset-4
            focus-visible:ring-offset-black
          "
        >
          <div className="flex h-full flex-col">

            {/* Header */}

            <div className="flex items-center gap-3">
              <span
                className="
                  font-technical-label
                  text-[10px]
                  font-semibold
                  tracking-[0.15em]
                  text-accent
                "
              >
                02
              </span>

              <span className="h-px w-6 bg-outline-variant/50" />

              <Shield className="h-4 w-4 text-accent" />

              <h3
                className="
                  font-headline-md
                  text-xl
                  font-bold
                  uppercase
                  tracking-tight
                  text-primary
                  transition-colors
                  duration-300
                  group-hover:text-accent
                "
              >
                OPERATIONS
              </h3>
            </div>

            {/* Operations Grid */}

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {featuredOperations.map((operation, idx) => (
                <div
                  key={`${operation.organization}-${idx}`}
                  className="
                    border-l
                    border-outline-variant/50
                    pl-4
                    transition-colors
                    duration-300
                    hover:border-accent
                  "
                >
                  <p
                    className="
                      font-ui-label
                      text-sm
                      font-bold
                      text-primary
                    "
                  >
                    {operation.organization}
                  </p>

                  <p
                    className="
                      mt-1
                      font-technical-label
                      text-[9px]
                      uppercase
                      tracking-[0.13em]
                      text-accent
                    "
                  >
                    {operation.role}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer */}

            <div
              className="
                mt-auto
                flex
                items-center
                justify-between
                border-t
                border-outline-variant/20
                pt-5
                mt-7
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
                EVENT OPERATIONS
              </span>

              <ArrowUpRight
                className="
                  h-4
                  w-4
                  text-secondary
                  transition-all
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:text-accent
                "
              />
            </div>
          </div>
        </button>

        {/* =================================================
            03 — COMPETITIVE RECORD
        ================================================= */}

        <div
          className="
            md:col-span-12
            rounded-2xl
            border
            border-outline-variant/30
            bg-surface-container-lowest/50
            p-6
            backdrop-blur-md
            shadow-pill
          "
        >
          {/* Header */}

          <div className="flex items-center gap-3">
            <span
              className="
                font-technical-label
                text-[10px]
                font-semibold
                tracking-[0.15em]
                text-accent
              "
            >
              03
            </span>

            <span className="h-px w-6 bg-outline-variant/50" />

            <Trophy className="h-4 w-4 text-accent" />

            <h3
              className="
                font-headline-md
                text-xl
                font-bold
                uppercase
                tracking-tight
                text-primary
              "
            >
              COMPETITIVE RECORD
            </h3>
          </div>

          {/* Tournament Highlights */}

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTournaments.map((item, idx) => (
              <button
                key={`${item.event}-${idx}`}
                type="button"
                onClick={handleOpenEsportsDetail}
                className="
                  group/item
                  rounded-xl
                  border
                  border-outline-variant/30
                  bg-surface-container-high/30
                  p-4
                  text-left
                  transition-all
                  duration-300
                  hover:border-accent/50
                  hover:bg-surface-container-high/50
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-accent
                "
              >
                <div className="flex items-start justify-between gap-3">
                  <h4
                    className="
                      font-ui-label
                      text-sm
                      font-bold
                      leading-5
                      text-primary
                      transition-colors
                      duration-300
                      group-hover/item:text-accent
                    "
                  >
                    {item.event}
                  </h4>

                  <span
                    className="
                      shrink-0
                      rounded
                      bg-white/10
                      px-2
                      py-0.5
                      font-technical-label
                      text-[9px]
                      text-secondary
                    "
                  >
                    {item.year}
                  </span>
                </div>

                <p
                  className="
                    mt-3
                    font-technical-label
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.1em]
                    text-primary
                  "
                >
                  {item.placement}
                </p>

                {item.prize && (
                  <p
                    className="
                      mt-1
                      font-technical-label
                      text-[10px]
                      text-accent
                    "
                  >
                    {item.prize}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          ARCHIVE CTA
      ====================================================== */}

      <div className="flex justify-center pt-10">
        <Button
          variant="secondary"
          size="md"
          onClick={() => onNavigate('esports-detail')}
          withArrow
        >
          EXPLORE ESPORTS ARCHIVE
        </Button>
      </div>
    </SectionContainer>
  );
};

export default EsportsSection;