import { GraduationCap } from 'lucide-react';

const jecCutoffColumns = [
  { id: 'UR', label: 'UR' },
  { id: 'OBC_MOBC', label: 'OBC / MOBC' },
  { id: 'KOCH', label: 'KOCH' },
  { id: 'TAI_AHOM', label: 'TAI AHOM' },
  { id: 'CHUTIYA', label: 'CHUTIYA' },
  { id: 'MORAN', label: 'MORAN' },
  { id: 'MATAK', label: 'MATAK' },
  { id: 'SC', label: 'SC' },
  { id: 'STP', label: 'STP' },
  { id: 'STH', label: 'STH' },
  { id: 'PH', label: 'PH' },
  { id: 'EWS', label: 'EWS' },
];

const jecCutoffBranchesRound1 = [
  {
    branch: 'CIVIL ENGINEERING',
    code: 'CE',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 720, marks: 166 },
          OBC_MOBC: { rank: 1069, marks: 142 },
          KOCH: { rank: 1095, marks: 141 },
          TAI_AHOM: { rank: 1193, marks: 136 },
          CHUTIYA: { rank: 1153, marks: 138 },
          MATAK: { rank: 1691, marks: 118 },
          SC: { rank: 1428, marks: 126 },
          STP: { rank: 1488, marks: 125 },
          STH: { rank: 2662, marks: 93 },
          EWS: { rank: 876, marks: 155 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 976, marks: 149 },
          STP: { rank: 2031, marks: 108 },
          EWS: { rank: 1158, marks: 138 },
        },
      },
    ],
  },
  {
    branch: 'COMPUTER SCIENCE & ENGINEERING',
    code: 'CSE',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 223, marks: 221 },
          OBC_MOBC: { rank: 477, marks: 187 },
          KOCH: { rank: 513, marks: 184 },
          TAI_AHOM: { rank: 484, marks: 186 },
          SC: { rank: 947, marks: 150 },
          STP: { rank: 1047, marks: 144 },
          STH: { rank: 3356, marks: 82 },
          PH: { rank: 3793, marks: 75 },
          EWS: { rank: 357, marks: 199 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 538, marks: 181 },
          OBC_MOBC: { rank: 735, marks: 164 },
          STP: { rank: 1142, marks: 139 },
        },
      },
    ],
  },
  {
    branch: 'ELECTRICAL ENGINEERING',
    code: 'EE',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 583, marks: 176 },
          OBC_MOBC: { rank: 1054, marks: 143 },
          TAI_AHOM: { rank: 1172, marks: 137 },
          CHUTIYA: { rank: 1081, marks: 142 },
          SC: { rank: 1442, marks: 126 },
          STP: { rank: 1421, marks: 126 },
          STH: { rank: 3804, marks: 75 },
          EWS: { rank: 785, marks: 161 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 742, marks: 164 },
          OBC_MOBC: { rank: 1215, marks: 135 },
          STH: { rank: 5912, marks: 50 },
        },
      },
    ],
  },
  {
    branch: 'MECHANICAL ENGINEERING',
    code: 'ME',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 745, marks: 164 },
          OBC_MOBC: { rank: 1255, marks: 133 },
          CHUTIYA: { rank: 1299, marks: 131 },
          MATAK: { rank: 1284, marks: 132 },
          SC: { rank: 1452, marks: 126 },
          STP: { rank: 1613, marks: 120 },
          STH: { rank: 4924, marks: 61 },
          EWS: { rank: 994, marks: 147 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 1042, marks: 144 },
          OBC_MOBC: { rank: 1287, marks: 132 },
          SC: { rank: 2067, marks: 107 },
        },
      },
    ],
  },
  {
    branch: 'INSTRUMENTATION ENGINEERING',
    code: 'IE',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 886, marks: 154 },
          OBC_MOBC: { rank: 1343, marks: 130 },
          KOCH: { rank: 1476, marks: 125 },
          MORAN: { rank: 2865, marks: 90 },
          SC: { rank: 1474, marks: 125 },
          STP: { rank: 1807, marks: 114 },
          EWS: { rank: 1062, marks: 142 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 1303, marks: 131 },
          EWS: { rank: 1805, marks: 115 },
        },
      },
    ],
  },
];

