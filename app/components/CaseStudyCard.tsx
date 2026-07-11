import type { ReactNode } from 'react';

interface CaseStudyCardProps {
  title: string;
  company: string;
  challenge: string;
  solution: string;
  result: string;
  savings: string;
  icon: ReactNode;
}

export default function CaseStudyCard({
  title,
  company,
  challenge,
  solution,
  result,
  savings,
  icon,
}: CaseStudyCardProps) {
  return (
    <div className="glass rounded-2xl p-7 hover:border-white/30 hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-white leading-tight">{title}</h3>
          <p className="text-white text-sm font-medium">{company}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-slate-400 text-xs uppercase tracking-wider mb-1">Challenge</h4>
          <p className="text-slate-300 text-sm leading-relaxed">{challenge}</p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-400 text-xs uppercase tracking-wider mb-1">Solution</h4>
          <p className="text-slate-300 text-sm leading-relaxed">{solution}</p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-400 text-xs uppercase tracking-wider mb-1">Result</h4>
          <p className="text-slate-300 text-sm leading-relaxed">{result}</p>
        </div>

        <div className="bg-gradient-to-r from-white/10 to-white/5 border border-white/15 rounded-xl p-4 mt-2">
          <p className="text-2xl font-bold text-gradient">{savings}</p>
          <p className="text-slate-400 text-sm">saved per month</p>
        </div>
      </div>
    </div>
  );
}
