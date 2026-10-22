'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { PawIcon } from '@/components/ui/PawIcon';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Puppies', href: '/puppies' },
  { label: 'Happy families', href: '/happy-families' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Visit & contact', href: '/contact' },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
        document.body.style.overflow = 'hidden';
      }
    } else {
      if (dialog.open) {
        dialog.close();
        document.body.style.overflow = '';
      }
    }
  }, [isOpen]);

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Handle native cancel (Escape key)
  const handleCancel = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleCancel}
      aria-label="Site menu"
      className="m-0 p-0 max-w-none max-h-none w-screen h-dvh bg-honey text-cocoa backdrop:bg-cocoa/40 z-[100] fixed inset-0 overflow-y-auto"
    >
      <div className="min-h-full flex flex-col justify-between p-6 sm:p-10">
        {/* Top bar with title and close button */}
        <div className="flex items-center justify-between pb-6 border-b border-cocoa/15">
          <div className="flex items-center gap-2">
            <PawIcon className="w-5 h-5 text-toffee" fill="currentColor" />
            <span className="font-scrawl text-xl text-toffee-ink font-bold">where to, friend?</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="w-11 h-11 rounded-full bg-cocoa text-milk flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation list */}
        <nav aria-label="Mobile navigation" className="py-8 flex flex-col gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`font-plush text-[clamp(2.2rem,8.5vw,3.2rem)] font-extrabold leading-tight tracking-normal transition-all duration-200 flex items-center justify-between group ${
                  isActive ? 'text-toffee translate-x-2' : 'text-cocoa hover:text-toffee hover:translate-x-2'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">🐾</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom actions & contact */}
        <div className="pt-6 border-t border-cocoa/15 flex flex-col gap-3">
          <a
            href={getWhatsAppUrl("Hi TeddyPups, I'm reaching out from the mobile menu!")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 rounded-full bg-cocoa text-milk font-bold text-center flex items-center justify-center gap-3 shadow-md hover:bg-cocoa-soft transition-colors text-base"
          >
            <span className="text-xl">💬</span>
            <span>WhatsApp Our Showroom</span>
          </a>
          <div className="flex items-center justify-between text-xs text-cocoa/70 px-2 font-medium">
            <span>Downtown Dubai, UAE</span>
            <a href="tel:+971501234567" className="underline hover:text-toffee">
              +971 50 123 4567
            </a>
          </div>
        </div>
      </div>
    </dialog>
  );
}
