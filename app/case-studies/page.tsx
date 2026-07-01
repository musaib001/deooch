import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CaseStudyCard from '../components/CaseStudyCard';

export const metadata = {
  title: 'Case Studies — AI Automation Results | Deooch',
  description: 'See how Deooch automated invoice processing, document handling, and lead entry for real businesses — with the exact problem, solution, and hours saved per month.',
  alternates: { canonical: '/case-studies' },
};

export default function CaseStudies() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-gradient font-semibold uppercase tracking-wide text-sm">Case Studies</span>
          <h1 className="text-5xl font-bold mb-6 mt-2 text-white">Real Results, Real Impact</h1>
          <p className="text-xl text-slate-400">
            Detailed breakdowns of how we automated real workflows—the problem, what we built, and the measurable outcome.
          </p>
        </div>
      </section>

      {/* Featured deep-dive */}
      <section className="px-4 pb-12">
        <div className="max-w-5xl mx-auto glass rounded-3xl p-8 md:p-12 border-white/15">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-3xl">📄</div>
            <div>
              <h2 className="text-2xl font-bold text-white">Invoice-to-Accounting Automation</h2>
              <p className="text-white">B2B SaaS company · Berlin · 45 employees</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-slate-400 text-xs uppercase tracking-wider mb-2 font-semibold">The Problem</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Two finance staff manually entered ~520 supplier invoices per month into Xero. Each invoice took 4-5 minutes to key in and reconcile. Duplicate payments slipped through twice a quarter, and late-payment fees were adding up. Month-end close routinely ran 3 days over.
              </p>
            </div>
            <div>
              <h3 className="text-slate-400 text-xs uppercase tracking-wider mb-2 font-semibold">What We Built</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                An automated pipeline that watches the accounts@ inbox, extracts every field with AI (vendor, line items, VAT, totals, PO number), runs three-way matching against purchase orders and goods-received notes, flags anomalies and duplicates for a 10-second human review, then posts clean entries straight into Xero.
              </p>
            </div>
            <div>
              <h3 className="text-slate-400 text-xs uppercase tracking-wider mb-2 font-semibold">The Outcome</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Invoice posting dropped from ~40 hours/month to under 3. Zero duplicate payments in the six months since launch. Month-end close is now on time. The finance team was redeployed to cash-flow forecasting instead of data entry.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-gradient">40→3</p>
              <p className="text-slate-400 text-xs mt-1">hours per month</p>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-gradient">€0</p>
              <p className="text-slate-400 text-xs mt-1">duplicate payments</p>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-gradient">3 wks</p>
              <p className="text-slate-400 text-xs mt-1">to go live</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <CaseStudyCard
              icon="📑"
              title="Document Digitization"
              company="Boutique Law Firm (12 attorneys)"
              challenge="Paralegals scanned and hand-filed ~2,000 case documents a month. Finding a document took 15+ minutes; compliance audits ate entire days."
              solution="OCR + AI classification pipeline that digitises every document, tags it by matter and type, extracts key dates and parties, and makes it all full-text searchable with an audit trail."
              result="Filing is instant, search takes seconds, and audit prep dropped from days to hours. Paralegals reclaimed ~30 hours/month for billable work."
              savings="30+ hrs"
            />

            <CaseStudyCard
              icon="🗂️"
              title="Lead Capture & CRM Sync"
              company="Digital Marketing Agency (30 reps)"
              challenge="200+ weekly leads from forms and emails were copied into HubSpot by hand. Reps saw leads a day late and ~12% of records had typos."
              solution="Automated extraction from every inbound channel, firmographic enrichment, de-duplication, and instant push into HubSpot with auto-assignment to the right rep."
              result="Leads land in the CRM within minutes — enriched and assigned. Response time improved 45% and data-entry errors hit near zero."
              savings="25+ hrs"
            />

            <CaseStudyCard
              icon="💳"
              title="Expense Report Automation"
              company="Management Consultancy (60 staff)"
              challenge="Consultants emailed receipt photos; finance spent 2 days/week keying them in, matching cards, and chasing missing info before reimbursing."
              solution="AI reads each receipt (amount, date, vendor, category), auto-matches to corporate-card transactions and policy rules, routes exceptions for approval, and syncs to the accounting system."
              result="Expense processing is near-real-time. Finance workload cut in half and reimbursements that took 2 weeks now take 2 days."
              savings="20+ hrs"
            />

            <CaseStudyCard
              icon="📧"
              title="Inbox-to-Database Pipeline"
              company="Real Estate Agency (8 agents)"
              challenge="Property inquiries arrived as free-text emails. Manual entry into the client database was slow, and hot leads went cold over weekends."
              solution="Email parser extracts prospect name, phone, budget and property interest, creates a database record, and triggers an instant auto-reply plus agent assignment."
              result="No more missed inquiries. Prospects are contacted within minutes, and the agency now handles 3x the lead volume with the same headcount."
              savings="18+ hrs"
            />

            <CaseStudyCard
              icon="📋"
              title="Onboarding Form Processing"
              company="B2B SaaS Onboarding Team"
              challenge="New-customer signup forms had errors and gaps. Manual validation and account setup slowed onboarding and hurt early activation."
              solution="Automated form validation, real-time duplicate detection, data enrichment, and auto-creation of accounts with personalised setup guides sent on completion."
              result="Faster, cleaner onboarding lifted activation rate by 35% and freed the support team from manual setup work entirely."
              savings="22+ hrs"
            />

            <CaseStudyCard
              icon="📊"
              title="Automated Compliance Reporting"
              company="Healthcare Admin Company"
              challenge="Staff manually pulled data from patient forms and insurer documents to compile reports. It took days and inconsistencies triggered audit findings."
              solution="Document parsing extracts structured data into a single source of truth, with scheduled auto-generation of compliance reports in the required formats."
              result="Reports generate in hours instead of days with 100% data consistency. Audits are now routine instead of a fire drill."
              savings="35+ hrs"
            />
          </div>

          <div className="glass border-white/15 rounded-3xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Average Results Across Clients</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-5xl font-bold text-gradient">28</p>
                <p className="text-slate-400 mt-2">Hours saved per month</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-gradient">99.2%</p>
                <p className="text-slate-400 mt-2">Accuracy rate</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-gradient">3-5x</p>
                <p className="text-slate-400 mt-2">Process speed improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center glass rounded-3xl p-12 border-white/15">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Automate Your Business?</h2>
          <p className="text-xl mb-8 text-slate-300">
            Every business has repetitive work that can be automated. Let&apos;s find yours.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-neutral-200 text-black font-bold px-8 py-4 rounded-lg transition text-lg shadow-lg shadow-black/40"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
