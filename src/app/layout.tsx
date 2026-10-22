import type { Metadata, Viewport } from 'next';
import { Fraunces, Figtree, Shantell_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AnnouncementStrip, CurtainIntro } from '@/components/layout/AnnouncementStrip';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
});

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
  display: 'swap',
});

const shantell = Shantell_Sans({
  variable: '--font-shantell',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#fffdf8',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://puppy.instabizweb.com'),
  title: {
    default: 'TeddyPups U.A.E. | Dubai Teacup & Teddy-Bear Puppy Showroom',
    template: '%s | TeddyPups U.A.E.',
  },
  description:
    'Dubai’s premier teacup, miniature, and teddy-bear puppy showroom in Downtown Dubai. Ethically raised, vet-certified puppies ready for same-day adoption and worldwide flight delivery.',
  keywords: [
    'TeddyPups Dubai',
    'teacup puppies Dubai',
    'Maltipoo Dubai',
    'Pomeranian Dubai',
    'Bichon Frise UAE',
    'Korean teacup puppy',
    'puppy showroom Downtown Dubai',
  ],
  applicationName: 'TeddyPups U.A.E.',
  authors: [{ name: 'TeddyPups U.A.E.' }],
  generator: 'Next.js',
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://puppy.instabizweb.com',
    siteName: 'TeddyPups U.A.E.',
    title: 'TeddyPups U.A.E. | Dubai Teacup & Teddy-Bear Puppy Showroom',
    description:
      'Meet adorable teacup Maltipoos, Pomeranians, Poodles, and Bichons in our Downtown Dubai showroom. All puppies are vet-checked and microchipped with a full health guarantee.',
    images: [
      {
        url: 'https://puppy.instabizweb.com/media/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TeddyPups U.A.E. Showroom Puppies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeddyPups U.A.E. | Dubai Puppy Showroom',
    description: 'Dubai’s sanctuary for teacup and teddy-bear puppies. Every puppy is family.',
    images: ['https://puppy.instabizweb.com/media/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${figtree.variable} ${shantell.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-milk text-cocoa antialiased selection:bg-honey selection:text-cocoa">
        {/* Skip to Content for Accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-cocoa focus:text-milk focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Intro Curtain */}
        <CurtainIntro />

        {/* Sticky Header with Announcement */}
        <div className="fixed top-0 inset-x-0 z-40">
          <AnnouncementStrip />
          <Header />
        </div>

        {/* Main Content Area (padding-top accounts for header + announcement strip) */}
        <main id="main" className="flex-1 pt-[calc(var(--header-h)+28px)] pb-16 lg:pb-0">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Widgets */}
        <FloatingWhatsApp />
        <MobileBottomBar />
      </body>
    </html>
  );
}
