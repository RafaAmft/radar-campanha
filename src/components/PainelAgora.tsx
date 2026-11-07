'use client';

import React from 'react';
import { MOCK_NOTICIAS, METADATA_GERAL } from '@/data/mockData';
import { Newspaper, ExternalLink, Clock, AlertCircle } from 'lucide-react';

export default function PainelAgora() {
  return (
    <section id="agora" className="py-12 bg-neutral-950 text-white border-t border-neutral-800 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Newspaper className="w-4 h-4 text-blue-400" />
              <span>Monitoramento de Mídia</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2">
              Painel da Imprensa & Agora
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-2xl">
              O que os principais portais e agências estão pautando nas últimas 24 horas. Acompanhe a repercussão da campanha em tempo real.
            </p>
          </div>

          <div className="text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Monitorando {METADATA_GERAL.totalPortais} portais de notícias</span>
          </div>
        </div>

        {/* News Feed Stream */}
        <div className="space-y-3">
          {MOCK_NOTICIAS.map((noticia) => (
            <a
              key={noticia.id}
              href={noticia.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-neutral-900 border border-neutral-800 hover:border-blue-500/50 rounded-xl p-4 sm:p-5 transition-all hover:bg-neutral-900/90 hover:shadow-lg hover:shadow-blue-950/20"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-neutral-400 bg-neutral-950 px-2.5 py-1 rounded border border-neutral-800">
                    {noticia.hora}
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                    {noticia.portal}
                  </span>
                  {noticia.urgente && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                      <AlertCircle className="w-3 h-3" />
                      Urgente
                    </span>
                  )}
                </div>

                <span className="text-xs text-neutral-500 flex items-center gap-1 group-hover:text-blue-400 transition-colors">
                  <span>Ler na íntegra</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>

              <h3 className="font-bold text-base sm:text-lg text-neutral-100 group-hover:text-white mt-2 transition-colors">
                {noticia.titulo}
              </h3>

              {noticia.resumo && (
                <p className="text-sm text-neutral-400 mt-1">
                  {noticia.resumo}
                </p>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
