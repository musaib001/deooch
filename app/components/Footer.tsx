import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center font-bold">
                D
              </div>
              <span className="font-bold text-white">Deooch</span>
            </div>
            <p className="text-sm">AI automation for repetitive business tasks.</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/how-it-works" className="hover:text-blue-400 transition">How It Works</Link></li>
              <li><Link href="/case-studies" className="hover:text-blue-400 transition">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><a href="mailto:hello@deooch.com" className="hover:text-blue-400 transition">Email</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Get Started</h3>
            <p className="text-sm mb-4">Ready to save hours of manual work?</p>
            <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition">
              Book a Call
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-sm text-center">
          <p>&copy; {currentYear} Deooch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
