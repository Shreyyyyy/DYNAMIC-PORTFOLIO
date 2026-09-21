'use client';

import React, { useState } from 'react';

export default function VideoScreen() {
  const [activeFrame, setActiveFrame] = useState(2);

  return (
    <div className="screen-panel-inner">
      <div style={{ marginBottom: '8px' }}>
        <span style={{ fontSize: '0.74rem', color: '#94a3b8', textTransform: 'uppercase', display: 'block', letterSpacing: '0.04em' }}>
          MULTIMODAL GENAI · GOOGLE VEO SCRIPT-TO-SCREEN DAG
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.96rem', color: '#f8fafc', fontWeight: 700 }}>
          Autonomous 4-Agent Orchestration with Continuous Character Lock
        </span>
      </div>

      <div className="video-studio-container">
        <div className="video-frame-preview">
          <div className="video-scanline"></div>
          <div style={{ textAlign: 'center', zIndex: 2 }}>
            <div style={{ fontSize: '1.6rem', marginBottom: '4px' }}>🎬</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.84rem', color: '#60a5fa', fontWeight: 700 }}>
              GOOGLE VEO 1080P CINEMATIC FRAME GENERATION
            </div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '2px' }}>
              Director Agent ➔ Storyboard DAG ➔ Video Synthesizer ➔ Automated QA Pass
            </div>
          </div>
        </div>

        <div className="video-timeline-reel">
          {['Frame #01 (Scene Set)', 'Frame #02 (Actor Lock)', 'Frame #03 (Motion)', 'Frame #04 (QA Check)'].map(
            (label, i) => (
              <button
                key={i}
                onClick={() => setActiveFrame(i)}
                className={`video-keyframe ${activeFrame === i ? 'active' : ''}`}
                style={{ cursor: 'pointer', border: '1px solid', flex: 1 }}
              >
                {label}
              </button>
            )
          )}
        </div>

        <div className="terminal-stream-box" style={{ flex: 'none', height: '90px' }}>
          <div className="terminal-line">
            <span className="terminal-prompt" style={{ color: '#60a5fa' }}>veo://render $</span>
            <span>pipeline --scene={activeFrame + 1} --lock=character_mesh --fps=24</span>
          </div>
          <div style={{ color: '#60a5fa', fontSize: '0.80rem', marginTop: '6px' }}>
            &gt; Visual Continuity Confidence: 99.4% · Zero character drift detected.
          </div>
        </div>
      </div>
    </div>
  );
}
