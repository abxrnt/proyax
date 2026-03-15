import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowUpRight, BookOpen, ChevronRight } from 'lucide-react';

const chaptersByGrade = {
  '9th': [],
  '10th': [],
  '11th': {
    Physics: [
      'Units & Dimensions',
      'Errors & Measurements',
      'Motion in a Straight Line',
      'Motion in a Plane',
      'Laws of Motion',
      'Work, Energy and Power',
      'System of Particles and Rotational Motion',
      'Gravitation',
      'Mechanical Properties of Solids',
      'Mechanical Properties of Fluids',
      'Thermal Properties of Matter',
      'Thermodynamics',
      'Kinetic Theory',
      'Oscillations',
      'Waves',
    ],
    Chemistry: [
      'Some Basic Concepts of Chemistry',
      'Structure of Atom',
      'Classification of Elements & Periodicity in Properties',
      'Chemical Bonding and Molecular Structure',
      'Thermodynamics',
      'Chemical Equilibrium',
      'Ionic Equilibrium',
      'Redox Reactions',
      'Basic Principles of Organic Chemistry',
      'Hydrocarbons',
    ],
    Mathematics: [
      'Sets',
      'Relations and Functions',
      'Trigonometric Functions',
      'Complex Numbers and Quadratic Equations',
      'Linear Inequalities',
      'Permutations and Combinations',
      'Binomial Theorem',
      'Sequences and Series',
      'Straight Lines',
      'Conic Sections',
      'Introduction to Three-Dimensional Geometry',
      'Limits and Derivatives',
      'Mathematical Reasoning',
      'Statistics',
      'Probability',
    ],
  },
  '12th': {
    Physics: [
      'Electric Charges and Fields',
      'Electrostatic Potential and Capacitance',
      'Current Electricity',
      'Moving Charges and Magnetism',
      'Magnetism and Matter',
      'Electromagnetic Induction',
      'Alternating Current',
      'Electromagnetic Waves',
      'Ray Optics and Optical Instruments',
      'Wave Optics',
      'Dual Nature of Radiation and Matter',
      'Atoms',
      'Nuclei',
      'Semiconductor Electronics',
    ],
    Chemistry: [
      'Solutions',
      'Electrochemistry',
      'Chemical Kinetics',
      'd- and f- Block Elements',
      'Coordination Compounds',
      'Haloalkanes & Haloarenes',
      'Alcohols, Phenols & Ethers',
      'Aldehydes, Ketones & Carboxylic Acids',
      'Amines',
      'Biomolecules',
    ],
    Mathematics: [
      'Relations and Functions',
      'Inverse Trigonometric Functions',
      'Matrices',
      'Determinants',
      'Continuity and Differentiability',
      'Application of Derivatives',
      'Integrals',
      'Application of Integrals',
      'Differential Equations',
      'Vector Algebra',
      'Three-Dimensional Geometry',
      'Probability',
      'Linear Programming',
    ],
  },
};

function normalizeGrade(value) {
  if (!value) return '';
  const clean = value.toLowerCase().replace(/\s+/g, '');
  if (clean === '9' || clean === '9th') return '9th';
  if (clean === '10' || clean === '10th') return '10th';
  if (clean === '11' || clean === '11th') return '11th';
  if (clean === '12' || clean === '12th') return '12th';
  return value;
}

