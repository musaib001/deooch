import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Reveal, Stagger, Card } from '../components/Motion';
import { productCategories } from '../data/product-categories';
import FeaturedForms from '../components/FeaturedForms';

const SITE = 'https://www.deooch.com';

export const metadata = {
  title: 'Products — AI Automation Suites for Every Team | Deooch',
  description:
    'Explore Deooch product suites: hospital management, AI agents, document automation, freight & logistics, finance & expense, and marketing & sales ops — each with purpose-built products.',
  alternates: { canonical: '/products' },
};

export default function Products() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: productCategories.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: c.label,
        description: c.blurb,
        url: `${SITE}/products/${c.slug}`,
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
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-gradient text-sm font-semibold uppercase tracking-wide">Products</span>
          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">Automation products for every team</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Purpose-built products across six areas — from hospital operations to AI agents. Pick a suite,
            or ask us to build a custom automation around your exact process.
          </p>
        </Reveal>
      </section>

      <FeaturedForms />

      <section className="px-4 pb-12">
        <div className="mx-auto max-w-6xl">
          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((c) => (
              <Card key={c.slug} className="glass rounded-2xl p-7 transition-colors hover:border-white/30">
                <Link href={`/products/${c.slug}`} className="block">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-7 w-1.5 rounded-full" style={{ background: c.color }} />
                    <h2 className="text-xl font-bold text-white">{c.label}</h2>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{c.blurb}</p>
                  <ul className="mt-4 space-y-1.5">
                    {c.products.slice(0, 4).map((p) => (
                      <li key={p.name} className="flex items-center gap-2 text-sm text-slate-300">
                        <span className="h-1 w-1 rounded-full bg-slate-500 flex-shrink-0" />
                        {p.name}
                      </li>
                    ))}
                    {c.products.length > 4 && (
                      <li className="text-sm text-slate-500">+{c.products.length - 4} more</li>
                    )}
                  </ul>
                  <span className="mt-5 inline-block text-sm font-semibold text-white">
                    View {c.label} →
                  </span>
                </Link>
              </Card>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-4 py-16">
        <Reveal className="mx-auto max-w-3xl rounded-3xl glass border-white/15 p-10 text-center">
          <h2 className="text-2xl font-bold text-white">Don&apos;t see your exact process?</h2>
          <p className="mt-2 text-slate-400">If it follows rules, we can build it. Tell us the workflow and we&apos;ll scope a custom automation.</p>
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
