'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

const experiences: ExperienceEntry[] = [
  {
    role: 'Senior Data Scientist',
    company: 'TechVision AI',
    period: '2023 — Present',
    description:
      'Leading a team of 5 data scientists developing AI-powered solutions for enterprise clients. Architected a real-time ML pipeline processing 10M+ events daily.',
    achievements: [
      'Led development of fraud detection system saving $5M+ annually',
      'Reduced model inference time by 70% through optimization',
      'Mentored 5 junior data scientists to senior roles',
    ],
  },
  {
    role: 'Data Scientist',
    company: 'DataFlow Analytics',
    period: '2021 — 2023',
    description:
      'Developed predictive models and built data pipelines for Fortune 500 clients. Specialized in NLP and recommendation systems.',
    achievements: [
      'Built NLP pipeline processing 500K+ documents daily',
      'Increased client retention rate by 25% through churn prediction',
      'Published 2 papers in top ML conferences',
    ],
  },
  {
    role: 'Data Analyst',
    company: 'InsightCorp',
    period: '2020 — 2021',
    description:
      'Conducted advanced statistical analysis and built interactive dashboards for business intelligence. Drove data-informed decision making across departments.',
    achievements: [
      'Created 20+ automated dashboards used by 500+ stakeholders',
      'Identified $1.2M in cost savings through data analysis',
      'Standardized data reporting processes across 8 teams',
    ],
  },
  {
    role: 'ML Intern',
    company: 'NeuralTech Labs',
    period: '2019 — 2020',
    description:
      'Assisted in developing computer vision models for autonomous systems. Gained hands-on experience with deep learning frameworks and MLOps practices.',
    achievements: [
      'Contributed to CV model achieving 95% accuracy',
      'Automated model training pipeline reducing deployment time by 50%',
      'Co-authored internal research paper on object detection',
    ],
  },
];

function TimelineCard({
  entry,
  index,
}: {
  entry: ExperienceEntry;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative flex items-start md:items-center w-full"
    >
      {/* Timeline dot — positioned at the center line on desktop, left on mobile */}
      <motion.div
        className="absolute left-6 md:left-1/2 z-20 -translate-x-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.1 }}
      >
        <div className="relative">
          <div className="w-3 h-3 rounded-full bg-cyan shadow-[0_0_12px_rgba(0,229,255,0.5)]" />
          <div className="absolute inset-0 w-3 h-3 rounded-full bg-cyan/30 animate-ping" />
        </div>
      </motion.div>

      {/* Card — right of line on mobile, alternating on desktop */}
      <motion.div
        className={`w-full pl-14 md:pl-0
          ${isEven ? 'md:pr-[calc(50%+2rem)] md:text-right' : 'md:pl-[calc(50%+2rem)]'}`}
        initial={{ opacity: 0, y: 30, x: isEven ? -20 : 20 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, x: 0 }
            : { opacity: 0, y: 30, x: isEven ? -20 : 20 }
        }
        transition={{
          duration: 0.6,
          delay: index * 0.15,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <div className="rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] p-6 hover:border-cyan/15 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,229,255,0.05)]">
          {/* Period badge */}
          <span className="inline-block text-xs font-mono tracking-wider text-cyan/70 bg-cyan/5 border border-cyan/10 rounded-full px-3 py-1 mb-4">
            {entry.period}
          </span>

          {/* Role & Company */}
          <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
            {entry.role}
          </h3>
          <p className="text-cyan text-sm font-medium mb-3">{entry.company}</p>

          {/* Description */}
          <p
            className={`text-sm text-white/60 leading-relaxed mb-4 ${
              isEven ? 'md:ml-auto' : ''
            }`}
          >
            {entry.description}
          </p>

          {/* Achievements */}
          <ul
            className={`space-y-2 ${
              isEven ? 'md:flex md:flex-col md:items-end' : ''
            }`}
          >
            {entry.achievements.map((a) => (
              <li key={a} className="flex items-start gap-2">
                <CheckCircle2
                  className={`w-3.5 h-3.5 text-cyan/60 mt-0.5 shrink-0 ${
                    isEven ? 'md:order-2' : ''
                  }`}
                />
                <span className="text-sm text-white/50">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="section-container">
        <SectionHeading
          label="Career"
          title="Professional Experience"
          subtitle="A track record of delivering data-driven impact at leading organizations"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="timeline-line" />

          {/* Timeline entries */}
          <div className="flex flex-col gap-10 md:gap-12">
            {experiences.map((entry, i) => (
              <TimelineCard key={entry.company} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}