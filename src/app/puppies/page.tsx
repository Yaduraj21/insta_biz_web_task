import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { puppies } from '@/data/puppies';
import { goneHomePuppies } from '@/data/gone-home';
import { PuppiesClient } from '@/components/sections/puppies/PuppiesClient';
import { GoneHomeCard } from '@/components/ui/GoneHomeCard';
import { PawIcon } from '@/components/ui/PawIcon';

export const metadata: Metadata = {
  title: 'Available Puppies in Dubai | Teacup Maltipoo, Pomeranian & Poodle',
  description:
    'Browse 15 available teacup puppies in Dubai. Health certified, vaccinated, microchipped with a 10-year genetic guarantee. Same-day adoption at our Downtown showroom.',
  alternates: {
    canonical: 'https://puppy.instabizweb.com/puppies',
  },
};

export default function PuppiesPage() {
  const goneHomePreview = goneHomePuppies.slice(0, 4);

  return (
    <div className="bg-milk min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#fff1d8]/50 to-milk pt-8 pb-10 border-b border-cocoa/10">
        <div className="max-w-[110rem] mx-auto gutter">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-toffee mb-2">
              <PawIcon className="w-4 h-4" />
              <span className="font-scrawl text-base font-bold text-toffee-ink">
                from Teddy&apos;s sketchbook
              </span>
            </div>
            <h1 className="font-plush font-extrabold text-4xl sm:text-6xl text-cocoa tracking-normal leading-tight">
              Available Puppies
            </h1>
            <p className="mt-3 text-cocoa/80 text-base sm:text-lg leading-relaxed">
              Every puppy is vet-checked, vaccinated, and microchipped before joining your family. Visit our Downtown Dubai showroom to cuddle them in person.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid with Filter Suspense Boundary */}
      <div className="max-w-[110rem] mx-auto gutter">
        <Suspense
          fallback={
            <div className="py-20 text-center font-scrawl text-xl text-cocoa">
              Loading available puppies... 🐾
            </div>
          }
        >
          <PuppiesClient puppies={puppies} />
        </Suspense>
      </div>

      {/* Gone Home Preview Section */}
      <section className="py-16 sm:py-24 bg-honey/20 border-t border-cocoa/10 mt-12">
        <div className="max-w-[110rem] mx-auto gutter">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 text-toffee mb-2">
                <PawIcon className="w-4 h-4" />
                <span className="font-scrawl text-base font-bold text-toffee-ink">
                  forever settled
                </span>
              </div>
              <h2 className="font-plush font-extrabold text-3xl sm:text-4xl text-cocoa tracking-normal">
                Recently Gone Home
              </h2>
              <p className="mt-1 text-sm text-cocoa/75">
                Over 30 cherished puppies now living happily in Dubai, Abu Dhabi, and across the GCC.
              </p>
            </div>

            <Link
              href="/gone-home"
              className="py-2.5 px-6 rounded-full bg-cocoa text-milk font-bold text-sm hover:bg-cocoa-soft transition-colors self-start sm:self-auto"
            >
              View All 30 Tickets →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {goneHomePreview.map((pup) => (
              <GoneHomeCard key={pup.slug} puppy={pup} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
