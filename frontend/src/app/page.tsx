'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    question: "Comment fonctionne E-confident ?",
    answer: "Notre IA analyse en temps réel les messages pour détecter et signaler tout comportement de cyberharcèlement, tout en respectant la confidentialité des utilisateurs."
  },
  {
    question: "Est-ce compatible avec tous les réseaux sociaux ?",
    answer: "e-confident s'intègre facilement à la plupart des plateformes de messagerie et réseaux sociaux grâce à nos API et extensions."
  },
  {
    question: "L'outil est-il accessible aux particuliers et aux entreprises ?",
    answer: "Oui, e-confident propose des solutions adaptées aussi bien aux particuliers, familles, écoles qu'aux entreprises et collectivités."
  },
  {
    question: "Comment puis-je contacter le support ?",
    answer: "Notre équipe est disponible 24/7 par chat, email ou téléphone pour répondre à toutes vos questions."
  },
];

const testimonials = [
  {
    name: "Sophie, maman d'adolescent",
    text: "Grâce à e-confident, mon fils a retrouvé confiance en lui et n'a plus peur d'aller sur les réseaux sociaux. Un vrai soulagement pour toute la famille !"
  },
  {
    name: "Lycée Jean Moulin",
    text: "L'intégration d'e-confident dans notre établissement a permis de réduire considérablement les situations de harcèlement en ligne."
  },
  {
    name: "Marc, DRH d'entreprise",
    text: "Un outil indispensable pour garantir un environnement numérique sain à nos collaborateurs."
  },
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
      <section id="pourquoi" className="py-20 px-4 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Pourquoi choisir E-confident ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une solution complète et innovante pour lutter efficacement contre le cyberharcèlement
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Détection intelligente</h3>
              <p className="text-gray-600 leading-relaxed">
                Notre IA de pointe analyse en continu les conversations pour identifier les comportements toxiques et prévenir le harcèlement.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-6">🛡️</div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Protection avancée</h3>
              <p className="text-gray-600 leading-relaxed">
                Une protection complète et personnalisée, adaptée à vos besoins spécifiques et à votre environnement numérique.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-6">💬</div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Support 24/7</h3>
              <p className="text-gray-600 leading-relaxed">
                Une équipe d'experts disponible à tout moment pour vous accompagner et intervenir en cas de besoin.
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
                  Chez e-confident, nous croyons que chacun mérite de se sentir en sécurité sur Internet. Notre mission est de créer un environnement numérique plus sûr et bienveillant pour tous.
                </p>
                <ul className="space-y-4">
                  {[
                    "Prévenir les situations à risque",
                    "Protéger les utilisateurs vulnérables",
                    "Accompagner les victimes",
                    "Sensibiliser à la cybersécurité"
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
              Découvrez comment e-confident aide ses utilisateurs à retrouver confiance dans leur vie numérique
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
      <section className="py-20 px-4 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-8">
            Prêt à sécuriser votre espace numérique ?
          </h2>
          <p className="text-xl text-blue-800 mb-12 max-w-2xl mx-auto">
            Rejoignez les milliers d'utilisateurs qui font confiance à e-confident pour leur protection en ligne.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300">
              Commencer gratuitement
            </button>
            <button className="bg-transparent border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gradient-to-r hover:from-blue-50 hover:via-purple-50 hover:to-indigo-50 transition-colors duration-300">
              Contacter un expert
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