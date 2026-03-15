import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bell,
  BookOpen,
  Briefcase,
  Building2,
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
  ClipboardList,
  Cpu,
  FileQuestion,
  FileText,
  GraduationCap,
  Home,
  LogIn,
  Menu,
  Phone,
  Timer,
  X,
} from 'lucide-react';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState('');
  const [openSubSection, setOpenSubSection] = useState('');

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? '' : section));
    setOpenSubSection('');
  };

  const toggleSubSection = (subSection) => {
    setOpenSubSection((prev) => (prev === subSection ? '' : subSection));
  };

  const handleNavClick = (event) => {
    if (event.target.closest('a')) {
      setMobileOpen(false);
      setOpenSection('');
      setOpenSubSection('');
    }
  };

  return (
    <>
      <style>{`
        .px-navbar {
          height: 52px;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 200;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(17, 24, 39, 0.08);
          box-shadow: 0 8px 20px -16px rgba(17, 24, 39, 0.45);
        }

        .px-navbar__left {
          justify-self: start;
        }

        .px-navbar__brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .px-navbar__banner {
          height: 24px;
          width: auto;
          display: block;
        }

        .px-navbar__logo {
          height: 44px;
          width: auto;
          display: block;
        }

        .px-navbar__links {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          gap: 24px;
          justify-self: center;
          align-items: center;
        }

        .px-navbar__item {
          position: relative;
        }

        .px-navbar__link,
        .px-navbar__trigger {
          position: relative;
          text-decoration: none;
          color: #1f2937;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.01em;
          transition: color 180ms ease;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-family: inherit;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .px-navbar__link::after,
        .px-navbar__trigger::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 100%;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, #0ea5e9 0%, #2563eb 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 220ms ease;
        }

        .px-navbar__link:hover,
        .px-navbar__trigger:hover {
          color: #0f172a;
        }

        .px-navbar__link:hover::after,
        .px-navbar__trigger:hover::after,
        .px-navbar__item:hover .px-navbar__trigger::after {
          transform: scaleX(1);
        }

        .px-navbar__icon {
          width: 15px;
          height: 15px;
          stroke-width: 2.2;
          color: #475569;
          transition: color 180ms ease;
        }

        .px-navbar__link:hover .px-navbar__icon,
        .px-navbar__trigger:hover .px-navbar__icon,
        .px-navbar__item:hover .px-navbar__icon {
          color: #1d4ed8;
        }

        .px-navbar__caret {
          width: 12px;
          height: 12px;
          transition: transform 200ms ease;
          color: #64748b;
        }

        .px-navbar__item:hover .px-navbar__caret,
        .px-navbar__item--open .px-navbar__caret {
          transform: rotate(180deg);
          color: #1d4ed8;
        }

        .px-navbar__dropdown {
          position: absolute;
          top: calc(100% + 14px);
          left: 50%;
          transform: translateX(-50%) translateY(6px);
          min-width: 200px;
          padding: 10px;
          margin: 0;
          list-style: none;
          background: #ffffff;
          border: 1px solid rgba(17, 24, 39, 0.08);
          border-radius: 12px;
          box-shadow: 0 18px 30px -22px rgba(15, 23, 42, 0.7);
          opacity: 0;
          visibility: hidden;
          transition: opacity 180ms ease, transform 180ms ease, visibility 180ms ease;
        }

        .px-navbar__dropdown.px-navbar__mega {
          min-width: 720px;
          width: min(90vw, 820px);
          padding: 16px;
        }

        .px-navbar__dropdown.px-navbar__mega.px-navbar__mega--boards {
          min-width: 880px;
          width: min(95vw, 980px);
        }

        .px-navbar__mega-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin: 0;
          padding: 0;
          list-style: none;
          align-items: start;
        }

        .px-navbar__mega-grid.px-navbar__mega-grid--boards {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .px-navbar__mega-section {
          display: grid;
          gap: 6px;
          align-content: start;
        }

        .px-navbar__mega-title {
          margin: 0 0 6px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #64748b;
        }

        .px-navbar__item:hover .px-navbar__dropdown,
        .px-navbar__item--open .px-navbar__dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .px-navbar__dropdown a {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: #334155;
          font-size: 13px;
          font-weight: 500;
          padding: 6px 10px;
          border-radius: 8px;
          transition: background-color 150ms ease, color 150ms ease;
        }

        .px-navbar__submenu-item {
          position: relative;
        }

        .px-navbar__submenu-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          text-decoration: none;
          color: #334155;
          font-size: 13px;
          font-weight: 500;
          padding: 8px 10px;
          border-radius: 8px;
          border: none;
          background: transparent;
          font-family: inherit;
          cursor: pointer;
          transition: background-color 150ms ease, color 150ms ease;
        }

        .px-navbar__submenu-trigger:hover {
          background: #eff6ff;
          color: #1d4ed8;
        }

        .px-navbar__submenu-caret {
          width: 12px;
          height: 12px;
          color: #64748b;
          transition: transform 180ms ease, color 180ms ease;
        }

        .px-navbar__submenu-item:hover .px-navbar__submenu-caret,
        .px-navbar__submenu-item--open .px-navbar__submenu-caret {
          color: #1d4ed8;
          transform: rotate(-90deg);
        }

        .px-navbar__submenu {
          position: absolute;
          top: 0;
          left: calc(100% + 8px);
          min-width: 240px;
          padding: 8px;
          margin: 0;
          list-style: none;
          background: #ffffff;
          border: 1px solid rgba(17, 24, 39, 0.08);
          border-radius: 10px;
          box-shadow: 0 18px 30px -22px rgba(15, 23, 42, 0.7);
          opacity: 0;
          visibility: hidden;
          transform: translateY(4px);
          transition: opacity 150ms ease, visibility 150ms ease, transform 150ms ease;
          z-index: 10;
        }

        .px-navbar__submenu-item:hover .px-navbar__submenu,
        .px-navbar__submenu-item--open .px-navbar__submenu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .px-navbar__dropdown a:hover {
          background: #eff6ff;
          color: #1d4ed8;
        }

        .px-navbar__dropdown-icon {
          width: 14px;
          height: 14px;
          color: #64748b;
        }

        .px-navbar__dropdown a:hover .px-navbar__dropdown-icon {
          color: #1d4ed8;
        }

        .px-navbar__right {
          justify-self: end;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .px-navbar__login {
          border: 1px solid rgba(37, 99, 235, 0.3);
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          color: #1d4ed8;
          border-radius: 999px;
          padding: 6px 14px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.01em;
          cursor: pointer;
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease,
            color 220ms ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }

        .px-navbar__login:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 18px -12px rgba(37, 99, 235, 0.7);
          border-color: rgba(37, 99, 235, 0.55);
          color: #1e40af;
        }

        .px-navbar__login:active {
          transform: translateY(0);
          box-shadow: none;
        }

        .px-navbar__login-icon {
          width: 15px;
          height: 15px;
        }

        .px-navbar__menu-btn {
          display: none;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          border: 1px solid rgba(17, 24, 39, 0.12);
          background: #ffffff;
          color: #1f2937;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .px-navbar__menu-btn svg {
          width: 18px;
          height: 18px;
        }

        .px-navbar__overlay {
          display: none;
        }

        .px-navbar__panel-close {
          display: none;
        }

        @media (max-width: 1024px) {
          .px-navbar {
            grid-template-columns: 1fr auto;
            gap: 10px;
            padding: 0 12px;
            z-index: 350;
          }

          .px-navbar__logo {
            height: 34px;
          }

          .px-navbar__banner {
            height: 18px;
          }

          .px-navbar__links {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            width: min(88vw, 360px);
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 4px;
            padding: 62px 10px 12px;
            border-left: 1px solid rgba(17, 24, 39, 0.08);
            border-radius: 0;
            background: #ffffff;
            box-shadow: -20px 0 32px -24px rgba(15, 23, 42, 0.6);
            max-height: 100vh;
            overflow-y: auto;
            transform: translateX(100%);
            transition: transform 260ms ease;
            z-index: 370;
          }

          .px-navbar__links--open {
            transform: translateX(0);
          }

          .px-navbar__item {
            width: 100%;
          }

          .px-navbar__link,
          .px-navbar__trigger {
            width: 100%;
            justify-content: space-between;
            padding: 10px 10px;
            border-radius: 10px;
          }

          .px-navbar__link::after,
          .px-navbar__trigger::after {
            display: none;
          }

          .px-navbar__link:hover,
          .px-navbar__trigger:hover {
            background: #f8fafc;
          }

          .px-navbar__dropdown {
            position: static;
            transform: none;
            min-width: 0;
            display: none;
            opacity: 1;
            visibility: visible;
            box-shadow: none;
            border: 1px dashed rgba(17, 24, 39, 0.12);
            margin: 0 10px 8px;
            padding: 6px;
          }

          .px-navbar__item--open .px-navbar__dropdown {
            display: block;
          }

          .px-navbar__dropdown a {
            padding: 8px;
          }

          .px-navbar__submenu-trigger {
            padding: 8px;
          }

          .px-navbar__submenu-caret {
            transform: rotate(0deg);
          }

          .px-navbar__submenu-item--open .px-navbar__submenu-caret {
            transform: rotate(180deg);
          }

          .px-navbar__submenu {
            position: static;
            min-width: 0;
            opacity: 1;
            visibility: visible;
            transform: none;
            display: none;
            box-shadow: none;
            border: 1px dashed rgba(17, 24, 39, 0.12);
            margin: 6px 0 0;
          }

          .px-navbar__submenu-item--open .px-navbar__submenu {
            display: block;
          }

          .px-navbar__right {
            gap: 8px;
          }

          .px-navbar__login {
            padding: 5px 12px;
            font-size: 12px;
          }

          .px-navbar__menu-btn {
            display: inline-flex;
          }

          .px-navbar__overlay {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(15, 23, 42, 0.32);
            opacity: 0;
            visibility: hidden;
            transition: opacity 220ms ease, visibility 220ms ease;
            z-index: 360;
          }

          .px-navbar__overlay--open {
            opacity: 1;
            visibility: visible;
          }

          .px-navbar__panel-close {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            top: 12px;
            right: 12px;
            width: 34px;
            height: 34px;
            border-radius: 10px;
            border: 1px solid rgba(17, 24, 39, 0.12);
            background: #ffffff;
            color: #1f2937;
            cursor: pointer;
            z-index: 380;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
          }

          .px-navbar__panel-close--open {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
          }

          .px-navbar__panel-close svg {
            width: 16px;
            height: 16px;
          }
        }

        @media (max-width: 640px) {
          .px-navbar {
            height: 50px;
            padding: 0 10px;
          }

          .px-navbar__brand {
            gap: 8px;
          }

          .px-navbar__logo {
            height: 30px;
          }

          .px-navbar__banner {
            height: 16px;
          }

          .px-navbar__login {
            padding: 5px 10px;
            font-size: 11px;
            gap: 6px;
          }

          .px-navbar__login span {
            display: none;
          }
        }
      `}</style>

      <nav className="px-navbar">
        <div className="px-navbar__left">
          <div className="px-navbar__brand">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="px-navbar__logo" />
            <img src={`${process.env.PUBLIC_URL}/banner.png`} alt="Banner" className="px-navbar__banner" />
          </div>
        </div>

        <ul className={`px-navbar__links ${mobileOpen ? 'px-navbar__links--open' : ''}`} onClick={handleNavClick}>
          <li className="px-navbar__item">
            <Link to="/" className="px-navbar__link">
              <Home className="px-navbar__icon" />
              <span>Home</span>
            </Link>
          </li>

          <li className="px-navbar__item">
            <Link to="/services" className="px-navbar__link">
              <Briefcase className="px-navbar__icon" />
              <span>Services</span>
            </Link>
          </li>

          <li className={`px-navbar__item ${openSection === 'boards' ? 'px-navbar__item--open' : ''}`}>
            <button type="button" className="px-navbar__trigger" onClick={() => toggleSection('boards')}>
              <ClipboardList className="px-navbar__icon" />
              <span>Boards</span>
              <ChevronDown className="px-navbar__caret" />
            </button>
            <ul className="px-navbar__dropdown px-navbar__mega px-navbar__mega--boards">
              <li className="px-navbar__mega-grid px-navbar__mega-grid--boards">
                <div className="px-navbar__mega-section">
                  <p className="px-navbar__mega-title">9th</p>
                  <Link to="/boards/9th/notes">
                    <FileText className="px-navbar__dropdown-icon" />
                    <span>Notes</span>
                  </Link>
                  <Link to="/boards/9th/modules">
                    <BookOpen className="px-navbar__dropdown-icon" />
                    <span>Modules</span>
                  </Link>
                  <Link to="/boards/9th/dpps">
                    <ClipboardCheck className="px-navbar__dropdown-icon" />
                    <span>DPPs</span>
                  </Link>
                  <Link to="/boards/9th/mock-tests">
                    <Timer className="px-navbar__dropdown-icon" />
                    <span>Mock Tests</span>
                  </Link>
                  <Link to="/boards/9th/pyqs">
                    <FileQuestion className="px-navbar__dropdown-icon" />
                    <span>PYQs</span>
                  </Link>
                </div>

                <div className="px-navbar__mega-section">
                  <p className="px-navbar__mega-title">10th</p>
                  <Link to="/boards/10th/notes">
                    <FileText className="px-navbar__dropdown-icon" />
                    <span>Notes</span>
                  </Link>
                  <Link to="/boards/10th/modules">
                    <BookOpen className="px-navbar__dropdown-icon" />
                    <span>Modules</span>
                  </Link>
                  <Link to="/boards/10th/dpps">
                    <ClipboardCheck className="px-navbar__dropdown-icon" />
                    <span>DPPs</span>
                  </Link>
                  <Link to="/boards/10th/mock-tests">
                    <Timer className="px-navbar__dropdown-icon" />
                    <span>Mock Tests</span>
                  </Link>
                  <Link to="/boards/10th/pyqs">
                    <FileQuestion className="px-navbar__dropdown-icon" />
                    <span>PYQs</span>
                  </Link>
                </div>

                <div className="px-navbar__mega-section">
                  <p className="px-navbar__mega-title">11th</p>
                  <Link to="/boards/11th/notes">
                    <FileText className="px-navbar__dropdown-icon" />
                    <span>Notes</span>
                  </Link>
                  <Link to="/boards/11th/modules">
                    <BookOpen className="px-navbar__dropdown-icon" />
                    <span>Modules</span>
                  </Link>
                  <Link to="/boards/11th/dpps">
                    <ClipboardCheck className="px-navbar__dropdown-icon" />
                    <span>DPPs</span>
                  </Link>
                  <Link to="/boards/11th/mock-tests">
                    <Timer className="px-navbar__dropdown-icon" />
                    <span>Mock Tests</span>
                  </Link>
                  <Link to="/boards/11th/pyqs">
                    <FileQuestion className="px-navbar__dropdown-icon" />
                    <span>PYQs</span>
                  </Link>
                </div>

                <div className="px-navbar__mega-section">
                  <p className="px-navbar__mega-title">12th</p>
                  <Link to="/boards/12th/notes">
                    <FileText className="px-navbar__dropdown-icon" />
                    <span>Notes</span>
                  </Link>
                  <Link to="/boards/12th/modules">
                    <BookOpen className="px-navbar__dropdown-icon" />
                    <span>Modules</span>
                  </Link>
                  <Link to="/boards/12th/dpps">
                    <ClipboardCheck className="px-navbar__dropdown-icon" />
                    <span>DPPs</span>
                  </Link>
                  <Link to="/boards/12th/mock-tests">
                    <Timer className="px-navbar__dropdown-icon" />
                    <span>Mock Tests</span>
                  </Link>
                  <Link to="/boards/12th/pyqs">
                    <FileQuestion className="px-navbar__dropdown-icon" />
                    <span>PYQs</span>
                  </Link>
                </div>
              </li>
            </ul>
          </li>

          <li className={`px-navbar__item ${openSection === 'polytechnic' ? 'px-navbar__item--open' : ''}`}>
            <button type="button" className="px-navbar__trigger" onClick={() => toggleSection('polytechnic')}>
              <Building2 className="px-navbar__icon" />
              <span>Polytechnic</span>
              <ChevronDown className="px-navbar__caret" />
            </button>
            <ul className="px-navbar__dropdown">
              <li>
                <Link to="/polytechnic/mechanical">
                  <ChevronRight className="px-navbar__dropdown-icon" />
                  <span>Mechanical</span>
                </Link>
              </li>
              <li>
                <Link to="/polytechnic/civil">
                  <ChevronRight className="px-navbar__dropdown-icon" />
                  <span>Civil</span>
                </Link>
              </li>
              <li>
                <Link to="/polytechnic/electrical">
                  <ChevronRight className="px-navbar__dropdown-icon" />
                  <span>Electrical</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className={`px-navbar__item ${openSection === 'engineering' ? 'px-navbar__item--open' : ''}`}>
            <button type="button" className="px-navbar__trigger" onClick={() => toggleSection('engineering')}>
              <Cpu className="px-navbar__icon" />
              <span>Engineering</span>
              <ChevronDown className="px-navbar__caret" />
            </button>
            <ul className="px-navbar__dropdown px-navbar__mega">
              <li className="px-navbar__mega-grid">
                <div className="px-navbar__mega-section">
                  <p className="px-navbar__mega-title">Cutoffs</p>
                  <Link to="/engineering/cutoffs/aec">
                    <ChevronRight className="px-navbar__dropdown-icon" />
                    <span>AEC Cutoffs</span>
                  </Link>
                  <Link to="/engineering/cutoffs/jec">
                    <ChevronRight className="px-navbar__dropdown-icon" />
                    <span>JEC Cutoffs</span>
                  </Link>
                </div>

                <div className="px-navbar__mega-section">
                  <p className="px-navbar__mega-title">Placements</p>
                  <Link to="/engineering/placements/assam-engineering-college">
                    <ChevronRight className="px-navbar__dropdown-icon" />
                    <span>Assam Engineering College</span>
                  </Link>
                  <Link to="/engineering/placements/golaghat-engineering-college">
                    <ChevronRight className="px-navbar__dropdown-icon" />
                    <span>Golaghat Engineering College</span>
                  </Link>
                  <Link to="/engineering/placements/dhemaji-engineering-college">
                    <ChevronRight className="px-navbar__dropdown-icon" />
                    <span>Dhemaji Engineering College</span>
                  </Link>
                  <Link to="/engineering/placements/cit-kokrajhar">
                    <ChevronRight className="px-navbar__dropdown-icon" />
                    <span>CIT Kokrajhar</span>
                  </Link>
                  <Link to="/engineering/placements/tezpur-university">
                    <ChevronRight className="px-navbar__dropdown-icon" />
                    <span>Tezpur University</span>
                  </Link>
                  <Link to="/engineering/placements">
                    <ChevronRight className="px-navbar__dropdown-icon" />
                    <span>Jorhat Engineering College</span>
                  </Link>
                </div>

                <div className="px-navbar__mega-section">
                  <p className="px-navbar__mega-title">CEE</p>
                  <Link to="/cee/2025">
                    <ChevronRight className="px-navbar__dropdown-icon" />
                    <span>PYQ Papers 2025</span>
                  </Link>
                  <Link to="/cee/2024">
                    <ChevronRight className="px-navbar__dropdown-icon" />
                    <span>PYQ Papers 2024</span>
                  </Link>
                  <Link to="/cee/2023">
                    <ChevronRight className="px-navbar__dropdown-icon" />
                    <span>PYQ Papers 2023</span>
                  </Link>
                  <Link to="/cee/2022">
                    <ChevronRight className="px-navbar__dropdown-icon" />
                    <span>PYQ Papers 2022</span>
                  </Link>
                  <Link to="/cee/2021">
                    <ChevronRight className="px-navbar__dropdown-icon" />
                    <span>PYQ Papers 2021</span>
                  </Link>
                  <Link to="/cee/2020">
                    <ChevronRight className="px-navbar__dropdown-icon" />
                    <span>PYQ Papers 2020</span>
                  </Link>
                </div>
              </li>
            </ul>
          </li>

          <li className="px-navbar__item">
            <Link to="/notifications" className="px-navbar__link">
              <Bell className="px-navbar__icon" />
              <span>Notifications</span>
            </Link>
          </li>

          <li className="px-navbar__item">
            <Link to="/contact-us" className="px-navbar__link">
              <Phone className="px-navbar__icon" />
              <span>Contact Us</span>
            </Link>
          </li>
        </ul>

        <div className="px-navbar__right">
          <Link to="/login" className="px-navbar__login">
            <LogIn className="px-navbar__login-icon" />
            <span>Login</span>
          </Link>

          <button
            type="button"
            className="px-navbar__menu-btn"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <button
        type="button"
        className={`px-navbar__panel-close ${mobileOpen ? 'px-navbar__panel-close--open' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-label="Close menu"
      >
        <X />
      </button>

      <div
        className={`px-navbar__overlay ${mobileOpen ? 'px-navbar__overlay--open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />
    </>
  );
}

export default Navbar;


