import { GraduationCap } from 'lucide-react';

const aecCutoffColumns = [
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

const aecCutoffBranches = [
  {
    branch: 'CIVIL ENGINEERING',
    code: 'CE',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 414, marks: 193 },
          OBC_MOBC: { rank: 895, marks: 153 },
          TGLC: { rank: 4361, marks: 68 },
          EXTGLC: { rank: 1527, marks: 123 },
          KOCH: { rank: 939, marks: 150 },
          TAI_AHOM: { rank: 1011, marks: 146 },
          CHUTIYA: { rank: 1311, marks: 131 },
          MORAN: { rank: 1123, marks: 140 },
          MATAK: { rank: 1501, marks: 124 },
          SC: { rank: 1351, marks: 129 },
          STP: { rank: 1137, marks: 139 },
          STH: { rank: 2085, marks: 106 },
          PH: { rank: 4720, marks: 64 },
          EWS: { rank: 667, marks: 169 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 821, marks: 158 },
          OBC_MOBC: { rank: 974, marks: 149 },
          SC: { rank: 2137, marks: 105 },
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
          UR: { rank: 411, marks: 194 },
          OBC_MOBC: { rank: 861, marks: 155 },
          TGLC: { rank: 1986, marks: 109 },
          EXTGLC: { rank: 1420, marks: 126 },
          KOCH: { rank: 885, marks: 154 },
          TAI_AHOM: { rank: 1032, marks: 144 },
          CHUTIYA: { rank: 1187, marks: 136 },
          MATAK: { rank: 873, marks: 155 },
          SC: { rank: 1029, marks: 145 },
          STP: { rank: 1267, marks: 133 },
          STH: { rank: 3151, marks: 85 },
          PH: { rank: 3587, marks: 79 },
          EWS: { rank: 590, marks: 176 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 801, marks: 159 },
          EWS: { rank: 1328, marks: 130 },
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
          UR: { rank: 80, marks: 271 },
          OBC_MOBC: { rank: 90, marks: 261 },
          KOCH: { rank: 381, marks: 196 },
          TAI_AHOM: { rank: 184, marks: 230 },
          CHUTIYA: { rank: 348, marks: 201 },
          MORAN: { rank: 526, marks: 182 },
          SC: { rank: 86, marks: 266 },
          STP: { rank: 391, marks: 195 },
          STH: { rank: 2461, marks: 97 },
          PH: { rank: 6414, marks: 44 },
          EWS: { rank: 100, marks: 255 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 146, marks: 239 },
        },
      },
    ],
  },
  {
    branch: 'INDUSTRIAL & PRODUCTION ENGINEERING',
    code: 'IPE',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 753, marks: 163 },
          CGE: { rank: 1340, marks: 130 },
          OBC_MOBC: { rank: 1296, marks: 131 },
          KOCH: { rank: 1335, marks: 130 },
          SC: { rank: 1384, marks: 128 },
          STP: { rank: 1156, marks: 138 },
          STH: { rank: 7033, marks: 35 },
          EWS: { rank: 864, marks: 155 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 1236, marks: 134 },
          STP: { rank: 3089, marks: 86 },
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
          UR: { rank: 612, marks: 174 },
          OBC_MOBC: { rank: 1168, marks: 137 },
          TAI_AHOM: { rank: 1228, marks: 135 },
          SC: { rank: 1225, marks: 135 },
          STP: { rank: 1472, marks: 125 },
          STH: { rank: 3678, marks: 77 },
          EWS: { rank: 920, marks: 151 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 1073, marks: 142 },
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
          UR: { rank: 366, marks: 198 },
          RDP: { rank: 757, marks: 163 },
          OBC_MOBC: { rank: 697, marks: 167 },
          TGLC: { rank: 1237, marks: 134 },
          KOCH: { rank: 770, marks: 162 },
          TAI_AHOM: { rank: 765, marks: 163 },
          CHUTIYA: { rank: 1145, marks: 138 },
          MORAN: { rank: 2361, marks: 99 },
          MATAK: { rank: 894, marks: 153 },
          SC: { rank: 901, marks: 153 },
          STP: { rank: 1033, marks: 144 },
          STH: { rank: 2676, marks: 93 },
          EWS: { rank: 491, marks: 186 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 800, marks: 159 },
          OBC_MOBC: { rank: 831, marks: 157 },
          EWS: { rank: 1086, marks: 141 },
        },
      },
    ],
  },
  {
    branch: 'CHEMICAL ENGINEERING',
    code: 'CHE',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 584, marks: 176 },
          FF: { rank: 1242, marks: 134 },
          OBC_MOBC: { rank: 1118, marks: 140 },
          TAI_AHOM: { rank: 1151, marks: 138 },
          SC: { rank: 1230, marks: 135 },
          STP: { rank: 1432, marks: 126 },
          STH: { rank: 4121, marks: 71 },
          EWS: { rank: 851, marks: 156 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 1058, marks: 143 },
          OBC_MOBC: { rank: 1192, marks: 136 },
          STH: { rank: 5451, marks: 55 },
        },
      },
    ],
  },
  {
    branch: 'ELECTRONICS & TELECOMMUNICATION ENGINEERING',
    code: 'E&TE',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 188, marks: 229 },
          OBC_MOBC: { rank: 456, marks: 189 },
          KOCH: { rank: 680, marks: 168 },
          SC: { rank: 761, marks: 163 },
          STP: { rank: 731, marks: 165 },
          STH: { rank: 3515, marks: 80 },
          PH: { rank: 7176, marks: 31 },
          EWS: { rank: 407, marks: 194 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 229, marks: 219 },
          OBC_MOBC: { rank: 631, marks: 172 },
          SC: { rank: 1726, marks: 117 },
        },
      },
    ],
  },
];

