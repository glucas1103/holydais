import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';

const Entreprise = () => {
  return (
    <section id="entreprise" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Réinventer le travail, ensemble</h2>
          <p className="text-xl text-neutral-600">
            Holydais s'engage pour une automatisation qui inclut et responsabilise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-neutral-600 mb-6">
              Ici, les employés ne sont pas remplacés, mais transformés en véritables pilotes de l'innovation : chacun devient acteur du changement, maître des outils qui automatisent ses tâches et enrichissent sa mission.
            </p>
            <p className="text-neutral-600 mb-6">
              Nous croyons que l'IA doit rendre le travail plus humain, plus créatif et plus gratifiant, jamais le contraire.
            </p>
            <p className="text-neutral-600 mb-6">
              Notre engagement : accompagner chaque collaborateur dans la transition numérique, leur permettre de s'approprier les nouveaux outils, et de traverser cette évolution avec confiance et autonomie.
            </p>
            <Button href="/contact" variant="primary">
              Rejoignez la révolution
            </Button>
            <Button href="/blog" variant="secondary" className="mt-4">
              Découvrir notre blog
            </Button>
          </div>

          <div className="relative h-[500px] w-full">
            <Image
              src="/image hero.png"
              alt="Holydais - Innovation et transformation"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entreprise; 