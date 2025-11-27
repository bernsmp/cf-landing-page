import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
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
          borderRadius: '40px',
        }}
      >
        {/* CF Fingerprint Logo - Larger detailed version */}
        <svg width="140" height="140" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Core whorl */}
          <circle cx="12" cy="6.5" r="4.5" stroke="#ffb829" strokeWidth="2.5" fill="none" />
          <circle cx="12" cy="6.5" r="3" stroke="#ffb829" strokeWidth="2" fill="none" />
          <circle cx="12" cy="6.5" r="1.8" fill="#ffb829" />
          
          {/* Main ridges flowing outward */}
          <path d="M7.5 6.5 Q12 3 16.5 6.5" stroke="#ffb829" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M7 8.5 Q12 5.5 17 8.5" stroke="#ffb829" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M6.5 10.5 Q12 7.5 17.5 10.5" stroke="#ffb829" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M6 12.5 Q12 9.5 18 12.5" stroke="#ffb829" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M5.5 14.5 Q12 11.5 18.5 14.5" stroke="#ffb829" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M5 16.5 Q12 13.5 19 16.5" stroke="#ffb829" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          
          {/* Side ridge details */}
          <path d="M3.5 9 Q5 7.5 6.5 9" stroke="#ffb829" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M17.5 9 Q19 7.5 20.5 9" stroke="#ffb829" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M3 11.5 Q4.5 10 6 11.5" stroke="#ffb829" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M18 11.5 Q19.5 10 21 11.5" stroke="#ffb829" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}

