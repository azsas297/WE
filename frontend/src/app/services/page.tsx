'use client';
import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: "Protection Individuelle",
    description: "Solution personnalisée pour les particuliers et familles",
    features: [
      "Analyse en temps réel des messages et contenus",
      "Alertes instantanées en cas de détection de harcèlement",
      "Protection sur tous vos réseaux sociaux",
      "Accompagnement personnalisé",
    ],
    icon: "👤",
    price: "Gratuit",
    recommended: false
  },
  {
    title: "Protection Scolaire",
    description: "Solution complète pour les établissements scolaires",
    features: [
      "Surveillance multi-plateformes",
      "Tableau de bord pour les équipes pédagogiques",
      "Formation et sensibilisation",
      "Support prioritaire 24/7",
    ],
    icon: "🏫",
    price: "Sur devis",
    recommended: true
  },
  {
    title: "Protection Entreprise",
    description: "Solution adaptée aux besoins professionnels",
    features: [
      "Protection des employés",
      "Rapports détaillés",
      "Intégration avec vos outils",
      "Formation des équipes",
    ],
    icon: "🏢",
    price: "Sur devis",
    recommended: false
  }
];

const features = [
  {
    title: "Intelligence Artificielle Avancée",
    description: "Notre IA analyse en temps réel les conversations pour détecter les comportements toxiques avec une précision inégalée.",
    icon: "🤖"
  },
  {
    title: "Multi-Plateformes",
    description: "Une protection sur tous vos réseaux sociaux et applications de messagerie préférés.",
    icon: "📱"
  },
  {
    title: "Confidentialité Garantie",
    description: "Vos données sont cryptées et traitées dans le respect total de votre vie privée.",
    icon: "🔒"
  },
  {
    title: "Support 24/7",
    description: "Une équipe d'experts disponible à tout moment pour vous accompagner.",
    icon: "💬"
  }
];

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
            Nos Solutions de Protection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Découvrez nos services adaptés à vos besoins pour lutter efficacement contre le cyberharcèlement
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 lg:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Fonctionnalités Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Nos Offres
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-xl p-8 ${service.recommended ? 'ring-2 ring-blue-500' : ''}`}>
                <div className="text-4xl mb-4">{service.icon}</div>
                {service.recommended && (
                  <span className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4 inline-block">
                    Recommandé
                  </span>
                )}
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-blue-900 mb-6">{service.price}</div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-500 text-white py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform">
                  En savoir plus
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Besoin d'une solution personnalisée ?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Contactez nos experts pour une démonstration gratuite et une évaluation de vos besoins
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform">
              Demander une démo
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 