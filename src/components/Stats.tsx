import React from 'react';
import { motion } from 'framer-motion';
const stats = [
{
  value: '5000+',
  label: 'Students'
},
{
  value: '100+',
  label: 'Events'
},
{
  value: '50+',
  label: 'Institutions'
},
{
  value: '25+',
  label: 'Mentors'
}];

export const Stats = () => {
  return (
    <section className="py-24 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-gray-100">
          {stats.map((stat, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="text-center px-4">
            
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-tark-navy mb-2 font-bold">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-500 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};