import {
  Project,
  Experience,
  EsportsHighlight,
  Achievement,
  Certification,
  Education,
  UniversalDetailData,
} from '../types';

/* =========================================================
   HERO
========================================================= */

export const HERO_DATA = {
  tagline: 'BUILDING · COMPETING · CREATING',

  headlineLine1: 'CODE. INTELLIGENCE.',

  headlineLine2: 'BUILT FOR REALITY.',

  subhead:
    'Full-Stack + AI Engineer building intelligent applications, cybersecurity solutions, and interactive digital experiences.',

  skills: [
    'FULL-STACK',
    'AI',
    'CYBERSECURITY',
    'ESPORTS',
  ],

  // Add your final resume URL here before deployment.
  resumeUrl: '',
};

/* =========================================================
   PROJECT MEDIA
========================================================= */

const SURAKSHAVERSE_MAIN =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB8CpJnIuFnj6vzGbDScBL36nXr4VWs08i1rS9hgQTGgXYPLBhDPKLUN5GUW1TC8cOzHxsVhOLcqQ5l_-LttQAvrHgt4s5ZZzzjIuu8ERIcrYYsHLyHGZ2lzn_VtRyeDU2akJXPp4suY8IYhOGYVTQR0o5brvP-6pinsvaMzhwi3NyzXRKefYUncCJTgwyuGOTeM6YzFOO2AF6oFd-FzY1QRnoZN9mHgPPYRklSgoxlhrDakSnUjTlpsA';

const SURAKSHAVERSE_GRAPH =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCqOXKF1MHrBv_tQXUYNKfbJ8okmP4uv-s5wRimPO_W-vCnMIOxaPG_mjZdOQfYueRuY1tXNhqYdqup21Wwp81hVMJjWOFEP6cLZMGaHqS8l8-H9St766sOdB9_wuX9ujJxQFCZ5-US6ndyoAMdice8HjKgDIZ9tuVTEBZ_37qaFVcY8hV8rQIqKeSt4erqSlFJeZcvklBcOS8VEmVyK-mCUsaauzlnrW2Ii7cSPT_mTtl_9GhQvMZHcw';

const SURAKSHAVERSE_DASHBOARD =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDCffPp7c7CAbe2ZaLsRbs9TkpnZM2_B9vP3KXiwCLTMDsr_eKoT8fG0B0R9o1IBPCP7ceFK4x3Nw0CN3rtYuok7YWOPMH4FI3-DDP0F2SOyFp5f3DPHvyTjlorowMnrPWcKLqEnx63ByFKJBCO13MvvWRy8enb_Sx4_-6lpJeHlVAZatH5FL2SbNCvKko9tUX3aqy6c9yoIiW2vc0Utwpz0qp55kfN3h4Us_fPRSZbDYi38gt_o822Yw';

const BARTERLEARN_MAIN =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBWBcJ4eRVb5tuNycFn-40XMpoeO-xGzJ-p6OUZmizeFCvOjOKtMOnqUTETzGDVfReKhh3FC8M6VITw3XZxj9SOGgpLbc17u9DQOsYVDI1uFYEEIrea-S-yuoQcrCD1o765KNOZUftSiYJPkSM7DBA0fibBnTs2D_rOjx_uIzcf3JT0U0f77R67bw1KDdM_-5TiZgzYinpXeSMUkmv_5fE-xs6sHGWNGwLTlr6EPiv38I4zePPyZcrUBQ';

const SMARTSKETCH_MAIN =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB6TYYsuJ4qguk8E6XGSwPOX2X55LNaK1bQ5npPlQk5D4AxlnE67z8aGaE95lJrndYheCWK5kdubHzvFuiD98QlyhzF0e18UimXpZh9xMOMducmjmlFdPqu-wrIEbeYhtBUvIJml9Pvub6urNcRWPGqv_D8Cvl7Cso5Qr_4NQHIbd34IZWjHxlY43jdGuyxl8Z-asbFewCQLpOjKBUAISAbfTk1MtQhEBjcv94BygKl-DDMw7PniZpdTg';

const RESOURCE_LINK_MAIN =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAHdgsKut5vHwtXnudpGzj3mW6VNVicAW1QL7AwQ9xGBbfHpCAZbxVG7A4P4dOLKwCJbETjrFe4UG2bhHDYueXvVUDKu-FAUdZzEcQGHfqctiRwg_6fIl9VpMrmkIJ3ODASyvyRoDm1BDxgeGWdcVyI5GdEbif3zj2yp_K2rq-Z4gSRaUQjbA6XRhFEp5ANYd5dAJ4dio3CEyA0HX_0GPH9YZsS4ETKSjdS9RBVCx0Mr-wfe3JHLnXQow';

/* =========================================================
   PROJECTS
========================================================= */

