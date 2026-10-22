import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PawIcon, StarIcon } from '@/components/ui/PawIcon';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { puppies } from '@/data/puppies';

export function HeroSection() {
  const featuredPuppies = puppies.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff1d8]/40 via-milk to-milk pt-8 pb-16 sm:pb-24 border-b border-cocoa/10">
      {/* Background Decorative Blobs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-honey/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[110rem] mx-auto gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading and CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full bg-honey border border-cocoa/15 text-toffee-ink font-bold text-xs sm:text-sm shadow-2xs">
              <PawIcon className="w-4 h-4 text-toffee" />
              <span className="font-scrawl text-sm sm:text-base">Dubai&apos;s Boutique Puppy Showroom</span>
            </div>

            {/* Giant Display Headline */}
            <h1 className="font-plush font-extrabold text-giant text-cocoa tracking-tight leading-[1.04]">
              Teacup &amp; Teddy-Bear Puppies, Raised for Loving Homes.
            </h1>

            {/* Subtext */}
            <p className="text-lede text-cocoa/80 max-w-2xl font-normal">
              Meet our sweet, verified healthy teacup Maltipoos, Pomeranians, Toy Poodles, and Bichons in our Downtown Dubai showroom. Take your puppy home the same day or reserve rare imported lines with full health guarantees.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <Link
                href="/puppies"
                className="w-full sm:w-auto py-3.5 px-8 rounded-full bg-cocoa text-milk font-extrabold text-base text-center shadow-md hover:bg-cocoa-soft hover:shadow-xl hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <span>Meet Available Puppies</span>
                <span className="text-honey">🐾</span>
              </Link>
              <a
                href={getWhatsAppUrl("Hi TeddyPups, I'd like to book a visit to your Downtown Dubai showroom.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3.5 px-7 rounded-full bg-white hover:bg-honey/40 border-2 border-cocoa/20 text-cocoa font-bold text-base text-center shadow-2xs hover:border-cocoa/40 active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <span className="text-emerald-600">💬</span>
                <span>WhatsApp Showroom</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm text-cocoa/80 font-semibold border-t border-cocoa/10 w-full">
              <div className="flex items-center gap-2">
                <span className="text-amber-600">🛡️</span>
                <span>10-Year Health Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600">🩺</span>
                <span>Vet Checked &amp; Vaccinated</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600">📍</span>
                <span>Downtown Dubai Showroom</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Lineup Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Feature Photo Card */}
              <div className="relative bg-white rounded-3xl p-3.5 border-2 border-cocoa/15 shadow-xl rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-honey/30">
                  <Image
                    src="https://puppy.instabizweb.com/media/maltipoo-1.jpg"
                    alt="Maltipoo Max available at TeddyPups Dubai"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-cocoa text-xs font-bold py-1 px-3 rounded-full shadow-xs">
                    ⭐ Max • Maltipoo Boy
                  </div>
                  <div className="absolute bottom-3 right-3 bg-cocoa text-honey text-xs font-bold py-1 px-3 rounded-full shadow-xs">
                    Ready for Home Today
                  </div>
                </div>

                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-plush font-extrabold text-xl text-cocoa">
                      Max, 2.5 months
                    </h3>
                    <p className="text-xs text-cocoa/70">Downtown Dubai Showroom</p>
                  </div>
                  <Link
                    href="/puppies/maltipoo-max-male"
                    className="py-1.5 px-4 rounded-full bg-honey text-toffee-ink font-bold text-xs hover:bg-honey-deep transition-colors"
                  >
                    View Max →
                  </Link>
                </div>
              </div>

              {/* Floating review polaroid */}
              <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-2xl border-2 border-cocoa/15 shadow-lg -rotate-3 hidden sm:block max-w-[210px]">
                <div className="flex items-center gap-1 text-amber-500 mb-1">
                  <StarIcon className="w-3.5 h-3.5" />
                  <StarIcon className="w-3.5 h-3.5" />
                  <StarIcon className="w-3.5 h-3.5" />
                  <StarIcon className="w-3.5 h-3.5" />
                  <StarIcon className="w-3.5 h-3.5" />
                </div>
                <p className="text-[11px] text-cocoa/80 italic leading-snug">
                  &ldquo;The best puppy experience in Dubai. Our little Maltipoo is pure joy.&rdquo;
                </p>
                <p className="text-[10px] font-bold text-cocoa/60 mt-1">— Sarah M., Downtown</p>
              </div>

              {/* Floating UAE Flag / Location Badge */}
              <div className="absolute -top-4 -right-4 bg-honey-deep/90 text-cocoa py-1.5 px-3.5 rounded-full border border-cocoa/20 font-bold text-xs shadow-md flex items-center gap-1.5">
                <span>🇦🇪</span>
                <span>Downtown Dubai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
