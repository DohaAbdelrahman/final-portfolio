import { motion } from 'framer-motion';
import {
  Brain,
  BarChart3,
  Sparkles,
  BookOpen,
  GraduationCap,
  Cpu,
  Database,
} from 'lucide-react';

import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import AnimatedSection from './AnimatedSection';
import StaggerGrid from './StaggerGrid';

const highlights = [
  {
    icon: Sparkles,
    title: 'Data Science',
    description:
      'Transforming data into meaningful insights and practical solutions.',
  },
  {
    icon: BarChart3,
    title: 'Data Analysis',
    description:
      'Exploring datasets, identifying patterns, and creating interactive dashboards.',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description:
      'Building predictive models and experimenting with intelligent algorithms.',
  },
  {
    icon: BookOpen,
    title: 'AI & Computer Vision',
    description:
      'Continuously learning modern AI techniques with a growing interest in Computer Vision.',
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
          subtitle="Exploring data, creating insights, and building intelligent solutions."
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
                      &lt;aspiring_data_scientist /&gt;
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
              <div className="space-y-6">

                <p className="text-muted-foreground leading-relaxed text-base md:text-[17px]">
                  <span className="text-white font-semibold">
                    I&apos;m Doha Abdelrahman
                  </span>
                  , a Computer Science and Information Technology student specializing in
                  <span className="text-cyan"> Data Science</span> at Helwan National
                  University. I&apos;m passionate about exploring data, uncovering
                  patterns, and creating meaningful insights that help solve real-world
                  problems.
                </p>


                <p className="text-muted-foreground leading-relaxed text-base md:text-[17px]">
                  Throughout my academic journey, I have gained hands-on experience in
                  <span className="text-white"> Data Science</span>,
                  <span className="text-white"> Data Analysis</span>, and
                  <span className="text-white"> Machine Learning</span> through projects,
                  internships, and continuous learning. I enjoy analyzing datasets,
                  building dashboards, and developing predictive models to support
                  data-driven decisions.
                </p>


                <p className="text-muted-foreground leading-relaxed text-base md:text-[17px]">
                  Currently, I&apos;m expanding my knowledge in
                  <span className="text-cyan"> Artificial Intelligence</span> and
                  <span className="text-cyan"> Computer Vision</span>, while improving my
                  technical and problem-solving skills. My goal is to grow as a Data
                  Scientist and create impactful solutions using data and AI.
                </p>

              </div>


              {/* Quick Facts */}
              <div className="mt-8">
                <GlassCard className="p-6">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">


                    {/* Education */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-cyan" />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-cyan/80">
                          Education
                        </p>

                        <p className="text-white font-medium mt-1">
                          Computer Science & Information Technolegy
                        </p>
                      </div>
                    </div>



                    {/* Specialization */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center">
                        <Database className="w-5 h-5 text-cyan" />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-cyan/80">
                          Specialization
                        </p>

                        <p className="text-white font-medium mt-1">
                          Data Science
                        </p>
                      </div>
                    </div>



                    {/* Core Focus */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-cyan" />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-cyan/80">
                          Core Focus
                        </p>

                        <p className="text-white font-medium mt-1">
                          Data Analysis
                        </p>
                      </div>
                    </div>



                    {/* Interests */}
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center">
                        <Cpu className="w-5 h-5 text-cyan" />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-cyan/80">
                          Interests
                        </p>

                        <p className="text-white font-medium mt-1">
                          AI & Computer Vision
                        </p>
                      </div>
                    </div>


                  </div>

                </GlassCard>
              </div>


            </AnimatedSection>
          </div>
          {/* Highlight cards */}
          <div className="mt-16 md:mt-16">
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
        </div> {/* grid */}
      </div>   {/* section-container */}
    </section>
  );
}