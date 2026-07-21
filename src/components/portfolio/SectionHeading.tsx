'use client';

import AnimatedSection from './AnimatedSection';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  title,
  subtitle,
  label,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 md:mb-20 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {label && (
        <AnimatedSection animation="fadeUp" delay={0}>
          <span className="inline-flex items-center gap-2 text-cyan text-sm font-mono tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-cyan" />
            {label}
            {align === 'center' && <span className="w-8 h-px bg-cyan" />}
          </span>
        </AnimatedSection>
      )}
      <AnimatedSection animation="fadeUp" delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          {title}
        </h2>
      </AnimatedSection>
      {subtitle && (
        <AnimatedSection animation="fadeUp" delay={0.2}>
          <p className={`mt-4 text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}