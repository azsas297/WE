'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 'individual',
    title: "Protection Individuelle",
    description: "Solution personnalisée pour les particuliers et familles",
    features: [
      {
        title: "Détection en temps réel",
        description: "Analyse locale des messages avec une précision > 90%",
        icon: "🔍"
      },
      {
        title: "Multi-plateformes",
        description: "Compatible avec WhatsApp, SMS, Messenger et plus",
        icon: "📱"
      },
      {
        title: "Conformité RGPD",
        description: "Protection des données et confidentialité garanties",
        icon: "🔒"
      },
      {
        title: "Mode parental",
        description: "Contrôle et supervision pour la sécurité des enfants",
        icon: "👨‍👩‍👧‍👦"
      },
      {
        title: "Soutien émotionnel",
        description: "Chatbot disponible 24/7 pour vous accompagner",
        icon: "🤗"
      }
    ],
    benefits: [
      "Protection immédiate contre le cyberharcèlement",
      "Confidentialité totale des données",
      "Installation simple et rapide",
      "Mises à jour régulières"
    ],
    icon: "👤",
    price: "Gratuit",
    priceDetails: "Version premium à partir de 9,99€/mois",
    recommended: false,
    color: "blue",
    link: "/services/protection-individuelle"
  },
  {
    id: 'school',
    title: "Protection Scolaire",
    description: "Solution complète pour les établissements scolaires",
    features: [
      {
        title: "Tableau de bord avancé",
        description: "Supervision et rapports détaillés pour l'équipe pédagogique",
        icon: "📊"
      },
      {
        title: "Protection de groupe",
        description: "Sécurité pour l'ensemble des élèves de l'établissement",
        icon: "🏫"
      },
      {
        title: "Conformité RGPD",
        description: "Protection des données et confidentialité garanties",
        icon: "🔒"
      },
      {
        title: "Alertes instantanées",
        description: "Notification immédiate en cas de situation à risque",
        icon: "⚡"
      },
      {
        title: "Formation incluse",
        description: "Sessions de sensibilisation pour le personnel et les élèves",
        icon: "📚"
      }
    ],
    benefits: [
      "Réduction significative des cas de harcèlement",
      "Accompagnement personnalisé",
      "Rapports statistiques anonymisés",
      "Support prioritaire"
    ],
    icon: "🏫",
    price: "Sur devis",
    priceDetails: "Tarification selon le nombre d'élèves",
    recommended: true,
    color: "purple",
    link: "/services/protection-scolaire"
  },
  {
    id: 'enterprise',
    title: "Protection Entreprise",
    description: "Solution adaptée aux besoins professionnels",
    features: [
      {
        title: "Intégration professionnelle",
        description: "Compatible avec vos outils de communication interne",
        icon: "🔄"
      },
      {
        title: "Conformité RGPD",
        description: "Protection des données et confidentialité garanties",
        icon: "🔒"
      },
      {
        title: "Analytics avancés",
        description: "Tableaux de bord et rapports personnalisés",
        icon: "📈"
      },
      {
        title: "Support dédié",
        description: "Équipe dédiée et temps de réponse garanti",
        icon: "👥"
      }
    ],
    benefits: [
      "Protection de l'image de l'entreprise",
      "Amélioration du bien-être au travail",
      "Réduction des risques psychosociaux",
      "Formation des collaborateurs"
    ],
    icon: "🏢",
    price: "Sur devis",
    priceDetails: "Tarification selon la taille de l'entreprise",
    recommended: false,
    color: "indigo",
    link: "/services/protection-entreprise"
  }
];

const features = [
  {
    title: "Intelligence Artificielle Avancée",
    description: "Notre IA analyse en temps réel les conversations pour détecter les comportements toxiques avec une précision inégalée.",
    icon: "🤖",
    animation: "fade-right",
    details: [
      "Analyse en temps réel des conversations",
      "Détection multilingue",
      "Apprentissage continu",
      "Adaptation contextuelle",
      "Précision supérieure à 90%"
    ]
  },
  {
    title: "Multi-Plateformes",
    description: "Une protection sur tous vos réseaux sociaux et applications de messagerie préférés.",
    icon: "📱",
    animation: "fade-up",
    details: [
      "WhatsApp, Messenger, Instagram",
      "SMS/MMS",
      "Discord, Slack",
      "Protection unifiée",
      "Synchronisation en temps réel"
    ]
  },
  {
    title: "Confidentialité Garantie",
    description: "Vos données sont cryptées et traitées dans le respect total de votre vie privée.",
    icon: "🔒",
    animation: "fade-up",
    details: [
      "Cryptage de bout en bout",
      "Authentification à deux facteurs",
      "Conformité RGPD",
      "Audits de sécurité réguliers",
      "Stockage sécurisé des données"
    ]
  },
  {
    title: "Support 24/7",
    description: "Une équipe d'experts disponible à tout moment pour vous accompagner.",
    icon: "💬",
    animation: "fade-left",
    details: [
      "Chat en direct",
      "Support téléphonique",
      "Email prioritaire",
      "Base de connaissances",
      "Assistance vidéo"
    ]
  }
];

