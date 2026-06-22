'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
  { icon: '📥', title: 'Invoice received', detail: 'New supplier invoice lands in accounts@ inbox' },
  { icon: '🔍', title: 'Extracting data', detail: 'AI reads vendor, line items, VAT, totals & PO number' },
  { icon: '🔗', title: 'Three-way matching', detail: 'Validates against purchase order & goods received' },
  { icon: '🛡️', title: 'Checking duplicates', detail: 'Flags anything already paid or out of policy' },
  { icon: '📊', title: 'Posting to Xero', detail: 'Clean entry pushed straight into accounting' },
  { icon: '✅', title: 'Done', detail: 'Approved and filed — no human keystrokes' },
];

const MANUAL_MIN = 240; // 4 hours
const AUTO_MIN = 8;
const DURATION = 5200; // ms for the whole run

function fmt(min: number) {
  const m = Math.max(AUTO_MIN, Math.round(min));
  if (m >= 60) {
    const h = Math.floor(m / 60);
    const r = m % 60;
    return `${h}h ${r.toString().padStart(2, '0')}m`;
  }
  return `${m}m`;
}

export default function WorkflowDemo() {
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [active, setActive] = useState(-1); // highest lit step
  const [minutes, setMinutes] = useState(MANUAL_MIN);
  const raf = useRef<number | null>(null);

  function run() {
    if (running) return;
    setRunning(true);
    setDone(false);
    setActive(-1);
    setMinutes(MANUAL_MIN);

    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - p, 2); // ease-out
      setActive(Math.min(steps.length - 1, Math.floor(p * steps.length)));
      setMinutes(MANUAL_MIN - eased * (MANUAL_MIN - AUTO_MIN));
      if (p < 1) {
        raf.current = requestAnimationFrame(tick);
      } else {
        setActive(steps.length - 1);
        setMinutes(AUTO_MIN);
        setRunning(false);
        setDone(true);
      }
    };
    raf.current = requestAnimationFrame(tick);
  }

  function reset() {
    if (raf.current) cancelAnimationFrame(raf.current);
    setRunning(false);
    setDone(false);
    setActive(-1);
    setMinutes(MANUAL_MIN);
  }

  useEffect(() => () => { if (raf.current) cancelAnimationFrame(raf.current); }, []);

  const saved = MANUAL_MIN - Math.round(minutes);

  return (
    <div className="glass rounded-3xl p-6 md:p-10 border-blue-500/20">
      <div className="grid md:grid-cols-5 gap-8">
        {/* Steps */}
        <div className="md:col-span-3 space-y-2">
          {steps.map((s, i) => {
            const lit = i <= active;
            const current = i === active && running;
            return (
              <div
                key={s.title}
                className={`flex items-center gap-4 rounded-xl p-3 border transition-all duration-300 ${
                  lit
                    ? 'bg-blue-500/10 border-blue-500/40'
                    : 'bg-white/[0.02] border-white/5 opacity-50'
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
                {current && (
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse flex-shrink-0" />
                )}
                {lit && !current && <span className="text-blue-400 flex-shrink-0">✓</span>}
              </div>
            );
          })}
        </div>

        {/* Counter + controls */}
        <div className="md:col-span-2 flex flex-col justify-center text-center md:border-l border-white/10 md:pl-8">
          <p className="text-slate-400 text-sm uppercase tracking-wider mb-1">Processing time</p>
          <p className="text-6xl font-bold text-gradient tabular-nums leading-none">{fmt(minutes)}</p>
          <p className="text-slate-500 text-sm mt-3">
            Manual: <span className="line-through">4h 00m</span> per batch
          </p>

          {done ? (
            <div className="mt-6">
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-4">
                <p className="text-green-400 font-bold text-lg">≈ {fmt(saved)} saved</p>
                <p className="text-slate-400 text-sm">per invoice batch, every time</p>
              </div>
              <button onClick={reset} className="text-blue-400 hover:text-blue-300 text-sm font-medium">
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
          <p className="text-slate-600 text-xs mt-4">Illustrative demo of a real invoice workflow.</p>
        </div>
      </div>
    </div>
  );
}
