'use client';

import React, { useState, useEffect } from 'react';
import { PawIcon } from '@/components/ui/PawIcon';

export function AnnouncementStrip() {
  return (
    <div className="bg-honey text-cocoa py-1.5 px-4 text-xs font-semibold tracking-wide border-b border-cocoa/10 flex items-center justify-center gap-2 overflow-hidden">
      <PawIcon className="w-3.5 h-3.5 text-toffee" />
      <span className="font-scrawl text-toffee-ink font-bold">every puppy is family</span>
      <span className="hidden sm:inline text-cocoa/40">•</span>
      <span className="hidden sm:inline text-cocoa/80">Downtown Dubai Showroom • Same-Day Take Home & Global Flights</span>
    </div>
  );
}

export function CurtainIntro() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // Check if user already saw the curtain intro in this session
    const hasSeen = sessionStorage.getItem('tp_intro_seen');
    if (!hasSeen) {
      setVisible(true);
      const timer = setTimeout(() => {
        setClosing(true);
        setTimeout(() => {
          setVisible(false);
          sessionStorage.setItem('tp_intro_seen', 'true');
        }, 600);
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label="Welcome to TeddyPups"
      onClick={() => {
        setClosing(true);
        setTimeout(() => setVisible(false), 500);
      }}
      className={`fixed inset-0 z-[150] bg-honey flex flex-col items-center justify-center cursor-pointer transition-all duration-600 ease-in-out ${
        closing ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      <div className="flex flex-col items-center text-center p-6 max-w-md animate-fade-in">
        <div className="w-24 h-24 mb-4 rounded-full bg-honey-deep/40 border-2 border-cocoa flex items-center justify-center text-5xl shadow-md animate-bounce">
          🐶
        </div>
        <h1 className="font-plush font-extrabold text-3xl sm:text-4xl text-cocoa tracking-normal mb-2">
          TeddyPups U.A.E.
        </h1>
        <p className="font-scrawl text-xl sm:text-2xl text-toffee font-bold">
          every puppy is family 🐾
        </p>
        <p className="mt-4 text-xs uppercase tracking-widest text-cocoa/60 font-semibold">
          Downtown Dubai Showroom
        </p>
      </div>
    </div>
  );
}
