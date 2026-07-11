import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Reveal, Stagger, Card } from '../components/Motion';
import { Button } from '@/components/ui/button';
import { solutions } from '../data/solutions';
import Icon from '../components/Icon';

const SITE = 'https://www.deooch.com';

export const metadata = {
  title: 'Solutions — What We Automate | Deooch',
  description:
    'Every Deooch solution is custom-built around your existing tools: invoice processing, document digitization, data entry, expenses, freight docs, healthcare admin, and bespoke workflows.',
  alternates: { canonical: '/solutions' },
};

export default function Solutions() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: solutions.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.title,
        description: s.tagline,
        provider: { '@id': `${SITE}/#organization` },
        areaServed: 'EU',
      },
    })),
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center mb-14">
            <span className="text-gradient text-sm font-semibold uppercase tracking-wide">Our Solutions</span>
            <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">What can Deooch automate for you?</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              Every solution is custom-built around your existing tools and process. Here&apos;s exactly what each one does.
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {solutions.map((s) => (
              <Card key={s.title} className="glass group rounded-2xl p-7 transition-colors hover:border-white/30">
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5">
                    <Icon name={s.icon} className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{s.title}</h2>
                    <p className="text-sm text-white">{s.tagline}</p>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {s.points.map((p, i) => (
                    <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-slate-300">
                      <span className="mt-0.5 flex-shrink-0 text-white">→</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </Stagger>

          <Reveal className="mt-16 text-center">
            <p className="mb-6 text-slate-400">Don&apos;t see your exact process? If it follows rules, we can automate it.</p>
            <Button asChild size="lg">
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
