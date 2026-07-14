'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ProductsMenu from './ProductsMenu';

const links = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/products', label: 'Products' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-neutral-900/80 backdrop-blur border-b border-white/10 text-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <Image src="/logo.png" alt="Deooch logo" width={40} height={40} className="rounded-lg" priority />
            <span className="font-bold text-xl">Deooch</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-8 items-center">
            {links.map((l) =>
              l.href === '/products' ? (
                <ProductsMenu key={l.href} />
              ) : (
                <Link key={l.href} href={l.href} className="hover:text-white transition">
                  {l.label}
                </Link>
              )
            )}
            <Link href="/contact" className="bg-[#f5871f] hover:bg-[#ff9a33] text-[#1a1206] px-6 py-2 rounded-lg transition">
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg hover:bg-white/5 transition"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-[#f5871f] hover:bg-[#ff9a33] text-[#1a1206] px-4 py-3 rounded-lg text-center font-semibold transition"
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
