'use client';

import React, { useState } from 'react';
import { PawIcon } from './PawIcon';

interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function AccordionItem({ id, question, answer, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-2 border-cocoa/15 rounded-2xl overflow-hidden bg-white/80 transition-all duration-200 hover:border-cocoa/30 shadow-xs">
      <button
        type="button"
        id={`header-${id}`}
        aria-expanded={isOpen}
        aria-controls={`panel-${id}`}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-toffee"
      >
        <span className="font-plush font-bold text-lg sm:text-xl text-cocoa leading-snug flex items-center gap-3">
          <PawIcon className={`w-4 h-4 text-toffee shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-12 scale-110' : ''}`} />
          <span>{question}</span>
        </span>
        <div
          className={`w-8 h-8 rounded-full bg-honey/60 flex items-center justify-center shrink-0 text-cocoa font-bold transition-transform duration-200 ${
            isOpen ? 'rotate-180 bg-honey' : ''
          }`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div
        id={`panel-${id}`}
        role="region"
        aria-labelledby={`header-${id}`}
        className={`transition-all duration-300 ease-in-out px-5 sm:px-6 overflow-hidden ${
          isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
        }`}
      >
        <div className="pt-2 border-t border-cocoa/10 text-cocoa/80 text-sm sm:text-base leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { id: string; question: string; answer: string }[];
}

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="flex flex-col gap-3.5">
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
          defaultOpen={index === 0}
        />
      ))}
    </div>
  );
}
