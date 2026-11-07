import React from 'react';
import { Terminal, Sparkles, Trophy } from 'lucide-react';

interface AnandNavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenIdolChat: () => void;
}

export const AnandNavbar: React.FC<AnandNavbarProps> = ({ activeTab, setActiveTab, onOpenIdolChat }) => {
  const navItems = [
    { id: 'about', label: 'Миний тухай' },
    { id: 'dream', label: 'Мөрөөдлийн ажил' },
    { id: 'roadmap', label: 'Төлөвлөгөө' },
    { id: 'facts', label: 'Сонирхолтой баримтууд' },
    { id: 'projects', label: 'Миний бүтээлүүд' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#F0A24C]/15 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand / Name Logo */}
        <button
          type="button"
          onClick={() => setActiveTab('about')}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-[#1D1510] border border-[#F0A24C]/40 flex items-center justify-center text-[#F0A24C] group-hover:scale-105 group-hover:border-[#F0A24C] transition-all">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base font-bold text-white tracking-tight">АНАНД</span>
              <span className="text-xs px-1.5 py-0.2 rounded bg-[#F0A24C]/15 text-[#F0A24C] font-mono">16 нас</span>
            </div>
            <p className="text-[11px] text-[#7D7D7D] hidden sm:block">Software Engineer & Founder</p>
          </div>
        </button>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#1D1510] text-[#F0A24C] border border-[#F0A24C]/50 shadow-[0_0_12px_rgba(240,162,76,0.2)]'
                    : 'text-[#ADADAD] hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          {/* My Idol Menu Item (Opens Gemini Chat Modal) */}
          <button
            type="button"
            onClick={onOpenIdolChat}
            className="px-2.5 sm:px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 bg-gradient-to-r from-[#F0A24C]/15 to-[#F0A24C]/25 text-[#F0A24C] border border-[#F0A24C]/40 hover:border-[#F0A24C] hover:bg-[#F0A24C]/30 shadow-[0_0_12px_rgba(240,162,76,0.2)]"
            title="My Idol AI Чат цонх нээх"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#F0A24C]" />
            <span>My Idol</span>
          </button>
        </nav>

        {/* Action Button: Goal Highlight */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenIdolChat}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A1410] border border-[#F0A24C]/40 text-[#F0A24C] text-xs font-medium hover:scale-105 transition-transform cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F0A24C]" />
            <span>AI Idol Чат</span>
          </button>
        </div>

      </div>
    </header>
  );
};
