import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface ShipcraftCtaProps {
  onGetStarted?: () => void;
}

export const ShipcraftCta: React.FC<ShipcraftCtaProps> = ({ onGetStarted }) => {
  return (
    <section className="relative w-full pt-16 md:pt-24 pb-12 lg:pb-20 overflow-hidden">
      {/* Warm ambient amber back-glow behind editor panel */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute right-[-10%] top-0 w-[600px] h-[550px] rounded-full bg-[#F0A24C]/10 blur-[120px] -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute left-[10%] top-[40%] w-[380px] h-[380px] rounded-full bg-[#F0A24C]/05 blur-[100px] -z-10" 
      />

      <div className="max-w-[1340px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: CTA Content */}
          <div className="lg:col-span-6 xl:col-span-5 z-10 flex flex-col items-start">
            
            {/* Pill: Ship Your Idea */}
            <div className="anim-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D1510] border border-[#F0A24C]/35 text-[#F0A24C] text-xs font-medium tracking-wide shadow-sm hover:border-[#F0A24C]/60 transition-colors cursor-default">
              <Sparkles className="w-3.5 h-3.5 text-[#F0A24C] fill-[#F0A24C]/20" />
              <span>Ship Your Idea</span>
            </div>

            {/* Headline: "Your next app / starts now." */}
            <h1 className="anim-headline mt-6 text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-white tracking-[-0.03em] leading-[1.08] text-balance">
              Your next app <br />
              <span className="text-white">starts now.</span>
            </h1>

            {/* Paragraph Description */}
            <p className="anim-desc mt-6 text-base sm:text-lg text-[#ADADAD] max-w-lg leading-relaxed font-normal">
              Describe it, shape it in the canvas or code, ship it to the App Store, Play Store, or web. No install, no credit card.
            </p>

            {/* Glossy Amber-Glass CTA Button */}
            <div className="anim-cta mt-8 sm:mt-10 flex items-center gap-4">
              <button
                type="button"
                onClick={onGetStarted}
                className="glossy-amber-button group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl text-white font-semibold text-base cursor-pointer select-none tracking-tight overflow-hidden"
              >
                {/* Lit white upper-rim highlight line */}
                <div 
                  aria-hidden="true" 
                  className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent" 
                />
                
                <span>Get started now</span>
                <ArrowRight className="w-4 h-4 text-[#F0A24C] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust badge */}
            <div className="mt-4 flex items-center gap-2 text-xs text-[#717171]">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F0A24C]/70" />
              <span>Instant preview in browser · Free forever tier included</span>
            </div>

          </div>

          {/* Right Column: Tilted 3D Editor Panel bleeding off top-right */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="anim-editor relative w-full max-w-[680px] lg:max-w-none lg:w-[125%] lg:origin-top-left xl:-mr-16 2xl:-mr-24">
              
              {/* Subtle amber rim illumination highlight */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#F0A24C]/25 via-transparent to-[#F0A24C]/35 opacity-40 blur-xl pointer-events-none" 
              />

              {/* Editor panel image */}
              <img
                src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/5bc1d856-0342-40d4-b7ca-c490ac20624a.png"
                alt="Shipcraft perspective editor with widget tree and code columns glowing amber"
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)] filter contrast-[1.03]"
                loading="eager"
                referrerPolicy="no-referrer"
              />

              {/* Ambient bottom-fade overlay to seamlessly integrate with dark ground */}
              <div 
                aria-hidden="true" 
                className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0D0D0D] to-transparent z-20 pointer-events-none" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
