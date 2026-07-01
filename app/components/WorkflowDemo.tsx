'use client';

import { useEffect, useRef, useState } from 'react';

type Scenario = {
  id: string;
  label: string;
  icon: string;
  manualMin: number;
  autoMin: number;
  unit: string;
  steps: { icon: string; title: string; detail: string }[];
};

const scenarios: Scenario[] = [
  {
    id: 'invoice',
    label: 'Invoices',
    icon: '📄',
    manualMin: 240,
    autoMin: 8,
    unit: 'per invoice batch',
    steps: [
      { icon: '📥', title: 'Invoice received', detail: 'New supplier invoice lands in accounts@ inbox' },
      { icon: '🔍', title: 'Extracting data', detail: 'AI reads vendor, line items, VAT, totals & PO number' },
      { icon: '🔗', title: 'Three-way matching', detail: 'Validates against purchase order & goods received' },
      { icon: '🛡️', title: 'Checking duplicates', detail: 'Flags anything already paid or out of policy' },
      { icon: '📊', title: 'Posting to Xero', detail: 'Clean entry pushed straight into accounting' },
      { icon: '✅', title: 'Done', detail: 'Approved and filed — no human keystrokes' },
    ],
  },
  {
    id: 'freight',
    label: 'Freight Docs',
    icon: '🚚',
    manualMin: 90,
    autoMin: 4,
    unit: 'per shipment',
    steps: [
      { icon: '📥', title: 'Bill of lading arrives', detail: 'BOL, packing list & customs forms hit the inbox' },
      { icon: '🔍', title: 'Reading documents', detail: 'AI extracts shipper, weight, HS codes & charges' },
      { icon: '🔗', title: 'Matching booking', detail: 'Cross-checks against the booking & shipment record' },
      { icon: '🧮', title: 'Calculating charges', detail: 'Freight, duties & demurrage computed and flagged' },
      { icon: '📊', title: 'Posting to TMS', detail: 'Clean entry pushed into your TMS / ERP' },
      { icon: '✅', title: 'Invoice triggered', detail: 'POD confirmed → invoice goes out same day' },
    ],
  },
  {
    id: 'hospital',
    label: 'Patient Intake',
    icon: '🏥',
    manualMin: 30,
    autoMin: 2,
    unit: 'per patient',
    steps: [
      { icon: '📥', title: 'Intake form received', detail: 'New patient form, referral & lab report come in' },
      { icon: '🔍', title: 'Extracting details', detail: 'AI reads demographics, history & insurance info' },
      { icon: '🛡️', title: 'Eligibility check', detail: 'Verifies insurance coverage & flags gaps' },
      { icon: '🔗', title: 'Coding from notes', detail: 'Suggests diagnosis & procedure codes for review' },
      { icon: '📊', title: 'Writing to EHR', detail: 'Structured record pushed into your EHR / HIS' },
      { icon: '✅', title: 'Ready for clinician', detail: 'Sensitive cases routed to staff — never guessed' },
    ],
  },
];

const DURATION = 5200; // ms for the whole run

function fmt(min: number, floor: number) {
  const m = Math.max(floor, Math.round(min));
  if (m >= 60) {
    const h = Math.floor(m / 60);
    const r = m % 60;
    return `${h}h ${r.toString().padStart(2, '0')}m`;
  }
  return `${m}m`;
}