function BoardsNotes() {
  const params = useParams();
  const grade = useMemo(() => normalizeGrade(params.grade), [params.grade]);
  const chapters = chaptersByGrade[grade] ?? [];
  const categoryEntries = chapters && !Array.isArray(chapters) ? Object.entries(chapters) : [];

  return (
    <main
      style={{
        minHeight: 'calc(100vh - 52px)',
        padding: '24px 16px 60px',
        background:
          'radial-gradient(1200px 500px at 10% -10%, rgba(14,165,233,0.12), transparent 60%), radial-gradient(1100px 420px at 95% 0%, rgba(37,99,235,0.12), transparent 55%), #f8fafc',
      }}
    >
      <section
        style={{
          width: '100%',
          margin: 0,
          padding: '8px 0 0',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            flexWrap: 'wrap',
            width: '100%',
            padding: '0 8px 10px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: 'linear-gradient(140deg, #e0f2fe, #dbeafe)',
                display: 'grid',
                placeItems: 'center',
                color: '#1d4ed8',
              }}
            >
              <BookOpen size={22} />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#64748b' }}>
                Boards Notes
              </p>
              <h1 style={{ margin: 0, fontSize: 'clamp(22px, 4vw, 32px)', color: '#0f172a' }}>
                Class {grade || 'Notes'}
              </h1>
            </div>
          </div>

          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              textDecoration: 'none',
              fontSize: 13,
              fontWeight: 600,
              color: '#1d4ed8',
              padding: '8px 12px',
              borderRadius: 999,
              border: '1px solid rgba(37,99,235,0.25)',
              background: '#eff6ff',
            }}
          >
            Back To Home
          </Link>
        </div>

        <div style={{ marginTop: 18 }}>
          {Array.isArray(chapters) ? (
            chapters.length === 0 ? (
              <div
                style={{
                  padding: '16px 18px',
                  borderRadius: 14,
                  background: '#f8fafc',
                  border: '1px dashed rgba(100,116,139,0.35)',
                  color: '#475569',
                  fontSize: 14,
                }}
              >
                Chapters for Class {grade || 'this'} are being updated.
              </div>
            ) : (
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                  gap: 14,
                }}
              >
                {chapters.map((chapter, index) => (
                  <li
                    key={`${chapter}-${index}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 12,
                      padding: '16px 18px',
                      borderRadius: 14,
                      border: '1px solid rgba(15,23,42,0.08)',
                      background: '#ffffff',
                      boxShadow: '0 12px 20px -18px rgba(15,23,42,0.6)',
                      color: '#0f172a',
                      fontSize: 15,
                      fontWeight: 600,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <ChevronRight size={18} color="#94a3b8" />
                      <span>{chapter}</span>
                    </div>
                    <button
                      type="button"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        border: '1px solid rgba(37,99,235,0.25)',
                        background: '#eff6ff',
                        color: '#1d4ed8',
                        borderRadius: 999,
                        padding: '6px 10px',
                        fontSize: 12,
                        fontWeight: 700,
                        cursor: 'pointer',
                      }}
                    >
                      <span>Open</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </li>
                ))}
              </ul>
            )
          ) : categoryEntries.length === 0 ? (
            <div
              style={{
                padding: '16px 18px',
                borderRadius: 14,
                background: '#f8fafc',
                border: '1px dashed rgba(100,116,139,0.35)',
                color: '#475569',
                fontSize: 14,
              }}
            >
              Chapters for Class {grade || 'this'} are being updated.
            </div>
          ) : (
            <div style={{ display: 'grid', gap: 18 }}>
              {categoryEntries.map(([category, items]) => (
                <section key={category} style={{ display: 'grid', gap: 10 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: 12,
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#64748b',
                      padding: '0 4px',
                    }}
                  >
                    <span>{category}</span>
                  </div>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                      gap: 14,
                    }}
                  >
                    {(items || []).map((chapter, index) => (
                      <li
                        key={`${category}-${chapter}-${index}`}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: 12,
                          padding: '16px 18px',
                          borderRadius: 14,
                          border: '1px solid rgba(15,23,42,0.08)',
                          background: '#ffffff',
                          boxShadow: '0 12px 20px -18px rgba(15,23,42,0.6)',
                          color: '#0f172a',
                          fontSize: 15,
                          fontWeight: 600,
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <ChevronRight size={18} color="#94a3b8" />
                          <span>{chapter}</span>
                        </div>
                        <button
                          type="button"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 6,
                            border: '1px solid rgba(37,99,235,0.25)',
                            background: '#eff6ff',
                            color: '#1d4ed8',
                            borderRadius: 999,
                            padding: '6px 10px',
                            fontSize: 12,
                            fontWeight: 700,
                            cursor: 'pointer',
                          }}
                        >
                          <span>Open</span>
                          <ArrowUpRight size={14} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default BoardsNotes;
