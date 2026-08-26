# Stitch Portfolio Audit

Comprehensive technical and visual design audit of the Google Stitch export located in `stitch-reference/stitch_cinematic_tech_portfolio/`.

---

## 1. Export Structure

The Stitch portfolio reference is located at `stitch-reference/stitch_cinematic_tech_portfolio/` and contains **16 subdirectories** with **1 design specification file**, **15 HTML screen implementations**, and **15 rendered preview images (`screen.png`)**.

```
stitch-reference/stitch_cinematic_tech_portfolio/
├── cinematic_technical/
│   └── DESIGN.md                                                   # Design System Specification & Token Map
├── gaurav_phutane_portfolio_hero_desktop_polished/
│   ├── code.html                                                  # Standalone Hero Screen
│   └── screen.png
├── gaurav_phutane_portfolio_work_cinematic_video/
│   ├── code.html                                                  # Standalone Work Section + Inline Modal
│   └── screen.png
├── gaurav_phutane_portfolio_experience_desktop/
│   ├── code.html                                                  # Standalone Experience Screen
│   └── screen.png
├── gaurav_phutane_portfolio_esports_desktop_polished_scrollable/
│   ├── code.html                                                  # Standalone Esports Screen
│   └── screen.png
├── gaurav_phutane_portfolio_achievements_desktop/
│   ├── code.html                                                  # Standalone Achievements Screen
│   └── screen.png
├── gaurav_phutane_portfolio_certifications_desktop_polished/
│   ├── code.html                                                  # Standalone Certifications Grid
│   └── screen.png
├── gaurav_phutane_portfolio_about_desktop_polished/
│   ├── code.html                                                  # Standalone About Screen
│   └── screen.png
├── gaurav_phutane_portfolio_contact_desktop_polished/
│   ├── code.html                                                  # Standalone Contact Screen
│   └── screen.png
├── gaurav_phutane_portfolio_unified_desktop_experience/
│   ├── code.html                                                  # Full Unified Single-Page Long Scroll + Universal Modal
│   └── screen.png
├── universal_cinematic_detail_aws_certification_desktop/
│   ├── code.html                                                  # Full-screen Detail Variant: AWS Certification
│   └── screen.png
├── universal_cinematic_detail_college_rivals_desktop/
│   ├── code.html                                                  # Full-screen Detail Variant: Esports Event
│   └── screen.png
├── universal_cinematic_detail_elite_softwares_desktop/
│   ├── code.html                                                  # Full-screen Detail Variant: Internship & Case Study
│   └── screen.png
├── universal_cinematic_detail_surakshaverse_desktop/
│   ├── code.html                                                  # Full-screen Detail Variant: SurakshaVerse Preview
│   └── screen.png
├── universal_cinematic_detail_view_desktop_1/
│   ├── code.html                                                  # Modal Detail Variant: 60/40 Split Screen
│   └── screen.png
└── universal_cinematic_detail_view_desktop_2/
    ├── code.html                                                  # Modal Detail Variant: 55/45 Split Screen
    └── screen.png
```

---

## 2. Screen Inventory

