'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import StaggerGrid from './StaggerGrid';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'SQL', level: 90 },
      { name: 'R', level: 85 },
    ],
  },
  {
    title: 'Machine Learning',
    skills: [
      { name: 'Scikit-learn', level: 90 },
      { name: 'TensorFlow', level: 85 },
      { name: 'PyTorch', level: 88 },
      { name: 'XGBoost', level: 85 },
      { name: 'LightGBM', level: 80 },
    ],
  },
  {
    title: 'Data Analysis',
    skills: [
      { name: 'Pandas', level: 95 },
      { name: 'NumPy', level: 92 },
      { name: 'Matplotlib', level: 88 },
      { name: 'Seaborn', level: 85 },
      { name: 'Plotly', level: 82 },
      { name: 'Power BI', level: 80 },
    ],
  },
  {
    title: 'Deployment',
    skills: [
      { name: 'Docker', level: 82 },
      { name: 'Git', level: 92 },
      { name: 'GitHub', level: 90 },
      { name: 'Linux', level: 85 },
      { name: 'FastAPI', level: 80 },
      { name: 'Flask', level: 78 },
      { name: 'React', level: 75 },
    ],
  },
];

function SkillCard({ name, level }: Skill) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref}>
      <GlassCard glowOnHover className="p-4">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-sm font-medium text-white">{name}</span>
          <span className="text-xs font-mono text-cyan">{level}%</span>
        </div>
        <div className="h-[3px] rounded-full bg-white/[0.06] overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyan/80 to-cyan"
            initial={{ width: 0 }}
            animate={isInView ? { width: `${level}%` } : { width: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.1,
            }}
          />
        </div>
      </GlassCard>
    </div>
  );
}

function SkillCategoryBlock({ category, index }: { category: SkillCategory; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="mb-12 md:mb-14 last:mb-0"
    >
      {/* Category heading with cyan accent line */}
      <div className="flex items-center gap-3 mb-6">
        <span className="w-8 h-px bg-cyan" />
        <h3 className="text-lg font-semibold text-white">{category.title}</h3>
        <span className="flex-1 h-px bg-white/[0.06]" />
      </div>

      {/* Skill cards grid */}
      <StaggerGrid
        className={
          category.skills.length <= 3
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4'
            : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4'
        }
        staggerDelay={0.06}
        duration={0.4}
      >
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </StaggerGrid>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />

      <div className="section-container">
        <SectionHeading
          label="Expertise"
          title="Skills & Technologies"
          subtitle="A comprehensive toolkit honed through years of practice and real-world application"
          align="center"
        />

        <div className="max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <SkillCategoryBlock key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}