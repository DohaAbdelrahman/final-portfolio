'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface EducationEntry {
  degree: string;
  university: string;
  period: string;
  gpa: string;
  coursework: string[];
  achievements: string[];
}

const education: EducationEntry[] = [
  {
    degree: 'M.S. Computer Science (Machine Learning)',
    university: 'Stanford University',
    period: '2019 — 2021',
    gpa: '3.9/4.0',
    coursework: [
      'Deep Learning',
      'Statistical Methods',
      'Natural Language Processing',
      'Computer Vision',
      'Reinforcement Learning',
    ],
    achievements: [
      'Graduated with Distinction',
      'Research Assistant in AI Lab',
      'Published thesis on transformer architectures',
    ],
  },
  {
    degree: 'B.S. Statistics & Data Science',
    university: 'UC Berkeley',
    period: '2015 — 2019',
    gpa: '3.8/4.0',
    coursework: [
      'Probability Theory',
      'Linear Regression',
      'Bayesian Statistics',
      'Data Mining',
      'Applied Machine Learning',
    ],
    achievements: [
      'Magna Cum Laude',
      'Undergraduate Research Fellowship',
      "Dean's List all semesters",
    ],
  },
];

function EducationCard({
  entry,
  index,
}: {
  entry: EducationEntry;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative flex items-start w-full"
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-6 md:left-1/2 z-20 -translate-x-1/2"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.1 }}
      >
        <div className="relative">
          <div className="w-3 h-3 rounded-full bg-cyan shadow-[0_0_12px_rgba(0,229,255,0.5)]" />
          <div className="absolute inset-0 w-3 h-3 rounded-full bg-cyan/30 animate-ping" />
        </div>
      </motion.div>

      {/* Card */}
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
          delay: index * 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <div className="rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] p-6 hover:border-cyan/15 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,229,255,0.05)]">
          {/* Period + Icon row */}
          <div
            className={`flex items-center gap-3 mb-4 ${
              isEven ? 'md:flex-row-reverse' : ''
            }`}
          >
            <span className="inline-block text-xs font-mono tracking-wider text-cyan/70 bg-cyan/5 border border-cyan/10 rounded-full px-3 py-1">
              {entry.period}
            </span>
            <div className="w-8 h-8 rounded-lg bg-cyan/10 border border-cyan/15 flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-cyan" />
            </div>
          </div>

          {/* Degree */}
          <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
            {entry.degree}
          </h3>

          {/* University */}
          <p className="text-cyan text-sm font-medium mb-3">{entry.university}</p>

          {/* GPA */}
          <div
            className={`inline-flex items-center gap-2 text-sm mb-5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] ${
              isEven ? 'md:ml-auto' : ''
            }`}
          >
            <span className="text-white/40 font-medium">GPA</span>
            <span className="text-white font-semibold tabular-nums">
              {entry.gpa}
            </span>
          </div>

          {/* Coursework pills */}
          <div
            className={`flex flex-wrap gap-2 mb-5 ${
              isEven ? 'md:justify-end' : ''
            }`}
          >
            {entry.coursework.map((c) => (
              <span
                key={c}
                className="text-xs text-muted-foreground bg-white/5 rounded-full px-2.5 py-1 border border-white/[0.04]"
              >
                {c}
              </span>
            ))}
          </div>

          {/* Achievements */}
          <ul
            className={`space-y-2 ${
              isEven ? 'md:flex md:flex-col md:items-end' : ''
            }`}
          >
            {entry.achievements.map((a) => (
              <li key={a} className="flex items-start gap-2">
                <Award
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

export default function Education() {
  return (
    <section id="education" className="relative">
      <div className="section-container">
        <SectionHeading
          label="Education"
          title="Academic Background"
          subtitle="A strong foundation in mathematics, statistics, and computer science"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="timeline-line" />

          {/* Timeline entries */}
          <div className="flex flex-col gap-10 md:gap-12">
            {education.map((entry, i) => (
              <EducationCard key={entry.university} entry={entry} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}