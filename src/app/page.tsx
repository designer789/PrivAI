import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import CoreHighlights from '@/components/CoreHighlights';
import Engine from '@/components/Engine';
import Tokenomics from '@/components/Tokenomics';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <Intro />
      <CoreHighlights />
      <Engine />
      <Tokenomics />
      <FAQ />
      <Footer />
    </main>
  );
}
