import { useMemo } from 'react';

const tezpurPlacementByYear = [
  {
    year: '2024-2025',
    rows: [
      { student: 'Ripunjay Deka', roll: 'ECB21074', employer: 'Bharat Electronics Limited', pkg: '₹12.5-13 LPA' },
      { student: 'Rajdeep Das', roll: 'ECB21036', employer: 'Bharat Electronics Limited', pkg: '₹12.5-13 LPA' },
      { student: 'Bhargov Gogoi', roll: 'ECB22202', employer: 'Bharat Electronics Limited', pkg: '₹12.5-13 LPA' },
      { student: 'Shubham Kumar Kushwaha', roll: 'ECB21082', employer: 'Bharat Electronics Limited', pkg: '₹12.5-13 LPA' },
      { student: 'Rohan Kumar Gupta', roll: 'ECB21059', employer: 'Bharat Electronics Limited', pkg: '₹12.5-13 LPA' },
      { student: 'Shourya Kumar Singh', roll: 'ECB21067', employer: 'Bharat Electronics Limited', pkg: '₹12.5-13 LPA' },
      { student: 'Vivekananda Das', roll: 'ECB21037', employer: 'Bharat Electronics Limited', pkg: '₹12.5-13 LPA' },
      { student: 'Bhargab Pratim Nath', roll: 'ECB21031', employer: 'Bharat Electronics Limited', pkg: '₹12.5-13 LPA' },
      { student: 'Ankit Sharma', roll: '', employer: 'CDAC', pkg: '₹1.8 LPA' },
      { student: 'Junmoni Barman', roll: '', employer: 'Alstom', pkg: '₹8.55 LPA' },
      { student: 'Debashree Sonowal', roll: '', employer: 'Alstom', pkg: '₹8.55 LPA' },
      { student: 'Ritish Kumar Das', roll: '', employer: 'Bharat Electronics Ltd.', pkg: '₹10 LPA' },
      { student: 'Rohan Das', roll: '', employer: 'Vikash Group', pkg: '₹4.8 LPA' },
      { student: 'Debjyoti Chowbey', roll: '', employer: 'Raman Research Institute', pkg: '₹4.8 LPA' },
      { student: 'Tanaya Debnath', roll: '', employer: 'Dalmia Cement', pkg: '₹5 LPA' },
      { student: 'Ripunjay Deka', roll: '', employer: 'High-Technext Engineering & Telecom Pvt. Ltd.', pkg: '₹2.4 LPA' },
      { student: 'Supriyo Chakraborty', roll: '', employer: 'High-Technext Engineering & Telecom Pvt. Ltd.', pkg: '₹2.4 LPA' },
      { student: 'Vivekananda Das', roll: '', employer: 'High-Technext Engineering & Telecom Pvt. Ltd.', pkg: '₹2.4 LPA' },
      { student: 'Bhargab Pratim Nath', roll: '', employer: 'High-Technext Engineering & Telecom Pvt. Ltd.', pkg: '₹2.4 LPA' },
      { student: 'Shubham Kumar Kushwaha', roll: '', employer: 'High-Technext Engineering & Telecom Pvt. Ltd.', pkg: '₹2.4 LPA' },
      { student: 'Rohit Kumar Singh', roll: '', employer: 'High-Technext Engineering & Telecom Pvt. Ltd.', pkg: '₹2.4 LPA' },
      { student: 'Rajdeep Das', roll: '', employer: 'High-Technext Engineering & Telecom Pvt. Ltd.', pkg: '₹2.4 LPA' },
      { student: 'Munigadapa Ashish', roll: '', employer: 'High-Technext Engineering & Telecom Pvt. Ltd.', pkg: '₹2.4 LPA' },
    ],
  },
  {
    year: '2023-2024',
    rows: [
      { student: 'Abhigyan Hazarika', roll: 'ECB20089', employer: 'Bharat Electronics Limited', pkg: '₹10 LPA' },
      { student: 'Abinash Bharadwaj', roll: 'ECB20017', employer: 'Bharat Electronics Limited', pkg: '₹10 LPA' },
      { student: 'Alok Chaurasiya', roll: 'ECB20064', employer: 'Bharat Electronics Limited', pkg: '₹10 LPA' },
      { student: 'Arnab Gautam Saha', roll: 'ECB20036', employer: 'Bharat Electronics Limited', pkg: '₹10 LPA' },
      { student: 'Dishal Patar', roll: 'ECB20073', employer: 'Bharat Electronics Limited', pkg: '₹10 LPA' },
      { student: 'Md. Wasif Mustafa', roll: 'ECB20094', employer: 'Bharat Electronics Limited', pkg: '₹10 LPA' },
      { student: 'Tridip Lochan Dutta', roll: 'ECB20086', employer: 'Bharat Electronics Limited', pkg: '₹10 LPA' },
      { student: 'Abhishek Kumar Singh', roll: 'ECB20056', employer: 'Tata Consultancy Services (TCS)', pkg: '₹7 LPA' },
      { student: 'Anandan Mukherjee', roll: 'ECB20042', employer: 'Tata Consultancy Services (TCS)', pkg: '₹7 LPA' },
      { student: 'Rohan Deep Goyal', roll: 'ECB20051', employer: 'Tata Consultancy Services (TCS)', pkg: '₹7 LPA' },
      { student: 'Sujay Mohanty', roll: 'ECB20054', employer: 'Tata Consultancy Services (TCS)', pkg: '₹7 LPA' },
      { student: 'Prajwalita Hazarika', roll: 'ECB20091', employer: 'Alstom', pkg: '₹6.8 LPA' },
      { student: 'Pranjal Kar', roll: 'ECB20083', employer: 'CDAC', pkg: '₹6 LPA' },
      { student: 'Prerona Roy Choudhury', roll: 'ECB20022', employer: 'CDAC', pkg: '₹6 LPA' },
      { student: 'Bhogi Naveen', roll: 'ECB20068', employer: 'Federal Bank', pkg: '₹5.6 LPA' },
      { student: 'Diptanshu Konwar', roll: 'ECB20087', employer: 'Borde.AI', pkg: '₹3.84 LPA' },
      { student: 'Abhishek Kumar Rai', roll: 'ECB20029', employer: 'ESAF', pkg: '₹3.7 LPA' },
      { student: 'Sunny Kumar', roll: 'ECB20061', employer: 'ESAF', pkg: '₹3.7 LPA' },
      { student: 'Bipasha Dey', roll: 'ECB20081', employer: 'Team.Effiently', pkg: '₹2.8 LPA' },
      { student: 'Himanjal Bhattacharyya', roll: 'ECD22014', employer: 'L&T Technology Services Ltd', pkg: '₹5.5 LPA' },
    ],
  },
  {
    year: '2022-2023',
    rows: [
      { student: 'Rittik Dasgupta', roll: 'ECB19035', employer: 'Atlan', pkg: '' },
      { student: 'Binayak Karmakar', roll: 'ECB19036', employer: 'Bharat Electronics Ltd.', pkg: '' },
      { student: 'Gaurav Kumar', roll: 'ECB19058', employer: 'Bharat Electronics Ltd.', pkg: '' },
      { student: 'Pratim Chakraborty', roll: 'ECB19021', employer: 'Bharat Electronics Ltd.', pkg: '' },
      { student: 'Rahul Sarma', roll: 'ECB19054', employer: 'Bharat Electronics Ltd.', pkg: '' },
      { student: 'Shivam Kumar', roll: 'ECB19063', employer: 'Bharat Electronics Ltd.', pkg: '' },
      { student: 'Suvankar Paul', roll: 'ECB19024', employer: 'Bharat Electronics Ltd.', pkg: '' },
      { student: 'Bidisha Bharadwaj', roll: 'ECB19041', employer: 'Codeyoung', pkg: '' },
      { student: 'Devvjiit Bhuyan', roll: 'ECB19050', employer: 'Cognizant Technologies', pkg: '' },
      { student: 'Divvjiit Bhuyan', roll: 'ECB19050', employer: 'TCS', pkg: '' },
      { student: 'Gulshan Kumar', roll: 'ECB19057', employer: 'Cognizant Technologies', pkg: '' },
      { student: 'Hasnaf Asif Islam', roll: 'ECB19023', employer: 'Akash Byjus', pkg: '' },
      { student: 'Sarthak Kumar', roll: 'ECB19067', employer: 'Cognizant Technologies', pkg: '' },
      { student: 'Shrawan Baruah', roll: 'ECB19006', employer: 'Cognizant Technologies', pkg: '' },
      { student: 'Vidisha Kayal', roll: 'ECB19013', employer: 'Cognizant Technologies', pkg: '' },
      { student: 'Soumi Purkayastha', roll: 'ECB19007', employer: 'L&T ECC', pkg: '' },
      { student: 'Priyanshu Singh', roll: 'ECB19064', employer: 'Hexaware', pkg: '' },
      { student: 'Sarthak Kumar', roll: 'ECB19067', employer: 'Hexaware', pkg: '' },
      { student: 'Mayemi Sarkar', roll: 'ECB19043', employer: 'Federal Bank', pkg: '' },
      { student: 'Aditya Srivastava', roll: 'ECB19011', employer: 'ITC Infotech', pkg: '' },
      { student: 'Pratik Kumar', roll: 'ECB19062', employer: 'ITC Infotech', pkg: '' },
      { student: 'Ritik Agarwal', roll: 'ECB19004', employer: 'Cognizant Technologies', pkg: '' },
    ],
  },
  {
    year: '2021-2022',
    rows: [
      { student: 'Ayan Chakraborty', roll: 'ECB18019', employer: 'IQVIA', pkg: '' },
      { student: 'Gajanand Kasat', roll: 'ECB18016', employer: 'IQVIA', pkg: '' },
      { student: 'Hemanta Das', roll: 'ECB18032', employer: 'IGGL', pkg: '' },
      { student: 'Ajanta Das', roll: 'ECB18017', employer: 'Alstom', pkg: '' },
      { student: 'Kamal Das', roll: 'ECB18022', employer: 'Wipro', pkg: '' },
      { student: 'Pratiksha Boruah', roll: 'ECB18028', employer: 'Alstom', pkg: '' },
      { student: 'Sanjana Singha', roll: 'ECB18023', employer: 'Alstom', pkg: '' },
      { student: 'Elura Sonowal', roll: 'ECB18031', employer: 'Federal Bank', pkg: '' },
      { student: 'Keerthan Reddy Konnela', roll: 'ECB18062', employer: 'L & T Limited', pkg: '' },
      { student: 'Akshay Kumar', roll: 'ECB18037', employer: 'ITC Infotech', pkg: '' },
      { student: 'AMARTYA MADHAB', roll: 'ECB18035', employer: 'ITC Infotech', pkg: '' },
      { student: 'KUNAL DAS', roll: 'ECB18021', employer: 'ITC Infotech', pkg: '' },
      { student: 'Abhinab saikia', roll: 'ECB18024', employer: 'Cognizant Technologies', pkg: '' },
      { student: 'Ahmed Murtaza', roll: 'ECB18003', employer: 'Cognizant Technologies', pkg: '' },
      { student: 'Amar Kumar Sah', roll: 'ECB18053', employer: 'Cognizant Technologies', pkg: '' },
      { student: 'Nitumoni Kalita', roll: 'ECB18012', employer: 'Cognizant Technologies', pkg: '' },
      { student: 'Saurav Suman', roll: 'ECB18045', employer: 'Cognizant Technologies', pkg: '' },
      { student: 'Baishali Ghosh', roll: 'ECB18036', employer: 'Capgemini', pkg: '' },
      { student: 'Krishanu Dev Sarma', roll: 'ECB18006', employer: 'Capgemini', pkg: '' },
      { student: 'Harsh Vardhan', roll: 'ECB18057', employer: 'Tata Advanced Systems Limited', pkg: '' },
      { student: 'Bhabagiri Malakar', roll: 'ECB18046', employer: 'Wipro', pkg: '' },
      { student: 'Monjit Chetry', roll: 'ECB18020', employer: 'Wipro', pkg: '' },
      { student: 'Mriganka Kumar Kalita', roll: 'ECB18011', employer: 'Wipro', pkg: '' },
      { student: 'Nikhil Kumar', roll: 'ECB18029', employer: 'Wipro', pkg: '' },
      { student: 'Nishanta Saikia', roll: 'ECB18025', employer: 'Wipro', pkg: '' },
      { student: 'Pavan Sai Chitteti', roll: 'ECB18060', employer: 'Wipro', pkg: '' },
      { student: 'Sourav Nath', roll: 'ECB18027', employer: 'Wipro', pkg: '' },
      { student: 'Anindya', roll: 'ECB18052', employer: 'IQVIA', pkg: '' },
      { student: 'Pritirekha Dutta', roll: 'ECD20012', employer: 'Federal Bank', pkg: '' },
      { student: 'Ankita Bhattacharyya', roll: 'ECD20007', employer: 'Federal Bank', pkg: '' },
      { student: 'Tanisha Choudhury', roll: 'ECD20006', employer: 'Alstom', pkg: '' },
      { student: 'Arnab Deb', roll: 'ECD20024', employer: 'CDAC', pkg: '' },
    ],
  },
];

