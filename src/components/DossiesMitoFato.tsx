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
  Eye, 
  Layers, 
  ArrowRight,
  TrendingDown,
  Building2,
  Share2
} from 'lucide-react';

type AbordagemTipo = 'raio_x' | 'fio_meada' | 'contraste';

interface DossiesMitoFatoProps {
  termoBusca?: string;
}

export default function DossiesMitoFato({ termoBusca = '' }: DossiesMitoFatoProps) {
  const [copiadoId, setCopiadoId] = useState<string | null>(null);
  const [modoAtivo, setModoAtivo] = useState<AbordagemTipo>('raio_x');
  
  // Controle de passo para o formato "Fio da Meada" por dossiê
  const [passoPorDossie, setPassoPorDossie] = useState<Record<string, number>>({});

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

  const getPassoAtual = (id: string) => passoPorDossie[id] || 1;

  const setPasso = (id: string, passo: number) => {
    setPassoPorDossie(prev => ({ ...prev, [id]: passo }));
  };

  const handleCopiarTexto = (texto: string, id: string) => {
    navigator.clipboard.writeText(texto);
    setCopiadoId(id);
    setTimeout(() => setCopiadoId(null), 2500);
  };

  const handleMandarWhatsApp = (item: DossieItem, formato: string) => {
    let texto = '';
    if (formato === 'raio_x') {
      texto = `🔍 *RAIO-X DO BOATO: ${item.tema.toUpperCase()}*\n\n` +
        `❌ *A ISCA (O que circula):* ${item.oBoato.resumo}\n` +
        `🎭 *O TRUQUE:* ${item.truqueRetorico || 'Manipulação fora de contexto'}\n` +
        `💰 *A QUEM INTERESSA:* ${item.aQuemInteressa || 'Interesses de grandes grupos econômicos'}\n\n` +
        `✅ *O FATO DOCUMENTADO:*\n${item.oFatoVerificado.explicacao}\n\n` +
        `💡 *PERGUNTA PARA PENSAR:* "${item.perguntaDeOuro}"\n\n` +
        `Verificado pelo Nexo Popular: https://radar-campanha.pages.dev/#dossies`;
    } else if (formato === 'contraste') {
      texto = `⚖️ *O ZAP VS A REALIDADE: ${item.tema.toUpperCase()}*\n\n` +
        `🔴 *Versão do Zap:* ${item.oBoato.resumo}\n\n` +
        `🟢 *O que o Documento Oficial Prova:*\n${item.oFatoVerificado.explicacao}\n\n` +
        `🤔 *Uma pergunta sem briga:* "${item.perguntaDeOuro}"\n\n` +
        `Confira as fontes: https://radar-campanha.pages.dev/#dossies`;
    } else {
      texto = `📌 *SOBRE ${item.tema.toUpperCase()}*\n\n` +
        `1️⃣ *O Boato:* ${item.oBoato.resumo}\n` +
        `2️⃣ *O Fato Real:* ${item.oFatoVerificado.explicacao}\n` +
        `3️⃣ *Reflexão:* "${item.perguntaDeOuro}"\n\n` +
        `https://radar-campanha.pages.dev/#dossies`;
    }

    const zapUrl = `https://wa.me/?text=${encodeURIComponent(texto)}`;
    window.open(zapUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="dossies" className="py-12 bg-neutral-900 text-white border-t border-neutral-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>Dossiês de Formação & Senso Crítico</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2">
              Desarmando a Desinformação <span className="text-blue-400 font-mono text-xl sm:text-2xl">({dossiesFiltrados.length})</span>
            </h2>
            <p className="text-sm text-neutral-400 mt-1 max-w-2xl">
              Desenvolva o senso crítico no transporte: entenda a técnica de manipulação usada pela extrema direita e desarme o boato com evidência primária.
            </p>
          </div>

          <div className="flex items-center gap-1.5 bg-neutral-950 p-1 rounded-xl border border-neutral-800">
            <button
              onClick={() => setModoAtivo('raio_x')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                modoAtivo === 'raio_x'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Opção A: Raio-X</span>
            </button>
            <button
              onClick={() => setModoAtivo('fio_meada')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                modoAtivo === 'fio_meada'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Opção B: Fio da Meada</span>
            </button>
            <button
              onClick={() => setModoAtivo('contraste')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                modoAtivo === 'contraste'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <TrendingDown className="w-3.5 h-3.5" />
              <span>Opção C: Contraste</span>
            </button>
          </div>
        </div>

        {/* Informative Banner on selected approach */}
        <div className="mb-6 p-3 bg-neutral-950/80 rounded-xl border border-neutral-800 flex items-center justify-between text-xs text-neutral-300">
          <div className="flex items-center gap-2">
            <span className="font-bold text-blue-400 uppercase tracking-wide">
              {modoAtivo === 'raio_x' && '⚡ Opção A: Raio-X da Mentira'}
              {modoAtivo === 'fio_meada' && '📱 Opção B: O Fio da Meada (Passo a Passo)'}
              {modoAtivo === 'contraste' && '⚖️ Opção C: Tabela de Contraste (O Zap vs A Realidade)'}
            </span>
            <span className="text-neutral-500 hidden sm:inline">|</span>
            <span className="text-neutral-400 hidden sm:inline">
              {modoAtivo === 'raio_x' && 'Disseca em 4 blocos clínicos: Isca, Truque Retórico, A Quem Interessa e Fato Oficial.'}
              {modoAtivo === 'fio_meada' && 'Micro-passos pensados para ler no celular com uma mão só em 30 segundos.'}
              {modoAtivo === 'contraste' && 'Confronto direto lado a lado para checagem instantânea de 5 segundos.'}
            </span>
          </div>
          <span className="text-[11px] font-mono text-neutral-500">
            Alterne acima para comparar os 3 modelos
          </span>
        </div>

        {/* Dossiers List based on selected approach */}
        <div className="space-y-6">
          {dossiesFiltrados.map((item) => {
            const copiou = copiadoId === item.id;
            const passoAtual = getPassoAtual(item.id);

            return (
              <div
                key={item.id}
                className="bg-neutral-950 border border-neutral-800 rounded-2xl p-4 sm:p-6 transition-all hover:border-neutral-700 shadow-xl"
              >
                {/* Topic Header & Status */}
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
                    <span className="text-[11px] font-semibold text-neutral-400 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-full">
                      ⚖️ {item.statusLegislativo}
                    </span>
                  )}
                </div>

                {/* ========================================================= */}
                {/* MODELO 1: OPÇÃO A - RAIO-X DA MENTIRA                     */}
                {/* ========================================================= */}
                {modoAtivo === 'raio_x' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {/* Bloco 1: A Isca */}
                      <div className="bg-rose-950/20 border border-rose-900/40 rounded-xl p-4 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between text-xs font-bold text-rose-400 mb-2">
                            <span className="flex items-center gap-1.5">
                              <AlertTriangle className="w-4 h-4 text-rose-400" />
                              1. A Isca (o que espalham no Zap)
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
                            {item.truqueRetorico || 'Uso de pânico artificial e corte seletivo para ocultar a votação real.'}
                          </p>
                        </div>
                        <div className="mt-3 text-[11px] text-amber-400/80 flex items-center gap-1.5">
                          <span>💡 Técnica: manipular medo em vez de debater fatos.</span>
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
                            {item.aQuemInteressa || 'Grandes grupos de pressão econômica que não desejam pagar direitos ou tributos.'}
                          </p>
                        </div>
                        <div className="mt-3 text-[11px] text-neutral-500">
                          Lógica: seguir o rastro do dinheiro e do interesse corporativo.
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
                          className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                            copiou
                              ? 'bg-blue-600 text-white'
                              : 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200'
                          }`}
                        >
                          {copiou ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiou ? 'Copiado!' : 'Copiar Análise'}</span>
                        </button>
                        <button
                          onClick={() => handleMandarWhatsApp(item, 'raio_x')}
                          className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-white" />
                          <span>Mandar no Zap</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================= */}
                {/* MODELO 2: OPÇÃO B - O FIO DA MEADA (PASSOS / STORIES)     */}
                {/* ========================================================= */}
                {modoAtivo === 'fio_meada' && (
                  <div className="space-y-4">
                    {/* Indicador de Passos */}
                    <div className="flex items-center justify-between gap-2 bg-neutral-900 p-2 rounded-xl border border-neutral-800">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setPasso(item.id, 1)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                            passoAtual === 1
                              ? 'bg-rose-600 text-white'
                              : 'text-neutral-400 hover:text-white'
                          }`}
                        >
                          1. O Boato
                        </button>
                        <button
                          onClick={() => setPasso(item.id, 2)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                            passoAtual === 2
                              ? 'bg-emerald-600 text-white'
                              : 'text-neutral-400 hover:text-white'
                          }`}
                        >
                          2. O Fato Real
                        </button>
                        <button
                          onClick={() => setPasso(item.id, 3)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                            passoAtual === 3
                              ? 'bg-blue-600 text-white'
                              : 'text-neutral-400 hover:text-white'
                          }`}
                        >
                          3. A Pergunta
                        </button>
                      </div>
                      <span className="text-[11px] font-mono text-neutral-500">
                        Passo {passoAtual} de 3
                      </span>
                    </div>

                    {/* Card Interativo do Passo */}
                    <div className="min-h-[160px] flex flex-col justify-between p-5 rounded-xl border bg-neutral-900/60 border-neutral-800">
                      {passoAtual === 1 && (
                        <div>
                          <div className="flex items-center gap-2 text-rose-400 text-xs font-bold mb-2">
                            <AlertTriangle className="w-4 h-4" />
                            <span>COMO O PÂNICO É FABRICADO</span>
                          </div>
                          <blockquote className="text-base text-neutral-200 font-serif italic border-l-2 border-rose-500 pl-3 my-2">
                            {item.oBoato.resumo}
                          </blockquote>
                          <p className="text-xs text-neutral-400 mt-2">
                            Circula em correntes sem link para fonte oficial. Origem: {item.oBoato.origem}
                          </p>
                        </div>
                      )}

                      {passoAtual === 2 && (
                        <div>
                          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-2">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>O QUE O DOCUMENTO OFICIAL COMPROVA</span>
                          </div>
                          <p className="text-sm text-neutral-200 leading-relaxed mb-2">
                            {item.oFatoVerificado.explicacao}
                          </p>
                          {item.oFatoVerificado.dadosChave && (
                            <div className="text-xs text-emerald-300 font-medium bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-900/30">
                              • {item.oFatoVerificado.dadosChave[0]}
                            </div>
                          )}
                        </div>
                      )}

                      {passoAtual === 3 && (
                        <div>
                          <div className="flex items-center gap-2 text-blue-400 text-xs font-bold mb-2">
                            <HelpCircle className="w-4 h-4" />
                            <span>DESARME SEM BRIGA (PERGUNTA SOCRÁTICA)</span>
                          </div>
                          <p className="text-base font-medium text-white italic my-2">
                            &quot;{item.perguntaDeOuro}&quot;
                          </p>
                          <p className="text-xs text-neutral-400">
                            Faça essa pergunta em vez de apontar o dedo. Ela força a pessoa a pensar no interesse econômico real.
                          </p>
                        </div>
                      )}

                      {/* Botões de Navegação do Passo */}
                      <div className="flex items-center justify-between pt-4 mt-4 border-t border-neutral-800">
                        {passoAtual > 1 ? (
                          <button
                            onClick={() => setPasso(item.id, passoAtual - 1)}
                            className="text-xs text-neutral-400 hover:text-white cursor-pointer px-2 py-1"
                          >
                            ← Voltar
                          </button>
                        ) : (
                          <span />
                        )}

                        {passoAtual < 3 ? (
                          <button
                            onClick={() => setPasso(item.id, passoAtual + 1)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold cursor-pointer"
                          >
                            <span>Avançar</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        ) : (
                          <button
                            onClick={() => handleMandarWhatsApp(item, 'fio_meada')}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold cursor-pointer"
                          >
                            <MessageCircle className="w-3.5 h-3.5 fill-white" />
                            <span>Compartilhar Passo a Passo</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================================= */}
                {/* MODELO 3: OPÇÃO C - TABELA DE CONTRASTE (ZAP VS REALIDADE)*/}
                {/* ========================================================= */}
                {modoAtivo === 'contraste' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Coluna Vermelha: Versão do Zap */}
                      <div className="bg-rose-950/20 border-2 border-rose-900/50 rounded-xl p-4 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between text-xs font-black text-rose-400 uppercase tracking-wider mb-2">
                            <span>❌ Versão do Zap / Redes</span>
                            <span className="text-[10px] bg-rose-950 px-2 py-0.5 rounded text-rose-300">Sem Fonte</span>
                          </div>
                          <p className="text-sm text-neutral-200 font-serif italic mb-3">
                            {item.oBoato.resumo}
                          </p>
                        </div>
                        <div className="text-[11px] text-neutral-500 pt-2 border-t border-rose-900/30">
                          Origem: {item.oBoato.origem}
                        </div>
                      </div>

                      {/* Coluna Verde: O Documento Oficial Prova */}
                      <div className="bg-emerald-950/20 border-2 border-emerald-900/50 rounded-xl p-4 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between text-xs font-black text-emerald-400 uppercase tracking-wider mb-2">
                            <span>✅ O que o Documento Oficial Prova</span>
                            <span className="text-[10px] bg-emerald-950 px-2 py-0.5 rounded text-emerald-300">Verificado</span>
                          </div>
                          <p className="text-sm text-neutral-200 leading-relaxed mb-3">
                            {item.oFatoVerificado.explicacao}
                          </p>
                          {item.oFatoVerificado.dadosChave && (
                            <ul className="text-xs text-emerald-200/90 space-y-1 mb-2">
                              {item.oFatoVerificado.dadosChave.map((dado, idx) => (
                                <li key={idx} className="flex items-start gap-1">
                                  <span className="text-emerald-400 font-bold">•</span>
                                  <span>{dado}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        {item.oFatoVerificado.fontes && (
                          <div className="text-[11px] text-emerald-400 pt-2 border-t border-emerald-900/30 flex items-center gap-2">
                            <span>Fonte:</span>
                            {item.oFatoVerificado.fontes.map((f, idx) => (
                              <a
                                key={idx}
                                href={f.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-emerald-300 inline-flex items-center gap-1"
                              >
                                {f.nome} <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Faixa Inferior de Desempate */}
                    <div className="bg-neutral-900 p-3.5 rounded-xl border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="text-xs text-neutral-300">
                        <span className="text-blue-400 font-bold">💡 Para o debate:</span> &quot;{item.perguntaDeOuro}&quot;
                      </div>
                      <button
                        onClick={() => handleMandarWhatsApp(item, 'contraste')}
                        className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold cursor-pointer"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white" />
                        <span>Mandar Comparação</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