const jecCutoffBranchesRound2 = [
  {
    branch: 'CIVIL ENGINEERING',
    code: 'CE',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 935, marks: 151 },
          OBC_MOBC: { rank: 1213, marks: 135 },
          SC: { rank: 1486, marks: 125 },
          STP: { rank: 1731, marks: 117 },
          STH: { rank: 2748, marks: 92 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 1327, marks: 130 },
          STP: { rank: 2705, marks: 93 },
          EWS: { rank: 1841, marks: 113 },
        },
      },
    ],
  },
  {
    branch: 'COMPUTER SCIENCE & ENGINEERING',
    code: 'CSE',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 323, marks: 204 },
          CGE: { rank: 626, marks: 173 },
          OBC_MOBC: { rank: 519, marks: 183 },
          SC: { rank: 981, marks: 149 },
          STP: { rank: 1048, marks: 143 },
          STH: { rank: 3570, marks: 79 },
          EWS: { rank: 454, marks: 189 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 982, marks: 148 },
          OBC_MOBC: { rank: 1210, marks: 135 },
          STP: { rank: 1398, marks: 127 },
        },
      },
    ],
  },
  {
    branch: 'ELECTRICAL ENGINEERING',
    code: 'EE',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 730, marks: 165 },
          OBC_MOBC: { rank: 1183, marks: 136 },
          SC: { rank: 1452, marks: 126 },
          STP: { rank: 1693, marks: 118 },
          EWS: { rank: 983, marks: 148 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          OBC_MOBC: { rank: 1375, marks: 128 },
        },
      },
    ],
  },
  {
    branch: 'MECHANICAL ENGINEERING',
    code: 'ME',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 968, marks: 149 },
          OBC_MOBC: { rank: 1397, marks: 127 },
          SC: { rank: 1492, marks: 125 },
          STP: { rank: 1824, marks: 114 },
          STH: { rank: 5927, marks: 50 },
          EWS: { rank: 1084, marks: 142 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 1435, marks: 126 },
          OBC_MOBC: { rank: 1535, marks: 123 },
        },
      },
    ],
  },
  {
    branch: 'INSTRUMENTATION ENGINEERING',
    code: 'IE',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 1112, marks: 140 },
          OBC_MOBC: { rank: 1422, marks: 126 },
          SC: { rank: 1575, marks: 122 },
          STP: { rank: 2000, marks: 108 },
          EWS: { rank: 1167, marks: 137 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 1862, marks: 112 },
          EWS: { rank: 2942, marks: 88 },
        },
      },
    ],
  },
];

const jecCutoffBranchesRound3 = [
  {
    branch: 'CIVIL ENGINEERING',
    code: 'CE',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 837, marks: 157 },
          STP: { rank: 1773, marks: 115 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 1666, marks: 119 },
          STP: { rank: 4596, marks: 65 },
          EWS: { rank: 2611, marks: 95 },
        },
      },
    ],
  },
  {
    branch: 'COMPUTER SCIENCE & ENGINEERING',
    code: 'CSE',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 337, marks: 202 },
          OBC_MOBC: { rank: 661, marks: 170 },
          STP: { rank: 1229, marks: 135 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 1375, marks: 128 },
          STP: { rank: 2415, marks: 98 },
        },
      },
    ],
  },
  {
    branch: 'ELECTRICAL ENGINEERING',
    code: 'EE',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 738, marks: 164 },
          STP: { rank: 1807, marks: 114 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          OBC_MOBC: { rank: 1677, marks: 118 },
        },
      },
    ],
  },
  {
    branch: 'MECHANICAL ENGINEERING',
    code: 'ME',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 993, marks: 148 },
          STP: { rank: 1915, marks: 111 },
          STH: { rank: 4275, marks: 69 },
          EWS: { rank: 1097, marks: 141 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 2275, marks: 101 },
          OBC_MOBC: { rank: 2321, marks: 100 },
        },
      },
    ],
  },
  {
    branch: 'INSTRUMENTATION ENGINEERING',
    code: 'IE',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 1103, marks: 141 },
          STP: { rank: 2031, marks: 108 },
          STH: { rank: 5451, marks: 55 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 1927, marks: 110 },
          EWS: { rank: 4837, marks: 62 },
        },
      },
    ],
  },
];

