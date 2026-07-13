import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Impressum — Deooch',
  description: 'Legal disclosure (Impressum) for Deooch.',
  alternates: { canonical: '/impressum' },
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
                <a href="mailto:hello@deooch.com" className="text-white hover:text-white">hello@deooch.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <p>
                Musaib Khan<br />
                Brigitte-Reimann-Straße<br />
                12629 Berlin<br />
                Germany
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, abrufbar unter{' '}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white">
                  ec.europa.eu/consumers/odr
                </a>
                . Unsere E-Mail-Adresse finden Sie oben unter Kontakt. Wir sind nicht verpflichtet und nicht bereit, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen
                zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                Gesetzen bleiben hiervon unberührt.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
