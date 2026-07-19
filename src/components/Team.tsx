import { motion } from 'framer-motion';
import { ChevronRight, Award, UserCheck, Users, HelpCircle } from 'lucide-react';

const tiers = [
  {
    role: 'Executive Leadership',
    desc: 'The strategic governance body that establishes academic standards, oversees organizational development, and builds national/international partnerships.',
    icon: Award
  },
  {
    role: 'Secretariat',
    desc: 'The execution hub responsible for day-to-day operations, event administration, institutional communications, and policy implementation.',
    icon: UserCheck
  },
  {
    role: 'Department Heads',
    desc: 'Specialized leads who direct individual functional areas, including Research & Content, Public Relations, Logistics, and Delegate Affairs.',
    icon: Users
  },
  {
    role: 'Team Members',
    desc: 'Active coordinators who design debate formats, draft youth parliament agendas, manage public relations, and support program logistics.',
    icon: Users
  },
  {
    role: 'Volunteers',
    desc: 'On-ground support personnel and student ambassadors who assist in the deployment of simulations and local community outreach.',
    icon: HelpCircle
  }
];

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-tark-bg relative scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Title */}
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
            <span>Governance</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-tark-navy leading-tight"
          >
            Our Team Structure
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-gray-500 max-w-lg mx-auto font-light text-base"
          >
            A collaborative hierarchy designed for academic excellence, operational efficiency, and community-driven impact.
          </motion.p>
        </div>

        {/* Hierarchy Visualization Layout */}
        <div className="max-w-4xl mx-auto space-y-4">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white p-6 md:p-8 rounded-2xl border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md hover:border-tark-gold/20 transition-all"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-tark-navy/5 text-tark-navy flex items-center justify-center font-bold text-lg group-hover:bg-tark-navy group-hover:text-white transition-all shadow-sm">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-tark-navy group-hover:text-tark-blue transition-colors">
                    {tier.role}
                  </h3>
                  <p className="text-gray-500 text-sm font-light mt-1.5 max-w-2xl leading-relaxed">
                    {tier.desc}
                  </p>
                </div>
              </div>

              {index < tiers.length - 1 && (
                <div className="hidden md:flex items-center text-tark-gold opacity-50 group-hover:translate-x-1 transition-transform">
                  <ChevronRight className="w-6 h-6 rotate-90 md:rotate-0" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
