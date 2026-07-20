import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import CaseStudyCard from './components/CaseStudyCard';
import Testimonial, { HL } from './components/Testimonial';
import WorkflowDemo from './components/WorkflowDemo';
import Hero from './components/Hero';
import { Reveal, Stagger, Card } from './components/Motion';
import { Button } from '@/components/ui/button';
import { solutions as services } from './data/solutions';
import LogoMarquee from './components/LogoMarquee';
import Pricing from './components/Pricing';
import Icon from './components/Icon';
import ProductSuite from './components/ProductSuite';
import FeaturedForms from './components/FeaturedForms';
import {
  Zap, Brain, Share2, UserCheck, Clock, ShieldCheck, TrendingDown,
  Lock, FileText, ReceiptText, ScanText, Truck,
} from 'lucide-react';

export const metadata = {
  title: 'Deooch — Done-For-You AI Automation Agency for Any Business Process',
  description: 'Berlin-based, GDPR-compliant AI automation agency for SMBs. We build AI agents that run your repetitive workflows end to end — invoicing, marketing & sales ops, logistics, or any custom process. Clients save 28+ hours/month at 99%+ accuracy. Free working demo of your process.',
};

const steps = [
  { Ico: Zap, title: 'Trigger', body: 'A document, event, email, or schedule kicks it off.' },
  { Ico: Brain, title: 'AI understands', body: 'Reads the context and decides what needs to happen.' },
  { Ico: Share2, title: 'Acts across your tools', body: 'Updates your CRM, ERP, accounting, or any connected system.' },
  { Ico: UserCheck, title: 'Humans handle exceptions', body: 'Only uncertain cases reach a person — nothing is guessed.' },
];

