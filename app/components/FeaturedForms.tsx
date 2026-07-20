import { Sparkles, Share2, Table, Search, Users, Plug } from 'lucide-react';
import { Reveal } from './Motion';

const FORMS_URL = 'https://forms.deooch.com/';

const features = [
  { Ico: Sparkles, label: 'Describe it in plain English — AI builds the form' },
  { Ico: Share2, label: 'Public shareable link, live in seconds' },
  { Ico: Search, label: 'Searchable dashboard — star and archive responses' },
  { Ico: Table, label: 'One-click Excel export' },
  { Ico: Users, label: 'Team access with roles' },
  { Ico: Plug, label: 'MCP integration for AI assistants' },
];

// Highlight block for deoochform (forms.deooch.com) — used on the home page and /products.
export default function FeaturedForms() {
  return (
    <section className="px-4 py-16">
      <Reveal className="mx-auto max-w-5xl glass rounded-3xl border-white/15 p-8 md:p-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <span className="text-gradient text-sm font-semibold uppercase tracking-wide">
              New · Live product
            </span>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
              deoochform — powerful forms that build themselves
            </h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              Our AI-native form builder. Describe the form you need in plain English and it&apos;s
              ready to share — then collect, search, and export every response from one dashboard.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={FORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-[#f5871f] px-7 py-3.5 font-semibold text-[#1a1206] transition hover:bg-[#ff9a33]"
              >
                Try deoochform free →
              </a>
              <span className="text-sm text-slate-500">forms.deooch.com</span>
            </div>
          </div>

          <ul className="grid flex-shrink-0 grid-cols-1 gap-2.5 sm:grid-cols-2 md:w-80 md:grid-cols-1">
            {features.map(({ Ico, label }) => (
              <li
                key={label}
                className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs text-slate-300"
              >
                <Ico className="h-4 w-4 flex-shrink-0 text-white" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
