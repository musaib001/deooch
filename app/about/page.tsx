import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'About Deooch - AI Automation',
  description: 'Learn about Deooch and our mission to save businesses thousands of hours.',
};

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Deooch</h1>
          <p className="text-xl text-gray-300">
            Building AI automation for businesses that are tired of manual work.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                We believe that repetitive manual work is a waste of human talent. Invoice processing, document scanning, data entry—these tasks don't require human judgment. They require precision and consistency.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Deooch was built to free your team from busywork. We automate the repetitive tasks that eat up hours every week, so your business can focus on growth, strategy, and the work that actually matters.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">By the Numbers</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-3xl text-blue-600 font-bold">6+</span>
                  <div>
                    <p className="font-semibold text-slate-900">Clients Automated</p>
                    <p className="text-sm text-gray-600">Across startup, SMB, and enterprise sectors</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-3xl text-blue-600 font-bold">150+</span>
                  <div>
                    <p className="font-semibold text-slate-900">Hours Saved</p>
                    <p className="text-sm text-gray-600">Combined per month across all clients</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-3xl text-blue-600 font-bold">99.2%</span>
                  <div>
                    <p className="font-semibold text-slate-900">Accuracy</p>
                    <p className="text-sm text-gray-600">Across all automation workflows</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-12 rounded-lg border border-blue-200 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Meet Your Founder</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-5xl font-bold text-white flex-shrink-0">
                MK
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Musaib Khan</h3>
                <p className="text-blue-600 font-semibold mb-4">CEO & Founder</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Musaib built Deooch after seeing countless businesses waste thousands of hours on repetitive tasks. With experience in AI, automation, and business process optimization, he created Deooch to bring enterprise-grade automation to SMBs.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Based in Berlin, Germany, Musaib is focused on helping businesses become more efficient and their teams more productive.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="mailto:hello@deooch.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                📧 hello@deooch.com
              </a>
              <span className="text-gray-400">|</span>
              <p className="text-gray-700">
                📍 Berlin, Germany
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Deooch?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Specialized Expertise</h3>
                <p className="text-gray-700">
                  We focus exclusively on automation workflows. This deep expertise means we build solutions that actually work, not generic tools.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Fast Deployment</h3>
                <p className="text-gray-700">
                  Most clients see automation running within 2-4 weeks. No lengthy implementations or consultants.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Real Support</h3>
                <p className="text-gray-700">
                  Direct access to the founder. You're not just a ticket in a system. We care about your success.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Proven Results</h3>
                <p className="text-gray-700">
                  Our clients average 28+ hours saved per month and 99%+ accuracy. We measure impact, not just activity.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let's talk about your automation needs. No long sales process—just a conversation about where you're wasting time.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition text-lg"
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