const faqs = [
  {
    q: 'How much does an automation cost?',
    a: 'Most automations are a simple monthly subscription — between €10 and €50/month depending on complexity and volume, with no large upfront build fee. We agree on the exact plan in the proposal before any work starts, so there are no hourly surprises.',
  },
  {
    q: 'How long until it\'s up and running?',
    a: 'Most automations go live in 2-4 weeks from the first call. Simpler workflows can be faster; complex multi-system integrations take a little longer. We give you a firm timeline in the proposal.',
  },
  {
    q: 'Will this work with the tools we already use?',
    a: 'Yes. We build around your existing stack — QuickBooks, Xero, HubSpot, Salesforce, Google Workspace, Excel, custom databases, and most other tools. If it has an API or an inbox, we can usually connect to it.',
  },
  {
    q: 'Is my data safe?',
    a: 'Your data stays within your systems wherever possible, encrypted in transit and at rest. We follow GDPR practices and never sell or share your data. Anything the AI is unsure about is flagged for human review rather than guessed.',
  },
  {
    q: 'What if the automation makes a mistake?',
    a: 'Every automation is built with a confidence threshold — uncertain cases are routed to a human instead of processed blindly. We also run alongside your manual process first, then cut over once accuracy is proven. And our results guarantee covers fixes at no extra cost.',
  },
  {
    q: 'We\'re a small team — is this overkill for us?',
    a: 'Not at all. Small teams feel repetitive work the most because every hour counts. Even automating one process — invoices, leads, or expenses — can give a few hours back every week. Start small, expand when you see the ROI.',
  },
  {
    q: 'What do you need from us to get started?',
    a: 'A 30-minute discovery call and a few sample documents or data so we understand your real workflow. From there we handle the build, testing, and deployment, with a short training session for your team at the end.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Service catalog schema for search + AI answer engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://www.deooch.com/#webpage',
                url: 'https://www.deooch.com/',
                name: 'Deooch — AI Automation for Invoices, Freight Docs & Healthcare',
                isPartOf: { '@id': 'https://www.deooch.com/#website' },
                about: { '@id': 'https://www.deooch.com/#organization' },
                dateModified: '2026-07-01',
              },
              {
                '@type': 'ItemList',
                itemListElement: services.map((s, i) => ({
                  '@type': 'ListItem',
                  position: i + 1,
                  item: {
                    '@type': 'Service',
                    name: s.title,
                    description: s.tagline,
                    provider: { '@id': 'https://www.deooch.com/#organization' },
                    areaServed: 'EU',
                  },
                })),
              },
            ],
          }),
        }}
      />
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Trusted by — animated logo marquee */}
      <LogoMarquee />

      {/* How it actually works — process-agnostic 4-step model */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-4">
            <span className="text-gradient font-semibold uppercase tracking-wide text-sm">How It Actually Works</span>
            <h2 className="text-4xl font-bold text-white mt-2">One model, any repetitive process</h2>
            <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
              Invoicing, marketing, warehouse ops, or something only your business does — every automation we build runs the same four steps.
            </p>
          </Reveal>
          <Stagger className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
            {steps.map(({ Ico, title, body }, i) => (
              <Card key={title} className="glass p-6 rounded-2xl relative">
                <span className="absolute top-5 right-5 text-sm font-bold text-slate-600">0{i + 1}</span>
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-4">
                  <Ico className="h-6 w-6 text-white" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{body}</p>
              </Card>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Interactive workflow demo */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-10">
            <span className="text-gradient font-semibold uppercase tracking-wide text-sm">See It In Action</span>
            <h2 className="text-4xl font-bold text-white mt-2">Watch the Busywork Disappear</h2>
            <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
              Pick a workflow, hit run, and watch what takes your team hours happen in minutes.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <WorkflowDemo />
          </Reveal>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-4xl font-bold text-center text-white mb-4">
              Why Choose Deooch?
            </h2>
            <p className="text-center text-slate-400 mb-12 text-lg max-w-2xl mx-auto">
              Manual, repetitive work drains your team and your margins. We make it disappear.
            </p>
          </Reveal>
          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass p-8 rounded-2xl hover:border-white/30 transition-colors">
              <div className="w-14 h-14 bg-white/10 border border-white/15 rounded-xl flex items-center justify-center mb-4"><Clock className="h-7 w-7 text-white" aria-hidden /></div>
              <h3 className="text-2xl font-bold text-white mb-3">Save Time</h3>
              <p className="text-slate-300">
                Eliminate hours of manual data entry, invoice processing, and document scanning. Your team focuses on growth instead of busywork.
              </p>
            </Card>

            <Card className="glass p-8 rounded-2xl hover:border-white/30 transition-colors">
              <div className="w-14 h-14 bg-white/10 border border-white/15 rounded-xl flex items-center justify-center mb-4"><ShieldCheck className="h-7 w-7 text-white" aria-hidden /></div>
              <h3 className="text-2xl font-bold text-white mb-3">Zero Errors</h3>
              <p className="text-slate-300">
                AI-powered automation with built-in validation ensures consistent, accurate processing. No human mistakes, no missing data.
              </p>
            </Card>

            <Card className="glass p-8 rounded-2xl hover:border-white/30 transition-colors">
              <div className="w-14 h-14 bg-white/10 border border-white/15 rounded-xl flex items-center justify-center mb-4"><TrendingDown className="h-7 w-7 text-white" aria-hidden /></div>
              <h3 className="text-2xl font-bold text-white mb-3">Cut Costs</h3>
              <p className="text-slate-300">
                Reduce operational expenses by automating repetitive work. Scale your output without scaling your headcount.
              </p>
            </Card>
          </Stagger>
        </div>
      </section>

      {/* Works with your stack */}
      <section className="py-12 px-4">
        <Reveal className="max-w-5xl mx-auto text-center">
          <p className="text-slate-400 uppercase tracking-wider text-sm font-semibold mb-8">
            Works with the tools you already use
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['QuickBooks', 'Xero', 'NetSuite', 'Stripe', 'HubSpot', 'Salesforce', 'Google Workspace', 'Excel', 'Zapier', 'Make', 'Notion', 'Slack'].map((tool) => (
              <span key={tool} className="glass rounded-full px-5 py-2.5 text-slate-300 text-sm font-medium hover:border-white/30 hover:text-white transition">
                {tool}
              </span>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-6">…and most other tools with an API or inbox.</p>
        </Reveal>
      </section>

      {/* Security & GDPR */}
      <section className="py-16 px-4">
        <Reveal className="max-w-5xl mx-auto glass rounded-3xl p-8 md:p-10 border-white/15">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <span className="text-gradient font-semibold uppercase tracking-wide text-sm">Security &amp; Privacy</span>
              <h2 className="text-3xl font-bold text-white mt-2 mb-3">Your data is safe with us</h2>
              <p className="text-slate-300 leading-relaxed">
                We&apos;re Berlin-based and <span className="text-white font-semibold">GDPR-compliant</span> by default. Your data is encrypted in transit and at rest, processed within your own systems wherever possible, and never sold or shared. We sign DPAs and NDAs, and anything the AI is unsure about is routed to a human — never guessed.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:w-72 flex-shrink-0">
              {[
                [ShieldCheck, 'GDPR compliant'],
                [Lock, 'Encrypted end-to-end'],
                [FileText, 'DPA & NDA on request'],
                [UserCheck, 'Human-in-the-loop'],
              ].map(([Ico, label]) => {
                const C = Ico as typeof ShieldCheck;
                return (
                  <div key={label as string} className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-center flex flex-col items-center">
                    <C className="h-6 w-6 text-white mb-2" aria-hidden />
                    <p className="text-slate-300 text-xs font-medium">{label as string}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Solutions — detailed */}
      <section id="solutions" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <span className="text-gradient font-semibold uppercase tracking-wide text-sm">Our Solutions</span>
            <h2 className="text-4xl font-bold text-white mt-2">What can Deooch automate for you?</h2>
            <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
              These are common starting points — not a fixed menu. If a process follows rules, we can automate it, even if it isn&apos;t listed here. Every build is custom-fit to your existing tools.
            </p>
          </Reveal>
          <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <Card key={s.title} className="glass rounded-2xl p-7 hover:border-white/30 transition-colors group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={s.icon} className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{s.title}</h3>
                    <p className="text-white text-sm">{s.tagline}</p>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {s.points.slice(0, 4).map((p, i) => (
                    <li key={i} className="flex gap-2.5 text-slate-300 text-sm leading-relaxed">
                      <span className="text-white flex-shrink-0 mt-0.5">→</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                {s.slug && (
                  <Link
                    href={`/solutions/${s.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-white hover:underline"
                  >
                    See how it works, integrations & FAQs →
                  </Link>
                )}
              </Card>
            ))}
          </Stagger>
        </div>
      </section>

      {/* deoochform — our own live SaaS product */}
      <FeaturedForms />

      {/* Product suite — hospital operations */}
      <ProductSuite />

      {/* Case Studies Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-12">
            <span className="text-gradient font-semibold uppercase tracking-wide text-sm">Proof</span>
            <h2 className="text-4xl font-bold text-white mt-2">What results has Deooch delivered?</h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card>
              <CaseStudyCard
                icon={<ReceiptText className="h-6 w-6" aria-hidden />}
                title="Invoice Automation"
                company="B2B SaaS, Berlin (45 staff)"
                challenge="The finance team manually keyed ~520 supplier invoices a month into Xero — roughly 40 hours, with frequent duplicate payments and late-payment fees."
                solution="We built an inbox-to-Xero pipeline: invoices are auto-captured from accounts@, fields extracted with AI, validated against POs, and duplicates flagged before posting."
                result="Posting time dropped from 40 hours to under 3. Zero duplicate payments in 6 months. Finance now spends its time on forecasting."
                savings="40+ hrs"
              />
            </Card>

            <Card>
              <CaseStudyCard
                icon={<ScanText className="h-6 w-6" aria-hidden />}
                title="Document Processing"
                company="Boutique Law Firm (12 attorneys)"
                challenge="Paralegals scanned and hand-filed ~2,000 case documents monthly. Finding the right document took 15+ minutes and compliance audits were painful."
                solution="We deployed an OCR + AI classification pipeline that digitises, tags by matter and document type, extracts key dates, and makes everything full-text searchable."
                result="Filing is now instant and search takes seconds. Audit prep went from days to hours. Paralegals reclaimed ~30 hours a month for billable work."
                savings="30+ hrs"
              />
            </Card>

            <Card>
              <CaseStudyCard
                icon={<Truck className="h-6 w-6" aria-hidden />}
                title="Freight Document Automation"
                company="Logistics Forwarder, Hamburg (60 staff)"
                challenge="Ops keyed ~1,400 bills of lading, customs forms and PODs a month into the TMS by hand — slow, error-prone, and a constant source of disputed charges and demurrage."
                solution="We built an AI pipeline that reads every shipping doc, matches it against bookings, recalculates freight and duties, and posts clean entries into the TMS with mismatches flagged."
                result="Document handling dropped from ~90 hours to under 10 a month. Charge disputes fell sharply and invoices now go out the same day a load is delivered."
                savings="80+ hrs"
              />
            </Card>
          </Stagger>

          <div className="text-center">
            <Button asChild>
              <Link href="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing tiers + Guarantees */}
      <Pricing />

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-12">
            <span className="text-gradient font-semibold uppercase tracking-wide text-sm">Testimonials</span>
            <h2 className="text-4xl font-bold text-white mt-2">Loved by Busy Teams</h2>
            <p className="text-slate-400 mt-4 text-lg">Feedback from clients who got their time back.</p>
          </Reveal>
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <Testimonial
                name="Finance Manager"
                role="B2B SaaS · Berlin (45 staff)"
                initials="FM"
                color="bg-gradient-to-br from-neutral-700 to-neutral-900"
                quote={<>Deooch <HL>saved us 40 hours a month</HL> on invoice processing. The system is reliable and the team was great to work with.</>}
              />
            </Card>
            <Card>
              <Testimonial
                name="Operations Director"
                role="Boutique law firm · 12 attorneys"
                initials="OD"
                color="bg-gradient-to-br from-neutral-700 to-neutral-900"
                quote={<>We were drowning in document scanning. Within a month, our team was <HL>80% more efficient</HL>. Highly recommend.</>}
              />
            </Card>
            <Card>
              <Testimonial
                name="Ops Manager"
                role="Freight forwarder · Hamburg (60 staff)"
                initials="OM"
                color="bg-gradient-to-br from-neutral-700 to-neutral-900"
                quote={<>Our bills of lading and customs docs used to eat entire days. Deooch <HL>cut document handling by 85%</HL> and disputes dropped with it.</>}
              />
            </Card>
            <Card>
              <Testimonial
                name="Founder"
                role="Consulting firm · 8 staff"
                initials="FC"
                color="bg-gradient-to-br from-neutral-700 to-neutral-900"
                quote={<>Our finance team used to lose <HL>two full days a week</HL> on expense reports. Now it&apos;s basically zero. Game changer.</>}
              />
            </Card>
            <Card>
              <Testimonial
                name="Operations Lead"
                role="Property management firm"
                initials="OL"
                color="bg-gradient-to-br from-neutral-700 to-neutral-900"
                quote={<>Every property inquiry now lands in our CRM in minutes. We handle <HL>3x more leads</HL> with the same team.</>}
              />
            </Card>
            <Card>
              <Testimonial
                name="COO"
                role="Healthcare admin group"
                initials="CO"
                color="bg-gradient-to-br from-neutral-700 to-neutral-900"
                quote={<>Reports that took days now take hours, with <HL>100% data consistency</HL>. Our audits are painless now.</>}
              />
            </Card>
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        {/* Schema markup for Google rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }),
          }}
        />
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-12">
            <span className="text-gradient font-semibold uppercase tracking-wide text-sm">FAQ</span>
            <h2 className="text-4xl font-bold text-white mt-2">Frequently Asked Questions</h2>
          </Reveal>
          <Stagger className="space-y-3">
            {faqs.map((f) => (
              <Card key={f.q}>
                <details className="glass rounded-2xl p-6 group">
                  <summary className="flex justify-between items-center cursor-pointer text-white font-semibold list-none">
                    <span>{f.q}</span>
                    <span className="text-white text-xl transition-transform group-open:rotate-45 flex-shrink-0 ml-4">+</span>
                  </summary>
                  <p className="text-slate-300 leading-relaxed mt-4">{f.a}</p>
                </details>
              </Card>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Founder — who's behind this */}
      <section className="py-16 px-4">
        <Reveal className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-10 border-white/15">
          <span className="text-gradient font-semibold uppercase tracking-wide text-sm">Who You Work With</span>
          <div className="mt-4 flex flex-col md:flex-row gap-6 md:items-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neutral-600 to-neutral-900 flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 shadow-lg shadow-black/40">
              MK
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white">Musaib Khan</h3>
              <p className="text-white font-semibold mb-3">Founder · AI/ML engineering &amp; B2B automation · Berlin</p>
              <p className="text-slate-300 leading-relaxed">
                You work directly with the person building your automation — no account managers, no support-ticket black holes. Deooch is bootstrapped and revenue-generating, so every workflow is scoped and run hands-on.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <Link href="/about" className="text-white font-semibold hover:underline">More about Deooch →</Link>
                <a href="https://www.linkedin.com/in/musaib-khan/" target="_blank" rel="noopener noreferrer" className="text-slate-400 font-semibold hover:text-white">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <Reveal className="max-w-4xl mx-auto text-center glass rounded-3xl p-12 border-white/15">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">See It Work on Your Own Process — Free</h2>
          <p className="text-xl mb-8 text-slate-300">
            Send us one real, repetitive task and we&apos;ll build a working automation demo of it at no cost. If it saves you time, we scope the full version. No obligation.
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
