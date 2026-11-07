'use client';

import React, { useState } from 'react';
import { MOCK_NARRATIVAS } from '@/data/mockData';
import { NarrativaItem } from '@/types';
import { Flame, ShieldCheck, AlertCircle, Copy, Check, TrendingUp, ExternalLink } from 'lucide-react';

export default function GuerraNarrativa() {
  const [copiadoId, setCopiadoId] = useState<string | null>(null);

  const handleCopiarResposta = (item: NarrativaItem) => {
    const texto = `📌 RESPOSTA AO BOATO SOBRE ${item.tema.toUpperCase()}:\n\n` +
      `❌ O que andam dizendo: ${item.ladoAtaque.narrativa}\n\n` +
      `✅ A VERDADE E OS DADOS:\n${item.ladoDefesa.fatoReal}\n\n` +
      `💡 Argumento chave: ${item.ladoDefesa.argumentoChave}\n\n` +
      `🔗 ${item.ladoDefesa.fonteOficial}`;

    navigator.clipboard.writeText(texto);
    setCopiadoId(item.id);
    setTimeout(() => setCopiadoId(null), 2500);
  };

  return (
    <section id="narrativas" className="py-12 bg-neutral-900 text-white border-t border-neutral-800 scroll-mt-14">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
              <Flame className="w-4 h-4 text-amber-500 animate-pulse" />
              <span>Guerra Narrativa</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Do Que Cada Lado Fala
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-2xl">
              Compare as narrativas de ataque com os fatos checados. Pegue o argumento certo para virar votos e desarmar mentiras nos debates.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1 text-red-400 bg-red-950/60 border border-red-800/40 px-2.5 py-1 rounded-md">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              Ataque Opositor
            </span>
            <span className="flex items-center gap-1 text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Resposta Oficial
            </span>
          </div>
        </div>

        {/* Narratives List */}
        <div className="space-y-6">
          {MOCK_NARRATIVAS.map((item) => {
            const copiado = copiadoId === item.id;

            return (
              <div
                key={item.id}
                className="bg-neutral-950 border border-neutral-800 rounded-2xl p-5 sm:p-6 transition-all hover:border-neutral-700 shadow-xl"
              >
                {/* Topic Header & Metrics */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-neutral-800">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                      TEMA EM DISPUTA
                    </span>
                    <h3 className="font-black text-lg text-white">
                      {item.tema}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-neutral-400">
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                      {item.viewsHora}
                    </span>
                    <span className="text-neutral-600">•</span>
                    <span>{item.compartilhamentos}</span>
                    <span
                      className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                        item.impacto === 'critico'
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                          : item.impacto === 'alto'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}
                    >
                      Impacto {item.impacto}
                    </span>
                  </div>
                </div>

                {/* Side-by-side battle comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Left: O que eles dizem */}
                  <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold text-red-400 mb-2">
                        <span className="flex items-center gap-1.5">
                          <AlertCircle className="w-4 h-4 text-red-400" />
                          {item.ladoAtaque.nome}
                        </span>
                        <span className="font-mono text-[11px] text-red-400/70">
                          {item.ladoAtaque.volumeEstimado}
                        </span>
                      </div>
                      <blockquote className="text-sm text-neutral-300 italic font-serif border-l-2 border-red-500/40 pl-3 py-1">
                        {item.ladoAtaque.narrativa}
                      </blockquote>
                    </div>
                    <div className="mt-4 text-[11px] text-neutral-500 font-medium">
                      ❌ Narrativa distorcida ou fora de contexto
                    </div>
                  </div>

                  {/* Right: Nossa Resposta / Fato Real */}
                  <div className="bg-emerald-950/20 border border-emerald-900/30 rounded-xl p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold text-emerald-400 mb-2">
                        <span className="flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-emerald-400" />
                          {item.ladoDefesa.nome}
                        </span>
                        {item.ladoDefesa.linkOficial && (
                          <a
                            href={item.ladoDefesa.linkOficial}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:underline"
                          >
                            <span>Ver Fonte</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-white mb-2">
                        {item.ladoDefesa.fatoReal}
                      </p>
                      <div className="bg-emerald-950/40 border border-emerald-800/40 rounded-lg p-2.5 text-xs text-emerald-200">
                        <span className="font-bold text-emerald-300 block mb-0.5">Argumento de ouro para usar:</span>
                        {item.ladoDefesa.argumentoChave}
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-400 pt-2 border-t border-emerald-900/20">
                      <span>{item.ladoDefesa.fonteOficial}</span>
                      <button
                        onClick={() => handleCopiarResposta(item)}
                        className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                          copiado
                            ? 'bg-emerald-600 text-white font-bold'
                            : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200'
                        }`}
                      >
                        {copiado ? (
                          <>
                            <Check className="w-3 h-3 text-white" />
                            <span>Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copiar Resposta</span>
                          </>
                        )}
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
