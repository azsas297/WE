'use client';
import React from 'react';
import Link from 'next/link';

export default function ProtectionIndividuelle() {
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
              Protection Individuelle
            </h1>
            <p className="text-xl text-gray-600">
              Une solution complète pour protéger votre vie numérique et celle de votre famille
            </p>
          </div>

          {/* Contenu principal */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Pourquoi choisir notre protection individuelle ?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Protection en temps réel contre le cyberharcèlement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Analyse locale des messages avec une précision > 90%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Confidentialité totale de vos données</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Support 24/7 et accompagnement personnalisé</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  Tarification transparente
                </h2>
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="text-3xl font-bold text-blue-900 mb-2">Gratuit</div>
                  <p className="text-gray-600 mb-4">Pour commencer</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      Protection de base
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      1 appareil
                    </li>
                    <li className="flex items-center text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      Analyses en temps réel
                    </li>
                  </ul>
                  <div className="border-t border-blue-100 pt-4">
                    <div className="text-lg font-semibold text-blue-900 mb-1">
                      Version Premium
                    </div>
                    <p className="text-sm text-gray-600">
                      À partir de 9,99€/mois
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fonctionnalités détaillées */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Fonctionnalités détaillées
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-2xl mb-3">🔍</div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    Détection en temps réel
                  </h3>
                  <p className="text-gray-600">
                    Notre IA analyse localement vos messages pour détecter tout comportement toxique avec une précision supérieure à 90%.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-2xl mb-3">📱</div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    Multi-plateformes
                  </h3>
                  <p className="text-gray-600">
                    Compatible avec WhatsApp, SMS, Messenger et la plupart des plateformes de messagerie.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:opacity-90 transition-opacity">
                Commencer gratuitement
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 