import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Deooch logo" width={32} height={32} className="rounded-lg" />
              <span className="font-bold text-white">Deooch</span>
            </div>
            <p className="text-sm">AI automation for repetitive business tasks.</p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.linkedin.com/in/musaib-khan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
              <a
                href="mailto:hello@deooch.com"
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition text-sm"
              >
                ✉
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/how-it-works" className="hover:text-blue-400 transition">How It Works</Link></li>
              <li><Link href="/case-studies" className="hover:text-blue-400 transition">Case Studies</Link></li>
              <li><Link href="/compare/automation-agency-vs-diy" className="hover:text-blue-400 transition">Agency vs DIY Tools</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
              <li><Link href="/impressum" className="hover:text-blue-400 transition">Impressum</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <address className="text-sm not-italic space-y-1 text-gray-400">
              <p>Deooch</p>
              <p>Brigitte-Reimann-Straße</p>
              <p>12629 Berlin, Germany</p>
              <p><a href="mailto:hello@deooch.com" className="hover:text-blue-400 transition">hello@deooch.com</a></p>
            </address>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {currentYear} Deooch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
