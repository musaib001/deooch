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
    <div className="glass rounded-3xl p-6 md:p-10 border-blue-500/20">
      {/* Scenario tabs */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {scenarios.map((s, i) => (
          <button
            key={s.id}
            onClick={() => pick(i)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition ${
              i === sel
                ? 'bg-blue-500/15 border-blue-500/40 text-white'
                : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            <span>{s.icon}</span>
            {s.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Steps */}
        <div className="md:col-span-3 space-y-2">
          {sc.steps.map((s, i) => {
            const lit = i <= active;
            const current = i === active && running;
            return (
              <div
                key={s.title}
                className={`flex items-center gap-4 rounded-xl p-3 border transition-all duration-300 ${
                  lit ? 'bg-blue-500/10 border-blue-500/40' : 'bg-white/[0.02] border-white/5 opacity-50'
                } ${current ? 'scale-[1.02]' : ''}`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0 transition ${
                    lit ? 'bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-white/10' : 'bg-white/5'
                  }`}
                >
                  {lit ? s.icon : <span className="text-slate-600">{i + 1}</span>}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`font-semibold ${lit ? 'text-white' : 'text-slate-500'}`}>{s.title}</p>
                  <p className={`text-sm truncate ${lit ? 'text-slate-300' : 'text-slate-600'}`}>{s.detail}</p>
                </div>
                {current && <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse flex-shrink-0" />}
                {lit && !current && <span className="text-blue-400 flex-shrink-0">✓</span>}
              </div>
            );
          })}
        </div>

        {/* Counter + controls */}
        <div className="md:col-span-2 flex flex-col justify-center text-center md:border-l border-white/10 md:pl-8">
          <p className="text-slate-400 text-sm uppercase tracking-wider mb-1">Processing time</p>
          <p className="text-6xl font-bold text-gradient tabular-nums leading-none">{fmt(minutes, sc.autoMin)}</p>
          <p className="text-slate-500 text-sm mt-3">
            Manual: <span className="line-through">{fmt(sc.manualMin, sc.manualMin)}</span> {sc.unit}
          </p>

          {done ? (
            <div className="mt-6">
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-4">
                <p className="text-green-400 font-bold text-lg">≈ {fmt(saved, sc.autoMin)} saved</p>
                <p className="text-slate-400 text-sm">{sc.unit}, every time</p>
              </div>
              <button onClick={() => reset()} className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                ↺ Run again
              </button>
            </div>
          ) : (
            <button
              onClick={run}
              disabled={running}
              className="mt-6 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-semibold px-6 py-3.5 rounded-lg transition shadow-lg shadow-blue-600/30"
            >
              {running ? 'Running…' : '▶ Run Automation'}
            </button>
          )}
          <p className="text-slate-600 text-xs mt-4">Illustrative simulation — your real workflow, demoed free.</p>
        </div>
      </div>
    </div>
  );
}
