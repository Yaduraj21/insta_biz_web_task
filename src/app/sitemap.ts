import { MetadataRoute } from 'next';
import { puppies } from '@/data/puppies';
import { goneHomePuppies } from '@/data/gone-home';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://puppy.instabizweb.com';

  const staticRoutes = [
    '',
    '/puppies',
    '/gone-home',
    '/happy-families',
    '/how-it-works',
    '/faq',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const puppyRoutes = puppies.map((p) => ({
    url: `${baseUrl}/puppies/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const goneHomeRoutes = goneHomePuppies.map((p) => ({
    url: `${baseUrl}/puppies/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...puppyRoutes, ...goneHomeRoutes];
}
