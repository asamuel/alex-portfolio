import { ImageResponse } from 'next/og';

import { profile } from '@/constants/profile';

export const runtime = 'edge';

export const alt = `${profile.name} - ${profile.role}`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#0A0A0A',
        color: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '72px',
        fontFamily: 'Arial',
      }}
    >
      <div
        style={{
          width: 88,
          height: 88,
          borderRadius: 24,
          border: '1px solid rgba(255,255,255,0.14)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#00FF88',
          fontSize: 52,
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        ▲
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p
          style={{
            margin: 0,
            color: '#00FF88',
            fontSize: 28,
            letterSpacing: 4,
            textTransform: 'uppercase',
          }}
        >
          {profile.role}
        </p>

        <h1
          style={{
            margin: '24px 0 0',
            fontSize: 82,
            lineHeight: 1,
            letterSpacing: '-4px',
          }}
        >
          {profile.name}
        </h1>

        <p
          style={{
            margin: '28px 0 0',
            maxWidth: 840,
            color: 'rgba(255,255,255,0.68)',
            fontSize: 32,
            lineHeight: 1.35,
          }}
        >
          {profile.tagline}
        </p>
      </div>
    </div>,
    size
  );
}
