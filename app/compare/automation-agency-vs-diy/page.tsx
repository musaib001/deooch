import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Reveal } from '../../components/Motion';
import { Button } from '@/components/ui/button';
import { Check, Minus, X } from 'lucide-react';

const SITE = 'https://www.deooch.com';
const URL = `${SITE}/compare/automation-agency-vs-diy`;
const UPDATED = '2026-07-01';

export const metadata = {
  title: 'Automation Agency vs DIY Tools (Zapier, Make): Which Is Right? (2026)',
  description:
    'Should you build automations yourself with Zapier/Make or hire a done-for-you agency? An honest, side-by-side comparison for SMBs — setup effort, accuracy, cost, and when each wins.',
  alternates: { canonical: '/compare/automation-agency-vs-diy' },
};

// TODO(verify): confirm competitor pricing/features from public sources before relying on cells marked ⚠.
// Row shape: [feature, deooch, diy] where values are 'yes' | 'partial' | 'no' | string
const matrix: [string, string, string][] = [
  ['Setup effort', 'We build it for you', 'You build & maintain it'],
  ['AI document extraction (OCR + LLM)', 'yes', 'partial'],
  ['Edge cases, validation & error handling', 'yes', 'no'],
  ['Human-in-the-loop review on low confidence', 'yes', 'no'],
  ['Time to live', '2–4 weeks (we do the work)', 'Hours to weeks (your time)'],
  ['Ongoing maintenance', 'Optional retainer', 'You own it'],
  ['Typical cost', '€10–€50/month subscription', '⚠ ~€20–100+/mo + your hours'],
  ['Best for', 'Complex, high-stakes ops', 'Simple, low-risk automations'],
];

const faqs = [
  {
    q: 'Is Zapier or Make enough for invoice processing?',
    a: 'For a handful of simple, predictable invoices, a Zapier or Make workflow can work. Where DIY tools struggle is unstructured documents, varied layouts, line-item extraction, validation against your records, and duplicate detection — the parts that actually cause errors and rework. Those need AI document understanding plus a review step, which is where a done-for-you build pays off.',
  },
  {
    q: 'Why not just hire someone to set up Zapier internally?',
    a: 'You can, and for simple flows it is often the right call. The hidden cost is ownership: someone has to design it, handle the edge cases, and maintain it every time a vendor changes a format or a tool updates its API. A service absorbs that maintenance; an internal DIY setup means it lands back on your team.',
  },
  {
    q: 'When is DIY genuinely the better choice?',
    a: 'When the process is simple, low-risk, low-volume, and you have someone in-house who enjoys building automations. Moving a form submission into a spreadsheet, sending a Slack alert, or syncing two apps with clean data — DIY tools are excellent and cheap for that. We will tell you when your case is one of them.',
  },
  {
    q: 'What does Deooch do that a DIY tool does not?',
    a: 'We scope your real process, build the automation around your existing tools, add AI extraction and validation, route uncertain cases to a human, test against your live data, and hand it over trained and documented — with an optional retainer for changes. You get the outcome, not a toolkit.',
  },
];

function Cell({ value }: { value: string }) {
  if (value === 'yes')
    return (
      <span className="inline-flex items-center gap-1 text-green-400">
        <Check className="h-4 w-4" /> Yes
      </span>
    );
  if (value === 'no')
    return (
      <span className="inline-flex items-center gap-1 text-slate-500">
        <X className="h-4 w-4" /> No
      </span>
    );
  if (value === 'partial')
    return (
      <span className="inline-flex items-center gap-1 text-amber-400">
        <Minus className="h-4 w-4" /> Limited
      </span>
    );
  return <span className="text-slate-300">{value}</span>;
}

