'use client';

import React, { useState, useEffect } from 'react';

export default function HeroScreen() {
  const [promptCount, setPromptCount] = useState(142);
  const [activeLog, setActiveLog] = useState('Apex Swarm initialized. All nodes healthy.');
  const [typedText, setTypedText] = useState('');

  const logs = [
    'Dispatched dynamic task to Mistral SQL Worker.',
    'LangGraph Router validated 4 sub-agent branches.',
    'DeepEval test runner: 98.4% groundedness verified.',
    'Voice stream session synchronized with VAD audio buffer.',
    'Gemini 1.5 Pro reflection loop cleared AST validation in 42ms.',
  ];

  // Dynamic typing animation for the live log
  useEffect(() => {
    let index = 0;
    setTypedText('');
    const interval = setInterval(() => {
      if (index < activeLog.length) {
        setTypedText(activeLog.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [activeLog]);

  const handleTrigger = () => {
    setPromptCount((prev) => prev + 1);
    const randomLog = logs[Math.floor(Math.random() * logs.length)];
    setActiveLog(randomLog);
  };

  return (
    <div className="screen-panel-inner">
      <div className="hero-screen-top">
        <div className="agent-id-box">
          <div className="agent-avatar-ring">
            <img src="/shreyans.jpg" alt="Shreyans Jain" className="agent-avatar-img" />
          </div>
          <div>
            <div className="agent-meta-name">Shreyans Jain</div>
            <div className="agent-meta-role">Applied LLM &amp; Swarm Architect · dentsu</div>
          </div>
        </div>
        <div className="bezel-badge">
          <span className="pulse-dot"></span>
          <span>AVAILABLE FOR NEW ROLES</span>
        </div>
      </div>

      <div className="metric-grid-hero">
        <div className="metric-item-card">
          <span className="metric-val text-glow-cyan">&lt;60s</span>
          <span className="metric-lbl">RAG Search Speed</span>
        </div>
        <div className="metric-item-card">
          <span className="metric-val text-glow-emerald">+30%</span>
          <span className="metric-lbl">Fine-Tuned Accuracy</span>
        </div>
        <div className="metric-item-card">
          <span className="metric-val text-glow-purple">&lt;400ms</span>
          <span className="metric-lbl">Voice Turnaround</span>
        </div>
      </div>

      <div className="terminal-stream-box">
        <div className="terminal-line" style={{ marginBottom: '8px' }}>
          <span className="terminal-prompt">apex://runtime $</span>
          <span>dispatch --mode=swarm --parallel=4 --guardrails=strict</span>
        </div>
        <div className="terminal-live-log">
          <span style={{ color: '#38bdf8' }}>&gt; {typedText}</span>
          <span className="terminal-cursor">▋</span>
        </div>
        <div className="terminal-action-row">
          <span className="requests-counter">Requests Processed: <strong>{promptCount}</strong></span>
          <button onClick={handleTrigger} className="btn-terminal-trigger">
            ⚡ Trigger Swarm Event
          </button>
        </div>
      </div>

      <style jsx>{`
        .hero-screen-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .agent-id-box {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .agent-avatar-ring {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          border: 2px solid rgba(56, 189, 248, 0.45);
          overflow: hidden;
          position: relative;
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
          flex-shrink: 0;
        }

        .agent-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .agent-meta-name {
          font-size: 1.12rem;
          font-weight: 700;
          color: #ffffff;
        }

        .agent-meta-role {
          font-size: 0.82rem;
          font-family: var(--font-mono);
          color: var(--accent-cyan);
          margin-top: 2px;
        }

        .metric-grid-hero {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 16px;
        }

        .metric-item-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 12px 14px;
        }

        .metric-val {
          font-family: var(--font-mono);
          font-size: 1.45rem;
          font-weight: 800;
          display: block;
        }

        .metric-lbl {
          font-size: 0.74rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-top: 2px;
        }

        .terminal-stream-box {
          background: #04070d;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 14px 16px;
          font-family: var(--font-mono);
          font-size: 0.84rem;
          color: #94a3b8;
          line-height: 1.55;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .terminal-live-log {
          font-size: 0.86rem;
          min-height: 26px;
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .terminal-cursor {
          color: #38bdf8;
          animation: blinkCursor 0.8s infinite;
          font-size: 0.85rem;
        }

        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .terminal-action-row {
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 8px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .requests-counter {
          font-size: 0.76rem;
          color: #64748b;
        }

        .requests-counter strong {
          color: #f8fafc;
        }

        .btn-terminal-trigger {
          padding: 6px 14px;
          font-size: 0.76rem;
          background: rgba(56, 189, 248, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.35);
          color: #38bdf8;
          border-radius: 8px;
          cursor: pointer;
          font-family: var(--font-mono);
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .btn-terminal-trigger:hover {
          background: rgba(56, 189, 248, 0.25);
          transform: translateY(-1px);
        }

        @media (max-width: 600px) {
          .metric-val {
            font-size: 1.15rem;
          }
          .metric-lbl {
            font-size: 0.65rem;
          }
        }
      `}</style>
    </div>
  );
}
