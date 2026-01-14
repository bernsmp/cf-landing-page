import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'The Coachs Eye - 7 Patterns from Legendary Leaders';
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
        {/* Court lines pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.04,
            display: 'flex',
          }}
        >
          {/* Basketball court half-circle */}
          <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none">
            <circle cx="600" cy="630" r="400" stroke="#d4af37" strokeWidth="2" fill="none" />
            <circle cx="600" cy="630" r="200" stroke="#d4af37" strokeWidth="2" fill="none" />
            <line x1="0" y1="315" x2="1200" y2="315" stroke="#d4af37" strokeWidth="2" />
            <line x1="600" y1="0" x2="600" y2="630" stroke="#d4af37" strokeWidth="2" />
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
          {/* Eye icon */}
          <div
            style={{
              width: 120,
              height: 120,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 40,
            }}
          >
            <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
              {/* Eye shape */}
              <path
                d="M60 10 C20 10 2 40 2 40 C2 40 20 70 60 70 C100 70 118 40 118 40 C118 40 100 10 60 10"
                stroke="#d4af37"
                strokeWidth="3"
                fill="none"
              />
              {/* Iris */}
              <circle cx="60" cy="40" r="22" stroke="#d4af37" strokeWidth="3" fill="none" />
              {/* Pupil */}
              <circle cx="60" cy="40" r="10" fill="#d4af37" />
              {/* Reflection */}
              <circle cx="55" cy="35" r="4" fill="#ffffff" opacity="0.5" />
            </svg>
          </div>

          {/* Title */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 24,
            }}
          >
            <span
              style={{
                fontSize: 80,
                fontWeight: 300,
                color: 'white',
                fontFamily: 'system-ui',
                letterSpacing: '-0.02em',
              }}
            >
              The{' '}
            </span>
            <span
              style={{
                fontSize: 80,
                fontWeight: 700,
                color: '#d4af37',
                fontFamily: 'system-ui',
                marginLeft: 20,
                letterSpacing: '-0.02em',
              }}
            >
              {"Coach's Eye"}
            </span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 32,
              color: '#888888',
              fontFamily: 'system-ui',
              fontWeight: 400,
              marginBottom: 40,
            }}
          >
            7 Patterns from Legendary Leaders
          </div>

          {/* Leader categories */}
          <div
            style={{
              display: 'flex',
              gap: 40,
              fontSize: 18,
              color: '#666666',
              fontFamily: 'system-ui',
              fontWeight: 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            <span>Sports</span>
            <span style={{ color: '#444' }}>•</span>
            <span>Military</span>
            <span style={{ color: '#444' }}>•</span>
            <span>Business</span>
          </div>
        </div>

        {/* Cognitive Fingerprint branding */}
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            right: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span
            style={{
              fontSize: 16,
              color: '#555555',
              fontFamily: 'system-ui',
            }}
          >
            by Cognitive Fingerprint™
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
