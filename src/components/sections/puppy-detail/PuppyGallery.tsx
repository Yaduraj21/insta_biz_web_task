'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface PuppyGalleryProps {
  images: string[];
  video?: string;
  puppyName: string;
}

export function PuppyGallery({ images, video, puppyName }: PuppyGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // If there's a video, treat it as the last item or item 0 if requested
  const totalItems = images.length + (video ? 1 : 0);
  const isVideoIndex = video && currentIndex === images.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
    setIsPlayingVideo(false);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    setIsPlayingVideo(false);
  }, [totalItems]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Display Window */}
      <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border-2 border-cocoa/20 bg-honey/20 shadow-lg">
        {isVideoIndex && video ? (
          <div className="w-full h-full bg-black flex items-center justify-center relative">
            <video
              src={video}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            />
            <div className="absolute top-4 left-4 bg-cocoa/80 text-white text-xs py-1 px-3 rounded-full font-bold">
              🎥 Video Showcase
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={images[currentIndex] || 'https://puppy.instabizweb.com/media/maltipoo-1.jpg'}
              alt={`${puppyName} photo ${currentIndex + 1}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        )}

        {/* Counter Badge */}
        <div className="absolute top-4 right-4 bg-cocoa/75 backdrop-blur-xs text-white text-xs font-mono py-1 px-3 rounded-full font-bold shadow-xs">
          {currentIndex + 1} / {totalItems}
        </div>

        {/* Prev / Next Arrows */}
        {totalItems > 1 && (
          <>
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-cocoa flex items-center justify-center shadow-md active:scale-90 transition-all cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-cocoa flex items-center justify-center shadow-md active:scale-90 transition-all cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnails Row */}
      {totalItems > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {images.map((img, idx) => (
            <button
              key={img}
              type="button"
              onClick={() => {
                setCurrentIndex(idx);
                setIsPlayingVideo(false);
              }}
              className={`relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'border-toffee scale-105 shadow-md ring-2 ring-toffee/30'
                  : 'border-cocoa/15 opacity-70 hover:opacity-100'
              }`}
            >
              <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
            </button>
          ))}

          {/* Video Thumbnail */}
          {video && (
            <button
              type="button"
              onClick={() => {
                setCurrentIndex(images.length);
                setIsPlayingVideo(true);
              }}
              className={`relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 bg-cocoa flex flex-col items-center justify-center text-honey transition-all cursor-pointer ${
                isVideoIndex
                  ? 'border-toffee scale-105 shadow-md ring-2 ring-toffee/30'
                  : 'border-cocoa/15 opacity-70 hover:opacity-100'
              }`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="text-[10px] font-bold mt-1">Video</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
