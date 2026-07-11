import {
  ReceiptText,
  Megaphone,
  Database,
  ScanText,
  CreditCard,
  Truck,
  HeartPulse,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

// ponytail: string-name → icon map so solution data stays serializable (it feeds JSON-LD schema)
const map: Record<string, LucideIcon> = {
  receipt: ReceiptText,
  megaphone: Megaphone,
  database: Database,
  scan: ScanText,
  card: CreditCard,
  truck: Truck,
  health: HeartPulse,
  workflow: Workflow,
};

export default function Icon({ name, className }: { name: string; className?: string }) {
  const C = map[name] ?? Workflow;
  return <C className={className} aria-hidden />;
}
