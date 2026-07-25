'use client';

import { motion } from 'framer-motion';
import { FolderGit2, Award, Clock, Code2, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import AnimatedSection from './AnimatedSection';
import MagneticButton from './MagneticButton';

const stats = [
  { icon: FolderGit2, number: '15+', label: 'Projects' },
  { icon: Award, number: '12', label: 'Certifications' },
  { icon: Clock, number: '5+', label: 'Years' },
  { icon: Code2, number: '20+', label: 'Technologies' },
];

const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient"
    >
      {/* Particle system */}
      <ParticleCanvas
        particleCount={60}
        className="z-[1]"
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg z-[2]" />

      {/* Floating geometric shapes */}
      <div className="absolute top-[15%] left-[8%] w-20 h-20 rounded-full border border-white/[0.04] animate-float z-[2]" />
      <div className="absolute top-[25%] right-[12%] w-14 h-14 rounded-lg border border-white/[0.04] animate-float-slow z-[2] rotate-45" />
      <div className="absolute bottom-[20%] left-[15%] w-10 h-10 rounded-full border border-cyan/[0.08] animate-float-reverse z-[2]" />
      <div className="absolute bottom-[30%] right-[8%] w-24 h-24 rounded-full border border-white/[0.03] animate-float-slow z-[2]" />
      <div className="absolute top-[60%] left-[5%] w-8 h-8 rounded border border-cyan/[0.06] animate-float z-[2] rotate-12" />
      <div className="absolute top-[10%] right-[30%] w-6 h-6 rounded-full border border-white/[0.05] animate-float-reverse z-[2]" />

      {/* Radial glow behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-cyan/[0.03] blur-[120px] z-[2] pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 w-full section-container flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >

          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/5 px-4 py-2"
          >
            <span className="text-xl">👋</span>
            <span className="text-sm uppercase tracking-[0.2em] text-cyan">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4"
          >
            Doha{' '}
            <span className="text-cyan text-glow-cyan">Abdelrahman</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="w-40 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent mb-6"
          />

         {/* Title */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-6 text-lg md:text-xl font-medium"
        >
          <span className="text-cyan font-bold">Data Science</span>

          <span className="text-white/30">|</span>

          <span className="text-white">Data Analysis</span>

          <span className="text-white/30">|</span>

          <span className="text-white">Machine Learning</span>
        </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10"
          >
            Transforming complex data into intelligent, actionable insights
            that drive innovation.
          </motion.p>

          {/* Stat cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-2xl mb-10"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-xl p-3 sm:p-4 text-center group hover:animate-pulse-glow transition-all duration-300"
              >
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-xl sm:text-2xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10"
          >
            <MagneticButton>
              <a href="#projects" className="btn-primary">
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a href="#" className="btn-secondary">
                <span>Download Resume</span>
              </a>
            </MagneticButton>

            <MagneticButton>
              <a href="#contact" className="btn-secondary">
                <span>Contact Me</span>
              </a>
            </MagneticButton>
          </motion.div>

          {/* Social icons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4"
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-cyan hover:glow-cyan transition-all duration-300 group"
              >
                <social.icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <AnimatedSection animation="fadeUp" delay={1.2} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-muted-foreground/50"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
