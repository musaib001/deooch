import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Reveal, Stagger, Card } from '../components/Motion';
import { posts } from './posts';

export const metadata = {
  title: 'Blog — AI Automation & Workflow Automation Guides | Deooch',
  description:
    'Practical guides on automating invoices, marketing ops, documents, and back-office work — from the team that builds AI automation for SMBs.',
  alternates: { canonical: '/blog' },
};

const fmt = (d: string) =>
  new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <span className="text-gradient text-sm font-semibold uppercase tracking-wide">Blog</span>
            <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">Automation guides &amp; insights</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-400">
              Practical, no-fluff writing on automating the repetitive back-office work that eats your team&apos;s time.
            </p>
            <p className="mt-4 max-w-2xl text-slate-400">
              We cover the workflows we build every day: invoice and document processing, marketing and sales ops,
              logistics paperwork, and healthcare admin — plus honest comparisons of when a done-for-you automation
              makes more sense than a DIY tool like Zapier or Make. Written by the team that actually builds and
              runs these automations for clients, not generic AI-generated listicles.
            </p>
          </Reveal>

          <Stagger className="mt-12 space-y-5">
            {posts.map((p) => (
              <Card key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="glass block rounded-2xl p-7 transition-colors hover:border-white/30"
                >
                  <div className="mb-3 flex items-center gap-3 text-xs text-slate-500">
                    <time dateTime={p.datePublished}>{fmt(p.datePublished)}</time>
                    <span>·</span>
                    <span>{p.readMins} min read</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">{p.title}</h2>
                  <p className="mt-3 leading-relaxed text-slate-300">{p.description}</p>
                  <p className="mt-4 text-sm font-semibold text-white">Read article →</p>
                </Link>
              </Card>
            ))}
          </Stagger>
        </div>
      </section>
      <Footer />
    </div>
  );
}
