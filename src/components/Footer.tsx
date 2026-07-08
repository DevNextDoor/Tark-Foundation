import React from 'react';
export const Footer = () => {
  return (
    <footer className="bg-tark-navy text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <img
              src="/logo.png"
              alt="TARK"
              className="h-10 w-auto mb-6 mx-auto lg:mx-0 brightness-0 invert" />
            
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mx-auto lg:mx-0">
              TARK Foundation is dedicated to nurturing rational thinkers, ethical leaders, and informed citizens through debate, diplomacy, experiential learning, and meaningful dialogue.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-tark-gold mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2.5 text-sm text-gray-400 text-center lg:text-left">
              <a href="#" className="hover:text-tark-gold transition-colors">Home</a>
              <a href="#about" className="hover:text-tark-gold transition-colors">About</a>
              <a href="#programs" className="hover:text-tark-gold transition-colors">Programs</a>
              <a href="#journey" className="hover:text-tark-gold transition-colors">Events</a>
              <a href="#impact" className="hover:text-tark-gold transition-colors">Impact</a>
              <a href="#team" className="hover:text-tark-gold transition-colors">Team</a>
              <a href="#contact" className="hover:text-tark-gold transition-colors">Contact</a>
              <a href="#contact" className="hover:text-tark-gold transition-colors">Become a Member</a>
            </div>
          </div>

          {/* Legal / Social Links */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-tark-gold mb-4">Legal</h4>
            <div className="flex flex-col gap-2.5 text-sm text-gray-400">
              <a href="#" className="hover:text-tark-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-tark-gold transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} TARK Foundation. All rights reserved.
        </div>
      </div>
    </footer>);

};