'use client';
import Link from 'next/link';

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        {/* Bouton Retour */}
        <Link 
          href="/services" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour aux services
        </Link>

        {/* Titre principal */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
          Support 24/7
        </h1>

        {/* Description détaillée */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="text-6xl mb-6">💬</div>
          <p className="text-xl text-gray-700 mb-6">
            Notre équipe d'experts est disponible 24h/24 et 7j/7 pour vous accompagner 
            et répondre à toutes vos questions. Nous nous engageons à vous fournir 
            une assistance rapide et efficace à tout moment.
          </p>

          {/* Caractéristiques détaillées */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-blue-900">Canaux de support</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Chat en direct</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Support téléphonique</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Email prioritaire</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Base de connaissances</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Assistance vidéo</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-blue-900">Notre engagement</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Réponse en moins de 5 minutes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Experts qualifiés</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Support multilingue</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Suivi personnalisé</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Satisfaction garantie</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section statistiques */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">&lt;5min</div>
            <div className="text-gray-600">Temps de réponse moyen</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Taux de satisfaction</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Disponibilité</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contacter le support
          </Link>
        </div>
      </div>
    </main>
  );
} 