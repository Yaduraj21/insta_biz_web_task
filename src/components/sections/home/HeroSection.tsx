'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { puppies } from '@/data/puppies';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const breedCategories = [
  { name: 'Teacup Poodle', image: '/images/categories/cat-poodle.jpg', href: '/puppies?breed=Poodle' },
  { name: 'Maltipoo', image: '/images/categories/cat-maltipoo.jpg', href: '/puppies?breed=Maltipoo' },
  { name: 'Pomeranian', image: '/images/categories/cat-pomeranian.jpg', href: '/puppies?breed=Pomeranian' },
  { name: 'French Bulldog', image: '/images/categories/cat-frenchie.jpg', href: '/puppies' },
  { name: 'Bichon Frise', image: '/images/categories/cat-bichon.jpg', href: '/puppies?breed=Bichon+Frise' },
  { name: 'Shih Tzu', image: '/images/categories/cat-shihtzu.jpg', href: '/puppies' },
  { name: 'Cavapoo', image: '/images/categories/cat-cavapoo.jpg', href: '/puppies' },
  { name: 'View All', image: '/images/categories/cat-all.jpg', href: '/puppies' },
];

export function HeroSection() {
  const marqueeItems = [...breedCategories, ...breedCategories];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff7eb] via-milk to-milk pt-6 pb-0">
      {/* Subtle background decorative blob */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-honey/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main content - centered */}
      <div className="max-w-3xl mx-auto gutter text-center pt-8 pb-14">
        {/* Script tagline */}
        <AnimatedSection variant="fade" delay={0}>
          <p className="font-scrawl text-xl sm:text-2xl text-toffee font-bold mb-3 tracking-wide">
            every puppy is family
          </p>
        </AnimatedSection>

        {/* Giant Headline */}
        <AnimatedSection variant="fade-up" delay={100}>
          <h1 className="font-plush font-extrabold text-giant text-cocoa leading-[1.08] mb-6">
            Premium teacup puppies in Dubai
          </h1>
        </AnimatedSection>

        {/* Subtext */}
        <AnimatedSection variant="fade-up" delay={200}>
          <p className="text-lede text-cocoa/80 max-w-xl mx-auto mb-8 font-medium leading-relaxed">
            The purest lines, raised for temperament and health. Meet your new best friend in our Dubai showroom, or order a rare miniature breed with worldwide VIP delivery.
          </p>
        </AnimatedSection>

        {/* CTA Buttons */}
        <AnimatedSection variant="fade-up" delay={300}>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/puppies"
              className="py-3.5 px-8 rounded-full bg-toffee text-milk font-bold text-base text-center shadow-md hover:bg-cocoa hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
            >
              <span>View available puppies</span>
            </Link>
            <a
              href={getWhatsAppUrl("Hi TeddyPups, I'd like to enquire about your puppies.")}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-7 rounded-full bg-white hover:bg-honey/40 border-2 border-cocoa/20 text-cocoa font-bold text-base text-center shadow-2xs hover:border-cocoa/40 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* ===== Bottom Scallop Carousel Section ===== */}
      <div className="relative">
        {/* Scallop border */}
        <div className="relative z-10">
          <svg viewBox="0 0 1440 30" preserveAspectRatio="none" className="w-full h-6 sm:h-8 block">
            <defs>
              <clipPath id="scallop-clip">
                {Array.from({ length: 36 }).map((_, i) => (
                  <circle key={i} cx={20 + i * 40} cy="30" r="20" />
                ))}
              </clipPath>
            </defs>
            <rect width="1440" height="30" fill="#fffdf8" clipPath="url(#scallop-clip)" />
          </svg>
        </div>

        {/* Carousel container with warm background */}
        <div className="bg-[#f5e6c8] pt-4 pb-8 relative overflow-hidden -mt-1">
          {/* Marquee carousel */}
          <div className="relative overflow-hidden hero-carousel">
            <div className="flex items-center gap-6 sm:gap-8 animate-marquee hover:[animation-play-state:paused] w-max py-2">
              {marqueeItems.map((cat, idx) => (
                <Link
                  key={`${cat.name}-${idx}`}
                  href={cat.href}
                  className="group flex flex-col items-center gap-2 shrink-0 transition-transform hover:scale-105 active:scale-95"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white shadow-md bg-honey/40 transition-shadow group-hover:shadow-xl">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      width={110}
                      height={110}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-cocoa tracking-normal group-hover:text-toffee transition-colors whitespace-nowrap">
                    {cat.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
