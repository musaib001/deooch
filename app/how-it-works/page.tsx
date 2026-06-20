import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'How It Works - Deooch',
  description: 'Learn how we automate your business processes from discovery to deployment.',
};

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-xl text-gray-300">
            From discovery to deployment in 2-4 weeks.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Phase 1 */}
          <div className="mb-16">
            <div className="flex gap-6 mb-8">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Discovery Call</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We schedule a 30-minute call to understand your business and identify where you're wasting time. We ask about:
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>What repetitive tasks take up the most time each week?</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>How many people are involved in these tasks?</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>What systems do you currently use? (CRM, accounting, etc.)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>What's your biggest bottleneck right now?</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="mb-16">
            <div className="flex gap-6 mb-8">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Proposal & Planning</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Based on our conversation, we create a detailed proposal that includes:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="font-semibold text-slate-900">Automation Scope</p>
                    <p className="text-sm">Exactly what will be automated and how it integrates with your systems</p>
                  </li>
                  <li className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="font-semibold text-slate-900">Time & Cost Estimate</p>
                    <p className="text-sm">Clear timeline (typically 2-4 weeks) and fixed pricing</p>
                  </li>
                  <li className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="font-semibold text-slate-900">Expected Impact</p>
                    <p className="text-sm">Estimated hours saved per month and accuracy improvements</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="mb-16">
            <div className="flex gap-6 mb-8">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Build & Test</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  We build your automation and run it through thorough testing:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-semibold text-slate-900 mb-2">Quality Assurance</p>
                    <p className="text-sm text-gray-700">Tested against real data to ensure 99%+ accuracy</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-semibold text-slate-900 mb-2">Integration Testing</p>
                    <p className="text-sm text-gray-700">Verified connection with your CRM, accounting, or other systems</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-semibold text-slate-900 mb-2">Edge Cases</p>
                    <p className="text-sm text-gray-700">Tested unusual scenarios to prevent failures</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="font-semibold text-slate-900 mb-2">Documentation</p>
                    <p className="text-sm text-gray-700">Clear guides for your team on how to use and troubleshoot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 4 */}
          <div className="mb-16">
            <div className="flex gap-6 mb-8">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Deployment & Training</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  We deploy your automation and make sure your team knows how to use it:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
                    <span>Live deployment to your production environment</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
                    <span>Training session with your team (30-60 min)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
                    <span>Documentation and quick-reference guides</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
                    <span>30-day support period for bug fixes and optimizations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 5 */}
          <div className="mb-16">
            <div className="flex gap-6 mb-8">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                5
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Ongoing Optimization</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  After launch, we continue to improve and refine:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold flex-shrink-0">→</span>
                    <span>Monthly check-ins to review performance and gather feedback</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold flex-shrink-0">→</span>
                    <span>Adjustments based on your workflow changes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold flex-shrink-0">→</span>
                    <span>Continuous accuracy monitoring and improvements</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold flex-shrink-0">→</span>
                    <span>Access to additional automation opportunities as you scale</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Guarantee</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-3xl">🎯</span>
                <div>
                  <p className="font-semibold text-slate-900">Results or Money Back</p>
                  <p className="text-gray-700">If your automation doesn't deliver the promised results within 30 days, we'll fix it at no extra cost.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">📊</span>
                <div>
                  <p className="font-semibold text-slate-900">99%+ Accuracy</p>
                  <p className="text-gray-700">All our automations are built to achieve 99% accuracy or higher. Human-level reliability.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-3xl">🔒</span>
                <div>
                  <p className="font-semibold text-slate-900">Data Security</p>
                  <p className="text-gray-700">Your data never leaves your systems. Encryption in transit and at rest. Full compliance with GDPR, HIPAA, and SOC 2.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Get Started?</h2>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition text-lg"
            >
              Schedule Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
