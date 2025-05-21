import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Solution from '@/components/sections/Solution';
import Features from '@/components/sections/Features';
import Pricing from '@/components/sections/Pricing';
import Entreprise from '@/components/sections/Entreprise';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Solution />
      <Features />
      <Pricing />
      <Entreprise />
    </main>
  );
}
