'use client';
import Link from 'next/link';

export default function ConfidentialitePage() {
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
          Confidentialité Garantie
        </h1>

        {/* Description détaillée */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <div className="text-6xl mb-6">🔒</div>
          <p className="text-xl text-gray-700 mb-6">
            La protection de vos données personnelles est notre priorité absolue. 
            Nous utilisons les technologies de cryptage les plus avancées pour garantir 
            la confidentialité de vos communications.
          </p>

          {/* Caractéristiques détaillées */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-blue-900">Mesures de sécurité</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Cryptage de bout en bout</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Authentification à deux facteurs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Stockage sécurisé des données</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Audits de sécurité réguliers</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-blue-900">Conformité</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>RGPD</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>CCPA</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>ISO 27001</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>SOC 2 Type II</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section statistiques */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">256-bit</div>
            <div className="text-gray-600">Cryptage AES</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">Conformité RGPD</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">0</div>
            <div className="text-gray-600">Fuites de données</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            En savoir plus sur notre sécurité
          </Link>
        </div>
      </div>
    </main>
  );
} 