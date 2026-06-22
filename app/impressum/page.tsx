import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Impressum — Deooch',
  description: 'Legal disclosure (Impressum) for Deooch.',
};

export default function Impressum() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <span className="text-gradient font-semibold uppercase tracking-wide text-sm">Legal</span>
          <h1 className="text-4xl font-bold text-white mt-2 mb-10">Impressum</h1>

          <div className="space-y-8 text-slate-300 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">Angaben gemäß § 5 DDG</h2>
              <p>
                Deooch<br />
                Musaib Khan<br />
                Brigitte-Reimann-Straße<br />
                12629 Berlin<br />
                Germany
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Kontakt</h2>
              <p>
                Email:{' '}
                <a href="mailto:hello@deooch.com" className="text-blue-400 hover:text-blue-300">hello@deooch.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Verantwortlich für den Inhalt</h2>
              <p>Musaib Khan (address as above)</p>
            </div>

            <div className="glass rounded-xl p-5 border-blue-500/20 text-sm text-slate-400">
              This Impressum is a template. German law (DDG / §5) has specific requirements depending on your legal form
              (e.g. VAT ID, commercial register entry). Please confirm the exact required details with a German legal
              professional and complete the street number and any VAT/registration info.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
