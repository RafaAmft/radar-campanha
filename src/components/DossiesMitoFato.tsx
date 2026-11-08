'use client';

import React, { useState } from 'react';
import liveFeeds from '@/data/liveFeeds.json';
import { MOCK_DOSSIES } from '@/data/mockData';
import { DossieItem } from '@/types';
import { 
  BookOpen, 
  HelpCircle, 
  CheckCircle2, 
  AlertTriangle, 
  Copy, 
  Check, 
  ExternalLink, 
  MessageCircle, 
  Search, 
  Building2,
  ShieldAlert
} from 'lucide-react';

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
      d.perguntaDeOuro.toLowerCase().includes(termo) ||
      (d.truqueRetorico && d.truqueRetorico.toLowerCase().includes(termo))
    );
  });

  const handleCopiarTexto = (texto: string, id: string) => {
    navigator.clipboard.writeText(texto);
    setCopiadoId(id);
    setTimeout(() => setCopiadoId(null), 2500);
  };

  const handleMandarWhatsApp = (item: DossieItem) => {
    const texto = `🔍 *RAIO-X DO BOATO: ${item.tema.toUpperCase()}*\n\n` +
      `❌ *A ISCA (O que circula):* ${item.oBoato.resumo}\n\n` +
      `🎭 *O TRUQUE:* ${item.truqueRetorico || 'Manipulação de contexto e pânico artificial'}\n` +
      `💰 *A QUEM INTERESSA:* ${item.aQuemInteressa || 'Grandes grupos econômicos e lobbies corporativos'}\n\n` +
      `✅ *O FATO DOCUMENTADO:*\n${item.oFatoVerificado.explicacao}\n\n` +
      `💡 *PERGUNTA PARA PENSAR:* "${item.perguntaDeOuro}"\n\n` +
      `🔍 Verificado pelo Nexo Popular: https://radar-campanha.pages.dev/#dossies`;

    const zapUrl = `https://wa.me/?text=${encodeURIComponent(texto)}`;
    window.open(zapUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="dossies" className="py-12 bg-neutral-950 text-white border-b border-neutral-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-blue-400 font-bold text-xs uppercase tracking-wider mb-1.5">
              <ShieldAlert className="w-4 h-4 text-blue-400" />
              <span>Pedagogia do Diálogo & Formação Política</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2">
              Dossiês: Raio-X da Mentira <span className="text-blue-400 font-mono text-xl sm:text-2xl">({dossiesFiltrados.length})</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-2xl">
              Dissecamos a anatomia da manipulação em 4 passos: a frase que circula, a técnica retórica usada, o interesse financeiro por trás e a prova com documento primário.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1.5 text-neutral-300 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-lg">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Padrão Raio-X Ativo
            </span>
          </div>
        </div>

        {/* Lista de Dossiês */}
        <div className="space-y-6">
          {dossiesFiltrados.map((item) => {
            const copiou = copiadoId === item.id;

            return (
              <div
                key={item.id}
                className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-4 sm:p-6 transition-all hover:border-neutral-700 shadow-xl"
              >
                {/* Header do Dossiê */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-4 border-b border-neutral-800">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                      TEMA
                    </span>
                    <h3 className="font-black text-lg text-white">
                      {item.tema}
                    </h3>
                  </div>

                  {item.statusLegislativo && (
                    <span className="text-[11px] font-semibold text-neutral-300 bg-neutral-950 border border-neutral-800 px-2.5 py-1 rounded-full">
                      ⚖️ {item.statusLegislativo}
                    </span>
                  )}
                </div>

                {/* Grid dos 4 Blocos Clínicos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-4">
                  {/* Bloco 1: A Isca */}
                  <div className="bg-rose-950/20 border border-rose-900/40 rounded-xl p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold text-rose-400 mb-2">
                        <span className="flex items-center gap-1.5">
                          <AlertTriangle className="w-4 h-4 text-rose-400" />
                          1. A Isca (o que circula no Zap)
                        </span>
                        <span className="text-[10px] bg-rose-950 text-rose-300 border border-rose-800/40 px-2 py-0.5 rounded font-mono">
                          DISTORÇÃO
                        </span>
                      </div>
                      <blockquote className="text-sm text-neutral-200 italic font-serif border-l-2 border-rose-500/60 pl-3 py-1">
                        {item.oBoato.resumo}
                      </blockquote>
                    </div>
                    <div className="mt-3 text-[11px] text-neutral-500">
                      Origem: {item.oBoato.origem}
                    </div>
                  </div>

                  {/* Bloco 2: O Truque Retórico */}
                  <div className="bg-amber-950/20 border border-amber-900/40 rounded-xl p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold text-amber-400 mb-2">
                        <span className="flex items-center gap-1.5">
                          <Search className="w-4 h-4 text-amber-400" />
                          2. O Truque Retórico Usado
                        </span>
                        <span className="text-[10px] bg-amber-950 text-amber-300 border border-amber-800/40 px-2 py-0.5 rounded font-mono">
                          ANÁLISE
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-amber-200/90 font-medium leading-relaxed">
                        {item.truqueRetorico || 'Manipulação pelo medo com corte fora de contexto para ocultar a votação real.'}
                      </p>
                    </div>
                    <div className="mt-3 text-[11px] text-amber-400/80 flex items-center gap-1.5">
                      <span>💡 Técnica: apelar para a emoção para blindar o privilégio econômico.</span>
                    </div>
                  </div>

                  {/* Bloco 3: A Quem Interessa */}
                  <div className="bg-purple-950/20 border border-purple-900/40 rounded-xl p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold text-purple-400 mb-2">
                        <span className="flex items-center gap-1.5">
                          <Building2 className="w-4 h-4 text-purple-400" />
                          3. A Quem Interessa Essa Mentira?
                        </span>
                        <span className="text-[10px] bg-purple-950 text-purple-300 border border-purple-800/40 px-2 py-0.5 rounded font-mono">
                          BASTIDOR
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed">
                        {item.aQuemInteressa || 'Grandes grupos de pressão econômica que não desejam pagar direitos ou tributos justos.'}
                      </p>
                    </div>
                    <div className="mt-3 text-[11px] text-neutral-500">
                      Lógica: seguir o rastro do dinheiro e quem lucra com a mentira de pé.
                    </div>
                  </div>

                  {/* Bloco 4: O Fato Documentado */}
                  <div className="bg-emerald-950/20 border border-emerald-900/40 rounded-xl p-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold text-emerald-400 mb-2">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          4. O Fato com Documento Primário
                        </span>
                        <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800/40 px-2 py-0.5 rounded font-mono">
                          OFICIAL
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed mb-2">
                        {item.oFatoVerificado.explicacao}
                      </p>
                      {item.oFatoVerificado.dadosChave && (
                        <ul className="text-xs text-emerald-200/90 space-y-1 mt-2">
                          {item.oFatoVerificado.dadosChave.map((dado, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-emerald-400 font-bold">•</span>
                              <span>{dado}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {item.oFatoVerificado.fontes && (
                      <div className="mt-3 pt-2 border-t border-emerald-900/30 flex flex-wrap gap-2 text-[11px]">
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

                {/* Pergunta de Desarme & Ações */}
                <div className="bg-gradient-to-r from-blue-950/40 via-neutral-900 to-blue-950/40 border border-blue-500/30 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <div className="p-1.5 bg-blue-500/10 text-blue-400 rounded-lg shrink-0 mt-0.5">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                        Pergunta de Desarme
                      </span>
                      <p className="text-sm font-semibold text-white mt-1 italic">
                        &quot;{item.perguntaDeOuro}&quot;
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                    <button
                      onClick={() => handleCopiarTexto(
                        `*RAIO-X DO BOATO: ${item.tema}*\n\n❌ ${item.oBoato.resumo}\n\n🎭 Truque: ${item.truqueRetorico}\n\n✅ Fato: ${item.oFatoVerificado.explicacao}\n\n💡 Pergunta: "${item.perguntaDeOuro}"`,
                        item.id
                      )}
                      className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                        copiou
                          ? 'bg-blue-600 text-white font-bold'
                          : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700/50'
                      }`}
                    >
                      {copiou ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiou ? 'Copiado!' : 'Copiar Análise'}</span>
                    </button>
                    <button
                      onClick={() => handleMandarWhatsApp(item)}
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Mandar no Zap</span>
                    </button>
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
