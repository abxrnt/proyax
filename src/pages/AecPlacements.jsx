import { useEffect, useMemo, useState } from 'react';

const years = ['2019', '2020', '2021', '2022', '2023', '2024'];

const aecPlacementStats = [
  { branch: 'Civil Engineering (CE)', y2019: 18, y2020: 38, y2021: 5, y2022: 31, y2023: 48, y2024: 18 },
  { branch: 'Mechanical Engineering (ME)', y2019: 16, y2020: 23, y2021: 9, y2022: 63, y2023: 58, y2024: 30 },
  { branch: 'Electrical Engineering (EE)', y2019: 28, y2020: 39, y2021: 16, y2022: 66, y2023: 54, y2024: 27 },
  { branch: 'Chemical Engineering (ChE)', y2019: 21, y2020: 3, y2021: 4, y2022: 29, y2023: 42, y2024: 28 },
  { branch: 'Electronics & Telecommunication (E&TE)', y2019: 32, y2020: 30, y2021: 13, y2022: 50, y2023: 44, y2024: 18 },
  { branch: 'Computer Science & Engineering (CSE)', y2019: 16, y2020: 18, y2021: 10, y2022: 18, y2023: 16, y2024: 11 },
  { branch: 'Instrumentation Engineering (IE)', y2019: 6, y2020: 3, y2021: 4, y2022: 15, y2023: 3, y2024: 6 },
  { branch: 'Industrial & Production Engineering (IPE)', y2019: 2, y2020: 0, y2021: 0, y2022: 0, y2023: 0, y2024: 4 },
];

function AecPlacements() {
  const totals = useMemo(
    () =>
      years.reduce((acc, year) => {
        const key = `y${year}`;
        acc[key] = aecPlacementStats.reduce((sum, row) => sum + row[key], 0);
        return acc;
      }, {}),
    []
  );
  const grandTotal = years.reduce((sum, year) => sum + totals[`y${year}`], 0);
  const [animatedTotal, setAnimatedTotal] = useState(0);

  useEffect(() => {
    let frameId;
    const durationMs = 1000;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / durationMs, 1);
      setAnimatedTotal(Math.floor(progress * grandTotal));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setAnimatedTotal(grandTotal);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [grandTotal]);

  return (
    <main
      style={{
        minHeight: 'calc(100vh - 52px)',
        padding: '24px 16px 48px',
        overflowX: 'hidden',
        background:
          'radial-gradient(1000px 460px at -5% -10%, rgba(14,165,233,0.2), transparent 60%), radial-gradient(950px 460px at 105% -10%, rgba(59,130,246,0.18), transparent 58%), linear-gradient(180deg, #f8fbff 0%, #f4f8ff 45%, #f8fafc 100%)',
      }}
    >
      <style>{`
        .aec-shell {
          width: 100%;
          margin: 0 auto;
          font-family: 'Segoe UI Variable', 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
        }

        .aec-shell * {
          box-sizing: border-box;
        }

        .fade-swipe {
          opacity: 0;
          transform: translateY(14px);
          animation: fadeSwipeUp 560ms ease forwards;
        }

        .aec-hero {
          border: 1px solid rgba(148, 163, 184, 0.26);
          border-radius: 20px;
          background: linear-gradient(145deg, rgba(255,255,255,0.94), rgba(248,251,255,0.92));
          box-shadow: 0 22px 42px -32px rgba(30, 41, 59, 0.65);
          padding: 18px;
          margin-bottom: 16px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 12px;
        }

        .aec-hero h1 {
          margin: 0;
          color: #0f172a;
          font-size: clamp(24px, 4vw, 36px);
          letter-spacing: -0.02em;
        }

        .aec-hero p {
          margin: 8px 0 0;
          color: #475569;
          font-size: 14px;
          font-weight: 500;
        }

        .aec-total {
          padding: 9px 14px;
          border-radius: 999px;
          border: 1px solid #bfdbfe;
          background: #eff6ff;
          color: #1d4ed8;
          font-size: 24px;
          line-height: 1;
          font-weight: 800;
          white-space: nowrap;
        }

        .aec-year-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 10px;
          margin-bottom: 12px;
          width: 100%;
        }

        .aec-year-card {
          border: 1px solid #dbeafe;
          border-radius: 12px;
          background: #fff;
          padding: 14px 12px;
          text-align: center;
          min-width: 0;
          min-height: 104px;
        }

        .aec-year-label {
          color: #64748b;
          font-size: 13px;
          margin: 0;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .aec-year-value {
          margin: 10px 0 0;
          color: #0f172a;
          font-size: 30px;
          font-weight: 800;
          line-height: 1.1;
        }

        .aec-branch-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
        }

        .aec-section-title {
          margin: 2px 0 10px;
          color: #0f172a;
          font-size: 18px;
          font-weight: 800;
          letter-spacing: 0.01em;
        }

        .aec-branch-card {
          border: 1px solid #dbeafe;
          border-radius: 14px;
          background: linear-gradient(180deg, #fff 0%, #f8fbff 100%);
          padding: 16px;
          width: 100%;
          min-height: 180px;
        }

        .aec-branch-name {
          margin: 0 0 14px;
          color: #0f172a;
          font-size: 18px;
          font-weight: 800;
          line-height: 1.3;
          overflow-wrap: anywhere;
        }

        .aec-chip-row {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 8px;
          width: 100%;
        }

        .aec-chip {
          border: 1px solid #dbeafe;
          background: #eff6ff;
          border-radius: 10px;
          padding: 12px 6px;
          text-align: center;
          min-width: 0;
          min-height: 84px;
        }

        .aec-chip-label {
          margin: 0;
          font-size: 13px;
          color: #475569;
          font-weight: 700;
        }

        .aec-chip-value {
          margin: 8px 0 0;
          font-size: 22px;
          color: #1d4ed8;
          font-weight: 800;
          line-height: 1.1;
        }

        @media (max-width: 760px) {
          .aec-hero {
            flex-direction: column;
            align-items: flex-start;
          }

          .aec-total {
            font-size: 20px;
          }

          .aec-year-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .aec-year-grid,
          .aec-chip-row {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @keyframes fadeSwipeUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <section className="aec-shell">
        <header className="aec-hero fade-swipe" style={{ animationDelay: '40ms' }}>
          <div>
            <h1>Assam Engineering College Placements</h1>
            <p>Year-wise branch counts: 2019 to 2024</p>
          </div>
          <div className="aec-total">Total: {animatedTotal}</div>
        </header>

        <div className="aec-year-grid">
          {years.map((year, yearIndex) => (
            <article key={year} className="aec-year-card fade-swipe" style={{ animationDelay: `${90 + yearIndex * 35}ms` }}>
              <p className="aec-year-label">{year}</p>
              <p className="aec-year-value">{totals[`y${year}`]}</p>
            </article>
          ))}
        </div>

        <h2 className="aec-section-title fade-swipe" style={{ animationDelay: '220ms' }}>Branch</h2>
        <div className="aec-branch-grid">
          {aecPlacementStats.map((row, branchIndex) => (
            <article
              key={row.branch}
              className="aec-branch-card fade-swipe"
              style={{ animationDelay: `${260 + branchIndex * 50}ms` }}
            >
              <p className="aec-branch-name">{row.branch}</p>
              <div className="aec-chip-row">
                {years.map((year) => (
                  <div key={`${row.branch}-${year}`} className="aec-chip">
                    <p className="aec-chip-label">{year}</p>
                    <p className="aec-chip-value">{row[`y${year}`]}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default AecPlacements;