| Screen Directory | Type / Scope | Key Elements & Layout | Interactivity & Modals |
|---|---|---|---|
| `cinematic_technical` | Design System Document (`DESIGN.md`) | Token definitions: colors, typography, spacing, radius, elevation rules, design philosophy | N/A |
| `gaurav_phutane_portfolio_hero_desktop_polished` | Standalone Section (Hero) | Fixed pill navbar, 3-icon identity pill, DotGothic16 main headline, CTA buttons, capability pill strip footer, ambient video background | CSS keyframe reveal animations (`slideDown`, `fadeUp`, `revealLine`) |
| `gaurav_phutane_portfolio_work_cinematic_video` | Standalone Section (Work) | Editorial project list (01-04), alternating left/right layout, grayscale-to-color hover images, custom modal dialog | Inline JavaScript modal (`openModal`, `closeModal`) on project 01 |
| `gaurav_phutane_portfolio_experience_desktop` | Standalone Section (Experience) | 3-item alternating timeline grid (Elite Softwares, Infeanet, Esports Operations), video backdrop, metadata cards | Hover zoom on media cards |
| `gaurav_phutane_portfolio_esports_desktop_polished_scrollable` | Standalone Section (Esports) | Bento grid: Category 01 (Player), Category 02 (Operations 4-col), Category 03 (Competitive Archive Table) | Hover highlights with `#F15025` borders |
| `gaurav_phutane_portfolio_achievements_desktop` | Standalone Section (Achievements) | Featured card (DIPEX 2026 Finalist) + 6-item 2-column grid archive list with accent dots | Hover border transition |
| `gaurav_phutane_portfolio_certifications_desktop_polished` | Standalone Section (Certifications) | Pixel heading, 8-col Cloud Architecture bento (6 AWS cards) + 4-col Data/AI & Security sections (4 cards) | Hover translate & orange glow |
| `gaurav_phutane_portfolio_about_desktop_polished` | Standalone Section (About) | 2-column editorial: Left portrait + "I BUILD. I EXPERIMENT. I COMPETE.", Right stacked blocks (Engineering, Building, Esports, Education) | Card hover border glow |
| `gaurav_phutane_portfolio_contact_desktop_polished` | Standalone Section (Contact) | Centered minimalist card, email CTA pills, copyable mailto link, subdued footer | CSS `fadeInUp` animation |
| `gaurav_phutane_portfolio_unified_desktop_experience` | **Unified Full Experience** | Combines Hero, Work, Experience, Esports, Achievements, Certifications, About, Contact into a continuous 1-page scroll | Smooth anchor scrolling + Dynamic JavaScript Universal Modal |
| `universal_cinematic_detail_aws_certification_desktop` | Detail View Variant A | Centered 3D perspective badge container + verification metadata & action button | Floating return button |
| `universal_cinematic_detail_college_rivals_desktop` | Detail View Variant B | Fullscreen tournament stage background with bottom-aligned HUD data overlay | Vignette and noise overlay |
| `universal_cinematic_detail_elite_softwares_desktop` | Detail View Variant C | Left fixed sidebar dock + background workstation image + bottom HUD content | Sidebar tab navigation |
| `universal_cinematic_detail_surakshaverse_desktop` | Detail View Variant D | Fullscreen slide gallery with left/right chevron arrows, bottom HUD overlay, slide indicators | Slide indicator pills |
| `universal_cinematic_detail_view_desktop_1` | Detail Modal Variant 1 | Split modal (60% media left, 40% info right), slideshow arrows, tag badges, action buttons | ESC key and backdrop close handlers |
| `universal_cinematic_detail_view_desktop_2` | Detail Modal Variant 2 | Split modal (55% media left, 45% info right), glowing primary CTA button, staggered text animations | Modal exit animation handler |

---

## 3. Design System

### Design Philosophy
The aesthetic is defined in `DESIGN.md` as a hybrid of **Minimalism** and **Technical Futurism** under a **"Digital Artifact" / "Void-Space"** philosophy:
- Uses a deep black void background (`#000000` / `#131315`) to create infinite perceived depth.
- UI elements emerge as illuminated physical objects using "Luminous Layering" rather than traditional drop shadows.
- Thin 1px wireframe strokes (`#333333` / `#3F3F41` / `#444748`) delineate structures.
- Strict monochrome base palette contrasted against a single aggressive **"International Orange"** (`#F15025`) accent for active states, status indicators, and tactical highlights.

### Color Tokens & Usage

| Token Name | Token Hex | Observed In-Situ Values | Purpose / Application |
|---|---|---|---|
| **Void Background** | `#000000` | `#000000` / `#131315` | Page background, modal backdrops |
| **Surface** | `#131315` | `#111111` / `#191919` / `#131315` | Section canvas, card backgrounds |
| **Surface Container Low** | `#1b1b1d` | `#1b1b1d` / `rgba(27,27,29,0.8)` | Floating navigation, card surfaces |
| **Surface Container High** | `#2a2a2c` | `#28282A` / `#2a2a2c` | Floating pills, CTA containers |
| **Primary (White)** | `#FFFFFF` | `#FFFFFF` / `#E4E2E4` | Headings, active links, primary buttons |
| **Secondary (Light Gray)** | `#C7C6C6` | `#C7C6C6` / `#C8C8C8` / `#CED0CE` | Body text, subheadings, nav items |
| **Muted / Variant** | `#8E9192` | `#8E8E8E` / `#C4C7C8` / `#8E9192` | Metadata labels, timestamps, disabled items |
| **Accent (International Orange)** | `#F15025` | `#F15025` / `#be2d00` (tertiary) | Status dots, hover highlights, active borders, CTAs |
| **Wireframe Stroke / Outline** | `#444748` | `#333333` / `#3F3F41` / `#444748` | 1px card borders, pill borders, dividers |