export default function Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Compare', item: `${SITE}/compare/automation-agency-vs-diy` },
          { '@type': 'ListItem', position: 3, name: 'Agency vs DIY', item: URL },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${URL}#webpage`,
        url: URL,
        name: metadata.title,
        isPartOf: { '@id': `${SITE}/#website` },
        about: { '@id': `${SITE}/#organization` },
        author: { '@id': `${SITE}/#founder` },
        dateModified: UPDATED,
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />

      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <nav className="mb-6 text-sm text-slate-500" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-slate-300">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-400">Agency vs DIY</span>
            </nav>
            <span className="text-gradient text-sm font-semibold uppercase tracking-wide">Comparison</span>
            <h1 className="mt-2 text-4xl font-bold leading-tight text-white md:text-5xl">
              Should you build automations yourself or hire an agency?
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              DIY tools like <span className="text-white">Zapier</span> and <span className="text-white">Make</span> are
              genuinely great for simple, low-stakes workflows. A done-for-you service like Deooch wins when accuracy,
              edge cases, and messy real-world documents matter — invoices, freight paperwork, patient intake. Here is an
              honest side-by-side so you can pick the right path.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Last updated {new Date(UPDATED).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              {' · '}Disclosure: Deooch is our service. We have flagged, in plain terms, where DIY tools are the better choice.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-8">
        <Reveal className="mx-auto max-w-4xl">
          <div className="glass overflow-hidden rounded-2xl">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 font-semibold text-slate-400">Feature</th>
                  <th className="p-4 font-semibold text-white">Deooch (done-for-you)</th>
                  <th className="p-4 font-semibold text-slate-300">Zapier / Make (DIY)</th>
                </tr>
              </thead>
              <tbody>
                {matrix.map(([feature, a, b], i) => (
                  <tr key={feature} className={i % 2 ? 'bg-white/[0.02]' : ''}>
                    <td className="p-4 font-medium text-slate-300">{feature}</td>
                    <td className="p-4"><Cell value={a} /></td>
                    <td className="p-4"><Cell value={b} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ⚠ Cells marked with a warning need verification against current public pricing/feature docs before you rely on
            them. Pricing accurate as of {UPDATED}.
          </p>
        </Reveal>
      </section>

      <section className="px-4 py-12">
        <Reveal className="mx-auto max-w-3xl space-y-10">
          <div>
            <h2 className="mb-3 text-2xl font-bold text-white">When DIY tools are the right call</h2>
            <p className="leading-relaxed text-slate-300">
              We will say it plainly: if your process is simple, low-volume, and low-risk, you probably do not need us.
              Sending a form submission to a spreadsheet, posting a Slack alert when a deal closes, or syncing two apps
              with already-clean data — Zapier and Make handle that beautifully, often on a free tier. If you have
              someone in-house who enjoys wiring these up and the flow will never touch a messy document, DIY keeps you
              fully in control. Buy the tool, not the service.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-2xl font-bold text-white">When a done-for-you service wins</h2>
            <p className="leading-relaxed text-slate-300">
              The moment real documents enter the picture, the maths change. Invoices arrive in hundreds of layouts.
              Freight paperwork has to be matched against bookings. A wrong number in a patient record or a duplicate
              payment is not a minor bug — it is rework, disputes, or compliance risk. DIY tools can trigger and move
              data, but they do not understand a messy PDF, validate it against your records, or know when to stop and
              ask a human. That understanding-plus-review layer is exactly what we build, test against your live data,
              and maintain — so you get the outcome without owning the fragile parts.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="mb-8 text-center text-3xl font-bold text-white">Frequently asked questions</h2>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="glass group rounded-2xl p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-white">
                  <span>{f.q}</span>
                  <span className="ml-4 flex-shrink-0 text-xl text-blue-400 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 leading-relaxed text-slate-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <Reveal className="mx-auto max-w-3xl rounded-3xl glass border-blue-500/20 p-10 text-center md:p-12">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Not sure which side you&apos;re on?</h2>
          <p className="mb-8 text-lg text-slate-300">
            Send us one real process. We&apos;ll tell you honestly whether a DIY tool covers it — or build you a free
            working demo if it doesn&apos;t. No obligation either way.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get a Free Assessment</Link>
          </Button>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
