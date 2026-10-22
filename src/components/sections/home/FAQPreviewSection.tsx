import React from 'react';
import Link from 'next/link';
import { Accordion } from '@/components/ui/Accordion';
import { PawIcon } from '@/components/ui/PawIcon';
import { faqItems } from '@/data/faq';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export function FAQPreviewSection() {
  const previewFaqs = faqItems.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-honey/20 border-t border-cocoa/10">
      <div className="max-w-4xl mx-auto gutter">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-toffee mb-2">
            <PawIcon className="w-4 h-4" />
            <span className="font-scrawl text-base font-bold text-toffee-ink">
              clarity &amp; care
            </span>
          </div>
          <h2 className="font-plush font-extrabold text-3xl sm:text-5xl text-cocoa tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-cocoa/75 text-sm sm:text-base">
            Everything you need to know about puppy health, vaccinations, showroom visits, and flight delivery.
          </p>
        </div>

        {/* Accordion List */}
        <Accordion items={previewFaqs} />

        {/* Bottom CTA to full FAQ */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/faq"
            className="py-3 px-6 rounded-full bg-cocoa text-milk font-bold text-sm hover:bg-cocoa-soft transition-colors shadow-xs"
          >
            View All 9 Questions &amp; Answers →
          </Link>
          <a
            href={getWhatsAppUrl("Hi TeddyPups, I have a question that isn't in your FAQ.")}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 rounded-full bg-white hover:bg-honey/40 border border-cocoa/20 text-cocoa font-bold text-sm transition-colors"
          >
            Ask Us on WhatsApp Directly
          </a>
        </div>
      </div>
    </section>
  );
}
