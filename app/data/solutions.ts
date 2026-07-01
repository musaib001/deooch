export type Solution = {
  icon: string;
  title: string;
  tagline: string;
  points: string[];
};

export const solutions: Solution[] = [
  {
    icon: '📄',
    title: 'Invoice Processing',
    tagline: 'From inbox to accounting system — untouched by human hands.',
    points: [
      'Auto-capture invoices from email, PDF, or scans using AI document understanding (OCR + LLM extraction)',
      'Extract vendor, line items, tax, totals and PO numbers — then validate against your records',
      'Flag mismatches and duplicates for review; push clean data into QuickBooks, Xero, NetSuite or Stripe',
      'Three-way matching (PO ↔ invoice ↔ receipt) so nothing gets paid twice',
    ],
  },
  {
    icon: '📑',
    title: 'Document Scanning & Digitization',
    tagline: 'Turn paper and PDFs into searchable, structured data.',
    points: [
      'Bulk-convert contracts, forms, and records into searchable digital files',
      'AI classifies each document by type and routes it to the right folder or system',
      'Extract key fields (dates, names, amounts, clauses) into a structured database',
      'Full-text search and audit trail across everything you have ever filed',
    ],
  },
  {
    icon: '🗂️',
    title: 'Data Entry & Migration',
    tagline: 'Stop copy-pasting between systems.',
    points: [
      'Move data between spreadsheets, CRMs, ERPs and databases automatically',
      'Fill web forms and internal tools on a schedule or on trigger',
      'Clean, de-duplicate and standardise records as they move',
      'One-time migrations or always-on syncs — your choice',
    ],
  },
  {
    icon: '💳',
    title: 'Receipt & Expense Automation',
    tagline: 'Expense reports that file themselves.',
    points: [
      'Employees snap a photo; AI reads amount, date, vendor and category',
      'Auto-match to corporate card transactions and policy rules',
      'Route for approval and sync to your accounting/payroll system',
      'Real-time spend dashboards and faster reimbursements',
    ],
  },
  {
    icon: '🚚',
    title: 'Freight & Shipping Document Automation',
    tagline: 'Bills of lading, customs docs and PODs — handled.',
    points: [
      'Read bills of lading, commercial invoices, packing lists and customs forms with AI',
      'Match shipments against bookings and flag discrepancies in weight, quantity or HS codes',
      'Auto-calculate freight charges, demurrage and duties; push into your TMS or ERP',
      'Track proof-of-delivery and trigger invoicing the moment a load is confirmed',
    ],
  },
  {
    icon: '🏥',
    title: 'Hospital & Healthcare Management',
    tagline: 'Less admin at the desk, more time with patients.',
    points: [
      'Digitise patient intake forms, referrals and lab reports into your EHR/HIS',
      'Automate insurance claim prep, eligibility checks and coding from clinical notes',
      'Schedule appointments, send reminders and reconcile no-shows automatically',
      'GDPR-aware handling of patient data, with sensitive cases routed to staff for review',
    ],
  },
  {
    icon: '📊',
    title: 'Reporting & Custom Workflows',
    tagline: 'If it follows rules, we can automate it.',
    points: [
      'Auto-generate recurring reports from multiple data sources',
      'Extract structured data from any document or system',
      "Connect tools that don't talk to each other via custom integrations",
      'Bespoke automations scoped to your exact process',
    ],
  },
];