### Spacing & Grid System
- **Baseline Unit**: `8px`
- **Max Container Width**: `1440px` (`max-w-container-max mx-auto`)
- **Desktop Gutters & Margins**: `margin-desktop: 64px`, `gutter: 24px`
- **Mobile Margins**: `margin-mobile: 20px`
- **Section Gap**: `160px` (`pb-section-gap` / `pt-40` to create substantial breathing room)
- **Desktop Grid**: 12-column fixed grid (`grid-cols-1 md:grid-cols-12 gap-gutter`)

### Shapes & Corner Radii
- **Default**: `1rem` (`16px`)
- **Pill / Floating UI**: `9999px` (`rounded-full`) — used for top navbar, category tags, interactive chips, status badges
- **Card Corners**: `0.5rem` (`8px`) to `1rem` (`16px`) (`rounded-lg` / `rounded-xl`)
- **Cinematic Detail Container**: `4px` (`rounded-cinematic` in View 1) to `12px` (`rounded-lg` / `12px` in View 2)

### Elevation & Luminous Layering
- **Level 1 (The Void)**: `#000000` with fixed ambient video and optional noise texture.
- **Level 2 (Containers)**: Glassmorphism / surface pills (`bg-surface-container-low/80 backdrop-blur-md border border-outline-variant/30`).
- **Level 3 (Floating Interactive Elements)**: `#28282A` background, 1px stroke `#3F3F41`, ambient shadow `0 4px 14px rgba(0,0,0,0.50)`.
- **Level 4 (Modals & Overlays)**: `rgba(0,0,0,0.85)` backdrop blur (`8px`-`12px`) + `rgba(25,25,25,0.85)` modal surface with inner highlight stroke `inset 0 0 0 1px rgba(255,255,255,0.02)`.

---

## 4. Typography

### Font Hierarchy & Scale

| Font Family | Weights Used | Target Roles | Key Specifications |
|---|---|---|---|
| **Space Grotesk** | `400`, `500`, `700` | Display Titles, Section Headlines, Modal Titles | `display-lg`: 72px / 1.1 line-height / -0.04em tracking<br>`display-lg-mobile`: 40px / 1.2 / -0.02em<br>`headline-md`: 32px / 1.3 / 500 weight |
| **Inter** | `400`, `500`, `600` | Body Text, Paragraphs, UI Labels | `body-lg`: 18px / 28px line-height / 400 weight<br>`body-md`: 16px / 24px / 400 weight<br>`ui-label`: 14px / 20px / 500 weight |
| **Geist** | `400`, `600` | Technical Labels, Category Tags, Monospace Metadata | `technical-label`: 12px / 16px / 600 weight / 0.1em letter-spacing / uppercase |
| **DotGothic16** | `400` | Hero Main Display Title (in Hero & Unified) | 64px mobile / 96px desktop / dot-matrix bitmap aesthetic |
| **Press Start 2P** | `400` | Pixel Headings (in Certifications & Esports Details) | 24px-32px / uppercase / retro-technical aesthetic |
| **Material Symbols Outlined** | `100..700`, `FILL 0..1` | System icons (code, memory, sports_esports, shield, check_circle, etc.) | Standard Google Material Icon font |

### Typography Loading & Sources
- Loaded via Google Fonts CDN in `<head>`:
  - `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500&family=Geist:wght@400;600&family=DotGothic16&display=swap`
  - `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap`
  - `https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap`

---

## 5. Global Background

### Exact Implementation Specifications

```html
<!-- Ambient Cinematic Background Video Layer -->
<div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
  <video 
    autoplay 
    loop 
    muted 
    playsinline 
    class="w-full h-full object-cover object-center opacity-60 mix-blend-screen"
  >
    <source 
      src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_012548_ef22562c-c0ae-4816-ad9d-f8922af4e6a7.mp4" 
      type="video/mp4"
    />
  </video>
  <!-- Multi-layer Vignette and Darkening Overlay -->
  <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90"></div>
</div>
```

### Background Parameter Summary

| Property | Value | Notes / Observations |
|---|---|---|
| **Video URL** | `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_012548_ef22562c-c0ae-4816-ad9d-f8922af4e6a7.mp4` | Hosted on AWS CloudFront; features dark abstract geometric fluid/particle motion |
| **Sizing** | `w-full h-full object-cover object-center` / `100vw 100vh` | Covers entire viewport continuously |
| **Positioning** | `fixed inset-0` with `pointer-events-none` | Placed behind content with z-index (`z-0`, `z-[-1]`, or `z-[-2]`) |
| **Video Opacity** | `0.4` to `0.6` (40% to 60%) | Tuned so background motion remains atmospheric without hurting text contrast |
| **Blend Mode** | `mix-blend-screen` (used in Hero, Esports, Unified) | Blends bright particle elements into pure black background |
| **Gradient Overlay** | `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.9) 100%)` | Darkens top and bottom to ensure text and navigation readability |
| **Noise Texture Overlay** | SVG feTurbulence data URI (`opacity: 0.03`) | Subtly breaks color banding in gradients (present in Achievements and Esports) |
| **Global Reusability** | **YES — 100% Reusable Globally** | A single persistent React background component will maintain seamless playback without stutter or reloading between navigation states |

