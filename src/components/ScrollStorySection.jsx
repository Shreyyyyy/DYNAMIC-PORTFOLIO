'use client';

import React, { useState, useEffect } from 'react';
import ProductStage from './ProductStage';
import { playClick } from '../utils/sound';

export default function ScrollStorySection() {
  const [activeTab, setActiveTab] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-play through architectures if user hasn't clicked
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 5);
    }, 5500);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const highlights = [
    { label: 'RAG Groundedness', val: '98.4%', sub: 'Enterprise Docs' },
    { label: 'Self-Healing SQL', val: '<2% Error Loop', sub: 'Multi-Agent Swarm' },
    { label: 'Voice AI Latency', val: '<400ms', sub: 'Full-Duplex Audio' },
    { label: 'Multimodal Cycle Cut', val: '80%', sub: 'Google Veo Studio' },
  ];

  const handleSelectTab = (idx) => {
    setAutoPlay(false);
    setActiveTab(idx);
  };

  return (
    <section className="hero-modern-section" id="hero">
      {/* Ambient background auras */}
      <div className="hero-bg-glow glow-cyan"></div>
      <div className="hero-bg-glow glow-purple"></div>

      <div className="container-custom">
        {/* Centered Editorial Header */}
        <div className="hero-editorial-center">
          <div className="glass-pill hero-badge float-anim">
            <span className="pulse-dot"></span>
            <span>APPLIED AI &amp; AGENTIC SYSTEMS ARCHITECT · DENTSU</span>
          </div>

          <h1 className="hero-title">
            Architecting <span className="text-glow-gradient">Autonomous</span> Intelligence
          </h1>

          <p className="hero-tagline">
            Engineering self-healing multi-agent swarms, sub-minute enterprise RAG pipelines, and low-latency voice AI in production.
          </p>

          {/* Action CTAs */}
          <div className="hero-action-group">
            <a href="#act-systems" className="btn-primary hero-btn" onClick={() => playClick()}>
              <span>⚡ Explore Shipped Systems ↓</span>
            </a>
            <a
              href="https://github.com/Shreyyyyy?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary hero-btn"
              onClick={() => playClick()}
            >
              <span>🐙 GitHub Repositories ↗</span>
            </a>
            <a href="#act-journey" className="btn-secondary hero-btn" onClick={() => playClick()}>
              <span>💼 Career Trajectory ↓</span>
            </a>
          </div>

          {/* Key Executive Metrics Row */}
          <div className="hero-metrics-strip">
            {highlights.map((h, i) => (
              <div key={i} className="hero-metric-item">
                <span className="hero-metric-val">{h.val}</span>
                <span className="hero-metric-label">{h.label}</span>
                <span className="hero-metric-sub">{h.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Centered Interactive AI Systems Runtime Console with Live Auto-Simulate Toggle */}
        <div className="hero-stage-wrapper">
          <div className="stage-controls-bar">
            <span className="stage-status-indicator">
              <span className="status-live-beacon"></span>
              <span>LIVE CLUSTER RUNTIME TELEMETRY</span>
            </span>
            <button
              onClick={() => {
                playClick();
                setAutoPlay((p) => !p);
              }}
              className="btn-auto-simulate"
              title={autoPlay ? 'Pause automatic stage rotation' : 'Resume automatic stage rotation'}
            >
              <span>{autoPlay ? '⏸ Pause Auto-Rotation' : '▶ Auto-Rotate Architectures'}</span>
            </button>
          </div>

          <ProductStage activeActIndex={activeTab} onSelectMode={handleSelectTab} />
        </div>
      </div>

      <style jsx>{`
        .hero-modern-section {
          position: relative;
          padding-top: 140px;
          padding-bottom: 100px;
          width: 100%;
          overflow: hidden;
        }

        .hero-bg-glow {
          position: absolute;
          width: 650px;
          height: 650px;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          opacity: 0.15;
          z-index: 1;
        }

        .glow-cyan {
          top: 10%;
          left: 15%;
          background: radial-gradient(circle, #38bdf8 0%, transparent 70%);
        }

        .glow-purple {
          top: 30%;
          right: 15%;
          background: radial-gradient(circle, #a855f7 0%, transparent 70%);
        }

        .hero-editorial-center {
          text-align: center;
          max-width: 1040px;
          margin: 0 auto 56px auto;
          position: relative;
          z-index: 10;
        }

        .hero-badge {
          margin-bottom: 24px;
          background: rgba(56, 189, 248, 0.1);
          border-color: rgba(56, 189, 248, 0.4);
          color: #7dd3fc;
          font-size: 0.88rem;
          padding: 8px 22px;
        }

        .hero-title {
          font-size: clamp(3.2rem, 5.8vw, 5.2rem);
          font-weight: 850;
          line-height: 1.08;
          letter-spacing: -0.035em;
          margin-bottom: 24px;
          color: #ffffff;
        }

        .hero-tagline {
          font-size: clamp(1.22rem, 2vw, 1.48rem);
          color: var(--text-secondary);
          line-height: 1.68;
          max-width: 840px;
          margin: 0 auto 40px auto;
        }

        .hero-action-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }

        .hero-btn {
          font-size: 1.05rem;
          padding: 15px 30px;
        }

        .hero-metrics-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          padding: 24px 30px;
          background: rgba(14, 18, 27, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 22px;
          backdrop-filter: blur(24px);
          max-width: 1040px;
          margin: 0 auto;
          box-shadow: 0 18px 40px -10px rgba(0, 0, 0, 0.7);
        }

        .hero-metric-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 6px 14px;
          opacity: 0;
          transform: translateY(24px) scale(0.92);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.25);
        }

        .hero-metric-item.is-scrolled-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .hero-metric-item:not(:last-child) {
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }

        .hero-metric-val {
          font-family: var(--font-mono);
          font-size: 2.1rem;
          font-weight: 850;
          color: #ffffff;
          line-height: 1.15;
        }

        .hero-metric-label {
          font-size: 0.88rem;
          font-weight: 750;
          color: var(--accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 6px;
        }

        .hero-metric-sub {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-top: 3px;
        }

        .hero-stage-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 10;
        }

        .stage-controls-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1040px;
          margin-bottom: 14px;
          padding: 0 10px;
        }

        .stage-status-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }

        .status-live-beacon {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: pulseGlow 1.8s infinite;
        }

        .btn-auto-simulate {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.80rem;
          font-weight: 600;
          padding: 7px 16px;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-auto-simulate:hover {
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
        }

        @media (max-width: 900px) {
          .hero-modern-section {
            padding-top: 110px;
          }
          .hero-metrics-strip {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }
          .hero-metric-item:nth-child(2) {
            border-right: none;
          }
          .stage-controls-bar {
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
          }
        }

        @media (max-width: 600px) {
          .hero-modern-section {
            padding-top: 90px;
            padding-bottom: 60px;
          }
          .hero-editorial-center {
            margin-bottom: 32px;
          }
          .hero-badge {
            font-size: 0.68rem;
            padding: 5px 12px;
            letter-spacing: 0.01em;
            white-space: normal;
            text-align: center;
          }
          .hero-title {
            font-size: clamp(2rem, 8.5vw, 2.8rem);
            margin-bottom: 14px;
          }
          .hero-tagline {
            font-size: 0.97rem;
            margin-bottom: 24px;
            line-height: 1.6;
          }
          .hero-action-group {
            flex-direction: column;
            gap: 10px;
            margin-bottom: 28px;
          }
          .hero-btn {
            width: 100%;
            font-size: 0.94rem;
            padding: 13px 18px;
          }
          .hero-metrics-strip {
            grid-template-columns: repeat(2, 1fr);
            padding: 14px 12px;
            gap: 0;
            border-radius: 14px;
          }
          .hero-metric-item {
            padding: 12px 8px;
            border-right: none !important;
          }
          .hero-metric-item:nth-child(odd) {
            border-right: 1px solid rgba(255, 255, 255, 0.08) !important;
          }
          .hero-metric-item:nth-child(1),
          .hero-metric-item:nth-child(2) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }
          .hero-metric-val {
            font-size: 1.35rem;
          }
          .hero-metric-label {
            font-size: 0.66rem;
          }
          .hero-metric-sub {
            font-size: 0.62rem;
          }
          .stage-controls-bar {
            padding: 0 2px;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 8px;
          }
          .stage-status-indicator {
            font-size: 0.68rem;
          }
          .btn-auto-simulate {
            font-size: 0.70rem;
          }
          .hero-btn {
            width: 100%;
          }
        }
        }
      `}</style>
    </section>
  );
}
