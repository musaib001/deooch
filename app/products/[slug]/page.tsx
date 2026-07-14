import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Reveal, Stagger, Card } from '../../components/Motion';
import { productCategories, getProductCategory } from '../../data/product-categories';

const SITE = 'https://www.deooch.com';

export function generateStaticParams() {
  return productCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getProductCategory(slug);
  if (!c) return {};
  return {
    title: `${c.label} — AI Automation Products | Deooch`,
    description: c.blurb,
    alternates: { canonical: `/products/${c.slug}` },
  };
}

export default async function ProductCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getProductCategory(slug);
  if (!c) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: c.label,
    itemListElement: c.products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: p.name,
        description: p.desc,
        category: c.label,
        provider: { '@id': `${SITE}/#organization` },
        areaServed: 'EU',
      },
    })),
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      <section className="px-4 pt-20 pb-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <nav className="mb-6 text-sm text-slate-500">
              <Link href="/products" className="hover:text-white">Products</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-400">{c.label}</span>
            </nav>
            <div className="flex items-center gap-3">
              <span className="h-9 w-1.5 rounded-full" style={{ background: c.color }} />
              <div>
                <h1 className="text-4xl font-bold text-white md:text-5xl">{c.label}</h1>
                <p className="mt-1 text-lg text-slate-400">{c.blurb}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="mx-auto max-w-6xl">
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.products.map((p) => {
              const inner = (
                <>
                  <h2 className="text-lg font-bold text-white">{p.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.desc}</p>
                  {p.href && (
                    <span className="mt-4 inline-block text-sm font-semibold text-white">Learn more →</span>
                  )}
                </>
              );
              return (
                <Card key={p.name} className="glass rounded-2xl p-6 transition-colors hover:border-white/30">
                  {p.href ? <Link href={p.href} className="block">{inner}</Link> : inner}
                </Card>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Other categories */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">Other product areas</p>
          <div className="flex flex-wrap gap-2.5">
            {productCategories.filter((o) => o.slug !== c.slug).map((o) => (
              <Link
                key={o.slug}
                href={`/products/${o.slug}`}
                className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:text-white hover:border-white/30"
              >
                <span className="h-2 w-2 rounded-full" style={{ background: o.color }} />
                {o.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <Reveal className="mx-auto max-w-3xl rounded-3xl glass border-white/15 p-10 text-center">
          <h2 className="text-2xl font-bold text-white">See one built on your own process</h2>
          <p className="mt-2 text-slate-400">Send us one real workflow and we&apos;ll build a working demo of it — free.</p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-[#f5871f] px-7 py-3.5 font-semibold text-[#1a1206] transition hover:bg-[#ff9a33]"
          >
            Book a free consultation
          </Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