export const PROJECTS_DATA: Project[] = [
  /* -------------------------------------------------------
     01 — SURAKSHAVERSE
  ------------------------------------------------------- */

  {
    id: 'surakshaverse',

    number: '01',

    title: 'SURAKSHAVERSE',

    category: 'AI × CYBERSECURITY',

    shortDescription:
      'A cybersecurity awareness and training platform combining realistic threat simulations with AI-assisted risk analysis to help users recognize, investigate, and respond to common cyber threats.',

    fullDescription: [
      'SurakshaVerse is a web-based cybersecurity awareness and training platform designed to make security learning more practical, interactive, and accessible.',

      'The platform uses mission-based scenarios covering threats such as phishing, UPI fraud, ransomware, and identity theft. Users make decisions during simulated incidents and receive feedback based on their responses.',

      'The second module introduces AI-assisted threat analysis using simulated telemetry. Machine-learning techniques can analyse behavioural signals and identify unusual activity for presentation through a security-focused dashboard.',

      'The project is intentionally designed as a controlled learning and analytics environment. It does not perform real-world cyber attacks, packet sniffing, or live network monitoring.',

      'The system combines cybersecurity education, gamification, data analysis, and a modern web interface to demonstrate how security awareness can become more engaging and measurable.'
    ],

    image: SURAKSHAVERSE_MAIN,

    mediaList: [
      {
        url: SURAKSHAVERSE_MAIN,
        alt: 'SurakshaVerse Interface Overview',
        caption: 'Cybersecurity Training & Threat Analysis'
      },

      {
        url: SURAKSHAVERSE_GRAPH,
        alt: 'SurakshaVerse Threat Simulation',
        caption: 'Simulated Attack Scenario Analysis'
      },

      {
        url: SURAKSHAVERSE_DASHBOARD,
        alt: 'SurakshaVerse Dashboard',
        caption: 'AI-Assisted Security Analytics Dashboard'
      }
    ],

    technologies: [
      'React',
      'Python',
      'FastAPI',
      'scikit-learn',
      'PostgreSQL',
      'WebSockets',
      'Tailwind CSS'
    ],

    role: 'Developer & Module Engineer',

    year: '2026',

    codeUrl:
      'https://github.com/gauravphutane11/SurakshaVerse.git',

    liveUrl: '',
  },

  /* -------------------------------------------------------
     02 — BARTERLEARN
  ------------------------------------------------------- */

  {
    id: 'barterlearn',

    number: '02',

    title: 'BARTERLEARN',

    category: 'FULL-STACK × COLLABORATIVE LEARNING',

    shortDescription:
      'A collaborative learning marketplace where users exchange skills and knowledge through peer-to-peer learning sessions.',

    fullDescription: [
      'BarterLearn is a collaborative learning platform built around the idea of exchanging knowledge and skills instead of relying only on traditional paid learning models.',

      'Users can discover learning opportunities, share their own skills, and connect with other learners based on what they want to learn or teach.',

      'The platform focuses on peer-to-peer knowledge exchange, collaboration, skill discovery, and communication between users.',

      'The project demonstrates full-stack development concepts including frontend interfaces, backend APIs, database integration, and real-time communication.',

      'The overall goal is to create a digital environment where knowledge itself can become a medium of exchange.'
    ],

    image: BARTERLEARN_MAIN,

    mediaList: [
      {
        url: BARTERLEARN_MAIN,
        alt: 'BarterLearn Collaborative Learning Platform',
        caption: 'Collaborative Learning Marketplace'
      }
    ],

    technologies: [
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Socket.io',
      'Tailwind CSS'
    ],

    role: 'Full-Stack Developer',

    year: '2024',

    codeUrl:
      'https://github.com/gauravphutane11/BarterLearn---Collaborative-Learning-Marketplace.git',

    liveUrl: '',
  },

  /* -------------------------------------------------------
     03 — SMARTSKETCH
  ------------------------------------------------------- */

  {
    id: 'smartsketch',

    number: '03',

    title: 'SMARTSKETCH',

    category: 'AI × FORENSIC TECHNOLOGY',

    shortDescription:
      'An AI-enhanced forensic facial recognition concept designed to organize visual evidence and support structured facial-analysis workflows. Selected as a DIPEX 2025 Finalist / Final Project.',

    fullDescription: [
      'SmartSketch is an AI-enhanced forensic facial recognition concept designed to support investigators in organizing visual evidence and exploring structured facial-analysis workflows.',

      'The concept explores how facial features, visual references, and fragmented witness information could be organized into a more systematic investigation process.',

      'The system concept combines computer vision, facial-analysis ideas, structured visual inputs, and an interactive interface to explore how technology could assist forensic workflows.',

      'SmartSketch was selected as a Finalist / Final Project at DIPEX 2025. The DIPEX association belongs specifically to the SmartSketch project and should not be confused with SurakshaVerse.',

      'The project is presented as an academic and innovation-focused concept rather than a deployed forensic investigation product. Its purpose is to demonstrate the potential application of AI and computer vision in a forensic context.'
    ],

    image: SMARTSKETCH_MAIN,

    mediaList: [
      {
        url: SMARTSKETCH_MAIN,
        alt: 'SmartSketch Forensic AI Concept',
        caption: 'AI-Assisted Forensic Facial Analysis Concept'
      }
    ],

    technologies: [
      'Python',
      'PyTorch',
      'OpenCV',
      'FastAPI',
      'React',
      'Canvas API'
    ],

    role: 'AI / Concept Engineer',

    year: '2025',

    codeUrl: '',

    liveUrl: '',
  },

  /* -------------------------------------------------------
     04 — RESOURCE LINK
  ------------------------------------------------------- */

  {
    id: 'resource-link',

    number: '04',

    title: 'RESOURCE LINK',

    category: 'WEB PLATFORM',

    shortDescription:
      'A community-oriented resource-sharing platform designed to make useful technical and educational resources easier to discover, organize, and share.',

    fullDescription: [
      'Resource Link is a web platform created to make useful technical and educational resources easier to discover and share.',

      'The platform provides a community-oriented feed where resources can be presented in a simple and accessible format.',

      'The project focuses on discoverability, organization, and creating a centralized place for sharing useful information.',

      'Its design emphasizes a straightforward user experience so that useful resources can be surfaced without unnecessary complexity.'
    ],

    image: RESOURCE_LINK_MAIN,

    mediaList: [
      {
        url: RESOURCE_LINK_MAIN,
        alt: 'Resource Link Platform',
        caption: 'Community Resource Sharing Platform'
      }
    ],

    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'Vercel'
    ],

    role: 'Frontend & System Designer',

    year: '2023',

    liveUrl:
      'https://resource-link-eight.vercel.app/feed',

    codeUrl: '',
  },
];

/* =========================================================
   EXPERIENCE
========================================================= */

export const EXPERIENCE_DATA: Experience[] = [
  /* -------------------------------------------------------
     01 — ELITE SOFTWARES
  ------------------------------------------------------- */

  {
    id: 'elite-softwares',

    number: '01',

    company: 'ELITE SOFTWARES',

    role: 'Software Engineer Intern',

    duration: '45 Days Internship',

    shortDescription:
      'Hands-on software development experience across frontend development, backend integration, databases, and deployment workflows.',

    fullDescription: [
      'Completed a focused 45-day software engineering internship with practical exposure to full-stack application development.',

      'Worked on responsive user interfaces, backend integration, database connectivity, and application deployment workflows.',

      'Gained experience working through development tasks, debugging, feature implementation, and understanding how different parts of a web application connect together.',

      'The internship provided practical exposure to the software development lifecycle and helped strengthen understanding of how frontend, backend, database, and deployment layers work together.'
    ],

    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD75u26gx1LDSLwWpsYq_qAoXmMLY8gCWFfAgYtRiZVYyHzekbraQ-nxy-m6oyIy7LawDrZsTgWsBA1i-x0ym17nu0cYmVCp55sWTwi_z9liJ2wsFBqotWWJlmaYEbRkvmJJDcp-KblNmrkrd2d6rroNmLFNtvImiW4K5DBYjHuYWc6A9FZ7nTs64dfV62-YK5fJYvQ0CV0QaJTHXBZJuJjywVor60XfAQqWATSPRcZAfIZ3riXTfSXlQ',

    mediaList: [
      {
        url:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuD75u26gx1LDSLwWpsYq_qAoXmMLY8gCWFfAgYtRiZVYyHzekbraQ-nxy-m6oyIy7LawDrZsTgWsBA1i-x0ym17nu0cYmVCp55sWTwi_z9liJ2wsFBqotWWJlmaYEbRkvmJJDcp-KblNmrkrd2d6rroNmLFNtvImiW4K5DBYjHuYWc6A9FZ7nTs64dfV62-YK5fJYvQ0CV0QaJTHXBZJuJjywVor60XfAQqWATSPRcZAfIZ3riXTfSXlQ',
        alt: 'Elite Softwares Internship',
        caption: 'Software Development Internship'
      },

      {
        url:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAbQ9AJkdTx6k9yGPLiB4uXGz_P1GOdzEr1fr0dqHH2RW5_iDGXO0yELyxKzzj6lRurqoptVVspfiWaDlD_ulIU66tCHzxmeZ8K5pKYJ9GXXMmolPL-O5OH881WL16wEakzsfIs-rYYvWoHJ2RHZQ5HjLJ7NThqh3AeDHIIJYLYwYBEz_nQU7e3hY0Pm5CjiE7xaiyTDugzvF-IrSx548IexUWqQ2FG6-Nfg4KLwPhdKC7ObRCvw12_nw',
        alt: 'Technical Development Workspace',
        caption: 'Development & Backend Workflow'
      }
    ],

    tags: [
      'Frontend',
      'Backend',
      'Database',
      'Deployment'
    ],

    focus: [
      'Full-Stack Development',
      'REST APIs',
      'Database Integration',
      'Deployment Workflows'
    ]
  },

  /* -------------------------------------------------------
     02 — INFEANET
  ------------------------------------------------------- */

  {
    id: 'infeanet',

    number: '02',

    company: 'INFEANET',

    role: 'Web & Android Development Intern',

    duration: '45 Days — Diploma Period',

    shortDescription:
      'Practical experience in web and Android development with a focus on responsive interfaces, application development, and implementation.',

    fullDescription: [
      'Completed a 45-day internship during the diploma period with practical exposure to web and Android development.',

      'Worked on responsive web interfaces and Android application components while learning practical development workflows.',

      'Gained experience with interface implementation, application structure, debugging, and cross-device considerations.',

      'The internship strengthened practical understanding of application development and helped connect academic programming concepts with real implementation tasks.'
    ],

    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkXf9iZi3p8y9yRy-lGLAi5O3Kk58KGrODsZCYnluvkZnZYUfF1tu7SJXltMqCJV5c3J5HH30FxiQN_HaqL_4xTpJn9UJNPXWXJ62ORVPUNmSwB_-QXjuK7RZRuvSOBmn1vS1iN9sY2Vu6F-e4lObMnxRIGMrjqPEj_dd5EP6p5rf54cdPmD8onza_MOFPNQthTAQrtyt4N68f4vRVcpxl1bqvWvL2IST_DghRCox8qDVT2AkIKsX5bg',

    mediaList: [
      {
        url:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAkXf9iZi3p8y9yRy-lGLAi5O3Kk58KGrODsZCYnluvkZnZYUfF1tu7SJXltMqCJV5c3J5HH30FxiQN_HaqL_4xTpJn9UJNPXWXJ62ORVPUNmSwB_-QXjuK7RZRuvSOBmn1vS1iN9sY2Vu6F-e4lObMnxRIGMrjqPEj_dd5EP6p5rf54cdPmD8onza_MOFPNQthTAQrtyt4N68f4vRVcpxl1bqvWvL2IST_DghRCox8qDVT2AkIKsX5bg',
        alt: 'Web and Android Development',
        caption: 'Web & Android Development'
      }
    ],

    tags: [
      'Web',
      'Android'
    ],

    focus: [
      'Android Development',
      'Responsive Web',
      'UI Implementation',
      'Application Development'
    ]
  },

  /* -------------------------------------------------------
     03 — ESPORTS OPERATIONS
  ------------------------------------------------------- */

  {
    id: 'esports-ops',

    number: '03',

    company: 'ESPORTS OPERATIONS',

    role: 'Esports Admin / Operations Contributor',

    duration: 'Multi-Event Contributor',

    shortDescription:
      'Experience supporting college esports events through tournament administration, LAN coordination, bracket management, and on-ground operations.',

    fullDescription: [
      'Supported on-ground collegiate esports events involving tournament administration, LAN coordination, scheduling, and bracket management.',

      'Contributed to events involving College Rivals and college LAN tournaments at venues including AISSMS, Bharati College, PCCOE, and Pune Comic Con.',

      'Worked in live event environments where coordination, quick decision-making, technical awareness, and competitive integrity were important.',

      'This experience combines competitive gaming knowledge with the operational side of esports, including helping maintain smooth tournament flow and supporting participants during live events.'
    ],

    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCaP98zammxglugk1FsXdc_KdbluXexMSQ_XgGFhmsj2dQRiGz4fHjdjfNZ6ZTXk6AjvqlhTy4_75v2ml1Cxlw5Pu0uWL1Yrr2qOvVb-Q_SMeDhg1Co6erJ1PCRQCs-tX3PCM5VPmSfmq6nPWpemvAu6YgK3S-W-vYzWGcLSd9n0YsfkXvdnhFpPCrMT0jDtf3BZFJUYft12vLuUhoIa9M7gNVwrgWvy-VUociU3TiZ8_sxE_t_bRKPIg',

    mediaList: [
      {
        url:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCaP98zammxglugk1FsXdc_KdbluXexMSQ_XgGFhmsj2dQRiGz4fHjdjfNZ6ZTXk6AjvqlhTy4_75v2ml1Cxlw5Pu0uWL1Yrr2qOvVb-Q_SMeDhg1Co6erJ1PCRQCs-tX3PCM5VPmSfmq6nPWpemvAu6YgK3S-W-vYzWGcLSd9n0YsfkXvdnhFpPCrMT0jDtf3BZFJUYft12vLuUhoIa9M7gNVwrgWvy-VUociU3TiZ8_sxE_t_bRKPIg',
        alt: 'Live Esports Tournament',
        caption: 'On-Ground Tournament Operations'
      },

      {
        url:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCTT9wO1ZkWC_vx-wqtz8a4hGC5V_mCv6Lx23rBqquZwykM30UEU_sAp1-2U8L1EbfJj-vmAFJkaObafFb4VhI8h_Cebv-nL2k9ISOTfWEBtx9eFk6p01Wz2RiTG0vBMUWUcbtwwqi8OkkDH_jubTBcRlhRGbja0cm5yaJxGJremcizAf857EMXj-VeBzHV9S7_HTNm7EMrBJp2TUZdYQWw1YO7LTz4GTN8m-oQ0CBa-cAvYoBI7aAGhA',
        alt: 'College Esports Arena',
        caption: 'College Rivals / LAN Event Environment'
      }
    ],

    tags: [
      'Tournament Ops',
      'Event Admin',
      'LAN Events'
    ],

    focus: [
      'Bracket Management',
      'LAN Coordination',
      'Event Administration',
      'On-Ground Coordination'
    ]
  }
];

/* =========================================================
   ESPORTS
========================================================= */

export const ESPORTS_DATA: EsportsHighlight = {
  id: 'esports-profile',

  discipline: 'BGMI COMPETITIVE',

  rosterHistory: [
    'NAYE KHILADI — ROUND 2 QUALIFIED',
    'TRIDENT IGNITE — ROUND 2 QUALIFIED'
  ],

  operations: [
    {
      organization: 'AISSMS',
      role: 'ESPORTS ADMIN',
      description:
        'College Rivals and on-ground college esports event administration.'
    },

    {
      organization: 'BHARATI COLLEGE',
      role: 'ESPORTS ADMIN',
      description:
        'On-ground LAN tournament administration and event coordination.'
    },

    {
      organization: 'PCCOE',
      role: 'ESPORTS ADMIN',
      description:
        'College Rivals operations and bracket coordination.'
    },

    {
      organization: 'PUNE COMIC CON',
      role: 'EVENT STAFF / OPS',
      description:
        'Gaming arena and on-ground event operations contributor.'
    }
  ],

  /*
   * These are portfolio records supplied for the competitive archive.
   * Detailed descriptions intentionally avoid inventing match scores,
   * opponents, dates, or other information that is not documented.
   */

  topTournaments: [
    {
      event: 'COLLEGE RIVALS @ AISSMS',

      year: '2024',

      placement: '1ST PLACE',

      prize: '₹10,000',

      details:
        'Playoffs #2 Seed · Collegiate BGMI Competition'
    },

    {
      event: 'BHARATI COLLEGE LAN',

      year: '2023',

      placement: '1ST PLACE',

      prize: '₹10,000',

      details:
        'On-Ground LAN Championship · BGMI'
    },

    {
      event: 'COEP BGMI LAN',

      year: '2023',

      placement: '#4 RANK',

      prize: '₹20,000 Pool',

      details:
        'State Collegiate Open · BGMI'
    },

    {
      event: 'IICT COLLEGE BGMI LAN',

      year: '2023',

      placement: '#6 RANK',

      prize: '₹1,00,000 Pool',

      details:
        'State-Level Invitational · BGMI'
    },

    {
      event: 'GPP COLLEGE BGMI LAN',

      year: '2022',

      placement: '1ST PLACE',

      prize: 'Collegiate Champion',

      details:
        'Inter-College BGMI LAN · Collegiate Competition'
    },

    {
      event: 'JSPM BGMI LAN',

      year: '2022',

      placement: '#7 RANK',

      prize: 'Regional Open',

      details:
        'Regional LAN Finalist · BGMI'
    }
  ]
};

