import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, MapPin } from 'lucide-react';

export const metadata = {
  title: 'About Deooch — AI Automation for SMBs, Founded in Berlin',
  description: 'Deooch is a Berlin-based AI automation studio founded by Musaib Khan, bringing enterprise-grade automation to small and mid-sized businesses without the enterprise price tag.',
  alternates: { canonical: '/about' },
};

export default function About() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            dateModified: '2026-07-01',
            mainEntity: { '@id': 'https://www.deooch.com/#founder' },
            about: { '@id': 'https://www.deooch.com/#organization' },
          }),
        }}
      />
      <Header />

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-gradient font-semibold uppercase tracking-wide text-sm">About Us</span>
          <h1 className="text-5xl font-bold mb-6 mt-2 text-white">About Deooch</h1>
          <p className="text-xl text-slate-400">
            Building AI automation for businesses that are tired of manual work.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                Repetitive manual work is a waste of human talent. Invoice processing, document scanning, data entry—these tasks don&apos;t need human judgment. They need precision and consistency, which is exactly what AI does best.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Deooch exists to free your team from busywork. We automate the tasks that eat hours every week, so your business can focus on growth, strategy, and the work that actually matters.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 border-white/15">
              <h3 className="text-2xl font-bold text-white mb-6">By the Numbers</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-gradient w-20">3</span>
                  <div>
                    <p className="font-semibold text-white">Countries Served</p>
                    <p className="text-sm text-slate-400">Clients in Berlin, London, and New York</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-gradient w-20">150+</span>
                  <div>
                    <p className="font-semibold text-white">Hours Saved</p>
                    <p className="text-sm text-slate-400">Combined per month across all clients</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-gradient w-20">99.2%</span>
                  <div>
                    <p className="font-semibold text-white">Accuracy</p>
                    <p className="text-sm text-slate-400">Across all automation workflows</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="glass rounded-3xl p-8 md:p-12 mb-12 border-white/15">
            <h2 className="text-3xl font-bold text-white mb-6">Meet Your Founder</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 bg-gradient-to-br from-neutral-600 to-neutral-900 rounded-full flex items-center justify-center text-5xl font-bold text-white flex-shrink-0 shadow-lg shadow-black/40">
                MK
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Musaib Khan</h3>
                <p className="text-white font-semibold mb-4">CEO &amp; Founder</p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Musaib founded Deooch after watching businesses waste thousands of hours on repetitive tasks that software could handle in seconds. With a background in engineering, AI, and business-process automation, he set out to bring enterprise-grade automation to small and mid-sized companies—without the enterprise price tag.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Based in Berlin, Germany, he works hands-on with every client to make their teams faster and their operations leaner.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 text-slate-300">
              <a href="mailto:hello@deooch.com" className="inline-flex items-center gap-2 text-white hover:text-white font-semibold">
                <Mail className="h-4 w-4" aria-hidden /> hello@deooch.com
              </a>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <a
                href="https://www.linkedin.com/in/musaib-khan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white font-semibold"
              >
                LinkedIn
              </a>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <p className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" aria-hidden /> Berlin, Germany</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Deooch?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                ['Specialized Expertise', 'We focus exclusively on automation workflows. That depth means we build solutions that actually hold up in production, not generic templates.'],
                ['Fast Deployment', 'Most clients see automation running within 2-4 weeks. Simple monthly pricing—no large upfront fee, no open-ended consulting engagements.'],
                ['Direct Founder Access', 'You work directly with the person building your automation. No account managers, no support-ticket black holes.'],
                ['Proven, Measured Results', 'Clients average 28+ hours saved per month at 99%+ accuracy. We agree on the metrics up front and report against them.'],
              ].map(([title, body]) => (
                <div key={title} className="glass rounded-2xl p-6 hover:border-white/30 transition">
                  <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass border-white/15 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Work Together?</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Let&apos;s talk about your automation needs. No long sales process—just a conversation about where you&apos;re losing time.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#f5871f] hover:bg-[#ff9a33] text-[#1a1206] font-bold px-8 py-4 rounded-lg transition text-lg shadow-lg shadow-black/40"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
