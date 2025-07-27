'use client';
import React from 'react';
import Link from 'next/link';

export default function ProtectionEntreprise() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <Link 
              href="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
            >
              <span className="mr-2">←</span> Retour aux services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Protection Entreprise
            </h1>
            <p className="text-xl text-gray-600">
              Protégez votre entreprise et vos collaborateurs contre les risques numériques
            </p>
          </div>

          {/* Contenu principal */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Solution professionnelle complète
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Intégration avec vos outils de communication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Conformité RGPD garantie</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Analytics avancés et tableaux de bord personnalisés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Support dédié avec temps de réponse garanti</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Tarification entreprise
                </h2>
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="text-3xl font-bold text-blue-900 mb-2">Sur devis</div>
                  <p className="text-gray-600 mb-4">Adapté à la taille de votre entreprise</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      Protection complète
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      Nombre d'utilisateurs flexible
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      Support prioritaire 24/7
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      Formation des collaborateurs
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fonctionnalités détaillées */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Fonctionnalités entreprise
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-2xl mb-3">🔄</div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    Intégration professionnelle
                  </h3>
                  <p className="text-gray-600">
                    Compatible avec vos outils de communication interne et vos processus existants.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-2xl mb-3">📈</div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    Analytics avancés
                  </h3>
                  <p className="text-gray-600">
                    Tableaux de bord et rapports personnalisés pour suivre et améliorer la protection.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:opacity-90 transition-opacity">
                Contacter notre équipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 