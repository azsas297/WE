'use client';
import React from 'react';
import Link from 'next/link';

export default function ProtectionScolaire() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <Link 
              href="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
            >
              <span className="mr-2">←</span> Retour aux services
            </Link>
            <div className="inline-block bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-6">
              Recommandé
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Protection Scolaire
            </h1>
            <p className="text-xl text-gray-600">
              La solution complète pour protéger vos élèves et votre établissement
            </p>
          </div>

          {/* Contenu principal */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Une protection adaptée aux établissements scolaires
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Tableau de bord avancé pour l'équipe pédagogique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Protection de groupe pour tous les élèves</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Alertes instantanées en cas de situation à risque</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Formation incluse pour le personnel et les élèves</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Tarification sur mesure
                </h2>
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="text-3xl font-bold text-blue-900 mb-2">Sur devis</div>
                  <p className="text-gray-600 mb-4">Adapté à votre établissement</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      Protection complète
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      Nombre d'élèves illimité
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      Support prioritaire
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      Formation incluse
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fonctionnalités détaillées */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Fonctionnalités spéciales établissements
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-2xl mb-3">📊</div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    Tableau de bord avancé
                  </h3>
                  <p className="text-gray-600">
                    Supervision et rapports détaillés pour l'équipe pédagogique, avec statistiques anonymisées.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-2xl mb-3">⚡</div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    Alertes instantanées
                  </h3>
                  <p className="text-gray-600">
                    Notification immédiate en cas de situation à risque pour une intervention rapide.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:opacity-90 transition-opacity">
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 