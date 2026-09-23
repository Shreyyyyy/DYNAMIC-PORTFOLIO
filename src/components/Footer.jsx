'use client';

import React from 'react';
import { playClick } from '../utils/sound';

export default function Footer() {
  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(251, 191, 36, 0.15)',
        padding: '36px 24px',
        background: '#080312',
      }}
    >
      <div
        className="container-custom"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.86rem', color: '#f8fafc', fontWeight: 700 }}>
              SHREYANS JAIN
            </span>
            <span style={{ fontSize: '0.70rem', color: 'var(--accent-gold)', fontFamily: 'var(--font-mono)' }}>
              · AI SYSTEMS ARCHITECT
            </span>
          </div>
          <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            Engineering autonomous agent swarms, sub-minute enterprise RAG &amp; low-latency voice AI.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href="https://github.com/Shreyyyyy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.80rem', transition: 'color 0.15s ease' }}
            className="footer-link"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/shreyans-jain-9255351a7/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.80rem', transition: 'color 0.15s ease' }}
            className="footer-link"
          >
            LinkedIn ↗
          </a>
          <a
            href="mailto:shreyansjain.placement@gmail.com"
            style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.80rem', transition: 'color 0.15s ease' }}
            className="footer-link"
          >
            Email ↗
          </a>
          <button
            onClick={scrollToTop}
            style={{
              background: 'rgba(251, 191, 36, 0.12)',
              border: '1px solid rgba(251, 191, 36, 0.3)',
              color: '#fbbf24',
              padding: '6px 14px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.74rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              transition: 'all 0.2s ease',
            }}
          >
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
}
