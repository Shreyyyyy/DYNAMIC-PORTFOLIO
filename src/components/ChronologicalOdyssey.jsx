'use client';

import React, { useState } from 'react';
import { playClick } from '../utils/sound';

const milestones = [
  {
    id: 'era-academia',
    period: '2020 — 2025',
    yearShort: '2020–25',
    eraNum: '01',
    company: 'Christ University & VIT Vellore',
    companyShort: 'Academia',
    role: 'Master & Bachelor of Computer Applications',
    location: 'Bangalore & Vellore, India',
    status: 'ACADEMIC FOUNDATIONS',
    statusColor: '#38bdf8',
    headline: 'Rigorous Foundations in Distributed Computing & ML',
    metrics: [
      { val: '2 Degrees', lbl: 'MCA + BCA' },
      { val: 'Honors', lbl: 'Academic Rank' },
      { val: '5 Years', lbl: 'Deep CS Focus' },
    ],
    deployments: [
      'Master of Computer Applications (MCA) — Christ University (2023–2025).',
      'Bachelor of Computer Applications (BCA) — VIT Vellore (2020–2023).',
      'Core research in distributed systems, neural networks, and algorithmic complexity.',
    ],
    breakthroughs: [
      'Graduated with honors across both post-graduate and undergraduate programs.',
      'Spearheaded technical symposiums on scalable software architecture and high-throughput data pipelines.',
    ],
    tech: ['Distributed Systems', 'Machine Learning', 'Data Structures & Algorithms', 'Python', 'Java', 'SQL'],
  },
  {
    id: 'era-christ-faculty',
    period: 'Mar 2024 — Dec 2024',
    yearShort: '2024',
    eraNum: '02',
    company: 'Christ University',
    companyShort: 'Christ Univ.',
    role: 'Faculty & AI / ML Researcher',
    location: 'Bengaluru, Karnataka, India',
    status: 'ACADEMIA & RESEARCH',
    statusColor: '#fbbf24',
    headline: 'Engineering Mentorship & Applied Machine Learning Instruction',
    metrics: [
      { val: '100+', lbl: 'Engineers Mentored' },
      { val: '100%', lbl: 'Curriculum Pass' },
      { val: '10 Mos', lbl: 'Research Tenure' },
    ],
    deployments: [
      'Delivered hands-on curriculum in Python, object-oriented design, and algorithms.',
      'Conducted systems engineering labs focusing on CI/CD lifecycle and test-driven development.',
      'Spearheaded departmental hackathons focused on applied Generative AI and automation.',
    ],
    breakthroughs: [
      'Mentored 100+ engineers on production software patterns, microservices, and system reliability.',
      'Designed modular coursework bridging theoretical ML models with production delivery.',
    ],
    tech: ['Python Instruction', 'OOP Architecture', 'Algorithms', 'Mentorship', 'Curriculum Design'],
  },
  {
    id: 'era-businessnext-genai',
    period: 'Jan 2025 — May 2025',
    yearShort: '2025 H1',
    eraNum: '03',
    company: 'BUSINESSNEXT',
    companyShort: 'BUSINESSNEXT',
    role: 'Generative AI Engineer',
    location: 'Noida, Uttar Pradesh, India',
    status: 'DEV INNOVATION',
    statusColor: '#60a5fa',
    headline: 'Autonomous Engineering Intelligence & CI/CD Multi-Agent Systems',
    metrics: [
      { val: '50+ Items', lbl: 'Sprints Analyzed' },
      { val: '4x Faster', lbl: 'QA Test Gen' },
      { val: '0 Leakage', lbl: 'Data Privacy' },
    ],
    deployments: [
      'Automated sprint risk analysis and engineering backlog synthesis for product teams.',
      'Engineered autonomous QA multi-agent system generating automated test suites from PR git diffs.',
      'Analyzed 50+ Azure DevOps work items per sprint with automated SLA risk detection.',
      'Created synthetic benchmark datasets ensuring strict instruction fidelity and data privacy.',
    ],
    breakthroughs: [
      'Cut QA test suite generation time from 4 hours to instantaneous CI/CD PR triggers.',
      'Eliminated sprint planning discrepancies via automated risk extraction.',
    ],
    tech: ['QA Automation Agents', 'Azure DevOps', 'Synthetic Datasets', 'FastAPI', 'Git Diffs API'],
  },
  {
    id: 'era-businessnext-agentic',
    period: 'Jun 2025 — May 2026',
    yearShort: '2025–26',
    eraNum: '04',
    company: 'BUSINESSNEXT',
    companyShort: 'BUSINESSNEXT',
    role: 'Agentic AI Engineer',
    location: 'Noida, Uttar Pradesh, India',
    status: 'ENTERPRISE SCALE',
    statusColor: '#c084fc',
    headline: 'Enterprise Multi-Agent CRM Systems & Model Fine-Tuning',
    metrics: [
      { val: '+30%', lbl: 'Accuracy Lift' },
      { val: '+35%', lbl: 'Response Speed' },
      { val: 'DeepEval', lbl: 'Telemetry Guard' },
    ],
    deployments: [
      'Automated enterprise CRM communications across tier-1 banking clients, boosting turnaround by 35%.',
      'Built stateful multi-agent workflows with autonomous tool calling and Guardrails-AI verification.',
      'Fine-tuned open-source LLaMA and Mistral models for structured JSON output and schema compliance.',
      'Established centralized LLM observability and regression evaluation telemetry with DeepEval.',
    ],
    breakthroughs: [
      'Increased tool calling precision by +30% via specialized LoRA instruction fine-tuning.',
      'Enforced zero PII leakage and eliminated hallucinated financial commitments in live banking ops.',
    ],
    tech: ['LangChain (v1)', 'Fine-Tuned LLaMA', 'Fine-Tuned Mistral', 'Guardrails-AI', 'DeepEval', 'LoRA'],
  },
  {
    id: 'era-dentsu-lead',
    period: 'May 2026 — Present',
    yearShort: 'NOW',
    eraNum: '05',
    company: 'dentsu',
    companyShort: 'dentsu',
    role: 'Artificial Intelligence Engineer',
    location: 'Gurugram, Haryana, India',
    status: 'CURRENT ROLE',
    statusColor: '#10b981',
    headline: 'Production Agent Swarms, Sub-Minute RAG & Voice AI for Global Brands',
    metrics: [
      { val: '5+ Systems', lbl: 'Shipped to Prod' },
      { val: '<60s', lbl: 'RAG Lookup' },
      { val: '<400ms', lbl: 'Voice Latency' },
    ],
    deployments: [
      'Flipkart Talk2Data: Multi-agent NL-to-SQL platform with self-healing reflection loops (<2% error rate).',
      'Enterprise RAG Platform: Reduced document lookup from 60+ minutes to <1 minute with 98.4% groundedness.',
      'Multilingual Voice AI: 5 concurrent full-duplex channels for test-drive booking without human handoff (<400ms SLA).',
      'AI Film Studio & Veo: 4-agent script-to-screen pipeline reducing creative production cycles by 80%.',
      'Creativium Engine: Automated brand-compliant marketing asset generation across 12+ aspect ratios.',
    ],
    breakthroughs: [
      'Delivered autonomous agent swarms directly into production workflows for Fortune 500 retail clients.',
      'Standardized stateful LangGraph workflows and Model Context Protocol (MCP) integrations across engineering squads.',
    ],
    tech: ['LangGraph', 'Google ADK', 'Gemini 1.5 Pro', 'Google Veo', 'Whisper STT', 'FastAPI WebSockets', 'MCP'],
  },
];