function JecCutoffs() {
  const renderCell = (cell) => {
    if (!cell) {
      return <span className="aec-empty">--</span>;
    }
    return (
      <div className="aec-cell-stack">
        <span className="aec-rank">{cell.rank}</span>
        <span className="aec-marks">{cell.marks}</span>
      </div>
    );
  };

  const getSummary = (data) => {
    const categories = [
      { id: 'UR', label: 'UR' },
      { id: 'OBC_MOBC', label: 'OBC/MOBC' },
      { id: 'SC', label: 'SC' },
      { id: 'EWS', label: 'EWS' },
    ];

    return categories.map((category) => {
      const cells = data
        .flatMap((branch) => branch.rows.filter((row) => row.seatType === 'Excluding 5% reservation'))
        .map((row) => row.data[category.id])
        .filter(Boolean);

      if (cells.length === 0) {
        return { ...category, lastRank: '--', lowestMarks: '--' };
      }

      const lastRank = Math.max(...cells.map((cell) => cell.rank));
      const lowestMarks = Math.min(...cells.map((cell) => cell.marks));
      return { ...category, lastRank, lowestMarks };
    });
  };

  const renderTable = (title, data) => {
    const summary = getSummary(data);
    return (
      <section className="aec-round-block">
        <h2 className="aec-round-title">{title}</h2>
        <div className="aec-summary-grid">
          {summary.map((item) => (
            <article key={item.id} className="aec-summary-card">
              <h3 className="aec-summary-title">{item.label}</h3>
              <div className="aec-summary-metrics">
                <div>
                  <p>Last Rank</p>
                  <span>{item.lastRank}</span>
                </div>
                <div>
                  <p>Lowest Marks</p>
                  <span>{item.lowestMarks}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="aec-table-wrap fade-up">
          <table className="aec-table">
            <colgroup>
              <col className="aec-col-branch" />
              <col className="aec-col-seat" />
              <col className="aec-col-type" />
              {jecCutoffColumns.map((column) => (
                <col key={column.id} className="aec-col-category" />
              ))}
            </colgroup>
            <thead>
              <tr>
                <th>Branch</th>
                <th>Seat Type</th>
                <th>Type</th>
                {jecCutoffColumns.map((column) => (
                  <th key={column.id}>{column.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.flatMap((branch) =>
                branch.rows.map((row, index) => (
                  <tr key={`${branch.code}-${row.seatType}`}>
                    {index === 0 && (
                      <th rowSpan={branch.rows.length} className="aec-branch">
                        {branch.branch}
                      </th>
                    )}
                    <td className="aec-seat">{row.seatType}</td>
                    <td className="aec-type">
                      <div className="aec-cell-stack">
                        <span className="aec-rank">RANK</span>
                        <span className="aec-marks">MARKS</span>
                      </div>
                    </td>
                    {jecCutoffColumns.map((column) => (
                      <td key={column.id} className="aec-cell">
                        {renderCell(row.data[column.id])}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    );
  };

  return (
    <main className="aec-cutoffs-page">
      <section className="aec-cutoffs-shell">
        <header className="aec-cutoffs-header fade-up">
          <span className="aec-cutoffs-pill">
            <GraduationCap size={14} />
            JEC Cutoffs
          </span>
          <div className="aec-cutoffs-title-row">
            <img
              src="https://kapp-bucket.s3.ap-south-1.amazonaws.com/allCollegeLogo/logo/1234567-JEC_7007133_logo.jpg"
              alt="Jorhat Engineering College logo"
              className="aec-cutoffs-logo"
            />
            <h1 className="aec-cutoffs-title">Jorhat Engineering College Cutoffs</h1>
          </div>
          <p className="aec-cutoffs-subtitle">
            Branch and caste / category wise distribution of ranks and marks (JEC).
          </p>
        </header>

        {renderTable('Round 1', jecCutoffBranchesRound1)}
        {renderTable('Round 2', jecCutoffBranchesRound2)}
        {renderTable('Round 3', jecCutoffBranchesRound3)}
      </section>
    </main>
  );
}

export default JecCutoffs;
