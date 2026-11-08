'use client';

import React, { useState } from 'react';
import liveFeeds from '@/data/liveFeeds.json';
import { MOCK_CARDS } from '@/data/mockData';
import { CardItem } from '@/types';
import { Download, Copy, Check, MessageCircle, Share2, Sparkles, ExternalLink, ChevronDown, ChevronUp, Layers } from 'lucide-react';

interface KitConversaProps {
  termoBusca?: string;
}

export default function KitConversa({ termoBusca = '' }: KitConversaProps) {
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>('todos');
  const [tonsPorCard, setTonsPorCard] = useState<Record<string, 'dialogo' | 'dados'>>({});
  const [fontesAbertas, setFontesAbertas] = useState<Record<string, boolean>>({});
  const [copiadoId, setCopiadoId] = useState<string | null>(null);

  // Combina dados do repositório ao vivo com a base inicial do Nexo Popular
  const todosCards: CardItem[] = (liveFeeds?.cards && liveFeeds.cards.length > 0)
    ? ([...(liveFeeds.cards as CardItem[]), ...MOCK_CARDS])
    : MOCK_CARDS;

  const categorias = [
    { id: 'todos', label: 'Todos os Temas' },
    { id: 'trabalho', label: '⏱️ Trabalho & Escala 5x2' },
    { id: 'economia', label: '📈 Economia & Renda' },
    { id: 'saude', label: '💊 Saúde & Farmácia Popular' },
    { id: 'fakenews', label: '🛡️ Desinformação & Fakes' },
  ];

  // Filtra por categoria e pelo termo de busca digitado no Header
  const cardsFiltrados = todosCards.filter((card) => {
    const bateCategoria = categoriaAtiva === 'todos' || card.categoria === categoriaAtiva;
    if (!termoBusca) return bateCategoria;

    const termo = termoBusca.toLowerCase();
    const bateTexto =
      card.titulo.toLowerCase().includes(termo) ||
      card.fraseDestaque.toLowerCase().includes(termo) ||
      (card.subtitulo && card.subtitulo.toLowerCase().includes(termo)) ||
      card.badge.toLowerCase().includes(termo);

    return bateCategoria && bateTexto;
  });

  const getTomCard = (cardId: string): 'dialogo' | 'dados' => {
    return tonsPorCard[cardId] || 'dialogo';
  };

  const alternarTom = (cardId: string, tom: 'dialogo' | 'dados') => {
    setTonsPorCard((prev) => ({ ...prev, [cardId]: tom }));
  };

  const toggleFontes = (cardId: string) => {
    setFontesAbertas((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  const getTextoAtual = (card: CardItem) => {
    const tom = getTomCard(card.id);
    return tom === 'dialogo' ? (card.textoZapDialogo || card.textoZapDados) : (card.textoZapDados || card.textoZapDialogo);
  };

  const handleCopiarTexto = (card: CardItem) => {
    const texto = getTextoAtual(card);
    navigator.clipboard.writeText(texto);
    setCopiadoId(card.id);
    setTimeout(() => setCopiadoId(null), 2500);
  };

  const handleCompartilharZap = (card: CardItem) => {
    const texto = getTextoAtual(card);
    const zapUrl = `https://wa.me/?text=${encodeURIComponent(texto)}`;
    window.open(zapUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="cards" className="py-12 bg-neutral-950 text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Share2 className="w-4 h-4" />
              <span>Multiplicação de Ideias</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2">
              Kit de Diálogo & Compartilhamento <span className="text-emerald-500 font-mono text-xl sm:text-2xl">({cardsFiltrados.length})</span>
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-2xl">
              Materiais pensados para conversar com respeito e segurança. Escolha o tom certo para falar com a família, vizinhos ou colegas de trabalho.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2">
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Alterne entre <b>Modo Diálogo</b> e <b>Modo Dados</b></span>
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
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/50'
                  : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Empty Search State */}
        {cardsFiltrados.length === 0 && (
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-8 text-center my-6">
            <Layers className="w-8 h-8 text-neutral-500 mx-auto mb-2" />
            <h3 className="font-bold text-white text-base">Nenhum material encontrado</h3>
            <p className="text-xs text-neutral-400 mt-1">
              Não encontramos cards com o termo &quot;{termoBusca}&quot;. Tente buscar por &quot;6x1&quot;, &quot;bets&quot; ou &quot;saúde&quot;.
            </p>
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsFiltrados.map((card) => {
            const tomAtual = getTomCard(card.id);
            const copiado = copiadoId === card.id;
            const fontesAbertasCard = !!fontesAbertas[card.id];

            return (
              <article
                key={card.id}
                className="bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 group"
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
                    <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md text-white shadow-md ${card.corBadge}`}>
                      {card.badge}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-medium bg-black/70 backdrop-blur-md text-neutral-300 px-2 py-0.5 rounded-md border border-white/10">
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
                    <h3 className="font-bold text-sm text-neutral-100">
                      {card.titulo}
                    </h3>
                    {card.subtitulo && (
                      <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                        {card.subtitulo}
                      </p>
                    )}

                    {/* Tone Switcher (Diálogo vs Dados) */}
                    <div className="mt-3 bg-neutral-950 p-1 rounded-xl border border-neutral-800 flex items-center gap-1 text-[11px]">
                      <button
                        onClick={() => alternarTom(card.id, 'dialogo')}
                        className={`flex-1 py-1 px-2 rounded-lg font-semibold transition-all cursor-pointer ${
                          tomAtual === 'dialogo'
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        🤝 Modo Diálogo
                      </button>
                      <button
                        onClick={() => alternarTom(card.id, 'dados')}
                        className={`flex-1 py-1 px-2 rounded-lg font-semibold transition-all cursor-pointer ${
                          tomAtual === 'dados'
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : 'text-neutral-400 hover:text-white'
                        }`}
                      >
                        📊 Fatos & Dados
                      </button>
                    </div>

                    {/* Message Preview */}
                    <div className="mt-2.5 bg-neutral-950/70 border border-neutral-800/80 rounded-xl p-3 text-xs text-neutral-300 font-mono line-clamp-3 whitespace-pre-line">
                      {getTextoAtual(card)}
                    </div>

                    {/* Expandable Primary Sources Drawer */}
                    {card.fontes && card.fontes.length > 0 && (
                      <div className="mt-2.5">
                        <button
                          onClick={() => toggleFontes(card.id)}
                          className="flex items-center justify-between w-full text-[11px] text-neutral-400 hover:text-emerald-400 transition-colors py-1 cursor-pointer"
                        >
                          <span className="font-semibold">Fontes primárias e verificação ({card.fontes.length})</span>
                          {fontesAbertasCard ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>

                        {fontesAbertasCard && (
                          <div className="mt-1.5 space-y-1 bg-neutral-950/90 border border-neutral-800 rounded-lg p-2 text-[11px]">
                            {card.fontes.map((f, idx) => (
                              <a
                                key={idx}
                                href={f.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between text-neutral-300 hover:text-emerald-300 transition-colors"
                              >
                                <span className="line-clamp-1">{f.nome} ({f.veiculo})</span>
                                <ExternalLink className="w-3 h-3 shrink-0 ml-1" />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-4 pt-3 border-t border-neutral-800/80 flex flex-col gap-2">
                    {/* Primary Button: Disparar no WhatsApp com o tom escolhido */}
                    <button
                      onClick={() => handleCompartilharZap(card)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md shadow-emerald-950/40 active:scale-[0.98] cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Enviar no WhatsApp ({tomAtual === 'dialogo' ? 'Diálogo' : 'Dados'})</span>
                    </button>

                    {/* Secondary Actions */}
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
                            ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50 font-bold'
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
