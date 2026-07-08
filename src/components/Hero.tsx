import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-tark-bg pt-28 pb-32 lg:pb-40">
      {/* Background radial gradient to add depth */}
      <div className="absolute inset-0 bg-gradient-radial from-tark-gold/5 via-transparent to-transparent opacity-70 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 -mt-12 lg:-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 text-left lg:-mt-72"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-tark-navy mb-6 leading-[1.1] tracking-tight">
              Before You Can Lead, <br />
              You Must Learn to <span className="text-tark-blue italic font-medium">Think.</span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 mb-10 max-w-xl font-light leading-relaxed">
              Every generation inherits a world it did not build and is expected to improve it. TARK Foundation creates immersive learning platforms where students develop critical thinking, rational argumentation, leadership, diplomacy, and civic responsibility through debates, youth parliaments, workshops, and experiential learning.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="#programs"
                className="group flex items-center gap-2 bg-tark-navy text-white px-8 py-4 rounded-full font-medium hover:bg-tark-gold hover:text-tark-navy transition-all duration-300 shadow-md w-full sm:w-auto justify-center"
              >
                Explore Programs
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="group flex items-center gap-1.5 font-semibold text-tark-navy hover:text-tark-blue transition-colors w-full sm:w-auto justify-center text-sm"
              >
                Discover Our Story
                <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Premium Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7 relative lg:mt-32"
          >
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">

              {/* Dot Matrix Background Patterns */}
              <div className="absolute -top-12 -left-12 w-32 h-32 opacity-15 bg-[radial-gradient(#071F46_1.5px,transparent_1.5px)] [background-size:12px_12px]" />
              <div className="absolute -bottom-12 -right-12 w-32 h-32 opacity-15 bg-[radial-gradient(#071F46_1.5px,transparent_1.5px)] [background-size:12px_12px]" />

              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Left Tall Image */}
                <div className="col-span-5 relative mt-12">
                  <div className="aspect-[4/6] w-full rounded-[120px_120px_20px_20px] overflow-hidden border border-tark-gold/20 shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop"
                      alt="TARK Legal Education"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Right Images (Stacked and offset) */}
                <div className="col-span-7 space-y-4">
                  {/* Top Right Image */}
                  <div className="flex justify-start">
                    <div className="aspect-square w-[90%] rounded-[20px_120px_20px_20px] overflow-hidden border border-tark-gold/20 shadow-xl -mt-6">
                      <img
                        src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?q=80&w=1000&auto=format&fit=crop"
                        alt="Moot Court Research"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Bottom Right Image */}
                  <div className="flex justify-end">
                    <div className="aspect-[4/5] w-[90%] rounded-[20px_20px_120px_20px] overflow-hidden border border-tark-gold/20 shadow-xl">
                      <img
                        src="/legal1.png"
                        alt="Legal Discourse"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Spinning Sticker Badge */}
              <div className="absolute bottom-[40%] left-[40%] -translate-x-1/2 translate-y-1/2 z-20">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  {/* Rotated text */}
                  <motion.svg
                    animate={{ rotate: 360 }}
                    transition={{ ease: "linear", duration: 16, repeat: Infinity }}
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <path
                        id="textPath"
                        d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                      />
                    </defs>
                    <text className="text-[7.5px] font-bold fill-tark-navy tracking-[0.18em] uppercase">
                      <textPath xlinkHref="#textPath">
                        JOIN TARK • ADVOCACY & RATIONALISM •
                      </textPath>
                    </text>
                  </motion.svg>

                  {/* Center Circle & Arrow */}
                  <div className="absolute w-14 h-14 bg-tark-gold text-tark-navy rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                    <svg
                      className="w-5 h-5 transform rotate-45 text-tark-navy"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating Sparkle Stars */}
              <motion.div
                animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 bottom-16 text-tark-gold w-8 h-8"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                </svg>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};