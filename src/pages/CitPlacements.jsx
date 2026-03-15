import { useMemo } from 'react';

const citPlacementByYear = [
  {
    year: '2024-25',
    rows: [
      { company: 'Larsen & Toubro', role: 'GET (Civil)', ctc: 6, selected: 1 },
      { company: 'RDC Concrete India', role: 'GET (Civil)', ctc: 4.6, selected: 1 },
      { company: 'Amul Dairy', role: 'Territory Sales Incharge', ctc: 6.5, selected: 1 },
      { company: 'TVS Credit Services', role: 'Technology Trainee', ctc: 6.5, selected: 4 },
      { company: 'Planet Spark', role: 'Business Development Counsellor', ctc: 6.5, selected: 1 },
      { company: 'EduStation', role: 'Business Development Trainee', ctc: 6, selected: 9 },
      { company: 'Corizo Edutech', role: 'Business Development Associate / Inside Sales Representative', ctc: 5, selected: 4 },
      { company: 'Intellipaat', role: 'Business Development Trainee', ctc: 4, selected: 1 },
      { company: 'GlowLogics', role: 'Inside Sales Representative', ctc: 5.2, selected: 7 },
      { company: 'MindSeekers', role: 'Inside Sales Specialist', ctc: 5, selected: 7 },
      { company: 'High Technext Engineering', role: 'Technical Site Engineer', ctc: 3, selected: 7 },
      { company: 'Tata Power', role: 'Diploma Apprenticeship Trainee', ctc: 2.98, selected: 1 },
      { company: 'Kodnest', role: 'Incubation Drive', ctc: null, selected: 1 },
      { company: 'Pentagon Space', role: 'Incubation Drive', ctc: null, selected: 2 },
      { company: 'DaveAI', role: '', ctc: 10, selected: 1 },
      { company: 'OSEL Devices Pvt. Ltd.', role: 'LED Software Engineer', ctc: 2.76, selected: 1 },
      { company: 'Extramarks', role: 'Trainee System Engineer', ctc: 3.12, selected: 1 },
      { company: 'SIBIN Learning Cart Private Limited', role: 'Vocational Teacher', ctc: 2.4, selected: 1 },
    ],
  },
  {
    year: '2023-24',
    rows: [
      { company: 'AMUL', role: 'Territory Sales In charge', ctc: 6.5, selected: 2 },
      { company: 'Pie Infocomm', role: 'Junior Automation Engineer/ Junior Software Developer', ctc: 6.5, selected: 3 },
      { company: 'Corizo Edutech', role: 'Business Development Associate', ctc: 5.25, selected: 1 },
      { company: 'EduStation', role: 'Business Development Associate', ctc: 5, selected: 2 },
      { company: 'Teachnook', role: 'Business Development Associate', ctc: 5, selected: 20 },
      { company: 'TCS', role: 'Assistant System Engineer', ctc: 4.28, selected: 3 },
      { company: 'EdiGlobe', role: 'Business Development Associate', ctc: 4, selected: 2 },
      { company: 'Tata Communications', role: 'Junior Engineer', ctc: 4, selected: 1 },
      { company: 'Vidya Infrabuilt Pvt Ltd (VIPL)', role: 'Trainee Engineer', ctc: 4, selected: 1 },
      { company: 'CDAC Noida', role: 'Intern in R & D', ctc: 3, selected: 3 },
      { company: 'Edu-Versity', role: 'Business Development Associate', ctc: 3, selected: 2 },
      { company: 'Neutrino Tech System, Pune', role: 'Associate software Engineer', ctc: 3, selected: 1 },
      { company: 'ORC Engineering Pvt. Ltd.', role: 'Field Site Engineer', ctc: 2.34, selected: 15 },
      { company: 'Ceat Tyre, Ambernath, MH', role: 'Plant Manager', ctc: 2.23, selected: 1 },
      { company: 'KL Industrial Estate', role: 'Quality Chemist', ctc: 2.19, selected: 4 },
      { company: 'Amit Aqua Pvt. Ltd.', role: 'Microbial Analyst', ctc: 2.04, selected: 1 },
      { company: 'Graintech Foods Pvt.ltd', role: 'Quality Chemist', ctc: 2, selected: 2 },
      { company: 'Sevia Multimedia', role: 'Verification Engineer Trainee', ctc: 1.92, selected: 3 },
      { company: 'Bitmapper Integration Technologies', role: 'Verification Engineer Trainee', ctc: 1.8, selected: 2 },
      { company: 'Kodnest', role: 'Pre-Placement Training', ctc: null, selected: 3 },
    ],
  },
  {
    year: '2022-23',
    rows: [
      { company: 'Intellipat', role: 'Business Development Associate', ctc: 7.25, selected: 1 },
      { company: "BYJU'S", role: 'Business Development Associate', ctc: 7, selected: 2 },
      { company: 'AMUL', role: 'Territory Sales Incharge', ctc: 6.5, selected: 2 },
      { company: 'CAPACE SOFTWARE PVT LTD', role: 'Software Developer', ctc: 5.5, selected: 2 },
      { company: 'SemiFront Technologies', role: 'Design/Verification Engineer', ctc: 5.5, selected: 2 },
      { company: 'Ditto Insurance', role: 'Insurance Advisor (WFH)', ctc: 5, selected: 1 },
      { company: 'Siemens Energy', role: 'Design Engineer', ctc: 4.56, selected: 2 },
      { company: 'ITC Infotech', role: 'Associate IT Consultant', ctc: 4.5, selected: 3 },
      { company: 'Teachnook', role: 'Academic Counselor', ctc: 4.5, selected: 6 },
      { company: 'Academor', role: 'Academic Counselor', ctc: 4, selected: 10 },
      { company: 'Edu Station', role: 'Business Development Associate', ctc: 4, selected: 10 },
      { company: 'Vintrus', role: 'Academic Counselor', ctc: 4, selected: 21 },
      { company: 'APT Software', role: 'Junior Software Engineer', ctc: 3.6, selected: 4 },
      { company: 'Sutherland Global', role: 'Associate', ctc: 3.5, selected: 7 },
      { company: 'Drishti IAS', role: 'Business Development Associate', ctc: 3.36, selected: 9 },
      { company: 'Re Sustainability Limited', role: 'Graduate Engineer Trainee', ctc: 3.25, selected: 1 },
      { company: 'ORC Engineering Pvt. Ltd', role: 'Field Engineer', ctc: 3, selected: 5 },
      { company: 'Ultra Tech Cement', role: 'Technical Trainee', ctc: 3, selected: 4 },
      { company: 'Gyanohm Learning', role: 'Subject Matter Expert', ctc: 2.16, selected: 2 },
      { company: 'Flash Electronics India Pvt Ltd', role: 'Apprentice Trainee', ctc: 2, selected: 9 },
    ],
  },
  {
    year: '2021-22',
    rows: [
      { company: 'Open Silicon', role: 'Verification Engineer', ctc: 11, selected: 1 },
      { company: "BYJU'S - The Learning App", role: 'Business Development Executive', ctc: 10, selected: 2 },
      { company: 'Indradhanush Gas Grid Limited', role: 'Graduate Engineer Trainee', ctc: 8, selected: 1 },
      { company: 'Capgemini India Pvt. Ltd.', role: 'Senior Analyst', ctc: 7.5, selected: 1 },
      { company: "BYJU'S - The Learning App", role: 'Academic Specialist', ctc: 6, selected: 2 },
      { company: 'DK Associates Pvt. Ltd.', role: 'Project Engineer', ctc: 5.07, selected: 1 },
      { company: 'Intellect', role: 'Associate IT Consultant', ctc: 5, selected: 1 },
      { company: 'Kunduz', role: 'Software Lead', ctc: 5, selected: 1 },
      { company: 'Wipro', role: 'Project Engineer', ctc: 4.5, selected: 2 },
      { company: 'ITC Infotech', role: 'Associate IT Consultant', ctc: 4.25, selected: 14 },
      { company: 'PHED', role: 'Junior Engineer', ctc: 4.2, selected: 4 },
      { company: 'Capgemini', role: 'Data Analyst', ctc: 4, selected: 3 },
      { company: 'Cognizant (CTS)', role: 'Programmer Analyst Trainee', ctc: 4, selected: 12 },
      { company: 'Infosys', role: 'Systems Engineer', ctc: 3.6, selected: 8 },
      { company: 'Techouts Solutions India Pvt Ltd.', role: 'Trainee Software Engineer', ctc: 3.5, selected: 2 },
      { company: 'ICICI Bank', role: 'Phone Banking Officer', ctc: 3, selected: 1 },
      { company: 'Anupam Nirman Pvt. Ltd.', role: 'Site Engineer', ctc: 2.4, selected: 1 },
      { company: 'SRD Nutrients', role: 'Quality Assurance', ctc: 1.8, selected: 1 },
    ],
  },
];

