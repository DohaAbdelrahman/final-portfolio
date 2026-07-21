'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import StaggerGrid from './StaggerGrid';

interface Certification {
  name: string;
  issuer: string;
  year: string;
}

const certifications: Certification[] = [
  {
    name: 'AWS Certified Machine Learning — Specialty',
    issuer: 'Amazon Web Services',
    year: '2024',
  },
  {
    name: 'Google Professional Data Engineer',
    issuer: 'Google Cloud',
    year: '2023',
  },
  {
    name: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    year: '2023',
  },
  {
    name: 'Microsoft Certified: Azure Data Scientist Associate',
    issuer: 'Microsoft',
    year: '2023',
  },
  {
    name: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI (Coursera)',
    year: '2022',
  },
  {
    name: 'IBM Data Science Professional Certificate',
    issuer: 'IBM (Coursera)',
    year: '2022',
  },
  {
    name: 'Databricks Certified Machine Learning Professional',
    issuer: 'Databricks',
    year: '2024',
  },
  {
    name: 'Certified Kubernetes Application Developer',
    issuer: 'CNCF',
    year: '2023',
  },
];

function CertificationCard({ cert }: { cert: Certification }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative rounded-2xl p-5 bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={
        isHovered
          ? { y: -2, borderColor: 'rgba(0, 229, 255, 0.2)' }
          : { y: 0, borderColor: 'rgba(255, 255, 255, 0.06)' }
      }
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
        style={{
          boxShadow: isHovered
            ? '0 0 30px rgba(0, 229, 255, 0.08), 0 0 60px rgba(0, 229, 255, 0.04)'
            : 'none',
        }}
      />

      <div className="relative z-10 flex flex-col gap-4">
        {/* Icon area */}
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center">
            <Award className="w-5 h-5 text-cyan" />
          </div>
          <span className="text-xs text-cyan bg-cyan/10 rounded-full px-3 py-1 font-mono">
            {cert.year}
          </span>
        </div>

        {/* Certification name */}
        <h3 className="text-sm font-semibold text-white leading-snug min-h-[2.5rem]">
          {cert.name}
        </h3>

        {/* Issuer */}
        <p className="text-xs text-muted-foreground font-mono">
          {cert.issuer}
        </p>

        {/* View credential button */}
        <div className="mt-auto pt-1">
          <button
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-cyan transition-colors duration-300"
            onClick={(e) => e.preventDefault()}
          >
            <span>View Credential</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative">
      <div className="section-container">
        <SectionHeading
          label="Credentials"
          title="Certifications"
          subtitle="Industry-recognized certifications validating expertise across data science and cloud platforms"
        />

        <StaggerGrid
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
          staggerDelay={0.07}
          duration={0.5}
        >
          {certifications.map((cert) => (
            <CertificationCard key={cert.name} cert={cert} />
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}