import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { familyPhotos } from '@/data/families';
import { FamilyLightbox } from '@/components/sections/families/FamilyLightbox';
import { PawIcon, StarIcon } from '@/components/ui/PawIcon';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Happy Families — Moments & Stories | TeddyPups Dubai',
  description:
    'Read real reviews and see photos from families who adopted teacup Maltipoos, Pomeranians, and Poodles from TeddyPups in Dubai and the GCC.',
  alternates: {
    canonical: 'https://puppy.instabizweb.com/happy-families',
  },
};

export default function HappyFamiliesPage() {
  return (
    <div className="bg-milk min-h-screen pb-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#fff1d8]/50 to-milk pt-8 pb-12 border-b border-cocoa/10">
        <div className="max-w-[110rem] mx-auto gutter">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-toffee mb-2">
              <PawIcon className="w-4 h-4" />
              <span className="font-scrawl text-base font-bold text-toffee-ink">
                64 moments &amp; counting
              </span>
            </div>
            <h1 className="font-plush font-extrabold text-4xl sm:text-6xl text-cocoa tracking-normal leading-tight">
              Happy Families
            </h1>
            <p className="mt-3 text-cocoa/80 text-base sm:text-lg leading-relaxed">
              Nothing warms our hearts more than seeing our puppies thrive in their new homes. Click any polaroid below to read their journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Review Banner */}
      <div className="max-w-4xl mx-auto gutter pt-10 pb-6">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-cocoa/15 shadow-sm text-center">
          <div className="flex justify-center items-center gap-1 text-amber-500 mb-3">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-5 h-5" />
            ))}
          </div>
          <p className="font-plush text-lg sm:text-2xl text-cocoa font-medium italic leading-relaxed">
            &ldquo;TeddyPups made finding our little Milo the most wonderful, stress-free experience. He came healthy, joyful, and completely settled in on day one.&rdquo;
          </p>
          <div className="mt-4 text-sm font-bold text-toffee">
            Sarah M. &amp; Tariq — Downtown Dubai (Parents of Milo)
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-[110rem] mx-auto gutter pt-8">
        <FamilyLightbox photos={familyPhotos} />

        {/* Bottom Banner */}
        <div className="mt-16 text-center bg-honey/30 rounded-3xl p-8 sm:p-12 border-2 border-cocoa/15 max-w-3xl mx-auto">
          <h2 className="font-plush font-bold text-2xl sm:text-3xl text-cocoa">
            Ready to Create Your Own Puppy Story?
          </h2>
          <p className="mt-2 text-sm text-cocoa/75 max-w-md mx-auto">
            Our team is here to guide you every step of the way, from first cuddle to adult training.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/puppies"
              className="py-3 px-7 rounded-full bg-cocoa text-milk font-bold text-sm hover:bg-cocoa-soft shadow-md"
            >
              Browse Available Puppies →
            </Link>
            <a
              href={getWhatsAppUrl("Hi TeddyPups, I saw your happy families page and would like to find my puppy!")}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-7 rounded-full bg-white hover:bg-honey border border-cocoa/20 text-cocoa font-bold text-sm"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
