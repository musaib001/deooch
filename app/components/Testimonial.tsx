interface TestimonialProps {
  name: string;
  role: string;
  quote: React.ReactNode;
  initials: string;
  color: string;
}

export default function Testimonial({ name, role, quote, initials, color }: TestimonialProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0 ${color}`}>
          {initials}
        </div>
        <div>
          <p className="font-bold text-slate-900 leading-tight">{name}</p>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed">{quote}</p>
      <div className="text-yellow-400 mt-4">★★★★★</div>
    </div>
  );
}

// Highlight helper — green underline like the reference sites
export function HL({ children }: { children: React.ReactNode }) {
  return <span className="bg-blue-100 text-blue-900 font-semibold px-1 rounded">{children}</span>;
}
