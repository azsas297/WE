'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    question: "Comment fonctionne E-confident ?",
    answer: "Notre IA analyse localement vos messages pour détecter tout comportement toxique, avec un taux de détection supérieur à 90%. Vos données restent confidentielles et sont traitées uniquement sur votre appareil."
  },
  {
    question: "Est-ce compatible avec tous les réseaux sociaux ?",
    answer: "Oui, E-confident s'intègre avec WhatsApp, SMS, Messenger et la plupart des plateformes de messagerie. Notre solution est multi-plateformes et synchronisée sur tous vos appareils."
  },
  {
    question: "L'outil est-il accessible aux particuliers et aux entreprises ?",
    answer: "Nous proposons des solutions adaptées pour tous : particuliers (version gratuite), établissements scolaires (avec tableau de bord pour les équipes pédagogiques) et entreprises (intégration personnalisée)."
  },
  {
    question: "Comment fonctionne le support ?",
    answer: "Notre équipe est disponible 24/7 via le chatbot intégré qui offre un soutien émotionnel immédiat. En cas de besoin, vous pouvez également contacter nos experts directement."
  },
];

const testimonials = [
  {
    name: "Clara, 17 ans",
    text: "Grâce à E-confident, je me sens enfin en sécurité sur les réseaux sociaux. L'application détecte immédiatement les messages toxiques et le chatbot m'aide vraiment quand j'en ai besoin."
  },
  {
    name: "M. et Mme Diallo, parents",
    text: "En tant que parents, nous sommes rassurés de savoir que nos enfants sont protégés en ligne. Les notifications nous alertent en cas de situation à risque."
  },
  {
    name: "Lycée Jean Moulin",
    text: "La solution nous permet de prévenir efficacement le cyberharcèlement. Le tableau de bord et les rapports anonymisés nous aident à agir rapidement."
  }
];

