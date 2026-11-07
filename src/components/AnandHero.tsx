import React from 'react';
import { anandProfile } from '../data/anandProfile.ts';
import { Sparkles, ArrowRight, Dribbble, Code, Compass, Users, CheckCircle2 } from 'lucide-react';

interface AnandHeroProps {
  onNavigateTab: (tab: string) => void;
}

export const AnandHero: React.FC<AnandHeroProps> = ({ onNavigateTab }) => {
  return (
    <section className="relative w-full pt-10 sm:pt-16 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute right-[5%] top-10 w-[500px] h-[500px] rounded-full bg-[#F0A24C]/10 blur-[130px] -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute left-[5%] top-[30%] w-[400px] h-[400px] rounded-full bg-[#F0A24C]/05 blur-[120px] -z-10" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D1510] border border-[#F0A24C]/35 text-[#F0A24C] text-xs font-medium tracking-wide mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#F0A24C]" />
          <span>Хувийн танилцуулга хуудас · Portfolio</span>
        </div>

        {/* Main Grid: Info + Visual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bio & Core Info */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Сайн байна уу! <br />
                Намайг <span className="text-[#F0A24C]">Ананд</span> гэдэг.
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-[#E0A165]">
                {anandProfile.role}
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#ADADAD] leading-relaxed max-w-xl">
              Би 2010.07.15-нд төрсөн (16 настай), зуны улиралд хамгийн их дуртай. Сагсан бөмбөгийн талбайд <span className="text-white font-medium">JCL лигт</span> өрсөлддөг, пүүз хувцасны соёлд дуртай, ирээдүйд өөрийн технологийн стартап болон хувцасны брэндээ үүсгэн байгуулах зорилготойгоор код сурч байна.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#141210] border border-[#F0A24C]/25 hover:border-[#F0A24C]/50 transition-colors">
                <p className="text-xs text-[#7D7D7D]">Төрсөн өдөр & Нас</p>
                <p className="text-base sm:text-lg font-bold text-white mt-0.5">2010.07.15</p>
                <p className="text-[11px] text-[#F0A24C]">{anandProfile.age} нас</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#141210] border border-[#F0A24C]/25 hover:border-[#F0A24C]/50 transition-colors">
                <p className="text-xs text-[#7D7D7D]">Дуртай улирал</p>
                <p className="text-base sm:text-lg font-bold text-white mt-0.5">{anandProfile.favoriteSeason}</p>
                <p className="text-[11px] text-[#F0A24C]">Нарлаг & Эрч хүчтэй ☀️</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#141210] border border-[#F0A24C]/25 hover:border-[#F0A24C]/50 transition-colors">
                <p className="text-xs text-[#7D7D7D]">Шашин шүтлэг</p>
                <p className="text-base sm:text-lg font-bold text-white mt-0.5">{anandProfile.religion}</p>
                <p className="text-[11px] text-[#717171]">Өөрийн хөдөлмөртөө итгэгч</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#141210] border border-[#F0A24C]/20">
                <p className="text-xs text-[#7D7D7D]">Өндөр</p>
                <p className="text-base sm:text-lg font-bold text-white mt-0.5">{anandProfile.height}</p>
                <p className="text-[11px] text-[#F0A24C]">Сагсан бөмбөгч</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#141210] border border-[#F0A24C]/20">
                <p className="text-xs text-[#7D7D7D]">Орд</p>
                <p className="text-base font-bold text-white mt-0.5">Мэлхий ♋</p>
                <p className="text-[11px] text-[#717171]">Зөн совинтой</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#141210] border border-[#F0A24C]/20">
                <p className="text-xs text-[#7D7D7D]">Гэр бүл</p>
                <p className="text-base font-bold text-white mt-0.5">1 ахтай</p>
                <p className="text-[11px] text-[#717171]">Нэгдмэл</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => onNavigateTab('dream')}
                className="glossy-amber-button px-6 py-3 rounded-xl text-white font-semibold text-sm inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>Мөрөөдлийн мэргэжил харах</span>
                <ArrowRight className="w-4 h-4 text-[#F0A24C] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => onNavigateTab('facts')}
                className="px-5 py-3 rounded-xl bg-[#181512] hover:bg-[#231D17] border border-[#F0A24C]/30 text-white font-medium text-sm transition-all cursor-pointer"
              >
                Сонирхолтой баримтууд
              </button>
            </div>

          </div>

          {/* Right Column: Visual Highlight Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#1C1713] to-[#120F0C] border border-[#F0A24C]/35 p-6 shadow-2xl">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#F0A24C]/15">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#2A1F16] border border-[#F0A24C]/40 flex items-center justify-center text-[#F0A24C]">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Anand Profile Card</h3>
                    <p className="text-[11px] text-[#7D7D7D]">Student · Athlete · Builder</p>
                  </div>
                </div>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active
                </span>
              </div>

              {/* Core Passions List */}
              <div className="mt-5 space-y-3">
                <div className="p-3 rounded-xl bg-[#0D0D0D]/60 border border-white/5 flex items-start gap-3">
                  <Dribbble className="w-5 h-5 text-[#F0A24C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Сагсан бөмбөг & JCL лиг</h4>
                    <p className="text-xs text-[#ADADAD] mt-0.5">Rigorer болон Dream Club багуудаас тоглодог. 180 см өндөр, талбай дээр багийн тоглолтыг эрхэмлэдэг.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0D0D0D]/60 border border-white/5 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#E0A165] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Хувцас, пүүз & Streetwear</h4>
                    <p className="text-xs text-[#ADADAD] mt-0.5">Спортын хувцас хэрэглэл, пүүз задлан шинжлэх болон ирээдүйд өөрийн дэлгүүрээ нээхээр зорьж буй.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#0D0D0D]/60 border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F0A24C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Сургалтад суралцаж буй зорилго</h4>
                    <p className="text-xs text-[#ADADAD] mt-0.5">Их сургуульд ороход давуу тал болох болон ирээдүйн бизнесээ ухаалаг технологитой хослуулахаар код бичиж сурч байна.</p>
                  </div>
                </div>
              </div>

              {/* Tagline footer in card */}
              <div className="mt-5 pt-4 border-t border-[#F0A24C]/15 flex items-center justify-between text-xs text-[#7D7D7D]">
                <span>Улаанбаатар хот</span>
                <span className="text-[#F0A24C] font-mono">10 жилийн алсын хараа</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
