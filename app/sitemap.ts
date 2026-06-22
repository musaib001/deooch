import type { MetadataRoute } from 'next';

const base = 'https://www.deooch.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/how-it-works', '/case-studies', '/about', '/contact', '/privacy', '/impressum'];
  const now = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
