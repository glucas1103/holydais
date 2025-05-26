'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Erreur lors de l\'envoi du message.');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMsg('Erreur réseau ou serveur.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main>
      <Header />
      <div className="relative w-full min-h-screen">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/gradient-hero-prerender.jpeg"
            alt="Fond coloré Holydais"
            className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
          />
        </div>
        
        <div className="relative z-10 pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-8 text-white">
              Contactez-nous
            </h1>
            <p className="text-lg md:text-xl text-center mb-12 text-neutral-200">
              Nous sommes là pour répondre à toutes vos questions et vous accompagner dans votre projet.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-xl">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-[1.02]"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Envoi en cours...' : 'Envoyer'}
              </button>
              {status === 'success' && (
                <p className="text-green-300 text-center font-semibold mt-4">Message envoyé avec succès !</p>
              )}
              {status === 'error' && (
                <p className="text-red-300 text-center font-semibold mt-4">{errorMsg}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 