/* =========================================================
   ACHIEVEMENTS / SELECTED RECORDS
========================================================= */

export const ACHIEVEMENTS_DATA: Achievement[] = [
  /* -------------------------------------------------------
     DIPEX 2025 — SMARTSKETCH
  ------------------------------------------------------- */

  {
    id: 'dipex-smartsketch',

    title: 'SMARTSKETCH — DIPEX 2025',

    category:
      'DIPEX 2025 · FINALIST / FINAL PROJECT',

    placement:
      'FINALIST / FINAL PROJECT',

    description:
      'SmartSketch is an AI-enhanced forensic facial recognition concept selected as a Finalist / Final Project at DIPEX 2025. The project explored the use of AI and computer-vision concepts for organizing visual evidence and supporting structured forensic analysis.',

    isFeatured: true,

    image: SMARTSKETCH_MAIN,

    date: '2025'
  },

  /* -------------------------------------------------------
     ESPORTS ACHIEVEMENTS
  ------------------------------------------------------- */

  {
    id: 'ach-college-rivals',

    title: 'COLLEGE RIVALS @ AISSMS',

    category:
      'ESPORTS · SELECTED RECORD',

    placement:
      '1ST POSITION',

    prize:
      '₹10,000',

    description:
      '1st-place finish in the recorded collegiate BGMI competition at AISSMS, associated with the College Rivals competitive circuit.',

    isFeatured: false,

    date: '2024'
  },

  {
    id: 'ach-bharati',

    title: 'BHARATI COLLEGE LAN',

    category:
      'ESPORTS · LAN RECORD',

    placement:
      'WINNER',

    prize:
      '₹10,000',

    description:
      '1st-place finish in the recorded Bharati College on-ground BGMI LAN tournament.',

    isFeatured: false,

    date: '2023'
  },

  {
    id: 'ach-gpp',

    title: 'GPP COLLEGE BGMI LAN',

    category:
      'ESPORTS · COLLEGIATE RECORD',

    placement:
      '1ST PLACE',

    prize:
      'Collegiate Champion',

    description:
      '1st-place finish in the recorded inter-college BGMI LAN competition.',

    isFeatured: false,

    date: '2022'
  },

  {
    id: 'ach-coep',

    title: 'COEP BGMI LAN',

    category:
      'ESPORTS · COMPETITIVE RECORD',

    placement:
      '#4 RANK',

    prize:
      '₹20,000 Pool',

    description:
      '4th-place finish in the recorded collegiate BGMI LAN competition.',

    isFeatured: false,

    date: '2023'
  },

  {
    id: 'ach-iict',

    title: 'IICT COLLEGE BGMI LAN',

    category:
      'ESPORTS · COMPETITIVE RECORD',

    placement:
      '#6 RANK',

    prize:
      '₹1,00,000 Pool',

    description:
      'Top-six placement in the recorded state-level collegiate BGMI competition.',

    isFeatured: false,

    date: '2023'
  },

  {
    id: 'ach-jspm',

    title: 'JSPM BGMI LAN',

    category:
      'ESPORTS · REGIONAL RECORD',

    placement:
      '#7 RANK',

    prize:
      'Regional Open',

    description:
      'Top-ten placement in the recorded regional collegiate BGMI LAN competition.',

    isFeatured: false,

    date: '2022'
  }
];

