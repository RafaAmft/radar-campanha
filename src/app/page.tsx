'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import BriefingLegislativo from '@/components/BriefingLegislativo';
import KitConversa from '@/components/KitConversa';
import DossiesMitoFato from '@/components/DossiesMitoFato';
import PainelAgora from '@/components/PainelAgora';
import RedeCriadores from '@/components/RedeCriadores';
import Footer from '@/components/Footer';

export default function Home() {
  const [termoBusca, setTermoBusca] = useState('');

  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-emerald-600 selection:text-white">
      <Header termoBusca={termoBusca} setTermoBusca={setTermoBusca} />
      <main>
        <BriefingLegislativo />
        <KitConversa termoBusca={termoBusca} />
        <DossiesMitoFato termoBusca={termoBusca} />
        <PainelAgora termoBusca={termoBusca} />
        <RedeCriadores />
      </main>
      <Footer />
    </div>
  );
}