export default function WorkflowDemo() {
  const [sel, setSel] = useState(0);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [active, setActive] = useState(-1);
  const sc = scenarios[sel];
  const [minutes, setMinutes] = useState(sc.manualMin);
  const raf = useRef<number | null>(null);

  function stop() {
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = null;
  }

  function reset(next = sel) {
    stop();
    setRunning(false);
    setDone(false);
    setActive(-1);
    setMinutes(scenarios[next].manualMin);
  }

  function pick(i: number) {
    if (i === sel) return;
    setSel(i);
    reset(i);
  }

  function run() {
    if (running) return;
    setRunning(true);
    setDone(false);
    setActive(-1);
    setMinutes(sc.manualMin);

    const steps = sc.steps;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - p, 2);
      setActive(Math.min(steps.length - 1, Math.floor(p * steps.length)));
      setMinutes(sc.manualMin - eased * (sc.manualMin - sc.autoMin));
      if (p < 1) {
        raf.current = requestAnimationFrame(tick);
      } else {
        setActive(steps.length - 1);
        setMinutes(sc.autoMin);
        setRunning(false);
        setDone(true);
      }
    };
    raf.current = requestAnimationFrame(tick);
  }

  useEffect(() => () => stop(), []);

  const saved = sc.manualMin - Math.round(minutes);

  return (
    <div className="glass rounded-3xl p-6 md:p-10 border-white/15">
      {/* Scenario tabs */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {scenarios.map((s, i) => (
          <button
            key={s.id}
            onClick={() => pick(i)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition ${
              i === sel
                ? 'bg-white/10 border-white/30 text-white'
                : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            <span>{s.icon}</span>
            {s.label}
          </button>
        ))}
      </div>

      {/* Controls bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
        <div>
          <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Processing time</p>
          <div className="flex items-end gap-3">
            <p className="text-5xl font-bold text-gradient tabular-nums leading-none">{fmt(minutes, sc.autoMin)}</p>
            <p className="text-slate-500 text-sm mb-1">
              vs. manual <span className="line-through">{fmt(sc.manualMin, sc.manualMin)}</span> {sc.unit}
            </p>
          </div>
        </div>
        {done ? (
          <div className="flex items-center gap-4">
            <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-center">
              <p className="text-white font-bold leading-tight">≈ {fmt(saved, sc.autoMin)} saved</p>
              <p className="text-slate-400 text-xs">{sc.unit}, every time</p>
            </div>
            <button onClick={() => reset()} className="text-white hover:text-white text-sm font-medium whitespace-nowrap">
              ↺ Run again
            </button>
          </div>
        ) : (
          <button
            onClick={run}
            disabled={running}
            className="bg-white hover:bg-neutral-200 disabled:opacity-60 text-black font-semibold px-6 py-3 rounded-lg transition shadow-lg shadow-black/40 whitespace-nowrap"
          >
            {running ? 'Running…' : '▶ Run Automation'}
          </button>
        )}
      </div>

      {/* Horizontal node flow (n8n style) */}
      <div className="flex items-stretch gap-0 overflow-x-auto pb-3 -mx-2 px-2">
        {sc.steps.map((s, i) => {
          const lit = i <= active;
          const current = i === active && running;
          return (
            <div key={s.title} className="flex items-stretch flex-shrink-0">
              {/* Connector */}
              {i > 0 && (
                <div className="flex items-center px-1 sm:px-2" aria-hidden>
                  <div className={`h-0.5 w-6 sm:w-10 rounded-full transition-colors duration-300 ${
                    i <= active ? 'bg-white/60' : 'bg-white/10'
                  }`} />
                  <span className={`text-xs -ml-1 transition-colors duration-300 ${i <= active ? 'text-white' : 'text-slate-600'}`}>▶</span>
                </div>
              )}
              {/* Node */}
              <div
                className={`w-40 sm:w-44 rounded-xl border p-4 flex flex-col transition-all duration-300 ${
                  lit ? 'bg-white/10 border-white/30' : 'bg-white/[0.02] border-white/5 opacity-50'
                } ${current ? 'scale-[1.04] border-white/30 shadow-lg shadow-black/40' : ''}`}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg transition ${
                      lit ? 'bg-gradient-to-br from-white/10 to-white/5 border border-white/10' : 'bg-white/5'
                    }`}
                  >
                    {lit ? s.icon : <span className="text-slate-600 text-sm">{i + 1}</span>}
                  </div>
                  {current ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                  ) : lit ? (
                    <span className="text-white text-sm">✓</span>
                  ) : null}
                </div>
                <p className={`font-semibold text-sm leading-tight mb-1 ${lit ? 'text-white' : 'text-slate-500'}`}>{s.title}</p>
                <p className={`text-xs leading-snug ${lit ? 'text-slate-300' : 'text-slate-600'}`}>{s.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-slate-600 text-xs mt-4 text-center">Illustrative simulation — your real workflow, demoed free.</p>
    </div>
  );
}