/* =========================================================
   CERTIFICATIONS & LEARNING
========================================================= */

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'aws-cloud-101',
    provider: 'AWS EDUCATE',
    title: 'Cloud 101',
    category: 'cloud',
    verified: true
  },

  {
    id: 'aws-compute',
    provider: 'AWS EDUCATE',
    title: 'Compute',
    category: 'cloud',
    verified: true
  },

  {
    id: 'aws-storage',
    provider: 'AWS EDUCATE',
    title: 'Storage',
    category: 'cloud',
    verified: true
  },

  {
    id: 'aws-serverless',
    provider: 'AWS EDUCATE',
    title: 'Serverless',
    category: 'cloud',
    verified: true
  },

  {
    id: 'aws-cloud-ops',
    provider: 'AWS EDUCATE',
    title: 'Cloud Ops',
    category: 'cloud',
    verified: true
  },

  {
    id: 'aws-databases',
    provider: 'AWS EDUCATE',
    title: 'Databases',
    category: 'cloud',
    verified: true
  },

  {
    id: 'aws-gen-ai',
    provider: 'AWS EDUCATE',
    title: 'Generative AI',
    category: 'data-ai',
    verified: true
  },

  {
    id: 'aws-ml-foundations',
    provider: 'AWS EDUCATE',
    title: 'Machine Learning Foundations',
    category: 'data-ai',
    verified: true
  },

  {
    id: 'aws-security',
    provider: 'AWS EDUCATE',
    title: 'Security',
    category: 'security',
    verified: true
  },

  {
    id: 'aws-networking',
    provider: 'AWS EDUCATE',
    title: 'Networking',
    category: 'security',
    verified: true
  }
];

/* =========================================================
   ABOUT
========================================================= */

export const ABOUT_DATA = {
  tagline:
    'I BUILD. I EXPERIMENT. I COMPETE.',

  summary:
    "I'm Gaurav Phutane, a Full-Stack + AI Engineer building software products, intelligent systems, and cybersecurity-focused applications. Alongside software development, I work in esports operations and compete in esports events.",

  portraitImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAJdduk3N8VHOau_T85JH2k5CSTemNwd6wqrXDmBWMokh7l6nB8EXX8GMNxdgm2iYo0LQC0hIMPumzEU_bRf9EyFuBpwly-1LzG6RThNibc1wp6TrhtnQpswqcEoSSkMwZ-l6-jicMX8-FtRCPoKeWrXsHwbVQnczITx-BtysCWu8HLZBu2fPVPxIjq2Rj1ZTxlZ1pIeHLmRJV_bwC7tHX8WODaMCJNoqJIOZqcoEAiV57YquOStRNamA',

  pillars: [
    {
      title:
        'Systems & Architecture',

      description:
        'Full-stack development, AI-powered applications, cybersecurity projects, and practical web platforms.'
    },

    {
      title:
        'Competitive Esports',

      description:
        'BGMI competitive player, esports operations contributor, and on-ground tournament administrator.'
    }
  ],

  education: [
    {
      degree:
        'B.Tech in Computer Engineering',

      institution:
        'AISSMS IOIT, Pune',

      statusOrScore:
        'Currently Pursuing'
    },

    {
      degree:
        'Diploma in Engineering',

      institution:
        'Government Polytechnic Pune',

      statusOrScore:
        '92.93% · Distinction'
    }
  ] as Education[]
};

/* =========================================================
   CONTACT
========================================================= */

export const CONTACT_DATA = {
  heading:
    "LET'S BUILD SOMETHING REAL.",

  subhead:
    "Have a project, collaboration, opportunity, or idea worth exploring? Let's talk.",

  email:
    'gauravphutane11@gmail.com',

  // Add the final resume URL before deployment.
  resumeUrl: '',

  socials: [
    {
      label: 'INSTAGRAM',

      // Replace with your actual Instagram profile.
      url: 'https://instagram.com'
    },

    {
      label: 'LINKEDIN',

      // Replace with your actual LinkedIn profile.
      url: 'https://linkedin.com'
    },

    {
      label: 'GITHUB',

      url:
        'https://github.com/gauravphutane11'
    }
  ]
};

/* =========================================================
   UNIVERSAL DETAIL DATA BUILDER
========================================================= */

