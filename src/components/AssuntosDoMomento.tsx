'use client';

import React, { useState } from 'react';
import { Flame, TrendingUp, Sparkles, Filter, ExternalLink, ArrowDownRight, MessageCircle } from 'lucide-react';
import { MOCK_ASSUNTOS_MOMENTO } from '@/data/mockData';
import { CampoPolitico, AssuntoMomentoItem } from '@/types';

interface AssuntosDoMomentoProps {
  termoBusca?: string;
}

export default function AssuntosDoMomento({ termoBusca = '' }: AssuntosDoMomentoProps) {
  const [filtroCampo, setFiltroCampo] = useState<CampoPolitico | 'todos'>('todos');

  const assuntosFiltrados = MOCK_ASSUNTOS_MOMENTO.filter((item) => {
    // Filtro por termo de busca
    if (termoBusca) {
      const termo = termoBusca.toLowerCase();
      const bateTermo = (
        item.termo.toLowerCase().includes(termo) ||
        item.contextoCurto.toLowerCase().includes(termo) ||
        (item.contraNarrativa && item.contraNarrativa.toLowerCase().includes(termo))
      );
      if (!bateTermo) return false;
    }

    // Filtro por campo político
    if (filtroCampo === 'todos') return true;
    return item.campo === filtroCampo;
  });

  const getRedeBadge = (rede: string) => {
    switch (rede) {
      case 'x':
        return <span key={rede} className="px-1.5 py-0.5 rounded bg-black/60 text-[10px] font-mono text-neutral-300 border border-neutral-700">𝕏 X</span>;
      case 'google':
        return <span key={rede} className="px-1.5 py-0.5 rounded bg-blue-950/60 text-[10px] font-mono text-blue-300 border border-blue-800/40">G Trends</span>;
      case 'tiktok':
        return <span key={rede} className="px-1.5 py-0.5 rounded bg-pink-950/60 text-[10px] font-mono text-pink-300 border border-pink-800/40">TikTok</span>;
      case 'kwai':
        return <span key={rede} className="px-1.5 py-0.5 rounded bg-amber-950/60 text-[10px] font-mono text-amber-300 border border-amber-800/40">Kwai</span>;
      default:
        return null;
    }
  };

  const getVelocidadeBadge = (vel: string) => {
    switch (vel) {
      case 'acelerando':
        return (
          <span className="flex items-center gap-1 text-[11px] font-bold text-rose-400 bg-rose-950/50 border border-rose-800/40 px-2 py-0.5 rounded-full">
            <Flame className="w-3 h-3 text-rose-400 fill-rose-400 animate-pulse" />
            Acelerando
          </span>
        );
      case 'pico':
        return (
          <span className="flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-950/50 border border-amber-800/40 px-2 py-0.5 rounded-full">
            <TrendingUp className="w-3 h-3 text-amber-400" />
            Em Pico
          </span>
        );
      default:
        return (
          <span className="flex items-center gap-1 text-[11px] font-medium text-blue-400 bg-blue-950/50 border border-blue-800/40 px-2 py-0.5 rounded-full">
            Constante
          </span>
        );
    }
  };

  return (
    <section id="assuntos" className="py-8 bg-neutral-950 text-white border-b border-neutral-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Topo da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1.5">
              <Flame className="w-4 h-4 text-emerald-400 fill-emerald-400" />
              <span>Radar de Redes & Tendências</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2">
              Assuntos do Momento <span className="text-emerald-400 font-mono text-xl sm:text-2xl">({assuntosFiltrados.length})</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-2xl">
              O que está em alta no <strong>X</strong>, <strong>Google</strong>, <strong>TikTok</strong> e <strong>Kwai</strong>. Filtre por campo para saber onde contra-atacar.
            </p>
          </div>

          {/* Filtros por Campo Político */}
          <div className="flex items-center gap-1.5 bg-neutral-900 p-1 rounded-xl border border-neutral-800 self-start md:self-auto overflow-x-auto max-w-full">
            <a
              href="https://www12.senado.leg.br/ecidadania"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-amber-400 bg-amber-950/40 border border-amber-800/40 hover:bg-amber-950/70 transition-colors flex items-center gap-1 whitespace-nowrap"
            >
              <span>🏛️ Consultas e-Cidadania</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={() => setFiltroCampo('todos')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                filtroCampo === 'todos'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Todos ({MOCK_ASSUNTOS_MOMENTO.length})
            </button>
            <button
              onClick={() => setFiltroCampo('nosso')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                filtroCampo === 'nosso'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-emerald-400 hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-300"></span>
              <span>Nosso Campo</span>
            </button>
            <button
              onClick={() => setFiltroCampo('deles')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                filtroCampo === 'deles'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'text-rose-400 hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-rose-300"></span>
              <span>Campo Deles (Fakes)</span>
            </button>
          </div>
        </div>

        {/* Cards de Assuntos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {assuntosFiltrados.map((item) => (
            <div
              key={item.id}
              className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                item.campo === 'deles'
                  ? 'bg-rose-950/15 border-rose-900/40 hover:border-rose-700/60'
                  : 'bg-neutral-900/70 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div>
                {/* Cabeçalho do Card */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                    item.campo === 'deles'
                      ? 'bg-rose-950 text-rose-300 border border-rose-800/40'
                      : 'bg-emerald-950 text-emerald-300 border border-emerald-800/40'
                  }`}>
                    {item.campo === 'deles' ? 'Narrativa da Direita' : 'Pauta Popular'}
                  </span>
                  {getVelocidadeBadge(item.velocidade)}
                </div>

                {/* Termo e Volume */}
                <h3 className="font-black text-base text-white tracking-tight leading-snug mb-1">
                  {item.termo}
                </h3>
                <div className="flex items-center gap-2 mb-3 text-xs text-neutral-400">
                  <span className="font-semibold text-neutral-300">{item.volume}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    {item.redes.map((r) => getRedeBadge(r))}
                  </div>
                </div>

                {/* Contexto Rápido */}
                <p className="text-xs text-neutral-300 leading-relaxed mb-3">
                  {item.contextoCurto}
                </p>

                {/* Dica de Contra-Narrativa se for do campo deles */}
                {item.contraNarrativa && (
                  <div className={`p-2.5 rounded-xl text-xs mb-3 ${
                    item.campo === 'deles'
                      ? 'bg-rose-950/30 border border-rose-900/40 text-rose-200'
                      : 'bg-emerald-950/30 border border-emerald-900/40 text-emerald-200'
                  }`}>
                    <strong className="block font-bold mb-0.5">
                      {item.campo === 'deles' ? '🛡️ Como desmontar:' : '💡 Ponto forte:'}
                    </strong>
                    <span>{item.contraNarrativa}</span>
                  </div>
                )}
              </div>

              {/* Ações no Rodapé do Card */}
              <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between gap-2 text-xs">
                {item.dossieIdRef ? (
                  <a
                    href="#dossies"
                    className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-semibold"
                  >
                    <span>Ver Raio-X</span>
                    <ArrowDownRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <a
                    href="https://www12.senado.leg.br/ecidadania"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold"
                  >
                    <span>Opinar no e-Cidadania</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`🔥 Assunto em alta: *${item.termo}*\n\n${item.contextoCurto}\n\n🛡️ *Fato:* ${item.contraNarrativa || ''}\n\nMais no Nexo Popular: https://radar-campanha.pages.dev`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-[11px] transition-colors"
                >
                  <MessageCircle className="w-3 h-3 fill-white" />
                  <span>Avisar no Zap</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
