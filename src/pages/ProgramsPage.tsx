import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Landmark, MessageSquare, Plus, X, ArrowLeft, Sparkles, HelpCircle, ExternalLink } from 'lucide-react';

// Unified error-proof data structure with custom registration links
const primaryPrograms = [
  {
    id: 'tark-shastra-yuva-sansad',
    title: 'TARK Shastra Yuva Sansad',
    badge: 'Featured Program',
    description: 'A prestigious two-day Youth Parliament bringing together aspiring leaders to engage in thoughtful simulations of democratic institutions.',
    image: '/TSYS.png', 
    icon: Landmark,
    formUrl: 'https://forms.google.com/...YOUR_YOUTH_PARLIAMENT_FORM_ID...', // Replace with your actual Google Form URL
    buttonText: 'Completed',
    status: false,
    details: {
      overview: 'Tark Shastra Yuva Sansad was a two-day Youth Parliament held on 2nd and 3rd May 2026 at Shyam Lal College (Evening), University of Delhi. Anchored by NJLRII (National Journal for Legal Research and Innovative Ideas), the initiative provided a structured platform for participants to debate, deliberate upon, and present well-informed perspectives on social, political, economic, and environmental challenges.',
      sectionOneTitle: 'Objectives & Vision',
      sectionOneItems: [
        'Cultivate critical thinking, analytical reasoning, and effective public communication among students.',
        'Familiarise participants with the functioning of democratic institutions and legislative procedures.',
        'Bridge the gap between academic knowledge and civic participation by providing a realistic parliamentary environment.'
      ],
      sectionTwoTitle: 'Participating Committees',
      sectionTwoTags: ['Lok Sabha', 'Rajya Sabha', 'AIPPM', 'UNGA', 'National Press Committee'],
      footerText: 'Through constructive debate and collaborative deliberation, the conference fostered values of mutual respect, inclusivity, ethical leadership, and responsible civic participation.'
    }
  },
  {
    id: 'tark-vyuh',
    title: 'TARK Vyuh 6.0',
    badge: 'Upcoming Event',
    description: 'An elite online debate competition challenging young minds to engage with pressing social, ethical, and technological motions.',
    image: '/tark_vyuh.png', 
    icon: MessageSquare,
    formUrl: 'https://forms.google.com/...YOUR_TARK_VYUH_FORM_ID...', // Replace with your actual Google Form URL
    buttonText: 'Registration Open',
    status: true,
    details: {
      overview: 'TARK VYUH is an upcoming online debate competition organised in collaboration with NJLRII, taking place on the 22nd and 23rd of August, 2026. The event provides an immersive digital platform for participants to challenge perspectives, engage in meaningful discourse, and strengthen key public speaking assets.',
      sectionOneTitle: 'Core Objectives',
      sectionOneItems: [
        'Cultivate a widespread culture of critical thinking, rational inquiry, and logical debate among youth.',
        'Develop absolute confidence to express complex ideas and approach conflicting perspectives with empathy.',
        'Build an interconnected community committed to reason, collaborative leadership, and positive civic change.'
      ],
      sectionTwoTitle: 'Debate Motions & Topics',
      sectionTwoTags: [
        'THBT the platform economy creates more precarity than opportunity for workers.',
        'THBT the use of AI in criminal justice poses a greater threat to justice than it offers benefits.',
        'THBT governments should be held accountable for failing to protect women from gender-based violence.',
        'THBT individual identity is shaped more by social conditioning than by personal autonomy.',
        'THBT reservation policies should continue in competitive examinations.'
      ],
      footerText: 'By encouraging highly informed discussion, TARK VYUH aspires to empower youth to transform thoughtful ideas into real-world meaningful impact.'
    }
  },
  {
    id: 'future-initiatives',
    title: 'Future Initiatives',
    badge: 'Coming Soon',
    description: 'Expanding our educational horizons to introduce specialized learning disciplines across regional and international landscapes.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop',
    icon: Plus,
    formUrl: '', // Left empty intentionally as it is an upcoming track
    buttonText: 'Coming Soon',
    status: false,
    details: {
      overview: 'We are continuously working behind the scenes to expand our academic and practical training architectures. These upcoming tracks aim to explore structural diplomacy, legal methodology, and advanced governance dynamics.',
      sectionOneTitle: 'What to Expect',
      sectionOneItems: [
        'Immersive simulations focusing on multi-lateral international frameworks.',
        'Hands-on guidance regarding analytical policy draftings and legal frameworks.',
        'Direct mentoring circles alongside accomplished industry professionals.'
      ],
      sectionTwoTitle: 'Planned Frameworks',
      sectionTwoTags: ['Model United Nations', 'Legal Research Programs', 'Policy Workshops', 'Leadership Bootcamps'],
      footerText: 'Our long-term commitment remains centered entirely on nurturing informed, rational, and socially conscious leaders ready to contribute to public discourse.'
    }
  }
];

