import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import CaseStudyCard from './components/CaseStudyCard';

export const metadata = {
  title: 'Deooch - AI Automation for Business',
  description: 'Save hours of manual work with AI-powered automation. Invoice processing, document scanning, data entry.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Save Hours of Manual Work
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            AI automation for repetitive business tasks. Invoice processing, document scanning, data entry—automated.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition text-lg"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/case-studies"
              className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-8 py-4 rounded-lg transition text-lg"
            >
              See Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Why Choose Deooch?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Save Time</h3>
              <p className="text-gray-700">
                Eliminate hours of manual data entry, invoice processing, and document scanning. Focus on growth instead of busywork.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Zero Errors</h3>
              <p className="text-gray-700">
                AI-powered automation ensures consistent, accurate processing. No human mistakes, no missing data.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Cut Costs</h3>
              <p className="text-gray-700">
                Reduce operational expenses by automating repetitive work. Scale without hiring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            What We Automate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-blue-600 pl-6 py-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">📄 Invoice Processing</h3>
              <p className="text-gray-700">
                Automatically extract data from invoices, validate amounts, and integrate with your accounting system. No manual data entry.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-6 py-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">📑 Document Scanning</h3>
              <p className="text-gray-700">
                Convert physical documents to digital, extract text, organize files. Speed up your document workflows by 10x.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">🗂️ Data Entry</h3>
              <p className="text-gray-700">
                Automate form filling, database updates, and spreadsheet entries from any source. Instant, accurate data transfer.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-6 py-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">📧 Custom Workflows</h3>
              <p className="text-gray-700">
                Any repetitive manual task can be automated. Email processing, lead extraction, report generation—we handle it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Recent Projects
          </h2>
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
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            What Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
              <div className="text-yellow-500 mb-4">★★★★★</div>
              <p className="text-gray-700 italic mb-4">
                "Deooch saved us 40 hours a month on invoice processing. The system is reliable and the team was great to work with."
              </p>
              <p className="font-semibold text-slate-900">Sarah Chen</p>
              <p className="text-gray-600 text-sm">Finance Manager, TechVenture</p>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg border border-purple-200">
              <div className="text-yellow-500 mb-4">★★★★★</div>
              <p className="text-gray-700 italic mb-4">
                "We were drowning in document scanning. Within a month, our team was 80% more efficient. Highly recommend."
              </p>
              <p className="font-semibold text-slate-900">Michael Rodriguez</p>
              <p className="text-gray-600 text-sm">Operations Director, LexAI Law</p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
              <div className="text-yellow-500 mb-4">★★★★★</div>
              <p className="text-gray-700 italic mb-4">
                "The lead entry automation cut our sales admin workload in half. Our reps can now focus on selling."
              </p>
              <p className="font-semibold text-slate-900">Jessica Williams</p>
              <p className="text-gray-600 text-sm">Sales Director, GrowthCo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Save Hours?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss your automation needs. Free consultation, no obligation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg"
          >
            Schedule Your Free Call
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
