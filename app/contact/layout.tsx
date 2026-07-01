import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Book a Free Consultation | Deooch',
  description:
    'Tell us about one real, repetitive process and we\'ll build a working AI automation demo of it for free. Berlin-based, GDPR-compliant.',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