const aecCutoffBranchesRound2 = [
  {
    branch: 'CIVIL ENGINEERING',
    code: 'CE',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 562, marks: 178 },
          OBC_MOBC: { rank: 1124, marks: 140 },
          TAI_AHOM: { rank: 1151, marks: 138 },
          CHUTIYA: { rank: 1330, marks: 130 },
          SC: { rank: 1355, marks: 129 },
          STP: { rank: 1396, marks: 127 },
          EWS: { rank: 733, marks: 165 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 1266, marks: 133 },
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
          UR: { rank: 534, marks: 181 },
          OBC_MOBC: { rank: 1026, marks: 145 },
          KOCH: { rank: 1058, marks: 143 },
          TAI_AHOM: { rank: 1168, marks: 137 },
          CHUTIYA: { rank: 1523, marks: 124 },
          SC: { rank: 1283, marks: 132 },
          STP: { rank: 3530, marks: 79 },
          EWS: { rank: 614, marks: 174 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 1343, marks: 130 },
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
          UR: { rank: 96, marks: 258 },
          TAI_AHOM: { rank: 579, marks: 176 },
          CHUTIYA: { rank: 727, marks: 165 },
          STP: { rank: 502, marks: 185 },
          EWS: { rank: 140, marks: 240 },
        },
      },
      {
        seatType: '5% reservation',
        data: {},
      },
    ],
  },
  {
    branch: 'INDUSTRIAL & PRODUCTION ENGINEERING',
    code: 'IPE',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 1076, marks: 142 },
          OBC_MOBC: { rank: 1341, marks: 130 },
          KOCH: { rank: 1630, marks: 120 },
          SC: { rank: 1474, marks: 125 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 1719, marks: 117 },
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
          UR: { rank: 817, marks: 158 },
          OBC_MOBC: { rank: 1219, marks: 135 },
          TAI_AHOM: { rank: 1253, marks: 133 },
          SC: { rank: 1417, marks: 126 },
          STP: { rank: 1883, marks: 112 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 1677, marks: 118 },
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
          UR: { rank: 545, marks: 180 },
          OBC_MOBC: { rank: 932, marks: 151 },
          TAI_AHOM: { rank: 1032, marks: 144 },
          SC: { rank: 1300, marks: 131 },
          STP: { rank: 1279, marks: 132 },
          EWS: { rank: 620, marks: 173 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 1270, marks: 133 },
          OBC_MOBC: { rank: 1287, marks: 132 },
          EWS: { rank: 1533, marks: 123 },
        },
      },
    ],
  },
  {
    branch: 'CHEMICAL ENGINEERING',
    code: 'CHE',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 763, marks: 163 },
          OBC_MOBC: { rank: 1214, marks: 135 },
          TAI_AHOM: { rank: 1228, marks: 135 },
          SC: { rank: 1385, marks: 128 },
          STP: { rank: 1472, marks: 125 },
          EWS: { rank: 969, marks: 149 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 1418, marks: 126 },
          OBC_MOBC: { rank: 1485, marks: 125 },
        },
      },
    ],
  },
  {
    branch: 'ELECTRONICS & TELECOMMUNICATION ENGINEERING',
    code: 'E&TE',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 267, marks: 213 },
          OBC_MOBC: { rank: 631, marks: 172 },
          SC: { rank: 911, marks: 152 },
          STP: { rank: 952, marks: 150 },
          STH: { rank: 3510, marks: 80 },
          EWS: { rank: 510, marks: 184 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 930, marks: 151 },
          OBC_MOBC: { rank: 1370, marks: 128 },
        },
      },
    ],
  },
];

