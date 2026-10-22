'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Puppy } from '@/types';
import { PuppyCard } from '@/components/ui/PuppyCard';
import { PawIcon } from '@/components/ui/PawIcon';
import Link from 'next/link';

interface PuppiesClientProps {
  puppies: Puppy[];
}

export function PuppiesClient({ puppies }: PuppiesClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentOrigin = searchParams.get('origin') || 'all';
  const currentBreed = searchParams.get('breed') || 'all';

  const breeds = ['all', 'Maltipoo', 'Pomeranian', 'Poodle', 'Bichon Frise', 'Maltese', 'Yorkshire Terrier'];

  const setFilter = (type: 'origin' | 'breed', value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'all') {
      params.delete(type);
    } else {
      params.set(type, value);
    }
    router.push(`/puppies?${params.toString()}`, { scroll: false });
  };

  const filteredPuppies = useMemo(() => {
    return puppies.filter((p) => {
      // Origin match
      if (currentOrigin !== 'all' && p.origin !== currentOrigin) {
        return false;
      }
      // Breed match (fuzzy search includes substring)
      if (currentBreed !== 'all') {
        const breedNormalized = currentBreed.toLowerCase();
        const pBreedNormalized = p.breed.toLowerCase();
        if (!pBreedNormalized.includes(breedNormalized) && !breedNormalized.includes(pBreedNormalized)) {
          return false;
        }
      }
      return true;
    });
  }, [puppies, currentOrigin, currentBreed]);

  return (
    <div className="py-8 sm:py-14">
      {/* Filters Bar */}
      <div className="mb-10 flex flex-col gap-5 p-6 rounded-3xl bg-white border-2 border-cocoa/15 shadow-xs">
        {/* Origin Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-xs font-bold text-cocoa/60 uppercase tracking-wider min-w-[80px]">
            Showroom:
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Puppies (15)' },
              { id: 'local', label: '🇦🇪 In Dubai Today (Immediate)' },
              { id: 'imported', label: '✈️ Rare Imports (Korea/Europe)' },
            ].map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => setFilter('origin', btn.id)}
                className={`py-1.5 px-4 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  currentOrigin === btn.id
                    ? 'bg-cocoa text-milk shadow-xs'
                    : 'bg-honey/40 text-cocoa hover:bg-honey border border-cocoa/15'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Breed Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-3 border-t border-cocoa/10">
          <span className="text-xs font-bold text-cocoa/60 uppercase tracking-wider min-w-[80px]">
            Breed:
          </span>
          <div className="flex flex-wrap gap-2">
            {breeds.map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setFilter('breed', b)}
                className={`py-1 px-3.5 rounded-full text-xs font-semibold capitalize transition-all ${
                  currentBreed === b
                    ? 'bg-toffee text-white shadow-xs'
                    : 'bg-milk hover:bg-honey/40 text-cocoa border border-cocoa/15'
                }`}
              >
                {b === 'all' ? 'All Breeds' : b}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between mb-8 px-1">
        <p className="text-sm font-semibold text-cocoa/75">
          Showing <span className="text-cocoa font-bold">{filteredPuppies.length}</span> precious {filteredPuppies.length === 1 ? 'puppy' : 'puppies'}
        </p>
        {(currentOrigin !== 'all' || currentBreed !== 'all') && (
          <button
            type="button"
            onClick={() => router.push('/puppies')}
            className="text-xs text-toffee font-bold underline hover:text-toffee-ink"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Grid */}
      {filteredPuppies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPuppies.map((pup, idx) => (
            <PuppyCard key={pup.slug} puppy={pup} priority={idx < 3} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center bg-white rounded-3xl border-2 border-dashed border-cocoa/20 p-8">
          <span className="text-4xl block mb-3">🐶</span>
          <h3 className="font-plush font-bold text-xl text-cocoa">
            No puppies match your exact filter
          </h3>
          <p className="mt-1 text-sm text-cocoa/70 max-w-sm mx-auto">
            We regularly receive new litters from our certified breeders. Contact our concierge to find your ideal breed!
          </p>
          <div className="mt-5">
            <button
              type="button"
              onClick={() => router.push('/puppies')}
              className="py-2 px-5 rounded-full bg-honey text-cocoa font-bold text-xs hover:bg-honey-deep"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
