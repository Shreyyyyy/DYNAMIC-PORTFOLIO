'use client';

import React, { useState } from 'react';
import { playClick, playHover } from '../utils/sound';

export default function ChronologicalOdyssey() {
  const [activeEraIndex, setActiveEraIndex] = useState(4); // Default to current role (dentsu)
  const [activeDetailTab, setActiveDetailTab] = useState('deployments'); // 'deployments' | 'breakthroughs' | 'tech'

  const milestones = [
    {
      id: 'era-academia-foundations',
      period: '2020 — 2025',
      yearShort: '2020-25',
      company: 'Christ University & VIT Vellore',
      role: 'Master & Bachelor of Computer Applications',
      location: '📍 Bangalore & Vellore, India',
      status: 'ACADEMIC FOUNDATIONS',
      statusColor: '#38bdf8',
      headline: 'Rigorous Foundations in Distributed Computing & ML',
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
      metrics: [
        { val: '2 Degrees', lbl: 'MCA + BCA' },
        { val: 'Honors', lbl: 'Academic Rank' },
        { val: '5 Years', lbl: 'Deep CS Focus' },
      ],
    },
    {
      id: 'era-christ-faculty',
      period: 'March 2024 — Dec 2024',
      yearShort: '2024',
      company: 'Christ University',
      role: 'Faculty & AI / ML Researcher',
      location: '📍 Bengaluru, Karnataka, India',
      status: 'ACADEMIA & RESEARCH',
      statusColor: '#fbbf24',
      headline: 'Engineering Mentorship & Advanced Applied Machine Learning Instruction',
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
      metrics: [
        { val: '100+', lbl: 'Engineers Mentored' },
        { val: '100%', lbl: 'Curriculum Pass' },
        { val: '10 Mos', lbl: 'Research Tenure' },
      ],
    },
    {
      id: 'era-businessnext-genai',
      period: 'Jan 2025 — May 2025',
      yearShort: '2025 (H1)',
      company: 'BUSINESSNEXT',
      role: 'Generative AI Engineer',
      location: '📍 Noida, Uttar Pradesh, India',
      status: 'DEV INNOVATION',
      statusColor: '#60a5fa',
      headline: 'Autonomous Engineering Intelligence & CI/CD Multi-Agent Systems',
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
      metrics: [
        { val: '50+ Items', lbl: 'Sprints Analyzed' },
        { val: '4x Faster', lbl: 'QA Test Gen' },
        { val: '0 Leakage', lbl: 'Data Privacy' },
      ],
    },
    {
      id: 'era-businessnext-agentic',
      period: 'June 2025 — May 2026',
      yearShort: '2025-26',
      company: 'BUSINESSNEXT',
      role: 'Agentic AI Engineer',
      location: '📍 Noida, Uttar Pradesh, India',
      status: 'ENTERPRISE SCALE',
      statusColor: '#c084fc',
      headline: 'Enterprise Multi-Agent CRM Systems & Model Fine-Tuning',
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
      metrics: [
        { val: '+30%', lbl: 'Accuracy Lift' },
        { val: '+35%', lbl: 'Response Speed' },
        { val: 'DeepEval', lbl: 'Telemetry Guard' },
      ],
    },
    {
      id: 'era-dentsu-lead',
      period: 'May 2026 — Present',
      yearShort: '2026-PRES',
      company: 'dentsu',
      role: 'Artificial Intelligence Engineer',
      location: '📍 Gurugram, Haryana, India',
      status: 'CURRENT ROLE',
      statusColor: '#10b981',
      headline: 'Production Agent Swarms, Sub-Minute RAG & Voice AI for Global Brands',
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
      metrics: [
        { val: '5+ Systems', lbl: 'Shipped to Prod' },
        { val: '<60s', lbl: 'RAG Lookup' },
        { val: '<400ms', lbl: 'Voice Latency' },
      ],
    },
  ];

  const currentEra = milestones[activeEraIndex];

  return (
    <section className="container-custom" id="act-journey" style={{ paddingTop: '90px', paddingBottom: '100px' }}>
      {/* Header */}
      <div className="section-header">
        <div className="glass-pill" style={{ marginBottom: '14px' }}>
          <span className="pulse-dot"></span>
          <span>CHRONOLOGICAL TRAJECTORY · CAREER ODYSSEY</span>
        </div>
        <h2>
          Engineering Trajectory.<br />
          <span className="text-glow-gradient">Click Any Station to Switch &amp; Explore Eras.</span>
        </h2>
        <p>
          Click any milestone station below to inspect roles, enterprise systems shipped, and measurable business results.
        </p>
      </div>

      {/* Career Velocity High-Impact Strip */}
      <div className="career-velocity-strip">
        <div className="velocity-box">
          <span className="velocity-val text-glow-emerald">4+ Years</span>
          <span className="velocity-title">Applied AI &amp; Software Eng.</span>
        </div>
        <div className="velocity-box">
          <span className="velocity-val text-glow-cyan">100+</span>
          <span className="velocity-title">Engineers Mentored</span>
        </div>
        <div className="velocity-box">
          <span className="velocity-val text-glow-purple">5+ Shipped</span>
          <span className="velocity-title">Enterprise Production Systems</span>
        </div>
        <div className="velocity-box">
          <span className="velocity-val text-glow-gold">+30%</span>
          <span className="velocity-title">Fine-Tuned Accuracy Lift</span>
        </div>
      </div>

      {/* Master Career Odyssey Layout */}
      <div className="odyssey-stage glass-panel">
        {/* Interactive Click Guidance Hint */}
        <div className="transit-interactive-hint">
          <span className="hint-pulse"></span>
          <span>⚡ CLICK ANY STATION TO CHANGE &amp; EXPLORE CAREER ERAS</span>
        </div>

        {/* Guided Chronological Transit Rail & Station Waypoints */}
        <div className="guided-timeline-transit-wrapper">
          <div className="transit-rail-track">
            <div className="transit-rail-base" />
            <div
              className="transit-rail-fill"
              style={{
                width: `${(activeEraIndex / (milestones.length - 1)) * 100}%`,
                background: `linear-gradient(90deg, #38bdf8 0%, #fbbf24 30%, #60a5fa 55%, #c084fc 80%, ${currentEra.statusColor} 100%)`,
              }}
            />
            {/* Animated traveling guided photon along the timeline */}
            <div className="transit-guided-photon" />
          </div>

          <div className="transit-stations-row">
            {milestones.map((m, idx) => {
              const isSelected = activeEraIndex === idx;
              const isPassed = idx <= activeEraIndex;
              return (
                <button
                  key={m.id}
                  onClick={() => {
                    playClick();
                    setActiveEraIndex(idx);
                  }}
                  onMouseEnter={() => playHover()}
                  className={`transit-station-node ${isSelected ? 'active' : ''} ${isPassed ? 'passed' : ''}`}
                >
                  {isSelected && (
                    <span
                      className="transit-node-pulse"
                      style={{ borderColor: m.statusColor }}
                    />
                  )}
                  <span
                    className="transit-node-dot"
                    style={{
                      background: isSelected ? m.statusColor : isPassed ? '#38bdf8' : 'rgba(255,255,255,0.25)',
                      boxShadow: isSelected ? `0 0 16px ${m.statusColor}` : 'none',
                    }}
                  />
                  <div className="transit-node-info">
                    <span className="station-year">{m.yearShort}</span>
                    <span className="station-company">{m.company.split(' ')[0]}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Milestone Card Content */}
        <div className="milestone-content-body">
          {/* Header Row */}
          <div className="milestone-header-row">
            <div>
              <div className="milestone-status-tag" style={{ color: currentEra.statusColor }}>
                ● {currentEra.status} · {currentEra.period}
              </div>
              <h3 className="milestone-role-title">{currentEra.role}</h3>
              <div className="milestone-company-location">
                <strong style={{ color: '#ffffff' }}>{currentEra.company}</strong> · {currentEra.location}
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="milestone-metrics-group">
              {currentEra.metrics.map((met, i) => (
                <div key={i} className="milestone-metric-box">
                  <span className="metric-box-val">{met.val}</span>
                  <span className="metric-box-lbl">{met.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="milestone-headline-banner">
            <span className="headline-icon">🎯</span>
            <span className="headline-text">{currentEra.headline}</span>
          </div>

          {/* Navigation Detail Tabs */}
          <div className="milestone-tabs">
            <button
              onClick={() => {
                playClick();
                setActiveDetailTab('deployments');
              }}
              className={`m-tab ${activeDetailTab === 'deployments' ? 'active' : ''}`}
            >
              🚀 Production Deployments ({currentEra.deployments.length})
            </button>
            <button
              onClick={() => {
                playClick();
                setActiveDetailTab('breakthroughs');
              }}
              className={`m-tab ${activeDetailTab === 'breakthroughs' ? 'active' : ''}`}
            >
              🏆 Architectural Breakthroughs ({currentEra.breakthroughs.length})
            </button>
            <button
              onClick={() => {
                playClick();
                setActiveDetailTab('tech');
              }}
              className={`m-tab ${activeDetailTab === 'tech' ? 'active' : ''}`}
            >
              ⚡ Tech Stack ({currentEra.tech.length})
            </button>
          </div>

          {/* Tab Content with Guided Vertical Timeline Nodes */}
          {activeDetailTab === 'deployments' && (
            <ul className="milestone-list">
              {currentEra.deployments.map((dep, i) => (
                <li key={i} className="milestone-list-item">
                  <div className="item-guided-conduit">
                    <span className="item-node-dot" style={{ backgroundColor: currentEra.statusColor, boxShadow: `0 0 10px ${currentEra.statusColor}` }} />
                    {i < currentEra.deployments.length - 1 && <span className="item-vertical-wire" />}
                  </div>
                  <div className="item-content-wrap">
                    <span>{dep}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {activeDetailTab === 'breakthroughs' && (
            <ul className="milestone-list">
              {currentEra.breakthroughs.map((brk, i) => (
                <li key={i} className="milestone-list-item">
                  <div className="item-guided-conduit">
                    <span className="item-node-dot" style={{ backgroundColor: '#fbbf24', boxShadow: '0 0 10px #fbbf24' }} />
                    {i < currentEra.breakthroughs.length - 1 && <span className="item-vertical-wire" />}
                  </div>
                  <div className="item-content-wrap">
                    <span>{brk}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {activeDetailTab === 'tech' && (
            <div className="tech-pills-wrap">
              {currentEra.tech.map((t, i) => (
                <span key={i} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .career-velocity-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-bottom: 36px;
        }

        @media (max-width: 480px) {
          .career-velocity-strip {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin-bottom: 20px;
          }
        }

        .velocity-box {
          background: rgba(14, 18, 27, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          padding: 22px 18px;
          text-align: center;
          opacity: 0;
          transform: perspective(800px) translateY(45px) scale(0.92);
          transition: 
            opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.65s cubic-bezier(0.175, 0.885, 0.32, 1.25),
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .velocity-box.is-scrolled-in {
          opacity: 1;
          transform: perspective(800px) translateY(0) scale(1);
          box-shadow: 0 16px 36px -8px rgba(0, 0, 0, 0.7), 0 0 24px rgba(56, 189, 248, 0.12);
        }

        .velocity-box:hover {
          border-color: rgba(56, 189, 248, 0.35);
          transform: translateY(-4px) scale(1.02);
        }

        .velocity-val {
          font-family: var(--font-mono);
          font-size: clamp(1.5rem, 4vw, 2.2rem);
          font-weight: 850;
          display: block;
        }

        .velocity-title {
          font-size: clamp(0.72rem, 2vw, 0.88rem);
          color: var(--text-muted);
          margin-top: 6px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .odyssey-stage {
          padding: 38px 34px;
          border-radius: 24px;
          background: rgba(13, 17, 26, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.1);
          opacity: 0;
          transform: perspective(1000px) translateY(55px) scale(0.94);
          transition: 
            opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.22),
            box-shadow 0.3s ease;
        }

        .odyssey-stage.is-scrolled-in {
          opacity: 1;
          transform: perspective(1000px) translateY(0) scale(1);
          box-shadow: 0 28px 65px -15px rgba(0, 0, 0, 0.85), 0 0 36px rgba(192, 132, 252, 0.14);
        }

        .transit-interactive-hint {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 9999px;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.25);
          font-family: var(--font-mono);
          font-size: 0.76rem;
          font-weight: 700;
          color: #7dd3fc;
          letter-spacing: 0.05em;
          margin-bottom: 22px;
        }

        .hint-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #38bdf8;
          box-shadow: 0 0 8px #38bdf8;
          animation: pulseGlow 1.5s infinite;
        }

        /* Guided Chronological Transit Rail */
        .guided-timeline-transit-wrapper {
          position: relative;
          width: 100%;
          padding-top: 10px;
          padding-bottom: 28px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          margin-bottom: 28px;
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }

        .transit-rail-track {
          position: absolute;
          top: 24px;
          left: 44px;
          right: 44px;
          height: 4px;
          pointer-events: none;
          z-index: 1;
        }

        .transit-rail-base {
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.12);
          border-radius: 9999px;
        }

        .transit-rail-fill {
          position: absolute;
          height: 100%;
          border-radius: 9999px;
          box-shadow: 0 0 14px rgba(56, 189, 248, 0.7);
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Animated traveling guided photon along the timeline rail */
        .transit-guided-photon {
          position: absolute;
          top: 50%;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 14px #38bdf8, 0 0 24px #38bdf8;
          transform: translate(-50%, -50%);
          animation: travelTransitPhoton 4.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes travelTransitPhoton {
          0% { left: 0%; opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }

        .transit-stations-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 2;
          gap: 8px;
          min-width: min(100%, 560px);
        }

        .transit-station-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: transparent;
          border: none;
          cursor: pointer;
          position: relative;
          padding: 6px 12px;
          transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .transit-station-node:hover {
          transform: translateY(-3px) scale(1.04);
        }

        .transit-node-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 3px solid #0d111a;
          margin-bottom: 12px;
          z-index: 3;
          transition: all 0.25s ease;
        }

        .transit-station-node.active .transit-node-dot {
          transform: scale(1.35);
        }

        .transit-node-pulse {
          position: absolute;
          top: 11px;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1.5px solid;
          animation: waypointRipple 1.8s infinite;
          pointer-events: none;
        }

        .transit-node-info {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 10px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-family: var(--font-mono);
          font-size: clamp(0.64rem, 2vw, 0.88rem);
          color: var(--text-secondary);
          transition: all 0.22s ease;
          white-space: nowrap;
        }

        .transit-station-node.active .transit-node-info {
          background: rgba(56, 189, 248, 0.18);
          border-color: rgba(56, 189, 248, 0.45);
          color: #ffffff;
          box-shadow: 0 0 18px rgba(56, 189, 248, 0.25);
        }

        /* Guided Vertical Timeline Feeder inside List Items */
        .item-guided-conduit {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 20px;
          margin-top: 6px;
          flex-shrink: 0;
        }

        .item-node-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
        }

        .item-vertical-wire {
          width: 2px;
          flex: 1;
          min-height: 24px;
          background: linear-gradient(180deg, rgba(56, 189, 248, 0.5), rgba(255, 255, 255, 0.08));
          margin-top: 6px;
          border-radius: 9999px;
        }

        .item-content-wrap {
          flex: 1;
        }

        .station-year {
          font-weight: 800;
          color: #ffffff;
        }

        .station-company {
          color: var(--text-muted);
        }

        .milestone-content-body {
          padding-top: 32px;
        }

        .milestone-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 22px;
          margin-bottom: 24px;
        }

        .milestone-status-tag {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 750;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .milestone-role-title {
          font-size: clamp(1.4rem, 4vw, 2.35rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 8px;
        }

        .milestone-company-location {
          font-size: 1.08rem;
          color: var(--text-secondary);
        }

        .milestone-metrics-group {
          display: flex;
          gap: 14px;
        }

        .milestone-metric-box {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 12px 18px;
          text-align: center;
          min-width: 96px;
        }

        .metric-box-val {
          font-family: var(--font-mono);
          font-size: 1.45rem;
          font-weight: 850;
          color: #ffffff;
          display: block;
        }

        .metric-box-lbl {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .milestone-headline-banner {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          border-radius: 14px;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.28);
          margin-bottom: 28px;
        }

        .headline-icon {
          font-size: 1.4rem;
        }

        .headline-text {
          font-size: 1.12rem;
          font-weight: 650;
          color: #f1f5f9;
        }

        .milestone-tabs {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .m-tab {
          padding: 11px 22px;
          min-height: 48px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.90rem;
          font-weight: 650;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .m-tab:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.11);
        }

        .m-tab.active {
          background: rgba(255, 255, 255, 0.16);
          border-color: rgba(255, 255, 255, 0.3);
          color: #ffffff;
        }

        .milestone-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .milestone-list-item {
          display: flex;
          gap: 14px;
          font-size: 1.06rem;
          color: #e2e8f0;
          line-height: 1.68;
        }

        .bullet-arrow {
          color: #38bdf8;
          font-family: var(--font-mono);
          font-weight: 700;
        }

        .tech-pills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .tech-badge {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          padding: 7px 16px;
          border-radius: 8px;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.22);
          color: #7dd3fc;
        }

        @media (max-width: 800px) {
          .career-velocity-strip {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .odyssey-stage {
            padding: 22px 18px;
          }
          .milestone-metrics-group {
            width: 100%;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 600px) {
          .odyssey-stage {
            padding: 16px 14px;
          }
          .transit-interactive-hint {
            font-size: 0.66rem;
            padding: 5px 10px;
            margin-bottom: 14px;
          }
          .guided-timeline-transit-wrapper {
            padding-bottom: 20px;
            margin-bottom: 18px;
          }
          .milestone-content-body {
            padding-top: 18px;
          }
          .milestone-header-row {
            flex-direction: column;
            gap: 14px;
          }
          .milestone-metrics-group {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            width: 100%;
            gap: 8px;
          }
          .milestone-metric-box {
            min-width: unset;
            padding: 10px 8px;
          }
          .metric-box-val {
            font-size: 1.1rem;
          }
          .metric-box-lbl {
            font-size: 0.62rem;
          }
          .milestone-headline-banner {
            padding: 12px 14px;
            gap: 10px;
          }
          .headline-text {
            font-size: 0.95rem;
          }
          .milestone-tabs {
            gap: 8px;
          }
          .m-tab {
            padding: 9px 14px;
            font-size: 0.78rem;
            min-height: 42px;
          }
          .milestone-list-item {
            font-size: 0.93rem;
          }
        }
      `}</style>
    </section>
  );
}
