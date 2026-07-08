import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Landmark, MessageSquare, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const detailedPrograms = [
  {
    id: 'tark-shastra-yuva-sansad',
    title: 'TARK Shastra Yuva Sansad',
    description: 'A two-day Youth Parliament bringing together aspiring young leaders to debate important national and global issues through structured parliamentary simulations.',
    image: '/debate.png',
    icon: Landmark,
    isActive: true,
    objectives: ['Critical thinking & analytical reasoning', 'Structured public speaking & debate', 'Democratic awareness & legislative insight', 'Understanding bill drafting & policies', 'Leadership & negotiation development'],
    committees: ['Lok Sabha', 'Rajya Sabha', 'AIPPM', 'UNGA', 'National Press'],
    impact: 'Students gain confidence, analytical ability, teamwork, policy understanding, and deep civic awareness.'
  },
  {
    id: 'tark-vyuh',
    title: 'TARK Vyuh',
    description: 'An online debate competition where students challenge ideas through structured reasoning and intellectual discussion.',
    image: '/legal1.png',
    icon: MessageSquare,
    objectives: ['Rational inquiry & critical evaluation', 'Debating complex social & economic topics', 'Confidence building & structured refutation', 'Global awareness & current affairs', 'Responsible citizenship & civic dialogue'],
    topics: ['Platform economy and workers', 'AI in criminal justice', 'Government accountability', 'Gender-based violence', 'Identity and social conditioning', 'Reservation policies']
  },
  {
    id: 'future-initiatives',
    title: 'Future Initiatives',
    description: 'Expanding our educational platform to nurture rational leaders across diverse fields of scholarship and diplomacy.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop',
    icon: Plus,
    isFuture: true,
    upcoming: ['Model United Nations', 'Legal Research Programs', 'Policy Workshops', 'Leadership Bootcamps']
  }
];

export const ProgramsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-tark-navy text-white min-h-screen">
      {/* Page Header */}
      <div className="pt-48 pb-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-radial from-tark-gold/15 via-transparent to-transparent opacity-70 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 text-tark-gold text-xs font-bold uppercase tracking-wider mb-6 border border-white/10">
            Academics
          </span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight">Educational Programs</h1>
          <p className="text-gray-300 font-light max-w-xl mx-auto mt-4 text-sm md:text-base">
            Structured simulations, debates, and policy learning designed to build the next generation of rational leaders.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-tark-navy relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <a href="#/" className="inline-flex items-center gap-2 text-tark-gold hover:text-white font-semibold mb-12 group transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </a>

            {/* In-depth Programs Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {detailedPrograms.map((program, index) => {
                return (
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/10 flex flex-col justify-between hover:bg-tark-gold hover:border-tark-gold hover:-translate-y-1 transition-all duration-300"
                  >
                    <div>
                      <div className="aspect-[2] w-full rounded-2xl overflow-hidden shadow-md mb-6 border border-white/5 group-hover:border-tark-navy/20 transition-colors">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>

                      {program.isActive && (
                        <span className="text-[10px] uppercase font-bold tracking-widest text-tark-gold bg-tark-gold/10 px-2.5 py-1 rounded border border-tark-gold/20 inline-block mb-3 group-hover:bg-tark-navy/10 group-hover:text-tark-navy group-hover:border-tark-navy/20 transition-colors">Featured Program</span>
                      )}
                      {program.isFuture && (
                        <span className="text-[10px] uppercase font-bold tracking-widest text-tark-gold bg-tark-gold/10 px-2.5 py-1 rounded border border-tark-gold/20 inline-block mb-3 group-hover:bg-tark-navy/10 group-hover:text-tark-navy group-hover:border-tark-navy/20 transition-colors">Coming Soon</span>
                      )}

                      <h3 className="text-xl font-serif font-semibold text-white group-hover:text-tark-navy mb-3 transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-tark-navy/90 text-xs font-light leading-relaxed mb-6 transition-colors">
                        {program.description}
                      </p>

                      {program.objectives && (
                        <div className="mb-6">
                          <span className="text-xs uppercase font-bold tracking-wider text-tark-gold/80 group-hover:text-tark-navy/70 block mb-2 transition-colors">Objectives:</span>
                          <ul className="text-xs text-gray-300 group-hover:text-tark-navy/90 list-disc pl-4 space-y-1 transition-colors">
                            {program.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
                          </ul>
                        </div>
                      )}

                      {program.committees && (
                        <div className="mb-6">
                          <span className="text-xs uppercase font-bold tracking-wider text-tark-gold/80 group-hover:text-tark-navy/70 block mb-2.5 transition-colors">Committees:</span>
                          <div className="flex flex-wrap gap-1.5">
                            {program.committees.map((com, i) => (
                              <span key={i} className="text-[10px] bg-white/5 border border-white/10 px-2.5 py-1 rounded text-gray-300 group-hover:bg-tark-navy/10 group-hover:border-tark-navy/20 group-hover:text-tark-navy font-semibold transition-colors">{com}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {program.topics && (
                        <div className="mb-6">
                          <span className="text-xs uppercase font-bold tracking-wider text-tark-gold/80 group-hover:text-tark-navy/70 block mb-2.5 transition-colors">Sample Topics:</span>
                          <div className="flex flex-wrap gap-1.5">
                            {program.topics.map((top, i) => (
                              <span key={i} className="text-[10px] bg-white/5 border border-white/10 px-2.5 py-1 rounded text-gray-300 group-hover:bg-tark-navy/10 group-hover:border-tark-navy/20 group-hover:text-tark-navy font-semibold transition-colors">{top}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {program.upcoming && (
                        <div className="mb-6">
                          <span className="text-xs uppercase font-bold tracking-wider text-tark-gold/80 group-hover:text-tark-navy/70 block mb-3 transition-colors">Initiatives:</span>
                          <div className="grid grid-cols-2 gap-2">
                            {program.upcoming.map((init, i) => (
                              <div key={i} className="text-[10px] bg-white/5 border border-white/10 px-3 py-2.5 rounded-lg text-gray-300 group-hover:bg-tark-navy/10 group-hover:border-tark-navy/20 group-hover:text-tark-navy font-semibold text-center transition-colors">
                                {init}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {program.impact && (
                        <div className="mb-6">
                          <span className="text-xs uppercase font-bold tracking-wider text-tark-gold/80 group-hover:text-tark-navy/70 block mb-2 transition-colors">Impact:</span>
                          <p className="text-xs text-gray-300 group-hover:text-tark-navy/95 leading-relaxed font-light transition-colors">{program.impact}</p>
                        </div>
                      )}
                    </div>

                    <div className="mt-8 pt-4 border-t border-white/10 group-hover:border-tark-navy/10 flex items-center justify-between transition-colors">
                      <a
                        href={`mailto:info@tarkfoundation.org?subject=Inquiry regarding ${program.title}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-tark-gold group-hover:text-tark-navy hover:gap-2.5 transition-all"
                      >
                        Inquire Now
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-tark-navy/10 transition-colors">
                        <program.icon className="w-4 h-4 text-white group-hover:text-tark-navy" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProgramsPage;
