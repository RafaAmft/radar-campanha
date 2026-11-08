'use client';

import React, { useState } from 'react';
import liveFeeds from '@/data/liveFeeds.json';
import { MOCK_DOSSIES } from '@/data/mockData';
import { DossieItem } from '@/types';
import { BookOpen, HelpCircle, CheckCircle2, AlertTriangle, Copy, Check, ExternalLink, MessageCircle } from 'lucide-react';

interface DossiesMitoFatoProps {
  termoBusca?: string;
}

export default function DossiesMitoFato({ termoBusca = '' }: DossiesMitoFatoProps) {
  const [copiadoId, setCopiadoId] = useState<string | null>(null);

  const dossies: DossieItem[] = (liveFeeds?.dossies && liveFeeds.dossies.length > 0)
    ? ([...(liveFeeds.dossies as DossieItem[]), ...MOCK_DOSSIES])
    : MOCK_DOSSIES;

  const dossiesFiltrados = dossies.filter((d) => {
    if (!termoBusca) return true;
    const termo = termoBusca.toLowerCase();
    return (
      d.tema.toLowerCase().includes(termo) ||
      d.oBoato.resumo.toLowerCase().includes(termo) ||
      d.oFatoVerificado.explicacao.toLowerCase().includes(termo) ||
      d.perguntaDeOuro.toLowerCase().includes(termo)
    );
  });

  const handleCopiarPergunta = (item: DossieItem) => {
    navigator.clipboard.writeText(item.perguntaDeOuro);
    setCopiadoId(`pergunta-${item.id}`);
    setTimeout(() => setCopiadoId(null), 2500);
  };

  const handleCopiarDossieCompleto = (item: DossieItem) => {
    const texto = `📌 *ESCLARECIMENTO SOBRE ${item.tema.toUpperCase()}*\n\n` +
      `❌ *O que andam dizendo:* ${item.oBoato.resumo}\n\n` +
      `✅ *O FATO VERIFICADO:*\n${item.oFatoVerificado.explicacao}\n\n` +
      `💡 *Uma reflexão sincera:* ${item.perguntaDeOuro}\n\n` +
      `🔍 Informações verificadas no Nexo Popular: https://radar-campanha.pages.dev/#dossies`;

    navigator.clipboard.writeText(texto);
    setCopiadoId(`dossie-${item.id}`);
    setTimeout(() => setCopiadoId(null), 2500);
  };

  const handleMandarWhatsApp = (item: DossieItem) => {
    const texto = `📌 *ESCLARECIMENTO SOBRE ${item.tema.toUpperCase()}*\n\n` +
      `❌ *O que andam dizendo:* ${item.oBoato.resumo}\n\n` +
      `✅ *O FATO VERIFICADO:*\n${item.oFatoVerificado.explicacao}\n\n` +
      `💡 *Uma pergunta para pensar:* ${item.perguntaDeOuro}\n\n` +
      `🔍 Dados completos: https://radar-campanha.pages.dev/#dossies`;

    const zapUrl = `https://wa.me/?text=${encodeURIComponent(texto)}`;
    window.open(zapUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="dossies" className="py-12 bg-neutral-900 text-white border-t border-neutral-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>Pedagogia do Diálogo</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2">
              Dossiês: Mito vs. Fato <span className="text-blue-400 font-mono text-xl sm:text-2xl">({dossiesFiltrados.length})</span>
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-2xl">
              Estruturados em 3 passos para desarmar a desinformação sem gerar brigas: entenda o boato, mostre os dados e use a <b>Pergunta de Ouro</b>.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1 text-rose-400 bg-rose-950/60 border border-rose-800/40 px-2.5 py-1 rounded-md">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              O Mito / Boato
            </span>
            <span className="flex items-center gap-1 text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              O Fato & Dados
            </span>
          </div>
        </div>

        {/* Dossiers List */}
        <div className="space-y-6">
          {dossiesFiltrados.map((item) => {
            const copiouPergunta = copiadoId === `pergunta-${item.id}`;
            const copiouDossie = copiadoId === `dossie-${item.id}`;

            return (
              <div
                key={item.id}
                className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5 sm:p-6 transition-all hover:border-neutral-700 shadow-xl"
              >
                {/* Topic Header & Status */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-neutral-800">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                      TEMA
                    </span>
                    <h3 className="font-black text-lg text-white">
                      {item.tema}
                    </h3>
                  </div>

                  {item.statusLegislativo && (
                    <span className="text-[11px] font-semibold text-neutral-400 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-full">
                      ⚖️ {item.statusLegislativo}
                    </span>
                  )}
                </div>

                {/* Step 1 & Step 2 Side-by-side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Step 1: O Boato / A Narrativa */}
                  <div className="bg-rose-950/20 border border-rose-900/30 rounded-xl p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold text-rose-400 mb-2">
                        <span className="flex items-center gap-1.5">
                          <AlertTriangle className="w-4 h-4 text-rose-400" />
                          1. Como o boato chega
                        </span>
                        <span className="text-[10px] text-neutral-500 uppercase">Distorção</span>
                      </div>
                      <blockquote className="text-sm text-neutral-300 italic font-serif border-l-2 border-rose-500/40 pl-3 py-1">
                        {item.oBoato.resumo}
                      </blockquote>
                    </div>
                    <div className="mt-4 text-[11px] text-neutral-500 font-medium">
                      Origem: {item.oBoato.origem}
                    </div>
                  </div>

                  {/* Step 2: O Fato e os Números */}
                  <div className="bg-emerald-950/20 border border-emerald-900/30 rounded-xl p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold text-emerald-400 mb-2">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          2. O fato e os números reais
                        </span>
                        <span className="text-[10px] text-emerald-400/80 uppercase">Verificado</span>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed mb-3">
                        {item.oFatoVerificado.explicacao}
                      </p>

                      {item.oFatoVerificado.dadosChave && (
                        <ul className="space-y-1 text-xs text-emerald-200/90 font-medium bg-emerald-950/30 border border-emerald-900/30 rounded-lg p-2.5">
                          {item.oFatoVerificado.dadosChave.map((dado, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-emerald-400 shrink-0">•</span>
                              <span>{dado}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {item.oFatoVerificado.fontes && item.oFatoVerificado.fontes.length > 0 && (
                      <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-neutral-400 pt-2 border-t border-emerald-900/20">
                        {item.oFatoVerificado.fontes.map((f, idx) => (
                          <a
                            key={idx}
                            href={f.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-emerald-400 hover:underline"
                          >
                            <span>{f.nome} ({f.veiculo})</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Step 3: A Pergunta de Ouro (Socratic Dialogue Tool) */}
                <div className="mt-4 bg-gradient-to-r from-blue-950/40 via-neutral-900 to-blue-950/40 border border-blue-500/30 rounded-xl p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg shrink-0 mt-0.5">
                        <HelpCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black uppercase text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                            3. Pergunta de Ouro
                          </span>
                          <span className="text-xs text-neutral-400">Use para abrir a conversa sem brigar</span>
                        </div>
                        <p className="text-sm font-semibold text-white mt-1.5 italic">
                          &quot;{item.perguntaDeOuro}&quot;
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleCopiarPergunta(item)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                          copiouPergunta
                            ? 'bg-blue-600 text-white font-bold'
                            : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700/50'
                        }`}
                      >
                        {copiouPergunta ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiouPergunta ? 'Copiada!' : 'Copiar Pergunta'}</span>
                      </button>

                      <button
                        onClick={() => handleMandarWhatsApp(item)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white" />
                        <span>Mandar no Zap</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
