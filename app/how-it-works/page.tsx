import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'How It Works - Deooch',
  description: 'Our process from discovery to deployment, in 2-4 weeks.',
};

const phases = [
  {
    n: 1,
    title: 'Discovery Call',
    duration: 'Day 1 · 30 min',
    body: 'A focused call to find where your team bleeds time. We map your current workflow step by step and identify the highest-ROI automation candidate.',
    bullets: [
      'Which repetitive tasks consume the most hours each week?',
      'How many people touch the process, and where are the handoffs?',
      'Which systems are involved (CRM, accounting, email, spreadsheets)?',
      'Where do errors and delays actually happen today?',
    ],
  },
  {
    n: 2,
    title: 'Proposal & Scoping',
    duration: 'Days 2-4',
    body: 'You get a written proposal with a fixed scope and price — no hourly surprises. We define exactly what gets automated and how it plugs into your existing tools.',
    bullets: [
      'Automation scope: precise inputs, outputs, and integrations',
      'Fixed timeline (typically 2-4 weeks) and fixed pricing',
      'Projected impact: estimated hours saved and accuracy targets',
      'A clear list of what we need from you to start',
    ],
  },
  {
    n: 3,
    title: 'Build & Test',
    duration: 'Weeks 1-3',
    body: 'We build the automation against your real data and test it hard before it ever touches production. You see progress, not a black box.',
    bullets: [
      'Built and tuned on samples of your actual documents/data',
      'Integration testing with your live tools (sandbox first)',
      'Edge-case handling so unusual inputs don\'t break it',
      'A confidence threshold: anything uncertain is flagged for human review, never guessed',
    ],
  },
  {
    n: 4,
    title: 'Deployment & Training',
    duration: 'Week 3-4',
    body: 'We ship it to production and make sure your team can run it without us. Documentation, a live walkthrough, and a safety net included.',
    bullets: [
      'Phased rollout — run alongside your manual process first, then cut over',
      'Live training session (30-60 min) for the people who use it',
      'Plain-English docs and a quick-reference troubleshooting guide',
      '30 days of included support for fixes and tuning',
    ],
  },
  {
    n: 5,
    title: 'Monitor & Optimize',
    duration: 'Ongoing',
    body: 'Automations need light upkeep as your business changes. We keep an eye on accuracy and adapt as your process evolves.',
    bullets: [
      'Monthly performance check-ins and accuracy monitoring',
      'Adjustments when your forms, vendors, or tools change',
      'Alerts if something needs attention — before it becomes a problem',
      'A roadmap of the next automations as you scale',
    ],
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-gradient font-semibold uppercase tracking-wide text-sm">The Process</span>
          <h1 className="text-5xl font-bold mb-6 mt-2 text-white">How It Works</h1>
          <p className="text-xl text-slate-400">
            A clear, fixed-scope process. From first call to live automation in 2-4 weeks.
          </p>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto space-y-6">
          {phases.map((p) => (
            <div key={p.n} className="glass rounded-2xl p-7 md:p-8 hover:border-blue-500/40 transition">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex md:flex-col items-center md:items-start gap-3 md:w-40 flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-600/30">
                    {p.n}
                  </div>
                  <span className="text-blue-400 text-sm font-medium">{p.duration}</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-2">{p.title}</h2>
                  <p className="text-slate-300 mb-4 leading-relaxed">{p.body}</p>
                  <ul className="grid sm:grid-cols-2 gap-2.5">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2.5 text-slate-400 text-sm leading-relaxed">
                        <span className="text-blue-400 flex-shrink-0 mt-0.5">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantees */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Guarantees</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass rounded-2xl p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-white mb-2">Results or Money Back</h3>
              <p className="text-slate-400 text-sm">If the automation doesn&apos;t hit the agreed targets within 30 days, we fix it at no extra cost — or you don&apos;t pay.</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-white mb-2">99%+ Accuracy</h3>
              <p className="text-slate-400 text-sm">Every automation is built to human-level reliability, with uncertain cases flagged for review rather than guessed.</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-white mb-2">Data Security</h3>
              <p className="text-slate-400 text-sm">Encryption in transit and at rest. We work within your systems and follow GDPR practices — your data stays yours.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center glass rounded-3xl p-12 border-blue-500/20">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-slate-300">Book a free discovery call and we&apos;ll map your first automation.</p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-lg transition text-lg shadow-lg shadow-blue-600/30"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
