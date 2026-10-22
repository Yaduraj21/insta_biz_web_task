'use client';

import React, { useState, useMemo } from 'react';
import { FAQItem } from '@/types';
import { AccordionItem } from '@/components/ui/Accordion';
import { PawIcon } from '@/components/ui/PawIcon';
import { getWhatsAppUrl } from '@/lib/whatsapp';

interface FAQClientProps {
  items: FAQItem[];
}

export function FAQClient({ items }: FAQClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions (9)' },
    { id: 'health', label: 'Health & Vet Checks' },
    { id: 'process', label: 'Visits & Adoption' },
    { id: 'delivery', label: 'Import & Flights' },
    { id: 'breeds', label: 'Available Breeds' },
    { id: 'aftercare', label: '24/7 Aftercare' },
  ];

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q);
      }
      return true;
    });
  }, [items, selectedCategory, searchQuery]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      {/* Left Sidebar: Search & Filters (4 cols) */}
      <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-[calc(var(--header-h)+48px)]">
        {/* Search input */}
        <div className="bg-white p-5 rounded-3xl border-2 border-cocoa/15 shadow-xs">
          <label htmlFor="faq-search" className="block text-xs font-bold text-cocoa uppercase tracking-wider mb-2">
            Search Questions
          </label>
          <div className="relative">
            <input
              id="faq-search"
              type="text"
              placeholder="e.g. vaccinated, delivery, visits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-cocoa/20 focus:border-toffee focus:ring-2 focus:ring-toffee/20 text-sm outline-none transition-all"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cocoa/50 text-sm">
              🔍
            </span>
          </div>
        </div>

        {/* Categories list */}
        <div className="bg-white p-5 rounded-3xl border-2 border-cocoa/15 shadow-xs flex flex-col gap-2">
          <span className="text-xs font-bold text-cocoa uppercase tracking-wider mb-1">
            Browse by Topic
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`w-full text-left py-2 px-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                selectedCategory === cat.id
                  ? 'bg-cocoa text-milk'
                  : 'hover:bg-honey/40 text-cocoa'
              }`}
            >
              <span>{cat.label}</span>
              {selectedCategory === cat.id && <PawIcon className="w-3.5 h-3.5 text-honey" />}
            </button>
          ))}
        </div>

        {/* WhatsApp Help Card */}
        <div className="bg-honey/40 p-6 rounded-3xl border-2 border-cocoa/15 shadow-xs flex flex-col gap-3">
          <span className="font-scrawl text-sm font-bold text-toffee-ink">
            didn&apos;t find your answer?
          </span>
          <h3 className="font-plush font-bold text-lg text-cocoa">
            Ask Us on WhatsApp
          </h3>
          <p className="text-xs text-cocoa/75 leading-relaxed">
            Our puppy team is available daily to answer any question about breeds, size expectations, or delivery logistics.
          </p>
          <a
            href={getWhatsAppUrl("Hi TeddyPups, I have a specific question not covered in your FAQ.")}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-4 rounded-full bg-cocoa text-milk font-bold text-xs text-center hover:bg-cocoa-soft transition-colors mt-1 block"
          >
            Chat with Concierge →
          </a>
        </div>
      </div>

      {/* Right Column: Accordion Questions (8 cols) */}
      <div className="lg:col-span-8 flex flex-col gap-4">
        <div className="flex items-center justify-between px-1 mb-2">
          <span className="font-scrawl text-sm font-bold text-toffee-ink">
            {filteredItems.length} {filteredItems.length === 1 ? 'note' : 'notes'} on the board
          </span>
          {(searchQuery || selectedCategory !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs text-toffee font-bold underline hover:text-toffee-ink"
            >
              Reset filters
            </button>
          )}
        </div>

        {filteredItems.length > 0 ? (
          <div className="flex flex-col gap-3.5">
            {filteredItems.map((item, idx) => (
              <AccordionItem
                key={item.id}
                id={item.id}
                question={item.question}
                answer={item.answer}
                defaultOpen={idx === 0}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-white rounded-3xl border-2 border-dashed border-cocoa/20 p-8">
            <span className="text-4xl block mb-2">🤔</span>
            <h3 className="font-plush font-bold text-xl text-cocoa">
              No matching questions found
            </h3>
            <p className="mt-1 text-xs text-cocoa/70">
              Try searching for &ldquo;health&rdquo;, &ldquo;import&rdquo;, or ask us directly on WhatsApp.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
