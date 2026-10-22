'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { puppies } from '@/data/puppies';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useScrollReveal } from '@/lib/useScrollAnimation';

export function MeetThePupsSection() {
  const featured = puppies.slice(0, 8);
  const [ref, isVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="py-16 sm:py-24 bg-milk overflow-hidden" ref={ref}>
      <div className="max-w-[110rem] mx-auto gutter">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <AnimatedSection variant="fade-up">
            <div>
              <h2 className="font-plush font-extrabold text-4xl sm:text-6xl text-cocoa leading-[1.1] tracking-normal">
                Meet the pups
              </h2>
              <p className="mt-3 text-cocoa/75 text-base sm:text-lg max-w-xl font-medium">
                Real puppies, real photos, looking for their families right now.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fade-left" delay={200}>
            <Link
              href="/puppies"
              className="inline-flex items-center gap-2 py-3.5 px-7 rounded-full bg-cocoa text-milk font-bold text-sm hover:bg-cocoa-soft transition-all shadow-md hover:shadow-xl self-start sm:self-auto shrink-0"
            >
              <span>See all available puppies</span>
            </Link>
          </AnimatedSection>
        </div>

        {/* Door-shaped cards carousel */}
        <div className="relative">
          {/* Wooden floor base */}
          <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-b from-[#8B5E3C] to-[#6B3F1F] rounded-b-3xl z-0" />

          {/* Cards row with horizontal scroll */}
          <div className="relative z-10 flex gap-5 sm:gap-6 overflow-x-auto pb-20 pt-4 hero-carousel snap-x snap-mandatory">
            {featured.map((puppy, idx) => (
              <DoorCard key={puppy.slug} puppy={puppy} index={idx} isVisible={isVisible} />
            ))}
          </div>

          {/* Animated walking mascot — peeks up from behind the wooden base */}
          <div className="absolute bottom-10 sm:bottom-14 left-0 right-0 z-[1] overflow-hidden pointer-events-none opacity-60">
            <div className="animate-mascotWalk flex items-center">
              <div className="w-14 sm:w-16 rounded-2xl overflow-hidden border-2 border-honey/80 shadow-sm bg-white">
                <Image
                  src="/mascot/teddy-walking.jpg"
                  alt="TeddyPups mascot walking"
                  width={80}
                  height={54}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DoorCard({ puppy, index, isVisible }: { puppy: typeof puppies[0]; index: number; isVisible: boolean }) {
  const displayImage = puppy.images[0] || '/images/puppies/max-1.jpg';

  return (
    <Link
      href={`/puppies/${puppy.slug}`}
      className="group flex flex-col items-center gap-3 shrink-0 snap-center"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.6s ease-out ${index * 0.1}s`,
      }}
    >
      {/* Puppy name and info */}
      <div className="text-center min-h-[70px] flex flex-col justify-end">
        <h3 className="font-plush font-extrabold text-lg sm:text-xl text-cocoa leading-tight tracking-normal">
          {puppy.breed === 'Maltipoo' && puppy.name !== 'Max' ? (
            <>
              {puppy.name}
              <span className="block text-xs sm:text-sm font-semibold text-toffee">
                {puppy.breed}
              </span>
            </>
          ) : (
            puppy.name
          )}
        </h3>
        <p className="text-xs sm:text-sm text-cocoa/60 mt-0.5 leading-snug">
          {puppy.breed}, {puppy.gender}, {puppy.age}
          {puppy.hasVideo ? ', with video' : ''}
        </p>
      </div>

      {/* Door-shaped card */}
      <div className="relative w-36 sm:w-44 h-52 sm:h-64">
        {/* Door frame - the arch shape */}
        <div className="absolute inset-0 bg-[#8B5E3C] rounded-t-full overflow-hidden border-4 border-[#6B3F1F] shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
          {/* Photo inside the door */}
          <div className="absolute inset-1 rounded-t-full overflow-hidden bg-honey/40">
            <Image
              src={displayImage}
              alt={`${puppy.name} - ${puppy.breed}`}
              fill
              sizes="(max-width: 640px) 144px, 176px"
              className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
            />
          </div>

          {/* Door handle */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#d4a93e] border border-[#b8912e] shadow-sm" />
        </div>

        {/* Available badge */}
        {puppy.status === 'available' && (
          <div className="absolute -top-2 -right-2 sm:-right-3 z-10">
            <span className="inline-block bg-honey text-cocoa text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full border border-cocoa/20 shadow-md animate-availablePulse whitespace-nowrap">
              Available
            </span>
          </div>
        )}

        {/* Paw prints decorative */}
        <div className="absolute -bottom-1 -left-2 opacity-30 pointer-events-none">
          <svg viewBox="0 0 24 24" fill="#8B5E3C" width="16" height="16">
            <circle cx="6.5" cy="8.5" r="2.5" />
            <circle cx="12" cy="5" r="2.5" />
            <circle cx="17.5" cy="8.5" r="2.5" />
            <path d="M12 11c-3.2 0-5.5 2.2-5.5 5 0 2.2 2 4 5.5 4s5.5-1.8 5.5-4c0-2.8-2.3-5-5-5z" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
