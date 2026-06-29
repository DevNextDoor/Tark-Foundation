import React from 'react';
import { motion } from 'framer-motion';
export const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-tark-blue">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="max-w-3xl mx-auto">
          
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            Justice Begins With <br />
            <span className="italic text-tark-gold">Informed Voices.</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 font-light">
            Join a community dedicated to rationalism, knowledge, and the
            pursuit of legal excellence.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-tark-navy px-10 py-4 rounded-full font-medium hover:bg-tark-gold transition-colors shadow-xl">
            
            Become a Member Today
          </a>
        </motion.div>
      </div>
    </section>);

};