'use client';

import React from 'react';
import { Layers, Search, MessageSquare, BookOpen, Newspaper, Users, Flame, Play, ShieldAlert } from 'lucide-react';
import liveFeeds from '@/data/liveFeeds.json';
import { METADATA_GERAL } from '@/data/mockData';

interface HeaderProps {
  termoBusca?: string;
  setTermoBusca?: (termo: string) => void;
}

export default function Header({ termoBusca = '', setTermoBusca }: HeaderProps) {
  const ultimaAtualizacao = liveFeeds?.ultimaAtualizacaoFormatada || METADATA_GERAL.ultimaAtualizacao;

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 text-white shadow-xl shadow-black/40">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Brand & Identity */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-2 rounded-xl font-black tracking-tight text-lg flex items-center gap-1.5 shadow-lg shadow-emerald-950/50">
                <Layers className="w-5 h-5 text-emerald-200" />
                <span className="font-extrabold tracking-tight">NEXO</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-bold text-base tracking-tight text-white">
                    {METADATA_GERAL.nomeRadar}
                  </h1>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    INTELIGÊNCIA CIDADÃ
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400">
                  {METADATA_GERAL.slogan} • {ultimaAtualizacao}
                </p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          {setTermoBusca && (
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar 6x1, bets, salário, saúde..."
                value={termoBusca}
                onChange={(e) => setTermoBusca(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 focus:border-emerald-500 rounded-xl pl-9 pr-4 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none transition-all shadow-inner"
              />
              {termoBusca && (
                <button
                  onClick={() => setTermoBusca('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-xs px-1"
                >
                  ✕
                </button>
              )}
            </div>
          )}
        </div>

        {/* Quick Anchor Navigation */}
        <nav className="flex items-center gap-1.5 sm:gap-2 text-xs font-medium overflow-x-auto pt-2.5 mt-2 border-t border-neutral-900 scrollbar-none">
          <a
            href="#assuntos"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors whitespace-nowrap"
          >
            <Flame className="w-3.5 h-3.5 text-emerald-400" />
            <span>Assuntos do Momento</span>
          </a>
          <a
            href="#agora"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20 hover:bg-sky-500/20 transition-colors whitespace-nowrap"
          >
            <Newspaper className="w-3.5 h-3.5 text-sky-400" />
            <span>Imprensa</span>
          </a>
          <a
            href="#videos"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20 hover:bg-rose-500/20 transition-colors whitespace-nowrap"
          >
            <Play className="w-3.5 h-3.5 text-rose-400" />
            <span>Vídeos por Assunto</span>
          </a>
          <a
            href="#dossies"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 transition-colors whitespace-nowrap"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-blue-400" />
            <span>Raio-X da Mentira</span>
          </a>
          <a
            href="#cards"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800 transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>Cards de Zap</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
