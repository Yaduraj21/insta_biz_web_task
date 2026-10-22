import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { goneHomePuppies } from '@/data/gone-home';
import { GoneHomeCard } from '@/components/ui/GoneHomeCard';
import { PawIcon } from '@/components/ui/PawIcon';

export const metadata: Metadata = {
  title: 'Gone Home — Hall of Fame | TeddyPups Dubai',
  description:
    'Browse our hall of fame of over 30 teacup puppies now happily settled with loving families across Dubai, Abu Dhabi, Saudi Arabia, and Qatar.',
  alternates: {
    canonical: 'https://puppy.instabizweb.com/gone-home',
  },
};

export default function GoneHomePage() {
  return (
    <div className="bg-milk min-h-screen pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#fff1d8]/50 to-milk pt-8 pb-12 border-b border-cocoa/10">
        <div className="max-w-[110rem] mx-auto gutter">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-toffee mb-2">
              <PawIcon className="w-4 h-4" />
              <span className="font-scrawl text-base font-bold text-toffee-ink">
                forever loved &amp; settled
              </span>
            </div>
            <h1 className="font-plush font-extrabold text-4xl sm:text-6xl text-cocoa tracking-tight leading-tight">
              Gone Home
            </h1>
            <p className="mt-3 text-cocoa/80 text-base sm:text-lg leading-relaxed">
              Every ticket below represents a puppy who found their forever lap in Dubai and across the GCC. Browse our alumni or find an available puppy today.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of 30 Gone-Home Tickets */}
      <div className="max-w-[110rem] mx-auto gutter pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-7">
          {goneHomePuppies.map((pup) => (
            <GoneHomeCard key={pup.slug} puppy={pup} />
          ))}
        </div>

        {/* Bottom CTA to View Available */}
        <div className="mt-16 text-center bg-honey/30 rounded-3xl p-8 sm:p-12 border-2 border-cocoa/15 max-w-3xl mx-auto">
          <h2 className="font-plush font-bold text-2xl sm:text-3xl text-cocoa">
            Looking for Your Own Furry Family Member?
          </h2>
          <p className="mt-2 text-sm text-cocoa/75 max-w-md mx-auto">
            We currently have 15 precious puppies available for adoption right now in our Downtown Dubai showroom.
          </p>
          <div className="mt-6">
            <Link
              href="/puppies"
              className="py-3.5 px-8 rounded-full bg-cocoa text-milk font-bold text-sm hover:bg-cocoa-soft shadow-md transition-all inline-block"
            >
              Browse Available Puppies Today 🐾
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
