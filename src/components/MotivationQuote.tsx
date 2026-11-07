import React from 'react';
import { Sparkles, Quote, Compass } from 'lucide-react';
import { anandProfile } from '../data/anandProfile.ts';

export const MotivationQuote: React.FC = () => {
  const quote = anandProfile.motivationQuote;

  if (!quote) return null;

  return (
    <section className="relative w-full py-14 sm:py-20 bg-gradient-to-b from-[#0D0D0D] via-[#120E0B] to-[#0D0D0D] border-t border-[#F0A24C]/20 overflow-hidden">
      {/* Warm ambient halo */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#F0A24C]/10 rounded-full blur-[120px] -z-10" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        {/* Sparkle Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D1510] border border-[#F0A24C]/40 text-[#F0A24C] text-xs font-semibold tracking-wide mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#F0A24C]" />
          <span>Өдөр тутмын урам зориг · Motivation</span>
        </div>

        {/* Large Decorative Quote Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#1D1510] border border-[#F0A24C]/30 flex items-center justify-center text-[#F0A24C] shadow-inner">
            <Quote className="w-6 h-6 stroke-[1.8]" />
          </div>
        </div>

        {/* Spanish Motivation Quote */}
        <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug max-w-3xl mx-auto italic font-['Plus_Jakarta_Sans',sans-serif]">
          &ldquo;{quote.text}&rdquo; <span className="not-italic">{quote.emoji}</span>
        </blockquote>

        {/* Mongolian Meaningful Translation */}
        {quote.translation && (
          <p className="mt-4 text-sm sm:text-base text-[#E0A165] font-medium max-w-2xl mx-auto">
            {quote.translation}
          </p>
        )}

        {/* Quote Footer / Author Tag */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#7D7D7D]">
          <span className="w-6 h-[1px] bg-[#F0A24C]/40" />
          <span className="text-[#F0A24C] font-mono tracking-wider uppercase font-semibold">1% СҮҮЛЧИЙН ХЯЗГААРГҮЙ ӨСӨЛТ</span>
          <span className="w-6 h-[1px] bg-[#F0A24C]/40" />
        </div>

      </div>
    </section>
  );
};
