// Categorized product catalogue — powers the Products mega-menu and the /products page.
// A product's `href` links to an existing detail page where one exists.

export type CatProduct = { name: string; desc: string; href?: string };
export type ProductCategory = {
  slug: string;
  label: string;
  blurb: string;
  color: string;
  products: CatProduct[];
};

export const getProductCategory = (slug: string) =>
  productCategories.find((c) => c.slug === slug);

export const productCategories: ProductCategory[] = [
  {
    slug: 'hospital-management',
    label: 'Hospital Management',
    blurb: 'Automate the back-office work slowing hospital operations down.',
    color: '#34d399',
    products: [
      { name: 'Pharmacy Inventory', desc: 'Real-time stock tracking with automatic reordering.' },
      { name: 'Medicine Expiry Tracking', desc: 'Flag expiring medicines weeks ahead to cut waste.' },
      { name: 'Equipment & Asset Tracking', desc: 'Never miss a service, calibration, or warranty date.' },
      { name: 'Automated Reporting', desc: 'Compliance and operational reports on a schedule.' },
      { name: 'Billing Automation', desc: 'Speed up claims and close the gap to payment.' },
      { name: 'Staff Scheduling', desc: 'Rosters that respect availability and coverage rules.' },
    ],
  },
  {
    slug: 'ai-agents',
    label: 'AI Agents',
    blurb: 'Autonomous agents that take action across your tools.',
    color: '#a78bfa',
    products: [
      { name: 'Support Ticket Agent', desc: 'Triage, draft replies, and resolve routine tickets.' },
      { name: 'Inbox Triage Agent', desc: 'Read, categorize, and route incoming email automatically.' },
      { name: 'Lead Qualification Agent', desc: 'Score and enrich inbound leads, then route them.' },
      { name: 'Research & Summary Agent', desc: 'Gather sources and produce briefs on demand.' },
    ],
  },
  {
    slug: 'document-automation',
    label: 'Document Automation',
    blurb: 'Turn any document into clean, structured, searchable data.',
    color: '#22d3ee',
    products: [
      { name: 'Document Digitization', desc: 'OCR + AI classification for paper and PDFs.', href: '/solutions/document-digitization' },
      { name: 'Invoice Processing', desc: 'Inbox-to-accounting invoice capture and validation.', href: '/solutions/invoice-processing' },
      { name: 'Contract & Form Extraction', desc: 'Pull key fields, dates, and clauses into your systems.' },
    ],
  },
  {
    slug: 'freight-logistics',
    label: 'Freight & Logistics',
    blurb: 'Shipping and customs paperwork, handled end to end.',
    color: '#38bdf8',
    products: [
      { name: 'Bill of Lading Automation', desc: 'Read BOLs and post clean entries to your TMS.', href: '/solutions/freight-logistics' },
      { name: 'Customs Documents', desc: 'Extract and validate customs forms and HS codes.' },
      { name: 'POD Tracking', desc: 'Confirm proof-of-delivery and trigger invoicing.' },
      { name: 'Charge Reconciliation', desc: 'Recalculate freight, duties, and demurrage automatically.' },
    ],
  },
  {
    slug: 'finance-expense',
    label: 'Finance & Expense',
    blurb: 'Cut the manual work out of money in and money out.',
    color: '#fb7185',
    products: [
      { name: 'Receipt & Expense Automation', desc: 'Snap a receipt; AI reads, matches, and syncs it.', href: '/solutions/expense-automation' },
      { name: 'Invoice Processing', desc: 'Capture, match, and post supplier invoices.', href: '/solutions/invoice-processing' },
      { name: 'Reconciliation & Reporting', desc: 'Auto-match transactions and generate reports.' },
    ],
  },
  {
    slug: 'marketing-sales',
    label: 'Marketing & Sales Ops',
    blurb: 'Leads, follow-ups, and CRM hygiene that run themselves.',
    color: '#f59e0b',
    products: [
      { name: 'Lead Routing', desc: 'Assign inbound leads to the right rep instantly.', href: '/solutions/marketing-sales-ops' },
      { name: 'CRM Sync', desc: 'Keep records clean, deduped, and up to date.', href: '/solutions/marketing-sales-ops' },
      { name: 'Follow-up Sequences', desc: 'Trigger personalized outreach the moment a lead qualifies.' },
      { name: 'Campaign Reporting', desc: 'Assemble pipeline and campaign reports automatically.' },
    ],
  },
];
