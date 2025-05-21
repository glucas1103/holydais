'use client';

import Link from 'next/link';
import { useState } from 'react';
import Tooltip from '../ui/Tooltip';

const plans = [
  {
    name: 'Hobby',
    price: 'Gratuit',
    priceValue: 0,
    priceUnit: '',
    description: 'Inclus :',
    features: [
      "Essai Pro de deux semaines",
      "5 automatisations",
      "1 workflow",
      <span key="mode-slow">Mode Slow <Tooltip content="Large Language Modèle par défaut"><span className="ml-1 cursor-pointer">&#9432;</span></Tooltip></span>,
    ],
    cta: 'Télécharger',
    ctaType: 'download',
    popular: false,
  },
  {
    name: 'Pro',
    price: '20 €',
    priceValue: 20,
    priceUnit: '/mois',
    description: 'Tout dans Hobby, plus :',
    features: [
      "Workflows illimités",
      "Automatisations illimitées",
      <span key="mode-max">Mode Max <Tooltip content="LLMs avancés et entraînés spécialement pour la création d'agents IA"><span className="ml-1 cursor-pointer">&#9432;</span></Tooltip></span>,
    ],
    cta: 'Commencer',
    ctaType: 'start',
    popular: true,
  },
  {
    name: 'Business',
    price: '40 €',
    priceValue: 40,
    priceUnit: '/utilisateur/mois',
    description: 'Tout dans Pro, plus :',
    features: [
      <span key="confidentialite">Mode confidentialité renforcé <Tooltip content="Choix d'une architecture technique pour le déploiement, Options Virtual Private Cloud ou On-Premise."><span className="ml-1 cursor-pointer">&#9432;</span></Tooltip></span>,
      "Facturation centralisée",
      "Dashboard admin",
      "SSO SAML/OIDC",
    ],
    cta: 'Contactez-nous',
    ctaType: 'contact',
    popular: false,
  },
];

const Pricing = () => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Nos Offres</h2>
          <p className="text-xl text-neutral-600 mb-6">
            Des solutions adaptées à chaque étape de votre transformation IA
          </p>
          {/* Toggle mensuel/annuel (visuel uniquement) */}
          <div className="inline-flex items-center bg-neutral-100 rounded-xl p-1 mb-2">
            <button
              className={`px-4 py-2 rounded-xl font-semibold transition-colors ${billing === 'monthly' ? 'bg-black text-white' : 'text-black'}`}
              onClick={() => setBilling('monthly')}
            >
              Mensuel
            </button>
            <button
              className={`px-4 py-2 rounded-xl font-semibold transition-colors ${billing === 'yearly' ? 'bg-black text-white' : 'text-black'}`}
              onClick={() => setBilling('yearly')}
              disabled
            >
              Annuel <span className="ml-1 text-xs text-green-600">(bientôt)</span>
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl border border-black shadow-lg p-8 flex flex-col items-center transition-all duration-200 relative h-full
                ${plan.popular
                  ? 'shadow-2xl scale-105 z-10 bg-gradient-to-br from-pink-400 via-white to-lime-300'
                  : 'bg-white'
                }`}
              style={plan.popular ? { background: 'linear-gradient(135deg, #fff1f9 0%, #fbc2eb 60%, #f7f0c5 100%)' } : {}}
            >
              <span
                className={`absolute -top-4 left-1/2 -translate-x-1/2 text-sm font-semibold rounded-full mb-4 tracking-wide w-40 h-8 flex items-center justify-center
                  ${plan.popular
                    ? 'bg-black text-white'
                    : 'bg-neutral-200 text-neutral-700'
                  }`
                }
              >
                {plan.popular ? 'Le plus populaire' : 'Offre'}
              </span>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4 flex flex-col items-center">
                <span className="text-5xl font-bold flex items-end">
                  {plan.price}
                  {plan.priceUnit && (
                    <span className="text-base text-neutral-500 ml-2 mb-1">{plan.priceUnit}</span>
                  )}
                </span>
              </div>
              <hr className="w-full border-t border-neutral-200 mb-4" />
              <p className="text-xl font-bold text-neutral-800 mb-6 text-center">{plan.description}</p>
              <ul className="space-y-3 mb-8 w-full">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-black mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto w-full">
                {plan.ctaType === 'download' ? (
                  <button className="bg-black text-white w-full py-3 rounded-xl font-bold mb-2">Télécharger</button>
                ) : plan.ctaType === 'start' ? (
                  <button className="bg-black text-white w-full py-3 rounded-xl font-bold mb-2">Commencer</button>
                ) : (
                  <Link
                    href="/contact"
                    className="block w-full text-center py-3 rounded-xl text-lg font-extrabold border-2 border-black tracking-wide bg-white text-black hover:bg-neutral-100 mb-2"
                  >
                    {plan.cta}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 text-neutral-600 text-lg">
          Des questions sur la sécurité, la facturation ou un contrat sur-mesure ?{' '}
          <Link href="/contact" className="underline font-semibold">Contactez-nous</Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 