export default function ChronologicalOdyssey() {
  const [activeIdx, setActiveIdx] = useState(4); // Default: current role
  const [activeTab, setActiveTab] = useState('deployments'); // 'deployments' | 'breakthroughs' | 'tech'

  const handleEraClick = (idx) => {
    playClick();
    if (activeIdx === idx) {
      // Click active → collapse (optional: keep open, always show last)
      return;
    }
    setActiveIdx(idx);
    setActiveTab('deployments');
  };

  return (
    <section className="container-custom ody-section" id="act-journey">
      {/* ── Section Header ── */}
      <div className="ody-section-header">
        <div className="glass-pill" style={{ marginBottom: '14px' }}>
          <span className="pulse-dot" />
          <span>CHRONOLOGICAL TRAJECTORY · CAREER ODYSSEY</span>
        </div>
        <h2>
          Engineering Trajectory.<br />
          <span className="text-glow-gradient">Click Any Era to Expand & Explore.</span>
        </h2>
        <p>
          Five distinct chapters of applied AI engineering — from academic foundations to global-scale production systems.
        </p>
      </div>

      {/* ── Stats Strip ── */}
      <div className="ody-stats-strip scroll-element">
        {[
          { val: '4+ Years', lbl: 'Applied AI & Software Eng.', color: 'text-glow-emerald' },
          { val: '100+', lbl: 'Engineers Mentored', color: 'text-glow-cyan' },
          { val: '5+ Shipped', lbl: 'Enterprise Production Systems', color: 'text-glow-purple' },
          { val: '+30%', lbl: 'Fine-Tuned Accuracy Lift', color: 'text-glow-gold' },
        ].map((s, i) => (
          <div key={i} className="ody-stat-box scroll-element" style={{ transitionDelay: `${i * 0.08}s` }}>
            <span className={`ody-stat-val ${s.color}`}>{s.val}</span>
            <span className="ody-stat-lbl">{s.lbl}</span>
          </div>
        ))}
      </div>

      {/* ── Main: Timeline + Accordion Cards ── */}
      <div className="ody-main scroll-element">

        {/* Left Spine */}
        <div className="ody-spine">
          <div className="ody-spine-line" />
          {milestones.map((m, i) => (
            <button
              key={m.id}
              className={`ody-spine-node ${i === activeIdx ? 'active' : i < activeIdx ? 'passed' : ''}`}
              style={{ top: `${(i / (milestones.length - 1)) * 86 + 7}%` }}
              onClick={() => handleEraClick(i)}
              title={m.company}
            >
              <div
                className="ody-sn-dot"
                style={{
                  background: i <= activeIdx ? m.statusColor : 'rgba(255,255,255,0.15)',
                  boxShadow: i === activeIdx ? `0 0 16px ${m.statusColor}, 0 0 32px ${m.statusColor}50` : 'none',
                }}
              />
              {i === activeIdx && (
                <div className="ody-sn-ring" style={{ borderColor: m.statusColor }} />
              )}
              <span className="ody-sn-year" style={{ color: i === activeIdx ? m.statusColor : 'var(--text-dim)' }}>
                {m.yearShort}
              </span>
            </button>
          ))}
        </div>

        {/* Right: Cards Stack */}
        <div className="ody-cards-stack">
          {milestones.map((m, i) => {
            const isActive = i === activeIdx;
            const isPassed = i < activeIdx;
            return (
              <div
                key={m.id}
                className={`ody-era-card ${isActive ? 'ody-active' : ''} ${isPassed ? 'ody-passed' : ''}`}
                style={{ '--era-color': m.statusColor }}
                onClick={() => handleEraClick(i)}
              >
                {/* ── Card Header (always visible) ── */}
                <div className="ody-card-header">
                  {/* Era number */}
                  <div className="ody-era-num" style={{ color: isActive ? m.statusColor : 'rgba(255,255,255,0.12)' }}>
                    {m.eraNum}
                  </div>

                  {/* Content */}
                  <div className="ody-header-content">
                    <div className="ody-header-top-row">
                      <span
                        className="ody-status-badge"
                        style={{
                          color: m.statusColor,
                          background: `${m.statusColor}14`,
                          borderColor: `${m.statusColor}40`,
                        }}
                      >
                        {m.status === 'CURRENT ROLE' && <span className="pulse-dot" style={{ width: '6px', height: '6px', flexShrink: 0 }} />}
                        {m.status}
                      </span>
                      <span className="ody-period">{m.period}</span>
                    </div>
                    <h3 className="ody-company-name">{m.company}</h3>
                    <div className="ody-role-name">{m.role}</div>
                    <div className="ody-location">📍 {m.location}</div>
                  </div>

                  {/* Expand toggle */}
                  <div className={`ody-toggle-icon ${isActive ? 'open' : ''}`} style={{ color: m.statusColor }}>
                    {isActive ? '−' : '+'}
                  </div>
                </div>

                {/* ── Expanded Detail (only active) ── */}
                <div className={`ody-card-detail ${isActive ? 'ody-detail-open' : ''}`}>
                  <div className="ody-detail-inner">
                    {/* Headline */}
                    <div className="ody-detail-headline" style={{ borderColor: `${m.statusColor}30`, background: `${m.statusColor}08` }}>
                      <span className="ody-hl-icon">🎯</span>
                      <span className="ody-hl-text">{m.headline}</span>
                    </div>

                    {/* Metrics row */}
                    <div className="ody-metrics-row">
                      {m.metrics.map((met, mi) => (
                        <div key={mi} className="ody-met-card">
                          <span className="ody-met-val" style={{ color: m.statusColor }}>{met.val}</span>
                          <span className="ody-met-lbl">{met.lbl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tab selector */}
                    <div className="ody-tabs">
                      {[
                        { id: 'deployments', label: `🚀 Deployments`, count: m.deployments.length },
                        { id: 'breakthroughs', label: `🏆 Breakthroughs`, count: m.breakthroughs.length },
                        { id: 'tech', label: `⚡ Tech Stack`, count: m.tech.length },
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          className={`ody-tab ${activeTab === tab.id ? 'active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            playClick();
                            setActiveTab(tab.id);
                          }}
                          style={activeTab === tab.id ? { borderColor: m.statusColor, color: m.statusColor, background: `${m.statusColor}12` } : {}}
                        >
                          {tab.label}
                          <span className="ody-tab-count">{tab.count}</span>
                        </button>
                      ))}
                    </div>

                    {/* Tab content */}
                    <div className="ody-tab-content">
                      {activeTab === 'deployments' && (
                        <ul className="ody-list">
                          {m.deployments.map((dep, di) => (
                            <li key={di} className="ody-list-item">
                              <span className="ody-list-dot" style={{ background: m.statusColor, boxShadow: `0 0 8px ${m.statusColor}` }} />
                              <span>{dep}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {activeTab === 'breakthroughs' && (
                        <ul className="ody-list">
                          {m.breakthroughs.map((brk, bi) => (
                            <li key={bi} className="ody-list-item">
                              <span className="ody-list-dot" style={{ background: '#fbbf24', boxShadow: '0 0 8px #fbbf24' }} />
                              <span>{brk}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {activeTab === 'tech' && (
                        <div className="ody-tech-grid">
                          {m.tech.map((t, ti) => (
                            <span key={ti} className="ody-tech-pill" style={{ borderColor: `${m.statusColor}40`, color: m.statusColor, background: `${m.statusColor}0a` }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Active card top accent line */}
                {isActive && (
                  <div className="ody-card-accent" style={{ background: `linear-gradient(90deg, ${m.statusColor}, transparent)` }} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        /* ─────────────────────────────────────────
           SECTION
        ───────────────────────────────────────── */
        .ody-section {
          padding-top: 90px;
          padding-bottom: 100px;
        }

        .ody-section-header {
          margin-bottom: 36px;
          max-width: 900px;
        }

        /* ─────────────────────────────────────────
           STATS STRIP
        ───────────────────────────────────────── */
        .ody-stats-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 48px;
        }

        .ody-stat-box {
          background: rgba(14, 18, 27, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 16px;
          padding: 20px 16px;
          text-align: center;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .ody-stat-box:hover {
          border-color: rgba(255, 255, 255, 0.18);
          box-shadow: 0 8px 28px rgba(0,0,0,0.5);
        }

        .ody-stat-val {
          font-family: var(--font-mono);
          font-size: clamp(1.6rem, 2.5vw, 2.1rem);
          font-weight: 850;
          display: block;
          margin-bottom: 6px;
        }

        .ody-stat-lbl {
          font-size: 0.80rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        /* ─────────────────────────────────────────
           MAIN LAYOUT
        ───────────────────────────────────────── */
        .ody-main {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 0 24px;
          position: relative;
          align-items: start;
        }

        /* ─────────────────────────────────────────
           LEFT SPINE
        ───────────────────────────────────────── */
        .ody-spine {
          position: relative;
          align-self: stretch;
          min-height: 100%;
        }

        .ody-spine-line {
          position: absolute;
          top: 7%;
          bottom: 7%;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          background: linear-gradient(180deg, rgba(56, 189, 248, 0.4), rgba(192, 132, 252, 0.4), rgba(16, 185, 129, 0.4));
          border-radius: 9999px;
        }

        .ody-spine-node {
          position: absolute;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 4px;
          z-index: 2;
        }

        .ody-spine-node:hover .ody-sn-dot {
          transform: scale(1.3);
        }

        .ody-sn-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 3px solid #07090e;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }

        .ody-sn-ring {
          position: absolute;
          top: 4px;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1.5px solid;
          animation: odyRipple 1.8s infinite;
          pointer-events: none;
        }

        @keyframes odyRipple {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.4); opacity: 0; }
        }

        .ody-sn-year {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-align: center;
          white-space: nowrap;
          transition: color 0.25s ease;
        }

        /* ─────────────────────────────────────────
           ERA CARDS
        ───────────────────────────────────────── */
        .ody-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ody-era-card {
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(13, 17, 26, 0.85);
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.28s ease, box-shadow 0.28s ease, background 0.28s ease;
          position: relative;
        }

        .ody-era-card:hover {
          border-color: rgba(255, 255, 255, 0.16);
          background: rgba(18, 23, 35, 0.9);
        }

        .ody-era-card.ody-active {
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(16, 20, 32, 0.95);
          box-shadow: 0 16px 48px -12px rgba(0, 0, 0, 0.8), 0 0 32px var(--era-color, rgba(56,189,248,0.12));
          cursor: default;
        }

        .ody-era-card.ody-passed {
          opacity: 0.6;
        }

        .ody-era-card.ody-passed:hover {
          opacity: 0.85;
        }

        /* Card header */
        .ody-card-header {
          display: grid;
          grid-template-columns: 64px 1fr 40px;
          gap: 16px;
          align-items: center;
          padding: 20px 22px 20px 18px;
        }

        .ody-era-num {
          font-family: var(--font-display);
          font-size: 2.8rem;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.04em;
          transition: color 0.3s ease;
          user-select: none;
        }

        .ody-header-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        .ody-header-top-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 4px;
        }

        .ody-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 750;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 9999px;
          border: 1px solid;
        }

        .ody-period {
          font-family: var(--font-mono);
          font-size: 0.76rem;
          color: var(--text-dim);
        }

        .ody-company-name {
          font-size: clamp(1.1rem, 2.5vw, 1.55rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
          line-height: 1.15;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .ody-role-name {
          font-size: 0.92rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .ody-location {
          font-size: 0.78rem;
          color: var(--text-dim);
          margin-top: 2px;
        }

        .ody-toggle-icon {
          font-size: 1.6rem;
          font-weight: 300;
          line-height: 1;
          text-align: center;
          transition: transform 0.3s ease;
          user-select: none;
          flex-shrink: 0;
        }

        .ody-toggle-icon.open {
          transform: rotate(0deg);
        }

        /* ── Expandable detail ── */
        .ody-card-detail {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.55s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ody-card-detail.ody-detail-open {
          max-height: 1000px;
        }

        .ody-detail-inner {
          padding: 0 22px 26px 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          padding-top: 20px;
        }

        /* Headline */
        .ody-detail-headline {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid;
          margin-bottom: 20px;
        }

        .ody-hl-icon {
          font-size: 1.2rem;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .ody-hl-text {
          font-size: 0.98rem;
          font-weight: 600;
          color: #f1f5f9;
          line-height: 1.5;
        }

        /* Metrics */
        .ody-metrics-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 20px;
        }

        .ody-met-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 14px 10px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .ody-met-val {
          font-family: var(--font-mono);
          font-size: 1.35rem;
          font-weight: 850;
          line-height: 1;
        }

        .ody-met-lbl {
          font-family: var(--font-mono);
          font-size: 0.66rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Tabs */
        .ody-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 18px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .ody-tab {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 16px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.04);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 650;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.18s ease;
        }

        .ody-tab:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
        }

        .ody-tab-count {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 9999px;
          padding: 1px 6px;
          font-size: 0.70rem;
          color: #94a3b8;
        }

        /* Tab content */
        .ody-tab-content {
          animation: odyTabIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes odyTabIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .ody-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ody-list-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.96rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .ody-list-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 7px;
        }

        .ody-tech-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .ody-tech-pill {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          padding: 6px 14px;
          border-radius: 8px;
          border: 1px solid;
          font-weight: 600;
        }

        /* Top accent line on active card */
        .ody-card-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
        }

        /* ─────────────────────────────────────────
           RESPONSIVE
        ───────────────────────────────────────── */
        @media (max-width: 900px) {
          .ody-stats-strip {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin-bottom: 32px;
          }
          .ody-main {
            grid-template-columns: 56px 1fr;
            gap: 0 14px;
          }
          .ody-era-num {
            font-size: 2.2rem;
          }
          .ody-card-header {
            grid-template-columns: 52px 1fr 34px;
            gap: 12px;
            padding: 16px 14px 16px 12px;
          }
        }

        @media (max-width: 600px) {
          .ody-section {
            padding-top: 60px;
            padding-bottom: 70px;
          }
          .ody-stats-strip {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          .ody-stat-val {
            font-size: 1.35rem;
          }
          .ody-stat-lbl {
            font-size: 0.68rem;
          }
          .ody-main {
            grid-template-columns: 1fr;
          }
          .ody-spine {
            display: none;
          }
          .ody-era-card {
            border-radius: 14px;
          }
          .ody-card-header {
            grid-template-columns: 44px 1fr 32px;
            gap: 10px;
            padding: 14px 12px 14px 10px;
          }
          .ody-era-num {
            font-size: 1.8rem;
          }
          .ody-company-name {
            font-size: 1.05rem;
          }
          .ody-role-name {
            font-size: 0.82rem;
          }
          .ody-detail-inner {
            padding: 0 14px 18px 14px;
            padding-top: 14px;
          }
          .ody-metrics-row {
            grid-template-columns: repeat(3, 1fr);
            gap: 6px;
          }
          .ody-met-val {
            font-size: 1.0rem;
          }
          .ody-tab {
            font-size: 0.74rem;
            padding: 7px 12px;
          }
          .ody-list-item {
            font-size: 0.88rem;
          }
        }
      `}</style>
    </section>
  );
}
