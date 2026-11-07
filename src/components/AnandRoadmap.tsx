import React from 'react';
import { anandProfile } from '../data/anandProfile.ts';
import { Milestone, CheckCircle2, Clock, Target, Calendar } from 'lucide-react';

export const AnandRoadmap: React.FC = () => {
  return (
    <section className="relative w-full py-16 bg-[#0D0D0D] border-t border-[#F0A24C]/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D1510] border border-[#F0A24C]/35 text-[#F0A24C] text-xs font-medium tracking-wide mb-3">
            <Milestone className="w-3.5 h-3.5 text-[#F0A24C]" />
            <span>Хөгжлийн төлөвлөгөө · Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Миний төлөвлөгөө & Зорилтууд
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#ADADAD]">
            Зорилгодоо хүрэхийн тулд өдөр бүр алхам алхмаар хэрэгжүүлж буй бодит төлөвлөгөө
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="space-y-4 sm:space-y-6 relative before:absolute before:inset-0 before:left-5 sm:before:left-8 before:w-0.5 before:bg-[#F0A24C]/20">
          {anandProfile.roadmap.map((item) => {
            const isInProgress = item.status === 'in-progress';
            return (
              <div 
                key={item.step} 
                className="relative flex items-start gap-4 sm:gap-6 group"
              >
                {/* Step Marker Badge */}
                <div className={`relative z-10 w-10 h-10 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-bold text-sm sm:text-lg transition-all shadow-md shrink-0 ${
                  isInProgress
                    ? 'bg-[#F0A24C] text-[#0D0D0D] ring-4 ring-[#F0A24C]/25'
                    : 'bg-[#1D1510] border border-[#F0A24C]/40 text-[#F0A24C] group-hover:border-[#F0A24C]'
                }`}>
                  {item.step}
                </div>

                {/* Content Box */}
                <div className={`flex-1 p-5 sm:p-6 rounded-2xl bg-[#141210] border transition-all shadow-lg ${
                  isInProgress 
                    ? 'border-[#F0A24C]/45 hover:border-[#F0A24C]/80' 
                    : 'border-[#F0A24C]/20 hover:border-[#F0A24C]/50'
                }`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#1D1510] border border-[#F0A24C]/30 text-[11px] font-semibold text-[#F0A24C]">
                      <Calendar className="w-3 h-3" />
                      {item.target}
                    </span>
                    <span className="text-xs flex items-center gap-1">
                      {isInProgress ? (
                        <>
                          <Clock className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-semibold">Хэрэгжиж байна</span>
                        </>
                      ) : (
                        <>
                          <Target className="w-3.5 h-3.5 text-[#7D7D7D]" />
                          <span className="text-[#7D7D7D]">Дараагийн шат</span>
                        </>
                      )}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#ADADAD] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
