import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Reveal, Stagger, Card } from '../../components/Motion';
import { Button } from '@/components/ui/button';
import { solutions, getSolution } from '../../data/solutions';
import Icon from '../../components/Icon';

const SITE = 'https://www.deooch.com';

export function generateStaticParams() {
  return solutions.filter((s) => s.slug).map((s) => ({ slug: s.slug! }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) return {};
  return {
    title: `${s.title} — AI Automation | Deooch`,
    description: s.painPoint ?? s.tagline,
    alternates: { canonical: `/solutions/${s.slug}` },
  };
}

export default async function SolutionDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: s.title,
        description: s.painPoint ?? s.tagline,
        provider: { '@id': `${SITE}/#organization` },
        areaServed: 'EU',
      },
      s.faqs && {
        '@type': 'FAQPage',
        mainEntity: s.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ].filter(Boolean),
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <nav className="mb-6 text-sm text-slate-500">
              <Link href="/solutions" className="hover:text-white">Solutions</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-400">{s.title}</span>
            </nav>

            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5">
                <Icon name={s.icon} className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white md:text-4xl">{s.title}</h1>
                <p className="text-white">{s.tagline}</p>
              </div>
            </div>

            {s.painPoint && (
              <p className="text-lg leading-relaxed text-slate-300">{s.painPoint}</p>
            )}
          </Reveal>
        </div>
      </section>

      {/* What's included */}
      <section className="px-4 pb-4">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="mb-5 text-2xl font-bold text-white">What&apos;s included</h2>
          </Reveal>
          <Stagger className="glass rounded-2xl p-7">
            <ul className="space-y-3">
              {s.points.map((p, i) => (
                <li key={i} className="flex gap-2.5 text-slate-300 leading-relaxed">
                  <span className="mt-0.5 flex-shrink-0 text-white">→</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Stagger>
        </div>
      </section>

      {/* How it works */}
      {s.steps && (
        <section className="px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="mb-8 text-2xl font-bold text-white">How it works</h2>
            </Reveal>
            <Stagger className="space-y-4">
              {s.steps.map((step, i) => (
                <Card key={step.title} className="glass flex gap-4 rounded-2xl p-6">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-white">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300">{step.detail}</p>
                  </div>
                </Card>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* Integrations */}
      {s.integrations && (
        <section className="px-4 pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Works with
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {s.integrations.map((tool) => (
                <span key={tool} className="glass rounded-full px-5 py-2.5 text-sm font-medium text-slate-300">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Proof */}
      {s.proof && (
        <section className="px-4 pb-16">
          <Reveal className="mx-auto max-w-3xl">
            <div className="glass rounded-3xl border-white/15 p-8 md:p-10">
              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
                <p className="text-4xl font-bold text-gradient">{s.proof.stat}</p>
                <p className="text-slate-400">{s.proof.statLabel}</p>
              </div>
              <p className="text-slate-300 leading-relaxed">{s.proof.note}</p>
              {s.proof.quote && (
                <blockquote className="mt-6 border-l-2 border-white/20 pl-5">
                  <p className="text-slate-200 italic leading-relaxed">&ldquo;{s.proof.quote}&rdquo;</p>
                  {s.proof.quoteSource && (
                    <cite className="mt-2 block text-sm not-italic text-slate-500">— {s.proof.quoteSource}</cite>
                  )}
                </blockquote>
              )}
            </div>
          </Reveal>
        </section>
      )}

      {/* FAQs */}
      {s.faqs && (
        <section className="px-4 pb-20">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="mb-6 text-2xl font-bold text-white">Common questions</h2>
            </Reveal>
            <div className="space-y-3">
              {s.faqs.map((f) => (
                <details key={f.q} className="glass group rounded-2xl p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-white">
                    <span>{f.q}</span>
                    <span className="ml-4 flex-shrink-0 text-xl text-white transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-slate-300">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-4 pb-20">
        <Reveal className="mx-auto max-w-3xl rounded-3xl glass border-white/15 p-10 text-center">
          <h2 className="mb-3 text-2xl font-bold text-white">See this built on your own process</h2>
          <p className="mb-6 text-slate-400">
            Send us one real example and we&apos;ll build a working demo of it — free, no obligation.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get My Free Demo</Link>
          </Button>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
