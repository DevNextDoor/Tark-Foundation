import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Landmark, MessageSquare, Plus } from 'lucide-react';

const primaryPrograms = [
  {
    id: 'tark-shastra-yuva-sansad',
    title: 'TARK Shastra Yuva Sansad',
    description: 'A two-day Youth Parliament bringing together aspiring young leaders to debate important national and global issues through structured parliamentary simulations.',
    image: '/debate.png',
    icon: Landmark,
    isActive: true,
    objectives: ['Critical thinking', 'Public speaking', 'Democratic awareness', 'Legislative understanding', 'Leadership development'],
    committees: ['Lok Sabha', 'Rajya Sabha', 'AIPPM', 'UNGA', 'National Press'],
    impact: 'Students gain confidence, analytical ability, teamwork, policy understanding, and civic awareness.'
  },
  {
    id: 'tark-vyuh',
    title: 'TARK Vyuh',
    description: 'An online debate competition where students challenge ideas through structured reasoning and intellectual discussion.',
    image: '/legal1.png',
    icon: MessageSquare,
    objectives: ['Rational inquiry', 'Public speaking', 'Confidence', 'Global awareness', 'Responsible citizenship'],
    topics: ['Platform economy and workers', 'AI in criminal justice', 'Government accountability', 'Gender-based violence', 'Identity and social conditioning', 'Reservation policies']
  },
  {
    id: 'future-initiatives',
    title: 'Future Initiatives',
    description: 'Expanding our educational platforms to nurture rational leaders across diverse disciplines.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop',
    icon: Plus,
    isFuture: true,
    upcoming: ['Model United Nations', 'Legal Research Programs', 'Policy Workshops', 'Leadership Bootcamps']
  }
];

export const Programs = () => {
  return (
    <section id="programs" className="py-32 bg-tark-navy text-white relative overflow-hidden">
      {/* Background soft glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tark-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 text-tark-gold text-xs font-bold uppercase tracking-wider mb-6 border border-white/10"
            >
              <div className="flex gap-0.5 items-center">
                <span className="w-1.5 h-3 bg-tark-gold rounded-l-full block"></span>
                <span className="w-1.5 h-3 bg-white rounded-r-full block"></span>
              </div>
              <span>Our Programs</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-serif text-white leading-tight"
            >
              Nurturing Thinkers & Leaders <br />
              with <span className="text-tark-gold italic font-medium">Our Programs</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="#journey"
              className="group inline-flex items-center gap-2 bg-white text-tark-navy px-8 py-3.5 rounded-full font-semibold hover:bg-tark-gold transition-all duration-300 shadow-md text-sm"
            >
              View Our Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* 3-Column Custom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {primaryPrograms.map((program, index) => {
            if (program.isActive) {
              // Active Gold Card Layout (Text top, Image bottom)
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-tark-gold text-tark-navy p-8 rounded-3xl shadow-2xl flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 relative border border-tark-gold/30"
                >
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-tark-navy/60 block mb-2">Featured Program</span>
                    <h3 className="text-2xl font-serif font-bold text-tark-navy mb-4">
                      {program.title}
                    </h3>
                    <p className="text-tark-navy/90 text-sm leading-relaxed mb-4 font-light">
                      {program.description}
                    </p>

                    {program.objectives && (
                      <div className="mb-4">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-tark-navy/70 block mb-1">Objectives:</span>
                        <ul className="text-xs text-tark-navy/90 list-disc pl-4 space-y-0.5">
                          {program.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
                        </ul>
                      </div>
                    )}

                    {program.committees && (
                      <div className="mb-4">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-tark-navy/70 block mb-1.5">Committees:</span>
                        <div className="flex flex-wrap gap-1">
                          {program.committees.map((com, i) => (
                            <span key={i} className="text-[9px] bg-tark-navy/10 border border-tark-navy/20 px-2 py-0.5 rounded font-semibold">{com}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {program.impact && (
                      <div className="mb-4">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-tark-navy/70 block mb-1">Impact:</span>
                        <p className="text-xs text-tark-navy/95 leading-relaxed font-light">{program.impact}</p>
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="aspect-[2] w-full rounded-2xl overflow-hidden mt-4 shadow-inner border border-tark-navy/10">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="mt-6 pt-4 border-t border-tark-navy/10 flex items-center justify-between">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-tark-navy hover:gap-2.5 transition-all"
                      >
                        Learn more
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <div className="w-8 h-8 rounded-full bg-tark-navy/10 flex items-center justify-center">
                        <program.icon className="w-4 h-4 text-tark-navy" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }

            // Standard Dark Card Layout (Image top, Content middle, Title bottom)
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="aspect-[2] w-full rounded-2xl overflow-hidden shadow-md mb-6">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>

                  {program.isFuture && (
                    <span className="text-[9px] uppercase font-bold tracking-widest text-tark-gold bg-tark-gold/10 px-2 py-0.5 rounded border border-tark-gold/20 inline-block mb-3">Coming Soon</span>
                  )}

                  <h3 className="text-xl font-serif font-semibold text-white mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-400 text-xs font-light leading-relaxed mb-4">
                    {program.description}
                  </p>

                  {program.objectives && (
                    <div className="mb-4">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-tark-gold/80 block mb-1">Objectives:</span>
                      <ul className="text-xs text-gray-300 list-disc pl-4 space-y-0.5">
                        {program.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
                      </ul>
                    </div>
                  )}

                  {program.topics && (
                    <div className="mb-4">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-tark-gold/80 block mb-1.5">Sample Topics:</span>
                      <div className="flex flex-wrap gap-1">
                        {program.topics.map((top, i) => (
                          <span key={i} className="text-[9px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-300">{top}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {program.upcoming && (
                    <div className="mb-4">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-tark-gold/80 block mb-2">Initiatives:</span>
                      <div className="grid grid-cols-2 gap-2">
                        {program.upcoming.map((init, i) => (
                          <div key={i} className="text-[10px] bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-lg text-gray-300 font-medium text-center">
                            {init}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-tark-gold hover:gap-2.5 transition-all"
                  >
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-tark-gold group-hover:text-tark-navy transition-colors">
                    <program.icon className="w-4 h-4 text-white group-hover:text-tark-navy" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};