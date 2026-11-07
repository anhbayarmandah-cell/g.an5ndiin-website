/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnandNavbar } from './components/AnandNavbar.tsx';
import { AnandHero } from './components/AnandHero.tsx';
import { AnandDreamJob } from './components/AnandDreamJob.tsx';
import { AnandRoadmap } from './components/AnandRoadmap.tsx';
import { AnandFacts } from './components/AnandFacts.tsx';
import { AnandProjects } from './components/AnandProjects.tsx';
import { MotivationQuote } from './components/MotivationQuote.tsx';
import { AnandFooter } from './components/AnandFooter.tsx';
import { MyIdolChatModal } from './components/MyIdolChatModal.tsx';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('about');
  const [isIdolModalOpen, setIsIdolModalOpen] = useState<boolean>(false);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#ADADAD] flex flex-col justify-between selection:bg-[#F0A24C]/30 selection:text-white relative">
      {/* Navigation Header */}
      <AnandNavbar 
        activeTab={activeTab} 
        setActiveTab={handleTabChange} 
        onOpenIdolChat={() => setIsIdolModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* About / Hero Section */}
        <div id="about">
          <AnandHero onNavigateTab={handleTabChange} />
        </div>

        {/* Dream Career Section */}
        <div id="dream">
          <AnandDreamJob />
        </div>

        {/* Roadmap / Goals Section */}
        <div id="roadmap">
          <AnandRoadmap />
        </div>

        {/* Facts & Hobbies Section */}
        <div id="facts">
          <AnandFacts />
        </div>

        {/* My Projects Section */}
        <div id="projects">
          <AnandProjects />
        </div>

        {/* Motivation Quote Section at the bottom */}
        <MotivationQuote />
      </main>

      {/* Floating Action Button for My Idol Chat */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsIdolModalOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-[#F0A24C] to-[#E08D33] text-black font-bold text-xs sm:text-sm shadow-[0_8px_25px_rgba(240,162,76,0.35)] hover:shadow-[0_10px_30px_rgba(240,162,76,0.5)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <div className="w-6 h-6 rounded-lg bg-black/15 flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-black animate-pulse" />
          </div>
          <span>My Idol Чат</span>
          <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-black/40 animate-ping" />
        </button>
      </div>

      {/* My Idol Chat Modal (Gemini Powered) */}
      <MyIdolChatModal 
        isOpen={isIdolModalOpen} 
        onClose={() => setIsIdolModalOpen(false)} 
      />

      {/* Footer */}
      <AnandFooter />
    </div>
  );
}
