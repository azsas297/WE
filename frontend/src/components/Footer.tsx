'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{background: 'radial-gradient(circle at 70% 30%, #7c3aed 0%, transparent 70%)'}}></div>
      <div className="container mx-auto px-4 py-14 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
          {/* Logo et Description */}
          <div className="flex-1 min-w-[220px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image src="/logo.png" alt="Logo E-confident" fill className="object-contain" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">E-confident</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-xs">
              Votre partenaire de confiance dans la lutte contre le cyberharcèlement. Nous utilisons l'intelligence artificielle pour protéger votre espace numérique.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://linkedin.com/company/e-confident" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <Image src="/linkedin.svg" alt="LinkedIn" width={28} height={28} />
              </a>
              <a href="https://twitter.com/e_confident" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <Image src="/twitter.svg" alt="Twitter" width={28} height={28} />
              </a>
              <a href="https://instagram.com/e_confident" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <Image src="/instagram.svg" alt="Instagram" width={28} height={28} />
              </a>
            </div>
          </div>

          {/* Liens Rapides */}
          <div className="flex-1 min-w-[180px]">
            <h3 className="text-lg font-semibold mb-4 text-white/90 tracking-wide">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">À propos</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg font-semibold mb-4 text-white/90 tracking-wide">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm2 0a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
                contact@e-confident.com
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 007.48 19h9.04a2 2 0 001.83-1.3L17 13M7 13V6h10v7" /></svg>
                +33 1 23 45 67 89
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M17 8a4 4 0 10-8 0 4 4 0 008 0z" /></svg>
                Paris, France
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} E-confident. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 