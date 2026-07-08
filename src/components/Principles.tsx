import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, HelpCircle, MessageSquare, ShieldAlert, Award, Heart } from 'lucide-react';

const principles = [
  {
    num: '01',
    title: 'Knowledge Before Opinion',
    description: 'Research should always precede conclusions. We value facts, thorough reading, and deep exploration over immediate reactions.',
    icon: BookOpen
  },
  {
    num: '02',
    title: 'Critical Thinking',
    description: 'Question assumptions and evaluate evidence. Rational examination of statements is the core of intellectual integrity.',
    icon: HelpCircle
  },
  {
    num: '03',
    title: 'Respectful Dialogue',
    description: 'Disagreement should create understanding rather than division. We practice listening as actively as speaking.',
    icon: MessageSquare
  },
  {
    num: '04',
    title: 'Fairness',
    description: 'Every participant deserves equal respect regardless of background. Merit, preparation, and reasoning are our only metrics.',
    icon: ShieldAlert
  },
  {
    num: '05',
    title: 'Leadership Through Responsibility',
    description: 'Leadership is earned through preparation, service, and accountability. True leaders uplift others and guide with purpose.',
    icon: Award
  },
  {
    num: '06',
    title: 'Purpose Before Profit',
    description: 'Every initiative exists to educate, inspire, and strengthen society. Our bottom line is the intellectual growth of our youth.',
    icon: Heart
  }
];

export const Principles = () => {
  return (
    <section id="principles" className="py-24 bg-white relative scroll-mt-24">
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
            <span>Our Principles</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-tark-navy leading-tight"
          >
            The Foundations of <br />
            <span className="text-tark-blue italic font-medium">Rational Discourse</span>
          </motion.h2>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-tark-bg p-8 rounded-2xl border border-gray-100 flex flex-col justify-between hover:bg-white hover:shadow-lg hover:border-tark-gold/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-tark-navy shadow-sm group-hover:bg-tark-gold group-hover:text-tark-navy transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-serif font-semibold text-tark-gold/30 group-hover:text-tark-gold transition-colors">
                    {item.num}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-tark-navy mb-3 group-hover:text-tark-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
