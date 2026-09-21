'use client';

import React, { useState } from 'react';

export default function RagScreen() {
  const [activeQuery, setActiveQuery] = useState('enterprise_sla_spec.pdf#page=42');
  const [similarity, setSimilarity] = useState(0.984);

  const simulateLookup = () => {
    const queries = [
      'enterprise_sla_spec.pdf#page=42 (98.4% match)',
      'flipkart_catalog_schema.json (99.1% match)',
      'multimodal_audio_spec.proto (97.8% match)',
      'guardrails_telemetry_v2.md (99.5% match)',
    ];
    const picked = queries[Math.floor(Math.random() * queries.length)];
    setActiveQuery(picked);
    setSimilarity(+(0.97 + Math.random() * 0.025).toFixed(3));
  };

  return (
    <div className="screen-panel-inner">
      <div className="rag-matrix-canvas">
        <div className="rag-flow-bar">
          <div>
            <span style={{ fontSize: '0.74rem', color: '#94a3b8', textTransform: 'uppercase', display: 'block', letterSpacing: '0.04em' }}>
              HYBRID RETRIEVAL PIPELINE · DENSE + BM25 FUSION
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.96rem', color: '#f8fafc', fontWeight: 700 }}>
              Reciprocal Rank Fusion &amp; Cross-Encoder Re-Ranking
            </span>
          </div>
          <div className="rag-score-pill">
            ⚡ {(similarity * 100).toFixed(1)}% FAITHFULNESS
          </div>
        </div>

        <div className="rag-chunks-grid">
          <div className="rag-chunk-card">
            <div className="rag-chunk-title">Chunk #891 · Dense Vector Space</div>
            <div className="rag-chunk-desc">
              Extracted SLA penalties from 200+ page enterprise RFP specification with exact section citations.
            </div>
          </div>
          <div className="rag-chunk-card">
            <div className="rag-chunk-title">Chunk #892 · Context Graph &amp; BM25</div>
            <div className="rag-chunk-desc">
              Synthesized cross-document citations across engineering manuals in under 60 seconds.
            </div>
          </div>
        </div>

        <div className="terminal-stream-box" style={{ flex: 'none', height: '110px' }}>
          <div className="terminal-line">
            <span className="terminal-prompt">rag://vector-db $</span>
            <span>query --top_k=4 --hybrid=true --rerank=cross_encoder</span>
          </div>
          <div style={{ color: '#34d399', fontSize: '0.84rem', marginTop: '6px', fontWeight: 600 }}>
            &gt; Citation Resolved: {activeQuery}
          </div>
          <div style={{ textAlign: 'right', marginTop: '8px' }}>
            <button
              onClick={simulateLookup}
              style={{
                padding: '5px 12px',
                fontSize: '0.74rem',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                color: '#34d399',
                borderRadius: '8px',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
              }}
            >
              🔍 Query Next Chunk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
