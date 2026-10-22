'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { FamilyPhoto } from '@/types';
import { StarIcon } from '@/components/ui/PawIcon';

interface FamilyLightboxProps {
  photos: FamilyPhoto[];
}

export function FamilyLightbox({ photos }: FamilyLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  const nextPhoto = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % photos.length);
    }
  }, [selectedIndex, photos.length]);

  const prevPhoto = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
    }
  }, [selectedIndex, photos.length]);

  const closeDialog = () => {
    setSelectedIndex(null);
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'Escape') closeDialog();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, nextPhoto, prevPhoto]);

  return (
    <>
      {/* Polaroid Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {photos.map((photo, idx) => (
          <div
            key={photo.id}
            onClick={() => setSelectedIndex(idx)}
            className={`bg-white p-4 pb-6 rounded-2xl border-2 border-cocoa/15 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group ${
              idx % 2 === 0 ? '-rotate-1 hover:rotate-0' : 'rotate-1 hover:rotate-0'
            }`}
          >
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-honey/20 mb-3.5">
              <Image
                src={photo.src}
                alt={`${photo.puppyName} with ${photo.ownerName}`}
                fill
                sizes="(max-width: 640px) 100vw, 30vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-cocoa/0 group-hover:bg-cocoa/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-cocoa font-bold text-xs py-1 px-3 rounded-full shadow-md transition-opacity duration-200">
                  🔍 View Story
                </span>
              </div>
            </div>

            <h3 className="font-plush font-extrabold text-lg text-cocoa">
              {photo.puppyName} &amp; {photo.ownerName}
            </h3>
            <p className="text-xs text-toffee font-semibold mt-0.5">
              {photo.breed} • {photo.location}
            </p>
            {photo.quote && (
              <p className="mt-2 text-xs text-cocoa/75 italic line-clamp-2 leading-relaxed">
                &ldquo;{photo.quote}&rdquo;
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Family photo story"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-cocoa/60 backdrop-blur-sm animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeDialog();
            }
          }}
        >
          <div className="relative bg-white border-2 border-cocoa/20 max-w-2xl w-[90vw] sm:w-full rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col gap-5 max-h-[92vh] overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={closeDialog}
              aria-label="Close dialog"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-honey hover:bg-honey-deep text-cocoa flex items-center justify-center font-bold shadow-xs transition-colors z-20 cursor-pointer"
            >
              ✕
            </button>

            {/* Photo */}
            <div className="relative aspect-square sm:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-honey/20">
              <Image
                src={selectedPhoto.src}
                alt={`${selectedPhoto.puppyName} with ${selectedPhoto.ownerName}`}
                fill
                className="object-cover object-center"
              />
              {/* Prev / Next in modal */}
              <button
                type="button"
                onClick={prevPhoto}
                aria-label="Previous story"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-cocoa flex items-center justify-center shadow-md cursor-pointer"
              >
                ←
              </button>
              <button
                type="button"
                onClick={nextPhoto}
                aria-label="Next story"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-cocoa flex items-center justify-center shadow-md cursor-pointer"
              >
                →
              </button>
            </div>

            {/* Story Details */}
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4" />
                ))}
              </div>
              <h3 className="font-plush font-extrabold text-2xl text-cocoa">
                {selectedPhoto.puppyName} with {selectedPhoto.ownerName}
              </h3>
              <p className="text-xs text-toffee font-semibold mt-0.5">
                {selectedPhoto.breed} • {selectedPhoto.location} {selectedPhoto.date ? `• ${selectedPhoto.date}` : ''}
              </p>

              {selectedPhoto.quote && (
                <p className="mt-3 text-sm text-cocoa/85 italic leading-relaxed bg-honey/20 p-4 rounded-xl border border-cocoa/10">
                  &ldquo;{selectedPhoto.quote}&rdquo;
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
