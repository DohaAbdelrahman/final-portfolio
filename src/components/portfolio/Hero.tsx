'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import AnimatedSection from './AnimatedSection';
import MagneticButton from './MagneticButton';


const socials = [
  {
    icon: Github,
    href: "https://github.com/DohaAbdelrahman",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/doha-abdelrahman-3540292a5/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:dohaabdo757@gmail.com",
    label: "Email",
  },
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
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const},
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
            Data Science Student passionate about Machine Learning, AI, and Data Analytics. Building practical projects and continuously learning to solve real-world problems with data.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-5 mt-2 mb-12"
          >

            <MagneticButton>
              <a 
              href="https://drive.google.com/file/d/1vlPN2HeH4bDd-tXfGg2ckXORN8nZMT-C/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary">
                <span>Download CV</span>
              </a>
            </MagneticButton>

            <MagneticButton>
              <a href="#contact" className="btn-secondary">
                <span>Let's Connect</span>
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
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-cyan hover:glow-cyan transition-all duration-300 group"
              >
                <social.icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <AnimatedSection
          animation="fadeUp"
          delay={1.2}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex justify-center items-start w-7 h-12 border-2 border-cyan/50 rounded-full p-1"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-cyan"
              animate={{ y: [0, 18, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
            />
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
