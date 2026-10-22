'use client';

import React from 'react';
import Link from 'next/link';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-milk/95 backdrop-blur-md border-t border-cocoa/15 px-4 py-2.5 flex items-center gap-3 shadow-[0_-4px_12px_rgba(42,23,14,0.06)]">
      <Link
        href="/puppies"
        className="flex-1 py-2.5 px-3 rounded-full bg-honey/80 border border-cocoa/20 text-cocoa font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
      >
        <span>🐾</span>
        <span>View Puppies</span>
      </Link>
      <a
        href={getWhatsAppUrl("Hi TeddyPups, I'd like to ask about available puppies!")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-3 rounded-full bg-cocoa text-milk font-bold text-xs sm:text-sm text-center flex items-center justify-center gap-1.5 shadow-xs active:scale-95 transition-transform"
      >
        <span className="text-emerald-400">●</span>
        <span>WhatsApp Concierge</span>
      </a>
    </div>
  );
}
