import Feature from './Feature';

const featuresData = [
  {
    title: 'Exprimez vos irritants, simplement',
    description: "Parlez, écrivez ou montrez : Holydais capte chaque détail pour comprendre vos vrais besoins.",
    image: "/image feature 1.png",
  },
  {
    title: 'De la complexité à l\'action',
    description: "Nous décomposons vos besoins en tâches simples, prêtes à être résolues ou automatisées.",
    image: "/image feature 2.png",
  },
  {
    title: 'Votre coach IA, pas juste un robot',
    description: "Vous comprenez enfin comment l'IA s'adapte à VOS workflows — et non l'inverse.",
    image: "/image feature 3.png",
  },
  {
    title: 'Vos workflows prennent vie',
    description: "Holydais code pour vous : chaque tâche validée devient un agent ou une solution digitale, instantanément.",
    image: "/image feature 4.png",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent">Comment ça marche ?</h2>
          <p className="text-xl text-neutral-600">
            Découvrez comment la plateforme Holydais permet à tous ses utilisateurs de mieux comprendre comment interagir avec l'IA et de déployer de et maintenir des agents directement dans leurs workflows. Même sans aucune connaissance technique.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center">
          {featuresData.map((feature, idx) => (
            <Feature key={idx} title={feature.title} description={feature.description} image={feature.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 