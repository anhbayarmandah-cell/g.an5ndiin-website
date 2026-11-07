import React, { useState } from 'react';
import { SailMark } from './SailMark.tsx';
import { ArrowRight, Check, Linkedin, Instagram, Youtube } from 'lucide-react';

interface ShipcraftFooterProps {
  onNavigate?: (item: string) => void;
  onSubscribe?: (email: string) => void;
}

export const ShipcraftFooter: React.FC<ShipcraftFooterProps> = ({ onNavigate, onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email address');
      return;
    }
    setError('');
    setSubscribed(true);
    if (onSubscribe) {
      onSubscribe(email);
    }
  };

  const productLinks = ['Preview', 'Features', 'How it works', 'Developers'];
  const resourceLinks = ['Blog', 'Documentation', 'Videos', 'Community'];
  const companyLinks = ['Contact', 'Privacy', 'Terms of Service'];

  return (
    <footer className="anim-footer relative w-full pt-16 pb-12 border-t border-[#F0A24C]/15 bg-[#0D0D0D]">
      <div className="max-w-[1340px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main 4-Part Grid + Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          
          {/* Part 1: Brand Column */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Brand Logo & Name */}
              <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate?.('Home')}>
                <SailMark size={30} className="group-hover:scale-105 transition-transform" />
                <span className="text-2xl font-bold tracking-tight text-white font-['Plus_Jakarta_Sans',sans-serif]">
                  shipcraft
                </span>
              </div>

              {/* Blurb */}
              <p className="text-sm leading-relaxed text-[#ADADAD] max-w-sm">
                Shipcraft keeps every surface in sync, <br className="hidden sm:inline" />
                so you never rebuild from scratch.
              </p>
            </div>

            {/* Social Icons (outline, colored #E0A165) */}
            <div className="pt-2">
              <div className="flex items-center gap-3">
                <a
                  href="#linkedin"
                  aria-label="LinkedIn"
                  onClick={(e) => { e.preventDefault(); onNavigate?.('LinkedIn'); }}
                  className="w-9 h-9 rounded-lg border border-[#E0A165]/25 flex items-center justify-center text-[#E0A165] hover:text-[#F0A24C] hover:border-[#F0A24C]/60 hover:bg-[#F0A24C]/10 transition-all"
                >
                  <Linkedin className="w-4 h-4 stroke-[1.6]" />
                </a>
                <a
                  href="#instagram"
                  aria-label="Instagram"
                  onClick={(e) => { e.preventDefault(); onNavigate?.('Instagram'); }}
                  className="w-9 h-9 rounded-lg border border-[#E0A165]/25 flex items-center justify-center text-[#E0A165] hover:text-[#F0A24C] hover:border-[#F0A24C]/60 hover:bg-[#F0A24C]/10 transition-all"
                >
                  <Instagram className="w-4 h-4 stroke-[1.6]" />
                </a>
                <a
                  href="#youtube"
                  aria-label="YouTube"
                  onClick={(e) => { e.preventDefault(); onNavigate?.('YouTube'); }}
                  className="w-9 h-9 rounded-lg border border-[#E0A165]/25 flex items-center justify-center text-[#E0A165] hover:text-[#F0A24C] hover:border-[#F0A24C]/60 hover:bg-[#F0A24C]/10 transition-all"
                >
                  <Youtube className="w-4 h-4 stroke-[1.6]" />
                </a>
              </div>
            </div>
          </div>

          {/* Part 2: Product Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase text-xs">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              {productLinks.map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    onClick={() => onNavigate?.(link)}
                    className="text-[#7D7D7D] hover:text-[#F0A24C] transition-colors text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Part 3: Resources Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase text-xs">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              {resourceLinks.map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    onClick={() => onNavigate?.(link)}
                    className="text-[#7D7D7D] hover:text-[#F0A24C] transition-colors text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Part 4: Company Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase text-xs">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    onClick={() => onNavigate?.(link)}
                    className="text-[#7D7D7D] hover:text-[#F0A24C] transition-colors text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-sm font-semibold text-white">
              Subscribe to our newsletter
            </h4>
            
            {subscribed ? (
              <div className="p-3 rounded-lg bg-[#1D1510] border border-[#F0A24C]/40 text-xs text-[#F0A24C] flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>You are subscribed. Welcome to Shipcraft!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="relative flex items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="jane@shipcraft.example"
                    className="w-full pl-3 pr-11 py-2.5 bg-[#141414]/90 border border-[#F0A24C]/25 rounded-lg text-sm text-white placeholder-[#717171] focus:outline-none focus:border-[#F0A24C] transition-colors shadow-inner"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="warm-metal-button absolute right-1.5 top-1.5 bottom-1.5 px-2.5 rounded-md flex items-center justify-center text-[#F0A24C] hover:text-white cursor-pointer"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                {error && <p className="text-xs text-rose-400">{error}</p>}
                <p className="text-xs text-[#717171]">
                  Unsubscribe anytime
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </footer>
  );
};
