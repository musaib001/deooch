import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CaseStudyCard from '../components/CaseStudyCard';

export const metadata = {
  title: 'Case Studies - Deooch',
  description: 'Real-world examples of AI automation success. See how we saved clients hours of manual work.',
};

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Real Results, Real Impact</h1>
          <p className="text-xl text-gray-300">
            See how our automation solutions save companies thousands of hours and cut costs.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <CaseStudyCard
              icon="📄"
              title="Invoice Automation"
              company="Tech Startup (Series A)"
              challenge="Processing 500+ invoices monthly manually, taking 40 hours of admin time every month. Invoice errors caused payment delays and accounting issues."
              solution="Built automated invoice extraction system using OCR and AI. Data validation ensures accuracy. Integrated with QuickBooks and Stripe for seamless processing."
              result="Invoices processed in seconds instead of hours. 99.8% accuracy rate. Zero payment delays. Accounting team freed up for strategic work."
              savings="40+ hours/month"
            />

            <CaseStudyCard
              icon="📑"
              title="Document Digitization"
              company="Legal Firm (50+ attorneys)"
              challenge="Scanning and categorizing thousands of documents per month. Manual filing process took weeks. Poor searchability hurt client service."
              solution="Deployed document digitization pipeline. Automatic text extraction with OCR. AI-powered categorization by document type and client. Full-text searchable archive."
              result="Documents processed in hours instead of weeks. Instant search. Better compliance. Paralegals focus on legal work instead of admin."
              savings="30+ hours/month"
            />

            <CaseStudyCard
              icon="🗂️"
              title="Lead Management Automation"
              company="Sales Agency (30 reps)"
              challenge="Manually entering 200+ leads weekly into CRM from emails and forms. Data entry delays meant lost follow-up opportunities. High error rate."
              solution="Built automated lead extraction and CRM integration. Parses emails, extracts contact info, enriches data, creates CRM records instantly."
              result="Leads in CRM within minutes of sign-up. Sales team focuses on closing instead of data entry. 45% faster response time to new leads."
              savings="25+ hours/month"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <CaseStudyCard
              icon="💳"
              title="Receipt & Expense Tracking"
              company="Consulting Firm"
              challenge="Employee expense reports required manual receipt scanning and data entry. Finance team spent 2 days per week processing expenses."
              solution="Deployed automated receipt scanning and expense categorization. Employees upload photos, AI extracts amount, date, vendor. Auto-categorized by project."
              result="Expenses processed in real-time. Finance team workload cut in half. Better expense tracking. Faster reimbursements for employees."
              savings="20+ hours/month"
            />

            <CaseStudyCard
              icon="📧"
              title="Email-to-Database Automation"
              company="Real Estate Agency"
              challenge="Property inquiries came via email. Manual entry into client database was slow and error-prone. Missed follow-ups."
              solution="Automated email parsing. Extracts prospect name, phone, property interest, budget. Creates database records and triggers follow-up workflows."
              result="No more missed inquiries. Prospects contacted within minutes. Agency handles 3x more leads with same team size."
              savings="18+ hours/month"
            />

            <CaseStudyCard
              icon="📋"
              title="Form Processing"
              company="SaaS Onboarding Platform"
              challenge="Customer signup forms contained errors. Manual data validation and CRM entry slowed onboarding. High churn during setup."
              solution="Automated form validation and data enrichment. Real-time duplicate detection. Auto-creates accounts and sends setup guides."
              result="Faster onboarding improves activation rate by 35%. Support team freed from manual data entry. Better customer experience."
              savings="22+ hours/month"
            />

            <CaseStudyCard
              icon="📊"
              title="Data Extraction & Reporting"
              company="Healthcare Admin Company"
              challenge="Manual data extraction from patient forms and insurance docs. Reports took days to compile. Data inconsistencies."
              solution="Automated document parsing and data extraction. Structured data exports. Triggered automatic report generation."
              result="Reports generated in hours instead of days. 100% data consistency. Compliance team audits faster."
              savings="35+ hours/month"
            />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Average Results Across Clients</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-5xl font-bold text-blue-600">28</p>
                <p className="text-gray-700 mt-2">Hours saved per month</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-blue-600">99.2%</p>
                <p className="text-gray-700 mt-2">Accuracy rate</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-blue-600">3-5x</p>
                <p className="text-gray-700 mt-2">Process speed improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Every business has repetitive work that can be automated. Let's find yours.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
