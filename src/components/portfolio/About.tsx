'use client';

import { motion } from 'framer-motion';
import { Brain, BarChart3, Sparkles, BookOpen } from 'lucide-react';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import AnimatedSection from './AnimatedSection';
import StaggerGrid from './StaggerGrid';

const highlights = [
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Building predictive models that learn and improve from experience',
  },
  {
    icon: BarChart3,
    title: 'Data Analysis',
    description: 'Uncovering patterns and trends hidden in complex datasets',
  },
  {
    icon: Sparkles,
    title: 'AI Solutions',
    description: 'Designing intelligent systems that automate and optimize',
  },
  {
    icon: BookOpen,
    title: 'Research',
    description: 'Pushing boundaries with cutting-edge research methodologies',
  },
];

export default function About() {
  return (
    <section id="about" className="relative">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />

      <div className="section-container">
        <SectionHeading
          label="Who I Am"
          title="About Me"
          subtitle="Driven by curiosity, powered by data"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Left decorative element */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <AnimatedSection animation="fadeLeft" delay={0.1} duration={0.8}>
              <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px]">
                {/* Large gradient circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan/10 via-cyan/[0.03] to-transparent blur-sm" />
                <div className="absolute inset-0 rounded-full border border-cyan/10" />
                <div className="absolute inset-4 rounded-full border border-white/[0.04]" />
                <div className="absolute inset-8 rounded-full border border-cyan/[0.06]" />

                {/* Central content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-2xl glass-cyan flex items-center justify-center glow-cyan">
                      <Brain className="w-10 h-10 text-cyan" />
                    </div>
                    <p className="text-cyan font-mono text-sm tracking-wider">
                      &lt;data_scientist /&gt;
                    </p>
                  </div>
                </div>

                {/* Orbiting dots */}
                <motion.div
                  className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan/40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '50% 170px' }}
                />
                <motion.div
                  className="absolute top-4 right-1/2 translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan/30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '50% 170px' }}
                />

                {/* Decorative floating elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 rounded-xl border border-cyan/10 animate-float" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full border border-white/[0.06] animate-float-slow" />
              </div>
            </AnimatedSection>
          </div>

          {/* Right bio text */}
          <div className="md:col-span-7">
            <AnimatedSection animation="fadeRight" delay={0.2} duration={0.8}>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-[17px]">
                <p>
                  <span className="text-white font-medium">I&apos;m Alex Chen</span>, a passionate Data
                  Scientist and Data Analyst with over five years of experience
                  turning raw, complex data into strategic, actionable insights. My
                  journey into data science was born from an insatiable curiosity
                  about the stories hidden within numbers and the patterns that
                  shape our world.
                </p>
                <p>
                  I specialize in building end-to-end machine learning pipelines —
                  from data collection and exploratory analysis through model
                  development, evaluation, and deployment. Whether it&apos;s
                  forecasting customer churn, classifying medical images, or
                  optimizing supply-chain logistics, I thrive on problems where
                  data meets real-world impact.
                </p>
                <p>
                  My approach is rooted in both rigor and creativity. I combine
                  classical statistical methods with cutting-edge deep learning
                  architectures, always ensuring that every model I ship is
                  interpretable, reproducible, and aligned with business
                  objectives. I believe the best data science doesn&apos;t just
                  predict — it explains.
                </p>
                <p>
                  Beyond the code, I&apos;m deeply invested in the data science
                  community. I contribute to open-source projects, publish
                  technical articles, and continuously explore emerging areas
                  like generative AI and causal inference to keep my skillset
                  sharp and forward-looking.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Highlight cards */}
        <div className="mt-20 md:mt-24">
          <StaggerGrid
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
            staggerDelay={0.1}
            duration={0.6}
          >
            {highlights.map((item) => (
              <GlassCard key={item.title} className="p-6 md:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-cyan/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
}