import React from 'react';
import { motion } from 'framer-motion';

const items = [
  'Youth Parliaments',
  'Debate Competitions',
  'Policy Workshops',
  'Diplomacy Sim',
  'Civic Responsibility',
  'Leadership Bootcamps'
];

export const Ticker = () => {
  return (
    <div className="bg-tark-navy py-6 overflow-hidden border-y border-tark-gold/20 flex select-none relative z-10">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex items-center gap-16 pr-16"
          animate={{ x: [0, '-100%'] }}
          transition={{
            ease: 'linear',
            duration: 30,
            repeat: Infinity,
          }}
        >
          {items.map((item, idx) => (
            <div key={`ticker-1-${idx}`} className="flex items-center gap-8 text-white font-serif text-lg md:text-xl tracking-wider uppercase font-semibold">
              <span>{item}</span>
              <span className="text-tark-gold font-bold text-2xl">★</span>
            </div>
          ))}
        </motion.div>
        
        <motion.div
          className="flex items-center gap-16 pr-16"
          animate={{ x: [0, '-100%'] }}
          transition={{
            ease: 'linear',
            duration: 30,
            repeat: Infinity,
          }}
        >
          {items.map((item, idx) => (
            <div key={`ticker-2-${idx}`} className="flex items-center gap-8 text-white font-serif text-lg md:text-xl tracking-wider uppercase font-semibold">
              <span>{item}</span>
              <span className="text-tark-gold font-bold text-2xl">★</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