function TezpurPlacements() {
  const yearlyStats = useMemo(
    () =>
      tezpurPlacementByYear.map((yearBlock) => ({
        year: yearBlock.year,
        records: yearBlock.rows.length,
        employers: new Set(yearBlock.rows.map((row) => row.employer)).size,
      })),
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
        .tz-shell {
          width: 100%;
          margin: 0 auto;
          font-family: 'Segoe UI Variable', 'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
        }

        .fade-swipe {
          opacity: 0;
          transform: translateY(14px);
          animation: fadeSwipeUp 560ms ease forwards;
        }

        .tz-hero {
          border: 1px solid rgba(148, 163, 184, 0.26);
          border-radius: 20px;
          background: linear-gradient(145deg, rgba(255,255,255,0.94), rgba(248,251,255,0.92));
          box-shadow: 0 22px 42px -32px rgba(30, 41, 59, 0.65);
          padding: 18px;
          margin-bottom: 14px;
        }

        .tz-hero h1 {
          margin: 0;
          color: #0f172a;
          font-size: clamp(24px, 4vw, 36px);
          letter-spacing: -0.02em;
        }

        .tz-hero p {
          margin: 8px 0 0;
          color: #475569;
          font-size: 14px;
          font-weight: 500;
        }

        .tz-year {
          border: 1px solid #dbeafe;
          border-radius: 16px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          padding: 12px;
          margin-bottom: 14px;
        }

        .tz-year-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 10px;
        }

        .tz-year-title {
          margin: 0;
          color: #0f172a;
          font-size: 20px;
          font-weight: 800;
        }

        .tz-year-metrics {
          display: inline-flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .tz-chip {
          border: 1px solid #bfdbfe;
          border-radius: 999px;
          background: #eff6ff;
          color: #1d4ed8;
          font-size: 12px;
          font-weight: 800;
          padding: 4px 9px;
          white-space: nowrap;
        }

        .tz-table-wrap {
          border: 1px solid #dbeafe;
          border-radius: 14px;
          background: #fff;
          overflow: auto;
        }

        .tz-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 920px;
        }

        .tz-table th,
        .tz-table td {
          border-bottom: 1px solid #e2e8f0;
          padding: 10px 12px;
          text-align: left;
          vertical-align: top;
          color: #334155;
          font-size: 13px;
          line-height: 1.4;
        }

        .tz-table th {
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

        .tz-table th:nth-child(1),
        .tz-table td:nth-child(1),
        .tz-table th:nth-child(2),
        .tz-table td:nth-child(2) {
          white-space: nowrap;
        }

        @media (max-width: 780px) {
          .tz-year-head {
            flex-direction: column;
            align-items: flex-start;
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

      <section className="tz-shell">
        <header className="tz-hero fade-swipe" style={{ animationDelay: '40ms' }}>
          <h1>Tezpur University Placements</h1>
          <p>Academic year-wise detailed records: 2024-2025 to 2021-2022</p>
        </header>

        {tezpurPlacementByYear.map((yearBlock, index) => {
          const stat = yearlyStats[index];
          return (
            <section key={yearBlock.year} className="tz-year fade-swipe" style={{ animationDelay: `${90 + index * 50}ms` }}>
              <div className="tz-year-head">
                <h2 className="tz-year-title">Academic Year {yearBlock.year}</h2>
                <div className="tz-year-metrics">
                  <span className="tz-chip">Records: {stat.records}</span>
                  <span className="tz-chip">Employers: {stat.employers}</span>
                </div>
              </div>

              <section className="tz-table-wrap">
                <table className="tz-table">
                  <thead>
                    <tr>
                      <th>Student Name</th>
                      <th>Roll No.</th>
                      <th>Employer</th>
                      <th>Package</th>
                    </tr>
                  </thead>
                  <tbody>
                    {yearBlock.rows.map((row, rowIndex) => (
                      <tr key={`${yearBlock.year}-${row.student}-${rowIndex}`}>
                        <td>{row.student}</td>
                        <td>{row.roll || '-'}</td>
                        <td>{row.employer}</td>
                        <td>{row.pkg || '-'}</td>
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

export default TezpurPlacements;
