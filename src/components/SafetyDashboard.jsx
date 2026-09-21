'use client';

import React from 'react';

export default function SafetyDashboard() {
  const benchmarks = [
    { label: 'RAG Groundedness & Faithfulness (Enterprise Docs)', score: '98.4%', width: '98.4%', color: '#10b981', framework: 'DeepEval RAG Triad' },
    { label: 'Tool Calling Argument Precision (LoRA Mistral 7B)', score: '97.1% (+30% Lift)', width: '97.1%', color: '#38bdf8', framework: 'AST Schema Evaluator' },
    { label: 'Zero Hallucination Guardrail Interception Rate', score: '99.6%', width: '99.6%', color: '#c084fc', framework: 'Guardrails-AI' },
    { label: 'Voice AI Full-Duplex Audio Turnaround SLA', score: '<400ms', width: '92%', color: '#f59e0b', framework: 'WebSocket VAD Engine' },
  ];

  const certs = [
    { title: 'Develop GenAI Apps with Gemini and Streamlit', badge: 'Google Cloud' },
    { title: 'Intermediate GCP: AI/ML Services in Google Cloud', badge: 'Google Cloud' },
    { title: 'Prompt Design in Vertex AI Skill Badge', badge: 'Vertex AI' },
    { title: 'Build Real World AI Applications with Gemini & Imagen', badge: 'Gemini' },
    { title: 'Explore Generative AI with Gemini API in Vertex AI', badge: 'Vertex AI' },
  ];

  return (
    <section className="container-custom" id="act-safety" style={{ paddingTop: '90px', paddingBottom: '100px' }}>
      <div className="section-header">
        <div className="glass-pill" style={{ marginBottom: '14px' }}>
          <span className="pulse-dot"></span>
          <span>ENTERPRISE TRUST · OBSERVABILITY &amp; GUARDRAILS</span>
        </div>
        <h2>
          Safe in Production Execution.<br />
          <span className="text-glow-emerald">Validated by Google Cloud &amp; DeepEval.</span>
        </h2>
        <p>
          Mission-critical AI requires synthetic evaluation, deterministic guardrails, and strict zero-hallucination compliance before deployment.
        </p>
      </div>

      <div className="safety-dashboard-card glass-panel">
        {/* Top Summary Banner */}
        <div className="dashboard-summary-row">
          <div className="summary-left">
            <h3 className="summary-title">Continuous Synthetic Telemetry &amp; Verification</h3>
            <p className="summary-desc">
              Automated unit and regression evaluation pipelines measuring semantic faithfulness, SQL injection immunity, and PII redaction across every pull request.
            </p>
          </div>

          <div className="summary-stat-badge">
            <span className="stat-large text-glow-emerald">-40%</span>
            <span className="stat-subtitle">Production Execution Faults</span>
          </div>
        </div>

        {/* Benchmarks List */}
        <div className="benchmarks-container">
          {benchmarks.map((b, i) => (
            <div key={i} className="benchmark-item">
              <div className="benchmark-meta-row">
                <div className="benchmark-name-group">
                  <span className="benchmark-name">{b.label}</span>
                  <span className="benchmark-framework-tag">{b.framework}</span>
                </div>
                <span className="benchmark-score" style={{ color: b.color }}>
                  {b.score}
                </span>
              </div>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{
                    '--target-width': b.width,
                    background: b.color,
                    boxShadow: `0 0 14px ${b.color}80`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Cloud Certifications */}
        <div className="certs-section">
          <div className="certs-header">
            <span className="certs-icon">✦</span>
            <span>GOOGLE CLOUD &amp; VERTEX AI SKILL ACCREDITATIONS</span>
          </div>
          <div className="certs-grid">
            {certs.map((c, idx) => (
              <div key={idx} className="cert-card">
                <span className="cert-badge">{c.badge}</span>
                <span className="cert-title">{c.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .safety-dashboard-card {
          padding: 38px 32px;
          border-radius: 24px;
          background: rgba(13, 17, 26, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.1);
          opacity: 0;
          transform: perspective(1000px) translateY(55px) scale(0.94);
          transition: 
            opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.25),
            box-shadow 0.3s ease;
        }

        .safety-dashboard-card.is-scrolled-in {
          opacity: 1;
          transform: perspective(1000px) translateY(0) scale(1);
          box-shadow: 0 28px 65px -15px rgba(0, 0, 0, 0.85), 0 0 38px rgba(16, 185, 129, 0.14);
        }

        .safety-dashboard-card .progress-fill {
          width: 0;
          transition: width 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
        }

        .safety-dashboard-card.is-scrolled-in .progress-fill {
          width: var(--target-width);
        }

        .dashboard-summary-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 34px;
          padding-bottom: 26px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .summary-left {
          max-width: 720px;
        }

        .summary-title {
          font-size: clamp(1.2rem, 3.5vw, 1.85rem);
          font-weight: 750;
          color: #ffffff;
          margin-bottom: 10px;
        }

        .summary-desc {
          font-size: 1.08rem;
          color: var(--text-secondary);
          line-height: 1.68;
          margin: 0;
        }

        .summary-stat-badge {
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.35);
          border-radius: 18px;
          padding: 18px 28px;
          text-align: center;
          min-width: 180px;
        }

        .stat-large {
          font-family: var(--font-mono);
          font-size: 2.6rem;
          font-weight: 850;
          display: block;
        }

        .stat-subtitle {
          font-size: 0.80rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .benchmarks-container {
          display: flex;
          flex-direction: column;
          gap: 26px;
          margin-bottom: 42px;
        }

        .benchmark-item {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .benchmark-meta-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .benchmark-name-group {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .benchmark-name {
          font-size: clamp(0.92rem, 2.5vw, 1.15rem);
          font-weight: 650;
          color: #f1f5f9;
        }

        .benchmark-framework-tag {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          padding: 4px 10px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: var(--text-muted);
        }

        .benchmark-score {
          font-family: var(--font-mono);
          font-size: 1.25rem;
          font-weight: 850;
        }

        .progress-track {
          height: 11px;
          background: rgba(255, 255, 255, 0.07);
          border-radius: 9999px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 9999px;
          transition: width 0.8s var(--ease-spring);
        }

        .certs-section {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 28px;
        }

        .certs-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
          letter-spacing: 0.06em;
          margin-bottom: 18px;
        }

        .certs-icon {
          color: var(--accent-cyan);
        }

        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: 14px;
        }

        .cert-card {
          padding: 14px 18px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          display: flex;
          flex-direction: column;
          gap: 5px;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .cert-card:hover {
          transform: translateY(-2px);
          border-color: rgba(56, 189, 248, 0.3);
        }

        .cert-badge {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--accent-cyan);
          text-transform: uppercase;
        }

        .cert-title {
          font-size: 0.90rem;
          color: #cbd5e1;
          line-height: 1.45;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .safety-dashboard-card {
            padding: 20px 14px;
          }
          .dashboard-summary-row {
            flex-direction: column;
            gap: 14px;
            margin-bottom: 24px;
            padding-bottom: 18px;
          }
          .summary-stat-badge {
            width: 100%;
            padding: 14px 20px;
          }
          .stat-large {
            font-size: 2rem;
          }
          .benchmark-meta-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
          .benchmark-score {
            font-size: 1.05rem;
          }
          .certs-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
