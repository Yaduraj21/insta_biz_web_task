export interface Puppy {
  slug: string;
  name: string;
  breed: string;
  gender: 'boy' | 'girl' | 'boy & girl';
  age: string;
  origin: 'local' | 'imported';
  hasVideo: boolean;
  images: string[];
  video?: string;
  status: 'available' | 'gone-home';
  description?: string;
  expectedAdultWeight?: string;
  color?: string;
  vaccinated?: boolean;
  microchipped?: boolean;
  passport?: boolean;
  healthGuarantee?: string;
  badge?: string;
  readyDate?: string;
  originCountry?: string;
  accentColor?: string;
}

export interface GoneHomePuppy {
  slug: string;
  name: string;
  breed: string;
  gender: string;
  originLabel: 'TeddyPups' | 'Dubai showroom' | 'Imported for you';
  image: string;
  homeCity?: string;
  year?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'health' | 'process' | 'delivery' | 'breeds' | 'aftercare';
}

export interface FamilyPhoto {
  id: string;
  src: string;
  ownerName: string;
  puppyName: string;
  breed: string;
  location: string;
  quote?: string;
  date?: string;
}

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}
