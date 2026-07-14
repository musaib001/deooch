import Link from 'next/link';
import {
  Pill, CalendarClock, Stethoscope, BarChart3, Receipt, CalendarDays,
  Check, type LucideIcon,
} from 'lucide-react';
import { Reveal, Stagger, Card } from './Motion';

type Product = {
  icon: LucideIcon;
  name: string;
  desc: string;
  solves: string;
  color: string;
  img: string;
};

const products: Product[] = [
  { icon: Pill, name: 'Pharmacy Inventory', desc: 'Track stock in real time and auto-reorder before you run out — no more manual counts.', solves: 'Pharmacy Inventory Management', color: '#34d399', img: '/products/pharmacy-inventory.svg' },
  { icon: CalendarClock, name: 'Medicine Expiry Tracking', desc: 'Flag expiring medicines weeks ahead to cut waste and stay ahead of compliance checks.', solves: 'Medicine Expiration', color: '#f59e0b', img: '/products/medicine-expiry.svg' },
  { icon: Stethoscope, name: 'Equipment & Asset Tracking', desc: 'Monitor service, calibration and warranty dates so a check is never missed.', solves: 'Equipment Expiration Tracking', color: '#22d3ee', img: '/products/equipment-tracking.svg' },
  { icon: BarChart3, name: 'Automated Reporting', desc: 'Generate compliance and operational reports on a schedule instead of by hand.', solves: 'Manual Report Generation', color: '#a78bfa', img: '/products/automated-reporting.svg' },
  { icon: Receipt, name: 'Billing Automation', desc: 'Speed up claims and billing to close the gap between care delivered and payment.', solves: 'Billing Delays', color: '#fb7185', img: '/products/billing-automation.svg' },
  { icon: CalendarDays, name: 'Staff Scheduling', desc: 'Build rosters that respect availability and coverage rules automatically.', solves: 'Staff Scheduling', color: '#38bdf8', img: '/products/staff-scheduling.svg' },
];

export default function ProductSuite({ heading = true }: { heading?: boolean }) {
  return (
    <section id="products" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {heading && (
          <Reveal className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-gradient font-semibold uppercase tracking-wide text-sm">Featured products</span>
            <h2 className="text-4xl font-bold text-white mt-2">Purpose-built products for hospital operations</h2>
            <p className="text-slate-400 mt-4 text-lg">
              One of six product areas we build — from AI agents to document, freight, and finance automation.
              These hospital products come straight from a real operations survey.
            </p>
          </Reveal>
        )}

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <Card
                key={p.name}
                className="glass rounded-2xl overflow-hidden"
              >
                <div
                  className="p-3.5"
                  style={{ background: `radial-gradient(120% 100% at 100% 0%, ${p.color}22, transparent 60%)` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={`${p.name} preview`} className="w-full rounded-xl block" />
                </div>
                <div className="p-6">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `${p.color}29`, border: `1px solid ${p.color}4d` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: p.color }} aria-hidden />
                  </div>
                  <h3 className="text-xl font-bold text-white">{p.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mt-2">{p.desc}</p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-white mt-4 pt-4 border-t border-white/10">
                    <Check className="h-4 w-4 flex-shrink-0" style={{ color: p.color }} aria-hidden />
                    Solves: {p.solves}
                  </div>
                </div>
              </Card>
            );
          })}
        </Stagger>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block rounded-lg bg-[#f5871f] px-7 py-3.5 font-semibold text-[#1a1206] transition hover:bg-[#ff9a33]"
          >
            See all products →
          </Link>
          <p className="text-slate-500 text-sm mt-4">
            Also on the roadmap: Documentation Automation and Inter-department Communication.
          </p>
        </div>
      </div>
    </section>
  );
}
