import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const stats = [
  { value: '5000+', label: 'Students Engaged' },
  { value: '100+', label: 'Educational Institutions' },
  { value: '50+', label: 'Programs Conducted' },
  { value: '25+', label: 'Strategic Partners' }
];

const ProgressBar = ({ label, percentage }: { label: string; percentage: number }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-semibold text-tark-navy">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="h-full bg-tark-blue rounded-full relative"
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-tark-gold border-2 border-white rounded-full shadow-sm" />
        </motion.div>
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">

        {/* Section Header: Centered */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-tark-gold/15 text-tark-navy text-xs font-bold uppercase tracking-wider mb-6 border border-tark-gold/20"
          >
            <div className="flex gap-0.5 items-center">
              <span className="w-1.5 h-3 bg-tark-gold rounded-l-full block"></span>
              <span className="w-1.5 h-3 bg-tark-navy rounded-r-full block"></span>
            </div>
            <span>Our Origin</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-tark-navy leading-tight"
          >
            Cultivating the Discipline of <br className="hidden md:block" />
            <span className="text-tark-blue italic font-medium">Reasoned Leadership.</span>
          </motion.h2>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="grid grid-cols-12 gap-4 items-center">
              {/* Top Left Image */}
              <div className="col-span-8 rounded-2xl overflow-hidden shadow-md aspect-[4/3] border border-gray-150">
                <img
                  src="/debate.png"
                  alt="Students debating"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Top Right Decorative Widget */}
              <div className="col-span-4 flex flex-col items-center justify-center gap-6">
                {/* Double semicircle widget */}
                <div className="relative w-16 h-16 flex flex-col gap-1 items-center justify-center opacity-70">
                  <div className="w-16 h-7 bg-tark-gold/15 rounded-t-full border-t border-x border-tark-gold/30" />
                  <div className="w-16 h-7 bg-tark-gold/15 rounded-b-full border-b border-x border-tark-gold/30" />
                </div>

                {/* Spinning sticker */}
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <motion.svg
                    animate={{ rotate: 360 }}
                    transition={{ ease: 'linear', duration: 10, repeat: Infinity }}
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <path id="aboutTextPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                    </defs>
                    <text className="text-[9px] font-bold fill-tark-blue tracking-[0.1em] uppercase">
                      <textPath xlinkHref="#aboutTextPath">TARK • LEADERSHIP • </textPath>
                    </text>
                  </motion.svg>
                  <div className="absolute w-8 h-8 bg-tark-navy rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white text-xs font-bold">★</span>
                  </div>
                </div>
              </div>

              {/* Bottom Full Image */}
              <div className="col-span-12 rounded-2xl overflow-hidden shadow-lg aspect-[16/9] border border-gray-150 mt-2">
                <img
                  src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop"
                  alt="Courtroom Advocacy"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative, Progress Bars & Button */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-4 text-gray-600 leading-relaxed font-light text-base">
              <p>
                Every generation inherits a world it did not build and is asked to improve it. Yet today’s young people are surrounded by information while having fewer opportunities for meaningful dialogue and rational discussion.
              </p>
              <p className="font-semibold text-tark-blue">
                TARK Foundation was established to change that.
              </p>
              <p>
                We believe leadership is not a title earned at the end of a competition but a discipline built through preparation, thoughtful reasoning, respectful disagreement, and intellectual honesty.
              </p>
            </div>

            {/* Custom Progress Bars */}
            <div className="space-y-4 pt-2">
              <ProgressBar label="Critical Thinking" percentage={95} />
              <ProgressBar label="Rational Argumentation" percentage={90} />
              <ProgressBar label="Diplomacy & Leadership" percentage={85} />
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="/origin"
                className="group inline-flex items-center gap-2 bg-tark-navy text-white px-8 py-3.5 rounded-full font-medium hover:bg-tark-gold hover:text-tark-navy transition-all duration-300 shadow-md text-sm"
              >
                Read Our Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Stats Row (Bottom of Section) */}
        <div id="impact" className="mt-28 border-t border-gray-100 pt-16 scroll-mt-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-2xl font-serif text-tark-navy mb-4">Our Impact</h3>
            <p className="text-gray-600 leading-relaxed font-light text-base max-w-2xl mx-auto">
              Our impact is measured not simply through numbers but through the confidence students build, the quality of ideas they develop, and the communities they strengthen. Every event helps participants become more thoughtful, informed, and responsible citizens.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center px-4"
              >
                {/* Visual double-circle divider badge */}
                {index > 0 && (
                  <div className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white py-1">
                    <div className="flex gap-0.5 items-center bg-tark-gold/15 p-1 rounded-full border border-tark-gold/25">
                      <span className="w-2 h-2 rounded-full bg-tark-gold block"></span>
                      <span className="w-2 h-2 rounded-full bg-tark-navy block"></span>
                    </div>
                  </div>
                )}
                {/* Side line on desktop */}
                {index > 0 && (
                  <div className="hidden md:block absolute left-0 top-2 bottom-2 w-px bg-gray-100 -translate-x-1/2" />
                )}

                <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-tark-navy mb-2 font-bold">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};