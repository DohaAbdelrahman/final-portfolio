'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle2,
  Loader2,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import AnimatedSection from './AnimatedSection';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'alex.chen@email.com',
    href: 'mailto:alex.chen@email.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: undefined,
  },
  {
    icon: Clock,
    label: 'Availability',
    value: 'Open to opportunities',
    href: undefined,
  },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter/X', href: '#' },
  { icon: Mail, label: 'Kaggle', href: '#' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSent(true);

    // Reset after a few seconds
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const inputClasses =
    'w-full bg-white/[0.05] border border-white/[0.1] rounded-xl text-white placeholder:text-muted-foreground px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-cyan/50 focus:ring-1 focus:ring-cyan/20';

  return (
    <section id="contact" className="relative grid-bg overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-32 right-16 w-48 h-48 bg-cyan/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-cyan/[0.03] rounded-full blur-[80px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          label="Get in Touch"
          title="Let's Connect"
          subtitle="Have a project in mind or want to discuss data science opportunities? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left column - Contact info */}
          <div className="flex flex-col gap-6">
            <AnimatedSection animation="fadeRight" delay={0.2}>
              <div className="flex flex-col gap-4">
                {contactInfo.map((item) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl"
                    whileHover={{
                      borderColor: 'rgba(0, 229, 255, 0.2)',
                      y: -1,
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center">
                      <item.icon className="w-4.5 h-4.5 text-cyan" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm text-white font-medium">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Social links */}
            <AnimatedSection animation="fadeRight" delay={0.35}>
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest mb-3">
                Follow me
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-muted-foreground hover:text-cyan transition-colors duration-300"
                    whileHover={{
                      borderColor: 'rgba(0, 229, 255, 0.3)',
                      boxShadow: '0 0 20px rgba(0, 229, 255, 0.1)',
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <social.icon className="w-4.5 h-4.5" />
                  </motion.a>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right column - Contact form */}
          <AnimatedSection animation="fadeLeft" delay={0.25}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs text-muted-foreground font-mono mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs text-muted-foreground font-mono mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs text-muted-foreground font-mono mb-2"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, subject: e.target.value }))
                  }
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs text-muted-foreground font-mono mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                  className={`${inputClasses} resize-none min-h-[120px]`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSent}
                className="w-full btn-primary flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : isSent ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}