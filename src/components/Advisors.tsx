import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const advisors = [
  {
    name: 'Prof. Charles Vance',
    role: 'Senior Academic Advisor',
    institution: 'Former Dean of Law & Legal Philosophy Scholar',
    imageBg: 'bg-tark-navy/10'
  },
  {
    name: 'Hon. Justice Vikram Mehta',
    role: 'Constitutional Mentor',
    institution: 'Retd. High Court Judge & Judicial Lecturer',
    imageBg: 'bg-tark-gold/10'
  },
  {
    name: 'Dr. Ananya Sen',
    role: 'Public Policy Advisor',
    institution: 'Director of Policy Research & Governance Analyst',
    imageBg: 'bg-tark-blue/10'
  },
  {
    name: 'Ms. Sarah Jenkins',
    role: 'Diplomacy & Advocacy Coach',
    institution: 'International Relations Fellow & Rhetoric Coach',
    imageBg: 'bg-tark-navy/10'
  }
];

export const Advisors = () => {
  return (
    <section id="advisors" className="py-24 bg-white relative scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-tark-gold/15 text-tark-navy text-xs font-bold uppercase tracking-wider mb-6 border border-tark-gold/20"
          >
            <div className="flex gap-0.5 items-center">
              <span className="w-1.5 h-3 bg-tark-gold rounded-l-full block"></span>
              <span className="w-1.5 h-3 bg-tark-navy rounded-r-full block"></span>
            </div>
            <span>Mentorship</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-tark-navy leading-tight mb-6"
          >
            Patrons & Advisors
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-500 max-w-2xl mx-auto font-light text-base leading-relaxed"
          >
            Academic excellence, professional standards, and student growth at TARK are guided by experienced educators, legal professionals, policymakers, and industry leaders who mentor students and help maintain academic integrity.
          </motion.p>
        </div>

        {/* Grid of Advisors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisors.map((adv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-tark-bg p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:bg-white hover:shadow-lg hover:border-tark-gold/20 transition-all duration-300"
            >
              {/* Profile Placeholder Image */}
              <div className={`w-24 h-24 rounded-full ${adv.imageBg} text-tark-navy flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-inner`}>
                <User className="w-10 h-10 opacity-60" />
              </div>

              <h3 className="font-serif font-bold text-tark-navy text-lg group-hover:text-tark-blue transition-colors">
                {adv.name}
              </h3>
              
              <span className="text-xs uppercase font-bold tracking-wider text-tark-gold mt-1.5 block">
                {adv.role}
              </span>
              
              <p className="text-gray-400 text-xs font-light mt-3 leading-relaxed">
                {adv.institution}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
