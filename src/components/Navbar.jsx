'use client';

import React, { useState, useEffect } from 'react';
import { initAudio, setSoundEnabled, getSoundEnabled, playNodeActivate, playClick } from '../utils/sound';

export default function Navbar({ onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false);
  const [sfxEnabled, setSfxEnabled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setSfxEnabled(getSoundEnabled());
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Systems & Impact', href: '#act-systems' },
    { label: 'Trajectory', href: '#act-journey' },
    { label: 'Observability', href: '#act-safety' },
    { label: 'Contact', href: '#act-contact' },
  ];

  const handleNavClick = () => {
    playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '12px 20px' : '20px 24px',
        transition: 'all 0.25s ease',
        background: scrolled || mobileMenuOpen ? 'rgba(7, 9, 14, 0.92)' : 'rgba(7, 9, 14, 0.5)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled || mobileMenuOpen ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
      }}
    >
      <div
        className="container-custom"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Name & Role */}
        <a
          href="#hero"
          onClick={handleNavClick}
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 800,
              fontSize: '0.96rem',
              letterSpacing: '0.06em',
              color: '#ffffff',
            }}
          >
            SHREYANS JAIN
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              padding: '3px 10px',
              borderRadius: '9999px',
              background: 'rgba(56, 189, 248, 0.12)',
              color: '#38bdf8',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              fontWeight: 600,
            }}
          >
            AI ARCHITECT
          </span>
        </a>

        {/* Center Desktop Nav */}
        <nav
          style={{
            display: 'none',
            gap: '28px',
            alignItems: 'center',
          }}
          className="desktop-nav"
        >
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className="nav-link" onClick={() => playClick()}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Tools & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Quick Search Trigger */}
          <button
            onClick={() => {
              playClick();
              if (onOpenSearch) onOpenSearch();
            }}
            className="nav-tool-btn"
            title="Search systems, roles, and tech stack (Cmd+K)"
          >
            <span>🔍</span>
            <span className="nav-tool-label">Search</span>
            <kbd className="nav-kbd">⌘K</kbd>
          </button>

          {/* Sound FX Toggle */}
          <button
            onClick={() => {
              const next = !sfxEnabled;
              setSfxEnabled(next);
              setSoundEnabled(next);
              if (next) {
                initAudio();
                playNodeActivate();
              }
            }}
            className={`nav-tool-btn ${sfxEnabled ? 'active-sfx' : ''}`}
            title={sfxEnabled ? 'Sound Enabled' : 'Sound Muted'}
          >
            <span>{sfxEnabled ? '🔊' : '🔇'}</span>
          </button>

          {/* Desktop Connect Button */}
          <a
            href="#act-contact"
            className="btn-primary desktop-connect-btn"
            style={{
              padding: '8px 18px',
              fontSize: '0.86rem',
              minHeight: 'auto',
            }}
            onClick={() => playClick()}
          >
            Connect →
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => {
              playClick();
              setMobileMenuOpen((prev) => !prev);
            }}
            className="mobile-menu-btn"
            aria-label="Toggle Mobile Menu"
          >
            <span>{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="mobile-drawer-links">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="mobile-nav-item"
              >
                <span>{item.label}</span>
                <span style={{ color: 'var(--accent-cyan)' }}>→</span>
              </a>
            ))}
            <a
              href="#act-contact"
              onClick={handleNavClick}
              className="btn-primary"
              style={{
                marginTop: '12px',
                width: '100%',
                justifyContent: 'center',
                padding: '12px',
                fontSize: '0.95rem',
              }}
            >
              💼 Connect with Shreyans →
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 500;
          transition: color 0.15s ease;
        }
        .nav-link:hover {
          color: #ffffff;
        }
        .nav-tool-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 12px;
          min-height: 38px;
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.80rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .nav-tool-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }
        .nav-tool-btn.active-sfx {
          background: rgba(16, 185, 129, 0.14);
          border-color: rgba(16, 185, 129, 0.35);
          color: #34d399;
        }
        .nav-kbd {
          background: rgba(255, 255, 255, 0.08);
          padding: 1px 6px;
          border-radius: 4px;
          font-size: 0.68rem;
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #cbd5e1;
        }
        .mobile-menu-btn {
          display: none;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #ffffff;
          font-size: 1.2rem;
          cursor: pointer;
        }
        .mobile-nav-drawer {
          padding: 20px 24px 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          animation: slideDown 0.25s ease-out;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .mobile-drawer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .mobile-nav-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 14px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #f8fafc;
          text-decoration: none;
          font-size: 1.0rem;
          font-weight: 600;
        }
        .mobile-nav-item:hover {
          background: rgba(255, 255, 255, 0.08);
        }
        @media (max-width: 600px) {
          .nav-tool-label {
            display: none;
          }
          .desktop-connect-btn {
            display: none !important;
          }
        }
        @media (max-width: 900px) {
          .mobile-menu-btn {
            display: flex !important;
          }
        }
        @media (min-width: 901px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-nav-drawer {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
