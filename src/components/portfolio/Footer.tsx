'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:alex.chen@email.com' },
  { icon: Twitter, label: 'Twitter/X', href: '#' },
];

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = useCallback(() => {
    setShowBackToTop(window.scrollY > 500);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="w-full border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12 md:mb-16">
            {/* Logo & tagline */}
            <div>
              <div className="inline-flex items-center gap-1 mb-4">
                <span className="text-cyan text-lg font-mono font-semibold">[</span>
                <span className="text-white text-lg font-bold tracking-tight">AC</span>
                <span className="text-cyan text-lg font-mono font-semibold">]</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Building intelligent solutions through data science &amp; machine
                learning.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest mb-4">
                Navigation
              </p>
              <nav aria-label="Footer navigation" className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-muted-foreground hover:text-white transition-colors duration-300 text-left w-fit"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Social icons */}
            <div>
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest mb-4">
                Connect
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-muted-foreground hover:text-cyan transition-colors duration-300"
                    whileHover={{
                      borderColor: 'rgba(0, 229, 255, 0.3)',
                      boxShadow: '0 0 16px rgba(0, 229, 255, 0.08)',
                    }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ duration: 0.2 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.05] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              &copy; 2025 Alex Chen. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Designed &amp; Built with passion
            </p>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-cyan transition-colors duration-300 cursor-pointer"
            style={{
              boxShadow: '0 0 20px rgba(0, 229, 255, 0.06)',
            }}
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}