export default function Home() {
  // Ref pour le curseur custom
  const heroRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [pulse, setPulse] = useState(1);
  // Curseur custom avec lag
  useEffect(() => {
    const hero = heroRef.current;
    const cursor = cursorRef.current;
    if (!hero || !cursor) return;
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    let rafId: number;
    let lastMove = Date.now();
    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      cursor.style.opacity = '1';
      lastMove = Date.now();
    };
    const animate = () => {
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;
      cursor.style.transform = `translate(${currentX - 6}px, ${currentY - 6}px)`;
      // Si pas de mouvement depuis 1.2s, cacher le curseur
      if (Date.now() - lastMove > 1200) {
        cursor.style.opacity = '0';
      }
      rafId = requestAnimationFrame(animate);
    };
    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });
    rafId = requestAnimationFrame(animate);
    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Parallax 3D + pulse
  useEffect(() => {
    const hero = heroRef.current;
    const logo = logoRef.current;
    if (!hero || !logo) return;
    let mouseX = 0, mouseY = 0;
    let tiltX = 0, tiltY = 0;
    let currentTiltX = 0, currentTiltY = 0;
    let floatY = 0;
    let pulseVal = 1;
    let t = 0;
    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      // Tilt de -18° à +18°
      tiltY = (x - 0.5) * 36;
      tiltX = (0.5 - y) * 24;
    };
    const animate = () => {
      t += 0.03;
      // Pulse (respiration)
      pulseVal = 1 + 0.04 * Math.sin(t * 1.2);
      setPulse(pulseVal);
      // Flottement
      floatY = Math.sin(t) * 12;
      // Interpolation douce
      currentTiltX += (tiltX - currentTiltX) * 0.12;
      currentTiltY += (tiltY - currentTiltY) * 0.12;
      logo.style.transform = `translateY(${floatY}px) scale(${pulseVal}) rotateX(${currentTiltX}deg) rotateY(${currentTiltY}deg)`;
      rafId = requestAnimationFrame(animate);
    };
    hero.addEventListener('mousemove', handleMouseMove);
    rafId = requestAnimationFrame(animate);
    hero.addEventListener('mouseleave', () => {
      tiltX = 0;
      tiltY = 0;
    });
    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section ref={heroRef} className="relative container mx-auto px-4 lg:px-8 py-24 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden">
        {/* Cursor custom */}
        <div
          ref={cursorRef}
          className="pointer-events-none absolute top-0 left-0 w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-400 opacity-0 transition-opacity duration-200 z-20"
          style={{ filter: 'blur(2px)', mixBlendMode: 'multiply' }}
        />
        {/* Texte Hero */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left relative z-10">
          {/* Badge SVG */}
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white text-xs font-semibold shadow-md tracking-wide uppercase">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="inline-block mr-1"><circle cx="10" cy="10" r="10" fill="#fff" fillOpacity="0.18"/><path d="M10 3l2.09 4.26L17 8.27l-3.45 3.36L14.18 17 10 14.27 5.82 17l.63-5.37L3 8.27l4.91-.99L10 3z" fill="#fff"/></svg>
            N°1 de la protection anti-cyberharcèlement
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-tight drop-shadow-lg">
            Protégez-vous du<br />cyberharcèlement<br />avec l'IA e-confident
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-xl">
            e-confident détecte, prévient et accompagne en temps réel pour un espace numérique plus sûr, pour tous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300 text-lg w-full sm:w-auto">
              Découvrir la solution
            </button>
            <button className="bg-white border-2 border-blue-600 text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 text-lg w-full sm:w-auto">
              Demander une démo
            </button>
          </div>
        </div>
        {/* Logo 3D à droite, vivant et interactif */}
        <div className="flex-1 flex justify-center items-center mb-10 md:mb-0">
          <div ref={logoRef} className="relative w-full max-w-[560px] aspect-square flex items-center justify-center will-change-transform">
            <Image
              src="/logo-3d.png"
              alt="Logo 3D e-confident"
              width={560}
              height={560}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Pourquoi choisir e-confident */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Pourquoi choisir E-confident ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une solution innovante qui protège, détecte et accompagne en temps réel contre le cyberharcèlement
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">IA Locale Avancée</h3>
              <p className="text-gray-600 leading-relaxed">
                Notre intelligence artificielle analyse localement vos messages avec une précision supérieure à 90%, tout en respectant totalement votre vie privée.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-6">🛡️</div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Protection Multi-Plateformes</h3>
              <p className="text-gray-600 leading-relaxed">
                Une protection complète sur tous vos réseaux sociaux et messageries, synchronisée sur tous vos appareils en toute sécurité.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-6">💬</div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Soutien Émotionnel 24/7</h3>
              <p className="text-gray-600 leading-relaxed">
                Un chatbot intelligent qui vous accompagne et vous conseille, avec un accès direct à nos experts en cas de besoin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre mission */}
      <section id="mission" className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="flex-1 p-8 lg:p-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Notre mission</h2>
                <p className="text-blue-50 text-lg mb-8 leading-relaxed">
                  Face au constat qu'1 jeune sur 5 est victime de cyberharcèlement, nous avons développé une solution innovante qui protège, détecte et accompagne en temps réel, pour un Internet plus sûr et bienveillant.
                </p>
                <ul className="space-y-4">
                  {[
                    "Détecter automatiquement les messages toxiques",
                    "Protéger la confidentialité des utilisateurs",
                    "Offrir un soutien émotionnel immédiat",
                    "Accompagner les victimes vers les ressources adaptées"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-white">
                      <span className="mr-3 text-blue-200">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <MissionLogo3D />
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section id="temoignages" className="py-20 px-4 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Ils nous font confiance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez comment E-confident aide ses utilisateurs à retrouver sérénité et confiance dans leur vie numérique
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <div className="text-yellow-400 text-2xl">★★★★★</div>
                </div>
                <blockquote className="text-gray-700 text-lg italic mb-6">
                  "{testimonial.text}"
                </blockquote>
                <div className="text-blue-700 font-semibold text-center">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Questions fréquentes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur e-confident
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-blue-800 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
            Protégez-vous dès maintenant
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            1 jeune sur 5 est victime de cyberharcèlement. Ne laissez pas cela vous arriver. Rejoignez E-confident et bénéficiez d'une protection intelligente 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300">
              Commencer gratuitement
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors duration-300">
              Demander une démo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function MissionLogo3D() {
  const logoRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;
    let tiltX = 0, tiltY = 0;
    let currentTiltX = 0, currentTiltY = 0;
    let floatY = 0;
    let pulseVal = 1;
    let t = 0;
    let rafId: number;
    const parent = logo.parentElement?.parentElement;
    const handleMouseMove = (e: MouseEvent) => {
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      tiltY = (x - 0.5) * 36;
      tiltX = (0.5 - y) * 24;
    };
    const animate = () => {
      t += 0.03;
      pulseVal = 1 + 0.04 * Math.sin(t * 1.2);
      floatY = Math.sin(t) * 12;
      currentTiltX += (tiltX - currentTiltX) * 0.12;
      currentTiltY += (tiltY - currentTiltY) * 0.12;
      logo.style.transform = `translateY(${floatY}px) scale(${pulseVal}) rotateX(${currentTiltX}deg) rotateY(${currentTiltY}deg)`;
      rafId = requestAnimationFrame(animate);
    };
    parent?.addEventListener('mousemove', handleMouseMove);
    rafId = requestAnimationFrame(animate);
    parent?.addEventListener('mouseleave', () => {
      tiltX = 0;
      tiltY = 0;
    });
    return () => {
      parent?.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);
  return (
    <div className="flex-1 p-8 lg:p-16 flex justify-center items-center">
      <div ref={logoRef} className="relative w-full max-w-md aspect-square flex items-center justify-center will-change-transform">
        <Image
          src="/logo-3d.png"
          alt="Logo 3D e-confident"
          width={400}
          height={400}
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  );
}

// Animation CSS
// Ajoutez ceci dans globals.css :
// .animate-fadein { animation: fadein 1s ease; }
// @keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
// .animate-bounce-slow { animation: bounce 2s infinite; }
// @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } } 