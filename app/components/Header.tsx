import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg">
              D
            </div>
            <span className="font-bold text-xl">Deooch</span>
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            <Link href="/how-it-works" className="hover:text-blue-400 transition">
              How It Works
            </Link>
            <Link href="/case-studies" className="hover:text-blue-400 transition">
              Case Studies
            </Link>
            <Link href="/about" className="hover:text-blue-400 transition">
              About
            </Link>
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition">
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm transition">
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