const aecCutoffBranchesRound3 = [
  {
    branch: 'CIVIL ENGINEERING',
    code: 'CE',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 309, marks: 205 },
          STP: { rank: 1401, marks: 127 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 1289, marks: 132 },
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
          UR: { rank: 507, marks: 184 },
          STP: { rank: 1352, marks: 129 },
          EWS: { rank: 625, marks: 173 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 1421, marks: 126 },
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
        data: {},
      },
      {
        seatType: '5% reservation',
        data: {},
      },
    ],
  },
  {
    branch: 'INDUSTRIAL & PRODUCTION ENGINEERING',
    code: 'IPE',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 923, marks: 151 },
          STP: { rank: 4958, marks: 61 },
          EWS: { rank: 1041, marks: 144 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 2339, marks: 100 },
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
        data: {},
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 1841, marks: 113 },
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
          UR: { rank: 548, marks: 180 },
          OBC_MOBC: { rank: 884, marks: 154 },
          STP: { rank: 1283, marks: 132 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 1485, marks: 125 },
          OBC_MOBC: { rank: 1535, marks: 123 },
        },
      },
    ],
  },
  {
    branch: 'CHEMICAL ENGINEERING',
    code: 'CHE',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 779, marks: 161 },
          STP: { rank: 1552, marks: 122 },
          EWS: { rank: 820, marks: 158 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 1719, marks: 117 },
          OBC_MOBC: { rank: 2126, marks: 105 },
        },
      },
    ],
  },
  {
    branch: 'ELECTRONICS & TELECOMMUNICATION ENGINEERING',
    code: 'E&TE',
    rows: [
      {
        seatType: 'Excluding 5% reservation',
        data: {
          UR: { rank: 144, marks: 240 },
          STP: { rank: 3963, marks: 73 },
        },
      },
      {
        seatType: '5% reservation',
        data: {
          UR: { rank: 1266, marks: 133 },
        },
      },
    ],
  },
];

function AecCutoffs() {
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
            {aecCutoffColumns.map((column) => (
              <col key={column.id} className="aec-col-category" />
            ))}
          </colgroup>
          <thead>
            <tr>
              <th>Branch</th>
              <th>Seat Type</th>
              <th>Type</th>
              {aecCutoffColumns.map((column) => (
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
                  {aecCutoffColumns.map((column) => (
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
            AEC Cutoffs
          </span>
          <div className="aec-cutoffs-title-row">
            <img
              src="https://www.aec.ac.in/favi.png"
              alt="Assam Engineering College logo"
              className="aec-cutoffs-logo"
            />
            <h1 className="aec-cutoffs-title">Assam Engineering College Cutoffs</h1>
          </div>
          <p className="aec-cutoffs-subtitle">
            Branch and caste / category wise distribution of ranks and marks (AEC).
          </p>
        </header>

        {renderTable('Round 1', aecCutoffBranches)}
        {renderTable('Round 2', aecCutoffBranchesRound2)}
        {renderTable('Round 3', aecCutoffBranchesRound3)}
      </section>
    </main>
  );
}

export default AecCutoffs;