export default function Services() {
  const [isComparing, setIsComparing] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const toggleFeature = (title: string) => {
    setExpandedFeature(expandedFeature === title ? null : title);
  };

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
      <section className="py-16 px-4 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
            Fonctionnalités Principales
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Découvrez comment notre technologie avancée protège votre vie numérique
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl cursor-pointer relative overflow-hidden"
              >
                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Icône avec animation */}
                <div className="relative">
                  <div className="text-5xl mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-6">
                    {feature.icon}
                  </div>
                </div>

                {/* Contenu avec animation */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-800">
                    {feature.description}
                  </p>

                  {/* Bouton déroulant */}
                  <button
                    onClick={() => toggleFeature(feature.title)}
                    className="mt-4 text-blue-600 font-semibold hover:text-blue-700 flex items-center"
                  >
                    {expandedFeature === feature.title ? 'Voir moins' : 'En savoir plus'}
                    <svg
                      className={`w-4 h-4 ml-1 transform transition-transform ${
                        expandedFeature === feature.title ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Contenu déroulant */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedFeature === feature.title ? 'max-h-48 mt-4' : 'max-h-0'
                    }`}
                  >
                    <ul className="space-y-2 text-sm text-gray-600">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Indicateur de progression au survol */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>

          {/* Bannière statistiques */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-blue-600 mb-2">90%+</div>
              <div className="text-gray-600">Taux de détection</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support disponible</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Confidentialité</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Choisissez votre Protection
            </h2>
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setIsComparing(false)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  !isComparing ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                Nos offres
              </button>
              <button
                onClick={() => setIsComparing(true)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  isComparing ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                Comparaison
              </button>
            </div>
          </div>

          {!isComparing ? (
            // Vue Nos offres
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`bg-white rounded-2xl p-8 transition-all duration-200 ease-out hover:shadow-2xl hover:-translate-y-2 relative ${
                    service.recommended ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <div className="relative">
                    {service.recommended && (
                      <span className="absolute -top-4 right-0 bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                        Recommandé
                      </span>
                    )}
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                  </div>

                  <div className="space-y-6">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start">
                        <span className="text-2xl mr-3">{feature.icon}</span>
                        <div>
                          <h4 className="font-semibold text-blue-900">{feature.title}</h4>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="text-2xl font-bold text-blue-900 mb-2">{service.price}</div>
                    <p className="text-sm text-gray-600 mb-6">{service.priceDetails}</p>
                    <a 
                      href={`/services/${service.id === 'individual' ? 'protection-individuelle' : 
                             service.id === 'school' ? 'protection-scolaire' : 
                             'protection-entreprise'}`}
                      className="block w-full py-3 rounded-full font-semibold text-center shadow-lg bg-gradient-to-r from-blue-600 to-purple-500 text-white hover:opacity-90 transition-opacity cursor-pointer z-10 relative"
                    >
                      En savoir plus
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Vue Comparaison
            <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="p-4 text-left"></th>
                    {services.map(service => (
                      <th key={service.id} className="p-4 text-center">
                        <div className="text-3xl mb-3">{service.icon}</div>
                        <h3 className="text-xl font-bold text-blue-900 mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.description}</p>
                        <div className="mt-4 text-2xl font-bold text-blue-900">{service.price}</div>
                        <p className="text-sm text-gray-600">{service.priceDetails}</p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {services[0].features.map((_, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="p-4 font-semibold text-blue-900">
                        {services[0].features[index].title}
                      </td>
                      {services.map(service => (
                        <td key={service.id} className="p-4 text-center">
                          <div className="text-2xl mb-2">{service.features[index].icon}</div>
                          <p className="text-sm text-gray-600">
                            {service.features[index].description}
                          </p>
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="p-4 font-semibold text-blue-900">Bénéfices</td>
                    {services.map(service => (
                      <td key={service.id} className="p-4">
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <span className="text-green-500 mr-2">✓</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
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
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              Demander une démo
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 hover:bg-white/10">
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 