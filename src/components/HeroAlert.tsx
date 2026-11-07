'use client';

import React from 'react';
import { AlertTriangle, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { METADATA_GERAL } from '@/data/mockData';

export default function HeroAlert() {
  return (
    <section className="bg-gradient-to-b from-neutral-900 to-neutral-950 text-white border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        {/* Urgent Action Banner */}
        <div className="bg-gradient-to-r from-red-950/80 via-neutral-900 to-red-950/80 border border-red-500/30 rounded-2xl p-4 sm:p-6 mb-8 shadow-xl shadow-red-950/20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-red-600/20 text-red-400 border border-red-500/30 rounded-xl shrink-0 mt-0.5">
                <AlertTriangle className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-wider text-red-400 bg-red-500/10 px-2 py-0.5 rounded">
                    Urgente do Dia
                  </span>
                  <span className="text-xs text-neutral-400">Pauta em disputa nas redes</span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white mt-1">
                  Oposição intensifica fake news sobre remédios e inflação nas últimas 6h
                </h2>
                <p className="text-sm text-neutral-300 mt-1">
                  Use os cards checados abaixo para neutralizar boatos nos grupos de WhatsApp da família e do trabalho.
                </p>
              </div>
            </div>

            <a
              href="#cards"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 font-bold text-sm text-white transition-all shadow-lg shadow-red-600/30 shrink-0 w-full sm:w-auto"
            >
              <span>Pegar Cards Prontos</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Highlights Counter */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-3.5 flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-black text-white">{METADATA_GERAL.totalCards}</div>
              <div className="text-xs text-neutral-400 font-medium">Cards Prontos</div>
            </div>
          </div>

          <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-3.5 flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-black text-white">100%</div>
              <div className="text-xs text-neutral-400 font-medium">Fontes Oficiais</div>
            </div>
          </div>

          <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-3.5 flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-black text-white">3 Fakes</div>
              <div className="text-xs text-neutral-400 font-medium">Desmentidas Hoje</div>
            </div>
          </div>

          <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-3.5 flex items-center gap-3">
            <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-black text-white">{METADATA_GERAL.canaisMonitorados}</div>
              <div className="text-xs text-neutral-400 font-medium">Canais em Rede</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
