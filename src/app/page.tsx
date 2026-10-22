import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { MeetThePupsSection } from '@/components/sections/home/MeetThePupsSection';
import { TwoWaysSection } from '@/components/sections/home/TwoWaysSection';
import { JourneySection } from '@/components/sections/home/JourneySection';
import { PassportSection } from '@/components/sections/home/PassportSection';
import { HappyFamiliesSection } from '@/components/sections/home/HappyFamiliesSection';
import { FAQPreviewSection } from '@/components/sections/home/FAQPreviewSection';
import { FinalCTASection } from '@/components/sections/home/FinalCTASection';

export const metadata: Metadata = {
  title: 'TeddyPups U.A.E. | Dubai Showroom & Rare Teacup Puppies',
  description:
    'Dubai’s premier teacup, miniature, and teddy-bear puppy showroom. Meet adorable Maltipoos, Pomeranians, Toy Poodles, and Bichons in Downtown Dubai. 10-year health guarantee.',
  alternates: {
    canonical: 'https://puppy.instabizweb.com',
  },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PetStore',
    name: 'TeddyPups U.A.E.',
    description:
      'Dubai showroom offering teacup and teddy-bear puppies with veterinary health guarantees and worldwide delivery.',
    url: 'https://puppy.instabizweb.com',
    telephone: '+971501234567',
    email: 'teddypupsadmin@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Downtown Dubai, Boulevard Plaza',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '25.1972',
      longitude: '55.2744',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '10:00',
        closes: '22:00',
      },
    ],
    priceRange: '$$$',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <MeetThePupsSection />
      <TwoWaysSection />
      <JourneySection />
      <PassportSection />
      <HappyFamiliesSection />
      <FAQPreviewSection />
      <FinalCTASection />
    </>
  );
}
