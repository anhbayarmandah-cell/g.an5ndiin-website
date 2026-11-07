import React from 'react';
import { X, Sparkles, Code2, Play, ExternalLink } from 'lucide-react';

interface ActionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message?: string;
}

export const ActionDialog: React.FC<ActionDialogProps> = ({
  isOpen,
  onClose,
  title,
  message,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-md rounded-2xl bg-[#12100E] border border-[#F0A24C]/35 p-6 shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient highlight */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 bg-[#F0A24C]/15 rounded-full blur-2xl" 
        />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[#ADADAD] hover:text-white hover:bg-white/5 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-[#1D1510] border border-[#F0A24C]/40 flex items-center justify-center text-[#F0A24C]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
            <p className="text-xs text-[#ADADAD]">Shipcraft Interactive Workspace</p>
          </div>
        </div>

        <p className="text-sm text-[#ADADAD] leading-relaxed mb-5">
          {message || 'Welcome to Shipcraft. Shape your app with live dual canvas and reactive code synchronization.'}
        </p>

        {/* Quick launch options */}
        <div className="space-y-2 mb-5">
          <button
            type="button"
            onClick={onClose}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-[#1A1612] hover:bg-[#251E18] border border-[#F0A24C]/20 hover:border-[#F0A24C]/50 transition-all text-sm group"
          >
            <div className="flex items-center gap-2.5">
              <Code2 className="w-4 h-4 text-[#F0A24C]" />
              <span className="font-medium text-white">Open Live Browser Canvas</span>
            </div>
            <ExternalLink className="w-4 h-4 text-[#717171] group-hover:text-[#F0A24C] transition-colors" />
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full flex items-center justify-between p-3 rounded-xl bg-[#1A1612] hover:bg-[#251E18] border border-[#F0A24C]/20 hover:border-[#F0A24C]/50 transition-all text-sm group"
          >
            <div className="flex items-center gap-2.5">
              <Play className="w-4 h-4 text-[#F0A24C]" />
              <span className="font-medium text-white">Watch 60-Second Overview</span>
            </div>
            <span className="text-xs text-[#717171] group-hover:text-[#F0A24C]">1:04</span>
          </button>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-[#F0A24C] hover:bg-[#f3ad61] text-[#0D0D0D] font-semibold text-sm transition-all shadow-md"
        >
          Got it
        </button>
      </div>
    </div>
  );
};
