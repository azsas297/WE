'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [userType, setUserType] = useState<'professional' | 'individual' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [activeTab, setActiveTab] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { userType, ...formData });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/e-confident',
      icon: '/linkedin.svg',
      color: 'bg-[#0077B5]'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/e_confident',
      icon: '/twitter.svg',
      color: 'bg-[#1DA1F2]'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/e_confident',
      icon: '/instagram.svg',
      color: 'bg-gradient-to-tr from-[#FF7A00] to-[#D300C5]'
    }
  ];

  const faqItems = [
    {
      question: "Comment fonctionne votre service de protection ?",
      answer: "Notre service utilise des technologies avancées pour détecter et prévenir le cyberharcèlement en temps réel, avec une surveillance 24/7 et des alertes instantanées."
    },
    {
      question: "Quels sont vos tarifs ?",
      answer: "Nos tarifs varient selon vos besoins. Les particuliers bénéficient de forfaits à partir de 9,99€/mois, et nous proposons des solutions personnalisées pour les professionnels."
    },
    {
      question: "Combien de temps dure l'engagement ?",
      answer: "Nous proposons des engagements flexibles : mensuel, trimestriel ou annuel. L'abonnement annuel bénéficie de 2 mois gratuits."
    },
    {
      question: "Comment puis-je tester votre solution ?",
      answer: "Nous offrons une période d'essai gratuite de 14 jours pour tous nos nouveaux utilisateurs, sans engagement."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      
      <section className="relative py-20 px-4 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 mb-6 animate-gradient">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans la protection contre le cyberharcèlement
            </p>

            {/* Type de contact selector */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-12 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Je suis...</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <button
                  onClick={() => setUserType('individual')}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                    userType === 'individual'
                      ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-white shadow-lg scale-[1.02]'
                      : 'border-gray-200 hover:border-blue-200'
                  }`}
                >
                  <h3 className="text-xl font-medium mb-2 text-gray-900">Un particulier</h3>
                  <p className="text-gray-600">Protection individuelle et familiale</p>
                </button>
                <button
                  onClick={() => setUserType('professional')}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                    userType === 'professional'
                      ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-white shadow-lg scale-[1.02]'
                      : 'border-gray-200 hover:border-purple-200'
                  }`}
                >
                  <h3 className="text-xl font-medium mb-2 text-gray-900">Un professionnel</h3>
                  <p className="text-gray-600">Solutions pour entreprises et organisations</p>
                </button>
              </div>
            </div>

            {/* Formulaire de contact */}
            {userType && (
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-12 border border-gray-100 transform transition-all duration-500 animate-fadeIn">
                <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                  {userType === 'professional' ? 'Contact professionnel' : 'Contact particulier'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="group relative">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors">
                        Nom complet
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all hover:border-blue-300 bg-white/50 backdrop-blur-sm"
                          required
                          placeholder="Votre nom"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/10 group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                    <div className="group relative">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors">
                        Email
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all hover:border-blue-300 bg-white/50 backdrop-blur-sm"
                          required
                          placeholder="votre@email.com"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/10 group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>

                  {userType === 'professional' && (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="group relative">
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors">
                          Entreprise
                          <span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all hover:border-blue-300 bg-white/50 backdrop-blur-sm"
                            required
                            placeholder="Nom de votre entreprise"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/10 group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </div>
                      <div className="group relative">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors">
                          Téléphone
                          <span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all hover:border-blue-300 bg-white/50 backdrop-blur-sm"
                            required
                            placeholder="+33 6 12 34 56 78"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/10 group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="group relative">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors">
                      Sujet
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all hover:border-blue-300 bg-white/50 backdrop-blur-sm appearance-none"
                        required
                      >
                        <option value="">Sélectionnez un sujet</option>
                        {userType === 'professional' ? (
                          <>
                            <option value="demo">Demande de démonstration</option>
                            <option value="quote">Demande de devis</option>
                            <option value="partnership">Partenariat</option>
                          </>
                        ) : (
                          <>
                            <option value="subscription">Abonnement</option>
                            <option value="support">Support technique</option>
                            <option value="question">Question générale</option>
                          </>
                        )}
                      </select>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/10 group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-blue-600 transition-colors">
                      Message
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none hover:border-blue-300 bg-white/50 backdrop-blur-sm"
                        required
                        placeholder="Votre message..."
                      ></textarea>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-blue-500/10 group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className={`w-full px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 text-white transform hover:scale-[1.02] relative overflow-hidden group ${
                        userType === 'professional'
                          ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-700 hover:via-indigo-700 hover:to-purple-700'
                          : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700'
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Envoyer le message
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* FAQ Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-12 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Questions fréquentes</h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition-colors"
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors"
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <span className="font-medium text-gray-900">{item.question}</span>
                      <svg
                        className={`w-5 h-5 transform transition-transform duration-300 ${
                          expandedFaq === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 py-4 bg-gradient-to-br from-gray-50 to-white">
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} rounded-full p-6 text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center`}
                >
                  <Image src={social.icon} alt={social.name} width={32} height={32} className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 