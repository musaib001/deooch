import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Reveal } from '../../components/Motion';
import { posts, getPost } from '../posts';

const SITE = 'https://www.deooch.com';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Deooch`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: 'article', title: post.title, description: post.description },
  };
}

const fmt = (d: string) =>
  new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: { '@id': `${SITE}/#founder` },
    publisher: { '@id': `${SITE}/#organization` },
    mainEntityOfPage: `${SITE}/blog/${post.slug}`,
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <article className="px-4 py-16">
        <Reveal className="mx-auto max-w-2xl">
          <nav className="mb-6 text-sm text-slate-500">
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-400">Article</span>
          </nav>
          <div className="mb-4 flex items-center gap-3 text-xs text-slate-500">
            <time dateTime={post.datePublished}>{fmt(post.datePublished)}</time>
            <span>·</span>
            <span>{post.readMins} min read</span>
            <span>·</span>
            <span>By Musaib Khan</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">{post.title}</h1>

          <div className="blog-body mt-8 space-y-5 text-slate-300">{post.content}</div>

          <div className="mt-12 rounded-2xl glass border-white/15 p-8 text-center">
            <p className="text-lg font-semibold text-white">Want this built for your team?</p>
            <p className="mt-2 text-slate-400">Send us one real process and we&apos;ll build a free working demo.</p>
            <Link
              href="/contact"
              className="mt-5 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-neutral-200"
            >
              Get a Free Demo
            </Link>
          </div>
        </Reveal>
      </article>
      <Footer />
    </div>
  );
}
