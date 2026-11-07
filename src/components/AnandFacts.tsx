import React, { useState } from 'react';
import { anandProfile } from '../data/anandProfile.ts';
import { 
  Sparkles, 
  BookOpen, 
  Dribbble, 
  Crosshair,
  Sun,
  Lock, 
  Eye, 
  EyeOff,
  Flame,
  Calendar,
  Shield,
  Gamepad2
} from 'lucide-react';

export const AnandFacts: React.FC = () => {
  const [showSecrets, setShowSecrets] = useState(false);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dribbble':
        return <Dribbble className="w-5 h-5 text-[#F0A24C]" />;
      case 'Crosshair':
        return <Crosshair className="w-5 h-5 text-[#F0A24C]" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-[#F0A24C]" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-[#F0A24C]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#F0A24C]" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-[#F0A24C]" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-[#F0A24C]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#F0A24C]" />;
    }
  };

  return (
    <section className="relative w-full py-16 bg-[#0D0D0D] border-t border-[#F0A24C]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D1510] border border-[#F0A24C]/35 text-[#F0A24C] text-xs font-medium tracking-wide mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#F0A24C]" />
            <span>Сонирхолтой баримтууд & Хобби</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Анандын тухай сонирхолтой баримтууд
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#ADADAD]">
            Спорт, тоглоом, үзэл бодол болон миний тухай сонирхолтой бодит баримтууд
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {anandProfile.interestingFacts.map((fact, idx) => (
            <div 
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#141210] border border-[#F0A24C]/20 hover:border-[#F0A24C]/60 hover:bg-[#181410] transition-all shadow-md group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1D1510] border border-[#F0A24C]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {renderIcon(fact.icon)}
                  </div>
                  {fact.tag && (
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#1D1510] text-[#E0A165] border border-[#F0A24C]/25">
                      {fact.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2">
                  {fact.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#ADADAD] leading-relaxed">
                  {fact.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Favorites & Beliefs Bar */}
        <div className="mb-14 p-6 rounded-2xl bg-gradient-to-r from-[#171310] via-[#1F1812] to-[#171310] border border-[#F0A24C]/35 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-[#F0A24C]/15">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#F0A24C]" />
              Шүтээн, тоглоом & онцлог баримтууд
            </h3>
            <span className="text-xs text-[#F0A24C] font-mono">NBA · CS2 · Шашин</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-[#0D0D0D]/70 border border-[#F0A24C]/25 hover:border-[#F0A24C]/50 transition-colors">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[#8D8D8D] font-medium">NBA шүтээн</span>
                <Dribbble className="w-4 h-4 text-[#F0A24C]" />
              </div>
              <p className="text-sm font-bold text-white">Cooper Flagg</p>
              <p className="text-[11px] text-[#A0A0A0] mt-0.5">NBA-ээс хамгийн их дэмжиж, дуртай тоглогч</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0D0D0D]/70 border border-[#F0A24C]/25 hover:border-[#F0A24C]/50 transition-colors">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[#8D8D8D] font-medium">CS2 шүтээн</span>
                <Crosshair className="w-4 h-4 text-[#F0A24C]" />
              </div>
              <p className="text-sm font-bold text-white">m0NESY</p>
              <p className="text-[11px] text-[#A0A0A0] mt-0.5">CS2 дээр хамгийн их дуртай AWP-ер</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0D0D0D]/70 border border-[#F0A24C]/25 hover:border-[#F0A24C]/50 transition-colors">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[#8D8D8D] font-medium">Шашин шүтлэг</span>
                <Shield className="w-4 h-4 text-[#F0A24C]" />
              </div>
              <p className="text-sm font-bold text-white">Шүтлэггүй</p>
              <p className="text-[11px] text-[#A0A0A0] mt-0.5">Өөрийн хичээл зүтгэл, бодит хөдөлмөртөө итгэдэг</p>
            </div>
          </div>
        </div>

        {/* Special Section: "Хэний ч мэдэхгүй зүйлс" (Interactive Secret Box) */}
        <div className="rounded-2xl bg-[#141210] border border-[#F0A24C]/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -right-20 -bottom-20 w-64 h-64 bg-[#F0A24C]/10 rounded-full blur-3xl" 
          />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#F0A24C]/20">
            <div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#F0A24C]" />
                <h3 className="text-xl font-bold text-white tracking-tight">Хэний ч мэдэхгүй зүйлс</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#7D7D7D] mt-1">
                Анандын тухай хамгийн сонирхолтой, нууцлаг 4 баримт
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowSecrets(!showSecrets)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1D1510] hover:bg-[#281D14] border border-[#F0A24C]/50 text-[#F0A24C] text-xs font-semibold transition-all cursor-pointer shadow-sm w-fit"
            >
              {showSecrets ? (
                <>
                  <EyeOff className="w-3.5 h-3.5" />
                  <span>Нуух</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5" />
                  <span>Нээж харах</span>
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {anandProfile.secretFacts.map((secret, idx) => (
              <div 
                key={idx}
                className={`p-4 rounded-xl border flex flex-col justify-between transition-all duration-300 ${
                  showSecrets 
                    ? 'bg-[#181410] border-[#F0A24C]/45 hover:border-[#F0A24C]' 
                    : 'bg-[#0D0D0D]/50 border-white/5 filter blur-[3px] select-none'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#F0A24C]">{secret.title}</span>
                    <span className="text-[10px] text-[#717171] uppercase tracking-wider">{secret.tag}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                    {showSecrets ? secret.detail : '•••••••••••••••••••••••••••••••••••'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {!showSecrets && (
            <p className="text-center text-xs text-[#7D7D7D] mt-4">
              👆 &ldquo;Нээж харах&rdquo; товч дээр дарж нууц баримтуудыг уншаарай.
            </p>
          )}

        </div>

      </div>
    </section>
  );
};
