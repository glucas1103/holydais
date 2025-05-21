import Button from '../ui/Button';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="flex items-center justify-center py-8 px-0 w-full bg-transparent mt-16">
      <div
        className="relative w-full max-w-[1200px] mx-auto rounded-2xl overflow-hidden flex flex-col items-center justify-center min-h-[600px] shadow-xl"
        style={{ minHeight: '600px' }}
      >
        {/* Image de fond sans overlay */}
        <img
          src="/gradient-hero-prerender.jpeg"
          alt="Fond coloré Holydais"
          className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
        />
        {/* Contenu Hero */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center py-8">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 mt-8" style={{ color: '#fff' }}>
            Le Constructeur d'Agents IA
          </h1>
          <p className="text-lg md:text-lg mb-10 mx-auto whitespace-nowrap" style={{ color: '#E4E4E7' }}>
            Construit pour permettre à tous de comprendre et d'adopter l'IA dans leur quotidien, sans coder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button href="/contact" variant="primary">
              Découvrir Holydais
            </Button>
            <Button href="#features" variant="secondary">
              Voir comment ça marche
            </Button>
          </div>
          <div className="relative w-full max-w-[900px] h-[400px] mt-4 mb-0" style={{marginBottom: '-32px'}}>
            <Image
              src="/image landing.png"
              alt="Interface Holydais"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 