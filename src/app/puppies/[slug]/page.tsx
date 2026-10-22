import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { puppies } from '@/data/puppies';
import { goneHomePuppies } from '@/data/gone-home';
import { PuppyGallery } from '@/components/sections/puppy-detail/PuppyGallery';
import { PuppyEnquiryForm } from '@/components/sections/puppy-detail/PuppyEnquiryForm';
import { PawIcon } from '@/components/ui/PawIcon';
import { getPuppyWhatsAppUrl } from '@/lib/whatsapp';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const availableParams = puppies.map((p) => ({ slug: p.slug }));
  const goneHomeParams = goneHomePuppies.map((p) => ({ slug: p.slug }));
  return [...availableParams, ...goneHomeParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const puppy = puppies.find((p) => p.slug === slug);

  if (!puppy) {
    const gone = goneHomePuppies.find((p) => p.slug === slug);
    if (gone) {
      return {
        title: `${gone.name} (${gone.breed}) — Gone Home`,
        description: `${gone.name} the ${gone.breed} has gone home to ${gone.homeCity || 'Dubai'}. Browse available teacup puppies at TeddyPups U.A.E.`,
      };
    }
    return { title: 'Puppy Not Found' };
  }

  const title = `${puppy.name} — ${puppy.breed} (${puppy.gender === 'boy' ? 'Boy' : 'Girl'}) | TeddyPups Dubai`;
  const description = `${puppy.name} is an adorable, vet-checked ${puppy.breed} available in Dubai. Age: ${puppy.age}. 10-year health guarantee & international microchip included.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://puppy.instabizweb.com/puppies/${slug}`,
    },
    openGraph: {
      title,
      description,
      images: puppy.images[0] ? [{ url: puppy.images[0] }] : [],
    },
  };
}

