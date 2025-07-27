'use client';
import React from 'react';
import Image from 'next/image';

// Import des images
import manasseImg from '../../../public/team/manasse.jpg';
import bacharImg from '../../../public/team/bachar.jpg';
import gaetanImg from '../../../public/team/gaetan.jpg';
import ahmedImg from '../../../public/team/ahmed.jpg';
import bonifaceImg from '../../../public/team/boniface.jpg';

const teamMembers = [
  {
    name: "Manassé Lumbu",
    role: "Chef de projet & Communication",
    description: "En charge de la coordination et de la gestion du projet. Il est en relation avec les acteurs externes et les parties prenantes. Il a aussi une partie commerciale.",
    image: "/team/manasse.jpeg"
  },
  {
    name: "Bachar Moustapha",
    role: "Chief Technical Officer & Ingénieur IA",
    description: "En charge de la supervision technique du projet. Développement des IA, des applications et du web.",
    image: "/team/bachar.jpeg"
  },
  {
    name: "Gaëtan Oueyeya",
    role: "Ingénieur Informatique & Concepteur",
    description: "En charge de la définition, de la conception et du développement des solutions techniques. Il est aussi en charge d'intégrer les IA.",
    image: "/team/gaetan.jpeg"
  },
  {
    name: "Ahmed El Abaidi",
    role: "Développeur & Responsable Cybersécurité",
    description: "En charge du développement technique et de la cybersécurité des programmes. En charge du respect de la RGPD.",
    image: "/team/ahmed.jpeg"
  },
  {
    name: "Boniface Pere",
    role: "Data Analyst",
    description: "En charge de l'identification des sources de données, de la classification et de l'analyse.",
    image: "/team/boniface.jpeg"
  }
];

const values = [
  {
    title: "Innovation",
    description: "Nous repoussons constamment les limites de la technologie pour offrir une protection toujours plus efficace.",
    icon: "💡"
  },
  {
    title: "Confidentialité",
    description: "La protection de vos données personnelles est au cœur de toutes nos décisions.",
    icon: "🔒"
  },
  {
    title: "Bienveillance",
    description: "Nous créons un environnement numérique plus sûr et plus respectueux pour tous.",
    icon: "❤️"
  },
  {
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque aspect de notre service.",
    icon: "⭐"
  }
];

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
                Notre Histoire
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Fondé en 2023, e-confident est né d'une vision simple : rendre Internet plus sûr pour tous. Notre équipe d'experts en IA et en cybersécurité s'est réunie autour de cette mission commune.
              </p>
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform">
                  Rejoignez-nous
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-lg aspect-square">
                <Image
                  src="/logo.png"
                  alt="Histoire e-confident"
                  fill
                  className="object-contain p-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Notre Mission</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Chez e-confident, nous croyons en un Internet plus sûr et plus bienveillant. Notre mission est de protéger chaque utilisateur contre le cyberharcèlement en utilisant les technologies les plus avancées.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-colors">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-blue-100">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
            Notre Équipe
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Première ligne - 3 premiers membres */}
            <div className="w-full flex flex-wrap justify-center gap-8 mb-8">
              {teamMembers.slice(0, 3).map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow w-full md:w-[calc(33.33%-1.5rem)] max-w-sm">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 text-center mb-2">{member.name}</h3>
                  <p className="text-blue-600 text-center mb-4">{member.role}</p>
                  <p className="text-gray-600 text-center">{member.description}</p>
                </div>
              ))}
            </div>
            {/* Deuxième ligne - 2 derniers membres */}
            <div className="w-full flex flex-wrap justify-center gap-8">
              {teamMembers.slice(3).map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow w-full md:w-[calc(33.33%-1.5rem)] max-w-sm">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 text-center mb-2">{member.name}</h3>
                  <p className="text-blue-600 text-center mb-4">{member.role}</p>
                  <p className="text-gray-600 text-center">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">100K+</div>
              <p className="text-gray-600">Utilisateurs Protégés</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <p className="text-gray-600">Taux de Détection</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">Support Disponible</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Experts Dédiés</p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-20 px-4 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Ils parlent de nous
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="https://www.leparisien.fr/essonne-91/essonne-cinq-etudiants-utilisent-lintelligence-artificielle-contre-le-harcelement-en-ligne-11-03-2024-ERIAI6EITRDAZHZ5CNCMFVCLOI.php" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/media/le-parisien.png"
                alt="Le Parisien"
                width={300}
                height={120}
                className="mx-auto mb-6 w-auto h-20"
              />
              <p className="text-gray-600 italic mb-4">
                "Une solution innovante qui révolutionne la lutte contre le cyberharcèlement"
              </p>
              <p className="text-blue-600 font-semibold">- Le Parisien, Mars 2024</p>
              <p className="text-sm text-gray-500 mt-4 hover:text-blue-600 transition-colors">Lire l'article →</p>
            </a>
            <a href="https://bfmbusiness.bfmtv.com/tech/e-confident-la-startup-francaise-qui-protege-contre-le-cyberharcelement_AN-202309150001.html" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/media/essonnes.png"
                alt="BFM Business"
                width={300}
                height={120}
                className="mx-auto mb-6 w-auto h-20"
              />
              <p className="text-gray-600 italic mb-4">
                "E-confident, la startup française qui protège efficacement contre le cyberharcèlement"
              </p>
              <p className="text-blue-600 font-semibold">- BFM Business, Septembre 2023</p>
              <p className="text-sm text-gray-500 mt-4 hover:text-blue-600 transition-colors">Lire l'article →</p>
            </a>
            <a href="https://www.lesechos.fr/tech-medias/intelligence-artificielle/e-confident-une-technologie-dia-prometteuse-pour-lutter-contre-le-cyberharcelement-1984562" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src="/media/france24.png"
                alt="France 24"
                width={300}
                height={120}
                className="mx-auto mb-6 w-auto h-20"
              />
              <p className="text-gray-600 italic mb-4">
                "Une technologie d'IA prometteuse pour lutter contre le cyberharcèlement"
              </p>
              <p className="text-blue-600 font-semibold">- Les Echos, Novembre 2023</p>
              <p className="text-sm text-gray-500 mt-4 hover:text-blue-600 transition-colors">Lire l'article →</p>
            </a>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 px-4 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
            Rejoignez l'Aventure
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Vous souhaitez contribuer à rendre Internet plus sûr ? Nous sommes toujours à la recherche de talents passionnés.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform">
            Voir nos offres d'emploi
          </button>
        </div>
      </section>
    </main>
  );
} 