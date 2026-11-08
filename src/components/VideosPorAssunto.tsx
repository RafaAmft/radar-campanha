'use client';

import React, { useState } from 'react';
import { Play, MessageCircle, Share2, Video, ExternalLink, Filter } from 'lucide-react';
import { MOCK_VIDEOS_ASSUNTO } from '@/data/mockData';
import { VideoAssuntoItem } from '@/types';

interface VideosPorAssuntoProps {
  termoBusca?: string;
}

export default function VideosPorAssunto({ termoBusca = '' }: VideosPorAssuntoProps) {
  const [temaSelecionado, setTemaSelecionado] = useState<string>('todos');

  // Obter lista única de temas
  const temasDisponiveis = ['todos', ...Array.from(new Set(MOCK_VIDEOS_ASSUNTO.map(v => v.tema)))];

  const videosFiltrados = MOCK_VIDEOS_ASSUNTO.filter((video) => {
    // Filtro por termo de busca
    if (termoBusca) {
      const termo = termoBusca.toLowerCase();
      const bateTermo = (
        video.titulo.toLowerCase().includes(termo) ||
        video.tema.toLowerCase().includes(termo) ||
        video.canal.toLowerCase().includes(termo) ||
        video.resumo.toLowerCase().includes(termo)
      );
      if (!bateTermo) return false;
    }

    // Filtro por tema
    if (temaSelecionado === 'todos') return true;
    return video.tema === temaSelecionado;
  });

  const handleMandarZap = (video: VideoAssuntoItem) => {
    const texto = `📹 *VÍDEO IMPORTANTE SOBRE ${video.tema.toUpperCase()}*\n\n` +
      `"${video.titulo}"\n` +
      `Por: ${video.canal} (${video.duracao})\n\n` +
      `💡 *Resumo:* ${video.resumo}\n\n` +
      `Assista aqui: ${video.urlVideo}\n\n` +
      `Compartilhado via Nexo Popular: https://radar-campanha.pages.dev`;

    const zapUrl = `https://wa.me/?text=${encodeURIComponent(texto)}`;
    window.open(zapUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="videos" className="py-12 bg-neutral-900 text-white border-b border-neutral-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-rose-400 font-bold text-xs uppercase tracking-wider mb-1.5">
              <Play className="w-4 h-4 text-rose-400 fill-rose-400" />
              <span>Vídeos Curtos para Disparo</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2">
              Vídeos por Assunto <span className="text-rose-400 font-mono text-xl sm:text-2xl">({videosFiltrados.length})</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-2xl">
              Conteúdos diretos e bem fundamentados organizados por tema. Assista no metrô e mande no grupo da família com 1 toque.
            </p>
          </div>

          {/* Filtro por Tema */}
          <div className="flex items-center gap-1.5 bg-neutral-950 p-1 rounded-xl border border-neutral-800 self-start md:self-auto overflow-x-auto max-w-full">
            {temasDisponiveis.map((tema) => (
              <button
                key={tema}
                onClick={() => setTemaSelecionado(tema)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  temaSelecionado === tema
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tema === 'todos' ? 'Todos os Temas' : tema}
              </button>
            ))}
          </div>
        </div>

        {/* Grade de Vídeos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {videosFiltrados.map((video) => (
            <div
              key={video.id}
              className="bg-neutral-950 border border-neutral-800 hover:border-neutral-700 rounded-2xl overflow-hidden shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail / Header do Card */}
                <div className="relative aspect-video w-full bg-neutral-900 overflow-hidden group">
                  <img
                    src={video.thumbnail}
                    alt={video.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Badge de Duração e Tema */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                    <span className="bg-black/80 backdrop-blur-sm text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                      {video.duracao}
                    </span>
                    <span className="bg-rose-950/80 border border-rose-800/40 text-rose-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      {video.tema}
                    </span>
                  </div>

                  {/* Play Button Overlay */}
                  <a
                    href={video.urlVideo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </a>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-4">
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-1.5">
                    <span className="font-semibold text-neutral-200 flex items-center gap-1">
                      <Video className="w-3.5 h-3.5 text-rose-500" />
                      {video.canal}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-white leading-snug line-clamp-2 mb-2">
                    {video.titulo}
                  </h3>

                  <p className="text-xs text-neutral-300 leading-relaxed line-clamp-2">
                    {video.resumo}
                  </p>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="p-4 pt-0 flex items-center gap-2">
                <a
                  href={video.urlVideo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-semibold text-neutral-200 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Assistir</span>
                </a>

                <button
                  onClick={() => handleMandarZap(video)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Mandar no Zap</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