export function getDetailDataFor(
  type: string,
  id: string
): UniversalDetailData | null {

  /* =======================================================
     PROJECT
  ======================================================= */

  if (type === 'project') {
    const project =
      PROJECTS_DATA.find((p) => p.id === id);

    if (!project) {
      return null;
    }

    return {
      id: project.id,

      type: 'project',

      category: project.category,

      title: project.title,

      description: project.fullDescription,

      media: project.mediaList,

      metadata: [
        {
          label: 'ROLE',
          value: project.role
        },

        {
          label: 'YEAR',
          value: project.year
        },

        {
          label: 'CATEGORY',
          value: project.category
        }
      ],

      technologies:
        project.technologies,

      primaryAction: project.liveUrl
        ? {
          label: 'VIEW LIVE PROJECT',
          url: project.liveUrl,
          isExternal: true
        }
        : undefined,

      secondaryAction: project.codeUrl
        ? {
          label: 'VIEW CODE',
          url: project.codeUrl,
          isExternal: true
        }
        : undefined
    };
  }

  /* =======================================================
     EXPERIENCE
  ======================================================= */

  if (type === 'experience') {
    const exp =
      EXPERIENCE_DATA.find((e) => e.id === id);

    if (!exp) {
      return null;
    }

    return {
      id: exp.id,

      type: 'experience',

      category:
        'PROFESSIONAL EXPERIENCE',

      title: exp.company,

      subtitle: exp.role,

      description:
        exp.fullDescription,

      media: exp.mediaList,

      metadata: [
        {
          label: 'ROLE',
          value: exp.role
        },

        {
          label: 'TIMELINE',
          value: exp.duration
        },

        {
          label: 'ORGANIZATION',
          value: exp.company
        }
      ],

      technologies:
        exp.tags,

      primaryAction:
        undefined,

      secondaryAction:
        undefined
    };
  }

  /* =======================================================
     ESPORTS
  ======================================================= */

  if (type === 'esports') {
    return {
      id: 'esports-overview',

      type: 'esports',

      category:
        'ESPORTS & COMPETITIVE ARCHIVE',

      title:
        'COMPETITIVE GAMING & OPERATIONS',

      subtitle:
        'BGMI Competitive Player & Tournament Administrator',

      description: [
        'Competitive BGMI player with experience across collegiate LAN tournaments, campus-level competitions, and structured esports circuits.',

        'The competitive archive contains seven recorded tournament results spanning 2022–2024, including wins, podium finishes, and ranked placements.',

        'Alongside competitive play, I have supported esports operations involving tournament administration, LAN coordination, scheduling, bracket management, and live event support.',

        'The portfolio separates competitive player records from operations experience so that both sides of the esports journey can be explored independently.',

        'Event-specific personal results shown in this archive are portfolio records. Public event information is used only where it can be reliably established; unsupported match scores, opponents, dates, or statistics are intentionally not invented.'
      ],

      media: [
        {
          url:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCTT9wO1ZkWC_vx-wqtz8a4hGC5V_mCv6Lx23rBqquZwykM30UEU_sAp1-2U8L1EbfJj-vmAFJkaObafFb4VhI8h_Cebv-nL2k9ISOTfWEBtx9eFk6p01Wz2RiTG0vBMUWUcbtwwqi8OkkDH_jubTBcRlhRGbja0cm5yaJxGJremcizAf857EMXj-VeBzHV9S7_HTNm7EMrBJp2TUZdYQWw1YO7LTz4GTN8m-oQ0CBa-cAvYoBI7aAGhA',
          alt: 'Esports Tournament Arena',
          caption:
            'Collegiate Esports Event'
        },

        {
          url:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCaP98zammxglugk1FsXdc_KdbluXexMSQ_XgGFhmsj2dQRiGz4fHjdjfNZ6ZTXk6AjvqlhTy4_75v2ml1Cxlw5Pu0uWL1Yrr2qOvVb-Q_SMeDhg1Co6erJ1PCRQCs-tX3PCM5VPmSfmq6nPWpemvAu6YgK3S-W-vYzWGcLSd9n0YsfkXvdnhFpPCrMT0jDtf3BZFJUYft12vLuUhoIa9M7gNVwrgWvy-VUociU3TiZ8_sxE_t_bRKPIg',
          alt: 'Esports LAN Setup',
          caption:
            'LAN Tournament Operations'
        }
      ],

      metadata: [
        {
          label: 'DISCIPLINE',
          value: 'BGMI Competitive'
        },

        {
          label: 'ROSTER',
          value:
            'Naye Khiladi R2 / Trident Ignite R2'
        },

        {
          label: 'RECORDED EVENTS',
          value: '7 Tournament Records'
        },

        {
          label: 'TOP RESULT',
          value:
            '1st Place — College Rivals @ AISSMS'
        },

        {
          label: 'OPERATIONS',
          value:
            'College LAN & Esports Events'
        }
      ],

      technologies: [
        'BGMI',
        'LAN Networking',
        'Tournament Ops',
        'Live Administration',
        'Event Coordination'
      ],

      primaryAction:
        undefined
    };
  }

  /* =======================================================
     ACHIEVEMENT
  ======================================================= */

  if (type === 'achievement') {
    const ach =
      ACHIEVEMENTS_DATA.find(
        (a) => a.id === id
      );

    if (!ach) {
      return null;
    }

    const isFeaturedDipex =
      ach.id === 'dipex-smartsketch';

    const descriptionParagraphs =
      isFeaturedDipex
        ? [
          ach.description,

          'DIPEX 2025 is the project milestone associated with SmartSketch. The project explored the application of AI and computer-vision concepts to a forensic investigation use case.',

          'The project is presented as an academic innovation concept and not as a deployed forensic investigation product.',

          'This DIPEX recognition is associated with SmartSketch specifically. SurakshaVerse is a separate cybersecurity project and is not being presented as the DIPEX 2025 project.'
        ]
        : [
          ach.description,

          ach.prize
            ? `Recognition / Prize: ${ach.prize}`
            : 'Selected competitive record from the esports archive.',

          'This result is presented as a personal portfolio record without adding unsupported match statistics or event claims.'
        ];

    return {
      id: ach.id,

      type: 'achievement',

      category:
        isFeaturedDipex
          ? 'DIPEX 2025 · FINALIST / FINAL PROJECT'
          : 'SELECTED COMPETITIVE RECORD',

      title:
        ach.title,

      subtitle:
        ach.placement,

      description:
        descriptionParagraphs,

      media: ach.image
        ? [
          {
            url: ach.image,
            alt: ach.title,
            caption: ach.category
          }
        ]
        : [],

      metadata: [
        {
          label: 'CATEGORY',
          value: ach.category
        },

        {
          label: 'RESULT',
          value: ach.placement
        },

        {
          label: 'YEAR',
          value: ach.date || '2024'
        },

        ...(ach.prize
          ? [
            {
              label:
                'PRIZE / RECOGNITION',
              value: ach.prize
            }
          ]
          : [])
      ],

      technologies:
        isFeaturedDipex
          ? [
            'AI / ML',
            'Computer Vision',
            'Python',
            'OpenCV',
            'React'
          ]
          : [
            'Competition',
            'Team Play',
            'BGMI',
            'Esports'
          ],

      primaryAction:
        undefined
    };
  }

  /* =======================================================
     CERTIFICATION
  ======================================================= */

  if (type === 'certification') {
    const cert =
      CERTIFICATIONS_DATA.find(
        (c) => c.id === id
      );

    if (!cert) {
      return null;
    }

    /*
     * More specific descriptions for the different
     * AWS Educate learning areas.
     */

    const certificationDescriptions: Record<
      string,
      string
    > = {
      'Cloud 101':
        'Introduces fundamental cloud-computing concepts, terminology, and the role of cloud services in modern applications.',

      Compute:
        'Focuses on cloud computing resources used to run applications, workloads, and services.',

      Storage:
        'Covers fundamental cloud storage concepts and how data can be stored and accessed using cloud services.',

      Serverless:
        'Introduces serverless computing concepts and application architectures where infrastructure management is reduced.',

      'Cloud Ops':
        'Covers operational concepts involved in managing and maintaining cloud-based workloads and environments.',

      Databases:
        'Introduces cloud database concepts, data management, and the role of databases in application architectures.',

      'Generative AI':
        'Introduces generative artificial intelligence concepts and the role of modern AI models in creating and transforming content.',

      'Machine Learning Foundations':
        'Provides foundational concepts for understanding machine learning workflows, models, and practical AI applications.',

      Security:
        'Introduces fundamental cloud-security concepts and the importance of protecting applications, identities, data, and infrastructure.',

      Networking:
        'Covers fundamental networking concepts relevant to communication between applications, services, and cloud resources.'
    };

    const specificDescription =
      certificationDescriptions[
      cert.title
      ] ||
      'This credential represents structured learning in an AWS-related technical area.';

    return {
      id: cert.id,

      type: 'certification',

      category:
        'AWS EDUCATE · LEARNING CREDENTIAL',

      title:
        cert.title.toUpperCase(),

      subtitle:
        `${cert.provider} Learning Badge`,

      description: [
        `${cert.title} learning credential completed through AWS Educate.`,

        specificDescription,

        'This credential forms part of a broader learning path covering cloud computing, AI, machine learning, security, networking, and application infrastructure.'
      ],

      media: [
        {
          url:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAbQ9AJkdTx6k9yGPLiB4uXGz_P1GOdzEr1fr0dqHH2RW5_iDGXO0yELyxKzzj6lRurqoptVVspfiWaDlD_ulIU66tCHzxmeZ8K5pKYJ9GXXMmolPL-O5OH881WL16wEakzsfIs-rYYvWoHJ2RHZQ5HjLJ7NThqh3AeDHIIJYLYwYBEz_nQU7e3hY0Pm5CjiE7xaiyTDugzvF-IrSx548IexUWqQ2FG6-Nfg4KLwPhdKC7ObRCvw12_nw',
          alt:
            `${cert.title} AWS Educate Badge`,
          caption:
            'AWS Educate Learning Credential'
        }
      ],

      metadata: [
        {
          label: 'PROVIDER',
          value: 'AWS Educate'
        },

        {
          label: 'STATUS',
          value:
            cert.verified
              ? 'Verified Learning Credential'
              : 'Learning Credential'
        },

        {
          label: 'CATEGORY',
          value:
            cert.category.toUpperCase()
        }
      ],

      technologies: [
        'AWS',
        'Cloud',
        'AI / ML',
        'Security',
        'Networking'
      ],

      primaryAction:
        undefined
    };
  }

  /* =======================================================
     ABOUT
  ======================================================= */

  if (type === 'about') {
    return {
      id: 'about-detail',

      type: 'about',

      category:
        'ENGINEER PROFILE',

      title:
        'GAURAV PHUTANE',

      subtitle:
        'Full-Stack + AI Engineer',

      description: [
        ABOUT_DATA.summary,

        'Currently pursuing B.Tech in Computer Engineering at AISSMS IOIT, Pune, with a focus on software development, AI, cybersecurity, and practical engineering projects.',

        'Diploma in Engineering graduate from Government Polytechnic Pune with 92.93% distinction.',

        'Alongside technology, I participate in collegiate esports and contribute to tournament operations and event administration.',

        'My work sits at the intersection of software engineering, intelligent systems, cybersecurity, and competitive esports — combining technical problem solving with practical execution.'
      ],

      media: [
        {
          url:
            ABOUT_DATA.portraitImage,

          alt:
            'Gaurav Phutane Profile',

          caption:
            'Engineer & Competitor'
        }
      ],

      metadata: [
        {
          label: 'DEGREE',
          value:
            'B.Tech Computer Engineering'
        },

        {
          label: 'INSTITUTE',
          value:
            'AISSMS IOIT, Pune'
        },

        {
          label: 'STATUS',
          value:
            'Currently Pursuing'
        },

        {
          label: 'PREVIOUS',
          value:
            'Diploma in Engineering · 92.93%'
        },

        {
          label: 'EMAIL',
          value:
            CONTACT_DATA.email
        }
      ],

      technologies: [
        'Full-Stack',
        'AI / ML',
        'Cybersecurity',
        'System Design',
        'Esports Operations'
      ],

      primaryAction: {
        label:
          'GET IN TOUCH',

        url:
          `mailto:${CONTACT_DATA.email}`
      },

      secondaryAction:
        HERO_DATA.resumeUrl
          ? {
            label:
              'VIEW RESUME',

            url:
              HERO_DATA.resumeUrl
          }
          : undefined
    };
  }

  return null;
}