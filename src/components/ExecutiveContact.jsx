'use client';

import React, { useState } from 'react';
import { playClick } from '../utils/sound';

export default function ExecutiveContact() {
  const [toastMsg, setToastMsg] = useState(null);

  const copyToClipboard = (text, label) => {
    playClick();
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setToastMsg(`Copied ${label} to clipboard!`);
      setTimeout(() => setToastMsg(null), 2500);
    }
  };

  const channels = [
    {
      type: 'DIRECT EMAIL',
      value: 'shreyansjain.placement@gmail.com',
      desc: 'Send technical role inquiries, hiring specifications & interview invitations.',
      actionLabel: 'Copy Email',
      actionType: 'copy',
      copyVal: 'shreyansjain.placement@gmail.com',
      link: 'mailto:shreyansjain.placement@gmail.com?subject=Role%20Discussion%20-%20AI%20Engineer',
      color: '#10b981',
      icon: '✉️',
    },
    {
      type: 'LINKEDIN NETWORK',
      value: 'in/shreyans-jain-9255351a7',
      desc: 'Recommendations, verified employment history & mutual professional connections.',
      actionLabel: 'Open Profile ↗',
      actionType: 'link',
      link: 'https://www.linkedin.com/in/shreyans-jain-9255351a7/',
      color: '#38bdf8',
      icon: '💼',
    },
    {
      type: 'INSTANT WHATSAPP',
      value: '+91 9958510891',
      desc: 'Direct instant messaging for quick syncs, screening calls, and scheduling.',
      actionLabel: 'Chat on WhatsApp ↗',
      actionType: 'link',
      link: 'https://wa.me/919958510891?text=Hi%20Shreyans%2C%20reviewed%20your%20portfolio%20and%20would%20love%20to%20connect.',
      color: '#22c55e',
      icon: '💬',
    },
    {
      type: 'DIRECT TELEPHONE',
      value: '+91 9958510891',
      desc: 'Immediate cellular line for founders, CTOs, and recruitment directors.',
      actionLabel: 'Call Phone',
      actionType: 'copy',
      copyVal: '+91 9958510891',
      link: 'tel:+919958510891',
      color: '#f59e0b',
      icon: '📞',
    },
  ];

  return (
    <section className="container-custom" id="act-contact" style={{ paddingTop: '90px', paddingBottom: '130px' }}>
      {/* Toast Notification */}
      {toastMsg && (
        <div className="portfolio-toast">
          <span>✓</span>
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Header */}
      <div className="section-header centered">
        <div className="glass-pill" style={{ marginBottom: '14px' }}>
          <span>✦ DIRECT STRATEGIC ACCESS</span>
        </div>
        <h2>
          Let's Build the Next Generation of<br />
          <span className="text-glow-gold">Autonomous AI Systems.</span>
        </h2>
        <p>
          Open to <strong>Senior &amp; Staff Applied AI Engineer</strong>, <strong>Agentic Architect</strong>, and <strong>Voice AI Lead</strong> roles globally — Remote, Hybrid, or On-site in India &amp; Worldwide.
        </p>
      </div>

      {/* Grid of Contact Cards */}
      <div className="contact-grid">
        {channels.map((ch, idx) => (
          <div key={idx} className="contact-card glass-panel">
            <div className="card-header-line">
              <div className="channel-icon-box" style={{ background: `${ch.color}18`, borderColor: `${ch.color}45` }}>
                <span>{ch.icon}</span>
              </div>
              <span className="channel-type-lbl" style={{ color: ch.color }}>
                {ch.type}
              </span>
            </div>

            <div className="channel-val-text">{ch.value}</div>
            <p className="channel-desc-text">{ch.desc}</p>

            <div className="channel-action-row">
              {ch.actionType === 'copy' ? (
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => copyToClipboard(ch.copyVal, ch.type)}
                    className="contact-action-btn"
                    style={{ borderColor: `${ch.color}45`, color: ch.color, flex: 1 }}
                  >
                    <span>📋 {ch.actionLabel}</span>
                  </button>
                  <a
                    href={ch.link}
                    className="contact-action-btn-icon"
                    style={{ borderColor: `${ch.color}45`, color: ch.color }}
                    title={`Open ${ch.type}`}
                  >
                    <span>↗</span>
                  </a>
                </div>
              ) : (
                <a
                  href={ch.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-action-btn"
                  style={{ borderColor: `${ch.color}45`, color: ch.color }}
                >
                  <span>{ch.actionLabel}</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .contact-card {
          padding: 36px 30px;
          border-radius: 22px;
          background: rgba(13, 17, 26, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: perspective(800px) translateY(45px) scale(0.92);
          transition: 
            opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.65s cubic-bezier(0.175, 0.885, 0.32, 1.25),
            border-color 0.28s ease,
            box-shadow 0.28s ease;
        }

        .contact-card.is-scrolled-in {
          opacity: 1;
          transform: perspective(800px) translateY(0) scale(1);
          box-shadow: 0 20px 48px -12px rgba(0, 0, 0, 0.8), 0 0 24px rgba(56, 189, 248, 0.08);
        }

        .contact-card:hover {
          transform: perspective(800px) translateY(-5px) scale(1.02);
          border-color: rgba(255, 255, 255, 0.32);
          box-shadow: 0 28px 60px -10px rgba(0, 0, 0, 0.85), 0 0 32px rgba(56, 189, 248, 0.14);
        }

        .card-header-line {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .channel-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.45rem;
        }

        .channel-type-lbl {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 750;
          letter-spacing: 0.06em;
        }

        .channel-val-text {
          font-size: 1.30rem;
          font-weight: 750;
          color: #ffffff;
          margin-bottom: 10px;
          word-break: break-all;
        }

        .channel-desc-text {
          font-size: 1.02rem;
          color: var(--text-secondary);
          line-height: 1.68;
          margin-bottom: 26px;
          flex: 1;
        }

        .channel-action-row {
          margin-top: auto;
        }

        .contact-action-btn {
          width: 100%;
          padding: 14px 22px;
          min-height: 52px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid;
          font-family: var(--font-mono);
          font-size: 0.92rem;
          font-weight: 750;
          cursor: pointer;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.22s ease;
        }

        .contact-action-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: translateY(-2px);
        }

        .contact-action-btn-icon {
          width: 52px;
          min-height: 52px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid;
          font-family: var(--font-mono);
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.22s ease;
        }

        .contact-action-btn-icon:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: translateY(-2px);
        }

        @media (max-width: 600px) {
          .contact-card {
            padding: 24px 20px;
          }
          .channel-val-text {
            font-size: 1.15rem;
          }
          .channel-desc-text {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}
