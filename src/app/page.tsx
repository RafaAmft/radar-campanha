'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import AssuntosDoMomento from '@/components/AssuntosDoMomento';
import PainelAgora from '@/components/PainelAgora';
import VideosPorAssunto from '@/components/VideosPorAssunto';
import DossiesMitoFato from '@/components/DossiesMitoFato';
import KitConversa from '@/components/KitConversa';
import RedeCriadores from '@/components/RedeCriadores';
import Footer from '@/components/Footer';

export default function Home() {
  const [termoBusca, setTermoBusca] = useState('');

  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-emerald-600 selection:text-white">
      <Header termoBusca={termoBusca} setTermoBusca={setTermoBusca} />
      <main>
        {/* 1. Assuntos do Momento (X, Google, TikTok, Kwai + Filtro de Campo) */}
        <AssuntosDoMomento termoBusca={termoBusca} />

        {/* 2. Panorama de Imprensa (Manchetes cruzadas com redes) */}
        <PainelAgora termoBusca={termoBusca} />

        {/* 3. Vídeos por Assunto (Vídeos curtos para ver e disparar) */}
        <VideosPorAssunto termoBusca={termoBusca} />

        {/* 4. Dossiê Raio-X da Mentira (Padrão A consolidado) */}
        <DossiesMitoFato termoBusca={termoBusca} />

        {/* 5. Cards de Diálogo & Compartilhamento Zap */}
        <KitConversa termoBusca={termoBusca} />

        {/* 6. Canais em Rede */}
        <RedeCriadores />
      </main>
      <Footer />
    </div>
  );
}
