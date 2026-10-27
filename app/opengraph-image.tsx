import { ImageResponse } from 'next/og';

export const alt = 'Mariana Bertuol — Bibliotecária';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #4D1025, #65142F)',
          color: 'white',
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, color: '#efb8c9', textTransform: 'uppercase' }}>
          Consultoria • Gestão de Acervos
        </div>

        <div style={{ marginTop: 32, fontSize: 80, fontWeight: 700 }}>
          Mariana Bertuol
        </div>

        <div style={{ marginTop: 16, fontSize: 40, color: '#D6A54A' }}>
          Bibliotecária
        </div>

        <div style={{ marginTop: 48, fontSize: 32, color: '#f8dfe7', maxWidth: 900 }}>
          Organização profissional para bibliotecas e acervos.
        </div>
      </div>
    ),
    size
  );
}
