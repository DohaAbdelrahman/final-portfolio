'use client';

import { useRef, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
  spotlight?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  glowOnHover = true,
  spotlight = true,
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15 };
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-5, 5]), springConfig);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

  const spotlightX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const spotlightY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-2xl glass ${glowOnHover ? 'transition-shadow duration-500 hover:glow-cyan' : ''} ${className}`}
      style={{ x, y, rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {spotlight && (
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(300px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(0,229,255,0.06), transparent 60%)`,
            '--spotlight-x': spotlightX,
            '--spotlight-y': spotlightY,
          } as React.CSSProperties}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}