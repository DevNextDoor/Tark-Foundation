import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { MissionVision } from '../components/MissionVision';
import { Team } from '../components/Team';

export const OriginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-tark-bg min-h-screen">
      {/* Editorial Header */}
      <div className="bg-tark-navy text-white pt-48 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-tark-gold/10 via-transparent to-transparent opacity-60 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 text-tark-gold text-xs font-bold uppercase tracking-wider mb-6 border border-white/10">
            Story
          </span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight">Our Origin</h1>
          <p className="text-gray-300 font-light max-w-xl mx-auto mt-4 text-sm md:text-base">
            How TARK Foundation was established to nurture rational thinkers and ethical leaders.
          </p>
        </div>
      </div>

      {/* Reading Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            {/* Back Button */}
            <a href="#/" className="inline-flex items-center gap-2 text-tark-navy hover:text-tark-blue font-semibold mb-12 group transition-colors">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </a>
            
            {/* 5-Paragraph Content in dual-column or elegant block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed font-light text-lg">
                <p>
                  Every generation inherits a world it did not build and is asked to improve it. Yet today’s young people are surrounded by information while having fewer opportunities for meaningful dialogue and rational discussion.
                </p>
                <p className="font-semibold text-tark-blue text-xl border-l-4 border-tark-gold pl-4 my-8">
                  TARK Foundation was established to change that.
                </p>
                <p>
                  We believe leadership is not a title earned at the end of a competition but a discipline built through preparation, thoughtful reasoning, respectful disagreement, and intellectual honesty.
                </p>
                <p>
                  TARK serves as a training ground where students learn to question assumptions, examine evidence, defend ideas with confidence, and develop empathy by listening to opposing viewpoints.
                </p>
                <p className="italic font-semibold text-tark-navy text-lg">
                  Rather than simply teaching students how to speak, we prepare them to think before they lead.
                </p>
              </div>
              <div className="lg:col-span-5 bg-tark-bg p-8 rounded-3xl border border-gray-100 space-y-6">
                <h4 className="font-serif font-bold text-tark-navy text-xl">Key Themes of Our Mission</h4>
                <div className="space-y-4 text-sm font-light text-gray-600">
                  <div className="flex gap-3 items-start">
                    <span className="text-tark-gold font-bold mt-0.5">★</span>
                    <p>Focuses on intellectual honesty over pure rhetoric.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-tark-gold font-bold mt-0.5">★</span>
                    <p>Fosters deep respect for diversity of thought and ideas.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-tark-gold font-bold mt-0.5">★</span>
                    <p>Prepares students to formulate evidence-based arguments and listen empathetically.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Supporting Sections */}
      <MissionVision />
      <Team />
    </div>
  );
};
export default OriginPage;