export default async function PuppyDetailPage({ params }: Props) {
  const { slug } = await params;
  const puppyIndex = puppies.findIndex((p) => p.slug === slug);
  const puppy = puppies[puppyIndex];

  // If puppy is in gone-home list
  if (!puppy) {
    const gone = goneHomePuppies.find((p) => p.slug === slug);
    if (!gone) {
      notFound();
    }
    return (
      <div className="min-h-screen bg-milk py-16">
        <div className="max-w-3xl mx-auto gutter text-center">
          <span className="text-5xl block mb-4">🏠</span>
          <h1 className="font-plush font-extrabold text-4xl text-cocoa">
            {gone.name} Has Gone Home!
          </h1>
          <p className="mt-3 text-cocoa/80 text-lg">
            This precious {gone.breed} ({gone.gender === 'boy' ? 'boy' : 'girl'}) has already been welcomed by their forever family in {gone.homeCity || 'Dubai'}.
          </p>
          <div className="mt-8">
            <Link
              href="/puppies"
              className="py-3 px-8 rounded-full bg-cocoa text-milk font-bold text-sm hover:bg-cocoa-soft shadow-md"
            >
              Browse Currently Available Puppies →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Prev / Next puppy
  const prevPuppy = puppies[(puppyIndex - 1 + puppies.length) % puppies.length];
  const nextPuppy = puppies[(puppyIndex + 1) % puppies.length];

  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://puppy.instabizweb.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Puppies',
        item: 'https://puppy.instabizweb.com/puppies',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: puppy.name,
        item: `https://puppy.instabizweb.com/puppies/${puppy.slug}`,
      },
    ],
  };

  return (
    <div className="bg-milk min-h-screen pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      {/* Breadcrumb Bar */}
      <nav aria-label="Breadcrumbs" className="bg-honey/30 py-3 border-b border-cocoa/10">
        <div className="max-w-[110rem] mx-auto gutter flex items-center gap-2 text-xs font-semibold text-cocoa/70">
          <Link href="/" className="hover:text-toffee">Home</Link>
          <span>/</span>
          <Link href="/puppies" className="hover:text-toffee">Puppies</Link>
          <span>/</span>
          <span className="text-cocoa font-bold">{puppy.name}</span>
        </div>
      </nav>

      {/* Main Details Container */}
      <div className="max-w-[110rem] mx-auto gutter pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Gallery & Story (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Gallery */}
            <PuppyGallery
              images={puppy.images}
              video={puppy.video}
              puppyName={puppy.name}
            />

            {/* Puppy Title & Description */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-cocoa/15 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <span className="font-scrawl text-sm font-bold text-toffee">
                    {puppy.breed} • {puppy.gender === 'boy' ? 'Boy ♂' : 'Girl ♀'}
                  </span>
                  <h1 className="font-plush font-extrabold text-3xl sm:text-4xl text-cocoa mt-0.5">
                    Meet {puppy.name}
                  </h1>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-honey text-toffee-ink font-bold text-xs py-1 px-3 rounded-full border border-cocoa/15">
                    {puppy.origin === 'local' ? '🇦🇪 Dubai Showroom' : '✈️ Imported'}
                  </span>
                  {puppy.badge && (
                    <span className="bg-amber text-cocoa font-extrabold text-xs py-1 px-3 rounded-full">
                      {puppy.badge}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-cocoa/80 text-sm sm:text-base leading-relaxed">
                {puppy.description}
              </p>
            </div>

            {/* Specifications Table */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-cocoa/15 shadow-xs">
              <h2 className="font-plush font-extrabold text-2xl text-cocoa mb-5 flex items-center gap-2">
                <PawIcon className="w-5 h-5 text-toffee" />
                <span>Puppy Passport Details</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-honey/20 border border-cocoa/10 flex justify-between">
                  <span className="text-cocoa/60 font-semibold">Breed</span>
                  <span className="font-bold text-cocoa">{puppy.breed}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-honey/20 border border-cocoa/10 flex justify-between">
                  <span className="text-cocoa/60 font-semibold">Gender</span>
                  <span className="font-bold text-cocoa capitalize">{puppy.gender}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-honey/20 border border-cocoa/10 flex justify-between">
                  <span className="text-cocoa/60 font-semibold">Current Age</span>
                  <span className="font-bold text-cocoa">{puppy.age}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-honey/20 border border-cocoa/10 flex justify-between">
                  <span className="text-cocoa/60 font-semibold">Expected Weight</span>
                  <span className="font-bold text-cocoa">{puppy.expectedAdultWeight || '1.8 - 2.5 kg'}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-honey/20 border border-cocoa/10 flex justify-between">
                  <span className="text-cocoa/60 font-semibold">Color &amp; Coat</span>
                  <span className="font-bold text-cocoa">{puppy.color || 'Cream / Apricot'}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-honey/20 border border-cocoa/10 flex justify-between">
                  <span className="text-cocoa/60 font-semibold">Origin Location</span>
                  <span className="font-bold text-cocoa">{puppy.originCountry || 'Dubai Showroom'}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-honey/20 border border-cocoa/10 flex justify-between">
                  <span className="text-cocoa/60 font-semibold">Vaccination Status</span>
                  <span className="font-bold text-emerald-700">✓ Up to Date</span>
                </div>
                <div className="p-3.5 rounded-xl bg-honey/20 border border-cocoa/10 flex justify-between">
                  <span className="text-cocoa/60 font-semibold">Microchip</span>
                  <span className="font-bold text-emerald-700">✓ ISO International</span>
                </div>
              </div>
            </div>

            {/* What Comes with Your Puppy */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-cocoa/15 shadow-xs">
              <h2 className="font-plush font-extrabold text-2xl text-cocoa mb-4">
                What Comes With {puppy.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-cocoa/80">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>10-Year Genetic Health Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Official Veterinary Health Certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Registered Microchip &amp; Passport</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Complete Royal Canin Starter Food Kit</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Comfort Blanket with Mama&apos;s Scent</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>24/7 Lifelong WhatsApp Care Guidance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Action & Enquiry Form (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Quick WhatsApp Action Card */}
            <div className="bg-honey/40 rounded-3xl p-6 border-2 border-cocoa/20 shadow-xs flex flex-col gap-3">
              <span className="text-xs font-bold text-toffee-ink uppercase tracking-wider">
                Direct Showroom Access
              </span>
              <h3 className="font-plush font-extrabold text-xl text-cocoa">
                Want to meet {puppy.name} today?
              </h3>
              <p className="text-xs text-cocoa/75">
                Visit our Downtown Dubai showroom or request private video footage on WhatsApp.
              </p>
              <a
                href={getPuppyWhatsAppUrl(puppy.name, puppy.breed, puppy.slug)}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-full bg-cocoa text-milk font-bold text-sm text-center flex items-center justify-center gap-2 shadow-xs hover:bg-cocoa-soft transition-all"
              >
                <span className="text-emerald-400">●</span>
                <span>Chat on WhatsApp About {puppy.name}</span>
              </a>
            </div>

            {/* Interactive Enquiry Form */}
            <PuppyEnquiryForm puppy={puppy} />

            {/* Showroom Visit Location Info */}
            <div className="bg-white rounded-3xl p-6 border-2 border-cocoa/15 shadow-xs text-xs text-cocoa/80 flex flex-col gap-2">
              <p className="font-bold text-cocoa text-sm">📍 TeddyPups Downtown Showroom</p>
              <p>Boulevard Plaza, Downtown Dubai, United Arab Emirates</p>
              <p className="text-toffee font-medium">Open Daily: 10:00 AM – 10:00 PM</p>
              <p className="text-cocoa/60">Complimentary valet &amp; private greeting lounge available.</p>
            </div>
          </div>
        </div>

        {/* Prev / Next Puppy Navigation */}
        <div className="mt-14 pt-8 border-t border-cocoa/15 flex items-center justify-between">
          <Link
            href={`/puppies/${prevPuppy.slug}`}
            className="flex items-center gap-2 text-xs sm:text-sm font-bold text-cocoa hover:text-toffee transition-colors"
          >
            <span>← Previous: {prevPuppy.name} ({prevPuppy.breed})</span>
          </Link>
          <Link
            href={`/puppies/${nextPuppy.slug}`}
            className="flex items-center gap-2 text-xs sm:text-sm font-bold text-cocoa hover:text-toffee transition-colors"
          >
            <span>Next: {nextPuppy.name} ({nextPuppy.breed}) →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