function CitPlacements() {
  const yearlyStats = useMemo(
    () =>
      citPlacementByYear.map((block) => {
        const totalSelected = block.rows.reduce((sum, row) => sum + row.selected, 0);
        const highestCtc = Math.max(...block.rows.filter((row) => row.ctc !== null).map((row) => row.ctc));
        const uniqueRoles = new Set(block.rows.map((row) => row.role)).size;
        return {
          year: block.year,
          totalCompanies: block.rows.length,
          totalSelected,
          highestCtc,
          uniqueRoles,
        };
      }),
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
        .cit-shell {
          width: 100%;
          margin: 0 auto;
          font-family: 'Segoe UI Variable', 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
        }

        .fade-swipe {
          opacity: 0;
          transform: translateY(14px);
          animation: fadeSwipeUp 560ms ease forwards;
        }

        .cit-hero {
          border: 1px solid rgba(148, 163, 184, 0.26);
          border-radius: 20px;
          background: linear-gradient(145deg, rgba(255,255,255,0.94), rgba(248,251,255,0.92));
          box-shadow: 0 22px 42px -32px rgba(30, 41, 59, 0.65);
          padding: 18px;
          margin-bottom: 14px;
        }

        .cit-hero h1 {
          margin: 0;
          color: #0f172a;
          font-size: clamp(24px, 4vw, 36px);
          letter-spacing: -0.02em;
        }

        .cit-hero p {
          margin: 8px 0 0;
          color: #475569;
          font-size: 14px;
          font-weight: 500;
        }

        .cit-year {
          border: 1px solid #dbeafe;
          border-radius: 16px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          padding: 12px;
          margin-bottom: 14px;
        }

        .cit-year-title {
          margin: 0 0 10px;
          color: #0f172a;
          font-size: 20px;
          font-weight: 800;
        }

        .cit-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
          margin-bottom: 12px;
        }

        .cit-stat-card {
          border: 1px solid #dbeafe;
          border-radius: 12px;
          background: #fff;
          padding: 12px;
          text-align: center;
        }

        .cit-stat-label {
          margin: 0;
          color: #64748b;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .cit-stat-value {
          margin: 8px 0 0;
          color: #1d4ed8;
          font-size: 22px;
          font-weight: 800;
        }

        .cit-table-wrap {
          border: 1px solid #dbeafe;
          border-radius: 14px;
          background: #fff;
          overflow: auto;
        }

        .cit-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 900px;
        }

        .cit-table th,
        .cit-table td {
          border-bottom: 1px solid #e2e8f0;
          padding: 10px 12px;
          text-align: left;
          vertical-align: top;
          color: #334155;
          font-size: 13px;
          line-height: 1.4;
        }

        .cit-table th {
          position: sticky;
          top: 0;
          z-index: 1;
          background: #eff6ff;
          color: #1e3a8a;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .cit-table th:nth-child(1),
        .cit-table td:nth-child(1),
        .cit-table th:nth-child(4),
        .cit-table td:nth-child(4),
        .cit-table th:nth-child(5),
        .cit-table td:nth-child(5) {
          text-align: center;
        }

        @media (max-width: 1100px) {
          .cit-stats {
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

      <section className="cit-shell">
        <header className="cit-hero fade-swipe" style={{ animationDelay: '40ms' }}>
          <h1>CIT Kokrajhar Placements</h1>
          <p>Company-wise placement records for 2021-22, 2022-23, 2023-24 and 2024-25</p>
        </header>

        {citPlacementByYear.map((block, blockIndex) => {
          const stats = yearlyStats[blockIndex];
          return (
            <section key={block.year} className="cit-year fade-swipe" style={{ animationDelay: `${90 + blockIndex * 60}ms` }}>
              <h2 className="cit-year-title">List of companies recruited in {block.year}</h2>

              <div className="cit-stats">
                <article className="cit-stat-card">
                  <p className="cit-stat-label">Total Companies</p>
                  <p className="cit-stat-value">{stats.totalCompanies}</p>
                </article>
                <article className="cit-stat-card">
                  <p className="cit-stat-label">Students Selected</p>
                  <p className="cit-stat-value">{stats.totalSelected}</p>
                </article>
                <article className="cit-stat-card">
                  <p className="cit-stat-label">Highest CTC</p>
                  <p className="cit-stat-value">{stats.highestCtc} LPA</p>
                </article>
                <article className="cit-stat-card">
                  <p className="cit-stat-label">Distinct Roles</p>
                  <p className="cit-stat-value">{stats.uniqueRoles}</p>
                </article>
              </div>

              <section className="cit-table-wrap">
                <table className="cit-table">
                  <thead>
                    <tr>
                      <th>Sl. No.</th>
                      <th>Name of the Company</th>
                      <th>Role Hired For</th>
                      <th>CTC (in LPA)</th>
                      <th>No. of Students Selected</th>
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, index) => (
                      <tr key={`${block.year}-${row.company}-${index}`}>
                        <td>{index + 1}</td>
                        <td>{row.company}</td>
                        <td>{row.role || '-'}</td>
                        <td>{row.ctc === null ? '-' : row.ctc}</td>
                        <td>{row.selected}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </section>
          );
        })}
      </section>
    </main>
  );
}

export default CitPlacements;
