'use client';

import React, { useState, useEffect, useRef } from 'react';
import { playClick } from '../utils/sound';

const systems = [
  {
    id: 'proj-flipkart',
    category: 'swarms',
    domain: 'ENTERPRISE ANALYTICS · FLIPKART',
    client: 'Flipkart',
    nodeColor: '#38bdf8',
    impact: '⚡ <2% Error Loop',
    title: 'Talk2Data',
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
    title: 'Enterprise RAG Engine',
    subtitle: 'Sub-Minute Multimodal Document Search',
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
    title: 'Voice AI Agent',
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
    title: 'AI Film Studio',
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
    title: 'Creativium Studio',
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
    title: 'RFP Intelligence',
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

export default function SystemsPortfolio() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const orbRef = useRef(null);
  const spineProgressRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const activeIdxRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    // Disable scroll-driven on mobile
    if (typeof window === 'undefined' || window.innerWidth < 900) return;

    const section = sectionRef.current;
    if (!section) return;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const totalScrollable = section.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(1, scrolled / totalScrollable);
      const rawProgress = progress * systems.length;
      const idx = Math.min(Math.floor(rawProgress), systems.length - 1);

      if (idx !== activeIdxRef.current) {
        activeIdxRef.current = idx;
        setActiveIdx(idx);
      }

      // ── Direct DOM transforms for 60fps card animations ──
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const relP = rawProgress - i;

        let rotY = 0, scaleV = 1, transZ = 0, transX = 0, opV = 1;

        if (relP <= -0.06) {
          // Fully past — flipped away
          rotY = -178; scaleV = 0.72; transZ = -80; transX = -90; opV = 0;
        } else if (relP < 0.06) {
          // Flip IN zone
          const t = (relP + 0.06) / 0.12;
          rotY = (1 - t) * -90;
          scaleV = 0.72 + t * 0.33;
          transZ = -80 + t * 120;
          transX = -90 + t * 90;
          opV = t;
        } else if (relP < 0.80) {
          // Active — face-forward hover
          rotY = 0; scaleV = 1.05; transZ = 50; transX = 0; opV = 1;
        } else if (relP < 1.0) {
          // Flip OUT zone
          const t = (relP - 0.80) / 0.20;
          rotY = t * -90;
          scaleV = 1.05 - t * 0.33;
          transZ = 50 - t * 130;
          transX = t * -90;
          opV = 1 - t * 0.85;
        } else {
          // Future — stacked in perspective
          const d = relP - 1;
          rotY = Math.min(d * 28 + 8, 68);
          scaleV = Math.max(0.65, 1 - d * 0.13);
          transZ = Math.max(-160, -(d + 1) * 52);
          transX = d * 16;
          opV = Math.max(0, 1 - d * 0.52);
        }

        el.style.transform = `perspective(1400px) rotateY(${rotY}deg) translateX(${transX}px) translateZ(${transZ}px) scale(${scaleV})`;
        el.style.opacity = opV;
        el.style.zIndex = String(100 - Math.round(Math.abs(relP) * 5));
      });

      // ── Move guide orb along spine ──
      if (orbRef.current) {
        orbRef.current.style.top = `${10 + progress * 78}%`;
      }
      if (spineProgressRef.current) {
        spineProgressRef.current.style.height = `${progress * 100}%`;
      }
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const sys = systems[activeIdx];

  return (
    <section
      ref={sectionRef}
      id="act-systems"
      className="ssp-section"
    >
      {/* ═══════════════════════════════════════
          DESKTOP: Sticky Scroll-Driven Layout
      ═══════════════════════════════════════ */}
      <div className="ssp-sticky">
        {/* Top bar */}
        <div className="ssp-top-bar container-custom">
          <div className="glass-pill">
            <span className="pulse-dot" />
            <span>PRODUCTION ARCHITECTURES &nbsp;·&nbsp; {activeIdx + 1}/{systems.length}</span>
          </div>
          <div className="ssp-scroll-hint">
            <span>↓</span>
            <span>Scroll to explore systems</span>
          </div>
        </div>

        <div className="ssp-layout">

          {/* ── LEFT: 3D Card Stack ── */}
          <div className="ssp-card-col">
            <div className="ssp-card-arena">
              {systems.map((s, i) => (
                <div
                  key={s.id}
                  ref={el => (cardRefs.current[i] = el)}
                  className="ssp-flip-card"
                  style={{ '--cc': s.nodeColor }}
                >
                  {/* Glow aura */}
                  <div className="ssp-card-aura" style={{ background: `radial-gradient(ellipse, ${s.nodeColor}28 0%, transparent 70%)` }} />

                  {/* Node badge */}
                  <div className="ssp-card-node">
                    <span style={{ color: s.nodeColor }}>NODE</span>
                    <span className="ssp-node-num" style={{ color: s.nodeColor }}>·{String(i + 1).padStart(2, '0')}</span>
                  </div>

                  {/* Client + impact */}
                  <div className="ssp-card-header-row">
                    <span className="ssp-client" style={{ color: s.nodeColor }}>{s.client}</span>
                    <span className="ssp-impact-tag" style={{ color: s.nodeColor, borderColor: `${s.nodeColor}50`, background: `${s.nodeColor}12` }}>
                      {s.impact}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="ssp-card-title">{s.title}</h3>
                  <div className="ssp-card-sub">{s.subtitle}</div>

                  {/* Mini stats */}
                  <div className="ssp-mini-stats">
                    {s.stats.map((st, si) => (
                      <div key={si} className="ssp-mini-stat">
                        <span className="ssp-ms-val" style={{ color: st.color }}>{st.val}</span>
                        <span className="ssp-ms-lbl">{st.lbl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech (first 3) */}
                  <div className="ssp-card-tech">
                    {s.tech.slice(0, 3).map((t, ti) => (
                      <span key={ti} className="ssp-card-tech-pill">{t}</span>
                    ))}
                    {s.tech.length > 3 && (
                      <span className="ssp-card-tech-pill ssp-more">+{s.tech.length - 3}</span>
                    )}
                  </div>

                  {/* Bottom accent line */}
                  <div className="ssp-card-bottom-line" style={{ background: `linear-gradient(90deg, transparent, ${s.nodeColor}, transparent)` }} />
                </div>
              ))}
            </div>
          </div>

          {/* ── CENTER: Guide Spine ── */}
          <div className="ssp-spine-col">
            <div className="ssp-spine-track">
              {/* Background line */}
              <div className="ssp-spine-bg" />
              {/* Progress fill */}
              <div ref={spineProgressRef} className="ssp-spine-fill" style={{ background: `linear-gradient(180deg, #38bdf8 0%, #c084fc 50%, ${sys.nodeColor} 100%)` }} />

              {/* Waypoint dots */}
              {systems.map((s, i) => (
                <div
                  key={i}
                  className={`ssp-wpt ${i <= activeIdx ? 'passed' : ''} ${i === activeIdx ? 'cur' : ''}`}
                  style={{ top: `${10 + (i / (systems.length - 1)) * 78}%` }}
                >
                  <div
                    className="ssp-wpt-dot"
                    style={{
                      background: i <= activeIdx ? s.nodeColor : 'rgba(255,255,255,0.18)',
                      boxShadow: i === activeIdx ? `0 0 14px ${s.nodeColor}, 0 0 28px ${s.nodeColor}60` : 'none',
                    }}
                  />
                  {i === activeIdx && (
                    <div className="ssp-wpt-ring" style={{ borderColor: s.nodeColor }} />
                  )}
                </div>
              ))}

              {/* Traveling guide orb */}
              <div
                ref={orbRef}
                className="ssp-guide-orb"
                style={{ background: sys.nodeColor, boxShadow: `0 0 20px ${sys.nodeColor}, 0 0 40px ${sys.nodeColor}60` }}
              >
                <span className="ssp-orb-num">{String(activeIdx + 1).padStart(2, '0')}</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Detail Panel ── */}
          <div className="ssp-detail-col">
            <div key={activeIdx} className="ssp-detail-inner">
              {/* Domain */}
              <div className="ssp-dp-domain" style={{ color: sys.nodeColor }}>
                {sys.domain}
              </div>

              {/* Title */}
              <h2 className="ssp-dp-title">{sys.title}</h2>
              <p className="ssp-dp-subtitle">{sys.subtitle}</p>

              {/* Problem block */}
              <div className="ssp-dp-block ssp-problem">
                <div className="ssp-dp-tag ssp-ptag">⚠ BUSINESS PROBLEM</div>
                <div className="ssp-dp-ph">{sys.problemTopic}</div>
                <p className="ssp-dp-desc">{sys.problemDesc}</p>
              </div>

              {/* Solution block */}
              <div className="ssp-dp-block ssp-solution">
                <div className="ssp-dp-tag ssp-stag">⚡ ENGINEERED SOLUTION</div>
                <p className="ssp-dp-desc">{sys.solutionDesc}</p>
              </div>

              {/* Stats */}
              <div className="ssp-dp-stats">
                {sys.stats.map((st, i) => (
                  <div key={i} className="ssp-dp-stat">
                    <span className="ssp-dp-sv" style={{ color: st.color }}>{st.val}</span>
                    <span className="ssp-dp-sl">{st.lbl}</span>
                  </div>
                ))}
              </div>

              {/* Tech */}
              <div className="ssp-dp-tech">
                {sys.tech.map((t, i) => (
                  <span key={i} className="ssp-dp-tech-tag" style={{ borderColor: `${sys.nodeColor}40`, color: `${sys.nodeColor}` }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Progress bar */}
              <div className="ssp-dp-progress">
                <div className="ssp-dp-prog-track">
                  <div
                    className="ssp-dp-prog-fill"
                    style={{
                      width: `${((activeIdx + 1) / systems.length) * 100}%`,
                      background: sys.nodeColor,
                    }}
                  />
                </div>
                <span className="ssp-dp-prog-lbl">{activeIdx + 1} of {systems.length} Systems</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════════════════════════════════
          MOBILE: Simple vertical card list
      ═══════════════════════════════════════ */}
      <div className="ssp-mobile container-custom">
        <div className="section-header">
          <div className="glass-pill" style={{ marginBottom: '16px' }}>
            <span className="pulse-dot" />
            <span>ENTERPRISE PRODUCTION ARCHITECTURES · HIGH IMPACT</span>
          </div>
          <h2>
            High-Stakes Business Problems.<br />
            <span className="text-glow-gradient">Engineered Production Solutions.</span>
          </h2>
          <p>Each architecture below was shipped to resolve critical commercial bottlenecks.</p>
        </div>

        <div className="ssp-mobile-grid">
          {systems.map((s, i) => (
            <article key={s.id} className="ssp-mobile-card scroll-element" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="ssp-mc-header">
                <span className="ssp-mc-client" style={{ color: s.nodeColor }}>{s.client}</span>
                <span className="ssp-mc-impact" style={{ color: s.nodeColor, borderColor: `${s.nodeColor}50`, background: `${s.nodeColor}12` }}>{s.impact}</span>
              </div>
              <h3 className="ssp-mc-title">{s.title}</h3>
              <p className="ssp-mc-desc">{s.solutionDesc}</p>
              <div className="ssp-mc-stats">
                {s.stats.map((st, si) => (
                  <div key={si} className="ssp-mc-stat">
                    <span style={{ color: st.color, fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: '1.1rem' }}>{st.val}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem', textTransform: 'uppercase' }}>{st.lbl}</span>
                  </div>
                ))}
              </div>
              <div className="ssp-mc-tech">
                {s.tech.slice(0, 4).map((t, ti) => (
                  <span key={ti} className="ssp-mc-tag">{t}</span>
                ))}
              </div>
              <div className="ssp-mc-accent" style={{ background: `linear-gradient(90deg, ${s.nodeColor}, transparent)` }} />
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* ─────────────────────────────────────────
           SECTION WRAPPER
        ───────────────────────────────────────── */
        .ssp-section {
          position: relative;
        }

        /* ─────────────────────────────────────────
           DESKTOP STICKY VIEWPORT
        ───────────────────────────────────────── */
        .ssp-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background: var(--bg-primary);
        }

        .ssp-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 22px;
          padding-bottom: 16px;
          flex-shrink: 0;
        }

        .ssp-scroll-hint {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-dim);
          letter-spacing: 0.05em;
          animation: hintBounce 2.2s ease-in-out infinite;
        }

        @keyframes hintBounce {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(4px); opacity: 1; }
        }

        /* ─────────────────────────────────────────
           3-COLUMN LAYOUT
        ───────────────────────────────────────── */
        .ssp-layout {
          display: grid;
          grid-template-columns: 43% 7% 50%;
          flex: 1;
          min-height: 0;
          max-width: 1380px;
          margin: 0 auto;
          width: 100%;
          padding: 0 32px;
        }

        /* ─────────────────────────────────────────
           LEFT: CARD STACK
        ───────────────────────────────────────── */
        .ssp-card-col {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .ssp-card-arena {
          position: relative;
          width: 370px;
          height: 500px;
          transform-style: preserve-3d;
        }

        .ssp-flip-card {
          position: absolute;
          inset: 0;
          border-radius: 22px;
          background: rgba(22, 11, 44, 0.94);
          border: 1px solid rgba(251, 191, 36, 0.22);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(251, 191, 36, 0.1);
          padding: 28px 26px 22px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transform-origin: center center;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          will-change: transform, opacity;
          cursor: default;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .ssp-card-aura {
          position: absolute;
          inset: -40px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .ssp-card-node {
          display: flex;
          align-items: center;
          gap: 3px;
          font-family: var(--font-mono);
          font-size: 0.70rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 18px;
          position: relative;
          z-index: 1;
        }
        .ssp-node-num {
          font-size: 0.70rem;
        }

        .ssp-card-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
          flex-wrap: wrap;
        }

        .ssp-client {
          font-family: var(--font-mono);
          font-weight: 800;
          font-size: 0.88rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .ssp-impact-tag {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 9999px;
          border: 1px solid;
          white-space: nowrap;
        }

        .ssp-card-title {
          font-size: 2.1rem;
          font-weight: 850;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 6px;
          position: relative;
          z-index: 1;
        }

        .ssp-card-sub {
          font-size: 0.92rem;
          color: var(--text-muted);
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .ssp-mini-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 14px;
          padding: 14px 10px;
          margin-bottom: 18px;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .ssp-mini-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .ssp-ms-val {
          font-family: var(--font-mono);
          font-weight: 850;
          font-size: 1.05rem;
          line-height: 1.2;
        }

        .ssp-ms-lbl {
          font-family: var(--font-mono);
          font-size: 0.60rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .ssp-card-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: auto;
          position: relative;
          z-index: 1;
        }

        .ssp-card-tech-pill {
          font-family: var(--font-mono);
          font-size: 0.70rem;
          padding: 4px 10px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #94a3b8;
        }

        .ssp-more {
          color: var(--text-dim);
          border-style: dashed;
        }

        .ssp-card-bottom-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          opacity: 0.7;
        }

        /* ─────────────────────────────────────────
           CENTER: GUIDE SPINE
        ───────────────────────────────────────── */
        .ssp-spine-col {
          display: flex;
          justify-content: center;
          align-items: stretch;
          position: relative;
        }

        .ssp-spine-track {
          position: relative;
          width: 4px;
          margin: 20px 0;
        }

        .ssp-spine-bg {
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.10);
          border-radius: 9999px;
        }

        .ssp-spine-fill {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 0;
          border-radius: 9999px;
          box-shadow: 0 0 14px rgba(56, 189, 248, 0.6);
          transition: height 0.1s linear;
        }

        .ssp-wpt {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          pointer-events: none;
        }

        .ssp-wpt-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid #0b0f19;
          transition: all 0.3s ease;
        }

        .ssp-wpt-ring {
          position: absolute;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 1.5px solid;
          animation: sspRipple 1.8s infinite;
          pointer-events: none;
        }

        @keyframes sspRipple {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        .ssp-guide-orb {
          position: absolute;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
          transition: top 0.12s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
        }

        .ssp-orb-num {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
        }

        /* ─────────────────────────────────────────
           RIGHT: DETAIL PANEL
        ───────────────────────────────────────── */
        .ssp-detail-col {
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 0 24px 0 32px;
        }

        .ssp-detail-inner {
          width: 100%;
          animation: dpFadeIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes dpFadeIn {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .ssp-dp-domain {
          font-family: var(--font-mono);
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .ssp-dp-title {
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 850;
          color: #ffffff;
          letter-spacing: -0.035em;
          line-height: 1.05;
          margin-bottom: 6px;
        }

        .ssp-dp-subtitle {
          font-size: 1.05rem;
          color: var(--text-muted);
          margin-bottom: 20px;
        }

        .ssp-dp-block {
          border-radius: 14px;
          padding: 16px 18px;
          margin-bottom: 14px;
        }

        .ssp-problem {
          background: rgba(248, 113, 113, 0.06);
          border: 1px solid rgba(248, 113, 113, 0.2);
        }

        .ssp-solution {
          background: rgba(56, 189, 248, 0.06);
          border: 1px solid rgba(56, 189, 248, 0.18);
        }

        .ssp-dp-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 750;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .ssp-ptag { color: #f87171; }
        .ssp-stag { color: #38bdf8; }

        .ssp-dp-ph {
          font-size: 1.02rem;
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 6px;
          line-height: 1.4;
        }

        .ssp-dp-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin: 0;
        }

        .ssp-dp-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 14px;
          padding: 14px;
          margin-bottom: 14px;
          text-align: center;
        }

        .ssp-dp-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .ssp-dp-sv {
          font-family: var(--font-mono);
          font-weight: 850;
          font-size: 1.25rem;
        }

        .ssp-dp-sl {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .ssp-dp-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 18px;
        }

        .ssp-dp-tech-tag {
          font-family: var(--font-mono);
          font-size: 0.76rem;
          padding: 5px 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid;
        }

        .ssp-dp-progress {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .ssp-dp-prog-track {
          flex: 1;
          height: 4px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 9999px;
          overflow: hidden;
        }

        .ssp-dp-prog-fill {
          height: 100%;
          border-radius: 9999px;
          transition: width 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ssp-dp-prog-lbl {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          color: var(--text-dim);
          white-space: nowrap;
        }

        /* ─────────────────────────────────────────
           SECTION HEIGHT DRIVER (desktop only)
        ───────────────────────────────────────── */
        .ssp-section {
          height: calc(${systems.length} * 65vh + 35vh);
        }

        /* ─────────────────────────────────────────
           MOBILE: simple vertical list
        ───────────────────────────────────────── */
        .ssp-mobile {
          display: none;
          padding-top: 36px;
          padding-bottom: 50px;
        }

        .ssp-mobile-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 32px;
        }

        .ssp-mobile-card {
          background: rgba(13, 17, 26, 0.88);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          padding: 22px 18px;
          position: relative;
          overflow: hidden;
        }

        .ssp-mc-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
          flex-wrap: wrap;
          gap: 8px;
        }

        .ssp-mc-client {
          font-family: var(--font-mono);
          font-weight: 800;
          font-size: 0.82rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .ssp-mc-impact {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 9999px;
          border: 1px solid;
        }

        .ssp-mc-title {
          font-size: 1.45rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .ssp-mc-desc {
          font-size: 0.90rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 14px;
        }

        .ssp-mc-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          padding: 10px;
          text-align: center;
          margin-bottom: 12px;
        }

        .ssp-mc-stat {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .ssp-mc-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .ssp-mc-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          padding: 4px 9px;
          border-radius: 6px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #94a3b8;
        }

        .ssp-mc-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          bottom: 0;
          border-radius: 18px 0 0 18px;
        }

        /* ─────────────────────────────────────────
           RESPONSIVE SWITCH
        ───────────────────────────────────────── */
        @media (min-width: 900px) {
          .ssp-sticky { display: flex; }
          .ssp-mobile { display: none !important; }
        }

        @media (max-width: 899px) {
          .ssp-section { height: auto !important; }
          .ssp-sticky { display: none !important; }
          .ssp-mobile { display: block !important; }
        }
      `}</style>
    </section>
  );
}
