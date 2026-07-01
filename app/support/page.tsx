import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Reveal, Stagger, Card } from '../components/Motion';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Support — Get Help | Deooch',
  description:
    'Need help with your Deooch automation? Reach us by email or live chat, check common questions, and see our response times and support commitments.',
  alternates: { canonical: '/support' },
};

const channels = [
  ['💬', 'Live chat', 'Fastest for quick questions — use the chat widget in the bottom corner of any page.', null],
  ['📧', 'Email', 'For anything detailed or account-specific, email us and we’ll reply within one business day.', 'mailto:hello@deooch.com'],
  ['📅', 'Book a call', 'Prefer to talk it through? Schedule a call and we’ll walk through it live.', '/contact'],
];

const faqs = [
  ['My automation flagged something for review — what do I do?', 'That’s by design. Anything the AI isn’t confident about is routed to a human instead of guessed. Open the flagged item, confirm or correct it, and it continues. If you see the same flag repeatedly, tell us and we’ll tune the rule.'],
  ['Something changed in one of our tools and the automation broke.', 'Message us right away with what changed (a new form field, a vendor format, an API update). On Growth and Custom plans this is covered; we’ll adjust the automation and confirm once it’s stable again.'],
  ['How do I request a change to an existing automation?', 'Email us or use live chat with the change you need. We’ll scope it, confirm whether it’s within your current plan, and give you a timeline before starting.'],
  ['What are your support hours?', 'We’re Berlin-based and respond during EU business hours. Email and chat messages sent outside those hours are answered the next business day.'],
  ['Is my data safe when I share it for support?', 'Yes — the same GDPR practices apply. Don’t paste sensitive data into chat; we’ll point you to a secure channel if a support case needs real documents.'],
];

export default function Support() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal className="text-center">
            <span className="text-gradient text-sm font-semibold uppercase tracking-wide">Support</span>
            <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">How can we help?</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              Existing client or just exploring — here’s the fastest way to reach a human.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {channels.map(([icon, title, body, href]) => (
              <Card key={title as string} className="glass rounded-2xl p-6">
                <div className="mb-3 text-3xl">{icon}</div>
                <h2 className="mb-2 text-lg font-bold text-white">{title}</h2>
                <p className="text-sm leading-relaxed text-slate-400">{body}</p>
                {href && (
                  <Link href={href as string} className="mt-4 inline-block text-sm font-semibold text-white hover:underline">
                    {String(title) === 'Email' ? 'Email us →' : 'Open →'}
                  </Link>
                )}
              </Card>
            ))}
          </Stagger>

          <div className="mt-16">
            <Reveal>
              <h2 className="mb-8 text-center text-3xl font-bold text-white">Common questions</h2>
            </Reveal>
            <div className="space-y-3">
              {faqs.map(([q, a]) => (
                <details key={q} className="glass group rounded-2xl p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-white">
                    <span>{q}</span>
                    <span className="ml-4 flex-shrink-0 text-xl text-white transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-slate-300">{a}</p>
                </details>
              ))}
            </div>
          </div>

          <Reveal className="mt-16 rounded-3xl glass border-white/15 p-10 text-center">
            <h2 className="mb-3 text-2xl font-bold text-white">Still stuck?</h2>
            <p className="mb-6 text-slate-400">Send us a message and we’ll get back within one business day.</p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
