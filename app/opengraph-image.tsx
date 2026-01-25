import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const runtime = 'nodejs';

export const alt = 'Cognitive Fingerprint™ - Decode Your Unconscious Expertise';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  // Load the logo image
  const logoPath = join(process.cwd(), 'public', 'cf-logo-transparent.png');
  const logoBuffer = await readFile(logoPath);
  const logoBase64 = logoBuffer.toString('base64');
  const logoSrc = `data:image/png;base64,${logoBase64}`;

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
          backgroundColor: '#0f0f0f',
          backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #0f0f0f 100%)',
        }}
      >
        {/* Subtle grain texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.02,
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
          }}
        >
          {/* Actual CF Logo */}
          <img
            src={logoSrc}
            alt="Cognitive Fingerprint"
            width="280"
            height="280"
            style={{
              marginBottom: 50,
            }}
          />

          {/* Title */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontSize: 68,
                fontWeight: 700,
                color: 'white',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                letterSpacing: '-0.02em',
              }}
            >
              Cognitive{' '}
            </span>
            <span
              style={{
                fontSize: 68,
                fontWeight: 700,
                background: 'linear-gradient(135deg, #d4a574 0%, #b8935f 100%)',
                backgroundClip: 'text',
                color: 'transparent',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                marginLeft: 16,
                letterSpacing: '-0.02em',
              }}
            >
              Fingerprint
            </span>
            <span
              style={{
                fontSize: 32,
                color: '#b8935f',
                marginLeft: 8,
                marginTop: -24,
              }}
            >
              ™
            </span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 32,
              color: '#666666',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 400,
              letterSpacing: '-0.01em',
            }}
          >
            Decode Your Unconscious Expertise
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

