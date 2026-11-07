'use client';

import React from 'react';
import { MOCK_CANAIS, METADATA_GERAL } from '@/data/mockData';
import { Users, Video, Radio, ExternalLink, PlayCircle } from 'lucide-react';

export default function RedeCriadores() {
  return (
    <section id="canais" className="py-12 bg-neutral-900 text-white border-t border-neutral-800 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-purple-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Users className="w-4 h-4 text-purple-400" />
              <span>Ecossistema de Comunicação</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2">
              Rede de Criadores & Mídia Parceira
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-2xl">
              Acompanhe os canais independentes que furam a bolha. Fortaleça o alcance assistindo, curtindo e compartilhando os conteúdos mais recentes.
            </p>
          </div>

          {/* Activity Status Legend */}
          <div className="flex flex-wrap items-center gap-3 text-xs bg-neutral-950 p-2.5 rounded-xl border border-neutral-800">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50"></span>
              Postou em 24h
            </span>
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              Postou em 72h
            </span>
            <span className="flex items-center gap-1.5 text-neutral-400 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-600"></span>
              Sem vídeo novo
            </span>
          </div>
        </div>

        {/* Creator Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MOCK_CANAIS.map((canal) => {
            const is24h = canal.status === '24h';
            const is72h = canal.status === '72h';

            return (
              <div
                key={canal.id}
                className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5 flex flex-col justify-between hover:border-purple-500/40 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-950/20"
              >
                <div>
                  {/* Channel Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={canal.avatar}
                          alt={canal.nome}
                          className="w-12 h-12 rounded-full object-cover border-2 border-neutral-700"
                        />
                        <span
                          className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-neutral-950 ${
                            is24h
                              ? 'bg-emerald-500'
                              : is72h
                              ? 'bg-amber-400'
                              : 'bg-neutral-600'
                          }`}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-white hover:text-purple-300 transition-colors">
                          {canal.nome}
                        </h3>
                        <span className="text-xs text-neutral-400 block font-medium">
                          {canal.seguidores} seguidores • {canal.plataforma.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    <a
                      href={canal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors border border-neutral-800"
                      aria-label="Abrir canal"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Latest Video / Post Box */}
                  <div className="bg-neutral-900/80 border border-neutral-800/80 rounded-xl p-3">
                    <div className="flex items-center justify-between text-[11px] mb-1.5">
                      <span className="text-neutral-400 flex items-center gap-1 font-semibold">
                        <Video className="w-3 h-3 text-purple-400" />
                        Último Conteúdo
                      </span>
                      <span
                        className={`font-semibold ${
                          is24h
                            ? 'text-emerald-400'
                            : is72h
                            ? 'text-amber-400'
                            : 'text-neutral-500'
                        }`}
                      >
                        {canal.ultimoVideo.tempoAtras}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-200 font-medium line-clamp-2">
                      {canal.ultimoVideo.titulo}
                    </p>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="mt-4 pt-3 border-t border-neutral-800/80">
                  <a
                    href={canal.ultimoVideo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold bg-purple-600/10 hover:bg-purple-600 text-purple-300 hover:text-white transition-colors border border-purple-500/20"
                  >
                    <PlayCircle className="w-3.5 h-3.5" />
                    <span>Assistir e Engajar</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
