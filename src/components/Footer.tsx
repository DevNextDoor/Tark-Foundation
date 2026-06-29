import React from 'react';
export const Footer = () => {
  return (
    <footer className="bg-tark-navy text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="max-w-sm text-center md:text-left">
            <img
              src="/logo.png"
              alt="TARK"
              className="h-10 w-auto mb-6 mx-auto md:mx-0 brightness-0 invert" />
            
            <p className="text-sm text-gray-400 leading-relaxed">
              The Association for Rationalism and Knowledge. Empowering legal
              minds through advocacy, rational discourse and experiential
              learning.
            </p>
          </div>

          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-tark-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-tark-gold transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-tark-gold transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} TARK. All rights reserved.
        </div>
      </div>
    </footer>);

};