import React from 'react';
import { motion } from 'framer-motion';
const steps = [
'Register',
'Learn the Case',
'Research',
'Draft Arguments',
'Courtroom Simulation',
'Present Arguments',
'Judgment',
'Recognition',
'Future Advocate'];

export const Timeline = () => {
  return (
    <section
      id="journey"
      className="py-32 bg-tark-navy text-white overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24 md:w-1/2">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-4xl md:text-5xl font-serif mb-6">
            
            Journey of an Advocate
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="text-lg text-gray-300 font-light">
            
            A structured path from theoretical understanding to practical
            mastery.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-50px'
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05
              }}
              className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
                {/* Center Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-tark-gold md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(199,169,107,0.5)]"></div>

                {/* Content */}
                <div
                className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                    <span className="text-tark-gold text-sm font-bold tracking-wider mb-2 block">
                      STEP {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <h3 className="text-xl font-serif">{step}</h3>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

};