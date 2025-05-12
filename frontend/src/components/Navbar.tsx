'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'À propos' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        bg-white/90
        ${isScrolled ? 'shadow-md' : 'shadow-none'}
        border-b border-gray-100
        backdrop-blur-sm
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo et nom */}
          <Link href="/" className="flex items-center gap-2 group select-none">
            <div className="relative w-8 h-8">
              <Image 
                src="/logo.png" 
                alt="Logo E-confident" 
                fill 
                className="object-contain"
              />
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent tracking-tight">E-confident</span>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-2 lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-2 py-1 text-base font-medium transition-colors duration-200
                  ${pathname === link.href ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent' : 'text-gray-900'}
                  hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-indigo-500 hover:bg-clip-text hover:text-transparent
                  after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:via-purple-500 after:to-indigo-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100
                  ${pathname === link.href ? 'after:scale-x-100' : ''}
                `}
                style={{fontFamily: 'inherit'}}
              >
                {link.label}
              </Link>
            ))}
            {/* Bouton d'action dégradé */}
            <Link
              href="/contact"
              className="ml-4 px-4 py-2 rounded-full font-medium text-white bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 transition-colors duration-200 shadow-sm"
              style={{fontFamily: 'inherit'}}
            >
              Devenir client
            </Link>
          </div>

          {/* Bouton Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Menu"
          >
            <div className="w-6 h-5 relative">
              <span className={`absolute w-6 h-0.5 bg-gray-800 transition-all duration-200 ${
                isMenuOpen ? 'rotate-45 top-2' : 'top-0'
              }`} />
              <span className={`absolute w-6 h-0.5 bg-gray-800 top-2 transition-all duration-200 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`absolute w-6 h-0.5 bg-gray-800 transition-all duration-200 ${
                isMenuOpen ? '-rotate-45 top-2' : 'top-4'
              }`} />
            </div>
          </button>
        </div>

        {/* Menu Mobile */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-80 opacity-100 mt-2' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white rounded-xl shadow-md p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-2 py-2 rounded-lg text-base font-medium transition-colors duration-200
                  ${pathname === link.href ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent' : 'text-gray-900'}
                  hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-indigo-500 hover:bg-clip-text hover:text-transparent
                  ${pathname === link.href ? 'bg-blue-50' : 'hover:bg-gray-100'}
                `}
                style={{fontFamily: 'inherit'}}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-2 px-4 py-2 rounded-full font-medium text-white bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 transition-colors duration-200 text-center shadow-sm"
              style={{fontFamily: 'inherit'}}
            >
              Devenir client
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 