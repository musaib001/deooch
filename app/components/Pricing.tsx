import Link from 'next/link';
import { Reveal, Stagger, Card } from './Motion';
import { Button } from '@/components/ui/button';

const tiers = [
  {
    name: 'Starter',
    price: '€20–50',
    unit: '/month',
    blurb: 'One straightforward automation, built and maintained for you.',
    features: [
      'A single workflow (e.g. invoice capture or expense entry)',
      'AI extraction + validation',
      'Integration with one existing tool',
      'Email support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '€50–100',
    unit: '/month',
    blurb: 'Multiple or more complex automations across your stack.',
    features: [
      'Several workflows or a multi-step process',
      'Multi-system integrations',
      'Human-in-the-loop review + monitoring',
      'Priority support & change requests',
    ],
    cta: 'Get Started',
    highlight: true,
  },
  {
    name: 'Custom',
    price: 'Let’s talk',
    unit: '',
    blurb: 'High volume, bespoke, or regulated (healthcare, freight at scale).',
    features: [
      'Tailored scope & SLAs',
      'Dedicated build + onboarding',
      'DPA / NDA and compliance review',
      'Ongoing optimisation',
    ],
    cta: 'Contact Us',
    highlight: false,
  },
];

const guarantees: [string, string][] = [
  ['Results or Money Back', 'If it doesn’t hit the agreed targets within 30 days, we fix it at no extra cost — or you don’t pay.'],
  ['99%+ Accuracy', 'Built to human-level reliability, with uncertain cases flagged for review rather than guessed.'],
  ['Data Security', 'Encrypted in transit and at rest. We work within your systems and follow GDPR practices.'],
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-12">
          <span className="text-gradient font-semibold uppercase tracking-wide text-sm">Pricing</span>
          <h2 className="text-4xl font-bold text-white mt-2">Simple monthly pricing</h2>
          <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
            Pick a starting point — the exact price depends on complexity and volume, agreed before any work starts.
            No large upfront fee.
          </p>
        </Reveal>

        <Stagger className="grid md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((t) => (
            <Card
              key={t.name}
              className={`glass rounded-2xl p-8 flex flex-col ${
                t.highlight ? 'border-white/40 ring-1 ring-white/20' : 'hover:border-white/30'
              } transition-colors`}
            >
              {t.highlight && (
                <span className="self-start mb-3 text-xs font-semibold uppercase tracking-wide bg-white text-black rounded-full px-3 py-1">
                  Most popular
                </span>
              )}
              <h3 className="text-xl font-bold text-white">{t.name}</h3>
              <div className="mt-3 mb-1">
                <span className="text-4xl font-bold text-white">{t.price}</span>
                <span className="text-slate-400 text-sm">{t.unit}</span>
              </div>
              <p className="text-slate-400 text-sm mb-6">{t.blurb}</p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-slate-300 text-sm leading-relaxed">
                    <span className="text-white flex-shrink-0 mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant={t.highlight ? 'default' : 'glass'} className="w-full">
                <Link href="/contact">{t.cta}</Link>
              </Button>
            </Card>
          ))}
        </Stagger>

        <Reveal className="mt-16 text-center mb-8">
          <h3 className="text-2xl font-bold text-white">Backed by guarantees</h3>
        </Reveal>
        <Stagger className="grid md:grid-cols-3 gap-6">
          {guarantees.map(([title, body]) => (
            <Card key={title} className="glass rounded-2xl p-6 border-t-2 border-t-white/20">
              <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
            </Card>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