---

## 6. Navigation

### Top Navigation Component Architecture
The primary navigation is a floating glassmorphism pill centered at the top of the viewport:

```html
<nav class="fixed top-8 left-1/2 -translate-x-1/2 w-full max-w-fit z-50 animate-slide-down">
  <div class="flex items-center gap-6 px-6">
    <!-- Brand / Initials Badge -->
    <div class="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-background">
      <span class="font-display-lg-mobile text-[16px] font-bold tracking-tighter">GP</span>
    </div>
    <!-- Navigation Links Container -->
    <div class="bg-surface-container/80 backdrop-blur-md border border-outline-variant/30 rounded-full px-6 py-3 shadow-[0_4px_14px_rgba(0,0,0,0.50)] flex items-center gap-8 hidden md:flex">
      <!-- Active Item with 3-dot indicator -->
      <a class="font-technical-label text-technical-label uppercase tracking-widest text-primary font-bold border-b border-primary pb-1 relative flex flex-col items-center group" href="#hero">
        <span>HOME</span>
        <div class="flex gap-[2px] absolute -bottom-3">
          <div class="w-1 h-1 rounded-full bg-primary"></div>
          <div class="w-1 h-1 rounded-full bg-primary"></div>
          <div class="w-1 h-1 rounded-full bg-primary"></div>
        </div>
      </a>
      <a class="font-technical-label text-technical-label uppercase tracking-widest text-secondary hover:text-primary transition-colors hover:border-[#F15025]/50 duration-300" href="#work">WORK</a>
      <a class="font-technical-label text-technical-label uppercase tracking-widest text-secondary hover:text-primary transition-colors hover:border-[#F15025]/50 duration-300" href="#experience">EXPERIENCE</a>
      <a class="font-technical-label text-technical-label uppercase tracking-widest text-secondary hover:text-primary transition-colors hover:border-[#F15025]/50 duration-300" href="#esports">ESPORTS</a>
      <a class="font-technical-label text-technical-label uppercase tracking-widest text-secondary hover:text-primary transition-colors hover:border-[#F15025]/50 duration-300" href="#contact">CONTACT</a>
    </div>
    <!-- Resume CTA -->
    <a class="flex-shrink-0 bg-surface-container-high border border-outline-variant/50 rounded-full px-6 py-3 font-technical-label text-technical-label uppercase tracking-widest text-secondary hover:text-primary hover:border-primary transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.50)]" href="#">
      VIEW RESUME
    </a>
  </div>
</nav>
```

### Navigation Variations Observed Across Screens
1. **Pill Logo Badge (`GP`)**: Used in `hero_desktop_polished` and `unified_desktop_experience`.
2. **Text Logo (`GAURAV PHUTANE`)**: Used in `work`, `experience`, `esports`, `achievements`, `certifications`, `contact`.
3. **OS System Title (`PORTFOLIO_OS`)**: Used in `universal_cinematic_detail_aws_certification`, `universal_cinematic_detail_college_rivals`, `universal_cinematic_detail_elite_softwares`.
4. **Detail View Suppression**: Navigation is hidden in modal detail overlays to focus immersion on the case study.

---

## 7. Components Identified

The following 14 UI elements must eventually become modular reusable components:

