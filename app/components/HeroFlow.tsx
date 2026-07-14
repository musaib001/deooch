'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import { Zap, Brain, Share2, UserCheck, type LucideIcon } from 'lucide-react';

// Mirrors the 4-step "How It Actually Works" model further down the page —
// this is a looping preview of the same steps, not new content to maintain.
const nodes: { icon: LucideIcon; label: string }[] = [
  { icon: Zap, label: 'Trigger' },
  { icon: Brain, label: 'AI understands' },
  { icon: Share2, label: 'Acts on your tools' },
  { icon: UserCheck, label: 'Exceptions to humans' },
];

const STEP = 1.1; // seconds between each node lighting up
const PULSE = 0.6; // seconds each glow/travel animation takes
const CYCLE = nodes.length * STEP + 0.8; // full loop before repeating from node 0

export default function HeroFlow() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const animating = inView && !reduce;

  return (
    <div ref={ref} className="mx-auto mt-14 flex max-w-3xl items-start" aria-hidden>
      {nodes.map((n, i) => (
        <div key={n.label} className="flex flex-1 items-start last:flex-initial">
          <div className="flex flex-col items-center gap-2 text-center">
            <motion.div
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 sm:h-12 sm:w-12"
              animate={
                animating
                  ? {
                      scale: [1, 1.15, 1],
                      boxShadow: [
                        '0 0 0 rgba(124,92,255,0)',
                        '0 0 22px rgba(124,92,255,0.6)',
                        '0 0 0 rgba(124,92,255,0)',
                      ],
                    }
                  : undefined
              }
              transition={{ duration: PULSE, repeat: Infinity, repeatDelay: CYCLE - PULSE, delay: i * STEP, ease: 'easeInOut' }}
            >
              <n.icon className="h-5 w-5 text-white" aria-hidden />
            </motion.div>
            <p className="w-20 text-xs leading-snug text-slate-400 sm:w-24">{n.label}</p>
          </div>

          {i < nodes.length - 1 && (
            <div className="relative mt-[22px] h-0.5 flex-1 overflow-hidden rounded-full bg-white/10 sm:mt-[24px]">
              <motion.div
                className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#7c5cff] to-transparent"
                animate={animating ? { x: ['-100%', '200%'] } : undefined}
                transition={{ duration: PULSE, repeat: Infinity, repeatDelay: CYCLE - PULSE, delay: i * STEP + 0.15, ease: 'easeInOut' }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
