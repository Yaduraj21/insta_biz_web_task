import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PawIcon, StarIcon } from '@/components/ui/PawIcon';
import { familyPhotos } from '@/data/families';

export function HappyFamiliesSection() {
  const previewFamilies = familyPhotos.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-milk">
      <div className="max-w-[110rem] mx-auto gutter">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-toffee mb-2">
              <PawIcon className="w-4 h-4" />
              <span className="font-scrawl text-base font-bold text-toffee-ink">
                64 moments &amp; counting
              </span>
            </div>
            <h2 className="font-plush font-extrabold text-3xl sm:text-5xl text-cocoa tracking-tight">
              Happy Families Across Dubai &amp; GCC
            </h2>
            <p className="mt-2 text-cocoa/75 text-sm sm:text-base max-w-xl">
              From Downtown Dubai penthouses to Emirates Hills villas, see real moments with our teddy puppies in their forever homes.
            </p>
          </div>

          <Link
            href="/happy-families"
            className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-honey hover:bg-honey-deep border border-cocoa/20 text-cocoa font-bold text-sm transition-all shadow-2xs self-start sm:self-auto shrink-0"
          >
            <span>View All Stories</span>
            <span>→</span>
          </Link>
        </div>

        {/* Featured Quote Highlight */}
        <div className="mb-12 bg-white rounded-3xl p-8 sm:p-10 border-2 border-cocoa/15 shadow-sm max-w-4xl mx-auto text-center relative">
          <div className="flex justify-center items-center gap-1 text-amber-500 mb-3">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-5 h-5" />
            ))}
          </div>
          <p className="font-plush text-lg sm:text-2xl text-cocoa font-medium italic leading-relaxed">
            &ldquo;TeddyPups made finding our little Milo the most wonderful, stress-free experience. He came healthy, joyful, and completely settled in on day one.&rdquo;
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm font-bold text-toffee">
            <span>Sarah M. &amp; Tariq</span>
            <span className="text-cocoa/40">•</span>
            <span className="text-cocoa/70 font-normal">Downtown Dubai (Parents of Milo the Maltipoo)</span>
          </div>
        </div>

        {/* Polaroid Style Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewFamilies.map((fam, idx) => (
            <div
              key={fam.id}
              className={`bg-white p-4 pb-6 rounded-2xl border-2 border-cocoa/15 shadow-md hover:shadow-xl transition-all duration-300 ${
                idx % 2 === 0 ? '-rotate-1 hover:rotate-0' : 'rotate-1 hover:rotate-0'
              }`}
            >
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-honey/20 mb-3">
                <Image
                  src={fam.src}
                  alt={`${fam.ownerName} with ${fam.puppyName}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="font-plush font-bold text-base text-cocoa">
                {fam.puppyName} &amp; {fam.ownerName}
              </h3>
              <p className="text-xs text-toffee font-medium mt-0.5">
                {fam.breed} • {fam.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