| Component Name | Description & Visual Signature | Key Props / Data Model |
|---|---|---|
| `Navbar` | Floating pill navbar with glassmorphism, brand icon/logo, section anchor links, active indicator, and CTA button. | `activeSection`, `links`, `resumeUrl` |
| `Footer` | Minimalist bottom strip with copyright, technical tagline, and external social media links (Instagram, LinkedIn, GitHub). | `socialLinks`, `copyrightYear` |
| `CinematicBackground` | Fixed ambient video player with overlay gradients, noise layer, and fallback poster image. | `videoUrl`, `posterUrl`, `opacity` |
| `PageContainer` | Standard layout wrapper applying `max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop`. | `children`, `className` |
| `SectionHeader` | Standardized section title with category marker (e.g. `01` or pulsing orange status dot), Space Grotesk headline, and left orange border subhead. | `index`, `title`, `subtitle`, `accent` |
| `ProjectCard` | Alternating 2-column layout (01-04), tech tags, grayscale hover-reveal media container, and "VIEW CASE STUDY" action trigger. | `project` (id, title, category, desc, image, tech, liveUrl, codeUrl) |
| `ExperienceCard` | Timeline section for internships and roles with role duration, company name, description, tags, and media card with `open_in_new` icon. | `experience` (company, role, period, desc, image, tags) |
| `AchievementCard` | Glass-panel achievement block: Featured large card for hackathons/competitions, compact cards for tournament placements with prize tags. | `achievement` (title, category, rank, prize, image, isFeatured) |
| `CertificationCard` | Dark glass card with AWS/provider badge, title, verified status badge, and hover orange border glow. | `certification` (provider, title, verified, category, credentialUrl) |
| `StatBlock` / `DataPill` | Capsule pill enclosing Material icon + technical label text (e.g., Placement, Playoffs, Prize). | `icon`, `label`, `value` |
| `UniversalDetailModal` | Master split-screen overlay modal (55% media, 45% metadata) for projects, events, internships, and certifications. | `isOpen`, `onClose`, `data` (title, category, desc, mediaList, metadata, links) |
| `MediaSlideshow` | Interactive media gallery with slide transitions, hover chevron arrows, and pagination dots. | `mediaItems`, `activeIndex`, `onChange` |
| `Button` | Standardized button variants: `primary-glow` (solid white / orange glow), `floating-pill` (dark surface stroke), `outline-pill`, and `link-arrow`. | `variant`, `size`, `href`, `onClick`, `children` |
| `Tag` / `Badge` | Semi-transparent white/gray pills with Geist font for technologies, status dots (orange active pulse), and category markers. | `label`, `variant`, `pulse` |

---

## 8. Universal Detail Comparison

Stitch generated **6 distinct detail screen implementations**. A comparison reveals how they can be consolidated into a single Universal Detail component:

| Feature / Aspect | AWS Certification Detail | College Rivals Detail | Elite Softwares Detail | SurakshaVerse Fullscreen | Universal Detail View 1 | Universal Detail View 2 |
|---|---|---|---|---|---|---|
| **Presentation Mode** | Full-screen page | Full-screen HUD | Full-screen with side dock | Full-screen with bottom HUD | Centered Modal Dialog | Centered Modal Dialog |
| **Split Ratio** | 50% Badge / 50% Text | 100% Stage BG with HUD | 100% BG with Sidebar & HUD | 100% Media with Left Overlay | 60% Media / 40% Info | 55% Media / 45% Info |
| **Media Treatment** | 3D Perspective Badge Container | Cinematic Stage Photo + Overlays | Server Room Photo + Glass Overlay | High-contrast platform mockup | Slideshow with left/right arrows & dots | Slideshow with hover arrows & dots |
| **Header Bar** | Category + Status Pill | Category ("ESPORTS") + Year | Category + Pulse Dot | Category + Year | Category + Status Line + Year | Category + Year + Close Button |
| **Metadata Section** | "Provided by", "Training Badge" | Placement, Playoffs, Prize | Duration, Focus, Tech Pills | Role, Tech, Year | Role, Platform, Technologies | Role, Timeline, Core Technologies |
| **Primary CTAs** | "VERIFY CREDENTIAL" | None (HUD view) | "Contact", Pills | "VIEW LIVE", "VIEW CODE" | "VIEW LIVE PROJECT", "VIEW CODE" | "VIEW LIVE", "VIEW CODE" |
| **Close / Back Action** | Floating "RETURN TO PORTFOLIO" | Top bar close icon | Top bar close icon | Floating round top-right "X" | Floating round top-right "X" | Header top-right "X" |

### Commonalities Across All Detail Views
1. **Category Pill with Accent Indicator**: Every view begins with an uppercase Geist technical string prefixed by an accent dot or pulse indicator (`#F15025`).
2. **Space Grotesk Main Title**: High-impact bold headline.
3. **Structured Technical Metadata Grid**: 2-column or chip-based metadata displaying roles, tech stack, duration, or tournament results.
4. **Primary & Secondary Action Cluster**: "VIEW LIVE" / "VERIFY" (primary action) paired with "VIEW CODE" / "CLOSE" (secondary action).
5. **Dismissal Pattern**: Backdrop click, Escape key, or top-right Close button.

