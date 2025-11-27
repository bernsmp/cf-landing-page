import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Cognitive Fingerprint™ - Decode Your Unconscious Expertise';
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
          backgroundColor: '#1a1a1a',
          backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.03,
            backgroundImage: 'linear-gradient(#ffb829 1px, transparent 1px), linear-gradient(90deg, #ffb829 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        
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
          {/* CF Logo with fingerprint pattern */}
          <div
            style={{
              width: 140,
              height: 140,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #ffb829 0%, #e6a625 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 50,
              boxShadow: '0 20px 60px rgba(255, 184, 41, 0.3)',
            }}
          >
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Fingerprint pattern - detailed whorl */}
              {/* Core circles */}
              <circle cx="12" cy="6.5" r="5" stroke="#1a1a1a" strokeWidth="3" fill="none" />
              <circle cx="12" cy="6.5" r="3.5" stroke="#1a1a1a" strokeWidth="2.5" fill="none" />
              <circle cx="12" cy="6.5" r="2.2" fill="#1a1a1a" />
              
              {/* Main ridges */}
              <path d="M7 6.5 Q12 2.5 17 6.5" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M6.5 8.5 Q12 4.5 17.5 8.5" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M6 10.5 Q12 6.5 18 10.5" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M5.5 12.5 Q12 8.5 18.5 12.5" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M5 14.5 Q12 10.5 19 14.5" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M4.5 16.5 Q12 12.5 19.5 16.5" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" />
              
              {/* Side details */}
              <path d="M3 9 Q4.5 7 6 9" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M18 9 Q19.5 7 21 9" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M2.5 11.5 Q4 9.5 5.5 11.5" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M18.5 11.5 Q20 9.5 21.5 11.5" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
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
                fontSize: 72,
                fontWeight: 700,
                color: 'white',
                fontFamily: 'system-ui',
              }}
            >
              Cognitive{' '}
            </span>
            <span
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: '#ffb829',
                fontFamily: 'system-ui',
                marginLeft: 20,
              }}
            >
              Fingerprint
            </span>
            <span
              style={{
                fontSize: 40,
                color: '#ffb829',
                marginLeft: 10,
                marginTop: -28,
              }}
            >
              ™
            </span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 36,
              color: '#888888',
              fontFamily: 'system-ui',
              fontWeight: 400,
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

