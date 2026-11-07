import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Globe, 
  Laptop, 
  Smartphone, 
  Tablet, 
  RotateCw, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  ArrowUpRight,
  Maximize2
} from 'lucide-react';
import { anandProfile } from '../data/anandProfile.ts';

type ViewportMode = 'desktop' | 'tablet' | 'mobile';

export const AnandProjects: React.FC = () => {
  const projects = anandProfile.projects || [];
  const primaryProject = projects[0];

  const [viewport, setViewport] = useState<ViewportMode>('desktop');
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const reloadIframe = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const getViewportWidthClass = () => {
    switch (viewport) {
      case 'mobile':
        return 'max-w-[390px]';
      case 'tablet':
        return 'max-w-[768px]';
      case 'desktop':
      default:
        return 'max-w-full';
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#F0A24C]/10 bg-[#0B0B0B]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1410] border border-[#F0A24C]/30 text-[#F0A24C] text-xs font-semibold uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Миний бүтээлүүд · My Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Бие даан хийсэн <span className="text-[#F0A24C]">бодит вэб бүтээлүүд</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#8E8E8E] max-w-2xl">
              Сурч мэдсэнээ бодит ажил болгож, интернетэд байршуулсан бүтээлүүд. Энд шууд туршиж үзэх эсвэл шинэ цонхонд нээж сонирхох боломжтой.
            </p>
          </div>

          {/* Quick live link button */}
          {primaryProject && (
            <div className="flex items-center gap-3">
              <a
                href={primaryProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#F0A24C] to-[#E08D33] text-black font-semibold text-sm hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_20px_rgba(240,162,76,0.25)]"
              >
                <span>Шууд сайтал нээх</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {primaryProject && (
          <div className="space-y-8">
            
            {/* Primary Project Showcase Card */}
            <div className="rounded-2xl border border-[#F0A24C]/25 bg-[#121212] overflow-hidden shadow-2xl">
              
              {/* Browser Mockup Top Bar */}
              <div className="bg-[#191919] border-b border-white/10 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
                
                {/* Window Traffic Lights & Title */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F]/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-[#888] hidden sm:inline-block">
                    {primaryProject.title}
                  </span>
                </div>

                {/* Simulated URL Bar */}
                <div className="flex-1 max-w-md mx-auto hidden md:flex items-center gap-2 px-3 py-1 rounded-lg bg-[#0D0D0D] border border-white/10 text-xs font-mono text-[#ADADAD]">
                  <Globe className="w-3.5 h-3.5 text-[#F0A24C] shrink-0" />
                  <span className="truncate">{primaryProject.url}</span>
                </div>

                {/* Device Switcher & Controls */}
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center bg-[#0D0D0D] border border-white/10 rounded-lg p-0.5">
                    <button
                      type="button"
                      onClick={() => setViewport('desktop')}
                      className={`p-1.5 rounded text-xs transition-colors ${
                        viewport === 'desktop'
                          ? 'bg-[#F0A24C] text-black'
                          : 'text-[#888] hover:text-white'
                      }`}
                      title="Компьютер харагдац"
                    >
                      <Laptop className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewport('tablet')}
                      className={`p-1.5 rounded text-xs transition-colors ${
                        viewport === 'tablet'
                          ? 'bg-[#F0A24C] text-black'
                          : 'text-[#888] hover:text-white'
                      }`}
                      title="Таблет харагдац"
                    >
                      <Tablet className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewport('mobile')}
                      className={`p-1.5 rounded text-xs transition-colors ${
                        viewport === 'mobile'
                          ? 'bg-[#F0A24C] text-black'
                          : 'text-[#888] hover:text-white'
                      }`}
                      title="Утасны харагдац"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={reloadIframe}
                    className="p-1.5 rounded-lg bg-[#0D0D0D] border border-white/10 text-[#888] hover:text-[#F0A24C] transition-colors"
                    title="Дахин ачааллах"
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={primaryProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-[#0D0D0D] border border-white/10 text-[#888] hover:text-[#F0A24C] transition-colors"
                    title="Бүтэн дэлгэцээр нээх"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Interactive Iframe Frame Container */}
              <div className="p-4 sm:p-6 bg-[#080808] flex justify-center items-center min-h-[500px]">
                <div className={`w-full ${getViewportWidthClass()} transition-all duration-300 relative rounded-xl overflow-hidden border border-white/10 shadow-xl bg-black`}>
                  
                  {/* Loading indicator */}
                  {isLoading && (
                    <div className="absolute inset-0 bg-[#0E0E0E] flex flex-col items-center justify-center gap-3 z-10 text-center px-4">
                      <div className="w-8 h-8 rounded-full border-2 border-[#F0A24C] border-t-transparent animate-spin" />
                      <p className="text-xs text-[#ADADAD]">Бүтээлийг ачааллаж байна...</p>
                      <p className="text-[11px] text-[#666] font-mono">{primaryProject.url}</p>
                    </div>
                  )}

                  <iframe
                    key={iframeKey}
                    src={primaryProject.url}
                    title={primaryProject.title}
                    onLoad={() => setIsLoading(false)}
                    className="w-full h-[520px] bg-white border-0"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                </div>
              </div>

              {/* Project Details Footer in Card */}
              <div className="p-6 sm:p-8 bg-[#121212] border-t border-white/10 grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Column 1: Info */}
                <div className="lg:col-span-2 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#27C93F]/15 text-[#27C93F] border border-[#27C93F]/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse" />
                      Live ажиллаж байна
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#F0A24C]/15 text-[#F0A24C]">
                      {primaryProject.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {primaryProject.title}
                  </h3>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed">
                    {primaryProject.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {primaryProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md bg-[#1C1C1C] text-[#C4C4C4] border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Column 2: Highlights / Features */}
                <div className="bg-[#181818] rounded-xl p-4 border border-white/5 flex flex-col justify-between gap-4">
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#F0A24C]" />
                      Төслийн онцлог
                    </h4>
                    <ul className="space-y-2 text-xs text-[#9E9E9E]">
                      {primaryProject.features?.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F0A24C] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={primaryProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-[#222] hover:bg-[#F0A24C] hover:text-black text-white text-xs font-medium transition-all"
                  >
                    <span>Шинэ цонхоор зочлох</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>

            {/* Upcoming Next Projects Grid (Pipeline / Roadmap Alignment) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              
              {/* Upcoming Project 1 */}
              <div className="rounded-2xl border border-white/10 bg-[#121212]/70 p-6 flex flex-col justify-between group hover:border-[#F0A24C]/40 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/15 text-blue-400 border border-blue-500/30">
                      Хөгжүүлэгдэж буй
                    </span>
                    <Layers className="w-4 h-4 text-[#777]" />
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-[#F0A24C] transition-colors">
                    Өөрийн хувцас, спортын хэрэглэлийн дэлгүүр
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-[#888] leading-relaxed">
                    Ананд миний мөрөөдлийн брэндийн цахим худалдааны платформ. Спортын хувцас, өдөр тутмын streetwear, пүүз гутлын каталогтой бие даасан онлайн дэлгүүр.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#666]">
                  <span>Төлөвлөгөө: Энэ жил</span>
                  <span className="text-[#F0A24C]">Тун удахгүй →</span>
                </div>
              </div>

              {/* Upcoming Project 2 */}
              <div className="rounded-2xl border border-white/10 bg-[#121212]/70 p-6 flex flex-col justify-between group hover:border-[#F0A24C]/40 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 border border-amber-500/30">
                      Ирээдүйн зорилго
                    </span>
                    <Sparkles className="w-4 h-4 text-[#777]" />
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-[#F0A24C] transition-colors">
                    Basketball & Sneaker Intelligence Hub
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-[#888] leading-relaxed">
                    Сагсан бөмбөгийн тоглолт, пүүзний соёл, лигийн мэдээлэл болон спортын хөдөлгөөн сонирхогчдод зориулсан орчин үеийн аппликейшн.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#666]">
                  <span>Төлөвлөгөө: 2-р шат</span>
                  <span className="text-[#F0A24C]">Үзэл баримтлал →</span>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