### Strategy for Single Universal Detail Component
Rather than maintaining separate custom templates, a single **`UniversalDetailModal`** component will accept a unified TypeScript payload:
```typescript
interface UniversalDetailData {
  id: string;
  type: 'project' | 'experience' | 'esports' | 'certification';
  title: string;
  category: string;
  yearOrDuration?: string;
  description: string | string[];
  media: Array<{ url: string; alt: string; type?: 'image' | 'video' }>;
  metadata: Array<{ label: string; value: string }>;
  tags: string[];
  primaryAction?: { label: string; url: string; external?: boolean };
  secondaryAction?: { label: string; url: string; external?: boolean };
}
```

---

## 9. Content Inventory

### Hardcoded Data Elements Discovered

#### A. Projects (Work)
1. **SURAKSHAVERSE**
   - Category: `AI × CYBERSECURITY`
   - Description: "Cybersecurity awareness and training platform combining realistic cyber-attack simulations with AI-assisted threat analysis. Engineered for high-stress environmental conditioning and tactical response formulation."
   - Tech: React, Python, scikit-learn, FastAPI, PostgreSQL, WebSockets, D3.js
   - Role: Lead Developer / Lead UI/UX Engineer / System Architect (varies across screens)
   - Year: 2023 / 2024 / 2026 (varies across screens)
2. **BARTERLEARN**
   - Category: `FULL-STACK × COLLABORATIVE LEARNING`
   - Description: "A collaborative learning marketplace designed around peer-to-peer skill exchange and knowledge sharing."
3. **SMARTSKETCH**
   - Category: `AI × FORENSIC TECHNOLOGY`
   - Description: "AI-enhanced forensic facial recognition platform concept focused on helping investigators generate high-fidelity forensic sketches from fragmented data points. (CONCEPT)"
4. **RESOURCE LINK**
   - Category: `WEB PLATFORM`
   - Description: "A community-oriented resource sharing platform focused on accessibility and speed, designed around a minimal information architecture."

#### B. Experience
1. **ELITE SOFTWARES**
   - Role: Software Engineer Intern
   - Duration: "45 Days | Feb 2026"
   - Description: "Full-Stack Development encompassing Frontend, Backend, Frameworks, Database integration, and Deployment workflows."
   - Tags: Frontend, Backend, Deployment
2. **INFEANET**
   - Role: Web & Android Development Intern
   - Duration: "45 Days (Diploma period)"
   - Description: "Specializing in cross-platform mobile solutions and responsive web architectures with a focus on performance and user experience."
   - Tags: Web, Android
3. **ESPORTS OPERATIONS**
   - Role: Esports Admin / Operations
   - Description: "Orchestrating on-ground college esports events and managing comprehensive tournament operations, ensuring technical stability and competitive integrity."

#### C. Esports & Competitive Archive
1. **Player Discipline**: BGMI Competitive
   - Roster History: Naye Khiladi (Round 2), Trident Ignite (Round 2)
2. **Operations & Administration**:
   - AISSMS: Esports Admin (College Rivals, 2 on-ground events)
   - Bharati College: Esports Admin (2 on-ground tournament events)
   - PCCOE: Esports Admin (College Rivals S3/S4 Operations)
   - Pune Comic Con 2026: Event Staff / Operations Contributor (2-day event)
3. **Competitive Tournament Archive**:
   - College Rivals 2026 @ AISSMS: 1st Place / Playoffs #2 (Prize: ₹10,000)
   - College Rivals 2025: Winner (National Circuit)
   - Bharati College LAN 2023: Winner (Prize: ₹10,000)
   - COEP BGMI LAN: #4 Placement (₹20,000 pool)
   - IICT College BGMI LAN: State Level #6 Rank (₹1,00,000 pool)
   - GPP College BGMI LAN: Winner / 1st Place (Collegiate Champion)
   - JSPM BGMI LAN: #7 Placement (Regional Open)

#### D. Certifications & Badges (AWS Educate)
1. **Cloud Architecture**:
   - AWS Educate — Cloud 101 (Verified)
   - AWS Educate — Compute (Verified)
   - AWS Educate — Storage (Verified)
   - AWS Educate — Serverless (Verified)
   - AWS Educate — Cloud Ops (Verified)
   - AWS Educate — Databases (Verified)
2. **Data & AI**:
   - AWS Educate — Generative AI (Verified)
   - AWS Educate — Machine Learning Foundations (Verified)
3. **Security & Networking**:
   - AWS Educate — Security (Verified)
   - AWS Educate — Networking (Verified)

