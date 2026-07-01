import type { MetadataRoute } from 'next';
import { posts } from './blog/posts';

const base = 'https://www.deooch.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/solutions', '/how-it-works', '/case-studies', '/about', '/blog', ...posts.map((p) => `/blog/${p.slug}`), '/compare/automation-agency-vs-diy', '/support', '/contact', '/privacy', '/impressum'];
  const now = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
