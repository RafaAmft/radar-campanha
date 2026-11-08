'use client';

import React from 'react';
import { Vote, ArrowUpRight, ShieldCheck, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { MOCK_PAUTAS_ACAO } from '@/data/mockData';

export default function BriefingLegislativo() {
  return (
    <section id="acao" className="bg-gradient-to-b from-neutral-900 to-neutral-950 text-white border-b border-neutral-800 py-8 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-amber-400 font-bold text-xs uppercase tracking-wider mb-1.5">
              <Vote className="w-4 h-4 text-amber-400" />
              <span>Mobilização Permanente & Pressão Cidadã</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Pautas em Disputa no Congresso & Sociedade
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-2xl">
              A eleição passou, mas a disputa por direitos continua todo dia. Acompanhe onde a pressão popular faz a diferença agora.
            </p>
          </div>

          <div className="text-xs text-neutral-400 bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Consultas públicas oficiais com voto aberto</span>
          </div>
        </div>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {MOCK_PAUTAS_ACAO.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-950/80 border border-neutral-800 hover:border-amber-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/60 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    Pauta Ativa
                  </span>
                  <span className="text-[11px] text-neutral-500 font-medium flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-emerald-400" />
                    Em votação
                  </span>
                </div>

                <h3 className="font-bold text-base text-white group-hover:text-amber-200 transition-colors">
                  {item.pauta}
                </h3>

                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  {item.contexto}
                </p>

                <div className="mt-3 text-[11px] text-neutral-500 font-medium border-t border-neutral-900 pt-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="line-clamp-1">{item.status}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800/80">
                <a
                  href={item.acaoCidada.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-neutral-950 transition-all shadow-md shadow-amber-950/20 active:scale-[0.98]"
                >
                  <span>{item.acaoCidada.textoBotao}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
