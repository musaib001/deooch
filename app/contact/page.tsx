'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, MapPin, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setError('');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Something went wrong.');
      }
      setStatus('sent');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  return (
    <div className="min-h-screen text-white">
      <Header />

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#7c5cff]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#22d3ee]/12 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Let&apos;s Talk</h1>
          <p className="text-xl text-gray-400">
            Tell us where your team is losing time. We&apos;ll reply within 24 hours.
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400">
            Whether it&apos;s invoicing, marketing and sales ops, logistics paperwork, or a process unique to your
            business — describe it below and we&apos;ll tell you honestly whether AI automation is a fit, what it
            would take to build, and roughly what it costs before any commitment.
          </p>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10">
          {/* Info column */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <Mail className="h-7 w-7 text-white mb-2" aria-hidden />
              <h3 className="text-lg font-bold mb-1">Email</h3>
              <a href="mailto:hello@deooch.com" className="text-white hover:text-white">hello@deooch.com</a>
            </div>
            <div>
              <MapPin className="h-7 w-7 text-white mb-2" aria-hidden />
              <h3 className="text-lg font-bold mb-1">Location</h3>
              <p className="text-gray-400">Berlin, Germany</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="font-bold mb-3">What to expect</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0 mt-0.5" aria-hidden /> No pressure — just a conversation about your workflow.</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0 mt-0.5" aria-hidden /> We suggest automation ideas and rough timelines.</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-white flex-shrink-0 mt-0.5" aria-hidden /> You decide. No obligation.</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
              {status === 'sent' ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="h-12 w-12 text-white mb-4 mx-auto" aria-hidden />
                  <h3 className="text-2xl font-bold mb-2">Message sent!</h3>
                  <p className="text-gray-400">Thanks for reaching out. We&apos;ll get back to you at the email you provided within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <input name="name" required placeholder="Jane Doe"
                      className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-white/20 transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Business Email *</label>
                    <input name="email" type="email" required placeholder="jane@company.com"
                      className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-white/20 transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <input name="company" placeholder="Acme Inc."
                      className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-white/20 transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">What would you like to automate? *</label>
                    <textarea name="message" required rows={5} placeholder="We process ~300 invoices a month by hand..."
                      className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-white/20 transition resize-none" />
                  </div>

                  {status === 'error' && <p className="text-red-400 text-sm">{error}</p>}

                  <button type="submit" disabled={status === 'sending'}
                    className="w-full bg-[#f5871f] hover:bg-[#ff9a33] text-[#1a1206] disabled:opacity-60 font-semibold px-8 py-4 rounded-lg transition shadow-lg shadow-black/40">
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>
                  <p className="text-xs text-gray-500 text-center">A booking calendar is coming soon. For now, drop us a message.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
