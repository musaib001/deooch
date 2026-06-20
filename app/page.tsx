import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import CaseStudyCard from './components/CaseStudyCard';
import Testimonial, { HL } from './components/Testimonial';

export const metadata = {
  title: 'Deooch - AI Automation for Business',
  description: 'Save hours of manual work with AI-powered automation. Invoice processing, document scanning, data entry.',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 mb-6 text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            AI automation that pays for itself in weeks
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Save Hours of <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Manual Work</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto">
            We build AI automations that handle your invoices, documents, and data entry—so your team stops doing busywork and starts doing real work.
          </p>
          <p className="text-gray-400 mb-10">
            Most clients save <span className="text-white font-semibold">28+ hours every month</span> with <span className="text-white font-semibold">99%+ accuracy</span>.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition text-lg shadow-lg shadow-blue-600/30"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/case-studies"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-lg transition text-lg"
            >
              See Case Studies
            </Link>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-16 pt-10 border-t border-white/10">
            <div>
              <p className="text-4xl font-bold text-blue-400">150+</p>
              <p className="text-gray-400 text-sm mt-1">Hours saved / month</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-400">99.2%</p>
              <p className="text-gray-400 text-sm mt-1">Accuracy rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-400">2-4 wk</p>
              <p className="text-gray-400 text-sm mt-1">To go live</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            Why Choose Deooch?
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Manual, repetitive work drains your team and your margins. We make it disappear.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-3xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Save Time</h3>
              <p className="text-gray-700">
                Eliminate hours of manual data entry, invoice processing, and document scanning. Focus on growth instead of busywork.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-3xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Zero Errors</h3>
              <p className="text-gray-700">
                AI-powered automation ensures consistent, accurate processing. No human mistakes, no missing data.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-3xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Cut Costs</h3>
              <p className="text-gray-700">
                Reduce operational expenses by automating repetitive work. Scale without hiring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">Our Services</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">What We Automate</h2>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
              If it's repetitive, rule-based, and eating your team's time—we can automate it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-7 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Invoice Processing</h3>
              <p className="text-gray-700 text-sm">
                Auto-extract data from invoices, validate amounts, and sync with QuickBooks, Xero, or Stripe. No manual entry.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-2xl p-7 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📑</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Document Scanning</h3>
              <p className="text-gray-700 text-sm">
                Convert physical docs to searchable digital files, extract text, and auto-organize. 10x faster workflows.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-7 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🗂️</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Data Entry</h3>
              <p className="text-gray-700 text-sm">
                Automate form filling, database updates, and spreadsheet entries from any source. Instant and accurate.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-2xl p-7 hover:shadow-lg transition">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Receipt & Expenses</h3>
              <p className="text-gray-700 text-sm">
                Snap a photo, get auto-categorized expenses. Real-time tracking and faster reimbursements.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-7 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Email & Lead Capture</h3>
              <p className="text-gray-700 text-sm">
                Parse inbound emails, extract leads, and push straight into your CRM with follow-up workflows.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-2xl p-7 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Reports & Custom Workflows</h3>
              <p className="text-gray-700 text-sm">
                Auto-generate reports, extract structured data, and build any custom automation your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">Proof</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">What We Did For Our Clients</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <CaseStudyCard
              icon="📄"
              title="Invoice Automation"
              company="Tech Startup"
              challenge="Processing 500+ invoices monthly manually, taking 40 hours of admin time"
              solution="Built automated invoice extraction system with AI-powered data validation and accounting software integration"
              result="Invoices now processed in minutes. Team focuses on strategy instead of data entry."
              savings="40+ hours"
            />

            <CaseStudyCard
              icon="📑"
              title="Document Processing"
              company="Legal Firm"
              challenge="Scanning and categorizing thousands of documents per month manually"
              solution="Implemented document digitization pipeline with automatic text extraction and intelligent file organization"
              result="Document processing time reduced from days to hours. Better searchability and compliance."
              savings="30+ hours"
            />

            <CaseStudyCard
              icon="🗂️"
              title="Lead Data Entry"
              company="Sales Agency"
              challenge="Manually entering 200+ leads weekly into CRM, causing delays and errors"
              solution="Built automated lead extraction from emails and forms, direct CRM integration"
              result="Sales team gets fresh leads in their CRM instantly. No data entry bottleneck."
              savings="25+ hours"
            />
          </div>

          <div className="text-center">
            <Link
              href="/case-studies"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">Testimonials</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">Loved by Busy Teams</h2>
            <p className="text-gray-600 mt-4 text-lg">Real feedback from clients who got their time back.</p>
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
              color="bg-gradient-to-br from-purple-500 to-blue-600"
              quote={<>Our finance team used to lose <HL>two full days a week</HL> on expense reports. Now it's basically zero. Game changer.</>}
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
              color="bg-gradient-to-br from-purple-500 to-purple-700"
              quote={<>Reports that took days now take hours, with <HL>100% data consistency</HL>. Our audits are painless now.</>}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Save Hours?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's find the busywork in your business and automate it. Free consultation, no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg shadow-lg"
          >
            Schedule Your Free Call
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
