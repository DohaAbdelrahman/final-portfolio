'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Shield,
  MessageSquare,
  TrendingUp,
  Eye,
  Users,
  LineChart,
  CheckCircle2,
  Github,
  ExternalLink,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import type { LucideIcon } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  live: string;
  icon: LucideIcon;
  featured?: boolean;
  gradient: string;
}

const projects: Project[] = [
  {
    title: 'AI-Powered Fraud Detection System',
    description:
      'Built a real-time fraud detection system using ensemble learning that processes 1M+ transactions daily with 99.7% accuracy, reducing false positives by 60%.',
    tech: ['Python', 'TensorFlow', 'XGBoost', 'FastAPI', 'Docker', 'Redis'],
    features: [
      'Real-time transaction monitoring',
      'Ensemble model architecture',
      'Adaptive threshold learning',
      'Interactive fraud dashboard',
    ],
    github: '#',
    live: '#',
    icon: Shield,
    featured: true,
    gradient: 'from-cyan/20 via-cyan/5 to-transparent',
  },
  {
    title: 'NLP Sentiment Analysis Engine',
    description:
      'Developed a multi-language sentiment analysis pipeline processing 500K+ customer reviews, achieving 94% accuracy across 12 languages using transformer models.',
    tech: ['Python', 'PyTorch', 'Hugging Face', 'AWS', 'Docker'],
    features: [
      'Multi-language support',
      'Fine-tuned BERT models',
      'Real-time API endpoint',
      'Automated reporting',
    ],
    github: '#',
    live: '#',
    icon: MessageSquare,
    gradient: 'from-cyan/15 via-purple-500/5 to-transparent',
  },
  {
    title: 'Predictive Analytics Platform',
    description:
      'Designed an end-to-end predictive analytics platform that forecasts customer churn with 91% accuracy, saving $2.4M annually in retention costs.',
    tech: ['Python', 'Scikit-learn', 'Power BI', 'SQL', 'Flask'],
    features: [
      'Churn prediction models',
      'Customer segmentation',
      'Automated feature engineering',
      'Interactive dashboards',
    ],
    github: '#',
    live: '#',
    icon: TrendingUp,
    gradient: 'from-emerald-500/15 via-cyan/5 to-transparent',
  },
  {
    title: 'Computer Vision Quality Inspector',
    description:
      'Created a computer vision system for manufacturing defect detection using CNNs, achieving 98.5% defect identification rate on production lines.',
    tech: ['Python', 'PyTorch', 'OpenCV', 'TensorRT', 'Docker'],
    features: [
      'Real-time defect detection',
      'Model optimization with TensorRT',
      'Edge deployment',
      'Web-based monitoring',
    ],
    github: '#',
    live: '#',
    icon: Eye,
    gradient: 'from-amber-500/15 via-cyan/5 to-transparent',
  },
  {
    title: 'Recommendation Engine',
    description:
      'Built a collaborative filtering recommendation system serving 100K+ users, increasing engagement by 35% and average session duration by 28%.',
    tech: ['Python', 'Scikit-learn', 'LightGBM', 'FastAPI', 'Redis'],
    features: [
      'Hybrid filtering approach',
      'Real-time personalization',
      'A/B testing framework',
      'Performance monitoring',
    ],
    github: '#',
    live: '#',
    icon: Users,
    gradient: 'from-rose-500/15 via-cyan/5 to-transparent',
  },
  {
    title: 'Time Series Forecasting Dashboard',
    description:
      'Developed an automated time series forecasting system for financial markets using LSTM networks, achieving 87% directional accuracy on market trends.',
    tech: ['Python', 'TensorFlow', 'Plotly', 'Dash', 'PostgreSQL'],
    features: [
      'Multi-step forecasting',
      'Automated retraining',
      'Anomaly detection',
      'Interactive visualization',
    ],
    github: '#',
    live: '#',
    icon: LineChart,
    gradient: 'from-sky-500/15 via-cyan/5 to-transparent',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon;
  const isFeatured = project.featured;

  return (
    <motion.div
      className={`group relative rounded-2xl bg-[#111111] border border-white/[0.06] overflow-hidden
        transition-all duration-500
        hover:-translate-y-1 hover:border-cyan/20
        hover:shadow-[0_0_30px_rgba(0,229,255,0.08),0_8px_32px_rgba(0,0,0,0.4)]
        ${isFeatured ? 'md:col-span-2' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Image Placeholder */}
      <div
        className={`relative h-[200px] bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
      >
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Floating glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-cyan/10 blur-[60px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-cyan/5 blur-[40px] animate-float-slow" />

        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan/30 group-hover:bg-cyan/10 transition-all duration-500">
            <Icon className="w-8 h-8 text-cyan/70 group-hover:text-cyan transition-colors duration-500" />
          </div>
          {isFeatured && (
            <span className="text-xs font-mono tracking-widest uppercase text-cyan/60 border border-cyan/20 rounded-full px-3 py-1 bg-cyan/5">
              Featured Project
            </span>
          )}
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#111111] to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-glow-cyan transition-all duration-500">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs text-muted-foreground bg-white/5 rounded-full px-2.5 py-1 border border-white/[0.04]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Features */}
        <div className="space-y-2 mb-6">
          {project.features.map((f) => (
            <div key={f} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan/60 mt-0.5 shrink-0" />
              <span className="text-sm text-white/60">{f}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
          <a
            href={project.github}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-muted-foreground transition-all duration-300 hover:text-white hover:bg-white/5"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={project.live}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-cyan/10 text-cyan border border-cyan/20 transition-all duration-300 hover:bg-cyan/20 hover:border-cyan/40 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const featuredProject = projects.find((p) => p.featured)!;
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative" ref={ref}>
      <div className="section-container">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          subtitle="A selection of projects that showcase my expertise in data science, machine learning, and AI"
        />

        {/* Featured Project */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ProjectCard project={featuredProject} index={0} />
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {otherProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}