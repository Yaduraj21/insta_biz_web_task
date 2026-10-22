import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PawIcon } from '@/components/ui/PawIcon';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'How It Works — Adoption & Flight Delivery | TeddyPups Dubai',
  description:
    'Learn how adopting a puppy with TeddyPups works: visit our Downtown Dubai showroom, reserve imported rare breeds, health certification, and VIP delivery.',
  alternates: {
    canonical: 'https://puppy.instabizweb.com/how-it-works',
  },
};

export default function HowItWorksPage() {
  return (
    <div className="bg-milk min-h-screen pb-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#fff1d8]/50 to-milk pt-8 pb-12 border-b border-cocoa/10">
        <div className="max-w-[110rem] mx-auto gutter">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-toffee mb-2">
              <PawIcon className="w-4 h-4" />
              <span className="font-scrawl text-base font-bold text-toffee-ink">
                clarity at every step
              </span>
            </div>
            <h1 className="font-plush font-extrabold text-4xl sm:text-6xl text-cocoa tracking-tight leading-tight">
              How It Works
            </h1>
            <p className="mt-3 text-cocoa/80 text-base sm:text-lg leading-relaxed">
              From your first greeting in Downtown Dubai to the day your puppy falls asleep in your arms, here is how our adoption and VIP delivery process works.
            </p>
          </div>
        </div>
      </section>

      {/* In-page Sticky Quick Nav */}
      <div className="sticky top-[calc(var(--header-h)+28px)] z-20 bg-white/90 backdrop-blur-md border-b border-cocoa/10 py-3 shadow-2xs">
        <div className="max-w-[110rem] mx-auto gutter flex items-center gap-3 overflow-x-auto text-xs sm:text-sm font-bold text-cocoa scrollbar-none">
          <a href="#two-ways" className="py-1 px-3.5 rounded-full bg-honey/40 hover:bg-honey transition-colors shrink-0">
            1. Two Ways Home
          </a>
          <a href="#promise" className="py-1 px-3.5 rounded-full bg-honey/40 hover:bg-honey transition-colors shrink-0">
            2. Puppy Promise
          </a>
          <a href="#delivery" className="py-1 px-3.5 rounded-full bg-honey/40 hover:bg-honey transition-colors shrink-0">
            3. Delivery &amp; Collection
          </a>
          <a href="#why-us" className="py-1 px-3.5 rounded-full bg-honey/40 hover:bg-honey transition-colors shrink-0">
            4. Why Choose Us
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto gutter pt-12 flex flex-col gap-16">
        {/* Section 1: Two Ways Home */}
        <section id="two-ways" className="scroll-mt-36">
          <h2 className="font-plush font-extrabold text-3xl sm:text-4xl text-cocoa mb-6">
            1. Two Ways to Welcome Your Puppy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-7 rounded-3xl border-2 border-cocoa/15 shadow-sm">
              <span className="bg-honey text-toffee-ink font-bold text-xs py-1 px-3 rounded-full border border-cocoa/15">
                Path A • Immediate
              </span>
              <h3 className="font-plush font-bold text-xl text-cocoa mt-4">
                Local Showroom in Downtown Dubai
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-cocoa/75 leading-relaxed">
                Meet our locally available puppies in person. Spend 45–60 minutes in our comfortable cuddle lounge to observe their personality, energy, and temperament before confirming your adoption.
              </p>
              <ul className="mt-4 flex flex-col gap-2 text-xs text-cocoa/80 font-medium">
                <li>✓ Immediate same-day take home</li>
                <li>✓ Vet health records handed over in person</li>
                <li>✓ Free doorstep delivery across Dubai</li>
              </ul>
            </div>

            <div className="bg-white p-7 rounded-3xl border-2 border-cocoa/15 shadow-sm">
              <span className="bg-cocoa text-honey font-bold text-xs py-1 px-3 rounded-full">
                Path B • Custom Order
              </span>
              <h3 className="font-plush font-bold text-xl text-cocoa mt-4">
                Order Upon Request (Imported)
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-cocoa/75 leading-relaxed">
                If you seek an ultra-rare teacup Korean poodle, micro Maltese, or specific champion bloodline, we source directly from accredited ethical partners in Korea and Europe.
              </p>
              <ul className="mt-4 flex flex-col gap-2 text-xs text-cocoa/80 font-medium">
                <li>✓ High-definition photos &amp; WhatsApp video calls</li>
                <li>✓ We manage international flights &amp; UAE customs</li>
                <li>✓ Delivered healthy &amp; stress-free</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Premium Puppy Promise */}
        <section id="promise" className="scroll-mt-36">
          <h2 className="font-plush font-extrabold text-3xl sm:text-4xl text-cocoa mb-6">
            2. The Premium Puppy Promise
          </h2>
          <div className="bg-cocoa text-milk p-8 sm:p-10 rounded-3xl border-2 border-cocoa shadow-md">
            <p className="text-honey font-scrawl text-lg font-bold mb-2">
              Our 10-Year Guarantee
            </p>
            <p className="text-milk/85 text-sm sm:text-base leading-relaxed max-w-3xl">
              We stand behind every single puppy with a comprehensive 10-year genetic health guarantee. Each puppy has been dewormed on schedule, received core vaccinations, and passed certified clinical exams by licensed veterinarians.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs text-honey">
              <div>🛡️ 10-Year Genetic Warranty</div>
              <div>🩺 Complete Blood &amp; Parvo Tests</div>
              <div>📖 Registered UAE Health Card</div>
            </div>
          </div>
        </section>

        {/* Section 3: Delivery & Collection */}
        <section id="delivery" className="scroll-mt-36">
          <h2 className="font-plush font-extrabold text-3xl sm:text-4xl text-cocoa mb-6">
            3. Delivery &amp; Collection Options
          </h2>
          <div className="bg-white p-8 rounded-3xl border-2 border-cocoa/15 shadow-sm flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-cocoa/10">
              <div>
                <h3 className="font-plush font-bold text-lg text-cocoa">
                  🇦🇪 Showroom Pickup (Downtown Dubai)
                </h3>
                <p className="text-xs text-cocoa/75 mt-1">
                  Complimentary valet parking and private farewell packaging. Same day available.
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full shrink-0">
                Free • Recommended
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-cocoa/10">
              <div>
                <h3 className="font-plush font-bold text-lg text-cocoa">
                  🚗 Chauffeured Hand-Delivery (UAE-Wide)
                </h3>
                <p className="text-xs text-cocoa/75 mt-1">
                  Our puppy handler personally delivers your puppy in a climate-controlled vehicle directly to your doorstep in Dubai, Abu Dhabi, Sharjah, or Ajman.
                </p>
              </div>
              <span className="text-xs font-bold text-cocoa bg-honey/40 px-3 py-1 rounded-full shrink-0">
                Complimentary in Dubai
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-plush font-bold text-lg text-cocoa">
                  ✈️ VIP Flight Delivery (GCC &amp; Worldwide)
                </h3>
                <p className="text-xs text-cocoa/75 mt-1">
                  We fly puppies safely via accredited pet cargo or with an in-cabin pet nanny to Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and globally.
                </p>
              </div>
              <span className="text-xs font-bold text-toffee bg-honey/20 px-3 py-1 rounded-full shrink-0">
                Worldwide Available
              </span>
            </div>
          </div>
        </section>

        {/* Section 4: Why Choose Us */}
        <section id="why-us" className="scroll-mt-36">
          <h2 className="font-plush font-extrabold text-3xl sm:text-4xl text-cocoa mb-6">
            4. Why Choose TeddyPups
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-cocoa/15 shadow-2xs">
              <h3 className="font-plush font-bold text-base text-cocoa mb-1">
                Ethical Breeders Only
              </h3>
              <p className="text-xs text-cocoa/75 leading-relaxed">
                Zero puppy mills. We partner exclusively with small-scale, certified hobby breeders who raise pups indoors with abundant social human interaction.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-cocoa/15 shadow-2xs">
              <h3 className="font-plush font-bold text-base text-cocoa mb-1">
                Lifelong 24/7 Concierge
              </h3>
              <p className="text-xs text-cocoa/75 leading-relaxed">
                You receive our direct personal WhatsApp contact. We help you with teething, food changes, potty training milestones, and vet advice anytime.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-cocoa/15 shadow-2xs">
              <h3 className="font-plush font-bold text-base text-cocoa mb-1">
                Transparent Documentation
              </h3>
              <p className="text-xs text-cocoa/75 leading-relaxed">
                Every health record, vaccination sticker, microchip number, and origin proof is provided in an organized hardcover folder.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-cocoa/15 shadow-2xs">
              <h3 className="font-plush font-bold text-base text-cocoa mb-1">
                Luxury Starter Kit
              </h3>
              <p className="text-xs text-cocoa/75 leading-relaxed">
                Comes with royal bedding, carrier, transitional puppy food, travel bowls, pee pads, and mama-scented blanket to make day one effortless.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="mt-8 text-center bg-honey/40 rounded-3xl p-8 sm:p-12 border-2 border-cocoa/15">
          <h2 className="font-plush font-bold text-2xl sm:text-3xl text-cocoa">
            Have Questions About the Process?
          </h2>
          <p className="mt-2 text-sm text-cocoa/75 max-w-md mx-auto">
            Our puppy concierge is standing by to guide you through breed availability and visit timings.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/puppies"
              className="py-3 px-7 rounded-full bg-cocoa text-milk font-bold text-sm hover:bg-cocoa-soft shadow-md"
            >
              View Available Puppies →
            </Link>
            <a
              href={getWhatsAppUrl("Hi TeddyPups, I'd like to ask a question about your adoption process.")}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-7 rounded-full bg-white hover:bg-honey border border-cocoa/20 text-cocoa font-bold text-sm"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
