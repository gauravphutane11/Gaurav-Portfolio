import React from 'react';
import { ArrowLeft, Cloud, Brain, Shield, CheckCircle } from 'lucide-react';
import { CERTIFICATIONS_DATA, getDetailDataFor } from '../../data/portfolioData';
import { UniversalDetailData, Certification } from '../../types';

interface CertificationsDetailViewProps {
  onOpenModal: (data: UniversalDetailData) => void;
  onBack: () => void;
}

const CATEGORY_CONFIG = {
  cloud: {
    label: 'CLOUD ARCHITECTURE',
    description: 'AWS Educate learning badges covering core cloud compute, storage, serverless, database, and operations concepts.',
    icon: Cloud,
  },
  'data-ai': {
    label: 'DATA & AI',
    description: 'Structured learning credentials in Generative AI and Machine Learning Foundations from AWS Educate.',
    icon: Brain,
  },
  security: {
    label: 'SECURITY & NETWORKING',
    description: 'Verified training in cloud security architecture and networking fundamentals.',
    icon: Shield,
  },
};

const CertCard: React.FC<{ cert: Certification; onClick: () => void }> = ({ cert, onClick }) => (
  <div
    onClick={onClick}
    className="group cursor-pointer p-5 rounded-xl bg-surface-container-lowest/50 border border-outline-variant/30 hover:border-accent/50 transition-all duration-300 backdrop-blur-sm flex flex-col gap-3"
  >
    <div className="flex items-start justify-between">
      <span className="font-technical-label text-[10px] uppercase tracking-widest text-accent font-semibold">
        {cert.provider}
      </span>
      {cert.verified && (
        <div className="flex items-center gap-1 text-green-400/70">
          <CheckCircle className="w-3 h-3" />
          <span className="font-technical-label text-[9px] uppercase tracking-widest">Verified</span>
        </div>
      )}
    </div>

    <h3 className="font-ui-label text-sm text-primary font-semibold group-hover:text-accent transition-colors leading-tight">
      {cert.title}
    </h3>

    <div className="flex items-center justify-between pt-2 border-t border-outline-variant/20">
      <span className="font-technical-label text-[10px] text-on-surface-variant/50 uppercase tracking-widest">
        AWS Educate Learning Badge
      </span>
      <span className="font-technical-label text-[10px] text-accent group-hover:translate-x-0.5 transition-transform">→</span>
    </div>
  </div>
);

export const CertificationsDetailView: React.FC<CertificationsDetailViewProps> = ({ onOpenModal, onBack }) => {
  const openModal = (id: string) => {
    const detail = getDetailDataFor('certification', id);
    if (detail) onOpenModal(detail);
  };

  const groupedCerts = {
    cloud: CERTIFICATIONS_DATA.filter((c) => c.category === 'cloud'),
    'data-ai': CERTIFICATIONS_DATA.filter((c) => c.category === 'data-ai'),
    security: CERTIFICATIONS_DATA.filter((c) => c.category === 'security'),
  };

  return (
    <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-10 md:px-12 pt-32 pb-24">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 font-technical-label text-xs uppercase tracking-widest text-secondary hover:text-accent transition-colors duration-200 group mb-14"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span>BACK TO PORTFOLIO</span>
      </button>

      {/* Section Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-technical-label text-xs uppercase tracking-widest text-accent font-semibold">
            Verified Credentials
          </span>
        </div>
        <h1 className="font-display-lg text-4xl sm:text-6xl md:text-7xl text-primary font-bold uppercase tracking-tight leading-none mb-6">
          CERTIFICATIONS<br />& LEARNING
        </h1>
        <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Structured learning credentials from AWS Educate across cloud architecture, AI/ML,
          security, and networking. These are verified learning badges — not professional AWS
          certifications.
        </p>
      </div>

      {/* Categorized Sections */}
      <div className="flex flex-col gap-16">
        {(Object.keys(CATEGORY_CONFIG) as Array<keyof typeof CATEGORY_CONFIG>).map((cat) => {
          const config = CATEGORY_CONFIG[cat];
          const certs = groupedCerts[cat];
          if (!certs || certs.length === 0) return null;
          const Icon = config.icon;

          return (
            <section key={cat}>
              {/* Category Header */}
              <div className="flex items-start gap-4 mb-8 pb-6 border-b border-outline-variant/20">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h2 className="font-headline-md text-xl sm:text-2xl text-primary font-bold tracking-tight mb-1">
                    {config.label}
                  </h2>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed max-w-xl">
                    {config.description}
                  </p>
                </div>
              </div>

              {/* Cert Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {certs.map((cert) => (
                  <CertCard
                    key={cert.id}
                    cert={cert}
                    onClick={() => openModal(cert.id)}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Footer note */}
      <div className="mt-16 pt-8 border-t border-outline-variant/20">
        <p className="font-body-md text-xs text-on-surface-variant/50 max-w-xl leading-relaxed">
          All credentials listed are AWS Educate learning badges issued through the AWS Educate program.
          They represent structured competency training and are not equivalent to professional AWS
          Certified examinations.
        </p>
      </div>
    </div>
  );
};
