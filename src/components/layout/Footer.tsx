import React from 'react';
import Link from 'next/link';
import { PawIcon, StarIcon, SparkleIcon } from '@/components/ui/PawIcon';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export function Footer() {
  return (
    <footer className="relative bg-cocoa text-milk pt-16 pb-12 overflow-hidden border-t-4 border-honey/40">
      {/* Night Sky Decorative Stars */}
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <StarIcon className="absolute top-8 left-[10%] w-4 h-4 text-honey animate-pulse" />
        <SparkleIcon className="absolute top-16 left-[25%] w-3 h-3 text-honey-deep" />
        <StarIcon className="absolute top-12 right-[15%] w-5 h-5 text-honey animate-pulse" />
        <SparkleIcon className="absolute top-24 right-[30%] w-3 h-3 text-honey" />
        <div className="absolute top-6 right-[8%] w-8 h-8 rounded-full border-2 border-honey/60 border-t-transparent -rotate-45" />
      </div>

      <div className="max-w-[110rem] mx-auto gutter relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand & Vision (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🐾</span>
              <h2 className="font-plush font-extrabold text-3xl sm:text-4xl tracking-tight text-honey">
                Home, at last.
              </h2>
            </div>
            <p className="text-milk/80 text-base leading-relaxed max-w-md">
              TeddyPups U.A.E. is Dubai’s sanctuary for miniature, teacup, and teddy-bear companions. 
              Every puppy is vet-checked, dewormed, fully microchipped, and raised with warmth before meeting you.
            </p>
            <div className="mt-2 flex items-center gap-2 text-honey font-scrawl text-sm">
              <PawIcon className="w-4 h-4 text-honey" />
              <span>&ldquo;every puppy is family&rdquo;</span>
            </div>
          </div>

          {/* Explore Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-plush font-bold text-lg text-honey tracking-wide">
              Explore
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-milk/80">
              <li>
                <Link href="/puppies" className="hover:text-honey transition-colors inline-flex items-center gap-1.5">
                  <span className="text-honey/60 text-xs">▸</span> Available puppies
                </Link>
              </li>
              <li>
                <Link href="/gone-home" className="hover:text-honey transition-colors inline-flex items-center gap-1.5">
                  <span className="text-honey/60 text-xs">▸</span> Gone home (Hall of fame)
                </Link>
              </li>
              <li>
                <Link href="/happy-families" className="hover:text-honey transition-colors inline-flex items-center gap-1.5">
                  <span className="text-honey/60 text-xs">▸</span> Happy families
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-honey transition-colors inline-flex items-center gap-1.5">
                  <span className="text-honey/60 text-xs">▸</span> How it works
                </Link>
              </li>
              <li>
                <Link href="/how-it-works#delivery" className="hover:text-honey transition-colors inline-flex items-center gap-1.5">
                  <span className="text-honey/60 text-xs">▸</span> Delivery & collection
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-honey transition-colors inline-flex items-center gap-1.5">
                  <span className="text-honey/60 text-xs">▸</span> FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-honey transition-colors inline-flex items-center gap-1.5">
                  <span className="text-honey/60 text-xs">▸</span> Visit & contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Say hello / Contact (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="font-plush font-bold text-lg text-honey tracking-wide">
              Say hello
            </h3>
            <div className="flex flex-col gap-3 text-sm text-milk/80">
              <a
                href={getWhatsAppUrl("Hi TeddyPups, I'm reaching out from your website footer.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-honey hover:text-cocoa transition-all duration-200 font-semibold w-fit"
              >
                <span className="text-emerald-400">💬</span>
                <span>Chat on WhatsApp</span>
              </a>

              <div className="flex flex-col gap-1 pt-1">
                <span className="text-xs uppercase tracking-wider text-milk/50 font-semibold">Email</span>
                <a
                  href="mailto:teddypupsadmin@gmail.com"
                  className="hover:text-honey transition-colors break-all text-sm font-medium"
                >
                  teddypupsadmin@gmail.com
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-wider text-milk/50 font-semibold">Downtown Showroom</span>
                <p className="text-sm text-milk/75">
                  Downtown Dubai, Boulevard Plaza, Dubai, United Arab Emirates
                </p>
                <span className="text-xs text-honey/90 mt-0.5">Open Daily: 10:00 AM – 10:00 PM (Appointments Preferred)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-milk/60">
          <p>© {new Date().getFullYear()} TeddyPups U.A.E. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Verified Vet Certified</span>
            <span>•</span>
            <span>Ethical Breeders Only</span>
            <span>•</span>
            <span>Dubai, UAE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
