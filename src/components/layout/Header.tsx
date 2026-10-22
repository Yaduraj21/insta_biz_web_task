'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PawIcon } from '@/components/ui/PawIcon';
import { ScallopHem } from '@/components/ui/ScallopHem';
import { MobileMenu } from './MobileMenu';
import { getWhatsAppUrl } from '@/lib/whatsapp';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Puppies', href: '/puppies' },
  { label: 'Happy families', href: '/happy-families' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Visit & contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-milk/95 backdrop-blur-md shadow-sm'
            : 'bg-milk'
        }`}
        style={{ height: 'var(--header-h)' }}
      >
        <div className="max-w-[110rem] mx-auto h-full gutter flex items-center justify-between">
          {/* Logo & Brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-2 focus-visible:outline-toffee rounded-lg"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-honey border border-cocoa/20 flex items-center justify-center text-xl shadow-xs group-hover:scale-105 transition-transform">
              🐶
            </div>
            <div className="flex flex-col">
              <span className="font-plush font-extrabold text-xl sm:text-2xl text-cocoa tracking-tight leading-none">
                TeddyPups
              </span>
              <span className="font-scrawl text-xs text-toffee font-semibold leading-tight">
                U.A.E. • Dubai
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-full text-sm font-semibold transition-all duration-150 flex items-center gap-1.5 group relative ${
                    isActive
                      ? 'text-toffee bg-honey/40'
                      : 'text-cocoa hover:text-toffee hover:bg-honey/20'
                  }`}
                >
                  <PawIcon
                    className={`w-3.5 h-3.5 transition-opacity duration-150 ${
                      isActive ? 'opacity-100 text-toffee' : 'opacity-0 group-hover:opacity-100 text-toffee/70'
                    }`}
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppUrl("Hi TeddyPups, I'd like to ask about available puppies.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 py-2 px-4 rounded-full bg-cocoa text-milk text-sm font-bold shadow-xs hover:bg-cocoa-soft hover:shadow-md transition-all active:scale-95"
            >
              <span className="text-emerald-400">●</span>
              <span>WhatsApp us</span>
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="lg:hidden w-10 h-10 rounded-full bg-honey/80 border border-cocoa/20 flex items-center justify-center text-cocoa hover:bg-honey transition-colors active:scale-95"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Header bottom scallop wave */}
        <div className="absolute top-full inset-x-0 -mt-px pointer-events-none">
          <ScallopHem fill="#fffdf8" className="w-full h-2.5 opacity-90" />
        </div>
      </header>

      {/* Mobile Menu Dialog */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
