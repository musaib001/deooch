interface TestimonialProps {
  name: string;
  role: string;
  quote: React.ReactNode;
  initials: string;
  color: string;
}

export default function Testimonial({ name, role, quote, initials, color }: TestimonialProps) {
  return (
    <div className="glass rounded-2xl p-6 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0 ${color}`}>
          {initials}
        </div>
        <div>
          <p className="font-bold text-white leading-tight">{name}</p>
          <p className="text-slate-400 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-slate-300 leading-relaxed">{quote}</p>
      <div className="text-yellow-400 mt-4">★★★★★</div>
    </div>
  );
}

// Highlight helper — accent the key phrase
export function HL({ children }: { children: React.ReactNode }) {
  return <span className="bg-blue-500/20 text-blue-300 font-semibold px-1 rounded">{children}</span>;
}
