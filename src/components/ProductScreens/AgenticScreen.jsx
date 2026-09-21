'use client';

import React, { useState } from 'react';

export default function AgenticScreen() {
  const [activeNode, setActiveNode] = useState(0);
  const nodes = [
    { title: 'Supervisor Node', desc: 'LangGraph Router', role: 'Decomposing natural inquiry into execution sub-graphs' },
    { title: 'Worker Agent', desc: 'Mistral SQL FT', role: 'Generating zero-shot schema reflected SQL with reflection' },
    { title: 'Evaluation Guard', desc: 'DeepEval Interceptor', role: 'AST syntax verification & zero hallucination enforcement' },
  ];

  const handleStep = () => {
    setActiveNode((prev) => (prev + 1) % nodes.length);
  };

  return (
    <div className="screen-panel-inner">
      <div style={{ marginBottom: '12px' }}>
        <span style={{ fontSize: '0.74rem', color: '#94a3b8', textTransform: 'uppercase', display: 'block', letterSpacing: '0.04em' }}>
          MULTI-AGENT ORCHESTRATION GRAPH · LANGGRAPH
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.96rem', color: '#f8fafc', fontWeight: 700 }}>
          Stateful Directed Acyclic Graph with Self-Healing Loops
        </span>
      </div>

      <div className="swarm-dag-container">
        {nodes.map((n, i) => (
          <React.Fragment key={n.title}>
            <div
              className={`swarm-node ${activeNode === i ? 'active-pulse' : ''}`}
              onClick={() => setActiveNode(i)}
              style={{ cursor: 'pointer' }}
            >
              <div className="swarm-node-title">{n.title}</div>
              <div className="swarm-node-sub">{n.desc}</div>
            </div>
            {i < nodes.length - 1 && <span className="swarm-connector-arrow">➔</span>}
          </React.Fragment>
        ))}
      </div>

      <div className="terminal-stream-box" style={{ marginTop: '14px', flex: 'none', height: '110px' }}>
        <div className="terminal-line">
          <span className="terminal-prompt" style={{ color: '#c084fc' }}>swarm://dag $</span>
          <span>exec --subgraph=flipkart_talk2data --node={activeNode + 1}</span>
        </div>
        <div style={{ color: '#c084fc', fontSize: '0.82rem', marginTop: '6px', fontWeight: 600 }}>
          &gt; Step [{activeNode + 1}/3] ({nodes[activeNode].title}): {nodes[activeNode].role}
        </div>
        <div style={{ textAlign: 'right', marginTop: '8px' }}>
          <button
            onClick={handleStep}
            style={{
              padding: '5px 12px',
              fontSize: '0.74rem',
              background: 'rgba(168, 85, 247, 0.15)',
              border: '1px solid rgba(168, 85, 247, 0.35)',
              color: '#c084fc',
              borderRadius: '8px',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
            }}
          >
            ⚡ Step DAG Execution (Next Agent)
          </button>
        </div>
      </div>
    </div>
  );
}
