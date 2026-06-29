import React, { useState } from 'react';
import { Scale, BookOpen, Users, Landmark, GraduationCap } from 'lucide-react';

interface MockImageProps {
  type: 'legal-tall' | 'legal-square' | 'legal-discourse' | 'debating' | 'courtroom' | 'trials' | 'moots' | 'debates';
  className?: string;
}

// Maps type to a local asset or alternative placeholder image URL
const getAlternativeUrl = (type: string) => {
  switch (type) {
    case 'legal-discourse':
    case 'moots':
      return '/legal1.png';
    case 'debating':
    case 'debates':
      return '/debate.png';
    case 'legal-tall':
      return 'https://picsum.photos/600/900?random=1';
    case 'legal-square':
      return 'https://picsum.photos/600/600?random=2';
    case 'courtroom':
      return 'https://picsum.photos/800/450?random=5';
    case 'trials':
      return 'https://picsum.photos/600/380?random=6';
    default:
      return 'https://picsum.photos/600/400?random=9';
  }
};

export const MockImage = ({ type, className = '' }: MockImageProps) => {
  const [hasError, setHasError] = useState(false);
  const imageUrl = getAlternativeUrl(type);

  const getIcon = () => {
    switch (type) {
      case 'legal-tall':
        return <Landmark className="w-16 h-16 text-tark-gold/45" />;
      case 'legal-square':
        return <GraduationCap className="w-12 h-12 text-tark-gold/45" />;
      case 'legal-discourse':
        return <Users className="w-12 h-12 text-tark-gold/45" />;
      case 'debating':
        return <Users className="w-14 h-14 text-tark-navy/40" />;
      case 'courtroom':
        return <Landmark className="w-16 h-16 text-tark-navy/40" />;
      case 'trials':
        return <Scale className="w-12 h-12 text-tark-blue/50 group-hover:text-tark-gold transition-colors" />;
      case 'moots':
        return <BookOpen className="w-12 h-12 text-tark-navy/55" />;
      case 'debates':
        return <Users className="w-12 h-12 text-tark-blue/50 group-hover:text-tark-gold transition-colors" />;
      default:
        return <Scale className="w-12 h-12 text-tark-gold/45" />;
    }
  };

  const getGradient = () => {
    switch (type) {
      case 'legal-tall':
      case 'legal-square':
      case 'legal-discourse':
        return 'from-tark-navy via-tark-navy/95 to-tark-blue/90';
      case 'debating':
      case 'courtroom':
        return 'from-gray-100 via-gray-50 to-gray-100/80';
      case 'moots':
        return 'from-tark-navy/10 via-tark-gold/20 to-tark-gold/10';
      default:
        return 'from-tark-navy/5 via-tark-navy/10 to-tark-blue/5';
    }
  };

  if (hasError) {
    return (
      <div className={`w-full h-full bg-gradient-to-br ${getGradient()} flex flex-col items-center justify-center relative overflow-hidden select-none ${className}`}>
        {/* Decorative Grid Lines / Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        {/* Soft overlay sphere */}
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none" />
        
        {/* Center Icon */}
        <div className="relative z-10">
          {getIcon()}
        </div>

        {/* Label Text for clarity and mock aesthetic */}
        <span className="absolute bottom-4 text-[9px] tracking-[0.2em] uppercase opacity-45 font-bold text-center w-full px-4 text-tark-navy/60">
          TARK MOCK ASSET
        </span>
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={`${type} placeholder`}
      className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${className}`}
      onError={() => setHasError(true)}
    />
  );
};
