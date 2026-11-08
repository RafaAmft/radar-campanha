'use client';

import React from 'react';
import liveFeeds from '@/data/liveFeeds.json';
import { MOCK_NOTICIAS, METADATA_GERAL } from '@/data/mockData';
import { Newspaper, ExternalLink, Clock, AlertCircle, Wifi } from 'lucide-react';
import { NoticiaItem } from '@/types';

interface PainelAgoraProps {
  termoBusca?: string;
}

export default function PainelAgora({ termoBusca = '' }: PainelAgoraProps) {
  const todasNoticias: NoticiaItem[] = (liveFeeds?.noticias && liveFeeds.noticias.length > 0)
    ? (liveFeeds.noticias as NoticiaItem[])
    : MOCK_NOTICIAS;

  const noticias = todasNoticias.filter((n) => {
    if (!termoBusca) return true;
    const termo = termoBusca.toLowerCase();
    return (
      n.titulo.toLowerCase().includes(termo) ||
      n.portal.toLowerCase().includes(termo) ||
      (n.resumo && n.resumo.toLowerCase().includes(termo))
    );
  });

  return (
    <section id="agora" className="py-12 bg-neutral-950 text-white border-t border-neutral-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-sky-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Newspaper className="w-4 h-4 text-sky-400" />
              <span>Panorama de Imprensa</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2">
              O Que Está Sendo Noticiado Agora
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-2xl">
              Acompanhe a cobertura dos principais veículos de jornalismo profissional do país em tempo real para entender o contexto das conversas.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <div className="text-neutral-400 bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 flex items-center gap-2">
              <Wifi className="w-4 h-4 text-emerald-400 animate-pulse shrink-0" />
              <span>Feed de Mídia Ativo</span>
            </div>
            <div className="text-neutral-400 bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-400 shrink-0" />
              <span>{liveFeeds?.ultimaAtualizacaoFormatada || METADATA_GERAL.ultimaAtualizacao}</span>
            </div>
          </div>
        </div>

        {/* News Feed Stream */}
        <div className="space-y-3">
          {noticias.map((noticia) => (
            <a
              key={noticia.id}
              href={noticia.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-neutral-900/80 border border-neutral-800 hover:border-sky-500/50 rounded-xl p-4 sm:p-5 transition-all hover:bg-neutral-900 hover:shadow-lg hover:shadow-sky-950/20"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-neutral-400 bg-neutral-950 px-2.5 py-1 rounded border border-neutral-800">
                    {noticia.hora}
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                    {noticia.portal}
                  </span>
                  {noticia.urgente && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      <AlertCircle className="w-3 h-3" />
                      Em Destaque
                    </span>
                  )}
                </div>

                <span className="text-xs text-neutral-500 flex items-center gap-1 group-hover:text-sky-400 transition-colors">
                  <span>Ler matéria completa</span>
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
