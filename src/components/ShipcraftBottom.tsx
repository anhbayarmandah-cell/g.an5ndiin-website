import React from 'react';

export const ShipcraftBottom: React.FC = () => {
  return (
    <div className="relative w-full bg-[#0D0D0D] overflow-hidden pt-12 sm:pt-16 pb-0 select-none">
      
      {/* Subtle ambient warm amber glow behind hands & center */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#F0A24C]/06 rounded-full blur-[100px] -z-10" 
      />

      {/* Middle composition: Left Hand + Centered Copyright + Right Hand */}
      <div className="max-w-[1440px] mx-auto px-4 relative flex items-center justify-between min-h-[220px] sm:min-h-[280px] lg:min-h-[320px]">
        
        {/* Left Marble Hand Reaching In */}
        <div className="anim-hand-left absolute left-[-4%] sm:left-0 top-1/2 -translate-y-1/2 w-[34%] max-w-[420px] pointer-events-none z-10">
          <img
            src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/4c029f38-d0a0-46d1-9ebc-3edcdaa11fc1.png"
            alt="Polished white Carrara marble left hand reaching toward center with amber rim light"
            className="w-full h-auto object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Centred Copyright & Tagline between reaching hands */}
        <div className="relative z-20 mx-auto text-center flex flex-col items-center justify-center px-4 py-6">
          <div className="space-y-1">
            <p className="text-xs tracking-[0.25em] uppercase text-[#7D7D7D] font-medium">
              ©2026
            </p>
            <p className="text-base sm:text-lg font-semibold tracking-wide text-white">
              Shipcraft
            </p>
            <p className="text-xs sm:text-sm text-[#717171] font-normal tracking-wide">
              Build a real app, fast.
            </p>
          </div>
        </div>

        {/* Right Marble Hand Reaching In */}
        <div className="anim-hand-right absolute right-[-4%] sm:right-0 top-1/2 -translate-y-1/2 w-[33%] max-w-[400px] pointer-events-none z-10">
          <img
            src="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/7eba3f06-a99e-44b8-bd46-7ccfaf6b2363.png"
            alt="Polished white Carrara marble right hand reaching toward center with amber rim light"
            className="w-full h-auto object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>

      </div>

      {/* Giant thin amber-brown "Shipcraft" wordmark sinking off the bottom edge */}
      <div className="anim-wordmark relative w-full flex justify-center items-end overflow-hidden pointer-events-none leading-none -mt-4 sm:-mt-8 lg:-mt-12">
        <h2 
          className="text-[17vw] lg:text-[195px] xl:text-[235px] font-extralight tracking-tight text-[#5A3418] select-none text-center translate-y-[38%] transition-transform duration-700 hover:translate-y-[32%]"
          style={{
            fontFamily: "'Google Sans Flex', 'Google Sans', 'Plus Jakarta Sans', sans-serif",
            fontWeight: 200,
          }}
        >
          Shipcraft
        </h2>
      </div>

    </div>
  );
};
