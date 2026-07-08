import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass } from 'lucide-react';

export const MissionVision = () => {
  return (
    <section className="py-24 bg-tark-bg relative overflow-hidden">
      {/* Subtle decorative background blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-tark-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-tark-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
          >
            {/* Top gold bar decorator */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-tark-gold" />
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-tark-gold/10 flex items-center justify-center mb-8 text-tark-gold">
                <Target className="w-6 h-6" />
              </div>
              
              <span className="text-xs uppercase font-bold tracking-widest text-tark-gold block mb-3">Our Purpose</span>
              <h3 className="text-3xl font-serif font-bold text-tark-navy mb-6">
                Mission
              </h3>
              
              <div className="space-y-4 text-gray-600 leading-relaxed font-light text-base">
                <p>
                  TARK Foundation exists to create platforms where young people learn to think critically, argue rationally, and lead with integrity.
                </p>
                <p>
                  Every debate, youth parliament, workshop, and educational initiative is designed to strengthen research, reasoning, communication, and ethical leadership.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-50">
              <p className="text-tark-blue font-serif italic text-lg font-medium">
                We prepare students not merely to speak well, but to think well.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden"
          >
            {/* Top blue bar decorator */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-tark-blue" />
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-tark-blue/10 flex items-center justify-center mb-8 text-tark-blue">
                <Compass className="w-6 h-6" />
              </div>
              
              <span className="text-xs uppercase font-bold tracking-widest text-tark-blue block mb-3">Our Aspiration</span>
              <h3 className="text-3xl font-serif font-bold text-tark-navy mb-6">
                Vision
              </h3>
              
              <div className="space-y-4 text-gray-600 leading-relaxed font-light text-base">
                <p>
                  We envision a generation that leads because it understands how to think independently.
                </p>
                <p>
                  A generation fluent in diplomacy, civic responsibility, research, respectful dialogue, and informed decision-making.
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-50">
              <p className="text-tark-navy font-serif italic text-lg font-medium">
                Our long-term vision is to create a culture where rational thinking becomes a shared social value.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
