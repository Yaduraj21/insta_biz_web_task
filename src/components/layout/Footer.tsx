'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SparkleIcon } from '@/components/ui/PawIcon';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function Footer() {
  return (
    <footer className="relative bg-[#1a2744] text-[#e8dfd0] pt-16 pb-10 overflow-hidden">
      {/* Night Sky Stars & Sparkles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Twinkle stars */}
        <SparkleIcon className="absolute top-6 left-[8%] w-2 h-2 text-honey/60 animate-twinkle" />
        <SparkleIcon className="absolute top-12 left-[22%] w-1.5 h-1.5 text-honey/40 animate-twinkle" style={{ animationDelay: '0.5s' }} />
        <SparkleIcon className="absolute top-20 left-[45%] w-2.5 h-2.5 text-honey/50 animate-twinkle" style={{ animationDelay: '1s' }} />
        <SparkleIcon className="absolute top-8 right-[35%] w-2 h-2 text-honey/40 animate-twinkle" style={{ animationDelay: '1.5s' }} />
        <SparkleIcon className="absolute top-28 right-[15%] w-1.5 h-1.5 text-honey/50 animate-twinkle" style={{ animationDelay: '0.8s' }} />
        <SparkleIcon className="absolute top-16 left-[60%] w-1 h-1 text-honey/30 animate-twinkle" style={{ animationDelay: '2s' }} />
        <SparkleIcon className="absolute top-40 left-[15%] w-1.5 h-1.5 text-honey/30 animate-twinkle" style={{ animationDelay: '1.2s' }} />
        <SparkleIcon className="absolute top-32 right-[50%] w-2 h-2 text-honey/20 animate-twinkle" style={{ animationDelay: '0.3s' }} />

        {/* Dot stars */}
        <div className="absolute top-10 left-[30%] w-1 h-1 rounded-full bg-honey/40 animate-starBlink" />
        <div className="absolute top-24 left-[55%] w-1.5 h-1.5 rounded-full bg-honey/30 animate-starBlink" style={{ animationDelay: '1s' }} />
        <div className="absolute top-6 right-[25%] w-1 h-1 rounded-full bg-honey/50 animate-starBlink" style={{ animationDelay: '2s' }} />
        <div className="absolute top-36 right-[40%] w-1 h-1 rounded-full bg-honey/25 animate-starBlink" style={{ animationDelay: '0.7s' }} />

        {/* Moon crescent */}
        <div className="absolute top-6 right-[8%] sm:right-[12%] animate-moonGlow">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M42 28c0-10.5-6.5-19.5-15.7-23.2C27.5 4.3 28.7 4 30 4c13.3 0 24 10.7 24 24S43.3 52 30 52c-1.3 0-2.5-.1-3.7-.4C35.5 47.9 42 38.5 42 28z"
              fill="#e8dfd0"
              opacity="0.9"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-[110rem] mx-auto gutter relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand & Vision (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <AnimatedSection variant="fade-up">
              <h2 className="font-plush font-extrabold text-4xl sm:text-5xl tracking-normal text-[#e8dfd0] leading-tight italic">
                Home, at last.
              </h2>
            </AnimatedSection>

            <AnimatedSection variant="fade-up" delay={100}>
              <p className="text-[#c4b9a8] text-base leading-relaxed max-w-md">
                TeddyPups U.A.E. is a Dubai-based brand specializing in miniature puppies, offering premium services and worldwide shipping.
              </p>
            </AnimatedSection>

            {/* Mascot in barrel */}
            <AnimatedSection variant="zoom-in" delay={200}>
              <div className="mt-2 w-28 sm:w-36 animate-gentleBounce">
                <Image
                  src="/mascot/teddy-bath.jpg"
                  alt="TeddyPups mascot in a barrel"
                  width={144}
                  height={144}
                  className="w-full h-auto drop-shadow-lg rounded-2xl"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Explore Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <AnimatedSection variant="fade-up" delay={100}>
              <h3 className="font-scrawl font-bold text-lg text-honey tracking-wide mb-1">
                Explore
              </h3>
            </AnimatedSection>
            <AnimatedSection variant="fade-up" delay={150}>
              <ul className="flex flex-col gap-2.5 text-sm text-[#c4b9a8]">
                {[
                  { href: '/puppies', label: 'Available puppies' },
                  { href: '/gone-home', label: 'Gone home' },
                  { href: '/happy-families', label: 'Happy families' },
                  { href: '/how-it-works', label: 'How it works' },
                  { href: '/how-it-works#delivery', label: 'Delivery & collection' },
                  { href: '/faq', label: 'FAQ' },
                  { href: '/contact', label: 'Visit & contact' },
                ].map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-honey transition-colors duration-200 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          {/* Say hello / Contact (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <AnimatedSection variant="fade-up" delay={150}>
              <h3 className="font-scrawl font-bold text-lg text-honey tracking-wide mb-1">
                Say hello
              </h3>
            </AnimatedSection>
            <AnimatedSection variant="fade-up" delay={200}>
              <div className="flex flex-col gap-3 text-sm text-[#c4b9a8]">
                <a
                  href={getWhatsAppUrl("Hi TeddyPups, reaching out from your website.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-honey transition-colors"
                >
                  WhatsApp +971 54 167 6733
                </a>
                <a
                  href="mailto:teddypupsadmin@gmail.com"
                  className="hover:text-honey transition-colors"
                >
                  teddypupsadmin@gmail.com
                </a>
                <p>Downtown Dubai, United Arab Emirates</p>
              </div>
            </AnimatedSection>

            {/* Social buttons */}
            <AnimatedSection variant="fade-up" delay={250}>
              <div className="flex items-center gap-3 mt-2">
                {['Instagram', 'TikTok', 'Facebook'].map(social => (
                  <a
                    key={social}
                    href="#"
                    className="py-2 px-4 rounded-full border border-[#c4b9a8]/30 text-[#c4b9a8] text-xs font-semibold hover:bg-honey hover:text-cocoa hover:border-honey transition-all duration-200"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8a8070]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-honey/20 border border-honey/30 flex items-center justify-center text-base">
              🐶
            </div>
            <p>© {new Date().getFullYear()} TeddyPups U.A.E.</p>
          </div>
          <p className="font-scrawl text-honey/80 text-sm italic">
            every puppy is family
          </p>
        </div>
      </div>
    </footer>
  );
}
