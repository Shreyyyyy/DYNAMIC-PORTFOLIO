'use client';

import React, { useState } from 'react';
import { playClick, playHover } from '../utils/sound';

export default function SystemsPortfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const systems = [
    {
      id: 'proj-flipkart',
      category: 'swarms',
      domain: 'ENTERPRISE ANALYTICS · FLIPKART',
      client: 'Flipkart',
      nodeColor: '#38bdf8',
      impact: '⚡ <2% Error Loop',
      title: 'Flipkart Talk2Data',
      subtitle: 'Self-Healing Multi-Agent SQL Synthesis',
      problemTopic: '4–6 Hour BI Bottlenecks Blocking Pricing & Inventory Decisions',
      problemDesc:
        'Category leads faced multi-hour query queues for complex warehouse analytics, slowing competitive pricing and supply chain interventions.',
      solutionDesc:
        'Engineered an autonomous LangGraph agent swarm with dynamic schema reflection, automated AST syntax guards, and self-correcting query retry loops.',
      stats: [
        { val: 'Zero-Shot', lbl: 'SQL Accuracy', color: '#38bdf8' },
        { val: '<45ms', lbl: 'AST Validation', color: '#fbbf24' },
        { val: '<2%', lbl: 'Error Loop', color: '#34d399' },
      ],
      tech: ['LangGraph', 'Google ADK', 'Gemini 1.5 Pro', 'Mistral FT', 'AST Parser', 'SQL Tool Calling'],
    },
    {
      id: 'proj-rag',
      category: 'rag',
      domain: 'KNOWLEDGE SYSTEMS · ENTERPRISE RAG',
      client: 'dentsu',
      nodeColor: '#10b981',
      impact: '⚡ 98.4% Groundedness',
      title: 'Enterprise Technical Manuals RAG',
      subtitle: 'Sub-Minute Multimodal Document Search Engine',
      problemTopic: '60+ Minute Manual Document Scans Across 100+ Page Technical Manuals',
      problemDesc:
        'Field engineers and compliance auditors lost hours manually tracking SLA terms and hardware specs across fragmented multi-hundred page documents.',
      solutionDesc:
        'Deployed a hybrid retrieval engine (Dense + BM25) with cross-encoder re-ranking and DeepEval verification, dropping lookup latency to sub-minute SLA.',
      stats: [
        { val: '<60s', lbl: 'Search Time (was 60m+)', color: '#34d399' },
        { val: '98.4%', lbl: 'Faithfulness Rate', color: '#38bdf8' },
        { val: '0 Rate', lbl: 'Hallucination SLA', color: '#fbbf24' },
      ],
      tech: ['Hybrid Search (Dense+BM25)', 'Semantic Re-ranking', 'DeepEval', 'Vector DB', 'FastAPI'],
    },
    {
      id: 'proj-voice',
      category: 'voice',
      domain: 'CONVERSATIONAL AI · VOICE STREAMING',
      client: 'Automotive & Support',
      nodeColor: '#f59e0b',
      impact: '⚡ <400ms Latency',
      title: 'Multilingual Real-Time Voice AI Agent',
      subtitle: 'Full-Duplex Sub-Second Voice Pipeline',
      problemTopic: '35%+ Inbound Call Drop-Off & Escalating 24/7 Staffing Overhead',
      problemDesc:
        'High inbound volume created peak wait times and costly operations for standard booking and service triage calls.',
      solutionDesc:
        'Built full-duplex WebSocket voice pipeline linking Whisper STT, streaming LLMs, Neural TTS, and VAD chunking for 100% automated appointment workflows.',
      stats: [
        { val: '<400ms', lbl: 'Turnaround Latency', color: '#34d399' },
        { val: '5 Streams', lbl: 'Concurrent / Node', color: '#c084fc' },
        { val: '100%', lbl: 'Auto Scheduled', color: '#fbbf24' },
      ],
      tech: ['Whisper STT', 'FastAPI WebSockets', 'Neural TTS', 'VAD Audio Streaming', 'Tool Calling'],
    },
    {
      id: 'proj-video',
      category: 'genai',
      domain: 'MULTIMODAL GENAI · GOOGLE VEO',
      client: 'dentsu Creative',
      nodeColor: '#3b82f6',
      impact: '⚡ 80% Cycle Cut',
      title: 'Agentic Script-to-Screen Film Pipeline',
      subtitle: '4-Agent Cinematic Video Orchestration DAG',
      problemTopic: 'Multi-Week Production Timelines & Visual Drift Between AI Keyframes',
      problemDesc:
        'Commercial video delivery required weeks of manual asset turnaround, plagued by character and style inconsistencies across generative frames.',
      solutionDesc:
        'Architected a 4-agent LangGraph pipeline linking Director, Storyboard, Veo, and QA agents with visual memory anchors, slashing turnaround by 80%.',
      stats: [
        { val: '80%', lbl: 'Cycle Cut (Weeks to Hrs)', color: '#60a5fa' },
        { val: '4 Agents', lbl: 'LangGraph Swarm', color: '#34d399' },
        { val: '100%', lbl: 'Style & Character Lock', color: '#fbbf24' },
      ],
      tech: ['Google Veo', 'LangGraph DAG', 'Storyboard Agent', 'Visual Memory QA', 'Gemini Vision'],
    },
    {
      id: 'proj-creativium',
      category: 'genai',
      domain: 'GENERATIVE WORKFLOWS · BRAND SUITE',
      client: 'Marketing Ops',
      nodeColor: '#ec4899',
      impact: '⚡ Multi-Aspect Ratio',
      title: 'Creativium Automated Banner Studio',
      subtitle: 'Brand-Compliant Dynamic Marketing Asset Engine',
      problemTopic: 'Dozens of Hours Lost Manually Adapting Creative Across 12+ Channels',
      problemDesc:
        'Manual resizing and typography adjustment created delivery bottlenecks and compliance risks across localized ad variants.',
      solutionDesc:
        'Developed automated marketing asset generator with Imagen 3 generative outpainting, automated safe-zone detectors, and 10x production velocity.',
      stats: [
        { val: '10x', lbl: 'Asset Velocity', color: '#f472b6' },
        { val: '100%', lbl: 'Brand Compliance', color: '#34d399' },
        { val: 'Instant', lbl: '12+ Format Renders', color: '#38bdf8' },
      ],
      tech: ['Imagen 3', 'Generative Fill', 'Dynamic Compositing', 'Canvas API', 'Visual QA'],
    },
    {
      id: 'proj-rfp',
      category: 'rag',
      domain: 'ENTERPRISE RAG · COMPLIANCE AUDIT',
      client: 'Bid Operations',
      nodeColor: '#8b5cf6',
      impact: '⚡ 0 Hallucinations',
      title: 'Autonomous RFP Intelligence & Tender Auditor',
      subtitle: '200+ Page Proposal Analyzer & SLA Extraction Engine',
      problemTopic: 'Commercial Risk & Penalties Hidden in Massive 200+ Page Tender RFPs',
      problemDesc:
        'Enterprise bids suffered compliance risks and lost days manually extracting indemnities, SLAs, and cloud cost specifications.',
      solutionDesc:
        'Built hierarchical RAG engine using Gemini 1.5 Pro to synthesize contractual obligations, verify line citations, and accelerate bid turnarounds by 75%.',
      stats: [
        { val: '75%', lbl: 'Turnaround Faster', color: '#a78bfa' },
        { val: '200+ Pgs', lbl: 'Doc Ingestion', color: '#34d399' },
        { val: '0 Risk', lbl: 'Zero Hallucinations', color: '#fbbf24' },
      ],
      tech: ['Hierarchical RAG', 'Gemini 1.5 Pro', 'DeepEval Guard', 'Risk Scoring', 'FastAPI'],
    },
  ];

  const filterOptions = [
    { id: 'all', label: 'All Architectures', count: 6 },
    { id: 'swarms', label: 'Agentic Swarms', count: 1 },
    { id: 'rag', label: 'Enterprise RAG', count: 2 },
    { id: 'voice', label: 'Voice AI', count: 1 },
    { id: 'genai', label: 'Multimodal GenAI', count: 2 },
  ];

  const filteredSystems = systems.filter((s) => activeFilter === 'all' || s.category === activeFilter);

  return (
    <section className="container-custom" id="act-systems" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
      {/* Section Header */}
      <div className="section-header">
        <div className="glass-pill" style={{ marginBottom: '16px' }}>
          <span className="pulse-dot"></span>
          <span>ENTERPRISE PRODUCTION ARCHITECTURES · HIGH IMPACT</span>
        </div>
        <h2>
          High-Stakes Business Problems.<br />
          <span className="text-glow-gradient">Engineered Production Solutions.</span>
        </h2>
        <p>
          Each architecture below was shipped to resolve critical commercial bottlenecks at dentsu and BUSINESSNEXT.
          Framed as the <strong>Business Problem</strong>, the <strong>Engineered Architecture</strong>, and the <strong>Verified ROI</strong>.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="systems-filter-bar">
        {filterOptions.map((f) => (
          <button
            key={f.id}
            onClick={() => {
              playClick();
              setActiveFilter(f.id);
            }}
            onMouseEnter={() => playHover()}
            className={`filter-btn ${activeFilter === f.id ? 'active' : ''}`}
          >
            <span>{f.label}</span>
            <span className="filter-count">{f.count}</span>
          </button>
        ))}
      </div>

      {/* Guided Conduit Track with Animated Traveling Energy Dots Threading Through Projects */}
      <div className="projects-pipeline-wrapper">
        {/* The Central / Lateral Guided Conduit Line */}
        <div className="guided-spine-track">
          <div className="guided-rail-base" />
          <div className="guided-rail-glow" />

          {/* Animated Traveling Guided Dots / Energy Photons */}
          <div className="guided-travel-dot dot-stream-1" />
          <div className="guided-travel-dot dot-stream-2" />
          <div className="guided-travel-dot dot-stream-3" />
        </div>

        {/* Systems Project Cards Grid */}
        <div className="systems-grid">
          {filteredSystems.map((sys, idx) => (
            <article
              key={sys.id}
              className="system-card glass-panel"
              style={{
                '--proj-color': sys.nodeColor,
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              {/* Connecting Neural Conduit Header with Animated Lighted Wire */}
              <div className="conduit-header-bar">
                <div className="conduit-line-group">
                  <span
                    className="conduit-dot"
                    style={{ backgroundColor: sys.nodeColor, boxShadow: `0 0 14px ${sys.nodeColor}` }}
                  />
                  <span
                    className="conduit-wire"
                    style={{
                      background: `linear-gradient(90deg, ${sys.nodeColor} 0%, rgba(255,255,255,0.12) 100%)`,
                      boxShadow: `0 0 10px ${sys.nodeColor}60`,
                    }}
                  />
                </div>
                <span className="conduit-label" style={{ color: sys.nodeColor, borderColor: `${sys.nodeColor}40` }}>
                  NODE 0{idx + 1} // GUIDED PIPELINE
                </span>
              </div>

              {/* Card Header Row */}
              <div className="card-top-row">
                <div className="card-badges-left">
                  <span className="client-badge" style={{ borderColor: `${sys.nodeColor}50`, color: sys.nodeColor }}>
                    {sys.client}
                  </span>
                  <span className="domain-text">{sys.domain}</span>
                </div>
                <div
                  className="impact-pill"
                  style={{
                    background: `${sys.nodeColor}18`,
                    color: sys.nodeColor,
                    borderColor: `${sys.nodeColor}40`,
                  }}
                >
                  {sys.impact}
                </div>
              </div>

              {/* System Title */}
              <h3 className="card-title">{sys.title}</h3>
              <div className="card-subtitle">{sys.subtitle}</div>

              {/* Problem / Solution Callout Blocks */}
              <div className="card-case-study-box">
                <div className="case-study-block problem-block">
                  <div className="block-tag problem-tag">
                    <span>⚠️ BUSINESS PROBLEM</span>
                  </div>
                  <div className="problem-topic-title">{sys.problemTopic}</div>
                  <p className="case-study-desc">{sys.problemDesc}</p>
                </div>

                <div className="case-study-block solution-block">
                  <div className="block-tag solution-tag">
                    <span>⚡ ENGINEERED SOLUTION</span>
                  </div>
                  <p className="case-study-desc">{sys.solutionDesc}</p>
                </div>
              </div>

              {/* Metrics Triad */}
              <div className="card-stats-grid">
                {sys.stats.map((st, i) => (
                  <div key={i} className="card-stat-item">
                    <span className="card-stat-val" style={{ color: st.color }}>
                      {st.val}
                    </span>
                    <span className="card-stat-lbl">{st.lbl}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="card-tech-row">
                {sys.tech.map((t, i) => (
                  <span key={i} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .systems-filter-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 10px;
          margin-bottom: 40px;
          -webkit-overflow-scrolling: touch;
        }

        .filter-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 11px 22px;
          min-height: 48px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.90rem;
          font-weight: 650;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.22s ease;
        }

        .filter-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        .filter-btn.active {
          background: rgba(56, 189, 248, 0.18);
          border-color: rgba(56, 189, 248, 0.45);
          color: #38bdf8;
          box-shadow: 0 0 18px rgba(56, 189, 248, 0.25);
        }

        .filter-count {
          padding: 2px 8px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.1);
          font-size: 0.76rem;
          color: #cbd5e1;
        }

        /* Pipeline Wrapper with Guided Spine */
        .projects-pipeline-wrapper {
          position: relative;
          width: 100%;
        }

        /* Guided Spine Line running down through all projects */
        .guided-spine-track {
          position: absolute;
          top: 20px;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          pointer-events: none;
          z-index: 5;
        }

        .guided-rail-base {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.12);
          border-radius: 9999px;
        }

        .guided-rail-glow {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(
            180deg,
            #38bdf8 0%,
            #10b981 22%,
            #f59e0b 45%,
            #3b82f6 68%,
            #ec4899 85%,
            #8b5cf6 100%
          );
          border-radius: 9999px;
          box-shadow: 0 0 16px rgba(56, 189, 248, 0.75);
          opacity: 0.85;
        }

        /* Animated Traveling Guided Dots / Energy Photons along the guided line */
        .guided-travel-dot {
          position: absolute;
          left: 50%;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .dot-stream-1 {
          background: #38bdf8;
          box-shadow: 0 0 16px #38bdf8, 0 0 30px #38bdf8;
          animation: travelDownSpine 5.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .dot-stream-2 {
          background: #10b981;
          box-shadow: 0 0 16px #10b981, 0 0 30px #10b981;
          animation: travelDownSpine 5.5s cubic-bezier(0.4, 0, 0.2, 1) infinite 1.8s;
        }

        .dot-stream-3 {
          background: #ec4899;
          box-shadow: 0 0 16px #ec4899, 0 0 30px #ec4899;
          animation: travelDownSpine 5.5s cubic-bezier(0.4, 0, 0.2, 1) infinite 3.6s;
        }

        @keyframes travelDownSpine {
          0% {
            top: 0%;
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.6);
          }
          8% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.3);
          }
          92% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.3);
          }
          100% {
            top: 100%;
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.6);
          }
        }

        .systems-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          position: relative;
          z-index: 10;
        }

        /* AUTO POP-IN SPRING ANIMATION ON SCROLL */
        .system-card {
          padding: 38px 34px;
          display: flex;
          flex-direction: column;
          border-radius: 24px;
          background: rgba(13, 17, 26, 0.88);
          border: 1px solid rgba(255, 255, 255, 0.11);
          position: relative;
          opacity: 0;
          transform: translateY(55px) scale(0.92);
          transition: 
            opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.25),
            border-color 0.3s ease,
            box-shadow 0.3s ease;
          will-change: opacity, transform;
        }

        /* Pop in when scrolled into view */
        .system-card.is-scrolled-in {
          opacity: 1;
          transform: translateY(0) scale(1);
          border-color: rgba(255, 255, 255, 0.16);
          box-shadow: 0 24px 55px -14px rgba(0, 0, 0, 0.8), 0 0 28px rgba(56, 189, 248, 0.08);
        }

        .system-card.is-scrolled-in:hover {
          border-color: var(--proj-color);
          transform: translateY(-6px) scale(1.018);
          box-shadow: 0 35px 70px -15px rgba(0, 0, 0, 0.9), 0 0 45px var(--proj-color);
        }

        /* Top Connecting Conduit Circuit Bar */
        .conduit-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .conduit-line-group {
          display: flex;
          align-items: center;
          gap: 10px;
          flex: 1;
        }

        .conduit-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          animation: pulseGlow 1.8s infinite;
        }

        .conduit-wire {
          height: 2.5px;
          flex: 1;
          border-radius: 9999px;
          opacity: 0.75;
        }

        .conduit-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 750;
          letter-spacing: 0.08em;
          padding: 3px 11px;
          border-radius: 9999px;
          border: 1px solid;
          background: rgba(0, 0, 0, 0.45);
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .card-badges-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .client-badge {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 750;
          padding: 4px 12px;
          border-radius: 8px;
          border: 1px solid;
          background: rgba(255, 255, 255, 0.03);
        }

        .domain-text {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }

        .impact-pill {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 750;
          padding: 5px 14px;
          border-radius: 9999px;
          border: 1px solid;
        }

        .card-title {
          font-size: 1.88rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 8px;
        }

        .card-subtitle {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }

        .card-case-study-box {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 26px;
          background: rgba(0, 0, 0, 0.42);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 22px;
        }

        .case-study-block {
          display: flex;
          flex-direction: column;
        }

        .problem-block {
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .block-tag {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 750;
          letter-spacing: 0.06em;
          margin-bottom: 8px;
        }

        .problem-tag {
          color: #f87171;
        }

        .solution-tag {
          color: #38bdf8;
        }

        .problem-topic-title {
          font-size: 1.20rem;
          font-weight: 750;
          color: #f8fafc;
          margin-bottom: 8px;
        }

        .case-study-desc {
          font-size: 1.02rem;
          color: var(--text-secondary);
          line-height: 1.68;
          margin: 0;
        }

        .card-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 24px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 16px;
          text-align: center;
        }

        .card-stat-val {
          font-family: var(--font-mono);
          font-size: 1.60rem;
          font-weight: 850;
          display: block;
        }

        .card-stat-lbl {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          margin-top: 4px;
        }

        .card-tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          padding: 5px 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #cbd5e1;
        }

        /* Mobile & Tablet Responsiveness */
        @media (max-width: 1040px) {
          .guided-spine-track {
            display: none;
          }
          .systems-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            padding-left: 0;
          }
        }

        @media (max-width: 600px) {
          .systems-filter-bar {
            gap: 8px;
          }
          .filter-btn {
            padding: 8px 14px;
            font-size: 0.78rem;
            min-height: 38px;
          }
          .system-card {
            padding: 20px 16px;
            border-radius: 16px;
          }
          .conduit-header-bar {
            margin-bottom: 14px;
          }
          .conduit-label {
            display: none;
          }
          .card-title {
            font-size: 1.28rem;
          }
          .card-subtitle {
            font-size: 0.9rem;
            margin-bottom: 16px;
          }
          .card-case-study-box {
            padding: 14px;
            gap: 12px;
            margin-bottom: 16px;
          }
          .problem-topic-title {
            font-size: 0.95rem;
          }
          .case-study-desc {
            font-size: 0.88rem;
          }
          .card-stats-grid {
            gap: 6px;
            padding: 10px 8px;
            margin-bottom: 14px;
          }
          .card-stat-val {
            font-size: 1.0rem;
          }
          .card-stat-lbl {
            font-size: 0.60rem;
          }
          .tech-tag {
            font-size: 0.74rem;
            padding: 4px 9px;
          }
          .domain-text {
            display: none;
          }
          .impact-pill {
            font-size: 0.72rem;
            padding: 4px 10px;
          }
        }
      `}</style>
    </section>
  );
}
