import React from 'react';
import { motion } from 'framer-motion';
export const CTA = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-tark-blue scroll-mt-24">
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
            Join the Next Generation <br />
            of <span className="italic text-tark-gold">Rational Leaders</span>
          </h2>
          <p className="text-lg text-white/80 mb-12 font-light leading-relaxed">
            Whether you aspire to become a lawyer, policymaker, diplomat, researcher, entrepreneur, or informed citizen, TARK Foundation provides the environment to sharpen your thinking and strengthen your voice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#programs"
              className="inline-block bg-tark-gold text-tark-navy px-8 py-4 rounded-full font-semibold hover:bg-white transition-colors shadow-xl text-sm w-full sm:w-auto">
              Explore Programs
            </a>
            <a
              href="mailto:info@tarkfoundation.org"
              className="inline-block bg-white text-tark-navy px-8 py-4 rounded-full font-semibold hover:bg-tark-gold transition-colors shadow-xl text-sm w-full sm:w-auto">
              Become a Member
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

};