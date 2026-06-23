import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'The prompt that names the one pattern you cannot see - Cognitive Fingerprint';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        }}
      >
        {/* Fingerprint ridge arcs */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.06,
            display: 'flex',
          }}
        >
          <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none">
            <circle cx="600" cy="315" r="120" stroke="#d4af37" strokeWidth="2" fill="none" />
            <circle cx="600" cy="315" r="200" stroke="#d4af37" strokeWidth="2" fill="none" />
            <circle cx="600" cy="315" r="280" stroke="#d4af37" strokeWidth="2" fill="none" />
            <circle cx="600" cy="315" r="360" stroke="#d4af37" strokeWidth="2" fill="none" />
            <circle cx="600" cy="315" r="440" stroke="#d4af37" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
          }}
        >
          <div
            style={{
              fontSize: 26,
              color: '#d4af37',
              letterSpacing: 4,
              textTransform: 'uppercase',
              marginBottom: 28,
              display: 'flex',
            }}
          >
            From the AI Explored episode
          </div>

          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: '#ffffff',
              textAlign: 'center',
              lineHeight: 1.1,
              marginBottom: 28,
              display: 'flex',
            }}
          >
            Find the pattern
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: '#ffffff',
              textAlign: 'center',
              lineHeight: 1.1,
              marginBottom: 36,
              display: 'flex',
            }}
          >
            you can&apos;t see
          </div>

          <div
            style={{
              fontSize: 30,
              color: '#9ca3af',
              textAlign: 'center',
              display: 'flex',
            }}
          >
            One transcript. One named pattern, in your own words.
          </div>

          <div
            style={{
              fontSize: 24,
              color: '#d4af37',
              marginTop: 48,
              display: 'flex',
            }}
          >
            cognitivefingerprint.ai/sme
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
