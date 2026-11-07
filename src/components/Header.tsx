'use client';

import React from 'react';
import { Radio, Share2, Flame, Users, Newspaper } from 'lucide-react';
import liveFeeds from '@/data/liveFeeds.json';
import { METADATA_GERAL } from '@/data/mockData';

export default function Header() {
  const ultimaAtualizacao = liveFeeds?.ultimaAtualizacaoFormatada || METADATA_GERAL.ultimaAtualizacao;

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Brand & Live Indicator */}
        <div className="flex items-center gap-3">
          <div className="bg-red-600 text-white p-2 rounded-lg font-black tracking-tighter text-lg flex items-center gap-1.5 shadow-lg shadow-red-600/30">
            <Radio className="w-5 h-5 animate-pulse" />
            <span>RADAR</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-sm sm:text-base leading-none tracking-tight">
                {METADATA_GERAL.nomeRadar}
              </h1>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-red-500/10 text-red-400 border border-red-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                AO VIVO
              </span>
            </div>
            <p className="text-xs text-neutral-400 mt-0.5">
              {ultimaAtualizacao}
            </p>
          </div>
        </div>

        {/* Quick Anchor Navigation */}
        <nav className="flex items-center gap-1 sm:gap-2 text-xs font-medium overflow-x-auto py-1">
          <a
            href="#cards"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Pra Mandar</span>
          </a>
          <a
            href="#narrativas"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-200 hover:bg-neutral-700 transition-colors"
          >
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Guerra Narrativa</span>
          </a>
          <a
            href="#agora"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-200 hover:bg-neutral-700 transition-colors"
          >
            <Newspaper className="w-3.5 h-3.5 text-blue-400" />
            <span>Imprensa</span>
          </a>
          <a
            href="#canais"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-800 text-neutral-200 hover:bg-neutral-700 transition-colors"
          >
            <Users className="w-3.5 h-3.5 text-purple-400" />
            <span>Canais</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
