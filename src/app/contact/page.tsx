import React from 'react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { PawIcon } from '@/components/ui/PawIcon';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Visit & Contact | Downtown Dubai Puppy Showroom | TeddyPups',
  description:
    'Book an appointment or visit TeddyPups in Downtown Dubai. Open daily 10 AM to 10 PM. WhatsApp concierge, valet parking, and directions.',
  alternates: {
    canonical: 'https://puppy.instabizweb.com/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="bg-milk min-h-screen pb-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#fff1d8]/50 to-milk pt-8 pb-12 border-b border-cocoa/10">
        <div className="max-w-[110rem] mx-auto gutter">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-toffee mb-2">
              <PawIcon className="w-4 h-4" />
              <span className="font-scrawl text-base font-bold text-toffee-ink">
                we&apos;d love to meet you
              </span>
            </div>
            <h1 className="font-plush font-extrabold text-4xl sm:text-6xl text-cocoa tracking-tight leading-tight">
              Visit &amp; Contact
            </h1>
            <p className="mt-3 text-cocoa/80 text-base sm:text-lg leading-relaxed">
              Step into our boutique puppy showroom in Downtown Dubai. Meet, cuddle, and bond with our teacup companions in a peaceful, private atmosphere.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-[110rem] mx-auto gutter pt-10 sm:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Letter Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Showroom Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Showroom Card */}
            <div className="bg-cocoa text-milk p-7 sm:p-8 rounded-3xl border-2 border-cocoa shadow-lg flex flex-col gap-5">
              <div>
                <span className="font-scrawl text-honey text-sm font-bold">
                  downtown showroom
                </span>
                <h2 className="font-plush font-extrabold text-2xl sm:text-3xl text-milk mt-1">
                  TeddyPups U.A.E.
                </h2>
                <p className="text-xs text-honey/90 mt-0.5">
                  Boulevard Plaza, Downtown Dubai, United Arab Emirates
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-white/10 text-xs sm:text-sm text-milk/80">
                <div className="flex items-start gap-3">
                  <span className="text-honey text-base">⏰</span>
                  <div>
                    <p className="font-bold text-milk">Opening Hours</p>
                    <p>Monday – Sunday: 10:00 AM – 10:00 PM</p>
                    <p className="text-[11px] text-honey/80">Walk-ins welcome, private bookings recommended.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-honey text-base">🚗</span>
                  <div>
                    <p className="font-bold text-milk">Parking &amp; Arrival</p>
                    <p>Complimentary guest valet at Boulevard Plaza entrance.</p>
                  </div>
                </div>
              </div>

              {/* Map Button */}
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Boulevard+Plaza+Downtown+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-full bg-honey hover:bg-honey-deep text-cocoa font-bold text-xs text-center block transition-colors"
                >
                  📍 Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="bg-white p-7 rounded-3xl border-2 border-cocoa/15 shadow-xs flex flex-col gap-4">
              <h3 className="font-plush font-bold text-lg text-cocoa">
                Direct Communication Channels
              </h3>

              <div className="flex flex-col gap-3 text-xs sm:text-sm text-cocoa/80">
                <a
                  href={getWhatsAppUrl("Hi TeddyPups, I'd like to reach your showroom concierge.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 flex items-center justify-between text-emerald-950 font-semibold transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <span>💬</span>
                    <span>Chat on WhatsApp</span>
                  </span>
                  <span className="text-xs text-emerald-700">Instant Reply →</span>
                </a>

                <div className="p-3.5 rounded-2xl bg-honey/20 border border-cocoa/10 flex items-center justify-between">
                  <span className="flex items-center gap-2.5">
                    <span>📞</span>
                    <span>Phone Call</span>
                  </span>
                  <a href="tel:+971501234567" className="font-bold text-cocoa hover:text-toffee">
                    +971 50 123 4567
                  </a>
                </div>

                <div className="p-3.5 rounded-2xl bg-honey/20 border border-cocoa/10 flex items-center justify-between">
                  <span className="flex items-center gap-2.5">
                    <span>✉️</span>
                    <span>Email Concierge</span>
                  </span>
                  <a href="mailto:teddypupsadmin@gmail.com" className="font-bold text-cocoa hover:text-toffee break-all text-xs">
                    teddypupsadmin@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
