import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import CaseStudyCard from './components/CaseStudyCard';
import Testimonial, { HL } from './components/Testimonial';

export const metadata = {
  title: 'Deooch — AI Automation for Invoices, Documents & Data Entry',
  description: 'Berlin-based AI automation service for SMBs. We automate invoice processing, document scanning, and data entry — clients save 28+ hours/month at 99%+ accuracy. Projects from €2,000.',
};

const services = [
  {
    icon: '📄',
    title: 'Invoice Processing',
    tagline: 'From inbox to accounting system — untouched by human hands.',
    points: [
      'Auto-capture invoices from email, PDF, or scans using AI document understanding (OCR + LLM extraction)',
      'Extract vendor, line items, tax, totals and PO numbers — then validate against your records',
      'Flag mismatches and duplicates for review; push clean data into QuickBooks, Xero, NetSuite or Stripe',
      'Three-way matching (PO ↔ invoice ↔ receipt) so nothing gets paid twice',
    ],
  },
  {
    icon: '📑',
    title: 'Document Scanning & Digitization',
    tagline: 'Turn paper and PDFs into searchable, structured data.',
    points: [
      'Bulk-convert contracts, forms, and records into searchable digital files',
      'AI classifies each document by type and routes it to the right folder or system',
      'Extract key fields (dates, names, amounts, clauses) into a structured database',
      'Full-text search and audit trail across everything you have ever filed',
    ],
  },
  {
    icon: '🗂️',
    title: 'Data Entry & Migration',
    tagline: 'Stop copy-pasting between systems.',
    points: [
      'Move data between spreadsheets, CRMs, ERPs and databases automatically',
      'Fill web forms and internal tools on a schedule or on trigger',
      'Clean, de-duplicate and standardise records as they move',
      'One-time migrations or always-on syncs — your choice',
    ],
  },
  {
    icon: '💳',
    title: 'Receipt & Expense Automation',
    tagline: 'Expense reports that file themselves.',
    points: [
      'Employees snap a photo; AI reads amount, date, vendor and category',
      'Auto-match to corporate card transactions and policy rules',
      'Route for approval and sync to your accounting/payroll system',
      'Real-time spend dashboards and faster reimbursements',
    ],
  },
  {
    icon: '📧',
    title: 'Email & Lead Capture',
    tagline: 'Never let an inbound lead go cold.',
    points: [
      'Parse inbound emails and web forms to extract contact and intent',
      'Enrich with company data and push straight into your CRM',
      'Trigger instant auto-replies and assign to the right rep',
      'Kick off follow-up sequences so nothing slips through',
    ],
  },
  {
    icon: '📊',
    title: 'Reporting & Custom Workflows',
    tagline: 'If it follows rules, we can automate it.',
    points: [
      'Auto-generate recurring reports from multiple data sources',
      'Extract structured data from any document or system',
      'Connect tools that don\'t talk to each other via custom integrations',
      'Bespoke automations scoped to your exact process',
    ],
  },
];

