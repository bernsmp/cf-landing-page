import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1a1a1a',
        }}
      >
        {/* CF Fingerprint Logo - Stylized fingerprint pattern */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Core/whorl pattern */}
          <circle cx="12" cy="7" r="2.5" stroke="#ffb829" strokeWidth="1.5" fill="none" />
          <circle cx="12" cy="7" r="1" fill="#ffb829" />
          
          {/* Ridges flowing outward */}
          <path d="M9.5 7 Q12 4 14.5 7" stroke="#ffb829" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M9 9 Q12 6.5 15 9" stroke="#ffb829" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M8.5 11 Q12 8.5 15.5 11" stroke="#ffb829" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M8 13 Q12 10.5 16 13" stroke="#ffb829" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M7.5 15 Q12 12.5 16.5 15" stroke="#ffb829" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          
          {/* Side ridges */}
          <path d="M6 10 Q7 9 8 10" stroke="#ffb829" strokeWidth="1.2" fill="none" strokeLinecap="round" />
          <path d="M16 10 Q17 9 18 10" stroke="#ffb829" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}

