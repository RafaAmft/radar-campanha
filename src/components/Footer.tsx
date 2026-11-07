'use client';

import React from 'react';
import { ArrowUp, Radio, Heart } from 'lucide-react';
import { METADATA_GERAL } from '@/data/mockData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800/80 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
        <div className="flex items-center gap-3">
          <div className="bg-red-600 text-white p-1.5 rounded-md font-black tracking-tighter text-sm flex items-center gap-1">
            <Radio className="w-4 h-4" />
            <span>RADAR</span>
          </div>
          <div>
            <div className="text-white font-bold">{METADATA_GERAL.nomeRadar}</div>
            <p className="text-neutral-500 mt-0.5">{METADATA_GERAL.slogan}</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1 text-neutral-400">
            Construído para mobilização cidadã <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
          </span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Voltar ao topo</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
