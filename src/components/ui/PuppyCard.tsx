import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Puppy } from '@/types';
import { PawIcon } from './PawIcon';
import { getPuppyWhatsAppUrl } from '@/lib/whatsapp';

interface PuppyCardProps {
  puppy: Puppy;
  priority?: boolean;
}

export function PuppyCard({ puppy, priority = false }: PuppyCardProps) {
  const isAvailable = puppy.status === 'available';
  const displayImage = puppy.images[0] || '/images/puppies/max-1.jpg';

  return (
    <article className="group bg-white rounded-3xl border-2 border-cocoa/15 hover:border-cocoa/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative">
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] w-full bg-honey/20 overflow-hidden">
        <Link href={`/puppies/${puppy.slug}`} className="block w-full h-full">
          <Image
            src={displayImage}
            alt={`${puppy.name} - ${puppy.breed}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </Link>

        {/* Video badge */}
        {puppy.hasVideo && (
          <span className="absolute top-3 left-3 bg-cocoa/80 backdrop-blur-xs text-white text-[11px] font-bold py-1 px-2.5 rounded-full flex items-center gap-1 shadow-xs">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-honey">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>Video</span>
          </span>
        )}

        {/* Origin / Badge */}
        <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
          <span
            className={`text-[11px] font-bold py-1 px-2.5 rounded-full shadow-xs ${
              puppy.origin === 'local'
                ? 'bg-honey text-toffee-ink border border-cocoa/20'
                : 'bg-cocoa text-honey border border-honey/30'
            }`}
          >
            {puppy.origin === 'local' ? 'Dubai Showroom' : 'Rare Import'}
          </span>
          {puppy.badge && (
            <span className="text-[10px] font-extrabold uppercase tracking-wider py-0.5 px-2 rounded-full bg-amber text-cocoa">
              {puppy.badge}
            </span>
          )}
        </div>

        {/* Gender / Age Tag at bottom of image */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
          <span className="bg-white/90 backdrop-blur-xs text-cocoa text-xs font-bold py-0.5 px-2.5 rounded-full shadow-xs">
            {puppy.gender === 'boy' ? 'Boy ♂' : puppy.gender === 'girl' ? 'Girl ♀' : 'Boy & Girl'}
          </span>
          <span className="bg-white/90 backdrop-blur-xs text-cocoa text-xs font-medium py-0.5 px-2 rounded-full shadow-xs">
            {puppy.age}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <Link href={`/puppies/${puppy.slug}`}>
              <h3 className="font-plush font-extrabold text-2xl text-cocoa hover:text-toffee transition-colors tracking-normal">
                {puppy.name}
              </h3>
            </Link>
            <span className="text-xs font-semibold text-cocoa/60 uppercase tracking-wider">
              {puppy.breed}
            </span>
          </div>

          <p className="mt-2 text-xs sm:text-sm text-cocoa/75 line-clamp-2 leading-relaxed">
            {puppy.description || `${puppy.name} is a sweet, playful ${puppy.breed} raised with love in Dubai.`}
          </p>

          {/* Quick Specs */}
          <div className="mt-3.5 pt-3 border-t border-cocoa/10 flex items-center justify-between text-xs text-cocoa/70">
            <span className="flex items-center gap-1">
              <PawIcon className="w-3.5 h-3.5 text-toffee" />
              <span>Adult: {puppy.expectedAdultWeight || 'Under 2.5kg'}</span>
            </span>
            <span className="font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
              ✓ Vet certified
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-1">
          <Link
            href={`/puppies/${puppy.slug}`}
            className="flex-1 py-2.5 px-3 rounded-full bg-honey/60 hover:bg-honey border border-cocoa/20 text-cocoa font-bold text-xs sm:text-sm text-center transition-all duration-150 active:scale-98"
          >
            Meet {puppy.name}
          </Link>
          <a
            href={getPuppyWhatsAppUrl(puppy.name, puppy.breed, puppy.slug)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ask about ${puppy.name} on WhatsApp`}
            className="w-10 h-10 rounded-full bg-cocoa text-milk flex items-center justify-center hover:bg-cocoa-soft transition-colors shadow-xs active:scale-95 shrink-0"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-emerald-400">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 2.083.825 2.791.825 3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.768-5.768-5.768zm3.385 8.213c-.14.394-.814.729-1.129.774-.316.046-.713.065-2.043-.483-1.603-.66-2.617-2.28-2.696-2.387-.08-.107-.639-.85-.639-1.623 0-.773.407-1.153.551-1.311.145-.158.316-.197.421-.197.106 0 .211.002.303.007.098.005.23-.037.359.273.132.316.449 1.096.488 1.176.04.079.066.172.013.277-.053.106-.079.172-.158.264-.079.092-.167.206-.238.277-.08.079-.163.165-.07.324.093.159.412.68.883 1.1 1.018.908 1.408 1.003 1.606 1.101.198.099.317.086.436-.053.118-.139.513-.598.65-.806.138-.208.275-.172.463-.102.188.069 1.192.562 1.396.664.204.102.34.152.39.238.05.086.05.498-.09.892z" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
