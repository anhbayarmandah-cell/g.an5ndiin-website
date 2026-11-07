import React from 'react';
import { Terminal, Dribbble, Heart } from 'lucide-react';

export const AnandFooter: React.FC = () => {
  return (
    <footer className="w-full bg-[#090909] border-t border-[#F0A24C]/15 py-12 text-[#ADADAD]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1D1510] border border-[#F0A24C]/40 flex items-center justify-center text-[#F0A24C]">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">АНАНД</h3>
              <p className="text-xs text-[#7D7D7D]">16 настай · Software Engineer & Founder / CEO</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#ADADAD]">
            <span>🏀 JCL Сагсан бөмбөг</span>
            <span>👟 Sneaker & Streetwear</span>
            <span>💻 Web & Code</span>
            <a 
              href="https://comforting-chebakia-654408.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#F0A24C] hover:underline flex items-center gap-1"
            >
              <span>🚀 Chebakia Вэб</span>
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#717171]">
          <p>© 2026 Ананд. Бүх эрх хуулиар хамгаалагдсан.</p>
          <p className="flex items-center gap-1">
            <span>Зорилгодоо тууштай хүрнэ</span>
            <Heart className="w-3.5 h-3.5 text-[#F0A24C] fill-[#F0A24C]/20" />
          </p>
        </div>

      </div>
    </footer>
  );
};
