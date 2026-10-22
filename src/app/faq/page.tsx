import React from 'react';
import type { Metadata } from 'next';
import { faqItems } from '@/data/faq';
import { FAQClient } from '@/components/sections/faq/FAQClient';
import { PawIcon } from '@/components/ui/PawIcon';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | TeddyPups Dubai',
  description:
    'Got questions about adopting teacup puppies in Dubai? Read about health certificates, vaccinations, visiting our Downtown showroom, delivery, and post-adoption care.',
  alternates: {
    canonical: 'https://puppy.instabizweb.com/faq',
  },
};

export default function FAQPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="bg-milk min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-[#fff1d8]/50 to-milk pt-8 pb-12 border-b border-cocoa/10">
        <div className="max-w-[110rem] mx-auto gutter">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-toffee mb-2">
              <PawIcon className="w-4 h-4" />
              <span className="font-scrawl text-base font-bold text-toffee-ink">
                notes from our board
              </span>
            </div>
            <h1 className="font-plush font-extrabold text-4xl sm:text-6xl text-cocoa tracking-normal leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-3 text-cocoa/80 text-base sm:text-lg leading-relaxed">
              Find instant answers regarding our puppy health guarantees, Downtown Dubai showroom visits, same-day take home, and international flight delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[110rem] mx-auto gutter pt-10">
        <FAQClient items={faqItems} />
      </div>
    </div>
  );
}
