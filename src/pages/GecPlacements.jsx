import { useMemo } from 'react';

const gecRecords = [
  {
    year: '2021-2022',
    entries: [
      { company: 'Cognizant', count: 8 },
      { company: 'Extramarks Education India Pvt. Ltd.', count: 7 },
      { company: 'Wyreflow Technology', count: 28 },
      { company: 'Indradhanush Gas Grid Ltd.', count: 1 },
      { company: 'RDC Concrete (India) Pvt. Limited', count: 1 },
      { company: 'Larsen and Toubro (L&T)', count: 1 },
      { company: 'SBM private limited', count: 1 },
      { company: 'Pursuing Higher Studies (GATE, M.tech)', count: 2 },
      { company: 'Govt of Assam/India', count: 4 },
      { company: 'Entrepreneur', count: 2 },
      { company: 'Numaligarh Refinery Limited', count: 1 },
    ],
  },
  {
    year: '2022-2023',
    entries: [
      { company: 'D&H SECHERON', count: 1 },
      { company: 'Pursuing Higher Studies (GATE, M.Tech)', count: 4 },
      { company: 'Govt of Assam/India', count: 1 },
      { company: 'Entrepreneur', count: 2 },
      { company: 'Numaligarh Refinery Limited', count: 2 },
    ],
  },
  {
    year: '2023-2024',
    entries: [
      { company: 'Ashok Leyland', count: 1 },
      { company: 'Northeast Interior', count: 1 },
      { company: 'Tata Motors', count: 1 },
      { company: 'Lotus Traders', count: 1 },
      { company: 'SGCCL', count: 1 },
      { company: 'Mining & Allied Machinery', count: 1 },
      { company: 'ABEPL', count: 15 },
      { company: 'Pursuing Higher Studies (GATE, M.tech)', count: 1 },
      { company: 'Govt of Assam/India', count: 3 },
      { company: 'Entrepreneur', count: 1 },
      { company: 'Numaligarh Refinery Limited', count: 1 },
      { company: 'Tata Technologies', count: 1 },
    ],
  },
];

function GecPlacements() {
  const totalPlaced = useMemo(
    () => gecRecords.reduce((sum, block) => sum + block.entries.reduce((yearSum, row) => yearSum + row.count, 0), 0),
    []
  );

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
        .gec-shell {
          width: 100%;
          margin: 0 auto;
          font-family: 'Segoe UI Variable', 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
        }

        .fade-swipe {
          opacity: 0;
          transform: translateY(14px);
          animation: fadeSwipeUp 560ms ease forwards;
        }

        .gec-hero {
          border: 1px solid rgba(148, 163, 184, 0.26);
          border-radius: 20px;
          background: linear-gradient(145deg, rgba(255,255,255,0.94), rgba(248,251,255,0.92));
          box-shadow: 0 22px 42px -32px rgba(30, 41, 59, 0.65);
          padding: 18px;
          margin-bottom: 14px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 12px;
        }

        .gec-hero h1 {
          margin: 0;
          color: #0f172a;
          font-size: clamp(24px, 4vw, 36px);
          letter-spacing: -0.02em;
        }

        .gec-hero p {
          margin: 8px 0 0;
          color: #475569;
          font-size: 14px;
          font-weight: 500;
        }

        .gec-total {
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid #bfdbfe;
          background: #eff6ff;
          color: #1d4ed8;
          font-size: 22px;
          line-height: 1;
          font-weight: 800;
          white-space: nowrap;
        }

        .gec-year-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }

        .gec-year-card {
          border: 1px solid #dbeafe;
          border-radius: 16px;
          background: linear-gradient(180deg, #fff 0%, #f8fbff 100%);
          padding: 14px;
        }

        .gec-year-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .gec-year-title {
          margin: 0;
          color: #0f172a;
          font-size: 20px;
          font-weight: 800;
        }

        .gec-year-total {
          color: #1d4ed8;
          font-size: 13px;
          font-weight: 800;
          background: #eff6ff;
          border: 1px solid #dbeafe;
          border-radius: 999px;
          padding: 4px 8px;
        }

        .gec-list {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 8px;
        }

        .gec-list-item {
          border: 1px solid #e2e8f0;
          background: #fff;
          border-radius: 10px;
          padding: 8px 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .gec-company {
          margin: 0;
          color: #334155;
          font-size: 14px;
          font-weight: 600;
        }

        .gec-count {
          margin: 0;
          min-width: 34px;
          text-align: center;
          color: #1d4ed8;
          font-size: 14px;
          font-weight: 800;
          border: 1px solid #bfdbfe;
          border-radius: 999px;
          padding: 3px 8px;
          background: #eff6ff;
        }

        @media (max-width: 1024px) {
          .gec-year-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .gec-hero {
            flex-direction: column;
            align-items: flex-start;
          }

          .gec-total {
            font-size: 18px;
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

      <section className="gec-shell">
        <header className="gec-hero fade-swipe" style={{ animationDelay: '40ms' }}>
          <div>
            <h1>Golaghat Engineering College Placements</h1>
            <p>Employability record by company and academic year</p>
          </div>
          <div className="gec-total">Total Placed: {totalPlaced}</div>
        </header>

        <div className="gec-year-grid">
          {gecRecords.map((block, blockIndex) => {
            const yearTotal = block.entries.reduce((sum, row) => sum + row.count, 0);
            return (
              <article key={block.year} className="gec-year-card fade-swipe" style={{ animationDelay: `${100 + blockIndex * 80}ms` }}>
                <div className="gec-year-head">
                  <h2 className="gec-year-title">{block.year}</h2>
                  <span className="gec-year-total">{yearTotal} students</span>
                </div>
                <ul className="gec-list">
                  {block.entries.map((row) => (
                    <li key={`${block.year}-${row.company}`} className="gec-list-item">
                      <p className="gec-company">{row.company}</p>
                      <p className="gec-count">{row.count}</p>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default GecPlacements;
