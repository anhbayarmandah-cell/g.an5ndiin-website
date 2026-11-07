import React from 'react';
import { anandProfile } from '../data/anandProfile.ts';
import { Briefcase, Code, TrendingUp, Award, Users, ShieldAlert, Sparkles, Check } from 'lucide-react';

export const AnandDreamJob: React.FC = () => {
  const getSkillIcon = (id: string) => {
    switch (id) {
      case 'code':
        return <Code className="w-5 h-5 text-[#F0A24C]" />;
      case 'business':
        return <TrendingUp className="w-5 h-5 text-[#F0A24C]" />;
      case 'leadership':
        return <Award className="w-5 h-5 text-[#F0A24C]" />;
      case 'teamwork':
        return <Users className="w-5 h-5 text-[#F0A24C]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#F0A24C]" />;
    }
  };

  return (
    <section className="relative w-full py-16 bg-[#0D0D0D] border-t border-[#F0A24C]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D1510] border border-[#F0A24C]/35 text-[#F0A24C] text-xs font-medium tracking-wide mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#F0A24C]" />
            <span>Мөрөөдлийн ажил & Алсын хараа</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {anandProfile.careerVision.title}
          </h2>
          <p className="mt-3 text-base text-[#ADADAD]">
            &ldquo;10 жилийн дараа би өөрийн гэсэн хувцас, пүүзний брэнд, ухаалаг технологийн бизнестэй болсон байх болно.&rdquo;
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left: What we build & Why this career */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Vision Highlight Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#171310] to-[#120F0D] border border-[#F0A24C]/30 shadow-lg">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F0A24C]" />
                Бид юу үйлдвэрлэж, бүтээх вэ?
              </h3>
              <p className="mt-2 text-sm text-[#ADADAD] leading-relaxed">
                Спортын өндөр чанартай хувцас хэрэглэл, өдөр тутмын загварлаг streetwear, чанартай пүүз гутлыг орчин үеийн компьютерын технологи, автоматжуулалттай холбон зах зээлд нийлүүлнэ.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {anandProfile.careerVision.targetProducts.map((prod, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#0D0D0D]/60 border border-white/5 text-xs text-white">
                    <Check className="w-4 h-4 text-[#F0A24C] shrink-0" />
                    <span>{prod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why this career */}
            <div className="p-6 rounded-2xl bg-[#141210] border border-[#F0A24C]/20">
              <h3 className="text-base font-bold text-white flex items-center gap-2 text-[#F0A24C]">
                Яагаад энэ мэргэжил вэ?
              </h3>
              <p className="mt-2.5 text-sm text-[#ADADAD] leading-relaxed">
                &ldquo;Хувцсанд маш их дуртай болохоор компьютертэй (програм хангамж, вэб технологитой) хамтарч хийвэл илүү амархан, ухаалаг, цар хүрээтэй байх болно.&rdquo;
              </p>
              <div className="mt-4 p-3 rounded-xl bg-[#1D1510] border border-[#F0A24C]/30 text-xs text-[#E0A165]">
                💡 Пүүзний соёл, Sneaker дизайн, бүтээгдэхүүний технологийг судлах нь миний өдөр тутмын хамгийн том сонирхол.
              </div>
            </div>

          </div>

          {/* Right: Needed Skills (Heregtei ur chadwar) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#141210] border border-[#F0A24C]/30">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0A24C]/15">
                <h3 className="text-base font-bold text-white">Хэрэгтэй ур чадварууд</h3>
                <span className="text-xs text-[#F0A24C] font-mono">5 үндсэн чадвар</span>
              </div>

              <div className="mt-4 space-y-3.5">
                {anandProfile.skills.map((skill) => (
                  <div key={skill.id} className="p-3 rounded-xl bg-[#0D0D0D]/70 border border-white/5 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getSkillIcon(skill.id)}
                        <span className="text-xs sm:text-sm font-semibold text-white">{skill.name}</span>
                      </div>
                      <span className="text-xs font-mono text-[#F0A24C]">{skill.level}%</span>
                    </div>
                    <p className="text-[11px] text-[#7D7D7D] leading-normal">{skill.description}</p>
                    <div className="w-full h-1.5 rounded-full bg-[#1F1B16] overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-[#C4782A] to-[#F0A24C]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
