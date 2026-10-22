import React from 'react';
import Link from 'next/link';
import { PuppyCard } from '@/components/ui/PuppyCard';
import { PawIcon } from '@/components/ui/PawIcon';
import { puppies } from '@/data/puppies';

export function MeetThePupsSection() {
  const featured = puppies.slice(0, 6);

  return (
    <section className="py-16 sm:py-24 bg-milk">
      <div className="max-w-[110rem] mx-auto gutter">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-toffee mb-2">
              <PawIcon className="w-4 h-4" />
              <span className="font-scrawl text-base font-bold text-toffee-ink">
                from Teddy&apos;s sketchbook
              </span>
            </div>
            <h2 className="font-plush font-extrabold text-3xl sm:text-5xl text-cocoa tracking-tight">
              Available in Dubai Today
            </h2>
            <p className="mt-2 text-cocoa/75 text-sm sm:text-base max-w-xl">
              Every puppy is vet-checked, dewormed, microchipped, and waiting to cuddle you at our Downtown showroom.
            </p>
          </div>

          <Link
            href="/puppies"
            className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-honey hover:bg-honey-deep border border-cocoa/20 text-cocoa font-bold text-sm transition-all shadow-2xs hover:shadow-md self-start sm:self-auto shrink-0"
          >
            <span>View All 15 Puppies</span>
            <span>→</span>
          </Link>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((puppy, idx) => (
            <PuppyCard key={puppy.slug} puppy={puppy} priority={idx < 2} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <Link
            href="/puppies"
            className="inline-flex items-center gap-2 py-4 px-8 rounded-full bg-cocoa text-milk font-bold text-base hover:bg-cocoa-soft shadow-md hover:shadow-xl transition-all"
          >
            <span>Browse All Breeds &amp; Filters</span>
            <span className="text-honey">🐾</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
