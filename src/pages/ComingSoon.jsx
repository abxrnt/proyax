import { Link, useLocation } from 'react-router-dom';
import { Clock3, Sparkles } from 'lucide-react';

function toTitle(pathname) {
  const fallback = 'This Page';
  const trimmed = pathname.replace(/^\/+|\/+$/g, '');

  if (!trimmed) {
    return fallback;
  }

  return decodeURIComponent(trimmed)
    .split('/')
    .join(' ')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function ComingSoon() {
  const location = useLocation();
  const pageTitle = toTitle(location.pathname);

  return (
    <main
      style={{
        minHeight: 'calc(100vh - 52px)',
        display: 'grid',
        placeItems: 'center',
        padding: '28px 16px',
        background:
          'radial-gradient(1200px 500px at 10% -10%, rgba(14,165,233,0.12), transparent 60%), radial-gradient(1100px 420px at 95% 0%, rgba(37,99,235,0.12), transparent 55%), #f8fafc',
      }}
    >
      <section
        style={{
          width: '100%',
          maxWidth: 760,
          background: 'rgba(255,255,255,0.85)',
          border: '1px solid rgba(15,23,42,0.08)',
          borderRadius: 20,
          padding: '30px 24px',
          textAlign: 'center',
          boxShadow: '0 24px 46px -34px rgba(15,23,42,0.55)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '8px 12px',
            borderRadius: 999,
            background: '#eff6ff',
            color: '#1d4ed8',
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          <Sparkles size={16} />
          <span>In Progress</span>
        </div>

        <h1 style={{ margin: '20px 0 10px', color: '#0f172a', fontSize: 'clamp(30px, 5vw, 50px)' }}>Coming Soon</h1>

        <p style={{ margin: 0, color: '#334155', fontSize: 'clamp(15px, 2.4vw, 18px)', lineHeight: 1.7 }}>
          <strong>{pageTitle}</strong> is not available yet. We are building this section and it will be live soon.
        </p>

        <div
          style={{
            marginTop: 22,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            color: '#475569',
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          <Clock3 size={16} />
          <span>Thanks for your patience.</span>
        </div>

        <div style={{ marginTop: 26 }}>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              border: '1px solid rgba(37,99,235,0.28)',
              background: 'linear-gradient(180deg, #ffffff 0%, #f5f9ff 100%)',
              color: '#1d4ed8',
              borderRadius: 999,
              padding: '10px 18px',
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            Back To Home
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ComingSoon;
