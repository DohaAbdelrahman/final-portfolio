'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import StaggerGrid from './StaggerGrid';
import {
  Award,
  Brain,
  GraduationCap,
  Cpu,
  Languages,
  ExternalLink,
  LucideIcon,
} from "lucide-react";
interface Certification {
  name: string;
  issuer: string;
  year: string;
  url: string;
  icon: LucideIcon;
}

const certifications: Certification[] = [
  {
    name: 'Google Data Analysts Scholarship',
    issuer: 'Digital Egypt Pioneers Initiative - DEPI',
    year: '2025',
    icon: Award,
    url:"https://drive.google.com/file/d/1jcC5HyN3MtiE6JEf8LtSp32C9mMBH5UD/view?usp=sharing",
  },
  {
    name: 'Artificial Intelligence Training',
    issuer: 'National Telecommunication Institute & Huawei',
    year: '2025',
    icon: Brain,
    url:"https://drive.google.com/file/d/1qS3vnxXfzcNN3H4LUHhMmZMdDFXWuHnM/view?usp=sharing",
  },
  {
    name: 'ALX Professional Foundations',
    issuer: 'ALX Africa',
    year: '2025',
    icon: GraduationCap,
    url:"https://drive.google.com/file/d/1K5AnDxJEwFDRu4M8y8s9LbO0ibfvtj1y/view?usp=sharing",
  },
  {
    name: 'Machine Learning Summer Training',
    issuer: 'NTI - National Telecommunication Institute',
    year: '2025',
    icon: Cpu,
    url:"https://drive.google.com/file/d/1mIdeC9qjMbKe8YeqcIwW6F8WayF6GWHL/view?usp=sharing",
  },
  {
    name: 'Huawei ICT Academy – Artificial Intelligence Scholarship',
    issuer: 'Huawei ICT Academy-Egypt',
    year: '2025',
    icon: Brain,
    url:"https://drive.google.com/file/d/1EqDnMZV-IQoJx8USInegDpQd94jB6lCH/view?usp=sharing",
  },
  {
    name: 'Certificate in Teaching Business English',
    issuer: 'Berlitz Egypt',
    year: '2025',
    icon: Languages,
    url:"https://drive.google.com/file/d/1vmYaZ3C_ymf47Cs5tA_2lC3ryoKTi6nz/view?usp=sharing",
  },
 
];

function CertificationCard({ cert }: { cert: Certification }) {
  const [isHovered, setIsHovered] = useState(false);
   const Icon = cert.icon;
  return (
    <motion.div
      className="group relative rounded-2xl p-5 bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={
        isHovered
          ? {
              y: -6,
              scale: 1.02,
              borderColor: 'rgba(0, 229, 255, 0.25)',
            }
          : {
              y: 0,
              scale: 1,
              borderColor: 'rgba(255, 255, 255, 0.06)',
            }
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
            <Icon className="w-5 h-5 text-cyan" />
          </div>
          <span className="text-xs font-semibold text-cyan bg-cyan/10 rounded-full px-3 py-1">
            {cert.year}
          </span>
        </div>

        {/* Certification name */}
        <h3 className="text-sm font-semibold text-white leading-snug min-h-[2.5rem]">
          {cert.name}
        </h3>

        {/* Issuer */}
        <p className="text-xs text-muted-foreground tracking-wide">
          {cert.issuer}
        </p>

        {/* View credential button */}
        <div className="mt-auto pt-1">
        <a
          href={cert.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-cyan transition-colors duration-300"
        >
          <span>View Credential</span>
          <ExternalLink className="w-3 h-3" />
        </a>
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
          subtitle="Professional certifications demonstrating expertise in data science, artificial intelligence, machine learning, and professional development."
        />

        <StaggerGrid
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
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