#### E. Achievements
1. **DIPEX 2026 (SURAKSHAVERSE)**: Finalist ("Recognized for outstanding technical innovation and robust engineering execution in a highly competitive academic environment.")
2. **College Rivals 2026 (AISSMS)**: 1st Position
3. **Bharati College LAN 2023**: Winner (₹10,000)
4. **COEP BGMI LAN**: #4 Rank
5. **IICT College BGMI LAN**: #6 Rank
6. **GPP College BGMI LAN**: 1st Place
7. **JSPM BGMI LAN**: Rank #7

#### F. Education
1. **B.Tech Computer Engineering**: AISSMS IOIT — Currently Pursuing
2. **Diploma in Engineering**: Government Polytechnic Pune — 92.93%

#### G. Contact & Links
- **Email**: `gauravphutane11@gmail.com`
- **Socials**: Instagram, LinkedIn, GitHub (URLs are currently placeholders `#`)
- **Tagline**: "CODE. INTELLIGENCE. BUILT FOR REALITY." / "ENGINEERED FOR PERFORMANCE"

### Content Flags & Suspect Data
> [!WARNING]
> - **Future Dates**: Several records cite `Feb 2026`, `DIPEX 2026`, `Pune Comic Con 2026`, and `College Rivals 2026`. These appear to be forward-dated prototype placeholders that should be made editable.
> - **Inconsistent Metadata for SurakshaVerse**:
>   - Role is listed as "Lead Developer" in `work`, "System Architect" in `detail_view_2`, and "Lead UI/UX Engineer" in `detail_view_1`.
>   - Year is listed as `2023`, `2024`, and `2026` across different screens.
> - **Duplicate Entries Between Esports & Achievements**: Tournament wins (Bharati College LAN, College Rivals, COEP, etc.) are duplicated between the Esports section and the Achievements section with slight wording variations.
> - **Placeholder URLs**: All social links and project repository links currently point to `#`.

---

## 10. Dependencies

| Dependency / Asset | Source / URL | Classification | Justification & Production Recommendation |
|---|---|---|---|
| **Tailwind CSS CDN** | `https://cdn.tailwindcss.com?plugins=forms,container-queries` | **REPLACE** | Runtime CDN script is intended only for development/prototyping. Must be replaced with standard build-time Tailwind CSS (v3 or v4) for production performance and tree-shaking. |
| **Google Fonts (Space Grotesk, Inter, Geist)** | `https://fonts.googleapis.com/...` | **REVIEW** | Core typography. Should be kept visually, but loaded via `@fontsource` packages or `next/font` to eliminate external HTTP requests and prevent layout shift (CLS). |
| **Display Fonts (DotGothic16, Press Start 2P)** | `https://fonts.googleapis.com/...` | **REVIEW** | Used in select headline accents. Can be loaded as subsetted web fonts or consolidated to avoid unnecessary font payloads. |
| **Material Symbols Outlined** | `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined...` | **REPLACE** | Icon font loads a heavy stylesheet. Should be replaced with individual SVG icons (e.g. `lucide-react` or custom inline SVGs) to reduce bundle size and avoid icon flash. |
| **Hero Background Video** | `https://d8j0ntlcm91z4.cloudfront.net/.../hf_20260809_012548_ef22562c-c0ae-4816-ad9d-f8922af4e6a7.mp4` | **KEEP / REVIEW** | Essential to the cinematic aesthetic. Video file should be preserved or mirrored to local assets/CDN to prevent dead links if the temporary CloudFront URL expires. |
| **Google Stitch Public Mockup Images** | `https://lh3.googleusercontent.com/aida-public/...` | **REVIEW / REPLACE** | 12 external AI-generated asset images hosted on temporary Google user-content URLs. Must be downloaded and stored locally in `public/assets/` to ensure long-term availability. |

---

## 11. Duplications

1. **Multiple Universal Detail Screens**: 6 separate directories implement nearly identical detail screens (`universal_cinematic_detail_*`). These duplicate ~80% of HTML/CSS structure.
2. **Duplicated Sections Between Single Pages and Unified Screen**: `gaurav_phutane_portfolio_unified_desktop_experience/code.html` literally copies the HTML of all 8 standalone section screens into one file.
3. **Redundant Color Token Definitions**: Across the 15 `code.html` files, Tailwind color configuration blocks are duplicated with slight variances (e.g., `accent-orange: #F15025`, `gp-accent: #F15025`, `brand-orange: #F15025`).
4. **Duplicate Navigation & Footer Markup**: Top navbar and footer are hardcoded into every individual HTML screen rather than being shared.
5. **Content Overlap**: Competitive esports tournament entries exist in both the `esports` screen and the `achievements` screen.

---

## 12. Problems / Risks

