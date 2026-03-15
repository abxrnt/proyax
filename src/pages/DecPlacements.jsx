const departmentStats = [
  {
    year: '2023-24',
    values: [
      { dept: 'CE', count: 2, color: '#67d0d3' },
      { dept: 'ME', count: 3, color: '#49b0c7' },
      { dept: 'CSE', count: 16, color: '#368fba' },
    ],
  },
  {
    year: '2024-25',
    values: [
      { dept: 'CE', count: 10, color: '#67d0d3' },
      { dept: 'ME', count: 9, color: '#49b0c7' },
      { dept: 'CSE', count: 28, color: '#368fba' },
    ],
  },
];

const overallStats = [
  { year: '2023-24', registered: 79, placed: 29, percent: '36.7%' },
  { year: '2024-25', registered: 79, placed: 47, percent: '60%' },
];

function DecPlacements() {
  return (
    <main
      style={{
        minHeight: 'calc(100vh - 52px)',
        padding: '24px 16px 48px',
        background:
          'radial-gradient(1000px 460px at -5% -10%, rgba(14,165,233,0.2), transparent 60%), radial-gradient(950px 460px at 105% -10%, rgba(59,130,246,0.18), transparent 58%), linear-gradient(180deg, #f8fbff 0%, #f4f8ff 45%, #f8fafc 100%)',
      }}
    >
      <style>{`
        .dec-shell {
          width: 100%;
          margin: 0 auto;
          font-family: 'Segoe UI Variable', 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
        }

        .fade-swipe {
          opacity: 0;
          transform: translateY(14px);
          animation: fadeSwipeUp 560ms ease forwards;
        }

        .dec-hero {
          border: 1px solid rgba(148, 163, 184, 0.26);
          border-radius: 20px;
          background: linear-gradient(145deg, rgba(255,255,255,0.94), rgba(248,251,255,0.92));
          box-shadow: 0 22px 42px -32px rgba(30, 41, 59, 0.65);
          padding: 18px;
          margin-bottom: 14px;
        }

        .dec-hero h1 {
          margin: 0;
          color: #0f172a;
          font-size: clamp(24px, 4vw, 36px);
          letter-spacing: -0.02em;
        }

        .dec-hero p {
          margin: 8px 0 0;
          color: #475569;
          font-size: 14px;
          font-weight: 500;
        }

        .dec-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-bottom: 14px;
        }

        .dec-card {
          border: 1px solid #dbeafe;
          border-radius: 16px;
          background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
          padding: 14px;
        }

        .dec-card h2 {
          margin: 0 0 12px;
          color: #0f172a;
          font-size: 20px;
          font-weight: 800;
        }

        .dec-bars {
          display: grid;
          gap: 10px;
        }

        .dec-bar-row {
          display: grid;
          grid-template-columns: 54px 1fr 44px;
          align-items: center;
          gap: 8px;
        }

        .dec-label {
          font-size: 14px;
          font-weight: 800;
          color: #334155;
        }

        .dec-track {
          width: 100%;
          height: 14px;
          border-radius: 999px;
          background: #e2e8f0;
          overflow: hidden;
        }

        .dec-fill {
          height: 100%;
          border-radius: 999px;
        }

        .dec-value {
          font-size: 14px;
          font-weight: 800;
          color: #1e40af;
          text-align: right;
        }

        .dec-summary {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .dec-summary-card {
          border: 1px solid #dbeafe;
          border-radius: 16px;
          background: #ffffff;
          padding: 14px;
        }

        .dec-summary-card h3 {
          margin: 0 0 10px;
          color: #0f172a;
          font-size: 18px;
          font-weight: 800;
        }

        .dec-metric {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 8px 10px;
          margin-bottom: 8px;
          background: #f8fbff;
          gap: 8px;
        }

        .dec-metric:last-child {
          margin-bottom: 0;
        }

        .dec-metric span {
          color: #334155;
          font-size: 13px;
          font-weight: 700;
        }

        .dec-metric strong {
          color: #1d4ed8;
          font-size: 16px;
          font-weight: 800;
          white-space: nowrap;
        }

        @media (max-width: 980px) {
          .dec-grid,
          .dec-summary {
            grid-template-columns: 1fr;
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

      <section className="dec-shell">
        <header className="dec-hero fade-swipe" style={{ animationDelay: '40ms' }}>
          <h1>Dhemaji Engineering College Placements</h1>
          <p>Placement statistics by department and overall employability summary</p>
        </header>

        <div className="dec-grid">
          {departmentStats.map((item, index) => (
            <article key={item.year} className="dec-card fade-swipe" style={{ animationDelay: `${100 + index * 70}ms` }}>
              <h2>Placement Data {item.year}</h2>
              <div className="dec-bars">
                {item.values.map((row) => (
                  <div key={`${item.year}-${row.dept}`} className="dec-bar-row">
                    <span className="dec-label">{row.dept}</span>
                    <div className="dec-track">
                      <div
                        className="dec-fill"
                        style={{
                          width: `${(row.count / 30) * 100}%`,
                          background: row.color,
                        }}
                      />
                    </div>
                    <span className="dec-value">{row.count}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="dec-summary">
          {overallStats.map((row, index) => (
            <article key={row.year} className="dec-summary-card fade-swipe" style={{ animationDelay: `${240 + index * 70}ms` }}>
              <h3>Overall {row.year}</h3>
              <div className="dec-metric">
                <span>Total Registered Students</span>
                <strong>{row.registered}</strong>
              </div>
              <div className="dec-metric">
                <span>Total Placed Students</span>
                <strong>{row.placed}</strong>
              </div>
              <div className="dec-metric">
                <span>Placement Percentage</span>
                <strong>{row.percent}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default DecPlacements;
