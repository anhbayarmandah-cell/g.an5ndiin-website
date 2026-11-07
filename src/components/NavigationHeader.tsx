import React from 'react';
import { SailMark } from './SailMark.tsx';

interface NavigationHeaderProps {
  onActionClick: (name: string) => void;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({ onActionClick }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#F0A24C]/10 bg-[#0D0D0D]/85 backdrop-blur-md">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark with brand sail */}
        <div 
          onClick={() => onActionClick('Brand Home')}
          className="flex items-center gap-2.5 cursor-pointer shrink-0 group select-none"
        >
          <SailMark size={24} className="group-hover:scale-105 transition-transform" />
          <span className="text-lg font-bold tracking-tight text-white whitespace-nowrap">
            Shipcraft
          </span>
        </div>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#ADADAD]">
          <button 
            type="button" 
            onClick={() => onActionClick('Features')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Features
          </button>
          <button 
            type="button" 
            onClick={() => onActionClick('Canvas')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Canvas
          </button>
          <button 
            type="button" 
            onClick={() => onActionClick('Code Editor')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Code
          </button>
          <button 
            type="button" 
            onClick={() => onActionClick('Showcase')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Showcase
          </button>
          <button 
            type="button" 
            onClick={() => onActionClick('Docs')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Docs
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onActionClick('Get started now')}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#1D1510] border border-[#F0A24C]/45 rounded-lg hover:border-[#F0A24C] hover:bg-[#F0A24C]/15 transition-all whitespace-nowrap shrink-0 shadow-sm"
          >
            Start Free
          </button>
        </div>

      </div>
    </header>
  );
};
