'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { productCategories } from '../data/product-categories';

// Desktop-only mega-menu: category rail on the left, products for the hovered category on the right.
export default function ProductsMenu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const cat = productCategories[active];

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 hover:text-white transition"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
      >
        Products
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden />
      </button>

      {open && (
        // pt-4 bridges the gap so the panel stays open while the cursor moves down onto it
        <div className="absolute left-0 top-full pt-4 z-50">
          <div className="w-[760px] max-w-[90vw] rounded-2xl border border-white/10 bg-[#0e0e1e] shadow-2xl shadow-black/60 overflow-hidden flex">
            {/* Category rail */}
            <div className="w-56 flex-shrink-0 border-r border-white/10 p-3 bg-white/[0.02]">
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Categories</p>
              {productCategories.map((c, i) => (
                <Link
                  key={c.slug}
                  href={`/products/${c.slug}`}
                  onMouseEnter={() => setActive(i)}
                  className={`w-full flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition ${
                    i === active ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <span className="h-2 w-2 rounded-full flex-shrink-0" style={{ background: c.color }} />
                  {c.label}
                </Link>
              ))}
            </div>

            {/* Products for the active category */}
            <div className="flex-1 p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm text-slate-400">{cat.blurb}</p>
                <Link
                  href={`/products/${cat.slug}`}
                  className="flex items-center gap-1 text-xs font-semibold text-white hover:underline whitespace-nowrap"
                >
                  See all <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-x-5 gap-y-1">
                {cat.products.map((p) => {
                  const inner = (
                    <>
                      <p className="text-sm font-semibold text-white">{p.name}</p>
                      <p className="text-xs text-slate-400 leading-snug mt-0.5">{p.desc}</p>
                    </>
                  );
                  return p.href ? (
                    <Link key={p.name} href={p.href} className="block rounded-lg p-3 hover:bg-white/5 transition">
                      {inner}
                    </Link>
                  ) : (
                    <Link key={p.name} href={`/products/${cat.slug}`} className="block rounded-lg p-3 hover:bg-white/5 transition">
                      {inner}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
