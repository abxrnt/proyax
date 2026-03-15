import { ArrowRight, BookOpen, Building2, Cpu, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const highlights = [
    {
      title: 'Boards',
      description: 'Structured preparation for 9th, 10th, 11th, and 12th with guided progress tracking.',
      icon: BookOpen,
      to: '/boards/9th',
    },
    {
      title: 'Polytechnic',
      description: 'Career-focused programs with practical lab exposure and exam-oriented mentorship.',
      icon: Building2,
      to: '/polytechnic/mechanical',
    },
    {
      title: 'Engineering',
      description: 'Modern technical tracks from core fundamentals to advanced specialization pathways.',
      icon: Cpu,
      to: '/engineering/computer-science',
    },
  ];

  return (
    <>
      <style>{`
        .home-page {
          min-height: calc(100vh - 52px);
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(1200px 600px at -10% -20%, rgba(14, 165, 233, 0.18), transparent 60%),
            radial-gradient(1000px 500px at 110% -10%, rgba(59, 130, 246, 0.16), transparent 55%),
            linear-gradient(180deg, #f8fbff 0%, #f8fafc 100%);
        }

        .home-page::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(148, 163, 184, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.15) 1px, transparent 1px);
          background-size: 36px 36px;
          mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 0.95), transparent 85%);
          pointer-events: none;
        }

        .home-shell {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          padding: 64px 20px 80px;
        }

        .fade-up {
          opacity: 0;
          transform: translateY(14px);
          animation: fadeUp 620ms ease forwards;
        }

        .d1 { animation-delay: 80ms; }
        .d2 { animation-delay: 180ms; }
        .d3 { animation-delay: 280ms; }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid rgba(37, 99, 235, 0.18);
          background: rgba(239, 246, 255, 0.85);
          color: #1d4ed8;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .hero-title {
          margin: 18px 0 10px;
          color: #0f172a;
          font-size: clamp(36px, 6vw, 62px);
          line-height: 1.06;
          letter-spacing: -0.02em;
          max-width: 900px;
        }

        .hero-subtitle {
          margin: 0;
          max-width: 740px;
          color: #475569;
          font-size: clamp(16px, 2.2vw, 20px);
          line-height: 1.75;
        }

        .hero-actions {
          margin-top: 26px;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .home-btn {
          text-decoration: none;
          border-radius: 999px;
          padding: 11px 18px;
          font-size: 14px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .home-btn--primary {
          color: #ffffff;
          background: linear-gradient(135deg, #2563eb, #0ea5e9);
          border: 1px solid transparent;
          box-shadow: 0 16px 24px -16px rgba(37, 99, 235, 0.8);
        }

        .home-btn--secondary {
          color: #1d4ed8;
          background: rgba(255, 255, 255, 0.88);
          border: 1px solid rgba(37, 99, 235, 0.22);
        }

        .home-btn:hover {
          transform: translateY(-1px);
        }

        .stats-row {
          margin-top: 36px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
        }

        .stat-card {
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.8);
          padding: 14px;
          box-shadow: 0 10px 24px -22px rgba(15, 23, 42, 0.9);
        }

        .stat-value {
          margin: 0;
          color: #0f172a;
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 800;
          line-height: 1.2;
        }

        .stat-label {
          margin: 3px 0 0;
          color: #64748b;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .feature-grid {
          margin-top: 34px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .feature-card {
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.85);
          padding: 18px 16px 16px;
          box-shadow: 0 14px 24px -24px rgba(15, 23, 42, 0.8);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
        }

        .feature-card:hover {
          transform: translateY(-3px);
          border-color: rgba(37, 99, 235, 0.25);
          box-shadow: 0 18px 30px -24px rgba(37, 99, 235, 0.45);
        }

        .feature-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #eff6ff, #e0f2fe);
          color: #1d4ed8;
        }

        .feature-title {
          margin: 14px 0 8px;
          color: #0f172a;
          font-size: 18px;
          font-weight: 700;
        }

        .feature-copy {
          margin: 0;
          color: #475569;
          font-size: 14px;
          line-height: 1.7;
        }

        .feature-link {
          margin-top: 14px;
          color: #1d4ed8;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .cta-panel {
          margin-top: 34px;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 18px;
          padding: 22px 18px;
          background: linear-gradient(120deg, rgba(255, 255, 255, 0.93), rgba(245, 250, 255, 0.93));
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .cta-title {
          margin: 0;
          color: #0f172a;
          font-size: clamp(20px, 2.8vw, 30px);
          letter-spacing: -0.01em;
        }

        .cta-copy {
          margin: 6px 0 0;
          color: #475569;
          font-size: 14px;
          line-height: 1.65;
          max-width: 620px;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 980px) {
          .stats-row { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .feature-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 640px) {
          .home-shell { padding: 42px 14px 54px; }
          .stats-row { grid-template-columns: 1fr; }
          .feature-grid { grid-template-columns: 1fr; }
        }

        @media (prefers-reduced-motion: reduce) {
          .fade-up {
            animation: none;
            opacity: 1;
            transform: none;
          }
          .home-btn,
          .feature-card {
            transition: none;
          }
        }
      `}</style>

      <main className="home-page">
        <div className="home-shell">
          <div className="hero-badge fade-up d1">
            <Sparkles size={15} />
            <span>Next-Gen Learning Platform</span>
          </div>

          <h1 className="hero-title fade-up d1">Build your academic future with clarity, speed, and confidence.</h1>

          <p className="hero-subtitle fade-up d2">
            Proyax combines structured coursework, practical pathways, and expert mentoring into one focused
            ecosystem for students across boards, polytechnic, and engineering tracks.
          </p>

          <div className="hero-actions fade-up d2">
            <Link to="/courses" className="home-btn home-btn--primary">
              Explore Courses
              <ArrowRight size={15} />
            </Link>
            <Link to="/contact-us" className="home-btn home-btn--secondary">Talk To Advisor</Link>
          </div>

          <section className="stats-row fade-up d2" aria-label="Performance stats">
            <article className="stat-card">
              <p className="stat-value">120+</p>
              <p className="stat-label">Learning Modules</p>
            </article>
            <article className="stat-card">
              <p className="stat-value">24/7</p>
              <p className="stat-label">Student Support</p>
            </article>
            <article className="stat-card">
              <p className="stat-value">95%</p>
              <p className="stat-label">Goal Completion</p>
            </article>
            <article className="stat-card">
              <p className="stat-value">15k+</p>
              <p className="stat-label">Active Learners</p>
            </article>
          </section>

          <section className="feature-grid fade-up d3" aria-label="Learning tracks">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <article className="feature-card" key={item.title}>
                  <div className="feature-icon-wrap">
                    <Icon size={18} />
                  </div>
                  <h2 className="feature-title">{item.title}</h2>
                  <p className="feature-copy">{item.description}</p>
                  <Link to={item.to} className="feature-link">
                    View Path
                    <ArrowRight size={14} />
                  </Link>
                </article>
              );
            })}
          </section>

          <section className="cta-panel fade-up d3" aria-label="Call to action">
            <div>
              <h3 className="cta-title">Ready to launch your next milestone?</h3>
              <p className="cta-copy">
                Create your roadmap, join the right track, and stay accountable with guided weekly outcomes.
              </p>
            </div>
            <Link to="/services" className="home-btn home-btn--primary">
              Get Started
              <ArrowRight size={15} />
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

export default Home;
