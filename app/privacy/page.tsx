import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Privacy Policy — Deooch',
  description: 'How Deooch collects, uses, and protects your personal data.',
  alternates: { canonical: '/privacy' },
};

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <span className="text-gradient font-semibold uppercase tracking-wide text-sm">Legal</span>
          <h1 className="text-4xl font-bold text-white mt-2 mb-2">Privacy Policy</h1>
          <p className="text-slate-500 mb-10">Last updated: June 2026</p>

          <div className="space-y-8 text-slate-300 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">1. Who We Are</h2>
              <p>
                This website is operated by Deooch (&quot;we&quot;, &quot;us&quot;). We are the controller responsible for your personal
                data under the EU General Data Protection Regulation (GDPR). You can reach us at{' '}
                <a href="mailto:hello@deooch.com" className="text-white hover:text-white">hello@deooch.com</a> or at the
                address listed in our Impressum.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">2. What Data We Collect</h2>
              <p className="mb-2">We only collect data you actively provide or that is technically necessary to run the site:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong className="text-white">Contact form:</strong> your name, email, company, and message.</li>
                <li><strong className="text-white">Email correspondence:</strong> anything you send us directly.</li>
                <li><strong className="text-white">Server logs:</strong> standard technical data (IP address, browser, timestamp) processed by our hosting provider to deliver and secure the site.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">3. How We Use It</h2>
              <p className="mb-2">We use your data only to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Respond to your enquiry and provide our services (Art. 6(1)(b) GDPR).</li>
                <li>Operate, secure, and maintain the website (Art. 6(1)(f) GDPR — legitimate interest).</li>
              </ul>
              <p className="mt-2">We never sell your data or use it for advertising.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">4. Who We Share It With</h2>
              <p>
                We use trusted service providers to run the site and communicate with you — currently our hosting provider
                (Vercel) and our email provider (Zoho). They process data on our behalf under data-processing agreements and
                only as needed to provide their service. Some providers may process data outside the EU under appropriate
                safeguards (e.g. EU Standard Contractual Clauses).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">5. How Long We Keep It</h2>
              <p>
                We keep enquiry data only as long as needed to handle your request and any resulting business relationship,
                then delete it unless we are legally required to retain it.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">6. Your Rights</h2>
              <p className="mb-2">Under the GDPR you have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Have inaccurate data corrected</li>
                <li>Have your data deleted</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
              <p className="mt-2">
                To exercise any of these, email{' '}
                <a href="mailto:hello@deooch.com" className="text-white hover:text-white">hello@deooch.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">7. Cookies</h2>
              <p>
                This site does not use tracking or advertising cookies. Only cookies strictly necessary for the site to
                function may be set. If we add analytics in future, we will update this policy and request consent where required.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">8. Changes</h2>
              <p>
                We may update this policy from time to time. The latest version will always be available on this page with an
                updated date.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
