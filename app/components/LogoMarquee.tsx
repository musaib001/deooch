// Animated, infinitely-scrolling wordmark strip. Pure CSS marquee (no JS).
// ponytail: text wordmarks stand in for real logo SVGs — swap `logos` for <img> when you have client assets.
const logos = ['Uplift SaaS', 'Northwind', 'HanseFreight', 'MedCore', 'Brightpay', 'Ledgerly', 'Cargo42', 'Finflow'];

export default function LogoMarquee() {
  return (
    <section className="py-10">
      <p className="text-center text-slate-500 uppercase tracking-wider text-xs font-semibold mb-6">
        Trusted by teams at
      </p>
      <div className="marquee group relative overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#050505] to-transparent" />
        <div className="marquee-track">
          {[...logos, ...logos].map((name, i) => (
            <span
              key={i}
              className="mx-8 text-2xl font-semibold text-slate-500 transition-colors hover:text-white whitespace-nowrap"
              aria-hidden={i >= logos.length}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
