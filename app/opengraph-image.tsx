import { ImageResponse } from 'next/og';

export const alt = 'Deooch — Done-For-You AI Automation Agency';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, #1f1f1f, transparent), #050505',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, color: '#b5b5b5', fontSize: 30, fontWeight: 600 }}>
          <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#ffffff' }} />
          Deooch · Berlin-based · GDPR-compliant
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0 20px', fontSize: 76, fontWeight: 800, lineHeight: 1.1, marginTop: 28, maxWidth: 1000 }}>
          <span>AI Automation That</span>
          <span
            style={{
              background: 'linear-gradient(90deg, #ffffff, #b5b5b5)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Pays For Itself
          </span>
          <span>in Weeks</span>
        </div>
        <div style={{ fontSize: 34, color: '#94a3b8', marginTop: 28 }}>
          Invoicing · Marketing ops · Logistics · Any custom workflow — 28+ hrs saved/mo at 99%+ accuracy
        </div>
      </div>
    ),
    size
  );
}
