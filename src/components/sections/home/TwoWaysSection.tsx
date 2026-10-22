import React from 'react';
import Link from 'next/link';
import { PawIcon } from '@/components/ui/PawIcon';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export function TwoWaysSection() {
  return (
    <section className="py-16 sm:py-24 bg-honey/30 border-y border-cocoa/10">
      <div className="max-w-[110rem] mx-auto gutter">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-toffee mb-2">
            <PawIcon className="w-4 h-4" />
            <span className="font-scrawl text-base font-bold text-toffee-ink">
              seamless &amp; stress-free
            </span>
          </div>
          <h2 className="font-plush font-extrabold text-3xl sm:text-5xl text-cocoa tracking-normal">
            Two Ways to Bring Your Puppy Home
          </h2>
          <p className="mt-3 text-cocoa/75 text-sm sm:text-base font-medium">
            Whether you fall in love in our Downtown Dubai showroom today or request a custom rare breed from abroad, we handle everything with care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Local */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-cocoa/20 shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-honey/40 rounded-bl-full pointer-events-none -z-0" />
            <div className="relative z-10">
              <span className="inline-block bg-honey text-toffee-ink text-xs font-extrabold py-1 px-3 rounded-full uppercase tracking-wider mb-4 border border-cocoa/15">
                Immediate Adoption
              </span>
              <h3 className="font-plush font-bold text-2xl sm:text-3xl text-cocoa tracking-normal">
                1. Meet in Downtown Dubai
              </h3>
              <p className="mt-3 text-cocoa/80 text-sm sm:text-base leading-relaxed">
                Visit our cozy private showroom in Downtown Dubai. Spend time holding, playing, and bonding with our available puppies before making your decision.
              </p>
              <ul className="mt-6 flex flex-col gap-2.5 text-xs sm:text-sm text-cocoa/80 font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Same-day take-home with full puppy starter kit</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Full veterinary health certificate &amp; passport in hand</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Doorstep delivery available across Dubai &amp; Abu Dhabi</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-cocoa/10 relative z-10">
              <Link
                href="/puppies?origin=local"
                className="w-full py-3 px-6 rounded-full bg-cocoa text-milk font-bold text-sm text-center block hover:bg-cocoa-soft transition-colors"
              >
                Browse Local Dubai Puppies →
              </Link>
            </div>
          </div>

          {/* Card 2: Imported */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-cocoa/20 shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-honey-deep/30 rounded-bl-full pointer-events-none -z-0" />
            <div className="relative z-10">
              <span className="inline-block bg-cocoa text-honey text-xs font-extrabold py-1 px-3 rounded-full uppercase tracking-wider mb-4 border border-honey/30">
                Order Upon Request
              </span>
              <h3 className="font-plush font-bold text-2xl sm:text-3xl text-cocoa tracking-normal">
                2. Bespoke Rare Import
              </h3>
              <p className="mt-3 text-cocoa/80 text-sm sm:text-base leading-relaxed">
                Looking for a micro Korean teacup poodle or rare European show line? We partner with the world’s most ethical certified breeders to source your dream puppy.
              </p>
              <ul className="mt-6 flex flex-col gap-2.5 text-xs sm:text-sm text-cocoa/80 font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Real photos, high-res videos &amp; live video calls on WhatsApp</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>We handle flight arrangements, customs &amp; vet clearance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Comfortable VIP travel directly to Dubai airport or home</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-6 border-t border-cocoa/10 relative z-10">
              <a
                href={getWhatsAppUrl("Hi TeddyPups, I'm interested in an Order Upon Request imported puppy.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-full bg-honey hover:bg-honey-deep border border-cocoa/20 text-cocoa font-bold text-sm text-center block transition-colors"
              >
                Inquire About Custom Orders →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
