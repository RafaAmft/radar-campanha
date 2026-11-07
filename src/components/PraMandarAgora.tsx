'use client';

import React, { useState } from 'react';
import { MOCK_CARDS } from '@/data/mockData';
import { CardItem, CategoriaCard } from '@/types';
import { Download, Copy, Check, MessageCircle, ExternalLink, Share2, Sparkles } from 'lucide-react';

export default function PraMandarAgora() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>('todos');
  const [copiadoId, setCopiadoId] = useState<string | null>(null);

  const categorias = [
    { id: 'todos', label: 'Todos os Cards' },
    { id: 'urgente', label: '🔥 Urgentes' },
    { id: 'fakenews', label: '🛡️ Checagem de Fakes' },
    { id: 'economia', label: '📈 Economia & Salário' },
    { id: 'propostas', label: '💡 Propostas' },
    { id: 'social', label: '🤝 Direitos & Social' },
  ];

  const cardsFiltrados = categoriaAtiva === 'todos'
    ? MOCK_CARDS
    : MOCK_CARDS.filter((c) => c.categoria === categoriaAtiva);

  const handleCopiarTexto = (card: CardItem) => {
    navigator.clipboard.writeText(card.textoZap);
    setCopiadoId(card.id);
    setTimeout(() => {
      setCopiadoId(null);
    }, 2500);
  };

  const handleCompartilharZap = (card: CardItem) => {
    const zapUrl = `https://wa.me/?text=${encodeURIComponent(card.textoZap)}`;
    window.open(zapUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="cards" className="py-12 bg-neutral-950 text-white scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Share2 className="w-4 h-4" />
              <span>Ação Direta da Militância</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2">
              Pra Mandar Agora <span className="text-red-500 font-mono text-xl sm:text-2xl">({cardsFiltrados.length})</span>
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-2xl">
              Cards com dados checados e mensagens prontas para rebater fake news e mobilizar eleitores indecisos no WhatsApp e redes sociais.
            </p>
          </div>

          <div className="text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Toque em <b>WhatsApp</b> para disparar nos grupos</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoriaAtiva(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                categoriaAtiva === cat.id
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                  : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsFiltrados.map((card) => {
            const copiado = copiadoId === card.id;

            return (
              <article
                key={card.id}
                className="bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 group"
              >
                {/* Visual Header / Card Image */}
                <div className="relative aspect-[4/3] bg-neutral-950 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.imagemUrl}
                    alt={card.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-md text-white shadow-md ${card.corBadge}`}>
                      {card.badge}
                    </span>
                  </div>

                  {/* Time Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[11px] font-medium bg-black/60 backdrop-blur-md text-neutral-300 px-2 py-1 rounded-md border border-white/10">
                      {card.data}
                    </span>
                  </div>

                  {/* Headline over Image */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white font-black text-base sm:text-lg leading-snug drop-shadow-md">
                      {card.fraseDestaque}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-neutral-200">
                      {card.titulo}
                    </h3>
                    {card.subtitulo && (
                      <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                        {card.subtitulo}
                      </p>
                    )}
                    {card.fonte && (
                      <div className="mt-2 text-[10px] text-neutral-500 font-medium">
                        {card.fonte}
                      </div>
                    )}
                  </div>

                  {/* WhatsApp Message Preview Quote */}
                  <div className="mt-4 bg-neutral-950/60 border border-neutral-800/80 rounded-xl p-3 text-xs text-neutral-300 font-mono line-clamp-3">
                    {card.textoZap}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-4 pt-3 border-t border-neutral-800/80 flex flex-col gap-2">
                    {/* Primary Button: Disparar no WhatsApp */}
                    <button
                      onClick={() => handleCompartilharZap(card)}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md shadow-emerald-700/20 active:scale-[0.98] cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Mandar no WhatsApp</span>
                    </button>

                    {/* Secondary Actions: Baixar Imagem & Copiar Texto */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <a
                        href={card.imagemUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={`card-${card.id}.jpg`}
                        className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors border border-neutral-700/50"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Baixar Card</span>
                      </a>

                      <button
                        onClick={() => handleCopiarTexto(card)}
                        className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg transition-colors border cursor-pointer ${
                          copiado
                            ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40 font-bold'
                            : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-300 border-neutral-700/50'
                        }`}
                      >
                        {copiado ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copiar Texto</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
