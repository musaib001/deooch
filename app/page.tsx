import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import CaseStudyCard from './components/CaseStudyCard';
import Testimonial, { HL } from './components/Testimonial';
import WorkflowDemo from './components/WorkflowDemo';
import Hero from './components/Hero';

export const metadata = {
  title: 'Deooch — AI Automation for Invoices, Freight Docs & Healthcare',
  description: 'Berlin-based, GDPR-compliant AI automation for SMBs. We automate invoice processing, freight & shipping documents, and hospital admin — clients save 28+ hours/month at 99%+ accuracy. Free working demo of your process.',
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
    icon: '🚚',
    title: 'Freight & Shipping Document Automation',
    tagline: 'Bills of lading, customs docs and PODs — handled.',
    points: [
      'Read bills of lading, commercial invoices, packing lists and customs forms with AI',
      'Match shipments against bookings and flag discrepancies in weight, quantity or HS codes',
      'Auto-calculate freight charges, demurrage and duties; push into your TMS or ERP',
      'Track proof-of-delivery and trigger invoicing the moment a load is confirmed',
    ],
  },
  {
    icon: '🏥',
    title: 'Hospital & Healthcare Management',
    tagline: 'Less admin at the desk, more time with patients.',
    points: [
      'Digitise patient intake forms, referrals and lab reports into your EHR/HIS',
      'Automate insurance claim prep, eligibility checks and coding from clinical notes',
      'Schedule appointments, send reminders and reconcile no-shows automatically',
      'GDPR-aware handling of patient data, with sensitive cases routed to staff for review',
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
      <Hero />

      {/* Interactive workflow demo */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-gradient font-semibold uppercase tracking-wide text-sm">See It In Action</span>
            <h2 className="text-4xl font-bold text-white mt-2">Watch the Busywork Disappear</h2>
            <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
              Pick a workflow, hit run, and watch what takes your team hours happen in minutes.
            </p>
          </div>
          <WorkflowDemo />
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

      {/* Security & GDPR */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto glass rounded-3xl p-8 md:p-10 border-blue-500/20">
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
                ['🇪🇺', 'GDPR compliant'],
                ['🔒', 'Encrypted end-to-end'],
                ['📄', 'DPA & NDA on request'],
                ['👤', 'Human-in-the-loop'],
              ].map(([icon, label]) => (
                <div key={label} className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-1">{icon}</div>
                  <p className="text-slate-300 text-xs font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
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
              icon="🚚"
              title="Freight Document Automation"
              company="Logistics Forwarder, Hamburg (60 staff)"
              challenge="Ops keyed ~1,400 bills of lading, customs forms and PODs a month into the TMS by hand — slow, error-prone, and a constant source of disputed charges and demurrage."
              solution="We built an AI pipeline that reads every shipping doc, matches it against bookings, recalculates freight and duties, and posts clean entries into the TMS with mismatches flagged."
              result="Document handling dropped from ~90 hours to under 10 a month. Charge disputes fell sharply and invoices now go out the same day a load is delivered."
              savings="80+ hrs"
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
              name="Jonas Vogel"
              role="Ops Manager, HanseFreight"
              initials="JV"
              color="bg-gradient-to-br from-blue-500 to-purple-600"
              quote={<>Our bills of lading and customs docs used to eat entire days. Deooch <HL>cut document handling by 85%</HL> and disputes dropped with it.</>}
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">See It Work on Your Own Process — Free</h2>
          <p className="text-xl mb-8 text-slate-300">
            Send us one real, repetitive task and we&apos;ll build a working automation demo of it at no cost. If it saves you time, we scope the full version. No obligation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-lg transition text-lg shadow-lg shadow-blue-600/30"
          >
            Get My Free Demo
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
