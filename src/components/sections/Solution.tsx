import Link from 'next/link';
import Button from '../ui/Button';

const Solution = () => {
  return (
    <section id="solution" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Déployez l'IA plus rapidement</h2>
          <p className="text-xl text-neutral-600">
            En analysant automatiquement vos processus, Holydais permet de déployer les solutions là où elles sont le plus demandées, vite, et de passer à l'échelle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative group bg-white p-8 rounded-3xl border border-neutral-200 shadow-md transition-all duration-300 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-3xl z-0" style={{background: 'linear-gradient(135deg, #f8ffae 0%, #43c6ac 50%, #191654 100%)'}}></div>
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 mx-auto relative z-10">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 relative z-10 group-hover:text-white transition-colors duration-300">Intelligence de pointe</h3>
            <p className="text-neutral-600 mb-6 relative z-10 group-hover:text-white transition-colors duration-300">
              Grâce à un mix de modèles sur-mesure et de modèles de pointe, Holydais est conçu pour vous offrir des résultats concrets.
            </p>
          </div>

          <div className="relative group bg-white p-8 rounded-3xl border border-neutral-200 shadow-md transition-all duration-300 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-3xl z-0" style={{background: 'linear-gradient(135deg, #f8ffae 0%, #43c6ac 50%, #191654 100%)'}}></div>
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 mx-auto relative z-10">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 relative z-10 group-hover:text-white transition-colors duration-300">Expérience familière</h3>
            <p className="text-neutral-600 mb-6 relative z-10 group-hover:text-white transition-colors duration-300">
              Intégré à vos outils du quotidien, la plateforme vous apporte des solutions à vos sujets quotidiens, déployables immédiatement.
            </p>
          </div>

          <div className="relative group bg-white p-8 rounded-3xl border border-neutral-200 shadow-md transition-all duration-300 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-3xl z-0" style={{background: 'linear-gradient(135deg, #f8ffae 0%, #43c6ac 50%, #191654 100%)'}}></div>
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 mx-auto relative z-10">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 relative z-10 group-hover:text-white transition-colors duration-300">Sécurité maximale</h3>
            <p className="text-neutral-600 mb-6 relative z-10 group-hover:text-white transition-colors duration-300">
              Vous pouvez choisir de tout opérer localement, Vos données ne quittent jamais votre entreprise. Holydais est conforme à toutes les normes de confidentialité (RGDR, SOC 2, ISO 27001).
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button href="/contact" variant="primary">
            Démarrer avec Holydais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solution; 