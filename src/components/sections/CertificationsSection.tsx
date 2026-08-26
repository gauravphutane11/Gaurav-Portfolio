import React from 'react';
import { SectionContainer } from '../layout/SectionContainer';
import { SectionHeading } from '../ui/SectionHeading';
import { CertificationCard } from '../cards/CertificationCard';
import { Button } from '../ui/Button';
import { CERTIFICATIONS_DATA, getDetailDataFor } from '../../data/portfolioData';
import { UniversalDetailData } from '../../types';
import { ViewName } from '../../App';

interface CertificationsSectionProps {
  onOpenModal: (data: UniversalDetailData) => void;
  onNavigate: (view: ViewName) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ onOpenModal, onNavigate }) => {
  // Show a curated compact preview of 6 primary certifications
  const previewCerts = CERTIFICATIONS_DATA.slice(0, 6);

  const handleOpenCertDetail = (id?: string) => {
    const detail = getDetailDataFor('certification', id || previewCerts[0].id);
    if (detail) onOpenModal(detail);
  };

  return (
    <SectionContainer id="certifications">
      <SectionHeading
        category="Verified Credentials"
        title="CERTIFICATIONS & LEARNING"
        subtitle="Structured training and verified competencies across cloud architecture, AI, security, and systems engineering."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
        {previewCerts.map((cert) => (
          <CertificationCard
            key={cert.id}
            certification={cert}
            onSelect={(c) => handleOpenCertDetail(c.id)}
          />
        ))}
      </div>

      <div className="flex justify-center pt-2">
        <Button
          variant="pill"
          size="md"
          onClick={() => onNavigate('certifications-detail')}
          withArrow
        >
          VIEW ALL CREDENTIALS
        </Button>
      </div>
    </SectionContainer>
  );
};
