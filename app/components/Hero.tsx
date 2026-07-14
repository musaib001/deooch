'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  type Variants,
} from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroFlow from './HeroFlow';

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const stats = [
  { value: 150, suffix: '+', label: 'Hours saved / month' },
  { value: 99.2, suffix: '%', label: 'Accuracy rate', decimals: 1 },
  { value: null, display: '2-4 wk', label: 'To go live' },
] as const;

// 21st.dev-style animated ambient light blobs behind the hero.
function AmbientGlow() {
  const reduce = useReducedMotion();
  const blobs = [
    { className: 'left-[8%] top-[12%] h-72 w-72 bg-[#7c5cff]/25', x: [0, 40, 0], y: [0, 30, 0] },
    { className: 'right-[10%] top-[20%] h-80 w-80 bg-[#22d3ee]/20', x: [0, -30, 0], y: [0, 40, 0] },
    { className: 'left-1/2 bottom-[5%] h-64 w-64 bg-[#f5871f]/20', x: [0, 20, 0], y: [0, -30, 0] },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[90px] ${b.className}`}
          animate={reduce ? undefined : { x: b.x, y: b.y }}
          transition={{ duration: 14 + i * 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

function CountUp({
  value,
  suffix = '',
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) =>
    v.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
  );

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      mv.set(value);
      return;
    }
    const controls = animate(mv, value, { duration: 1.4, ease: EASE });
    return controls.stop;
  }, [inView, value, reduce, mv]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-28">
      <AmbientGlow />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-5xl text-center"
      >
        {/* LCP content — rendered visible on the server, not gated behind JS/hydration */}
        <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
          AI Automation That <span className="text-gradient">Pays For Itself</span> in Weeks
        </h1>

        <p className="mx-auto mb-4 max-w-3xl text-xl leading-relaxed text-slate-300 md:text-2xl">
          We build AI agents that run your repetitive processes end to end — invoicing, marketing,
          operations, or any workflow unique to your business — across the tools you already use.
        </p>

        <p className="mb-10 text-slate-400">
          Clients average <span className="font-semibold text-white">28+ hours saved per month</span>{' '}
          with <span className="font-semibold text-white">99%+ accuracy</span>.
        </p>

        <motion.div variants={item} className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">
              Book a Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="glass">
            <Link href="/case-studies">See Case Studies</Link>
          </Button>
        </motion.div>

        <motion.p
          variants={item}
          className="mx-auto mt-5 flex max-w-2xl flex-wrap items-center justify-center gap-1.5 text-sm text-slate-400"
        >
          <Sparkles className="h-4 w-4 text-white" />
          <span className="font-semibold text-white">Try it free:</span>
          send us one real process and we&apos;ll automate it for a live demo —{' '}
          <span className="text-white">free of cost</span>, no commitment.
        </motion.p>

        <motion.div variants={item}>
          <HeroFlow />
        </motion.div>

        <motion.div
          variants={item}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-10"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-gradient text-4xl font-bold">
                {s.value === null ? s.display : <CountUp value={s.value} suffix={s.suffix} decimals={'decimals' in s ? s.decimals : 0} />}
              </p>
              <p className="mt-1 text-sm text-slate-400">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.p variants={item} className="mx-auto mt-6 max-w-2xl text-xs text-slate-500">
          Figures are averages across active client automations, measured against each client&apos;s
          own pre-automation baseline.
        </motion.p>
      </motion.div>
    </section>
  );
}
