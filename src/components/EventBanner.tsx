import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Sparkles, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const EventBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const navigate = useNavigate();

  // Optional: Auto-minimize the banner after 8 seconds so it doesn't permanently block UI
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMinimized(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigateToEvent = () => {
    setIsMinimized(true);
    navigate('/programs', { state: { openProgramId: 'tark-vyuh' } });
    setTimeout(() => {
      const program = document.getElementById('tark-vyuh');
      if (program) {
        program.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 600);
  };

  // If the user completely closes it, remove from DOM
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      <AnimatePresence mode="wait">
        {!isMinimized ? (
          <motion.div
            key="expanded-card"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 260, damping: 25 }}
            className="bg-tark-navy rounded-2xl shadow-2xl overflow-hidden w-[calc(100vw-2rem)] sm:w-80 border border-white/10"
          >
            {/* Elegant Gold Accent Top Bar */}
            <div className="h-1.5 bg-gradient-to-r from-tark-gold to-yellow-400 w-full" />
            
            <div className="p-5 sm:p-6 relative">
              {/* Dismiss / Minimize Button */}
              <button
                onClick={() => setIsMinimized(true)}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-1.5 rounded-full"
                aria-label="Minimize notification"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Event Badge */}
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-tark-gold" />
                <span className="text-tark-gold text-[10px] font-bold uppercase tracking-widest">
                  Upcoming Event
                </span>
              </div>

              {/* Title (Using serif to match your site's heading style) */}
              <h3 className="text-xl sm:text-2xl font-serif text-white mb-2 leading-tight">
                TARK Vyuh 6.0
              </h3>
              
              {/* Description */}
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                Join our premier online debate competition to challenge ideas through structured reasoning.
              </p>

              {/* Call to Action */}
              <button
                onClick={handleNavigateToEvent}
                className="w-full group flex items-center justify-center gap-2 bg-tark-gold hover:bg-yellow-500 text-tark-navy px-4 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
              >
                View Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="minimized-fab"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMinimized(false)}
            className="bg-tark-navy text-tark-gold p-4 rounded-full shadow-2xl border border-white/10 hover:border-tark-gold/50 transition-colors relative"
            aria-label="View Ongoing Event"
          >
            {/* Elegant pulse indicator (Only active when minimized) */}
            <span className="absolute 1 top-0 right-0 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tark-gold opacity-60"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-tark-gold border-2 border-tark-navy"></span>
            </span>
            <Calendar className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};