export const ProgramsPage = () => {
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeModal]);

  return (
    <section className="min-h-screen bg-tark-navy text-white py-16 px-6 md:px-12 relative overflow-x-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-tark-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Navigation Row */}
        <div className="mb-12">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-tark-gold hover:text-yellow-500 transition-colors text-sm font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </a>
        </div>

        {/* Header Intro */}
        <div className="max-w-2xl mb-20">
          <h1 className="text-4xl md:text-5xl font-serif text-white leading-tight">
            Nurturing Thinkers & <br />
            <span className="text-tark-gold italic font-medium">Rational Leaders</span>
          </h1>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {primaryPrograms.map((program, idx) => {
            const IconComponent = program.icon || HelpCircle;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveModal(program)}
                className="group cursor-pointer bg-[#0f1e36] hover:bg-[#132542] rounded-3xl p-6 border border-white/5 hover:border-tark-gold/30 transition-all duration-300 flex flex-col justify-between shadow-xl relative overflow-hidden"
              >
                <div>
                  {/* Media Mask */}
                  <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/5 relative bg-tark-navy">
                    <div className="absolute inset-0 bg-tark-navy/30 group-hover:bg-transparent transition-colors duration-300 z-10" />
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500"
                    />
                  </div>

                  <span className="inline-block bg-tark-gold/5 border border-tark-gold/30 text-tark-gold text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md mb-4">
                    {program.badge}
                  </span>

                  <h3 className="text-2xl font-serif font-medium text-white group-hover:text-tark-gold transition-colors mb-3">
                    {program.title}
                  </h3>

                  <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                    {program.description}
                  </p>
                </div>

                <div>
                  {/* Action Button: Form Link (Card Level) */}
                  {program.status ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents layout from opening popup modal simultaneously
                        window.open(program.formUrl, '_blank', 'noopener,noreferrer');
                      }}
                      className="w-full mb-6 bg-tark-gold hover:bg-yellow-500 text-tark-navy font-semibold py-3 px-4 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform active:scale-[0.98]"
                    >
                      {program.buttonText}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <div className="w-full mb-6 bg-white/5 text-white/40 font-medium py-3 px-4 rounded-xl text-xs text-center border border-white/5 cursor-not-allowed">
                      {program.buttonText}
                    </div>
                  )}

                  {/* Micro Action Bar */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-tark-gold transition-colors">
                      Learn More / Details
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-tark-gold group-hover:text-tark-navy text-white transition-all">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Details Modal Popup Window */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-[#0b1b3d] border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-2xl z-10"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 z-30 w-9 h-9 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="overflow-y-auto p-6 md:p-10 space-y-8 pb-24">
                
                {/* Header Context Banner */}
                <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <span className="text-tark-gold text-[10px] font-bold uppercase tracking-widest block mb-2">
                      {activeModal?.badge}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-white">
                      {activeModal?.title}
                    </h2>
                  </div>
                  
                  {/* Action Button: Form Link (Popup Window Level) */}
                  {activeModal?.status ? (
                    <button
                      onClick={() => window.open(activeModal.formUrl, '_blank', 'noopener,noreferrer')}
                      className="inline-flex items-center justify-center gap-2 bg-tark-gold hover:bg-yellow-500 text-tark-navy font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg transform active:scale-95 whitespace-nowrap self-start md:self-center"
                    >
                      Fill Participation Form
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  ) : (
                    <div className="inline-flex items-center justify-center gap-2 bg-white/5 text-white/40 font-medium px-6 py-3.5 rounded-xl text-sm border border-white/5 cursor-not-allowed whitespace-nowrap self-start md:self-center">
                      {activeModal?.buttonText}
                    </div>
                  )}
                </div>

                {/* Detailed Overview */}
                <div className="space-y-3">
                  <h4 className="text-tark-gold text-xs font-bold uppercase tracking-widest">Program Overview</h4>
                  <p className="text-white/80 text-sm md:text-base font-light leading-relaxed">
                    {activeModal?.details?.overview}
                  </p>
                </div>

                {/* Adaptive Grid Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                  {activeModal?.details?.sectionOneItems && (
                    <div className="space-y-4">
                      <h4 className="text-tark-gold text-xs font-bold uppercase tracking-widest">
                        {activeModal?.details?.sectionOneTitle || 'Key Parameters'}
                      </h4>
                      <ul className="space-y-3">
                        {activeModal.details.sectionOneItems.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-white/70 font-light leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-tark-gold mt-1.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeModal?.details?.sectionTwoTags && (
                    <div className="space-y-4">
                      <h4 className="text-tark-gold text-xs font-bold uppercase tracking-widest">
                        {activeModal?.details?.sectionTwoTitle || 'Classifications'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeModal.details.sectionTwoTags.map((tag, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white/90 font-medium tracking-wide shadow-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Impact Frame */}
                {activeModal?.details?.footerText && (
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 md:p-6 text-center mt-4">
                    <p className="text-white/60 text-xs md:text-sm font-light italic leading-relaxed">
                      {activeModal.details.footerText}
                    </p>
                  </div>
                )}

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};