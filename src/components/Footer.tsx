'use client';

import React from 'react';
import { ArrowUp, Layers, Heart, ShieldCheck } from 'lucide-react';
import { METADATA_GERAL } from '@/data/mockData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800/80 py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs">
        <div className="max-w-md">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-emerald-600 text-white p-1 rounded-md">
              <Layers className="w-4 h-4 text-emerald-200" />
            </div>
            <span className="text-white font-extrabold text-sm tracking-tight">{METADATA_GERAL.nomeRadar}</span>
            <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Dados Abertos
            </span>
          </div>
          <p className="text-neutral-500 leading-relaxed">
            Plataforma cívica para fortalecer o debate público com dados verificados do IBGE, DIEESE, Senado Federal e agências de checagem. Feito para aproximar pessoas e defender direitos.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-neutral-400">
          <span className="flex items-center gap-1.5 text-neutral-500">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            100% Fontes Oficiais e Verificadas
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
