import type { ReactNode } from 'react';

export type Post = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  readMins: number;
  content: ReactNode;
};

// Blog posts live here. Add a new object to publish a new post.
// ponytail: plain data array beats an MDX pipeline until there are enough posts to justify one.
export const posts: Post[] = [
  {
    slug: 'automate-invoice-processing-without-hiring',
    title: 'How to Automate Invoice Processing (Without Hiring Anyone)',
    description:
      'A practical guide to automating supplier invoices end to end — from inbox capture and AI extraction to validation, approval, and posting into your accounting system.',
    datePublished: '2026-07-01',
    dateModified: '2026-07-01',
    readMins: 6,
    content: (
      <>
        <p>
          Most finance teams still process invoices the same way they did a decade ago: an invoice lands in an inbox,
          someone opens it, types the vendor, amount, tax and line items into the accounting system, checks it against a
          purchase order, and files it away. Multiply that by a few hundred invoices a month and you have a full working
          week disappearing into data entry — plus the occasional duplicate payment or missed due date.
        </p>
        <p>
          The good news: this is one of the most automatable processes in any business, because it follows rules. Here is
          how a modern, AI-assisted invoice pipeline actually works, stage by stage.
        </p>

        <h2>1. Capture invoices automatically</h2>
        <p>
          The first step is getting invoices out of the inbox without a human forwarding them. A dedicated address (say{' '}
          <em>accounts@yourcompany.com</em>) is monitored automatically; every PDF or scanned attachment is pulled in and
          queued for processing. Suppliers do not need to change anything about how they send invoices.
        </p>

        <h2>2. Extract the data with AI</h2>
        <p>
          This is where older &quot;template&quot; OCR tools fall down — every supplier formats invoices differently.
          Modern extraction combines OCR with a language model that understands the document, so it reads the vendor,
          invoice number, dates, tax, totals, PO number and individual line items regardless of layout. No template
          setup per supplier.
        </p>

        <h2>3. Validate before anything is posted</h2>
        <p>
          Extraction alone is not enough — the value is in the checks. A good pipeline validates every invoice against
          your own records:
        </p>
        <ul>
          <li>Three-way matching: does the invoice match the purchase order and the goods receipt?</li>
          <li>Duplicate detection: has this invoice number or amount already been seen?</li>
          <li>Math checks: do the line items, tax and total actually add up?</li>
          <li>Vendor checks: is this a known supplier with known bank details?</li>
        </ul>

        <h2>4. Route the uncertain cases to a human</h2>
        <p>
          The single most important design decision is the confidence threshold. Anything the system is sure about flows
          straight through. Anything unusual — a mismatch, a new vendor, a low-confidence field — is flagged and routed to
          a person, never guessed. This is what makes automation safe enough to trust with money: it fails loudly, not
          silently.
        </p>

        <h2>5. Post clean data into your system</h2>
        <p>
          Once validated, the invoice is pushed into your accounting or ERP system — QuickBooks, Xero, NetSuite, or
          similar — already coded and matched. Approval workflows can be triggered automatically based on amount or cost
          centre.
        </p>

        <h2>What results to expect</h2>
        <p>
          In practice, teams that automate this process typically cut invoice-posting time by 80–90%, eliminate duplicate
          payments, and stop paying late fees. The finance team stops keying data and starts doing the work that actually
          needs judgment — forecasting, vendor negotiation, cash-flow planning.
        </p>

        <h2>Should you build it or have it built?</h2>
        <p>
          If your volume is low and your invoices are simple, a DIY automation tool may be enough. Once you are dealing
          with varied layouts, validation rules, and real money on the line, a done-for-you build usually pays for itself
          quickly — you get the outcome and the maintenance, not a toolkit to babysit. Either way, the pattern above is
          the same; only who builds and maintains it changes.
        </p>
      </>
    ),
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
