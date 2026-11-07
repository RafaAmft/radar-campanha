import Header from '@/components/Header';
import HeroAlert from '@/components/HeroAlert';
import PraMandarAgora from '@/components/PraMandarAgora';
import GuerraNarrativa from '@/components/GuerraNarrativa';
import PainelAgora from '@/components/PainelAgora';
import RedeCriadores from '@/components/RedeCriadores';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-red-600 selection:text-white">
      <Header />
      <main>
        <HeroAlert />
        <PraMandarAgora />
        <GuerraNarrativa />
        <PainelAgora />
        <RedeCriadores />
      </main>
      <Footer />
    </div>
  );
}
