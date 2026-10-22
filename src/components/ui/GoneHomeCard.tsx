import React from 'react';
import Image from 'next/image';
import { GoneHomePuppy } from '@/types';
import { PawIcon } from './PawIcon';

interface GoneHomeCardProps {
  puppy: GoneHomePuppy;
}

export function GoneHomeCard({ puppy }: GoneHomeCardProps) {
  return (
    <article className="relative bg-white border-2 border-cocoa/20 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group">
      {/* Ticket Stamp Header */}
      <div className="bg-honey/40 border-b border-cocoa/15 px-4 py-2 flex items-center justify-between text-xs font-bold text-cocoa">
        <span className="flex items-center gap-1.5 font-scrawl text-toffee-ink">
          <PawIcon className="w-3.5 h-3.5 text-toffee" />
          <span>Ticket #{puppy.slug.slice(0, 8).toUpperCase()}</span>
        </span>
        <span className="bg-cocoa text-honey uppercase tracking-wider text-[10px] px-2 py-0.5 rounded-full font-bold">
          Gone Home
        </span>
      </div>

      {/* Puppy Image */}
      <div className="relative aspect-square w-full bg-honey/10 overflow-hidden">
        <Image
          src={puppy.image || '/images/gone-home/gone-ace.jpg'}
          alt={`${puppy.name} (${puppy.breed})`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out grayscale-[15%] group-hover:grayscale-0"
        />
        {/* Destination City Tag overlay */}
        {puppy.homeCity && (
          <div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-xs text-white text-[11px] font-semibold py-0.5 px-2.5 rounded-full flex items-center gap-1">
            <span>📍</span>
            <span>{puppy.homeCity}</span>
          </div>
        )}
      </div>

      {/* Ticket Details */}
      <div className="p-4 flex-1 flex flex-col justify-between gap-3 bg-white">
        <div>
          <div className="flex items-baseline justify-between">
            <h3 className="font-plush font-extrabold text-xl text-cocoa">
              {puppy.name}
            </h3>
            <span className="text-[11px] font-bold text-toffee uppercase tracking-wider">
              {puppy.originLabel}
            </span>
          </div>
          <p className="text-xs text-cocoa/70 font-medium mt-0.5">
            {puppy.breed} • {puppy.gender === 'boy' ? 'Boy ♂' : 'Girl ♀'}
          </p>
        </div>

        {/* Perforated divider look */}
        <div className="pt-2 border-t-2 border-dashed border-cocoa/15 flex items-center justify-between text-[11px] text-cocoa/60 font-mono">
          <span>DESTINATION: UAE & GCC</span>
          <span className="font-bold text-emerald-700">LOVED & SETTLED</span>
        </div>
      </div>
    </article>
  );
}
