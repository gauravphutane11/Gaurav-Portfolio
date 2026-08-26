export interface MediaItem {
  url: string;
  alt: string;
  caption?: string;
  type?: 'image' | 'video';
}

export interface MetadataItem {
  label: string;
  value: string;
}

export interface ActionLink {
  label: string;
  url: string;
  isExternal?: boolean;
}

export interface UniversalDetailData {
  id: string;
  type: 'project' | 'experience' | 'esports' | 'achievement' | 'certification' | 'about';
  category: string;
  title: string;
  subtitle?: string;
  description: string | string[];
  media: MediaItem[];
  metadata?: MetadataItem[];
  technologies?: string[];
  primaryAction?: ActionLink;
  secondaryAction?: ActionLink;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string[];
  image: string;
  mediaList: MediaItem[];
  technologies: string[];
  role: string;
  year: string;
  liveUrl?: string;
  codeUrl?: string;
}

export interface Experience {
  id: string;
  number: string;
  company: string;
  role: string;
  duration: string;
  shortDescription: string;
  fullDescription: string[];
  image: string;
  mediaList: MediaItem[];
  tags: string[];
  focus: string[];
}

export interface EsportsHighlight {
  id: string;
  discipline: string;
  rosterHistory: string[];
  operations: {
    organization: string;
    role: string;
    description: string;
  }[];
  topTournaments: {
    event: string;
    year: string;
    placement: string;
    prize?: string;
    details?: string;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  placement: string;
  prize?: string;
  description: string;
  isFeatured?: boolean;
  image?: string;
  date?: string;
}

export interface Certification {
  id: string;
  provider: string;
  title: string;
  category: 'cloud' | 'data-ai' | 'security';
  verified: boolean;
  credentialUrl?: string;
  description?: string;
}

export interface Education {
  degree: string;
  institution: string;
  statusOrScore: string;
}
