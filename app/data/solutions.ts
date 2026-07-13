export type ServiceStep = { title: string; detail: string };
export type ServiceFaq = { q: string; a: string };
export type ServiceProof = {
  stat: string;
  statLabel: string;
  note: string;
  quote?: string;
  quoteSource?: string;
};

export type Solution = {
  icon: string;
  title: string;
  tagline: string;
  points: string[];
  // Fields below are only present for solutions with a dedicated detail page.
  slug?: string;
  painPoint?: string;
  steps?: ServiceStep[];
  integrations?: string[];
  proof?: ServiceProof;
  faqs?: ServiceFaq[];
};

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);

export const solutions: Solution[] = [
  {
    icon: 'receipt',
    title: 'Invoice Processing',
    tagline: 'From inbox to accounting system — untouched by human hands.',
    slug: 'invoice-processing',
    painPoint:
      'A few hundred supplier invoices a month means a full working week disappears into data entry — plus the duplicate payments and late fees that come with doing it by hand.',
    points: [
      'Auto-capture invoices from email, PDF, or scans using AI document understanding (OCR + LLM extraction)',
      'Extract vendor, line items, tax, totals and PO numbers — then validate against your records',
      'Flag mismatches and duplicates for review; push clean data into QuickBooks, Xero, NetSuite or Stripe',
      'Three-way matching (PO ↔ invoice ↔ receipt) so nothing gets paid twice',
      'No per-supplier template setup — extraction works across whatever layout each vendor sends',
      'Confidence-based routing: certain invoices post automatically, uncertain ones go to a human first',
      'Full audit trail of every extraction, match, and approval decision',
    ],
    steps: [
      { title: 'Capture', detail: 'Every invoice sent to accounts@ is pulled in automatically — suppliers change nothing.' },
      { title: 'Extract', detail: 'AI reads vendor, line items, tax, totals and PO number regardless of layout.' },
      { title: 'Validate', detail: 'Three-way matching, duplicate detection, and math checks run before anything moves.' },
      { title: 'Route exceptions', detail: 'Mismatches or low-confidence fields go to a human — never guessed.' },
      { title: 'Post', detail: 'Clean, coded entries land in your accounting system, ready for approval workflows.' },
    ],
    integrations: ['QuickBooks', 'Xero', 'NetSuite', 'Stripe'],
    proof: {
      stat: '40 → 3 hrs/month',
      statLabel: 'invoice posting time',
      note: 'Zero duplicate payments in six months since launch; month-end close is now on time.',
      quote: 'Deooch saved us 40 hours a month on invoice processing. The system is reliable and the team was great to work with.',
      quoteSource: 'Finance Manager, B2B SaaS · Berlin',
    },
    faqs: [
      { q: 'What if an invoice doesn’t match the purchase order?', a: 'It’s flagged for a quick human review instead of being posted or rejected automatically. You confirm or correct it, and the pipeline continues.' },
      { q: 'Which accounting systems do you support?', a: 'QuickBooks, Xero, NetSuite and Stripe out of the box — if it has an API or an inbox, we can usually connect to it.' },
      { q: 'How long until this is live?', a: 'Most invoice automations go live in 2-4 weeks from the first call, run alongside your manual process until accuracy is proven, then cut over.' },
    ],
  },
  {
    icon: 'megaphone',
    title: 'Marketing & Sales Ops',
    tagline: 'Campaigns, leads and follow-ups that run themselves.',
    slug: 'marketing-sales-ops',
    painPoint:
      'Leads copied by hand from forms and emails into a CRM arrive a day late, with typos creeping into a meaningful share of records — and speed-to-lead is one of the strongest predictors of whether a deal closes at all.',
    points: [
      'Route and enrich inbound leads, then sync them straight into your CRM',
      'Trigger personalised follow-up sequences the moment a lead qualifies',
      'Keep CRM records clean — dedupe, update stages and log activity automatically',
      'Assemble recurring campaign and pipeline reports from every source you use',
      'Instant auto-reply and rep assignment the moment a lead arrives, including weekends',
      'Works across every inbound channel — web forms, ads, and free-text emails',
      'De-duplicates and standardises records as they’re written, not in a monthly cleanup',
    ],
    steps: [
      { title: 'Lead captured', detail: 'A form, ad, or inbound email creates a new lead automatically.' },
      { title: 'Enriched & scored', detail: 'AI adds firmographics and ranks fit against your ideal customer profile.' },
      { title: 'Routed to owner', detail: 'Assigned to the right rep by territory, segment, or round robin.' },
      { title: 'Synced to CRM', detail: 'A clean, de-duplicated record is written to HubSpot or Salesforce.' },
      { title: 'Follow-up sent', detail: 'A personalised sequence triggers automatically, no manual kickoff.' },
      { title: 'Logged & tracked', detail: 'Activity is logged; only genuine edge cases are flagged for a person.' },
    ],
    integrations: ['HubSpot', 'Salesforce', 'Google Workspace'],
    proof: {
      stat: '45% faster',
      statLabel: 'lead response time',
      note: 'Leads land in the CRM within minutes, enriched and assigned, with data-entry errors near zero.',
      quote: 'Every property inquiry now lands in our CRM in minutes. We handle 3x more leads with the same team.',
      quoteSource: 'Operations Lead, Property management firm',
    },
    faqs: [
      { q: 'Which CRMs do you support?', a: 'HubSpot and Salesforce are the most common, but we connect to most CRMs with an API.' },
      { q: 'Can leads be routed to specific reps by territory?', a: 'Yes — routing rules are scoped to your exact process: territory, segment, round robin, or a mix.' },
      { q: 'Does this replace our marketing automation tool?', a: 'No — it connects the pieces that don’t talk to each other today (forms, inbox, CRM, reporting) rather than replacing tools you already rely on.' },
    ],
  },
  {
    icon: 'scan',
    title: 'Document Scanning & Digitization',
    tagline: 'Turn paper and PDFs into searchable, structured data.',
    slug: 'document-digitization',
    painPoint:
      'Scanning and hand-filing a couple thousand documents a month means finding one file takes 15+ minutes, and a compliance audit can eat entire days.',
    points: [
      'Bulk-convert contracts, forms, and records into searchable digital files',
      'AI classifies each document by type and routes it to the right folder or system',
      'Extract key fields (dates, names, amounts, clauses) into a structured database',
      'Full-text search and audit trail across everything you have ever filed',
      'Tags every document by matter, case, or category automatically as it’s processed',
      'Handles scanned paper and native PDFs in the same pipeline',
      'Compliance-ready audit trail for every document’s processing history',
    ],
    steps: [
      { title: 'Documents arrive', detail: 'Scans or uploads come in from any source — inbox, shared drive, or scanner.' },
      { title: 'Classify', detail: 'AI identifies the document type and routes it to the right destination.' },
      { title: 'Extract fields', detail: 'Key dates, names, amounts and clauses are pulled into structured data.' },
      { title: 'File & index', detail: 'Documents are filed automatically with full-text search enabled.' },
      { title: 'Audit-ready', detail: 'Every document carries a processing trail for compliance review.' },
    ],
    integrations: ['Google Workspace', 'Excel', 'Notion'],
    proof: {
      stat: '30+ hrs/month',
      statLabel: 'reclaimed for billable work',
      note: 'Filing became instant, search takes seconds, and audit prep dropped from days to hours.',
      quote: 'We were drowning in document scanning. Within a month, our team was 80% more efficient. Highly recommend.',
      quoteSource: 'Operations Director, Boutique law firm · 12 attorneys',
    },
    faqs: [
      { q: 'What document types can you handle?', a: 'Contracts, forms, correspondence, scanned paper, and native PDFs — if it has text or can be OCR’d, we can process it.' },
      { q: 'Is handwritten content supported?', a: 'Legible handwriting is usually readable; anything below a confidence threshold is routed to a person rather than guessed.' },
      { q: 'How is sensitive data protected?', a: 'Encrypted in transit and at rest, GDPR-aware handling throughout, and DPAs available before any work begins.' },
    ],
  },
  {
    icon: 'database',
    title: 'Data Entry & Migration',
    tagline: 'Stop copy-pasting between systems.',
    slug: 'data-entry-migration',
    painPoint:
      'Retyping the same record into a second system — or fixing errors and gaps in a signup form by hand — slows everything downstream and quietly hurts activation.',
    points: [
      'Move data between spreadsheets, CRMs, ERPs and databases automatically',
      'Fill web forms and internal tools on a schedule or on trigger',
      'Clean, de-duplicate and standardise records as they move',
      'One-time migrations or always-on syncs — your choice',
      'Validates and de-duplicates as records move, not in a cleanup pass afterward',
      'Runs on a schedule or triggers instantly on a new event',
      'Handles historical, one-time migrations as well as always-on syncing',
    ],
    steps: [
      { title: 'Detect', detail: 'A new or changed record is picked up from the source system or file.' },
      { title: 'Validate', detail: 'Fields are checked and enriched before anything is written.' },
      { title: 'De-duplicate', detail: 'The record is checked against what already exists in the target system.' },
      { title: 'Write', detail: 'Clean data lands in the destination system(s), correctly formatted.' },
      { title: 'Confirm', detail: 'A confirmation or setup step runs automatically on completion.' },
    ],
    integrations: ['Google Workspace', 'Excel', 'Notion'],
    proof: {
      stat: '35% lift',
      statLabel: 'in onboarding activation',
      note: 'Automated form validation, duplicate detection, and account creation freed the support team from manual setup work entirely.',
    },
    faqs: [
      { q: 'Can you handle a one-time migration, not an ongoing sync?', a: 'Yes — one-time historical migrations and always-on syncs are both supported; you choose which fits your case.' },
      { q: 'What if source data is messy or inconsistent?', a: 'Cleaning and standardising records is part of the pipeline, not a separate step you need to do first.' },
      { q: 'Which systems can you move data between?', a: 'Spreadsheets, CRMs, ERPs, databases, and most tools with an API or a form to fill.' },
    ],
  },
  {
    icon: 'card',
    title: 'Receipt & Expense Automation',
    tagline: 'Expense reports that file themselves.',
    slug: 'expense-automation',
    painPoint:
      'Employees emailing receipt photos while finance spends whole days a week keying them in, matching cards, and chasing missing information before anyone gets reimbursed.',
    points: [
      'Employees snap a photo; AI reads amount, date, vendor and category',
      'Auto-match to corporate card transactions and policy rules',
      'Route for approval and sync to your accounting/payroll system',
      'Real-time spend dashboards and faster reimbursements',
      'Exceptions are routed for approval instead of blocking every reimbursement',
      'Policy checks run automatically, before an approver ever sees the report',
    ],
    steps: [
      { title: 'Capture', detail: 'A receipt photo or forwarded email creates a new expense entry.' },
      { title: 'Extract', detail: 'AI reads amount, date, vendor and category from the receipt.' },
      { title: 'Match', detail: 'Matched against the corporate card transaction and policy rules.' },
      { title: 'Approve', detail: 'Exceptions route for approval; clean entries continue automatically.' },
      { title: 'Sync', detail: 'Approved expenses post to your accounting or payroll system.' },
    ],
    integrations: ['QuickBooks', 'Xero', 'Google Workspace'],
    proof: {
      stat: 'Cut in half',
      statLabel: 'finance workload',
      note: 'Expense processing runs near-real-time; reimbursements that took two weeks now take two days.',
      quote: 'Our finance team used to lose two full days a week on expense reports. Now it’s basically zero. Game changer.',
      quoteSource: 'Founder, Consulting firm · 8 staff',
    },
    faqs: [
      { q: 'How do employees submit receipts?', a: 'A photo or a forwarded email is enough — no app to install or form to fill out manually.' },
      { q: 'What happens with policy violations?', a: 'They’re routed for approval rather than silently rejected or silently approved, so a person always makes the final call.' },
      { q: 'Does this integrate with payroll?', a: 'Yes, for reimbursement — the exact integration depends on which payroll or accounting system you run.' },
    ],
  },
  {
    icon: 'truck',
    title: 'Freight & Shipping Document Automation',
    tagline: 'Bills of lading, customs docs and PODs — handled.',
    slug: 'freight-logistics',
    painPoint:
      'Keying ~1,400 bills of lading, customs forms and PODs a month into a TMS by hand is slow, error-prone, and a steady source of disputed charges and demurrage.',
    points: [
      'Read bills of lading, commercial invoices, packing lists and customs forms with AI',
      'Match shipments against bookings and flag discrepancies in weight, quantity or HS codes',
      'Auto-calculate freight charges, demurrage and duties; push into your TMS or ERP',
      'Track proof-of-delivery and trigger invoicing the moment a load is confirmed',
      'Cross-checks every shipment against the original booking automatically',
      'Recalculates freight, duties and demurrage instead of trusting manual math',
    ],
    steps: [
      { title: 'Document arrives', detail: 'A bill of lading, packing list, or customs form hits the inbox.' },
      { title: 'Read', detail: 'AI extracts shipper, weight, HS codes and charges regardless of format.' },
      { title: 'Match booking', detail: 'Cross-checked against the original booking and shipment record.' },
      { title: 'Calculate charges', detail: 'Freight, duties and demurrage are computed and any mismatch flagged.' },
      { title: 'Post to TMS', detail: 'A clean entry lands in your TMS or ERP.' },
      { title: 'Trigger invoice', detail: 'Proof-of-delivery confirmed → invoice goes out the same day.' },
    ],
    integrations: ['Your TMS / ERP'],
    proof: {
      stat: '90 → 10 hrs/month',
      statLabel: 'document handling',
      note: 'Charge disputes fell sharply and invoices now go out the same day a load is delivered.',
      quote: 'Our bills of lading and customs docs used to eat entire days. Deooch cut document handling by 85% and disputes dropped with it.',
      quoteSource: 'Ops Manager, Freight forwarder · Hamburg (60 staff)',
    },
    faqs: [
      { q: 'Which shipping documents can you process?', a: 'Bills of lading, commercial invoices, packing lists, customs forms and PODs — the formats vary by carrier and route, and the pipeline is built around yours.' },
      { q: 'Do you integrate with our TMS?', a: 'Yes, provided it has an API — we scope the exact integration during the discovery call.' },
      { q: 'What happens when weights or HS codes don’t match the booking?', a: 'It’s flagged for review before anything is posted or invoiced, not corrected silently.' },
    ],
  },
  {
    icon: 'health',
    title: 'Hospital & Healthcare Management',
    tagline: 'Less admin at the desk, more time with patients.',
    slug: 'healthcare-admin',
    painPoint:
      'Manually pulling data from patient forms and insurer documents to compile compliance reports takes days — and the inconsistencies it introduces are exactly what trigger audit findings.',
    points: [
      'Digitise patient intake forms, referrals and lab reports into your EHR/HIS',
      'Automate insurance claim prep, eligibility checks and coding from clinical notes',
      'Schedule appointments, send reminders and reconcile no-shows automatically',
      'GDPR-aware handling of patient data, with sensitive cases routed to staff for review',
      'Extracts structured data into a single source of truth across forms, referrals and lab reports',
      'Auto-generates recurring compliance reports in the format regulators expect',
    ],
    steps: [
      { title: 'Intake received', detail: 'A new patient form, referral or lab report comes in.' },
      { title: 'Extract details', detail: 'AI reads demographics, history and insurance information.' },
      { title: 'Eligibility check', detail: 'Insurance coverage is verified and gaps are flagged.' },
      { title: 'Code from notes', detail: 'Diagnosis and procedure codes are suggested for review.' },
      { title: 'Write to EHR', detail: 'A structured record is pushed into your EHR or HIS.' },
      { title: 'Ready for clinician', detail: 'Sensitive or ambiguous cases are routed to staff — never guessed.' },
    ],
    integrations: ['Your EHR / HIS'],
    proof: {
      stat: '100% consistency',
      statLabel: 'in compliance reporting',
      note: 'Reports generate in hours instead of days; audits are now routine instead of a fire drill.',
      quote: 'Reports that took days now take hours, with 100% data consistency. Our audits are painless now.',
      quoteSource: 'COO, Healthcare admin group',
    },
    faqs: [
      { q: 'How is patient data protected?', a: 'GDPR-aware handling throughout, encrypted in transit and at rest, with sensitive or ambiguous cases always routed to staff rather than auto-decided.' },
      { q: 'Which EHR/HIS systems do you support?', a: 'We connect to your existing system provided it has an API — scoped during the discovery call.' },
      { q: 'Does this replace clinical judgment?', a: 'No — it handles the administrative extraction and reporting; anything clinical or ambiguous is routed to your staff.' },
    ],
  },
  {
    icon: 'workflow',
    title: 'Any Custom Workflow',
    tagline: 'The categories above are starting points — if a process follows rules, we can automate it.',
    points: [
      'Bespoke automations scoped to a process unique to your business',
      'Connect tools that don\'t talk to each other via custom integrations',
      'Auto-generate recurring reports from multiple data sources',
      'Extract structured data from any document, system, or inbox',
    ],
  },
];
