'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Let's Talk</h1>
          <p className="text-xl text-gray-300">
            Schedule a free 30-minute consultation to explore your automation opportunities.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Book a Call</h3>
              <p className="text-gray-700">
                Choose a time that works for you below. We'll discuss your automation needs and explore solutions.
              </p>
            </div>

            <div>
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
              <p className="text-gray-700 mb-2">
                Prefer email? We'll respond within 24 hours.
              </p>
              <a href="mailto:hello@deooch.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                hello@deooch.com
              </a>
            </div>

            <div>
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Location</h3>
              <p className="text-gray-700">
                Berlin, Germany
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What to Expect</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
                <span>We listen. No pressure, no sales pitch—just a conversation about your business and where you're wasting time.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
                <span>We share ideas. Based on what you tell us, we'll suggest automation opportunities and rough timelines.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
                <span>You decide. No obligation. If it's not the right fit, we'll tell you honestly.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Pick a Time That Works</h2>

          <div
            className="calendly-inline-widget bg-white rounded-lg shadow-lg overflow-hidden"
            data-url="https://calendly.com/hello-deooch/30min?background_color=f8fafc&text_color=0f172a"
            style={{ minHeight: '700px' }}
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Can't Find a Time That Works?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Email us at hello@deooch.com and we'll find time to connect.
          </p>
          <a
            href="mailto:hello@deooch.com"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg"
          >
            Send Email
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
