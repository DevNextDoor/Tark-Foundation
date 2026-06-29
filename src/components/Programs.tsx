import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Scale, BookOpen, Users } from 'lucide-react';

const primaryPrograms = [
  {
    id: 'mock-trials',
    title: 'Mock Trials',
    description: 'Experience the intensity of a real courtroom. Develop cross-examination skills and master the art of trial advocacy.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop',
    icon: Scale
  },
  {
    id: 'moot-courts',
    title: 'Moot Courts',
    description: 'Draft memorials and present oral arguments before simulated appellate courts on complex legal issues.',
    image: '/legal1.png',
    icon: BookOpen,
    isActive: true // Card 2 active layout
  },
  {
    id: 'mock-debates',
    title: 'Mock Debates',
    description: 'Sharpen your rhetorical skills and logical reasoning through structured, competitive parliamentary debates.',
    image: '/debate.png',
    icon: Users
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
              Advance Your Legal Skills <br />
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
                    <span className="text-xs uppercase font-bold tracking-widest text-tark-navy/60 block mb-2">Featured Program</span>
                    <h3 className="text-2xl font-serif font-bold text-tark-navy mb-4">
                      {program.title}
                    </h3>
                    <p className="text-tark-navy/90 text-sm leading-relaxed mb-6 font-light">
                      {program.description}
                    </p>
                    <a
                      href="#journey"
                      className="inline-flex items-center gap-1 text-sm font-bold text-tark-navy hover:gap-2 transition-all"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="aspect-[1.6] w-full rounded-2xl overflow-hidden mt-8 shadow-inner border border-tark-navy/10">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              );
            }

            // Standard Dark Card Layout (Image top, Title bottom)
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[1.6] w-full rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <h3 className="text-xl font-serif font-semibold text-white">
                    {program.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-tark-gold group-hover:text-tark-navy transition-colors">
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