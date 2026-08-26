import React from 'react';
import { HERO_DATA } from '../../data/portfolioData';
import { Code2, Cpu, Gamepad2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const handleScrollToWork = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    const workElem = document.getElementById('work');

    if (!workElem) return;

    const navOffset = 80;

    const elementPosition =
      workElem.getBoundingClientRect().top +
      window.scrollY;

    window.scrollTo({
      top: Math.max(0, elementPosition - navOffset),
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="hero"
      className="
        relative
        z-10
        min-h-[88vh]
        w-full
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-6
        sm:px-8
        md:px-12
        pt-28
        pb-12
      "
    >
      {/* =================================================
          IDENTITY ROW
      ================================================= */}

      <div
        className="
          flex
          items-center
          justify-center
          gap-3
          sm:gap-4
          mb-7
        "
      >
        {/* Icon Cluster */}

        <div className="flex -space-x-2.5">
          <div
            className="
              flex
              h-9
              w-9
              sm:h-10
              sm:w-10
              items-center
              justify-center
              rounded-full
              border
              border-outline-variant/40
              bg-surface-container-high/90
              shadow-pill
              backdrop-blur-md
            "
          >
            <Code2
              className="
                h-4
                w-4
                sm:h-5
                sm:w-5
                text-primary
              "
            />
          </div>

          <div
            className="
              flex
              h-9
              w-9
              sm:h-10
              sm:w-10
              items-center
              justify-center
              rounded-full
              border
              border-outline-variant/40
              bg-surface-container-high/90
              shadow-pill
              backdrop-blur-md
            "
          >
            <Cpu
              className="
                h-4
                w-4
                sm:h-5
                sm:w-5
                text-accent
              "
            />
          </div>

          <div
            className="
              flex
              h-9
              w-9
              sm:h-10
              sm:w-10
              items-center
              justify-center
              rounded-full
              border
              border-outline-variant/40
              bg-surface-container-high/90
              shadow-pill
              backdrop-blur-md
            "
          >
            <Gamepad2
              className="
                h-4
                w-4
                sm:h-5
                sm:w-5
                text-primary
              "
            />
          </div>
        </div>

        {/* Tagline */}

        <div
          className="
            flex
            items-center
            rounded-full
            border
            border-outline-variant/35
            bg-surface-container-low/90
            px-4
            py-2
            shadow-pill
            backdrop-blur-md
          "
        >
          <span
            className="
              whitespace-nowrap
              font-technical-label
              text-[10px]
              uppercase
              tracking-[0.14em]
              text-secondary
              sm:text-[11px]
            "
          >
            {HERO_DATA.tagline}
          </span>
        </div>
      </div>

      {/* =================================================
          MAIN HEADLINE
          
          Space Grotesk is intentionally used here instead
          of DotGothic16 for more consistent browser rendering.
      ================================================= */}

      <div
        className="
          mx-auto
          mb-7
          w-full
          max-w-[1080px]
          px-2
          sm:px-4
        "
      >
        <h1
          className="
            font-display-lg
            font-bold
            uppercase
            leading-[0.9]
            tracking-[-0.045em]
            text-center
            text-white
            text-glow-white

            text-[3.5rem]
            sm:text-[4.7rem]
            md:text-[5.6rem]
            lg:text-[6.4rem]
            xl:text-[7rem]
          "
        >
          <span className="block">
            {HERO_DATA.headlineLine1}
          </span>

          <span className="block">
            {HERO_DATA.headlineLine2}
          </span>
        </h1>
      </div>

      {/* =================================================
          SUBHEAD
      ================================================= */}

      <p
        className="
          mx-auto
          mb-7
          max-w-[680px]
          text-center
          font-body-lg
          text-sm
          leading-relaxed
          text-secondary
          sm:text-base
          lg:text-lg
        "
      >
        {HERO_DATA.subhead}
      </p>

      {/* =================================================
          CTA
      ================================================= */}

      <div
        className="
          mb-10
          flex
          flex-col
          items-center
          justify-center
          gap-4
          sm:flex-row
        "
      >
        {/* Primary */}

        <a
          href="#work"
          onClick={handleScrollToWork}
          className="
            inline-flex
            items-center
            justify-center
            rounded-full
            border
            border-primary
            bg-primary
            px-7
            py-3.5
            font-technical-label
            text-[11px]
            font-bold
            uppercase
            tracking-[0.14em]
            text-background
            shadow-[0_0_20px_rgba(255,255,255,0.15)]
            transition-all
            duration-300
            hover:bg-surface
            hover:text-primary
            hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]
            sm:text-xs
          "
        >
          EXPLORE MY WORK
        </a>

        {/* Secondary */}

        <a
          href={HERO_DATA.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            border-b
            border-transparent
            pb-1
            font-technical-label
            text-[11px]
            uppercase
            tracking-[0.14em]
            text-secondary
            transition-colors
            duration-300
            hover:border-primary
            hover:text-primary
            sm:text-xs
          "
        >
          VIEW RESUME
        </a>
      </div>

      {/* =================================================
          CAPABILITY STRIP
      ================================================= */}

      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[680px]
          flex-wrap
          items-center
          justify-center
          gap-2.5
          border-t
          border-outline-variant/20
          pt-5
        "
      >
        {HERO_DATA.skills.map((skill) => (
          <span
            key={skill}
            className="
              rounded-full
              border
              border-outline-variant/35
              bg-surface-container-high/55
              px-3.5
              py-1.5
              font-technical-label
              text-[10px]
              uppercase
              tracking-[0.13em]
              text-secondary
              backdrop-blur-sm
              transition-all
              duration-300
              hover:border-accent/50
              hover:text-primary
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;