1. **External Asset Expiration**: The Google-hosted image URLs (`lh3.googleusercontent.com/aida-public/...`) and CloudFront video URL are temporary export artifacts. If they expire, the site's visuals will break.
2. **Hardcoded Monolithic Code**: The unified experience is a 920-line single HTML file with inline scripts and duplicated modal handlers.
3. **Inconsistent Responsive Behaviors**:
   - Several screens have hardcoded styles like `<html style="width: 1280px; height: 1546px; overflow: hidden;">` from Stitch canvas rendering.
   - Mobile navigation toggles (`<button class="md:hidden">`) exist in markup but lack responsive drawers or click handlers.
4. **Missing Keyboard & Accessibility Attributes**: Modals in several screens lack `role="dialog"`, `aria-modal="true"`, focus trapping, and keyboard navigation.
5. **Conflicting Design Tokens**:
   - `DESIGN.md` defines `surface: '#131315'` and `accent: '#F15025'`.
   - Contact screen defines custom classes like `bg-gp-black`, `text-gp-white`.
   - Achievements uses `#be2d00` for some accent dots, while Hero uses `#F15025`.

---

## 13. Recommended Final Architecture

A modern component-based architecture (Next.js / Vite React + Tailwind CSS) with full separation of content and presentation:

```
app/
├── public/
│   ├── assets/
│   │   ├── video/
│   │   │   └── background.mp4               # Mirrored cinematic background video
│   │   └── images/
│   │       ├── projects/                     # Mirrored project previews
│   │       ├── experience/                   # Mirrored workspace previews
│   │       ├── esports/                      # Mirrored tournament photos
│   │       └── profile/                      # Mirrored portrait
│   └── favicon.ico
├── src/
│   ├── data/                                 # Centralized editable data sources
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── esports.ts
│   │   ├── achievements.ts
│   │   ├── certifications.ts
│   │   ├── education.ts
│   │   └── profile.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx                   # Floating glass pill navbar
│   │   │   ├── Footer.tsx                   # Technical footer
│   │   │   ├── CinematicBackground.tsx      # Video + gradient + noise canvas
│   │   │   └── SectionContainer.tsx         # Standard section wrapper
│   │   ├── ui/
│   │   │   ├── Button.tsx                   # Glow, Pill, Outline, and Link buttons
│   │   │   ├── Badge.tsx                    # Status dots, tech pills, category tags
│   │   │   ├── DataPill.tsx                 # Icon + label capsule
│   │   │   └── SectionHeading.tsx           # Standardized Space Grotesk section titles
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── WorkSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── EsportsSection.tsx
│   │   │   ├── AchievementsSection.tsx
│   │   │   ├── CertificationsSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── modal/
│   │       ├── UniversalDetailModal.tsx     # Single master modal
│   │       └── MediaSlideshow.tsx           # Media gallery inside modal
│   ├── types/
│   │   └── index.ts                         # Strict TypeScript interfaces
│   ├── styles/
│   │   └── globals.css                      # Tailwind tokens & custom utilities
│   └── App.tsx                              # Main root application
```

---

## 14. Recommended Migration Order

1. **Asset Preservation & Local Mirroring**: Download all external images and the CloudFront video from `stitch-reference/` into local asset storage before URLs degrade.
2. **Design Token & Tailwind Configuration**: Build the unified Tailwind CSS configuration consolidating the exact tokens from `DESIGN.md` (colors, spacing, typography scales, luminous shadow definitions).
3. **Data Schema & Content Extraction**: Create TypeScript data models (`data/*.ts`) for all projects, experiences, esports events, certifications, and achievements to eliminate hardcoded strings.
4. **Core Layout & Background Layer**: Implement `CinematicBackground`, `Navbar`, `Footer`, and `SectionContainer` to establish the global cinematic aesthetic shell.
5. **Universal Detail Modal Component**: Build the master `UniversalDetailModal` and `MediaSlideshow` with focus management, backdrop blur, and smooth animations.
6. **Section Component Implementation**: Assemble each section (`Hero`, `Work`, `Experience`, `Esports`, `Achievements`, `Certifications`, `About`, `Contact`) connecting directly to the data layer.
7. **Interactivity, Animations & Modal Wiring**: Wire all project cards, experience items, and tournament records to open the Universal Detail Modal dynamically.
8. **Responsive Refinement & A11y Verification**: Ensure seamless layout on mobile/tablet viewports, complete hamburger drawer interaction, and full keyboard accessibility.

---
*Audit completed strictly in read-only analysis mode. No files in `stitch-reference/` were altered.*
