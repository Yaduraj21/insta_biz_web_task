import React from 'react';
import Link from 'next/link';
import { PawIcon } from '@/components/ui/PawIcon';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export function FinalCTASection() {
  return (
    <section className="py-20 sm:py-28 bg-milk relative overflow-hidden">
      <div className="max-w-5xl mx-auto gutter">
        <div className="bg-gradient-to-br from-honey via-[#fdf4e2] to-honey-deep/40 rounded-3xl p-8 sm:p-14 border-2 border-cocoa/20 shadow-xl text-center relative overflow-hidden">
          {/* Subtle paw background decoration */}
          <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none text-cocoa">
            <PawIcon className="w-64 h-64" />
          </div>

          <div className="inline-flex items-center gap-2 text-toffee-ink mb-3 bg-white/70 py-1 px-4 rounded-full border border-cocoa/15 shadow-2xs">
            <PawIcon className="w-4 h-4 text-toffee" />
            <span className="font-scrawl text-sm sm:text-base font-bold">
              your new family member is waiting
            </span>
          </div>

          <h2 className="font-plush font-extrabold text-3xl sm:text-5xl text-cocoa leading-tight tracking-normal max-w-2xl mx-auto">
            Ready to Fall in Love? Visit Our Downtown Dubai Showroom.
          </h2>

          <p className="mt-4 text-cocoa/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Come cuddle our puppies in a peaceful, private environment. Our puppy concierge is available daily to answer questions and help you choose the right companion.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl("Hi TeddyPups, I'd like to book an appointment to visit your showroom today!")}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 rounded-full bg-cocoa text-milk font-extrabold text-base hover:bg-cocoa-soft shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5"
            >
              <span className="text-emerald-400">●</span>
              <span>Book a Showroom Visit on WhatsApp</span>
            </a>
            <Link
              href="/puppies"
              className="py-4 px-8 rounded-full bg-white hover:bg-white/90 border-2 border-cocoa/20 text-cocoa font-bold text-base shadow-xs active:scale-95 transition-all"
            >
              Explore Available Puppies →
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-cocoa/15 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-cocoa/70 font-medium">
            <span>📍 Downtown Dubai, UAE</span>
            <span>•</span>
            <span>⏰ Open Daily 10:00 AM – 10:00 PM</span>
            <span>•</span>
            <span>🚗 Valet &amp; Reserved Guest Parking</span>
          </div>
        </div>
      </div>
    </section>
  );
}