const faqs = [
  {
    q: 'How much does an automation cost?',
    a: 'Most projects land between €2,000 and €8,000 depending on complexity — a fixed one-time build fee, with an optional monthly retainer for monitoring and changes. We agree on the exact number in the proposal before any work starts, so there are no hourly surprises.',
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
      <Header />

      {/* Hero Section */}
      <section className="relative py-28 px-4 overflow-hidden">
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-sm text-slate-300">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Now taking new clients · Berlin-based
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            AI Automation That <span className="text-gradient">Pays For Itself</span> in Weeks
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed max-w-3xl mx-auto">
            We build AI automations that handle your invoices, documents, and data entry—so your team stops doing busywork and starts doing real work.
          </p>
          <p className="text-slate-400 mb-10">
            Clients average <span className="text-white font-semibold">28+ hours saved per month</span> with <span className="text-white font-semibold">99%+ accuracy</span>.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg transition text-lg shadow-lg shadow-blue-600/30"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/case-studies"
              className="glass hover:border-white/20 text-white font-semibold px-8 py-4 rounded-lg transition text-lg"
            >
              See Case Studies
            </Link>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-16 pt-10 border-t border-white/10">
            <div>
              <p className="text-4xl font-bold text-gradient">150+</p>
              <p className="text-slate-400 text-sm mt-1">Hours saved / month</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gradient">99.2%</p>
              <p className="text-slate-400 text-sm mt-1">Accuracy rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gradient">2-4 wk</p>
              <p className="text-slate-400 text-sm mt-1">To go live</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Why Choose Deooch?
          </h2>
          <p className="text-center text-slate-400 mb-12 text-lg max-w-2xl mx-auto">
            Manual, repetitive work drains your team and your margins. We make it disappear.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-2xl hover:border-blue-500/40 transition">
              <div className="w-14 h-14 bg-blue-500/15 border border-blue-500/20 rounded-xl flex items-center justify-center text-3xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-3">Save Time</h3>
              <p className="text-slate-300">
                Eliminate hours of manual data entry, invoice processing, and document scanning. Your team focuses on growth instead of busywork.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl hover:border-purple-500/40 transition">
              <div className="w-14 h-14 bg-purple-500/15 border border-purple-500/20 rounded-xl flex items-center justify-center text-3xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-3">Zero Errors</h3>
              <p className="text-slate-300">
                AI-powered automation with built-in validation ensures consistent, accurate processing. No human mistakes, no missing data.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl hover:border-cyan-500/40 transition">
              <div className="w-14 h-14 bg-cyan-500/15 border border-cyan-500/20 rounded-xl flex items-center justify-center text-3xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-3">Cut Costs</h3>
              <p className="text-slate-300">
                Reduce operational expenses by automating repetitive work. Scale your output without scaling your headcount.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Works with your stack */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-slate-400 uppercase tracking-wider text-sm font-semibold mb-8">
            Works with the tools you already use
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['QuickBooks', 'Xero', 'NetSuite', 'Stripe', 'HubSpot', 'Salesforce', 'Google Workspace', 'Excel', 'Zapier', 'Make', 'Notion', 'Slack'].map((tool) => (
              <span key={tool} className="glass rounded-full px-5 py-2.5 text-slate-300 text-sm font-medium hover:border-blue-500/40 hover:text-white transition">
                {tool}
              </span>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-6">…and most other tools with an API or inbox.</p>
        </div>
      </section>

      {/* Services — detailed */}
      <section id="services" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-gradient font-semibold uppercase tracking-wide text-sm">Our Services</span>
            <h2 className="text-4xl font-bold text-white mt-2">What We Automate</h2>
            <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
              Every service below is custom-built around your existing tools and process. Here&apos;s exactly what each one does.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="glass rounded-2xl p-7 hover:border-blue-500/40 transition group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-2xl flex-shrink-0">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{s.title}</h3>
                    <p className="text-blue-400 text-sm">{s.tagline}</p>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {s.points.map((p, i) => (
                    <li key={i} className="flex gap-2.5 text-slate-300 text-sm leading-relaxed">
                      <span className="text-blue-400 flex-shrink-0 mt-0.5">→</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gradient font-semibold uppercase tracking-wide text-sm">Proof</span>
            <h2 className="text-4xl font-bold text-white mt-2">What We Did For Our Clients</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <CaseStudyCard
              icon="📄"
              title="Invoice Automation"
              company="B2B SaaS, Berlin (45 staff)"
              challenge="The finance team manually keyed ~520 supplier invoices a month into Xero — roughly 40 hours, with frequent duplicate payments and late-payment fees."
              solution="We built an inbox-to-Xero pipeline: invoices are auto-captured from accounts@, fields extracted with AI, validated against POs, and duplicates flagged before posting."
              result="Posting time dropped from 40 hours to under 3. Zero duplicate payments in 6 months. Finance now spends its time on forecasting."
              savings="40+ hrs"
            />

            <CaseStudyCard
              icon="📑"
              title="Document Processing"
              company="Boutique Law Firm (12 attorneys)"
              challenge="Paralegals scanned and hand-filed ~2,000 case documents monthly. Finding the right document took 15+ minutes and compliance audits were painful."
              solution="We deployed an OCR + AI classification pipeline that digitises, tags by matter and document type, extracts key dates, and makes everything full-text searchable."
              result="Filing is now instant and search takes seconds. Audit prep went from days to hours. Paralegals reclaimed ~30 hours a month for billable work."
              savings="30+ hrs"
            />

            <CaseStudyCard
              icon="🗂️"
              title="Lead Data Entry"
              company="Digital Marketing Agency (30 reps)"
              challenge="200+ weekly leads from forms and emails were copied into HubSpot by hand. Reps often saw leads a day late, and 1 in 8 records had typos."
              solution="We automated extraction from every inbound channel, enriched each lead with firmographic data, and pushed clean records into HubSpot with instant rep assignment."
              result="Leads now land in the CRM within minutes, assigned and enriched. Response time improved 45% and data-entry errors effectively hit zero."
              savings="25+ hrs"
            />
          </div>

          <div className="text-center">
            <Link
              href="/case-studies"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg transition"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing + Guarantees */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gradient font-semibold uppercase tracking-wide text-sm">Pricing &amp; Guarantees</span>
            <h2 className="text-4xl font-bold text-white mt-2">Clear Pricing, Backed by Guarantees</h2>
            <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
              Fixed scope, fixed price — agreed before any work starts. Most projects land between
              <span className="text-white font-semibold"> €2,000 and €8,000</span> depending on complexity, with optional monthly retainers for ongoing support.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-2xl p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-white mb-2">Results or Money Back</h3>
              <p className="text-slate-400 text-sm">If the automation doesn&apos;t hit the agreed targets within 30 days, we fix it at no extra cost — or you don&apos;t pay.</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-white mb-2">99%+ Accuracy</h3>
              <p className="text-slate-400 text-sm">Built to human-level reliability, with uncertain cases flagged for review rather than guessed.</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-white mb-2">Data Security</h3>
              <p className="text-slate-400 text-sm">Encrypted in transit and at rest. We work within your systems and follow GDPR practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gradient font-semibold uppercase tracking-wide text-sm">Testimonials</span>
            <h2 className="text-4xl font-bold text-white mt-2">Loved by Busy Teams</h2>
            <p className="text-slate-400 mt-4 text-lg">Feedback from clients who got their time back.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Testimonial
              name="Sarah Chen"
              role="Finance Manager, TechVenture"
              initials="SC"
              color="bg-gradient-to-br from-blue-500 to-blue-700"
              quote={<>Deooch <HL>saved us 40 hours a month</HL> on invoice processing. The system is reliable and the team was great to work with.</>}
            />
            <Testimonial
              name="Michael Rodriguez"
              role="Operations Director, LexAI Law"
              initials="MR"
              color="bg-gradient-to-br from-purple-500 to-purple-700"
              quote={<>We were drowning in document scanning. Within a month, our team was <HL>80% more efficient</HL>. Highly recommend.</>}
            />
            <Testimonial
              name="Jessica Williams"
              role="Sales Director, GrowthCo"
              initials="JW"
              color="bg-gradient-to-br from-blue-500 to-purple-600"
              quote={<>The lead entry automation <HL>cut our sales admin workload in half</HL>. Our reps can now focus on selling.</>}
            />
            <Testimonial
              name="David Park"
              role="Founder, Northwind Consulting"
              initials="DP"
              color="bg-gradient-to-br from-cyan-500 to-blue-600"
              quote={<>Our finance team used to lose <HL>two full days a week</HL> on expense reports. Now it&apos;s basically zero. Game changer.</>}
            />
            <Testimonial
              name="Amara Okafor"
              role="Ops Lead, BrightProperty"
              initials="AO"
              color="bg-gradient-to-br from-blue-500 to-blue-700"
              quote={<>Every property inquiry now lands in our CRM in minutes. We handle <HL>3x more leads</HL> with the same team.</>}
            />
            <Testimonial
              name="Tom Becker"
              role="COO, MedAdmin Group"
              initials="TB"
              color="bg-gradient-to-br from-purple-500 to-cyan-600"
              quote={<>Reports that took days now take hours, with <HL>100% data consistency</HL>. Our audits are painless now.</>}
            />
          </div>
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
          <div className="text-center mb-12">
            <span className="text-gradient font-semibold uppercase tracking-wide text-sm">FAQ</span>
            <h2 className="text-4xl font-bold text-white mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="glass rounded-2xl p-6 group">
                <summary className="flex justify-between items-center cursor-pointer text-white font-semibold list-none">
                  <span>{f.q}</span>
                  <span className="text-blue-400 text-xl transition-transform group-open:rotate-45 flex-shrink-0 ml-4">+</span>
                </summary>
                <p className="text-slate-300 leading-relaxed mt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center glass rounded-3xl p-12 border-blue-500/20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Save Hours?</h2>
          <p className="text-xl mb-8 text-slate-300">
            Let&apos;s find the busywork in your business and automate it. Free consultation, no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-lg transition text-lg shadow-lg shadow-blue-600/30"
          >
            Schedule Your Free Call
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
